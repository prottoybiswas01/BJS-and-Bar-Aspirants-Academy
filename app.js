const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const APP_CONFIG = Object.freeze({
  dataMode: "remote",
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
  remoteRequestTimeoutMs: 15000,
  portalDataCacheTtlMs: 5 * 60 * 1000,
  studentInboxPollIntervalMs: 15000,
});

const SESSION_STORAGE_KEYS = Object.freeze({
  activeStudentId: "ain-pathshala.activeStudentId",
  openCourseId: "ain-pathshala.openCourseId",
  pendingCourseRequestIds: "ain-pathshala.pendingCourseRequestIds",
  loginQuery: "ain-pathshala.loginQuery",
  loginPassword: "ain-pathshala.loginPassword",
  portalDataSnapshot: "ain-pathshala.portalDataSnapshot",
});

const LOOKUP_DIGIT_MAP = Object.freeze({
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
});

const LOCALIZED_DIGIT_RANGES = Object.freeze([
  Object.freeze({ start: 0x09e6, end: 0x09ef }),
  Object.freeze({ start: 0x0660, end: 0x0669 }),
  Object.freeze({ start: 0x06f0, end: 0x06f9 }),
]);

const APPROVED_LOGIN_VALUES = Object.freeze([
  "approved",
  "yes",
  "true",
  "allow",
  "allowed",
  "active",
  "1",
]);

const PREVIEW_LOGIN_VALUES = Object.freeze([
  "preview",
  "viewonly",
  "readonly",
  "audit",
  "curriculum",
  "classlist",
  "listonly",
  "outline",
]);

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const STUDENT_FIELD_KEYS = Object.freeze({
  id: ["id", "studentId", "studentID", "userId", "userID", "memberId", "registrationId", "roll", "rollNumber"],
  name: ["name", "fullName", "studentName", "userName"],
  phone: ["phone", "phoneNumber", "mobile", "mobileNumber", "contact", "contactNumber", "whatsapp", "whatsappNumber"],
  email: ["email", "emailAddress", "mail", "gmail"],
  batch: ["batch", "batchName", "group", "groupName"],
  session: ["session", "sessionName", "shift"],
  joinedOn: ["joinedOn", "joinDate", "createdOn", "admittedOn", "admissionDate", "enrolledOn"],
  status: ["status", "studentStatus", "accountStatus", "activeStatus"],
  profileImage: ["profileImage", "photo", "imageUrl", "avatar", "profilePhoto"],
  password: ["password", "loginPassword", "portalPassword", "studentPassword", "passcode", "pin", "loginPin"],
  loginApproval: ["loginApproval", "approval", "loginApproved", "portalApproval", "approvalStatus", "accessApproval"],
  portalAccessMode: ["portalAccessMode", "accessMode", "studentAccessMode", "videoAccessMode", "portalMode"],
  passwordResetUrl: ["passwordResetUrl", "resetPasswordUrl", "forgotPasswordUrl", "passwordResetLink"],
  highlight: ["highlight", "note", "remarks", "message"],
  enrolledCourseIds: ["enrolledCourseIds", "courseIds", "courses", "assignedCourses", "enrolledCourses"],
  completedLessonIds: ["completedLessonIds", "completed", "completedLessons"],
});

const DEMO_DATA_SCRIPT_URL = "./data/portal-demo-data.js?v=20260331-2";
let demoDataPromise = null;
let courseAccordionSyncFrame = 0;

function getLoadedDemoData() {
  if (typeof window !== "undefined" && window.AIN_PATHSHALA_DEMO_DATA) {
    return window.AIN_PATHSHALA_DEMO_DATA;
  }

  throw new Error("Demo data is not available.");
}

async function loadDemoData() {
  if (typeof window !== "undefined" && window.AIN_PATHSHALA_DEMO_DATA) {
    return window.AIN_PATHSHALA_DEMO_DATA;
  }

  if (typeof document === "undefined") {
    throw new Error("Demo data can only be loaded in a browser environment.");
  }

  if (!demoDataPromise) {
    demoDataPromise = new Promise((resolve, reject) => {
      const handleLoad = () => {
        try {
          resolve(getLoadedDemoData());
        } catch (error) {
          reject(error);
        }
      };
      const handleError = () => reject(new Error("Unable to load demo data."));
      const existingScript = document.querySelector('script[data-demo-data="ain-pathshala"]');

      if (existingScript) {
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener("error", handleError, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = DEMO_DATA_SCRIPT_URL;
      script.async = true;
      script.dataset.demoData = "ain-pathshala";
      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });
      (document.head || document.documentElement).appendChild(script);
    }).catch((error) => {
      demoDataPromise = null;
      throw error;
    });
  }

  return demoDataPromise;
}

function createEmptyPortalData() {
  return {
    students: [],
    courses: [],
    lessons: [],
    notices: [],
    enrollments: [],
    messages: [],
    hasEnrollmentSheet: false,
    courseMap: new Map(),
    courseReferenceMap: new Map(),
    lessonsByCourseId: new Map(),
  };
}

const state = {
  data: createEmptyPortalData(),
  dataModeLabel: "",
  activeStudentId: "",
  openCourseId: "",
  pendingCourseRequestIds: new Set(),
  courseRequestBusyIds: new Set(),
  activeMessageId: "",
  dismissedMessageIds: new Set(),
  messageReplyBusy: false,
  messageInboxPollHandle: 0,
  loginBusy: false,
};

const dom = {
  body: document.body,
  loginBtn: document.getElementById("loginBtn"),
  registerNavLink: document.getElementById("registerNavLink"),
  userProfile: document.getElementById("userProfile"),
  navStudentName: document.getElementById("navStudentName"),
  navStudentId: document.getElementById("navStudentId"),
  navAvatar: document.getElementById("navAvatar"),
  navAvatarImage: document.getElementById("navAvatarImage"),
  navAvatarFallback: document.getElementById("navAvatarFallback"),
  loginSection: document.getElementById("loginSection"),
  dashboardSection: document.getElementById("dashboardSection"),
  form: document.getElementById("lookup-form"),
  query: document.getElementById("student-query"),
  password: document.getElementById("student-password"),
  passwordToggle: document.getElementById("studentPasswordToggle"),
  submitBtn: document.querySelector('#lookup-form button[type="submit"]'),
  feedback: document.getElementById("loginFeedback"),
  dataModeBadge: document.getElementById("dataModeBadge"),
  heroStudentName: document.getElementById("heroStudentName"),
  heroWelcomeText: document.getElementById("heroWelcomeText"),
  completedCount: document.getElementById("completedCount"),
  completedLabel: document.getElementById("completedLabel"),
  remainingCount: document.getElementById("remainingCount"),
  remainingLabel: document.getElementById("remainingLabel"),
  studentStatus: document.getElementById("studentStatus"),
  studentBatch: document.getElementById("studentBatch"),
  studentSession: document.getElementById("studentSession"),
  messageInbox: document.getElementById("messageInbox"),
  messageInboxList: document.getElementById("messageInboxList"),
  courseList: document.getElementById("courseList"),
  videoModal: document.getElementById("videoModal"),
  videoBackdrop: document.getElementById("videoBackdrop"),
  closeVideoBtn: document.getElementById("closeVideoBtn"),
  videoPlayer: document.getElementById("videoPlayer"),
  videoTitle: document.getElementById("videoTitle"),
  videoMeta: document.getElementById("videoMeta"),
  videoPosterLayer: document.getElementById("videoPosterLayer"),
  videoPosterImage: document.getElementById("videoPosterImage"),
  videoWatermark: document.getElementById("videoWatermark"),
  videoLiveWatermark: document.getElementById("videoLiveWatermark"),
  videoStatusText: document.getElementById("videoStatusText"),
  startVideoBtn: document.getElementById("startVideoBtn"),
  profileModal: document.getElementById("profileModal"),
  profileBackdrop: document.getElementById("profileBackdrop"),
  closeProfileBtn: document.getElementById("closeProfileBtn"),
  approvalStatusModal: document.getElementById("approvalStatusModal"),
  approvalStatusBackdrop: document.getElementById("approvalStatusBackdrop"),
  closeApprovalStatusBtn: document.getElementById("closeApprovalStatusBtn"),
  approvalStatusOkBtn: document.getElementById("approvalStatusOkBtn"),
  approvalStatusTitle: document.getElementById("approvalStatusTitle"),
  approvalStatusMessage: document.getElementById("approvalStatusMessage"),
  approvalStatusNote: document.getElementById("approvalStatusNote"),
  studentMessageModal: document.getElementById("studentMessageModal"),
  studentMessageBackdrop: document.getElementById("studentMessageBackdrop"),
  closeStudentMessageBtn: document.getElementById("closeStudentMessageBtn"),
  studentMessageTitle: document.getElementById("studentMessageTitle"),
  studentMessageBody: document.getElementById("studentMessageBody"),
  studentMessageMeta: document.getElementById("studentMessageMeta"),
  studentMessageReply: document.getElementById("studentMessageReply"),
  studentMessageFeedback: document.getElementById("studentMessageFeedback"),
  studentMessageSkipBtn: document.getElementById("studentMessageSkipBtn"),
  studentMessageReplyBtn: document.getElementById("studentMessageReplyBtn"),
  profileBackBtn: document.getElementById("profileBackBtn"),
  profileLogoutBtn: document.getElementById("profileLogoutBtn"),
  profileImage: document.getElementById("profileImage"),
  profileInitials: document.getElementById("profileInitials"),
  profileStudentName: document.getElementById("profileStudentName"),
  profileStudentEmail: document.getElementById("profileStudentEmail"),
  profileStudentId: document.getElementById("profileStudentId"),
  profileStudentBatch: document.getElementById("profileStudentBatch"),
  profileStudentSession: document.getElementById("profileStudentSession"),
  profileCourseCount: document.getElementById("profileCourseCount"),
  profileAccessWindow: document.getElementById("profileAccessWindow"),
  profileVideoAccessUntil: document.getElementById("profileVideoAccessUntil"),
  profileLastPaymentDate: document.getElementById("profileLastPaymentDate"),
  profilePaymentDate: document.getElementById("profilePaymentDate"),
  profileCourseGrid: document.getElementById("profileCourseGrid"),
  profileResetLink: document.getElementById("profileResetLink"),
};

function syncStudentPasswordToggle() {
  if (!dom.password || !dom.passwordToggle) {
    return;
  }

  const isHidden = dom.password.type === "password";
  dom.passwordToggle.textContent = isHidden ? "Show" : "Hide";
  dom.passwordToggle.setAttribute("aria-pressed", isHidden ? "false" : "true");
}

function toggleStudentPasswordVisibility() {
  if (!dom.password) {
    return;
  }

  dom.password.type = dom.password.type === "password" ? "text" : "password";
  syncStudentPasswordToggle();
  dom.password.focus();
}

function formatNumber(value) {
  return String(value);
}

function getSessionStore() {
  try {
    return window.sessionStorage;
  } catch (error) {
    return null;
  }
}

function getLocalStore() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function getUniqueStores(stores) {
  return stores.filter((store, index, list) => store && list.indexOf(store) === index);
}

function getPortalStores() {
  return getUniqueStores([getLocalStore(), getSessionStore()]);
}

function getDraftStore() {
  return getSessionStore() || getLocalStore();
}

function readStoredPortalValue(key) {
  for (const store of getPortalStores()) {
    const value = store.getItem(key);
    if (value !== null) {
      return String(value);
    }
  }

  return "";
}

function writeStoredPortalValue(key, value) {
  getPortalStores().forEach((store) => {
    store.setItem(key, String(value));
  });
}

function removeStoredPortalValue(key) {
  getPortalStores().forEach((store) => {
    store.removeItem(key);
  });
}

function serializePortalDataSnapshot(data) {
  const activeStudentId = state.activeStudentId || readStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId).trim();
  const students = (data?.students || []).filter((student) => {
    return !activeStudentId || student.id === activeStudentId;
  });
  const enrollments = (data?.enrollments || []).filter((enrollment) => {
    return !activeStudentId || enrollment.studentId === activeStudentId;
  });

  return {
    students: students.map((student) => ({
      ...student,
      password: "",
    })),
    courses: data?.courses || [],
    lessons: data?.lessons || [],
    notices: data?.notices || [],
    enrollments,
    messages: data?.messages || [],
  };
}

function readCachedPortalDataSnapshot() {
  const activeStudentId = readStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId).trim();
  const localStore = getLocalStore();
  const rawSnapshot = localStore
    ? String(localStore.getItem(SESSION_STORAGE_KEYS.portalDataSnapshot) || "").trim()
    : "";
  if (!activeStudentId || !rawSnapshot) {
    return null;
  }

  try {
    const payload = JSON.parse(rawSnapshot);
    const cachedAt = Number(payload.cachedAt || 0);
    if (!cachedAt || Date.now() - cachedAt > APP_CONFIG.portalDataCacheTtlMs || !payload.data) {
      return null;
    }

    return {
      data: normalizeData(payload.data),
      modeLabel: String(payload.modeLabel || "Live Google Sheet"),
      persistCache: false,
    };
  } catch (error) {
    if (localStore) {
      localStore.removeItem(SESSION_STORAGE_KEYS.portalDataSnapshot);
    }
    return null;
  }
}

function persistPortalDataSnapshot(result) {
  if (!result || !result.data || result.persistCache === false || result.modeLabel !== "Live Google Sheet") {
    return;
  }

  const localStore = getLocalStore();
  if (!localStore) {
    return;
  }

  try {
    localStore.setItem(
      SESSION_STORAGE_KEYS.portalDataSnapshot,
      JSON.stringify({
        cachedAt: Date.now(),
        modeLabel: result.modeLabel,
        data: serializePortalDataSnapshot(result.data),
      })
    );
  } catch (error) {
    // Ignore storage write failures.
  }
}

function normalizeLocalizedDigit(character) {
  const charCode = character.charCodeAt(0);

  for (const range of LOCALIZED_DIGIT_RANGES) {
    if (charCode >= range.start && charCode <= range.end) {
      return String(charCode - range.start);
    }
  }

  return character;
}

function encodeDataValue(value) {
  return encodeURIComponent(String(value || ""));
}

function decodeDataValue(value) {
  try {
    return decodeURIComponent(String(value || ""));
  } catch (error) {
    return String(value || "");
  }
}

function getPortalCopyValue(key, fallback) {
  if (typeof window !== "undefined" && typeof window.getAinPortalCopy === "function") {
    return window.getAinPortalCopy(key, fallback);
  }

  return fallback || "";
}

function normalizeLookupCharacters(value) {
  let text = String(value || "");
  if (typeof text.normalize === "function") {
    text = text.normalize("NFKC");
  }

  return text
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[‐‑‒–—−]/g, "-")
    .replace(/[০-৯٠-٩]/g, (character) => LOOKUP_DIGIT_MAP[character] || character);
}

function normalizeLookupCharacters(value) {
  let text = String(value || "");
  if (typeof text.normalize === "function") {
    text = text.normalize("NFKC");
  }

  return text
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[â€â€‘â€’â€“â€”âˆ’]/g, "-")
    .replace(/[\u09E6-\u09EF\u0660-\u0669\u06F0-\u06F9]/g, normalizeLocalizedDigit);
}

function normalizeLookupCharacters(value) {
  let text = String(value || "");
  if (typeof text.normalize === "function") {
    text = text.normalize("NFKC");
  }

  return text
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[\u2010-\u2015\u2212]/g, "-")
    .replace(/[\u09E6-\u09EF\u0660-\u0669\u06F0-\u06F9]/g, normalizeLocalizedDigit);
}

function getFirstAvailableValue(record, keys, fallback = "") {
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(record, key)) {
      continue;
    }

    const value = record[key];
    if (value === null || value === undefined) {
      continue;
    }

    if (typeof value === "string" && !value.trim()) {
      continue;
    }

    if (Array.isArray(value) && !value.length) {
      continue;
    }

    return value;
  }

  return fallback;
}

function getNormalizedLookupValue(value) {
  return normalizeLookupCharacters(value).trim().toLowerCase();
}

function getCanonicalLookupValue(value) {
  const segments = getNormalizedLookupValue(value).match(/[a-z]+|\d+/g);
  if (!segments || !segments.length) {
    return "";
  }

  return segments
    .map((segment) => (/^\d+$/.test(segment) ? String(Number(segment)) : segment))
    .join("");
}

function getCompactLookupValue(value) {
  return getNormalizedLookupValue(value).replace(/[^a-z0-9]+/g, "");
}

function getDigitsOnlyValue(value) {
  return normalizeLookupCharacters(value).replace(/\D/g, "");
}

function normalizePasswordValue(value) {
  return normalizeLookupCharacters(value).replace(/\s+/g, " ").trim();
}

function getCourseLookupTokens(course) {
  return [
    getNormalizedLookupValue(course.id),
    getCompactLookupValue(course.id),
    getCanonicalLookupValue(course.id),
    getNormalizedLookupValue(course.title),
    getCompactLookupValue(course.title),
    getCanonicalLookupValue(course.title),
    getNormalizedLookupValue(course.shortTitle),
    getCompactLookupValue(course.shortTitle),
    getCanonicalLookupValue(course.shortTitle),
    getNormalizedLookupValue(course.category),
    getCompactLookupValue(course.category),
  ].filter(Boolean);
}

function buildCourseReferenceMap(courses) {
  const referenceMap = new Map();

  courses.forEach((course) => {
    getCourseLookupTokens(course).forEach((token) => {
      if (token && !referenceMap.has(token)) {
        referenceMap.set(token, course.id);
      }
    });
  });

  return referenceMap;
}

function resolveCourseReference(reference, fallback = "") {
  const rawReference = String(reference || "").trim();
  if (!rawReference) {
    return fallback;
  }

  const lookupTokens = [
    getNormalizedLookupValue(rawReference),
    getCompactLookupValue(rawReference),
    getCanonicalLookupValue(rawReference),
  ].filter(Boolean);

  for (const token of lookupTokens) {
    const resolvedCourseId = state.data?.courseReferenceMap?.get(token);
    if (resolvedCourseId) {
      return resolvedCourseId;
    }
  }

  return rawReference;
}

function isSameStudentReference(leftValue, rightValue) {
  const leftTokens = [
    getNormalizedLookupValue(leftValue),
    getCompactLookupValue(leftValue),
    getCanonicalLookupValue(leftValue),
    normalizePhoneLookupValue(leftValue),
  ].filter(Boolean);

  const rightTokens = new Set(
    [
      getNormalizedLookupValue(rightValue),
      getCompactLookupValue(rightValue),
      getCanonicalLookupValue(rightValue),
      normalizePhoneLookupValue(rightValue),
    ].filter(Boolean)
  );

  return leftTokens.some((token) => rightTokens.has(token));
}

function normalizePhoneLookupValue(value) {
  const digits = getDigitsOnlyValue(value);
  if (!digits) {
    return "";
  }

  if (digits.length === 10 && digits.startsWith("1")) {
    return `0${digits}`;
  }

  if (digits.length === 12 && digits.startsWith("88")) {
    return `0${digits.slice(2)}`;
  }

  if (digits.length === 13 && digits.startsWith("880")) {
    return `0${digits.slice(3)}`;
  }

  return digits;
}

function getStudentLookupTokens(student) {
  const rawStudentId = student.id || student.studentId || "";
  const textTokens = [
    getNormalizedLookupValue(rawStudentId),
    getCompactLookupValue(rawStudentId),
    getCanonicalLookupValue(rawStudentId),
    getNormalizedLookupValue(student.email),
    getCompactLookupValue(student.email),
    normalizePhoneLookupValue(student.phone),
  ];

  const idSegments = String(rawStudentId)
    .split(/[^a-zA-Z0-9]+/)
    .map((segment) => getNormalizedLookupValue(segment))
    .filter((segment) => segment.length >= 2);

  return [...new Set([...textTokens, ...idSegments].filter(Boolean))];
}

function findStudentRecordByQuery(students, query) {
  const normalizedQuery = getNormalizedLookupValue(query);
  const compactQuery = getCompactLookupValue(query);
  const canonicalQuery = getCanonicalLookupValue(query);
  const normalizedPhone = normalizePhoneLookupValue(query);

  if (!normalizedQuery && !compactQuery && !canonicalQuery && !normalizedPhone) {
    return null;
  }

  return (
    students.find((student) => {
      const tokens = getStudentLookupTokens(student);
      return (
        (normalizedQuery && tokens.includes(normalizedQuery)) ||
        (compactQuery && tokens.includes(compactQuery)) ||
        (canonicalQuery && tokens.includes(canonicalQuery)) ||
        (normalizedPhone && tokens.includes(normalizedPhone))
      );
    }) || null
  );
}

function parseList(value) {
  if (Array.isArray(value)) {
    return value.flatMap((item) => parseList(item));
  }

  return String(value || "")
    .split(/[\r\n|,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseRecipientState(value, studentIds = []) {
  let parsed = null;

  if (value && typeof value === "object" && !Array.isArray(value)) {
    parsed = value;
  } else if (String(value || "").trim()) {
    try {
      parsed = JSON.parse(String(value));
    } catch (error) {
      parsed = null;
    }
  }

  const recipientState =
    parsed && typeof parsed === "object" && !Array.isArray(parsed) ? { ...parsed } : {};

  parseList(studentIds).forEach((studentId) => {
    const currentState =
      recipientState[studentId] && typeof recipientState[studentId] === "object"
        ? recipientState[studentId]
        : {};
    recipientState[studentId] = {
      status: String(currentState.status || "Pending").trim() || "Pending",
      reply: String(currentState.reply || "").trim(),
      respondedOn: String(currentState.respondedOn || "").trim(),
      respondedBy: String(currentState.respondedBy || "").trim(),
    };
  });

  return recipientState;
}

function toMonthKey(year, monthNumber) {
  const numericMonth = Number(monthNumber);
  if (!year || numericMonth < 1 || numericMonth > 12) {
    return "";
  }

  return `${String(year).padStart(4, "0")}-${String(numericMonth).padStart(2, "0")}`;
}

function parseMonthValue(value) {
  const text = normalizeLookupCharacters(value).trim();
  if (!text) {
    return "";
  }

  const isoLikeMatch = text.match(/^(\d{4})[-/](\d{1,2})(?:[-/]\d{1,2})?$/);
  if (isoLikeMatch) {
    return toMonthKey(isoLikeMatch[1], isoLikeMatch[2]);
  }

  const leadingIsoMatch = text.match(/^(\d{4})-(\d{1,2})/);
  if (leadingIsoMatch) {
    return toMonthKey(leadingIsoMatch[1], leadingIsoMatch[2]);
  }

  const parsedDate = new Date(text);
  if (!Number.isNaN(parsedDate.getTime())) {
    return toMonthKey(parsedDate.getFullYear(), parsedDate.getMonth() + 1);
  }

  const monthNameDate = new Date(`1 ${text}`);
  if (!Number.isNaN(monthNameDate.getTime())) {
    return toMonthKey(monthNameDate.getFullYear(), monthNameDate.getMonth() + 1);
  }

  return "";
}

function parsePaidMonthList(value) {
  const values = Array.isArray(value)
    ? value
    : String(value || "")
        .split(/[\r\n|,;]+/)
        .map((item) => item.trim())
        .filter(Boolean);

  return [...new Set(values.map((item) => parseMonthValue(item)).filter(Boolean))].sort();
}

function formatMonthKey(monthKey, fallback = "Month unavailable") {
  const normalizedKey = parseMonthValue(monthKey);
  if (!normalizedKey) {
    return fallback;
  }

  const [year, month] = normalizedKey.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[Number(month) - 1]} ${year}`;
}

function formatPaidMonthList(monthKeys, fallback = "Not set") {
  const normalizedKeys = parsePaidMonthList(monthKeys);
  if (!normalizedKeys.length) {
    return fallback;
  }

  return normalizedKeys.map((monthKey) => formatMonthKey(monthKey)).join(", ");
}

function hasPaidMonthAccess(entry) {
  return Array.isArray(entry.paidMonths) && entry.paidMonths.length > 0;
}

function extractYouTubeVideoId(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(text)) {
    return text;
  }

  const fallbackMatch = text.match(
    /(?:v=|\/embed\/|\/shorts\/|\/live\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (fallbackMatch) {
    return fallbackMatch[1];
  }

  try {
    const normalizedText = text.startsWith("//") ? `https:${text}` : text;
    const url = new URL(normalizedText);
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase();

    if (hostname === "youtu.be") {
      const shortId = url.pathname.split("/").filter(Boolean)[0] || "";
      return /^[a-zA-Z0-9_-]{11}$/.test(shortId) ? shortId : "";
    }

    if (hostname.endsWith("youtube.com")) {
      const watchId = url.searchParams.get("v");
      if (watchId && /^[a-zA-Z0-9_-]{11}$/.test(watchId)) {
        return watchId;
      }

      const pathParts = url.pathname.split("/").filter(Boolean);
      if (pathParts.length >= 2 && ["embed", "shorts", "live", "v"].includes(pathParts[0])) {
        const pathId = pathParts[1];
        return /^[a-zA-Z0-9_-]{11}$/.test(pathId) ? pathId : "";
      }
    }
  } catch (error) {
    return "";
  }

  return "";
}

function buildYouTubePosterUrl(videoId) {
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}

function buildYouTubeEmbedUrl(videoId) {
  if (!videoId) {
    return "";
  }

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
    controls: "1",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
    cc_load_policy: "0",
    modestbranding: "1",
  });

  if (window.location.origin) {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function buildVideoMetaLabel(moduleName, duration) {
  const metaParts = [moduleName, duration].map((value) => String(value || "").trim()).filter(Boolean);
  return metaParts.length ? metaParts.join(" | ") : "Authorized student playback";
}

function getVideoWatermarkLabel() {
  const activeStudent = getActiveStudent();
  if (!activeStudent) {
    return "Authorized Portal Session";
  }

  return `${activeStudent.name || "Student"} | ID ${activeStudent.id || "-"}`;
}

function updateVideoWatermarks() {
  const watermarkLabel = getVideoWatermarkLabel();

  if (dom.videoWatermark) {
    dom.videoWatermark.textContent = watermarkLabel;
  }

  if (dom.videoLiveWatermark) {
    dom.videoLiveWatermark.textContent = watermarkLabel;
  }
}

function setVideoPoster(videoId, title) {
  if (!dom.videoPosterImage) {
    return;
  }

  const fallbackPosterUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg` : "";
  dom.videoPosterImage.onerror = () => {
    dom.videoPosterImage.onerror = null;
    if (fallbackPosterUrl) {
      dom.videoPosterImage.src = fallbackPosterUrl;
    }
  };
  dom.videoPosterImage.src = buildYouTubePosterUrl(videoId);
  dom.videoPosterImage.alt = title ? `${title} poster` : "Class poster";
}

function resetVideoPlayerState(options = {}) {
  const preserveSession = options.preserveSession === true;

  if (dom.videoPlayer) {
    dom.videoPlayer.removeAttribute("src");
    dom.videoPlayer.classList.add("hidden");
    if (!preserveSession) {
      delete dom.videoPlayer.dataset.videoId;
    }
  }

  if (dom.videoPosterLayer) {
    dom.videoPosterLayer.classList.remove("hidden");
  }

  if (dom.videoLiveWatermark) {
    dom.videoLiveWatermark.classList.add("hidden");
  }

  if (dom.videoStatusText) {
    dom.videoStatusText.textContent = "Ready to play";
  }
}

function startVideoPlayback() {
  const resolvedVideoId = dom.videoPlayer?.dataset.videoId || "";
  if (!resolvedVideoId) {
    showToast("This lesson is not ready for playback yet.", "error");
    return;
  }

  dom.videoPlayer.setAttribute("src", buildYouTubeEmbedUrl(resolvedVideoId));
  dom.videoPlayer.classList.remove("hidden");
  dom.videoPosterLayer.classList.add("hidden");

  if (dom.videoLiveWatermark) {
    dom.videoLiveWatermark.classList.remove("hidden");
  }

  if (dom.videoStatusText) {
    dom.videoStatusText.textContent = "Streaming in secure view";
  }
}

function buildLessonsByCourseId(lessons) {
  const lessonsByCourseId = new Map();

  (lessons || []).forEach((lesson) => {
    if (!lesson.courseId) {
      return;
    }

    if (!lessonsByCourseId.has(lesson.courseId)) {
      lessonsByCourseId.set(lesson.courseId, []);
    }

    lessonsByCourseId.get(lesson.courseId).push(lesson);
  });

  lessonsByCourseId.forEach((courseLessons) => {
    courseLessons.sort((left, right) => new Date(left.releaseDate) - new Date(right.releaseDate));
  });

  return lessonsByCourseId;
}

function normalizeData(raw) {
  const students = (raw.students || []).map((student) => ({
    id: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.id, ""),
    name: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.name, "Unknown Student"),
    phone: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.phone, ""),
    email: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.email, ""),
    batch: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.batch, "N/A"),
    session: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.session, "N/A"),
    joinedOn: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.joinedOn, ""),
    status: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.status, "Active"),
    profileImage: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.profileImage, ""),
    password: normalizePasswordValue(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.password, "")),
    loginApproval: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.loginApproval, ""),
    portalAccessMode: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.portalAccessMode, ""),
    passwordResetUrl: getFirstAvailableValue(student, STUDENT_FIELD_KEYS.passwordResetUrl, ""),
    highlight: getFirstAvailableValue(
      student,
      STUDENT_FIELD_KEYS.highlight,
      "Your current lessons and updates are ready."
    ),
    enrolledCourseIds: parseList(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.enrolledCourseIds, "")),
    completedLessonIds: parseList(
      getFirstAvailableValue(student, STUDENT_FIELD_KEYS.completedLessonIds, "")
    ),
  }));

  const courses = (raw.courses || []).map((course) => ({
    id: course.id || course.courseId || "",
    title: course.title || course.name || "Untitled Course",
    shortTitle: course.shortTitle || course.title || "Course",
    faculty: course.faculty || course.instructor || "Faculty not set",
    category: course.category || "Course",
    schedule: course.schedule || "Schedule pending",
    nextLive: course.nextLive || course.nextClass || "",
    description: course.description || "",
  }));

  const lessons = (raw.lessons || []).map((lesson) => {
    const lessonVideoSource =
      lesson.youtubeUrl || lesson.youtubeLink || lesson.videoUrl || lesson.youtubeId || lesson.videoId || "";
    const lessonVideoId = extractYouTubeVideoId(lessonVideoSource);

    return {
      id: lesson.id || lesson.lessonId || "",
      courseId: lesson.courseId || "",
      module: lesson.module || lesson.moduleTitle || "Module",
      title: lesson.title || lesson.lessonTitle || "Untitled Lesson",
      duration: lesson.duration || "N/A",
      youtubeId: lessonVideoId,
      releaseDate: lesson.releaseDate || lesson.date || "",
      resources: parseList(lesson.resources || lesson.resourceList || ""),
      note: lesson.note || "Sheet-linked lesson",
    };
  });

  const enrollments = (raw.enrollments || [])
    .flatMap((enrollment, index) => {
      const studentIds = parseList(
        enrollment.studentId || enrollment.studentIds || enrollment.studentID || ""
      );
      const courseIds = parseList(
        enrollment.courseId || enrollment.courseIds || enrollment.courseID || ""
      );

      return studentIds.flatMap((studentId) =>
        courseIds.map((courseId, courseIndex) => ({
          id: enrollment.id || `enrollment-${index + 1}-${courseIndex + 1}`,
          studentId,
          courseId,
          accessStartDate:
            enrollment.accessStartDate ||
            enrollment.startDate ||
            enrollment.activeFrom ||
            enrollment.accessFrom ||
            "",
          accessEndDate:
            enrollment.accessEndDate ||
            enrollment.endDate ||
            enrollment.validUntil ||
            enrollment.accessUntil ||
            "",
          videoAccessUntil:
            enrollment.videoAccessUntil ||
            enrollment.approvedUntil ||
            enrollment.lessonAccessUntil ||
            enrollment.accessApprovedUntil ||
            enrollment.videoUnlockDate ||
            enrollment.releaseAccessUntil ||
            enrollment.accessEndDate ||
            enrollment.endDate ||
            "",
          lastPaymentDate:
            enrollment.lastPaymentDate ||
            enrollment.paymentApprovedOn ||
            enrollment.paidOn ||
            enrollment.latestPaymentDate ||
            "",
          paymentDueDate:
            enrollment.paymentDueDate ||
            enrollment.nextPaymentDueDate ||
            enrollment.lastPaymentDueDate ||
            enrollment.paymentDate ||
            "",
          monthlyFee:
            enrollment.monthlyFee ||
            enrollment.fee ||
            enrollment.amount ||
            enrollment.monthlyAmount ||
            "",
          paidMonths: parsePaidMonthList(
            enrollment.paidMonths ||
              enrollment.paymentMonths ||
              enrollment.paidMonthList ||
              enrollment.allowedMonths ||
              ""
          ),
          status: enrollment.status || "Active",
        }))
      );
    })
    .filter((enrollment) => enrollment.studentId && enrollment.courseId);
  const notices = Array.isArray(raw.notices) ? raw.notices.slice() : [];
  const messages = Array.isArray(raw.messages)
    ? raw.messages
        .map((message) => ({
          id: String(message.id || "").trim(),
          studentIds: parseList(message.studentIds || ""),
          title: String(message.title || "Admin Message").trim(),
          message: String(message.message || "").trim(),
          status: String(message.status || "Sent").trim(),
          createdOn: String(message.createdOn || "").trim(),
          createdBy: String(message.createdBy || "").trim(),
          audience: String(message.audience || "Student").trim() || "Student",
          recipientState: parseRecipientState(
            message.recipientStateJson || message.recipientState || "",
            message.studentIds || ""
          ),
        }))
        .filter((message) => message.id)
        .sort((left, right) => new Date(right.createdOn || 0) - new Date(left.createdOn || 0))
    : null;
  const lessonsByCourseId = buildLessonsByCourseId(lessons);

  return {
    students,
    courses,
    lessons,
    notices,
    enrollments,
    messages,
    hasEnrollmentSheet: enrollments.length > 0,
    courseMap: new Map(courses.map((course) => [course.id, course])),
    courseReferenceMap: buildCourseReferenceMap(courses),
    lessonsByCourseId,
  };
}

async function loadData() {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timeoutHandle = controller
      ? setTimeout(() => controller.abort(), APP_CONFIG.remoteRequestTimeoutMs)
      : null;

    try {
      const response = await fetch(APP_CONFIG.remoteEndpoint, {
        method: "GET",
        headers: { Accept: "application/json" },
        signal: controller ? controller.signal : undefined,
      });

      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }

      if (!response.ok) {
        throw new Error("Unable to load remote sheet data.");
      }

      const payload = await response.json();
      return {
        data: normalizeData(payload),
        modeLabel: "Live Google Sheet",
        persistCache: true,
      };
    } catch (error) {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
      console.warn("Falling back to demo data:", error);
    }
  }

  const demoData = await loadDemoData();
  return {
    data: normalizeData(demoData),
    modeLabel: "Demo Data",
    persistCache: false,
  };
}

function applyPortalData(result) {
  if (!result || !result.data) {
    return;
  }

  if (!Array.isArray(result.data.messages)) {
    result.data.messages = Array.isArray(state.data.messages) ? state.data.messages : [];
  }

  state.data = result.data;
  state.dataModeLabel = result.modeLabel || "";
  persistPortalDataSnapshot(result);
  dom.dataModeBadge.textContent = state.dataModeLabel || "";
  dom.dataModeBadge.classList.toggle("hidden", !state.dataModeLabel);
}

async function refreshPortalDataInBackground() {
  const activeStudentId = state.activeStudentId;
  if (!activeStudentId || APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return;
  }

  try {
    const result = await loadData();
    if (!result || result.modeLabel !== "Live Google Sheet" || state.activeStudentId !== activeStudentId) {
      return;
    }

    applyPortalData(result);
    const refreshedStudent = state.data.students.find((student) => student.id === activeStudentId) || null;
    if (refreshedStudent) {
      renderDashboard(refreshedStudent);
    }
  } catch (error) {
    console.warn("Unable to refresh portal data in the background.", error);
  }
}

function getStudentByQuery(query) {
  return findStudentRecordByQuery(state.data.students, query);
}

function getActiveStudent() {
  return state.data.students.find((student) => student.id === state.activeStudentId) || null;
}

function getStudentInboxMessages(student) {
  if (!student) {
    return [];
  }

  return (state.data.messages || []).filter((message) => {
    return parseList(message.studentIds).includes(student.id);
  });
}

function getStudentPendingMessages(student) {
  if (!student) {
    return [];
  }

  return getStudentInboxMessages(student).filter((message) => {
    const recipientState = message.recipientState?.[student.id] || null;
    return !recipientState || normalizeAccessModeValue(recipientState.status || "pending") === "pending";
  });
}

function getNextAutoOpenStudentMessage(student) {
  return getStudentPendingMessages(student).find((message) => {
    return !state.dismissedMessageIds.has(message.id);
  }) || null;
}

function dismissStudentMessage(messageId = state.activeMessageId) {
  if (messageId) {
    state.dismissedMessageIds.add(messageId);
  }
}

function clearDismissedStudentMessage(messageId) {
  if (messageId) {
    state.dismissedMessageIds.delete(messageId);
  }
}

async function fetchStudentInbox(studentId) {
  if (!studentId) {
    throw new Error("Student ID is required to load inbox messages.");
  }

  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return {
      ok: true,
      messages: getStudentInboxMessages({ id: studentId }),
    };
  }

  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutHandle = controller
    ? setTimeout(() => controller.abort(), APP_CONFIG.remoteRequestTimeoutMs)
    : null;

  try {
    const response = await fetch(APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "studentgetinbox",
        studentId,
      }),
      signal: controller ? controller.signal : undefined,
    });

    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (!response.ok) {
      throw new Error("Unable to load inbox messages right now.");
    }

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.message || "Inbox could not be loaded.");
    }

    return result;
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (error && error.name === "AbortError") {
      throw new Error("Inbox loading took too long. Please try again.");
    }

    throw error;
  }
}

async function refreshStudentInboxInBackground(studentId = state.activeStudentId, options = {}) {
  if (!studentId) {
    return;
  }

  try {
    const result = await fetchStudentInbox(studentId);
    if (studentId !== state.activeStudentId) {
      return;
    }

    replaceStudentInboxMessages(result.messages || []);
    const activeStudent = getActiveStudent();
    if (!activeStudent) {
      return;
    }

    renderMessageInbox(activeStudent);
    const nextAutoOpenMessage = getNextAutoOpenStudentMessage(activeStudent);
    if (options.openModal !== false && nextAutoOpenMessage) {
      state.activeMessageId = nextAutoOpenMessage.id;
      openStudentMessageModal(activeStudent);
    }
  } catch (error) {
    console.warn("Unable to refresh student inbox.", error);
  }
}

function stopStudentInboxPolling() {
  if (state.messageInboxPollHandle) {
    window.clearInterval(state.messageInboxPollHandle);
    state.messageInboxPollHandle = 0;
  }
}

function startStudentInboxPolling(studentId = state.activeStudentId) {
  stopStudentInboxPolling();

  if (
    !studentId ||
    APP_CONFIG.dataMode !== "remote" ||
    !APP_CONFIG.remoteEndpoint ||
    typeof window === "undefined"
  ) {
    return;
  }

  state.messageInboxPollHandle = window.setInterval(() => {
    if (
      !state.activeStudentId ||
      state.activeStudentId !== studentId ||
      state.messageReplyBusy ||
      document.hidden
    ) {
      return;
    }

    refreshStudentInboxInBackground(studentId, { openModal: true });
  }, APP_CONFIG.studentInboxPollIntervalMs);
}

function syncPortalSession() {
  const portalStores = getPortalStores();
  if (!portalStores.length) {
    return;
  }

  if (!state.activeStudentId) {
    removeStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId);
    removeStoredPortalValue(SESSION_STORAGE_KEYS.openCourseId);
    removeStoredPortalValue(SESSION_STORAGE_KEYS.pendingCourseRequestIds);
    return;
  }

  writeStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId, state.activeStudentId);
  writeStoredPortalValue(SESSION_STORAGE_KEYS.openCourseId, state.openCourseId || "");
  if (state.pendingCourseRequestIds.size) {
    writeStoredPortalValue(
      SESSION_STORAGE_KEYS.pendingCourseRequestIds,
      [...state.pendingCourseRequestIds].join("|")
    );
  } else {
    removeStoredPortalValue(SESSION_STORAGE_KEYS.pendingCourseRequestIds);
  }
}

function syncLoginDraft() {
  const draftStore = getDraftStore();
  if (!draftStore || state.activeStudentId) {
    return;
  }

  const queryValue = String(dom.query?.value || "");
  const passwordValue = String(dom.password?.value || "");

  if (queryValue) {
    draftStore.setItem(SESSION_STORAGE_KEYS.loginQuery, queryValue);
  } else {
    draftStore.removeItem(SESSION_STORAGE_KEYS.loginQuery);
  }

  if (passwordValue) {
    draftStore.setItem(SESSION_STORAGE_KEYS.loginPassword, passwordValue);
  } else {
    draftStore.removeItem(SESSION_STORAGE_KEYS.loginPassword);
  }
}

function clearLoginDraft() {
  const draftStore = getDraftStore();
  if (!draftStore) {
    return;
  }

  draftStore.removeItem(SESSION_STORAGE_KEYS.loginQuery);
  draftStore.removeItem(SESSION_STORAGE_KEYS.loginPassword);
}

function restoreLoginDraft() {
  const draftStore = getDraftStore();
  if (!draftStore) {
    return;
  }

  dom.query.value = String(draftStore.getItem(SESSION_STORAGE_KEYS.loginQuery) || "");
  dom.password.value = String(draftStore.getItem(SESSION_STORAGE_KEYS.loginPassword) || "");
}

function restorePortalSession() {
  if (!getPortalStores().length) {
    return false;
  }

  const storedStudentId = readStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId).trim();
  if (!storedStudentId) {
    return false;
  }

  const student = state.data.students.find((entry) => entry.id === storedStudentId);
  if (!student || isStudentLoginBlocked(student) || !isLoginApprovalGranted(student.loginApproval)) {
    state.activeStudentId = "";
    state.openCourseId = "";
    state.pendingCourseRequestIds = new Set();
    syncPortalSession();
    return false;
  }

  const storedCourseId = readStoredPortalValue(SESSION_STORAGE_KEYS.openCourseId).trim();

  state.activeStudentId = student.id;
  state.openCourseId = getCourseCatalogEntries(student).some((entry) => entry.course.id === storedCourseId)
    ? storedCourseId
    : getDefaultOpenCourseId(student);

  syncPortalSession();
  renderDashboard(student);
  togglePage("profile");
  setFeedback(`${student.name} session restored after refresh.`, "success");
  const nextAutoOpenMessage = getNextAutoOpenStudentMessage(student);
  if (nextAutoOpenMessage) {
    state.activeMessageId = nextAutoOpenMessage.id;
    openStudentMessageModal(student);
  }
  startStudentInboxPolling(student.id);
  refreshStudentInboxInBackground(student.id, { openModal: true });
  return true;
}

function normalizeAccessModeValue(value) {
  return getNormalizedLookupValue(value).replace(/[^a-z0-9]+/g, "");
}

function isPreviewAccessValue(value) {
  return PREVIEW_LOGIN_VALUES.includes(normalizeAccessModeValue(value));
}

function getStudentPortalAccessMode(student) {
  if (!student) {
    return "full";
  }

  if (isPreviewAccessValue(student.portalAccessMode) || isPreviewAccessValue(student.loginApproval)) {
    return "preview";
  }

  return "full";
}

function isStudentPreviewOnly(student) {
  return getStudentPortalAccessMode(student) === "preview";
}

function isLoginApprovalGranted(value) {
  const normalized = normalizeAccessModeValue(value);
  return APPROVED_LOGIN_VALUES.includes(normalized) || PREVIEW_LOGIN_VALUES.includes(normalized);
}

function isStudentLoginBlocked(student) {
  const normalized = String(student.status || "").trim().toLowerCase();
  return ["inactive", "blocked", "suspended", "expired"].includes(normalized);
}

function getStudentApprovalState(student) {
  const approvalValue = normalizeAccessModeValue(student?.loginApproval);
  const statusValue = normalizeAccessModeValue(student?.status);

  if (approvalValue === "rejected" || statusValue === "rejected") {
    return {
      approvalStatus: "rejected",
      message: "Your registration was not approved by the admin yet.",
    };
  }

  if (approvalValue === "pending" || statusValue === "pending") {
    return {
      approvalStatus: "pending",
      message: "Your registration is waiting for admin approval. Video access will open after approval.",
    };
  }

  if (isStudentLoginBlocked(student)) {
    return {
      approvalStatus: "inactive",
      message: "This student account is not active.",
    };
  }

  if (!isLoginApprovalGranted(student?.loginApproval)) {
    return {
      approvalStatus: "pending",
      message: "This account is not ready for access right now.",
    };
  }

  return {
    approvalStatus: "approved",
    message: "Login approved.",
  };
}

function authenticateLocalStudent(query, password) {
  const student = getStudentByQuery(query);
  if (!student) {
    return {
      ok: false,
      message: "No matching student was found.",
    };
  }

  const initialApprovalState = getStudentApprovalState(student);
  if (initialApprovalState.approvalStatus === "rejected" || initialApprovalState.approvalStatus === "inactive") {
    return {
      ok: false,
      studentId: student.id,
      approvalStatus: initialApprovalState.approvalStatus,
      message: initialApprovalState.message,
    };
  }

  if (!isLoginApprovalGranted(student.loginApproval)) {
    const storedPassword = normalizePasswordValue(student.password || "");
    if (!storedPassword) {
      return {
        ok: false,
        studentId: student.id,
        message: "Password has not been set for this student yet.",
      };
    }

    if (storedPassword !== normalizePasswordValue(password)) {
      return {
        ok: false,
        studentId: student.id,
        message: "Incorrect password.",
      };
    }

    const pendingApprovalState = getStudentApprovalState(student);
    return {
      ok: false,
      studentId: student.id,
      approvalStatus: pendingApprovalState.approvalStatus,
      message: pendingApprovalState.message,
    };
  }

  const storedPassword = normalizePasswordValue(student.password || "");
  if (!storedPassword) {
    return {
      ok: false,
      studentId: student.id,
      message: "Password has not been set for this student yet.",
    };
  }

  if (storedPassword !== normalizePasswordValue(password)) {
    return {
      ok: false,
      studentId: student.id,
      message: "Incorrect password.",
    };
  }

  return {
    ok: true,
    studentId: student.id,
    message: "Login approved.",
  };
}

async function authenticateRemoteStudent(query, password) {
  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutHandle = controller
    ? setTimeout(() => controller.abort(), APP_CONFIG.remoteRequestTimeoutMs)
    : null;
  let response;
  let rawResponse = "";

  try {
    response = await fetch(APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "login",
        query: String(query || "").trim(),
        password: String(password || ""),
      }),
      signal: controller ? controller.signal : undefined,
    });
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (error && error.name === "AbortError") {
      throw new Error("Login server took too long to respond. Please try again.");
    }

    throw error;
  }

  if (timeoutHandle) {
    clearTimeout(timeoutHandle);
  }

  if (!response.ok) {
    throw new Error(`Remote login validation failed (${response.status}).`);
  }

  try {
    rawResponse = await response.text();
  } catch (error) {
    throw new Error("Login server response could not be read.");
  }

  try {
    return JSON.parse(rawResponse);
  } catch (error) {
    if (/^\s*</.test(rawResponse)) {
      throw new Error("Login server returned HTML instead of JSON. Redeploy the Apps Script web app and update the deployment ID.");
    }

    throw new Error("Login server returned an invalid JSON response.");
  }
}

async function authenticateStudent(query, password) {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
    return authenticateRemoteStudent(query, password);
  }

  return authenticateLocalStudent(query, password);
}

function buildFallbackEnrollments(student) {
  return student.enrolledCourseIds.map((courseId, index) => ({
    id: `fallback-${student.id}-${index + 1}`,
    studentId: student.id,
    courseId: resolveCourseReference(courseId, courseId),
    accessStartDate: student.joinedOn || "",
    accessEndDate: "",
    paymentDueDate: "",
    paidMonths: [],
    status: student.status || "Active",
  }));
}

function parseTimestamp(dateValue) {
  if (!dateValue) {
    return null;
  }

  const date = new Date(dateValue);
  return Number.isNaN(date.getTime()) ? null : date.getTime();
}

function getStudentCourseEntries(student) {
  const previewOnly = isStudentPreviewOnly(student);
  const linkedEnrollments = state.data.enrollments
    .filter((enrollment) => isSameStudentReference(enrollment.studentId, student.id))
    .map((enrollment) => ({
      ...enrollment,
      courseId: resolveCourseReference(enrollment.courseId, enrollment.courseId),
    }));
  const fallbackEnrollments = buildFallbackEnrollments(student);
  const sourceEnrollments = state.data.hasEnrollmentSheet
    ? [...linkedEnrollments, ...fallbackEnrollments]
    : fallbackEnrollments;

  const seenCourseIds = new Set();

  return sourceEnrollments
    .filter((enrollment) => {
      if (seenCourseIds.has(enrollment.courseId)) {
        return false;
      }

      seenCourseIds.add(enrollment.courseId);
      return true;
    })
    .map((enrollment) => ({
      ...enrollment,
      previewOnly,
      course: state.data.courseMap.get(enrollment.courseId) || null,
    }))
    .filter((entry) => entry.course)
    .sort((left, right) => {
      const leftStart = parseTimestamp(left.accessStartDate) ?? Number.MAX_SAFE_INTEGER;
      const rightStart = parseTimestamp(right.accessStartDate) ?? Number.MAX_SAFE_INTEGER;

      if (leftStart !== rightStart) {
        return leftStart - rightStart;
      }

      return left.course.title.localeCompare(right.course.title);
    });
}

function getStudentCourses(student) {
  return getStudentCourseEntries(student).map((entry) => entry.course);
}

function getPendingCourseRequestIds(student) {
  if (!student || student.id !== state.activeStudentId) {
    return new Set();
  }

  const activeCourseIds = new Set(getStudentCourseEntries(student).map((entry) => entry.course.id));
  const nextPendingCourseIds = [...state.pendingCourseRequestIds].filter((courseId) => {
    return courseId && !activeCourseIds.has(courseId) && state.data.courseMap.has(courseId);
  });

  if (nextPendingCourseIds.length !== state.pendingCourseRequestIds.size) {
    state.pendingCourseRequestIds = new Set(nextPendingCourseIds);
    syncPortalSession();
  }

  return new Set(nextPendingCourseIds);
}

function getCourseCatalogEntries(student) {
  const enrolledEntries = getStudentCourseEntries(student);
  const enrolledEntryMap = new Map(enrolledEntries.map((entry) => [entry.course.id, entry]));
  const pendingCourseIds = getPendingCourseRequestIds(student);

  return state.data.courses
    .map((course) => {
      const enrolledEntry = enrolledEntryMap.get(course.id);
      if (enrolledEntry) {
        return {
          ...enrolledEntry,
          catalogOnly: false,
          pendingRequest: false,
        };
      }

      return {
        id: `catalog-${student.id}-${course.id}`,
        studentId: student.id,
        courseId: course.id,
        course,
        previewOnly: false,
        catalogOnly: true,
        pendingRequest: pendingCourseIds.has(course.id),
        accessStartDate: "",
        accessEndDate: "",
        videoAccessUntil: "",
        lastPaymentDate: "",
        paymentDueDate: "",
        monthlyFee: "",
        paidMonths: [],
        status: pendingCourseIds.has(course.id) ? "Pending Request" : "Catalog Locked",
      };
    })
    .sort((left, right) => {
      const leftRank = !left.catalogOnly ? 0 : left.pendingRequest ? 1 : 2;
      const rightRank = !right.catalogOnly ? 0 : right.pendingRequest ? 1 : 2;
      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      return left.course.title.localeCompare(right.course.title);
    });
}

function getDefaultOpenCourseId(student) {
  const courseEntries = getCourseCatalogEntries(student);
  const preferredEntry = courseEntries.find((entry) => !entry.catalogOnly) || courseEntries[0] || null;
  return preferredEntry ? preferredEntry.course.id : "";
}

function getCourseEntryLockReason(entry) {
  if (entry.pendingRequest) {
    return "Your access request is pending admin approval. Videos will unlock after review.";
  }

  if (entry.catalogOnly) {
    return "This course is visible in your course map. Request access to unlock classes and videos.";
  }

  return "This video is not available right now.";
}

function getCourseEntryStatusMeta(entry) {
  if (entry.catalogOnly) {
    return entry.pendingRequest
      ? {
          label: "Request Pending",
          className: "bg-amber-100 text-amber-800",
          summary: "Your request is already in the admin queue. Access will unlock after approval.",
          accessSummary: "Awaiting admin approval",
          videoSummary: "Locked until approval",
        }
      : {
          label: "Catalog Locked",
          className: "bg-slate-200 text-slate-700",
          summary: "This live course is visible in your course map. Request access to unlock all classes and videos.",
          accessSummary: "Not granted yet",
          videoSummary: "Request access first",
        };
  }

  if (entry.previewOnly) {
    return {
      label: "Preview Access",
      className: "bg-slate-900 text-white",
      summary: "You can review the full class list for this course. Video playback stays locked until admin approval.",
      accessSummary: formatDateRange(entry.accessStartDate, entry.accessEndDate),
      videoSummary: "Preview only",
    };
  }

  return {
    label: formatStatus(entry.status),
    className: getStatusBadgeClass(entry.status),
    summary: entry.course.description || "You have active access to this course.",
    accessSummary: formatDateRange(entry.accessStartDate, entry.accessEndDate),
    videoSummary: getEnrollmentVideoAccessSummary(entry),
  };
}

function isEnrollmentBlocked(entry) {
  const normalized = String(entry.status || "").trim().toLowerCase();
  return normalized === "blocked" || normalized === "suspended";
}

function getLatestValidDateValue(values) {
  return values
    .map((value) => ({ raw: value, timestamp: parseTimestamp(value) }))
    .filter((item) => item.timestamp !== null)
    .sort((left, right) => right.timestamp - left.timestamp)[0] || null;
}

function getManualVideoAccessTimestamp(entry) {
  return parseTimestamp(entry.videoAccessUntil);
}

function getLessonAvailabilityDate(entry) {
  const paidUnlockDate = getLatestValidDateValue([entry.videoAccessUntil, entry.paymentDueDate]);
  const courseEndDate = getLatestValidDateValue([entry.accessEndDate]);

  if (paidUnlockDate && courseEndDate) {
    return paidUnlockDate.timestamp <= courseEndDate.timestamp ? paidUnlockDate.raw : courseEndDate.raw;
  }

  return paidUnlockDate?.raw || courseEndDate?.raw || "";
}

function getEffectiveVideoAccessTimestamp(entry) {
  const fallbackTimestamp = Date.now();
  const accessUntilTimestamp = parseTimestamp(getLessonAvailabilityDate(entry)) ?? fallbackTimestamp;

  return Math.min(accessUntilTimestamp, Date.now());
}

function getEnrollmentVideoAccessSummary(entry) {
  if (entry.catalogOnly) {
    return entry.pendingRequest ? "Pending approval" : "Locked";
  }

  if (entry.previewOnly) {
    return "Preview only";
  }

  if (hasPaidMonthAccess(entry)) {
    return formatPaidMonthList(entry.paidMonths);
  }

  return formatDate(getLessonAvailabilityDate(entry), "Not set");
}

function getLessonAccessState(entry, lesson) {
  if (entry.catalogOnly) {
    return {
      canWatch: false,
      reason: getCourseEntryLockReason(entry),
      status: entry.pendingRequest ? "pending-request" : "catalog-locked",
    };
  }

  if (entry.previewOnly) {
    return {
      canWatch: false,
      reason: "Preview mode lets you see the class list only. Video playback is disabled for this account.",
      status: "preview-only",
    };
  }

  if (isEnrollmentBlocked(entry)) {
    return {
      canWatch: false,
      reason: "Access is blocked by admin for this course.",
      status: "blocked",
    };
  }

  const releaseTimestamp = parseTimestamp(lesson.releaseDate);
  if (releaseTimestamp === null) {
    return {
      canWatch: true,
      reason: "",
      status: "open",
    };
  }

  const accessStartTimestamp = parseTimestamp(entry.accessStartDate);
  if (accessStartTimestamp !== null && releaseTimestamp < accessStartTimestamp) {
    return {
      canWatch: false,
      reason: `This lesson is outside the approved access window that starts on ${formatDate(
        entry.accessStartDate,
        "the selected date"
      )}.`,
      status: "outside-window",
    };
  }

  const accessEndTimestamp = parseTimestamp(entry.accessEndDate);
  if (accessEndTimestamp !== null && releaseTimestamp > accessEndTimestamp) {
    return {
      canWatch: false,
      reason: `This lesson is outside the approved access window that ends on ${formatDate(
        entry.accessEndDate,
        "the selected date"
      )}.`,
      status: "outside-window",
    };
  }

  const manualVideoAccessTimestamp = getManualVideoAccessTimestamp(entry);
  if (manualVideoAccessTimestamp !== null && releaseTimestamp <= manualVideoAccessTimestamp) {
    return {
      canWatch: true,
      reason: "",
      status: "open",
    };
  }

  if (hasPaidMonthAccess(entry)) {
    const lessonMonthKey = parseMonthValue(lesson.releaseDate);
    if (!lessonMonthKey || entry.paidMonths.includes(lessonMonthKey)) {
      return {
        canWatch: true,
        reason: "",
        status: "open",
      };
    }

    const lessonMonthLabel = formatMonthKey(lessonMonthKey, "this month");
    return {
      canWatch: false,
      reason: `This lesson was uploaded in ${lessonMonthLabel}. That month is not marked as paid for this course.`,
      status: "payment-required",
    };
  }

  const effectiveAccessTimestamp = getEffectiveVideoAccessTimestamp(entry);
  if (releaseTimestamp > effectiveAccessTimestamp) {
    const approvedUntilLabel = formatDate(getLessonAvailabilityDate(entry), "the available date");
    return {
      canWatch: false,
      reason: `New lessons after ${approvedUntilLabel} are not available yet.`,
      status: "payment-required",
    };
  }

  return {
    canWatch: true,
    reason: "",
    status: "open",
  };
}

function getCourseLessons(courseId) {
  return state.data.lessonsByCourseId.get(courseId) || [];
}

function getTotalResources(lessons) {
  return lessons.reduce((count, lesson) => count + lesson.resources.length, 0);
}

function getStudentStats(student, courseEntries) {
  const lessonStates = courseEntries.flatMap((entry) =>
    getCourseLessons(entry.course.id).map((lesson) => ({
      lesson,
      accessState: getLessonAccessState(entry, lesson),
    }))
  );
  const totalLessons = lessonStates.length;
  const unlockedLessons = lessonStates.filter((item) => item.accessState.canWatch).length;
  const completed = lessonStates.filter(
    (item) => item.accessState.canWatch && student.completedLessonIds.includes(item.lesson.id)
  ).length;

  if (isStudentPreviewOnly(student)) {
    return {
      primaryCount: totalLessons,
      primaryLabel: "Visible Classes",
      secondaryCount: totalLessons,
      secondaryLabel: "Locked Videos",
      total: totalLessons,
      completed: 0,
      remaining: totalLessons,
      unlocked: 0,
      locked: totalLessons,
    };
  }

  return {
    primaryCount: completed,
    primaryLabel: "Completed Classes",
    secondaryCount: Math.max(totalLessons - completed, 0),
    secondaryLabel: "Remaining Classes",
    total: totalLessons,
    completed,
    remaining: Math.max(totalLessons - completed, 0),
    unlocked: unlockedLessons,
    locked: Math.max(totalLessons - unlockedLessons, 0),
  };
}

function formatDate(dateValue, fallback = "Date unavailable") {
  if (!dateValue) {
    return fallback;
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return DATE_FORMATTER.format(date);
}

function formatDateTime(dateValue, fallback = "Date unavailable") {
  if (!dateValue) {
    return fallback;
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return DATE_TIME_FORMATTER.format(date);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatProfileSession(value, fallback = "-") {
  const text = String(value || "").trim();
  if (!text) {
    return fallback;
  }

  const date = new Date(text);
  if (Number.isNaN(date.getTime())) {
    return text;
  }

  return /[T\s]\d{1,2}:\d{2}/.test(text) ? DATE_TIME_FORMATTER.format(date) : DATE_FORMATTER.format(date);
}

function formatDateRange(startDate, endDate) {
  if (startDate && endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }

  if (startDate) {
    return `From ${formatDate(startDate)}`;
  }

  if (endDate) {
    return `Until ${formatDate(endDate)}`;
  }

  return "Not set";
}

function getSortedDateItems(values) {
  return values
    .map((value) => ({ raw: value, timestamp: parseTimestamp(value) }))
    .filter((item) => item.timestamp !== null)
    .sort((left, right) => left.timestamp - right.timestamp);
}

function getProfileAccessSummary(courseEntries) {
  const accessStarts = getSortedDateItems(courseEntries.map((entry) => entry.accessStartDate));
  const accessEnds = getSortedDateItems(courseEntries.map((entry) => entry.accessEndDate));

  if (accessStarts.length || accessEnds.length) {
    return formatDateRange(
      accessStarts[0] ? accessStarts[0].raw : "",
      accessEnds.length ? accessEnds[accessEnds.length - 1].raw : ""
    );
  }

  const fallbackStart = courseEntries.find((entry) => entry.accessStartDate)?.accessStartDate || "";
  const fallbackEnd =
    [...courseEntries].reverse().find((entry) => entry.accessEndDate)?.accessEndDate || "";
  return formatDateRange(fallbackStart, fallbackEnd);
}

function getProfileVideoAccessSummary(courseEntries) {
  if (courseEntries.length && courseEntries.every((entry) => entry.previewOnly)) {
    return "Preview only";
  }

  if (courseEntries.some((entry) => hasPaidMonthAccess(entry))) {
    if (!courseEntries.every((entry) => hasPaidMonthAccess(entry))) {
      return "Varies by course";
    }

    const paidMonths = [...new Set(courseEntries.flatMap((entry) => entry.paidMonths || []))].sort();
    return formatPaidMonthList(paidMonths, "Not set");
  }

  const approvalDates = getSortedDateItems(
    courseEntries.map((entry) => getLessonAvailabilityDate(entry))
  );

  if (approvalDates.length) {
    const selected = approvalDates[approvalDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  const fallbackEntry = [...courseEntries].reverse().find((entry) => getLessonAvailabilityDate(entry));
  const fallback = fallbackEntry ? getLessonAvailabilityDate(fallbackEntry) : "";
  return formatDate(fallback, "Not set");
}

function getProfileLastPaymentSummary(courseEntries) {
  const paymentDates = getSortedDateItems(courseEntries.map((entry) => entry.lastPaymentDate));
  if (paymentDates.length) {
    const selected = paymentDates[paymentDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  return formatDate(
    courseEntries.find((entry) => entry.lastPaymentDate)?.lastPaymentDate || "",
    "Not set"
  );
}

function getProfilePaymentSummary(courseEntries) {
  const paymentDates = getSortedDateItems(courseEntries.map((entry) => entry.paymentDueDate));
  if (paymentDates.length) {
    const now = Date.now();
    const nextDue = paymentDates.find((item) => item.timestamp >= now);
    const selected = nextDue || paymentDates[paymentDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  return courseEntries.find((entry) => entry.paymentDueDate)?.paymentDueDate || "Not set";
}

function formatStatus(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "active") {
    return "Active";
  }
  if (normalized === "inactive") {
    return "Inactive";
  }
  if (normalized === "expired") {
    return "Expired";
  }
  if (normalized === "pending") {
    return "Pending";
  }
  if (normalized === "blocked") {
    return "Blocked";
  }
  if (normalized === "suspended") {
    return "Suspended";
  }
  return status || "Unknown";
}

function getStatusBadgeClass(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "active") {
    return "bg-emerald-100 text-emerald-700";
  }
  if (normalized === "expired" || normalized === "inactive") {
    return "bg-red-100 text-red-700";
  }
  if (normalized === "pending") {
    return "bg-amber-100 text-amber-700";
  }
  if (normalized === "blocked" || normalized === "suspended") {
    return "bg-slate-900 text-white";
  }
  return "bg-slate-100 text-slate-600";
}

function getAvatarInitials(name) {
  const parts = String(name || "Student")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return (
    parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "S"
  );
}

function setAvatarImage(imageUrl, imageElement, fallbackElement, fallbackText) {
  fallbackElement.textContent = fallbackText;

  if (!imageUrl) {
    imageElement.removeAttribute("src");
    imageElement.classList.add("hidden");
    fallbackElement.classList.remove("hidden");
    return;
  }

  imageElement.onerror = () => {
    imageElement.classList.add("hidden");
    fallbackElement.classList.remove("hidden");
  };

  imageElement.onload = () => {
    imageElement.classList.remove("hidden");
    fallbackElement.classList.add("hidden");
  };

  imageElement.src = imageUrl;
}

function getPasswordResetUrl(student) {
  return (
    student.passwordResetUrl ||
    `mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20${encodeURIComponent(
      student.id || "student"
    )}`
  );
}

function setFeedback(message, type = "neutral") {
  const classMap = {
    success: "mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700",
    error: "mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",
    neutral: "mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600",
  };

  if (!message) {
    dom.feedback.textContent = "";
    dom.feedback.className = "hidden";
    return;
  }

  dom.feedback.textContent = message;
  dom.feedback.className = classMap[type] || classMap.neutral;
}

function setLoginBusy(isBusy, busyLabel = "Checking...") {
  state.loginBusy = !!isBusy;

  if (dom.submitBtn) {
    dom.submitBtn.disabled = !!isBusy;
    dom.submitBtn.textContent = isBusy ? busyLabel : "Enter Portal";
    dom.submitBtn.classList.toggle("cursor-wait", !!isBusy);
    dom.submitBtn.classList.toggle("opacity-80", !!isBusy);
  }

  if (dom.query) {
    dom.query.disabled = !!isBusy;
  }

  if (dom.password) {
    dom.password.disabled = !!isBusy;
  }
}

function syncBodyOverflow() {
  const modalElements = [dom.videoModal, dom.profileModal, dom.approvalStatusModal, dom.studentMessageModal].filter(
    Boolean
  );
  const hasVisibleModal = modalElements.some((element) => !element.classList.contains("hidden"));
  dom.body.style.overflow = hasVisibleModal ? "hidden" : "";
}

function syncCourseAccordionHeights() {
  if (!dom.courseList) {
    return;
  }

  dom.courseList.querySelectorAll("[data-course-card]").forEach((card) => {
    const content = card.querySelector(".accordion-content");
    if (!content) {
      return;
    }

    content.style.maxHeight = card.classList.contains("accordion-active") ? `${content.scrollHeight}px` : "0px";
  });
}

function scheduleCourseAccordionSync() {
  if (courseAccordionSyncFrame) {
    cancelAnimationFrame(courseAccordionSyncFrame);
  }

  courseAccordionSyncFrame = requestAnimationFrame(() => {
    courseAccordionSyncFrame = 0;
    syncCourseAccordionHeights();
  });
}

function closeProfileModal() {
  dom.profileModal.classList.add("hidden");
  dom.profileModal.classList.remove("flex");
  syncBodyOverflow();
}

function openApprovalStatusModal(options = {}) {
  dom.approvalStatusTitle.textContent = options.title || "Approval Update";
  dom.approvalStatusMessage.textContent =
    options.message || "Your registration is waiting for admin approval.";

  const note = String(options.note || "").trim();
  if (note) {
    dom.approvalStatusNote.textContent = `Admin note: ${note}`;
    dom.approvalStatusNote.classList.remove("hidden");
  } else {
    dom.approvalStatusNote.textContent = "";
    dom.approvalStatusNote.classList.add("hidden");
  }

  dom.approvalStatusModal.classList.remove("hidden");
  dom.approvalStatusModal.classList.add("flex");
  syncBodyOverflow();
}

function closeApprovalStatusModal() {
  dom.approvalStatusModal.classList.add("hidden");
  dom.approvalStatusModal.classList.remove("flex");
  syncBodyOverflow();
}

function getCurrentPendingStudentMessage(student = getActiveStudent()) {
  const pendingMessages = getStudentPendingMessages(student);
  if (!pendingMessages.length) {
    return null;
  }

  return pendingMessages.find((message) => message.id === state.activeMessageId) || pendingMessages[0];
}

function syncStudentMessageButtons() {
  const isBusy = !!state.messageReplyBusy;
  if (dom.studentMessageReplyBtn) {
    dom.studentMessageReplyBtn.disabled = isBusy;
    dom.studentMessageReplyBtn.classList.toggle("cursor-wait", isBusy);
    dom.studentMessageReplyBtn.classList.toggle("opacity-80", isBusy);
    dom.studentMessageReplyBtn.textContent = isBusy ? "Sending Reply..." : "Send Reply";
  }

  if (dom.studentMessageSkipBtn) {
    dom.studentMessageSkipBtn.disabled = isBusy;
    dom.studentMessageSkipBtn.classList.toggle("cursor-wait", isBusy);
    dom.studentMessageSkipBtn.classList.toggle("opacity-80", isBusy);
  }
}

function closeStudentMessageModal(options = {}) {
  if (!options.preserveActiveId) {
    state.activeMessageId = "";
  }

  if (dom.studentMessageReply) {
    dom.studentMessageReply.value = "";
  }
  if (dom.studentMessageFeedback) {
    dom.studentMessageFeedback.textContent = "";
    dom.studentMessageFeedback.className = "hidden";
  }

  dom.studentMessageModal.classList.add("hidden");
  dom.studentMessageModal.classList.remove("flex");
  syncBodyOverflow();
}

function openStudentMessageModal(student = getActiveStudent()) {
  const pendingMessage = getCurrentPendingStudentMessage(student);
  if (!student || !pendingMessage) {
    closeStudentMessageModal();
    return false;
  }

  state.activeMessageId = pendingMessage.id;
  dom.studentMessageTitle.textContent = pendingMessage.title || "Admin Message";
  dom.studentMessageBody.textContent = pendingMessage.message || "";
  dom.studentMessageMeta.textContent = `From ${pendingMessage.createdBy || "Admin"} • ${formatDateTime(
    pendingMessage.createdOn,
    "Just now"
  )}`;
  dom.studentMessageMeta.textContent = `From ${pendingMessage.createdBy || "Admin"} | ${formatDateTime(
    pendingMessage.createdOn,
    "Just now"
  )}`;
  dom.studentMessageReply.value = "";
  dom.studentMessageFeedback.textContent = "";
  dom.studentMessageFeedback.className = "hidden";
  syncStudentMessageButtons();
  dom.studentMessageModal.classList.remove("hidden");
  dom.studentMessageModal.classList.add("flex");
  syncBodyOverflow();
  return true;
}

function togglePage(page) {
  const isLogin = page === "login";

  if (isLogin) {
    closeProfileModal();
    closeStudentMessageModal();
  }

  dom.loginSection.classList.toggle("hidden", !isLogin);
  dom.dashboardSection.classList.toggle("hidden", isLogin);
  dom.loginBtn.classList.toggle("hidden", !isLogin);
  dom.registerNavLink?.classList.toggle("hidden", !isLogin);
  dom.userProfile.classList.toggle("hidden", isLogin);
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  const colorClass =
    type === "error"
      ? "bg-red-600"
      : type === "info"
      ? "bg-slate-900"
      : "law-gradient";

  toast.className = `fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-2xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 ${colorClass}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -20px)";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

function openVideo(videoConfig, title) {
  const payload = typeof videoConfig === "object" && videoConfig !== null ? videoConfig : { videoId: videoConfig, title };
  const resolvedVideoId = extractYouTubeVideoId(payload.videoId);
  if (!resolvedVideoId) {
    showToast("This lesson does not have a video link yet.", "error");
    return;
  }

  const resolvedTitle = payload.title || title || "Class Video";
  dom.videoTitle.textContent = resolvedTitle;
  dom.videoMeta.textContent = buildVideoMetaLabel(payload.module, payload.duration);
  dom.videoPlayer.dataset.videoId = resolvedVideoId;
  resetVideoPlayerState({ preserveSession: true });
  setVideoPoster(resolvedVideoId, resolvedTitle);
  updateVideoWatermarks();
  dom.videoModal.classList.remove("hidden");
  dom.videoModal.classList.add("flex");
  syncBodyOverflow();
}

function closeVideo() {
  resetVideoPlayerState();
  dom.videoModal.classList.add("hidden");
  dom.videoModal.classList.remove("flex");
  syncBodyOverflow();
}

function renderStudentHeader(student, stats) {
  const avatarInitials = getAvatarInitials(student.name);
  const previewOnly = isStudentPreviewOnly(student);

  dom.navStudentName.textContent = student.name;
  dom.navStudentId.textContent = `ID: ${student.id}`;
  setAvatarImage(student.profileImage, dom.navAvatarImage, dom.navAvatarFallback, avatarInitials);

  const firstName = student.name.split(" ")[0] || student.name;
  dom.heroStudentName.textContent = firstName;
  dom.heroWelcomeText.textContent =
    previewOnly
      ? "Preview mode is active. You can review all class titles and total class count, but video playback is disabled."
      : student.highlight || "Your current lessons are listed below. Keep practicing consistently.";

  dom.completedCount.textContent = formatNumber(stats.primaryCount);
  dom.completedLabel.textContent = stats.primaryLabel;
  dom.remainingCount.textContent = formatNumber(stats.secondaryCount);
  dom.remainingLabel.textContent = stats.secondaryLabel;
  dom.studentStatus.textContent = previewOnly ? "Preview Access" : formatStatus(student.status);
  dom.studentBatch.textContent = student.batch || "-";
  dom.studentSession.textContent = student.session || "-";
}

function renderMessageInbox(student) {
  if (!dom.messageInbox || !dom.messageInboxList) {
    return;
  }

  const pendingMessages = getStudentPendingMessages(student);
  if (!pendingMessages.length) {
    dom.messageInbox.classList.add("hidden");
    dom.messageInboxList.innerHTML = "";
    return;
  }

  dom.messageInbox.classList.remove("hidden");
  dom.messageInboxList.innerHTML = pendingMessages
    .slice(0, 6)
    .map((message) => {
      return `
        <article class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <span class="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                  Pending
                </span>
                <span class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  ${formatDateTime(message.createdOn, "Just now")}
                </span>
              </div>
              <h4 class="mt-3 text-lg font-bold text-blue-950">${escapeHtml(message.title || "Admin Message")}</h4>
              <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHtml(message.message || "")}</p>
            </div>
            <div class="w-full sm:w-auto">
              <button
                type="button"
                data-open-message="${escapeHtml(message.id)}"
                class="w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Open Message
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  dom.messageInboxList.querySelectorAll("[data-open-message]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMessageId = button.dataset.openMessage || "";
      openStudentMessageModal(student);
    });
  });
}

function renderProfileModal(student, courseEntries) {
  const avatarInitials = getAvatarInitials(student.name);

  dom.profileStudentName.textContent = student.name;
  dom.profileStudentEmail.textContent = student.email || "Email not provided";
  dom.profileStudentId.textContent = student.id || "-";
  dom.profileStudentBatch.textContent = student.batch || "-";
  dom.profileStudentSession.textContent = formatProfileSession(student.session);
  dom.profileCourseCount.textContent = formatNumber(courseEntries.length);
  dom.profileAccessWindow.textContent = getProfileAccessSummary(courseEntries);
  dom.profileVideoAccessUntil.textContent = getProfileVideoAccessSummary(courseEntries);
  dom.profileLastPaymentDate.textContent = getProfileLastPaymentSummary(courseEntries);
  dom.profilePaymentDate.textContent = getProfilePaymentSummary(courseEntries);
  dom.profileResetLink.href = getPasswordResetUrl(student);

  setAvatarImage(student.profileImage, dom.profileImage, dom.profileInitials, avatarInitials);

  dom.profileCourseGrid.innerHTML = courseEntries.length
    ? courseEntries
        .map((entry) => {
          const course = entry.course;
          return `
            <article class="h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 p-5">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    ${course.category}
                  </p>
                  <h4 class="mt-2 break-words text-lg font-bold leading-tight text-blue-950">${course.title}</h4>
                  <p class="mt-1 break-words text-sm text-slate-500">${course.faculty}</p>
                </div>
                <span class="rounded-full px-3 py-1 text-[10px] font-bold ${getStatusBadgeClass(
                  entry.status
                )}">
                  ${formatStatus(entry.status)}
                </span>
              </div>

              <div class="mt-5 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Access Start
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.accessStartDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Access End
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.accessEndDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Video Access
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${getEnrollmentVideoAccessSummary(entry)}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Last Payment
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.lastPaymentDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Payment Due
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.paymentDueDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Monthly Fee
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${entry.monthlyFee ? `BDT ${entry.monthlyFee}` : "Not set"}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4 sm:col-span-2 2xl:col-span-3">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Schedule
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">${course.schedule}</p>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : `
      <div class="rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500 md:col-span-2">
        No course details are available for this account yet.
      </div>
    `;
}

function openProfileModal() {
  const student = getActiveStudent();
  if (!student) {
    return;
  }

  renderProfileModal(student, getStudentCourseEntries(student));
  dom.profileModal.classList.remove("hidden");
  dom.profileModal.classList.add("flex");
  dom.body.style.overflow = "hidden";
}

function renderCourseListLegacy(student, courseEntries) {
  if (!courseEntries.length) {
    dom.courseList.innerHTML = `
      <div class="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm">
        <h3 class="text-2xl font-bold text-blue-950">No Courses Found</h3>
        <p class="mt-3 text-slate-500">No courses are available for this account right now.</p>
      </div>
    `;
    return;
  }

  if (!courseEntries.some((entry) => entry.course.id === state.openCourseId)) {
    state.openCourseId = courseEntries[0].course.id;
  }

  syncPortalSession();

  dom.courseList.innerHTML = courseEntries
    .map((entry, index) => {
      const course = entry.course;
      const lessons = getCourseLessons(course.id);
      const isPreviewOnly = !!entry.previewOnly;
      const lessonItems = lessons.map((lesson) => ({
        lesson,
        accessState: getLessonAccessState(entry, lesson),
      }));
      const resourceCount = getTotalResources(lessons);
      const unlockedCount = lessonItems.filter((item) => item.accessState.canWatch).length;
      const lockedCount = Math.max(lessonItems.length - unlockedCount, 0);
      const isOpen = state.openCourseId === course.id;

      return `
        <div class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm ${
          isOpen ? "accordion-active" : ""
        }">
          <button
            type="button"
            data-course-id="${course.id}"
            class="flex w-full flex-col items-start justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:px-8 sm:py-7"
          >
            <div class="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                ${formatNumber(String(index + 1).padStart(2, "0"))}
              </div>
              <div class="min-w-0">
                <h3 class="break-words text-xl font-bold text-blue-950">${course.title}</h3>
                <p class="break-words text-sm text-slate-500">
                  ${formatNumber(lessons.length)} recorded classes • ${formatNumber(
                    resourceCount
                  )} resources
                </p>
              </div>
            </div>
            <div
              class="arrow-icon shrink-0 rounded-full bg-slate-100 p-2 transition-transform duration-300"
              style="transform: rotate(${isOpen ? 180 : 0}deg)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div class="accordion-content px-4">
            <div class="space-y-3 rounded-3xl bg-slate-50 p-4">
              <div class="rounded-2xl border border-slate-100 bg-white p-4">
                <div class="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Faculty</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.faculty}</p>
                  </div>
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Schedule</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.schedule}</p>
                  </div>
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Category</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.category}</p>
                  </div>
                </div>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">
                    Access: ${formatDateRange(entry.accessStartDate, entry.accessEndDate)}
                  </span>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-700">
                    Video Access: ${getEnrollmentVideoAccessSummary(entry)}
                  </span>
                  ${
                    isPreviewOnly
                      ? `<span class="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold text-white">Preview Mode: Videos disabled</span>`
                      : `<span class="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">Unlocked Videos: ${formatNumber(
                          unlockedCount
                        )}</span>`
                  }
                  ${
                    lockedCount
                      ? `<span class="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-bold text-rose-700">${
                          isPreviewOnly ? "Visible But Locked" : "Locked Videos"
                        }: ${formatNumber(lockedCount)}</span>`
                      : ""
                  }
                  <span class="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-700">
                    ${isPreviewOnly ? "Class List" : "Payment Due"}: ${
                      isPreviewOnly ? "Visible to student" : formatDate(entry.paymentDueDate, "Not set")
                    }
                  </span>
                  <span class="rounded-full px-3 py-1 text-[10px] font-bold ${getStatusBadgeClass(
                    entry.status
                  )}">
                    ${isPreviewOnly ? "Preview Access" : formatStatus(entry.status)}
                  </span>
                </div>
              </div>

              ${
                lessonItems.length
                  ? lessonItems
                      .map(({ lesson, accessState }, lessonIndex) => {
                        const isCompleted = student.completedLessonIds.includes(lesson.id);
                        return `
                          <div class="card-hover group/item flex flex-col items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:border-blue-200 sm:flex-row sm:items-center">
                            <div class="flex w-full min-w-0 items-center space-x-4 sm:w-auto">
                              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover/item:bg-blue-600 group-hover/item:text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <div class="min-w-0">
                                <h4 class="break-words font-bold text-slate-800">
                                  Class ${formatNumber(String(lessonIndex + 1).padStart(2, "0"))}: ${
                                    lesson.title
                                  }
                                </h4>
                                <p class="mt-1 text-xs text-slate-500">${lesson.module} • ${
                                  lesson.duration
                                }</p>
                                  <button
                                    type="button"
                                    data-video-id="${encodeDataValue(lesson.youtubeId)}"
                                    data-video-title="${encodeDataValue(lesson.title)}"
                                    data-video-module="${encodeDataValue(lesson.module)}"
                                    data-video-duration="${encodeDataValue(lesson.duration)}"
                                    data-video-locked="${accessState.canWatch ? "false" : "true"}"
                                    data-lock-reason="${encodeDataValue(accessState.reason)}"
                                    class="mt-2 flex items-center text-xs font-bold transition ${
                                      accessState.canWatch
                                        ? "text-blue-600 hover:text-blue-800"
                                        : "text-slate-400 hover:text-slate-500"
                                    }"
                                  >
                                  <span>${
                                    accessState.canWatch
                                      ? "Play Video"
                                      : isPreviewOnly
                                      ? "Class List Only"
                                      : "Locked Until Payment"
                                  }</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:justify-end">
                              <div class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-400">
                                Updated: ${formatDate(lesson.releaseDate)}
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                accessState.canWatch
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-rose-100 text-rose-700"
                              }">
                                ${
                                  accessState.canWatch
                                    ? "Unlocked"
                                    : isPreviewOnly
                                    ? "Preview Lock"
                                    : "Payment Lock"
                                }
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                isCompleted
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }">
                                ${isCompleted ? "Completed" : "New"}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")
                  : `
                    <div class="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
                      No classes have been added to this course yet.
                    </div>
                  `
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  dom.courseList.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.openCourseId = state.openCourseId === button.dataset.courseId ? "" : button.dataset.courseId;
      renderCourseList(student, courseEntries);
    });
  });

  dom.courseList.querySelectorAll("[data-video-id]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.videoLocked === "true") {
        showToast(
          decodeDataValue(button.dataset.lockReason) || "This video is not available right now.",
          "info"
        );
        return;
      }

      openVideo({
        videoId: decodeDataValue(button.dataset.videoId),
        title: decodeDataValue(button.dataset.videoTitle),
        module: decodeDataValue(button.dataset.videoModule),
        duration: decodeDataValue(button.dataset.videoDuration),
      });
    });
  });
}

function renderDashboardLegacy(student) {
  const courseEntries = getStudentCourseEntries(student);
  const stats = getStudentStats(student, courseEntries);

  renderStudentHeader(student, stats);
  renderCourseList(student, courseEntries);
  renderProfileModal(student, courseEntries);
}

function replaceStudentInboxMessages(messages) {
  const normalized = normalizeData({
    messages,
  });

  if (Array.isArray(normalized.messages)) {
    state.data.messages = normalized.messages;
    const availableMessageIds = new Set(
      normalized.messages.map((message) => String(message.id || "").trim()).filter(Boolean)
    );
    state.dismissedMessageIds = new Set(
      [...state.dismissedMessageIds].filter((messageId) => availableMessageIds.has(messageId))
    );
    persistPortalDataSnapshot({
      data: state.data,
      modeLabel: state.dataModeLabel,
      persistCache: state.dataModeLabel === "Live Google Sheet",
    });
  }
}

async function requestStudentMessageResponse(responseType) {
  const student = getActiveStudent();
  const pendingMessage = getCurrentPendingStudentMessage(student);

  if (!student || !pendingMessage) {
    throw new Error("No pending message is available right now.");
  }

  const replyText = String(dom.studentMessageReply?.value || "").trim();
  if (responseType === "reply" && !replyText) {
    throw new Error("Write a reply before sending it to the admin.");
  }

  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    const nextMessages = (state.data.messages || []).map((message) => {
      if (message.id !== pendingMessage.id) {
        return message;
      }

      const recipientState = {
        ...(message.recipientState || {}),
        [student.id]: {
          status: responseType === "reply" ? "Replied" : "Skipped",
          reply: responseType === "reply" ? replyText : "",
          respondedOn: new Date().toISOString(),
          respondedBy: student.id,
        },
      };

      return {
        ...message,
        status: responseType === "reply" ? "Replies Received" : "Completed",
        recipientState,
      };
    });

    replaceStudentInboxMessages(nextMessages);
    return {
      ok: true,
      message: responseType === "reply" ? "Your demo reply has been saved." : "This demo message was skipped.",
      messages: nextMessages,
    };
  }

  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutHandle = controller
    ? setTimeout(() => controller.abort(), APP_CONFIG.remoteRequestTimeoutMs)
    : null;

  try {
    const response = await fetch(APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "studentrespondmessage",
        studentId: student.id,
        messageId: pendingMessage.id,
        responseType,
        reply: replyText,
      }),
      signal: controller ? controller.signal : undefined,
    });

    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (!response.ok) {
      throw new Error("Unable to send your message response right now.");
    }

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.message || "Message response failed.");
    }

    replaceStudentInboxMessages(result.messages || []);
    return result;
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (error && error.name === "AbortError") {
      throw new Error("Message response took too long. Please try again.");
    }

    throw error;
  }
}

async function handleStudentMessageAction(responseType) {
  if (state.messageReplyBusy) {
    return;
  }

  state.messageReplyBusy = true;
  syncStudentMessageButtons();

  try {
    const activeStudent = getActiveStudent();
    const pendingMessage = getCurrentPendingStudentMessage(activeStudent);

    if (responseType === "skip") {
      dismissStudentMessage(pendingMessage?.id);
      state.activeMessageId = "";
      closeStudentMessageModal();
      if (activeStudent) {
        renderMessageInbox(activeStudent);
      }
      showToast("Message kept for later. Reply when you are ready.", "info");
      return;
    }

    const result = await requestStudentMessageResponse(responseType);
    clearDismissedStudentMessage(pendingMessage?.id);
    state.activeMessageId = "";
    if (activeStudent) {
      renderDashboard(activeStudent);
    }

    showToast(
      result.message || (responseType === "reply" ? "Reply sent successfully." : "Message skipped."),
      "success"
    );

    if (activeStudent && getStudentPendingMessages(activeStudent).length) {
      openStudentMessageModal(activeStudent);
    } else {
      closeStudentMessageModal();
    }
  } catch (error) {
    dom.studentMessageFeedback.textContent = error.message || "Unable to send your response.";
    dom.studentMessageFeedback.className =
      "mt-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600";
  } finally {
    state.messageReplyBusy = false;
    syncStudentMessageButtons();
  }
}

async function requestCourseAccess(courseId) {
  const student = getActiveStudent();
  if (!student) {
    throw new Error("Your session expired. Please log in again.");
  }

  if (!state.data.courseMap.has(courseId)) {
    throw new Error("This course could not be found.");
  }

  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    state.pendingCourseRequestIds = new Set([...state.pendingCourseRequestIds, courseId]);
    syncPortalSession();
    return {
      ok: true,
      message: "Course request saved in demo mode.",
      requestedCourseIds: [...state.pendingCourseRequestIds].join("|"),
    };
  }

  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutHandle = controller
    ? setTimeout(() => controller.abort(), APP_CONFIG.remoteRequestTimeoutMs)
    : null;

  try {
    const response = await fetch(APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "requeststudentcourses",
        studentId: student.id,
        requestedCourseIds: courseId,
      }),
      signal: controller ? controller.signal : undefined,
    });

    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (!response.ok) {
      throw new Error("Unable to send the course request right now.");
    }

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.message || "Course request failed.");
    }

    const requestedCourseIds = parseList(result.requestedCourseIds || [...state.pendingCourseRequestIds, courseId]);
    state.pendingCourseRequestIds = new Set(requestedCourseIds);
    syncPortalSession();
    return result;
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (error && error.name === "AbortError") {
      throw new Error("Course request took too long. Please try again.");
    }

    throw error;
  }
}

function renderCourseList(student, courseEntries) {
  if (!courseEntries.length) {
    dom.courseList.innerHTML = `
      <div class="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm">
        <h3 class="text-2xl font-bold text-blue-950">No Courses Found</h3>
        <p class="mt-3 text-slate-500">No live course is available right now.</p>
      </div>
    `;
    return;
  }

  if (!courseEntries.some((entry) => entry.course.id === state.openCourseId)) {
    state.openCourseId = courseEntries.find((entry) => !entry.catalogOnly)?.course.id || courseEntries[0].course.id;
  }

  syncPortalSession();

  const accessibleCount = courseEntries.filter((entry) => !entry.catalogOnly).length;
  const pendingCount = courseEntries.filter((entry) => entry.pendingRequest).length;
  const lockedCount = courseEntries.filter((entry) => entry.catalogOnly && !entry.pendingRequest).length;

  const courseMapMarkup = `
    <section class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div class="min-w-0">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Course Map</p>
          <h2 class="mt-2 text-2xl font-bold text-blue-950">See Every Live Course After Login</h2>
          <p class="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Every live course stays visible here. Courses without access remain locked until you send a request and the admin approves it.
          </p>
        </div>
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-[1.5rem] border border-blue-100 bg-blue-50 px-4 py-4">
            <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-500">Active Access</p>
            <p class="mt-2 text-2xl font-extrabold text-blue-950">${formatNumber(accessibleCount)}</p>
          </div>
          <div class="rounded-[1.5rem] border border-amber-100 bg-amber-50 px-4 py-4">
            <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-600">Pending Request</p>
            <p class="mt-2 text-2xl font-extrabold text-amber-700">${formatNumber(pendingCount)}</p>
          </div>
          <div class="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4">
            <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Locked Catalog</p>
            <p class="mt-2 text-2xl font-extrabold text-slate-900">${formatNumber(lockedCount)}</p>
          </div>
        </div>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        ${courseEntries
          .map((entry) => {
            const isActive = state.openCourseId === entry.course.id;
            const baseClass = isActive
              ? "border-blue-900 bg-blue-900 text-white"
              : !entry.catalogOnly
              ? "border-blue-100 bg-blue-50 text-blue-900"
              : entry.pendingRequest
              ? "border-amber-200 bg-amber-50 text-amber-800"
              : "border-slate-200 bg-slate-50 text-slate-700";

            return `
              <button
                type="button"
                data-course-map-id="${entry.course.id}"
                class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${baseClass}"
              >
                <span class="h-2.5 w-2.5 rounded-full ${
                  !entry.catalogOnly ? "bg-emerald-400" : entry.pendingRequest ? "bg-amber-400" : "bg-slate-400"
                }"></span>
                <span>${entry.course.shortTitle || entry.course.title}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;

  const courseCardsMarkup = courseEntries
    .map((entry, index) => {
      const course = entry.course;
      const statusMeta = getCourseEntryStatusMeta(entry);
      const lessons = getCourseLessons(course.id);
      const lessonItems = lessons.map((lesson) => ({
        lesson,
        accessState: getLessonAccessState(entry, lesson),
      }));
      const resourceCount = getTotalResources(lessons);
      const unlockedCount = lessonItems.filter((item) => item.accessState.canWatch).length;
      const totalLockedLessons = Math.max(lessonItems.length - unlockedCount, 0);
      const isOpen = state.openCourseId === course.id;
      const nextLiveLabel = formatProfileSession(course.nextLive, "Announced soon");
      const requestBusy = state.courseRequestBusyIds.has(course.id);

      return `
        <div data-course-card="${course.id}" class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm ${
          isOpen ? "accordion-active" : ""
        }">
          <button
            type="button"
            data-course-id="${course.id}"
            class="flex w-full flex-col items-start justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:px-8 sm:py-7"
          >
            <div class="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                ${formatNumber(String(index + 1).padStart(2, "0"))}
              </div>
              <div class="min-w-0">
                <h3 class="break-words text-xl font-bold text-blue-950">${course.title}</h3>
                <p class="break-words text-sm text-slate-500">
                  ${formatNumber(lessons.length)} recorded classes | ${formatNumber(resourceCount)} resources
                </p>
              </div>
            </div>
            <div class="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <span class="inline-flex rounded-full px-3 py-1 text-[10px] font-bold ${statusMeta.className}">
                ${statusMeta.label}
              </span>
              <div
                class="arrow-icon shrink-0 rounded-full bg-slate-100 p-2 transition-transform duration-300"
                style="transform: rotate(${isOpen ? 180 : 0}deg)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>

          <div class="accordion-content px-4">
            <div class="space-y-3 rounded-3xl bg-slate-50 p-4">
              <div class="rounded-2xl border border-slate-100 bg-white p-4">
                <div class="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div class="min-w-0 flex-1">
                    <div class="grid gap-3 text-sm text-slate-600 md:grid-cols-3">
                      <div class="min-w-0">
                        <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Faculty</p>
                        <p class="mt-1 break-words font-semibold text-slate-800">${course.faculty}</p>
                      </div>
                      <div class="min-w-0">
                        <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Schedule</p>
                        <p class="mt-1 break-words font-semibold text-slate-800">${course.schedule}</p>
                      </div>
                      <div class="min-w-0">
                        <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Category</p>
                        <p class="mt-1 break-words font-semibold text-slate-800">${course.category}</p>
                      </div>
                    </div>
                    <p class="mt-4 text-sm leading-6 text-slate-600">${statusMeta.summary}</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">
                        Access: ${statusMeta.accessSummary}
                      </span>
                      <span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-700">
                        Video Access: ${statusMeta.videoSummary}
                      </span>
                      <span class="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-bold text-violet-700">
                        Next Live: ${nextLiveLabel}
                      </span>
                      ${
                        entry.catalogOnly
                          ? `<span class="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-bold text-rose-700">Videos stay locked</span>`
                          : entry.previewOnly
                          ? `<span class="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold text-white">Preview Mode: Videos disabled</span>`
                          : `<span class="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">Unlocked Videos: ${formatNumber(
                              unlockedCount
                            )}</span>`
                      }
                      ${
                        totalLockedLessons
                          ? `<span class="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-700">${
                              entry.catalogOnly
                                ? "Locked Lessons"
                                : entry.previewOnly
                                ? "Visible But Locked"
                                : "Locked Videos"
                            }: ${formatNumber(totalLockedLessons)}</span>`
                          : ""
                      }
                    </div>
                  </div>
                  ${
                    entry.catalogOnly
                      ? `
                        <div class="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 xl:w-[320px]">
                          <p class="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">${
                            entry.pendingRequest ? "Request Sent" : "Unlock This Course"
                          }</p>
                          <p class="mt-3 text-sm leading-6 text-slate-600">${
                            entry.pendingRequest
                              ? "The admin queue already has your request for this course."
                              : "Send this course to the admin queue so access can be approved for your account."
                          }</p>
                          <button
                            type="button"
                            data-request-course="${course.id}"
                            class="mt-4 w-full rounded-2xl ${
                              entry.pendingRequest
                                ? "bg-slate-300 text-slate-600"
                                : "bg-slate-950 text-white hover:bg-slate-800"
                            } px-4 py-3 text-sm font-bold transition ${requestBusy ? "cursor-wait opacity-80" : ""}"
                            ${entry.pendingRequest ? "disabled" : ""}
                          >
                            ${requestBusy ? "Sending..." : entry.pendingRequest ? "Request Sent" : "Request Access"}
                          </button>
                        </div>
                      `
                      : `
                        <div class="w-full rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-4 xl:w-[320px]">
                          <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">${
                            entry.previewOnly ? "Preview Active" : "Course Ready"
                          }</p>
                          <p class="mt-3 text-sm leading-6 text-emerald-900/80">${
                            entry.previewOnly
                              ? "You can inspect the full class list right now. Admin approval is still required for video playback."
                              : "This course is already active in your account. Open the lessons below to start studying."
                          }</p>
                        </div>
                      `
                  }
                </div>
              </div>

              ${
                lessonItems.length
                  ? lessonItems
                      .map(({ lesson, accessState }, lessonIndex) => {
                        const isCompleted = student.completedLessonIds.includes(lesson.id);
                        return `
                          <div class="card-hover group/item flex flex-col items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:border-blue-200 sm:flex-row sm:items-center">
                            <div class="flex w-full min-w-0 items-center space-x-4 sm:w-auto">
                              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover/item:bg-blue-600 group-hover/item:text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <div class="min-w-0">
                                <h4 class="break-words font-bold text-slate-800">
                                  Class ${formatNumber(String(lessonIndex + 1).padStart(2, "0"))}: ${lesson.title}
                                </h4>
                                <p class="mt-1 text-xs text-slate-500">${lesson.module} | ${lesson.duration}</p>
                                  <button
                                    type="button"
                                    data-video-id="${encodeDataValue(lesson.youtubeId)}"
                                    data-video-title="${encodeDataValue(lesson.title)}"
                                    data-video-module="${encodeDataValue(lesson.module)}"
                                    data-video-duration="${encodeDataValue(lesson.duration)}"
                                    data-video-locked="${accessState.canWatch ? "false" : "true"}"
                                    data-lock-reason="${encodeDataValue(accessState.reason)}"
                                    class="mt-2 flex items-center text-xs font-bold transition ${
                                      accessState.canWatch
                                        ? "text-blue-600 hover:text-blue-800"
                                        : "text-slate-400 hover:text-slate-500"
                                    }"
                                  >
                                  <span>${
                                    accessState.canWatch
                                      ? "Play Video"
                                      : entry.catalogOnly
                                      ? entry.pendingRequest
                                        ? "Request Pending"
                                        : "Request Access First"
                                      : entry.previewOnly
                                      ? "Class List Only"
                                      : "Locked Until Payment"
                                  }</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:justify-end">
                              <div class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-400">
                                Updated: ${formatDate(lesson.releaseDate)}
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                accessState.canWatch
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-rose-100 text-rose-700"
                              }">
                                ${
                                  accessState.canWatch
                                    ? "Unlocked"
                                    : entry.catalogOnly
                                    ? entry.pendingRequest
                                      ? "Pending Approval"
                                      : "Catalog Lock"
                                    : entry.previewOnly
                                    ? "Preview Lock"
                                    : "Payment Lock"
                                }
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                isCompleted
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }">
                                ${isCompleted ? "Completed" : "New"}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")
                  : `
                    <div class="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
                      No classes have been added to this course yet.
                    </div>
                  `
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  dom.courseList.innerHTML = `${courseMapMarkup}<div class="mt-6 grid gap-6">${courseCardsMarkup}</div>`;

  dom.courseList.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.openCourseId = state.openCourseId === button.dataset.courseId ? "" : button.dataset.courseId;
      renderCourseList(student, courseEntries);
    });
  });

  dom.courseList.querySelectorAll("[data-video-id]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.videoLocked === "true") {
        showToast(
          decodeDataValue(button.dataset.lockReason) || "This video is not available right now.",
          "info"
        );
        return;
      }

      openVideo({
        videoId: decodeDataValue(button.dataset.videoId),
        title: decodeDataValue(button.dataset.videoTitle),
        module: decodeDataValue(button.dataset.videoModule),
        duration: decodeDataValue(button.dataset.videoDuration),
      });
    });
  });

  dom.courseList.querySelectorAll("[data-course-map-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const courseId = String(button.dataset.courseMapId || "").trim();
      if (!courseId) {
        return;
      }

      state.openCourseId = courseId;
      syncPortalSession();
      renderCourseList(student, courseEntries);
      const targetCard = dom.courseList.querySelector(`[data-course-card="${courseId}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  dom.courseList.querySelectorAll("[data-request-course]").forEach((button) => {
    button.addEventListener("click", async () => {
      const courseId = String(button.dataset.requestCourse || "").trim();
      if (!courseId || state.courseRequestBusyIds.has(courseId)) {
        return;
      }

      state.courseRequestBusyIds.add(courseId);
      button.disabled = true;
      button.textContent = "Sending...";

      try {
        const result = await requestCourseAccess(courseId);
        state.openCourseId = courseId;
        setFeedback(result.message || "Course request sent successfully.", "success");
        showToast(result.message || "Course request sent successfully.");
      } catch (error) {
        setFeedback(error.message || "Unable to send the course request.", "error");
        showToast(error.message || "Unable to send the course request.", "error");
      } finally {
        state.courseRequestBusyIds.delete(courseId);
        const activeStudent = getActiveStudent();
        if (activeStudent) {
          renderDashboard(activeStudent);
        }
      }
    });
  });

  scheduleCourseAccordionSync();
}

function renderDashboard(student) {
  const enrolledCourseEntries = getStudentCourseEntries(student);
  const catalogCourseEntries = getCourseCatalogEntries(student);
  const stats = getStudentStats(student, enrolledCourseEntries);

  renderStudentHeader(student, stats);
  renderMessageInbox(student);
  renderCourseList(student, catalogCourseEntries);
  renderProfileModal(student, enrolledCourseEntries);
}

function logout() {
  closeVideo();
  closeProfileModal();
  closeStudentMessageModal();
  stopStudentInboxPolling();
  state.activeStudentId = "";
  state.openCourseId = "";
  state.pendingCourseRequestIds = new Set();
  state.courseRequestBusyIds = new Set();
  state.activeMessageId = "";
  state.dismissedMessageIds = new Set();
  state.messageReplyBusy = false;
  syncPortalSession();
  dom.query.value = "";
  dom.password.value = "";
  dom.password.type = "password";
  syncStudentPasswordToggle();
  clearLoginDraft();
  togglePage("login");
  setFeedback("Enter your student credentials to log in again.");
  showToast("Logged out successfully.", "info");
}

async function performLogin(query = dom.query.value) {
  if (state.loginBusy) {
    return;
  }

  closeApprovalStatusModal();

  const studentQuery = String(query || "").trim();
  const password = String(dom.password.value || "").trim();
  syncLoginDraft();

  if (!studentQuery) {
    setFeedback(
      `Enter your ${getPortalCopyValue(
        "studentIdentifierSentenceLabel",
        "student ID, phone number, or email address"
      )}.`,
      "error"
    );
    showToast("Please enter your login information.", "error");
    return;
  }

  if (!password) {
    setFeedback("Enter your password to continue.", "error");
    showToast("Password is required.", "error");
    return;
  }

  let authResult;
  setLoginBusy(true, "Checking...");
  setFeedback("Checking your student credentials...", "neutral");

  try {
    authResult = await authenticateStudent(studentQuery, password);
  } catch (error) {
    console.error(error);
    setFeedback(error?.message || "Login validation is unavailable right now.", "error");
    showToast(error?.message || "Could not validate login.", "error");
    setLoginBusy(false);
    return;
  }

  try {
    if (!authResult || !authResult.ok) {
      const failureMessage = authResult?.message || "Login failed.";
      const isPendingApproval = authResult?.approvalStatus === "pending";
      setFeedback(failureMessage, isPendingApproval ? "neutral" : "error");
      showToast(failureMessage, isPendingApproval ? "info" : "error");
      if (authResult?.approvalStatus === "rejected") {
        openApprovalStatusModal({
          title: "Registration Not Approved",
          message: failureMessage,
          note: authResult?.reviewNote || "",
        });
      }
      return;
    }

    if (authResult.students || authResult.courses || authResult.lessons || authResult.enrollments) {
      applyPortalData({
        data: normalizeData(authResult),
        modeLabel: "Live Google Sheet",
      });
    }

    const student =
      state.data.students.find((entry) => entry.id === authResult.studentId) || getStudentByQuery(studentQuery);
    let nextStudent = student;

    if (!nextStudent && APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
      try {
        const result = await loadData();
        applyPortalData(result);
        nextStudent =
          state.data.students.find((entry) => entry.id === authResult.studentId) || getStudentByQuery(studentQuery);
      } catch (error) {
        console.warn("Unable to refresh portal data after login.", error);
      }
    }

    if (!nextStudent) {
      setFeedback("Student data could not be loaded after login.", "error");
      showToast("Student data missing.", "error");
      return;
    }

    state.activeStudentId = nextStudent.id;
    state.openCourseId = getDefaultOpenCourseId(nextStudent);
    syncPortalSession();

    renderDashboard(nextStudent);
    togglePage("profile");
    clearLoginDraft();
    dom.password.value = "";
    dom.password.type = "password";
    syncStudentPasswordToggle();
    setFeedback(`${nextStudent.name} logged in successfully.`, "success");
    showToast("Logged in successfully!");
    const nextAutoOpenMessage = getNextAutoOpenStudentMessage(nextStudent);
    if (nextAutoOpenMessage) {
      state.activeMessageId = nextAutoOpenMessage.id;
      openStudentMessageModal(nextStudent);
    }
    startStudentInboxPolling(nextStudent.id);
    refreshStudentInboxInBackground(nextStudent.id, { openModal: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error("Login completion failed.", error, authResult);
    const message =
      error?.message || "Login response was received, but the dashboard could not be opened.";
    setFeedback(
      message,
      "error"
    );
    showToast(message, "error");
  } finally {
    setLoginBusy(false);
  }
}

async function initialize() {
  dom.password.placeholder = getPortalCopyValue("passwordPlaceholder", "Enter your password");
  syncStudentPasswordToggle();
  syncStudentMessageButtons();
  setFeedback("");
  state.pendingCourseRequestIds = new Set(
    parseList(readStoredPortalValue(SESSION_STORAGE_KEYS.pendingCourseRequestIds))
  );
  let restored = false;
  const hadStoredSession = !!readStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId).trim();

  const cachedResult = readCachedPortalDataSnapshot();
  if (cachedResult) {
    applyPortalData(cachedResult);
    restored = restorePortalSession();
  }

  if (!restored && hadStoredSession) {
    const result = await loadData();
    applyPortalData(result);
    restored = restorePortalSession();
  }

  if (restored) {
    refreshPortalDataInBackground();
    return;
  }

  restoreLoginDraft();
  togglePage("login");
}

dom.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await performLogin();
});

dom.loginBtn.addEventListener("click", () => {
  togglePage("login");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

dom.query.addEventListener("input", syncLoginDraft);
dom.password.addEventListener("input", syncLoginDraft);
if (dom.passwordToggle) {
  dom.passwordToggle.addEventListener("click", toggleStudentPasswordVisibility);
}

dom.userProfile.addEventListener("click", () => {
  if (state.activeStudentId) {
    openProfileModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll("[data-student-pill]").forEach((button) => {
  button.addEventListener("click", async () => {
    dom.query.value = button.dataset.studentPill;
    const student = getStudentByQuery(button.dataset.studentPill);
    if (student && student.password) {
      dom.password.value = student.password;
    }

    await performLogin(button.dataset.studentPill);
  });
});

dom.closeVideoBtn.addEventListener("click", closeVideo);
dom.videoBackdrop.addEventListener("click", closeVideo);
if (dom.startVideoBtn) {
  dom.startVideoBtn.addEventListener("click", startVideoPlayback);
}
if (dom.videoPosterImage) {
  dom.videoPosterImage.addEventListener("dragstart", (event) => event.preventDefault());
}
if (dom.videoModal) {
  dom.videoModal.addEventListener("contextmenu", (event) => {
    if (!dom.videoModal.classList.contains("hidden")) {
      event.preventDefault();
    }
  });
}
dom.closeProfileBtn.addEventListener("click", closeProfileModal);
dom.profileBackdrop.addEventListener("click", closeProfileModal);
dom.closeApprovalStatusBtn.addEventListener("click", closeApprovalStatusModal);
dom.approvalStatusBackdrop.addEventListener("click", closeApprovalStatusModal);
dom.approvalStatusOkBtn.addEventListener("click", closeApprovalStatusModal);
if (dom.closeStudentMessageBtn) {
  dom.closeStudentMessageBtn.addEventListener("click", () => {
    dismissStudentMessage();
    closeStudentMessageModal({ preserveActiveId: true });
  });
}
if (dom.studentMessageBackdrop) {
  dom.studentMessageBackdrop.addEventListener("click", () => {
    dismissStudentMessage();
    closeStudentMessageModal({ preserveActiveId: true });
  });
}
if (dom.studentMessageSkipBtn) {
  dom.studentMessageSkipBtn.addEventListener("click", async () => {
    await handleStudentMessageAction("skip");
  });
}
if (dom.studentMessageReplyBtn) {
  dom.studentMessageReplyBtn.addEventListener("click", async () => {
    await handleStudentMessageAction("reply");
  });
}
dom.profileBackBtn.addEventListener("click", closeProfileModal);
dom.profileLogoutBtn.addEventListener("click", () => {
  logout();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
dom.profileResetLink.addEventListener("click", () => {
  if (state.activeStudentId) {
    showToast("Password reset option opened.", "info");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!dom.studentMessageModal.classList.contains("hidden")) {
      dismissStudentMessage();
      closeStudentMessageModal({ preserveActiveId: true });
      return;
    }

    if (!dom.approvalStatusModal.classList.contains("hidden")) {
      closeApprovalStatusModal();
      return;
    }

    if (!dom.profileModal.classList.contains("hidden")) {
      closeProfileModal();
      return;
    }

    closeVideo();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && state.activeStudentId) {
    refreshStudentInboxInBackground(state.activeStudentId, { openModal: true });
  }
});

window.addEventListener("focus", () => {
  if (state.activeStudentId) {
    refreshStudentInboxInBackground(state.activeStudentId, { openModal: true });
  }
});

window.addEventListener("resize", () => {
  if (state.activeStudentId) {
    scheduleCourseAccordionSync();
  }
});

initialize().catch((error) => {
  console.error(error);
  setFeedback("Failed to load data.", "error");
  showToast("Could not load data.", "error");
});
