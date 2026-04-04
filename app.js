const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const APP_CONFIG = Object.freeze({
  dataMode: "remote",
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
  remoteRequestTimeoutMs: 30000,
  passwordResetTimeoutMs: 20000,
  remoteLoginRetryCount: 1,
  remotePaymentTimeoutMs: 45000,
  remotePaymentRetryCount: 1,
  remoteRetryDelayMs: 1200,
  portalDataCacheTtlMs: 5 * 60 * 1000,
  studentInboxPollIntervalMs: 15000,
  deviceIpCacheTtlMs: 10 * 60 * 1000,
});
const OFFICIAL_SUPPORT_EMAIL = "bjsacademy38@gmail.com";
const LEGACY_SUPPORT_EMAILS = Object.freeze([
  "Prottoybiswas575358@gmail.com",
  "support@ainpathshala.com",
]);

const SESSION_STORAGE_KEYS = Object.freeze({
  activeStudentId: "ain-pathshala.activeStudentId",
  openCourseId: "ain-pathshala.openCourseId",
  pendingCourseRequestIds: "ain-pathshala.pendingCourseRequestIds",
  studentSessionToken: "ain-pathshala.studentSessionToken.v1",
  loginQuery: "ain-pathshala.loginQuery",
  loginPassword: "ain-pathshala.loginPassword",
  portalDataSnapshot: "ain-pathshala.portalDataSnapshot.v2",
  deviceId: "ain-pathshala.deviceId.v1",
  deviceIpCache: "ain-pathshala.deviceIpCache.v1",
  deviceGeoCache: "ain-pathshala.deviceGeoCache.v1",
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

const UNLIMITED_ACCESS_VALUES = Object.freeze([
  "true",
  "1",
  "yes",
  "on",
  "enable",
  "enabled",
  "unlimited",
  "lifetime",
  "forever",
  "permanent",
]);

const INACTIVE_COURSE_STATUS_VALUES = Object.freeze([
  "inactive",
  "disabled",
  "deactivated",
  "hidden",
  "draft",
  "archived",
  "blocked",
  "off",
  "false",
  "0",
]);

const SECURITY_LOCK_LOGIN_MESSAGE =
  "The same transaction ID was used in multiple places. Contact the admin panel before trying another payment.";

const SECURITY_LOCK_VIDEO_MESSAGE =
  "Only orientation classes remain open. Every paid video, including previously unlocked courses, stays blocked until the admin removes this security lock.";

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

const COURSE_FIELD_KEYS = Object.freeze({
  price: ["price", "fee", "courseFee", "monthlyFee", "amount"],
  status: ["status", "courseStatus", "visibility", "publishStatus", "courseVisibility", "isActive"],
});

const PAYMENT_FIELD_KEYS = Object.freeze({
  id: ["id", "paymentId", "requestId"],
  studentId: ["studentId", "studentID", "approvedStudentId"],
  studentName: ["studentName", "name", "fullName"],
  studentPhone: ["studentPhone", "phone", "mobile"],
  courseId: ["courseId", "courseID"],
  courseTitle: ["courseTitle", "courseName", "title"],
  amount: ["amount", "fee", "price", "monthlyFee"],
  paymentMethod: ["paymentMethod", "method"],
  paymentNumber: ["paymentNumber", "merchantNumber", "bkashNumber"],
  studentTransactionId: ["studentTransactionId", "transactionId", "submittedTransactionId"],
  confirmedTransactionId: ["confirmedTransactionId", "merchantTransactionId", "reviewTransactionId"],
  status: ["status", "paymentStatus"],
  submittedOn: ["submittedOn", "createdOn", "requestedOn"],
  reviewedOn: ["reviewedOn", "updatedOn", "approvedOn"],
  reviewedBy: ["reviewedBy", "approvedBy", "handledBy"],
  paymentDate: ["paymentDate", "paidOn", "approvedPaymentDate"],
  accessStartDate: ["accessStartDate", "startDate", "activeFrom"],
  accessEndDate: ["accessEndDate", "endDate", "validUntil"],
  paymentDueDate: ["paymentDueDate", "nextPaymentDueDate", "lastPaymentDueDate"],
  approvalMode: ["approvalMode", "matchMode"],
  note: ["note", "studentNote", "remarks"],
  reviewNote: ["reviewNote", "adminNote", "comment"],
});

const DEMO_DATA_SCRIPT_URL = "./data/portal-demo-data.js?v=20260331-2";
let demoDataPromise = null;
let courseAccordionSyncFrame = 0;
let activeActionNotice = null;
let activeActionNoticeTimer = 0;

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
    payments: [],
    hasEnrollmentSheet: false,
    studentMap: new Map(),
    courseMap: new Map(),
    courseReferenceMap: new Map(),
    lessonsByCourseId: new Map(),
  };
}

const state = {
  data: createEmptyPortalData(),
  dataModeLabel: "",
  activeStudentId: "",
  studentSessionToken: "",
  openCourseId: "",
  pendingCourseRequestIds: new Set(),
  courseRequestBusyIds: new Set(),
  activeMessageId: "",
  dismissedMessageIds: new Set(),
  messageReplyBusy: false,
  paymentSubmitBusy: false,
  activePaymentCourseId: "",
  messageInboxPollHandle: 0,
  loginBusy: false,
  passwordResetBusy: false,
  passwordResetQuery: "",
  passwordResetStudentId: "",
  passwordResetMaskedEmail: "",
  passwordResetOtp: "",
};

let remoteWarmupPromise = null;

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
  preLoginStage: document.getElementById("preLoginStage"),
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
  paymentModal: document.getElementById("paymentModal"),
  paymentBackdrop: document.getElementById("paymentBackdrop"),
  closePaymentBtn: document.getElementById("closePaymentBtn"),
  paymentForm: document.getElementById("paymentForm"),
  paymentCourseName: document.getElementById("paymentCourseName"),
  paymentCourseFee: document.getElementById("paymentCourseFee"),
  paymentBkashNumber: document.getElementById("paymentBkashNumber"),
  paymentStudentId: document.getElementById("paymentStudentId"),
  copyBkashNumberBtn: document.getElementById("copyBkashNumberBtn"),
  paymentTransactionId: document.getElementById("paymentTransactionId"),
  paymentNote: document.getElementById("paymentNote"),
  paymentSubmitBtn: document.getElementById("paymentSubmitBtn"),
  paymentFeedback: document.getElementById("paymentFeedback"),
  videoModal: document.getElementById("videoModal"),
  videoBackdrop: document.getElementById("videoBackdrop"),
  closeVideoBtn: document.getElementById("closeVideoBtn"),
  videoPlayer: document.getElementById("videoPlayer"),
  videoStage: document.getElementById("videoStage"),
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
  forgotPasswordBtn: document.getElementById("forgotPasswordBtn"),
  forgotPasswordModal: document.getElementById("forgotPasswordModal"),
  forgotPasswordBackdrop: document.getElementById("forgotPasswordBackdrop"),
  closeForgotPasswordBtn: document.getElementById("closeForgotPasswordBtn"),
  forgotPasswordTitle: document.getElementById("forgotPasswordTitle"),
  forgotPasswordMeta: document.getElementById("forgotPasswordMeta"),
  forgotPasswordStepLookup: document.getElementById("forgotPasswordStepLookup"),
  forgotPasswordStepOtp: document.getElementById("forgotPasswordStepOtp"),
  forgotPasswordStepReset: document.getElementById("forgotPasswordStepReset"),
  forgotPasswordQuery: document.getElementById("forgotPasswordQuery"),
  forgotPasswordRequestBtn: document.getElementById("forgotPasswordRequestBtn"),
  forgotPasswordOtp: document.getElementById("forgotPasswordOtp"),
  forgotPasswordVerifyBtn: document.getElementById("forgotPasswordVerifyBtn"),
  forgotPasswordResendBtn: document.getElementById("forgotPasswordResendBtn"),
  forgotPasswordNewPassword: document.getElementById("forgotPasswordNewPassword"),
  forgotPasswordConfirmPassword: document.getElementById("forgotPasswordConfirmPassword"),
  forgotPasswordSaveBtn: document.getElementById("forgotPasswordSaveBtn"),
  forgotPasswordFeedback: document.getElementById("forgotPasswordFeedback"),
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

function getPersistentPortalDeviceId() {
  const existingId = readStoredPortalValue(SESSION_STORAGE_KEYS.deviceId).trim();
  if (existingId) {
    return existingId;
  }

  const nextId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `device-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  writeStoredPortalValue(SESSION_STORAGE_KEYS.deviceId, nextId);
  return nextId;
}

function readStoredPortalJson(key) {
  const rawValue = readStoredPortalValue(key).trim();
  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    return null;
  }
}

function writeStoredPortalJson(key, value) {
  try {
    writeStoredPortalValue(key, JSON.stringify(value));
  } catch (error) {
    removeStoredPortalValue(key);
  }
}

function detectPortalDisplayMode() {
  const displayModes = ["standalone", "fullscreen", "minimal-ui", "window-controls-overlay"];
  for (const mode of displayModes) {
    try {
      if (typeof window.matchMedia === "function" && window.matchMedia(`(display-mode: ${mode})`).matches) {
        return mode;
      }
    } catch (error) {
      // Ignore unsupported display-mode queries.
    }
  }

  if (navigator.standalone === true) {
    return "standalone";
  }

  return "browser";
}

function detectPortalClientShell() {
  const userAgent = navigator.userAgent || "";
  const referrer = document.referrer || "";
  const displayMode = detectPortalDisplayMode();

  if (/^android-app:\/\//i.test(referrer)) {
    return "Trusted Web Activity";
  }
  if (/Android/i.test(userAgent) && /(?:; wv\b|\bwv\b)/i.test(userAgent)) {
    return "Android WebView";
  }
  if (displayMode !== "browser") {
    return "Standalone App";
  }
  if (/FBAN|FBAV|Instagram|Line\/|TikTok|GSA\/|LinkedInApp|Snapchat/i.test(userAgent)) {
    return "Embedded App";
  }

  return "Browser";
}

function buildPortalBrowserName() {
  const userAgent = navigator.userAgent || "";
  if (/Edg\//i.test(userAgent)) {
    return "Edge";
  }
  if (/OPR\//i.test(userAgent) || /Opera/i.test(userAgent)) {
    return "Opera";
  }
  if (/Firefox\//i.test(userAgent)) {
    return "Firefox";
  }
  if (/Chrome\//i.test(userAgent) && !/Edg\//i.test(userAgent)) {
    return "Chrome";
  }
  if (/Safari\//i.test(userAgent) && !/Chrome\//i.test(userAgent) && !/Chromium\//i.test(userAgent)) {
    return "Safari";
  }
  return "Browser";
}

function buildPortalPlatformName() {
  const userAgent = navigator.userAgent || "";
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  const source = `${platform} ${userAgent}`;

  if (/Windows/i.test(source)) {
    return "Windows";
  }
  if (/Android/i.test(source)) {
    return "Android";
  }
  if (/iPhone|iPad|iPod/i.test(source)) {
    return "iPhone";
  }
  if (/Mac/i.test(source)) {
    return "macOS";
  }
  if (/Linux/i.test(source)) {
    return "Linux";
  }
  return platform || "Device";
}

function buildPortalScreenSizeLabel() {
  const screenWidth = window.screen?.width || window.innerWidth || 0;
  const screenHeight = window.screen?.height || window.innerHeight || 0;
  if (!screenWidth || !screenHeight) {
    return "";
  }

  const normalizedWidth = Math.min(screenWidth, screenHeight);
  const normalizedHeight = Math.max(screenWidth, screenHeight);
  return `${normalizedWidth}x${normalizedHeight}`;
}

function buildPortalDeviceName() {
  const browserName = buildPortalBrowserName();
  const platformName = buildPortalPlatformName();
  const clientShell = detectPortalClientShell();
  const shellSuffix = clientShell !== "Browser" && clientShell !== browserName ? ` (${clientShell})` : "";
  return `${browserName}${shellSuffix} on ${platformName}`;
}

function extractPortalHardwareModel() {
  const userAgent = navigator.userAgent || "";
  const platformName = buildPortalPlatformName();
  const androidMatch =
    userAgent.match(/Android\s[\d.]+;\s*([^;()]+?)\s+Build\//i) ||
    userAgent.match(/Android\s[\d.]+;\s*([^;()]+?)\)/i);
  if (androidMatch && androidMatch[1]) {
    return String(androidMatch[1]).trim();
  }

  if (/iPad/i.test(userAgent)) {
    return "ipad";
  }
  if (/iPhone/i.test(userAgent)) {
    return "iphone";
  }
  if (/Windows/i.test(platformName)) {
    return "windows";
  }
  if (/macOS/i.test(platformName)) {
    return "mac";
  }
  if (/Linux/i.test(platformName)) {
    return "linux";
  }

  return platformName.toLowerCase();
}

function buildPortalStableDeviceFingerprintParts() {
  return [
    extractPortalHardwareModel(),
    buildPortalPlatformName(),
    buildPortalScreenSizeLabel(),
    Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    navigator.language || navigator.languages?.[0] || "",
    String(window.screen?.colorDepth || ""),
    String(window.devicePixelRatio || ""),
    String(navigator.maxTouchPoints || ""),
    String(navigator.hardwareConcurrency || ""),
    String(navigator.deviceMemory || ""),
  ]
    .map((value) => String(value || "").trim().toLowerCase())
    .filter(Boolean);
}

function buildPortalDeviceFingerprint() {
  const parts = buildPortalStableDeviceFingerprintParts();
  return parts.length ? `slot:${parts.join("|")}` : "";
}

function normalizePortalPublicIp(value) {
  const candidate = String(value || "").trim().replace(/\s+/g, "");
  if (!candidate) {
    return "";
  }
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(candidate)) {
    return candidate;
  }
  if (/^[a-f0-9:]+$/i.test(candidate) && candidate.includes(":")) {
    return candidate;
  }
  return "";
}

async function fetchPortalPublicIpFromSource(source) {
  try {
    const response = await fetchRemoteResponseWithTimeout(
      source.url,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain;q=0.9, */*;q=0.8",
        },
      },
      {
        timeoutMs: 2500,
        timeoutMessage: "IP lookup timed out.",
      }
    );

    if (!response.ok) {
      return "";
    }

    const rawText = await response.text();
    if (!rawText) {
      return "";
    }

    if (source.kind === "text") {
      return normalizePortalPublicIp(rawText);
    }

    const payload = JSON.parse(rawText);
    return normalizePortalPublicIp(payload?.[source.key] || "");
  } catch (error) {
    return "";
  }
}

async function getPortalPublicIp(options = {}) {
  const forceRefresh = options.forceRefresh === true;
  const cachedPayload = !forceRefresh ? readStoredPortalJson(SESSION_STORAGE_KEYS.deviceIpCache) : null;
  if (cachedPayload && cachedPayload.ip && Date.now() - Number(cachedPayload.cachedAt || 0) < APP_CONFIG.deviceIpCacheTtlMs) {
    return String(cachedPayload.ip || "").trim();
  }

  const lookupSources = [
    { url: "https://api64.ipify.org?format=json", kind: "json", key: "ip" },
    { url: "https://api.ipify.org?format=json", kind: "json", key: "ip" },
    { url: "https://api.myip.com", kind: "json", key: "ip" },
    { url: "https://ipapi.co/json/", kind: "json", key: "ip" },
  ];

  const lookupResults = await Promise.allSettled(lookupSources.map((source) => fetchPortalPublicIpFromSource(source)));
  const nextIp =
    lookupResults.find((result) => result.status === "fulfilled" && normalizePortalPublicIp(result.value))?.value || "";

  if (nextIp) {
    writeStoredPortalJson(SESSION_STORAGE_KEYS.deviceIpCache, {
      ip: nextIp,
      cachedAt: Date.now(),
    });
    return nextIp;
  }

  return cachedPayload?.ip ? String(cachedPayload.ip).trim() : "";
}

function requestPortalGeolocationSnapshot(options = {}) {
  const shouldPrompt = options.prompt === true;
  const cachedPayload = readStoredPortalJson(SESSION_STORAGE_KEYS.deviceGeoCache);
  const cachedResult = cachedPayload && typeof cachedPayload === "object" ? cachedPayload : null;

  if (!navigator.geolocation) {
    return Promise.resolve({
      locationPermission: "Unsupported",
      latitude: "",
      longitude: "",
    });
  }

  const resolveWithCache = () => ({
    locationPermission: String(cachedResult?.locationPermission || "Not Requested").trim() || "Not Requested",
    latitude: String(cachedResult?.latitude || "").trim(),
    longitude: String(cachedResult?.longitude || "").trim(),
  });

  if (!shouldPrompt && cachedResult) {
    return Promise.resolve(resolveWithCache());
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextPayload = {
          locationPermission: "Granted",
          latitude: String(position.coords?.latitude ?? "").trim(),
          longitude: String(position.coords?.longitude ?? "").trim(),
        };
        writeStoredPortalJson(SESSION_STORAGE_KEYS.deviceGeoCache, nextPayload);
        resolve(nextPayload);
      },
      (error) => {
        const nextPermission = error?.code === 1 ? "Denied" : "Prompt";
        const nextPayload = {
          locationPermission: nextPermission,
          latitude: "",
          longitude: "",
        };
        writeStoredPortalJson(SESSION_STORAGE_KEYS.deviceGeoCache, nextPayload);
        resolve(nextPayload);
      },
      {
        enableHighAccuracy: false,
        timeout: 6000,
        maximumAge: 10 * 60 * 1000,
      }
    );
  });
}

async function collectPortalDeviceContext(options = {}) {
  const promptLocation = options.promptLocation === true;
  const refreshIp = options.refreshIp === true;
  const clientShell = detectPortalClientShell();
  const displayMode = detectPortalDisplayMode();
  const [publicIp, location] = await Promise.all([
    getPortalPublicIp({ forceRefresh: refreshIp }),
    requestPortalGeolocationSnapshot({ prompt: promptLocation }),
  ]);

  return {
    deviceId: getPersistentPortalDeviceId(),
    deviceName: buildPortalDeviceName(),
    deviceFingerprint: buildPortalDeviceFingerprint(),
    publicIp,
    userAgent: navigator.userAgent || "",
    platform: buildPortalPlatformName(),
    browserLanguage: navigator.language || navigator.languages?.[0] || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screenSize: buildPortalScreenSizeLabel(),
    clientShell,
    displayMode,
    referrer: document.referrer || "",
    locationPermission: String(location?.locationPermission || "Not Requested").trim() || "Not Requested",
    latitude: String(location?.latitude || "").trim(),
    longitude: String(location?.longitude || "").trim(),
  };
}

function serializePortalDataSnapshot(data) {
  const activeStudentId = state.activeStudentId || readStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId).trim();
  const students = (data?.students || []).filter((student) => {
    return !activeStudentId || student.id === activeStudentId;
  });
  const enrollments = (data?.enrollments || []).filter((enrollment) => {
    return !activeStudentId || enrollment.studentId === activeStudentId;
  });
  const payments = (data?.payments || []).filter((payment) => {
    return !activeStudentId || payment.studentId === activeStudentId;
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
    payments,
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

function getPortalBrandName() {
  const documentTitle =
    typeof document !== "undefined" ? String(document.title || "").split("-")[0].trim() : "";
  return getPortalCopyValue("academyName", documentTitle || "Ain Pathshala");
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

function isUnlimitedAccessEnabled(value) {
  return UNLIMITED_ACCESS_VALUES.includes(getNormalizedLookupValue(value));
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

function normalizeCourseVisibilityStatus(value) {
  return INACTIVE_COURSE_STATUS_VALUES.includes(getNormalizedLookupValue(value)) ? "Inactive" : "Active";
}

function isCourseVisibleToStudents(course) {
  return normalizeCourseVisibilityStatus(
    getFirstAvailableValue(course || {}, COURSE_FIELD_KEYS.status, "Active")
  ) === "Active";
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

function formatCoursePrice(value, fallback = "Amount shared in popup") {
  const amount = String(value || "").trim();
  if (!amount) {
    return fallback;
  }

  return `Tk ${amount}`;
}

function normalizePaymentStatusValue(value) {
  return normalizeAccessModeValue(value).replace(/\s+/g, "");
}

function isPendingPaymentStatus(value) {
  return ["pending", "submitted", "underreview", "awaitingreview", "awaitingconfirmation"].includes(
    normalizePaymentStatusValue(value)
  );
}

function isApprovedPaymentStatus(value) {
  return normalizePaymentStatusValue(value) === "approved";
}

function isRejectedPaymentStatus(value) {
  return ["rejected", "declined", "failed", "cancelled", "canceled"].includes(
    normalizePaymentStatusValue(value)
  );
}

function getStudentSecurityLockMessage(student) {
  const highlight = String(student?.highlight || "").trim();
  return /^security lock:/i.test(highlight) ? highlight : "";
}

function isStudentSecurityLocked(student) {
  return !!getStudentSecurityLockMessage(student);
}

function getStudentVisiblePaymentReviewNote(payment) {
  const reviewNote = String(payment?.reviewNote || "").trim();
  const normalizedReviewNote = getCompactLookupValue(reviewNote);
  return normalizedReviewNote === "paymentrejectedfromadminpanel" ? "" : reviewNote;
}

function getStudentPayments(studentId) {
  return (state.data.payments || []).filter((payment) => payment.studentId === studentId);
}

function getLatestPaymentForCourse(studentId, courseId) {
  return (
    getStudentPayments(studentId)
      .filter((payment) => payment.courseId === courseId)
      .sort((left, right) => {
        const leftTime = new Date(left.reviewedOn || left.submittedOn || 0).getTime();
        const rightTime = new Date(right.reviewedOn || right.submittedOn || 0).getTime();
        return rightTime - leftTime;
      })[0] || null
  );
}

function getLatestPendingPaymentForCourse(studentId, courseId) {
  return (
    getStudentPayments(studentId)
      .filter((payment) => payment.courseId === courseId && isPendingPaymentStatus(payment.status))
      .sort((left, right) => new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0))[0] || null
  );
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

function isPhoneOnlyDevice() {
  const userAgent = navigator.userAgent || "";
  const hasMobileUserAgent = /Android.+Mobile|iPhone|iPod|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(
    userAgent
  );
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const isPhoneViewport = window.matchMedia("(max-width: 767px)").matches;

  return hasMobileUserAgent || (isCoarsePointer && isPhoneViewport);
}

async function requestMobileLandscapeMode() {
  if (!isPhoneOnlyDevice()) {
    return;
  }

  const stageElement = dom.videoStage || dom.videoModal;
  if (!stageElement) {
    return;
  }

  try {
    if (!document.fullscreenElement && typeof stageElement.requestFullscreen === "function") {
      await stageElement.requestFullscreen({ navigationUI: "hide" });
    }
  } catch (error) {
    // Ignore fullscreen failures; orientation lock may still work on some browsers.
  }

  try {
    if (screen.orientation?.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch (error) {
    // Mobile browsers often require fullscreen or user settings to allow orientation lock.
  }
}

async function releaseMobileLandscapeMode() {
  try {
    if (screen.orientation?.unlock) {
      screen.orientation.unlock();
    }
  } catch (error) {
    // No-op if unlock is unavailable.
  }

  try {
    if (document.fullscreenElement && typeof document.exitFullscreen === "function") {
      await document.exitFullscreen();
    }
  } catch (error) {
    // No-op if fullscreen exit is blocked by the browser.
  }
}

function getVideoWatermarkData() {
  const activeStudent = getActiveStudent();
  if (!activeStudent) {
    return {
      name: "Authorized Student",
      idLabel: "Portal Session",
    };
  }

  const studentName = String(activeStudent.name || "").trim() || "Authorized Student";
  const studentId = String(activeStudent.id || activeStudent.studentId || "").trim();

  return {
    name: studentName,
    idLabel: studentId ? `ID ${studentId}` : "Portal Session",
  };
}

function getVideoWatermarkMarkup() {
  const watermarkData = getVideoWatermarkData();

  return `
    <span class="academy-player-watermark-name">${escapeHtml(watermarkData.name)}</span>
    <span class="academy-player-watermark-id">${escapeHtml(watermarkData.idLabel)}</span>
  `;
}

function updateVideoWatermarks() {
  const watermarkMarkup = getVideoWatermarkMarkup();

  if (dom.videoWatermark) {
    dom.videoWatermark.innerHTML = watermarkMarkup;
  }

  if (dom.videoLiveWatermark) {
    dom.videoLiveWatermark.innerHTML = watermarkMarkup;
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

  void requestMobileLandscapeMode();
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
  const studentMap = new Map(students.map((student) => [student.id, student]));

  const courses = (raw.courses || []).map((course) => ({
    id: course.id || course.courseId || "",
    title: course.title || course.name || "Untitled Course",
    shortTitle: course.shortTitle || course.title || "Course",
    faculty: course.faculty || course.instructor || "Faculty not set",
    category: course.category || "Course",
    schedule: course.schedule || "Schedule pending",
    nextLive: course.nextLive || course.nextClass || "",
    price: getFirstAvailableValue(course, COURSE_FIELD_KEYS.price, ""),
    description: course.description || "",
    status: normalizeCourseVisibilityStatus(
      getFirstAvailableValue(course, COURSE_FIELD_KEYS.status, "Active")
    ),
  }))
  .filter((course) => course.id && isCourseVisibleToStudents(course));
  const courseMap = new Map(courses.map((course) => [course.id, course]));

  const lessons = (raw.lessons || [])
    .map((lesson) => {
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
    })
    .filter((lesson) => lesson.id && courseMap.has(lesson.courseId));

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
          unlimitedAccess: isUnlimitedAccessEnabled(
            enrollment.unlimitedAccess ||
              enrollment.unlimited ||
              enrollment.isUnlimited ||
              enrollment.lifetimeAccess ||
              enrollment.permanentAccess ||
              enrollment.alwaysOpen ||
              ""
          ),
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
    .filter((enrollment) => enrollment.studentId && enrollment.courseId && courseMap.has(enrollment.courseId));
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
  const payments = Array.isArray(raw.payments)
    ? raw.payments
        .map((payment, index) => {
          const studentId = String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.studentId, "")).trim();
          const courseId = String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.courseId, "")).trim();
          const linkedStudent = studentMap.get(studentId) || null;
          const linkedCourse = courseMap.get(courseId) || null;

          return {
            id: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.id, `payment-${index + 1}`)).trim(),
            studentId,
            studentName:
              String(linkedStudent?.name || getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.studentName, "")).trim(),
            studentPhone:
              String(linkedStudent?.phone || getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.studentPhone, "")).trim(),
            courseId,
            courseTitle:
              String(linkedCourse?.title || getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.courseTitle, "")).trim(),
            amount:
              String(linkedCourse?.price || getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.amount, "")).trim(),
            paymentMethod: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.paymentMethod, "bKash Send Money")).trim(),
            paymentNumber: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.paymentNumber, "")).trim(),
            studentTransactionId: String(
              getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.studentTransactionId, "")
            ).trim(),
            confirmedTransactionId: String(
              getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.confirmedTransactionId, "")
            ).trim(),
            status: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.status, "Pending")).trim() || "Pending",
            submittedOn: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.submittedOn, "")).trim(),
            reviewedOn: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.reviewedOn, "")).trim(),
            reviewedBy: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.reviewedBy, "")).trim(),
            paymentDate: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.paymentDate, "")).trim(),
            accessStartDate: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.accessStartDate, "")).trim(),
            accessEndDate: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.accessEndDate, "")).trim(),
            paymentDueDate: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.paymentDueDate, "")).trim(),
            approvalMode: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.approvalMode, "")).trim(),
            note: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.note, "")).trim(),
            reviewNote: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.reviewNote, "")).trim(),
          };
        })
        .filter((payment) => payment.id && payment.studentId && payment.courseId && courseMap.has(payment.courseId))
        .sort((left, right) => new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0))
    : null;
  const lessonsByCourseId = buildLessonsByCourseId(lessons);

  return {
    students,
    courses,
    lessons,
    notices,
    enrollments,
    messages,
    payments,
    hasEnrollmentSheet: enrollments.length > 0,
    studentMap,
    courseMap,
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

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.max(0, Number(ms) || 0));
  });
}

function createRemoteTimeoutError(message) {
  const error = new Error(message || "The server took too long to respond.");
  error.code = "REMOTE_TIMEOUT";
  return error;
}

function isRemoteTimeoutError(error) {
  return !!error && (error.code === "REMOTE_TIMEOUT" || error.name === "AbortError");
}

async function fetchRemoteResponseWithTimeout(url, options = {}, timeoutOptions = {}) {
  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutMs = Math.max(1000, Number(timeoutOptions.timeoutMs) || APP_CONFIG.remoteRequestTimeoutMs);
  const timeoutHandle = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

  try {
    return await fetch(url, {
      ...options,
      signal: controller ? controller.signal : options.signal,
    });
  } catch (error) {
    if (isRemoteTimeoutError(error)) {
      throw createRemoteTimeoutError(timeoutOptions.timeoutMessage);
    }

    throw error;
  } finally {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
  }
}

async function requestPasswordResetAction(action, payload = {}) {
  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    throw new Error("Password reset is available only when the live portal is connected.");
  }

  const response = await fetchRemoteResponseWithTimeout(
    APP_CONFIG.remoteEndpoint,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(
        Object.entries({
          action,
          ...payload,
        }).reduce((result, [key, value]) => {
          if (value !== undefined && value !== null) {
            result[key] = String(value);
          }
          return result;
        }, {})
      ),
    },
    {
      timeoutMs: APP_CONFIG.passwordResetTimeoutMs,
      timeoutMessage: "Password reset request timed out. Please try again.",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to complete the password reset request.");
  }

  return response.json();
}

function warmRemoteConnection() {
  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return Promise.resolve();
  }

  if (remoteWarmupPromise) {
    return remoteWarmupPromise;
  }

  remoteWarmupPromise = fetchRemoteResponseWithTimeout(
    `${APP_CONFIG.remoteEndpoint}?action=status`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    },
    {
      timeoutMs: 12000,
      timeoutMessage: "Login server warm-up timed out.",
    }
  )
    .then(async (response) => {
      if (!response?.ok) {
        return;
      }

      try {
        await response.text();
      } catch (error) {
        console.warn("Login server warm-up response could not be read.", error);
      }
    })
    .catch(() => {})
    .finally(() => {
      remoteWarmupPromise = null;
    });

  return remoteWarmupPromise;
}

function applyPortalData(result) {
  if (!result || !result.data) {
    return;
  }

  if (!Array.isArray(result.data.messages)) {
    result.data.messages = Array.isArray(state.data.messages) ? state.data.messages : [];
  }
  if (!Array.isArray(result.data.payments)) {
    result.data.payments = Array.isArray(state.data.payments) ? state.data.payments : [];
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
    const validationResult = await validateActiveStudentSession();
    if (validationResult && validationResult.ok === false && !state.activeStudentId) {
      return;
    }

    const result = await loadData();
    if (!result || result.modeLabel !== "Live Google Sheet" || state.activeStudentId !== activeStudentId) {
      return;
    }

    applyPortalData(result);
    await refreshStudentPaymentsInBackground(activeStudentId);
    const refreshedStudent = state.data.students.find((student) => student.id === activeStudentId) || null;
    if (!refreshedStudent) {
      logout({
        message: "Your account session is no longer available. Please sign in again.",
        feedbackTone: "error",
        toastMessage: "Your account session is no longer available.",
        toastType: "error",
      });
      return;
    }

    const approvalState = getStudentApprovalState(refreshedStudent);
    if (approvalState.approvalStatus !== "approved") {
      logout({
        message: approvalState.message || "Your account access has changed. Please sign in again.",
        feedbackTone: approvalState.approvalStatus === "pending" ? "neutral" : "error",
        toastMessage: approvalState.message || "Your account access has changed.",
        toastType: approvalState.approvalStatus === "pending" ? "info" : "error",
      });
      return;
    }

    renderDashboard(refreshedStudent);
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
        ...buildStudentSessionPayload(studentId),
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
      if (result.requiresLogout || isStudentSessionErrorMessage(result.message)) {
        logout({
          message: result.message || "This device session is no longer active. Please sign in again.",
          feedbackTone: "error",
          toastMessage: result.message || "Device session ended.",
          toastType: "error",
        });
      }
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

    refreshPortalDataInBackground();
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
    removeStoredPortalValue(SESSION_STORAGE_KEYS.studentSessionToken);
    removeStoredPortalValue(SESSION_STORAGE_KEYS.openCourseId);
    removeStoredPortalValue(SESSION_STORAGE_KEYS.pendingCourseRequestIds);
    return;
  }

  writeStoredPortalValue(SESSION_STORAGE_KEYS.activeStudentId, state.activeStudentId);
  writeStoredPortalValue(SESSION_STORAGE_KEYS.studentSessionToken, state.studentSessionToken || "");
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
  const storedSessionToken = readStoredPortalValue(SESSION_STORAGE_KEYS.studentSessionToken).trim();
  if (!storedStudentId || (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint && !storedSessionToken)) {
    return false;
  }

  const student = state.data.students.find((entry) => entry.id === storedStudentId);
  if (!student || isStudentLoginBlocked(student) || !isLoginApprovalGranted(student.loginApproval)) {
    state.activeStudentId = "";
    state.studentSessionToken = "";
    state.openCourseId = "";
    state.pendingCourseRequestIds = new Set();
    syncPortalSession();
    return false;
  }

  const storedCourseId = readStoredPortalValue(SESSION_STORAGE_KEYS.openCourseId).trim();

  state.activeStudentId = student.id;
  state.studentSessionToken = storedSessionToken;
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

  if (isStudentSecurityLocked(student)) {
    return "security-lock";
  }

  if (isPreviewAccessValue(student.portalAccessMode) || isPreviewAccessValue(student.loginApproval)) {
    return "preview";
  }

  return "full";
}

function isStudentPreviewOnly(student) {
  return getStudentPortalAccessMode(student) !== "full";
}

function isLoginApprovalGranted(value) {
  const normalized = normalizeAccessModeValue(value);
  return APPROVED_LOGIN_VALUES.includes(normalized) || PREVIEW_LOGIN_VALUES.includes(normalized);
}

function isStudentLoginBlocked(student) {
  const normalized = String(student.status || "").trim().toLowerCase();
  return ["inactive", "blocked", "suspended", "expired"].includes(normalized) && !isStudentSecurityLocked(student);
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

  if (isStudentSecurityLocked(student)) {
    return {
      approvalStatus: "approved",
      message: getStudentSecurityLockMessage(student) || SECURITY_LOCK_LOGIN_MESSAGE,
    };
  }

  if (isStudentLoginBlocked(student)) {
    return {
      approvalStatus: "inactive",
      message: getStudentSecurityLockMessage(student) || "This student account is not active.",
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

function isStudentSessionErrorMessage(message) {
  const normalized = getCompactLookupValue(message || "");
  return (
    normalized.includes("devicesession") ||
    normalized.includes("nolongerapproved") ||
    normalized.includes("devicewasremoved") ||
    normalized.includes("deviceisno") ||
    normalized.includes("sessionexpired") ||
    normalized.includes("loginagain") ||
    normalized.includes("loginaagain") ||
    normalized.includes("logingagain")
  );
}

function buildStudentSessionPayload(studentId = state.activeStudentId, sessionToken = state.studentSessionToken) {
  return {
    studentId: String(studentId || "").trim(),
    sessionToken: String(sessionToken || "").trim(),
    deviceId: getPersistentPortalDeviceId(),
    deviceFingerprint: buildPortalDeviceFingerprint(),
    userAgent: navigator.userAgent || "",
    platform: buildPortalPlatformName(),
    browserLanguage: navigator.language || navigator.languages?.[0] || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screenSize: buildPortalScreenSizeLabel(),
  };
}

function formatApprovedDevicesForPrompt(devices = []) {
  return devices
    .slice(0, 4)
    .map((device, index) => {
      const name = String(device.deviceName || "Approved Device").trim() || "Approved Device";
      const ip = String(device.publicIp || "").trim();
      const lastSeen = String(device.lastSeenOn || device.lastLoginOn || "").trim();
      const meta = [ip ? `IP ${ip}` : "", lastSeen ? `Seen ${formatDateTime(lastSeen, "recently")}` : ""]
        .filter(Boolean)
        .join(" | ");
      return `${index + 1}. ${name}${meta ? ` (${meta})` : ""}`;
    })
    .join("\n");
}

async function logoutActiveDeviceSessionSilently(studentId = state.activeStudentId, sessionToken = state.studentSessionToken) {
  if (!studentId || !sessionToken || APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return;
  }

  const payload = new URLSearchParams({
    action: "studentlogoutdevice",
    ...buildStudentSessionPayload(studentId, sessionToken),
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload.toString()], {
        type: "application/x-www-form-urlencoded;charset=UTF-8",
      });
      navigator.sendBeacon(APP_CONFIG.remoteEndpoint, blob);
      return;
    }
  } catch (error) {
    // Fall back to fetch keepalive.
  }

  try {
    fetch(APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch (error) {
    // Ignore logout sync failures.
  }
}

async function validateActiveStudentSession(options = {}) {
  if (!state.activeStudentId || !state.studentSessionToken || APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return { ok: true };
  }

  const deviceContext = await collectPortalDeviceContext({
    promptLocation: false,
    refreshIp: options.refreshIp === true,
  });
  const requestBody = new URLSearchParams({
    action: "studentvalidate",
    studentId: state.activeStudentId,
    sessionToken: state.studentSessionToken,
    ...deviceContext,
  });

  try {
    const response = await fetchRemoteResponseWithTimeout(
      APP_CONFIG.remoteEndpoint,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: requestBody,
      },
      {
        timeoutMs: APP_CONFIG.remoteRequestTimeoutMs,
        timeoutMessage: "Session validation timed out.",
      }
    );

    if (!response.ok) {
      throw new Error(`Session validation failed (${response.status}).`);
    }

    const result = JSON.parse(await response.text());
    if (!result?.ok) {
      if (result?.requiresLogout || isStudentSessionErrorMessage(result?.message)) {
        logout({
          message: result.message || "This device is no longer approved. Please sign in again.",
          feedbackTone: "error",
          toastMessage: result.message || "This device is no longer approved.",
          toastType: "error",
        });
      }
      return result;
    }

    return result;
  } catch (error) {
    if (options.throwOnFailure) {
      throw error;
    }

    console.warn("Unable to validate the active student session.", error);
    return { ok: false, message: error.message || "Session validation failed." };
  }
}

async function authenticateRemoteStudentOnce(query, password, options = {}) {
  let rawResponse = "";
  const deviceContext = await collectPortalDeviceContext({
    promptLocation: options.promptLocation !== false,
    refreshIp: true,
  });
  const response = await fetchRemoteResponseWithTimeout(
    APP_CONFIG.remoteEndpoint,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "login",
        query: String(query || "").trim(),
        password: String(password || ""),
        replaceOldestDevice: options.replaceOldestDevice ? "true" : "",
        replaceDeviceId: String(options.replaceDeviceId || "").trim(),
        ...deviceContext,
      }),
    },
    {
      timeoutMessage: "Login server is taking longer than usual. Please wait a few seconds and try again.",
    }
  );

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

async function authenticateRemoteStudent(query, password, options = {}) {
  const totalAttempts = Math.max(1, Number(APP_CONFIG.remoteLoginRetryCount) + 1 || 1);
  let lastError = null;

  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    try {
      return await authenticateRemoteStudentOnce(query, password, options);
    } catch (error) {
      lastError = error;

      if (!isRemoteTimeoutError(error) || attempt >= totalAttempts - 1) {
        break;
      }

      await delay(APP_CONFIG.remoteRetryDelayMs);
    }
  }

  throw lastError;
}

async function authenticateStudent(query, password, options = {}) {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
    return authenticateRemoteStudent(query, password, options);
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
    unlimitedAccess: false,
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
  const securityLocked = isStudentSecurityLocked(student);
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
      securityLocked,
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
  const securityLocked = isStudentSecurityLocked(student);

  return state.data.courses
    .map((course) => {
      const enrolledEntry = enrolledEntryMap.get(course.id);
      if (enrolledEntry) {
        return {
          ...enrolledEntry,
          catalogOnly: false,
          pendingRequest: false,
          pendingPayment: false,
          latestPendingPayment: null,
          latestPayment: null,
          latestRejectedPayment: null,
          paymentRejected: false,
        };
      }

      const latestPayment = getLatestPaymentForCourse(student.id, course.id);
      const latestPendingPayment = latestPayment && isPendingPaymentStatus(latestPayment.status) ? latestPayment : null;
      const latestRejectedPayment =
        latestPayment && isRejectedPaymentStatus(latestPayment.status) ? latestPayment : null;

      return {
        id: `catalog-${student.id}-${course.id}`,
        studentId: student.id,
        courseId: course.id,
        course,
        previewOnly: false,
        securityLocked,
        catalogOnly: true,
        pendingRequest: pendingCourseIds.has(course.id),
        pendingPayment: !!latestPendingPayment,
        paymentRejected: !!latestRejectedPayment,
        latestPayment,
        latestPendingPayment,
        latestRejectedPayment,
        accessStartDate: "",
        accessEndDate: "",
        unlimitedAccess: false,
        videoAccessUntil: "",
        lastPaymentDate: "",
        paymentDueDate: "",
        monthlyFee: "",
        paidMonths: [],
        status: securityLocked
          ? "Security Lock"
          : latestPendingPayment
          ? "Payment Submitted"
          : latestRejectedPayment
          ? "Payment Rejected"
          : pendingCourseIds.has(course.id)
          ? "Pending Request"
          : "Catalog Locked",
      };
    })
    .sort((left, right) => {
      const leftRank = !left.catalogOnly ? 0 : left.pendingPayment || left.pendingRequest ? 1 : left.paymentRejected ? 2 : 3;
      const rightRank = !right.catalogOnly ? 0 : right.pendingPayment || right.pendingRequest ? 1 : right.paymentRejected ? 2 : 3;
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
  if (entry.securityLocked) {
    return `${getStudentSecurityLockMessage(getActiveStudent()) || SECURITY_LOCK_LOGIN_MESSAGE} ${SECURITY_LOCK_VIDEO_MESSAGE}`;
  }

  if (entry.pendingPayment) {
    return "Your payment request is waiting for admin review. Access will open after the transaction is confirmed.";
  }

  if (entry.paymentRejected) {
    const reviewNote = getStudentVisiblePaymentReviewNote(entry.latestRejectedPayment);
    return reviewNote
      ? `Your previous payment was rejected. ${reviewNote} Submit a new payment to continue.`
      : "Your previous payment was rejected. Submit a new payment to continue.";
  }

  if (entry.pendingRequest) {
    return "Your access request is pending admin approval. Videos will unlock after review.";
  }

  if (entry.catalogOnly) {
    return "This course is visible in your course map. Use Buy Now to submit your bKash payment and unlock the full course.";
  }

  return "This video is not available right now.";
}

function getCourseEntryStatusMeta(entry) {
  if (entry.securityLocked) {
    return {
      label: "Security Lock",
      className: "bg-rose-100 text-rose-700",
      summary:
        "The same transaction ID was used in multiple places. Every paid course, including previously unlocked ones, stays blocked until the admin removes this security lock. Only orientation classes remain open.",
      accessSummary: "Contact admin panel",
      videoSummary: "Only orientation is open",
    };
  }

  if (entry.catalogOnly) {
    if (entry.pendingPayment) {
      return {
        label: "Payment Pending",
        className: "bg-amber-100 text-amber-800",
        summary:
          "Your bKash payment details have been submitted. Access will unlock after the admin confirms the matching transaction.",
        accessSummary: "Waiting for payment review",
        videoSummary: "Locked until confirmation",
      };
    }

    if (entry.paymentRejected) {
      const reviewNote = getStudentVisiblePaymentReviewNote(entry.latestRejectedPayment);
      return {
        label: "Payment Rejected",
        className: "bg-rose-100 text-rose-700",
        summary: reviewNote
          ? `Your previous payment was rejected. ${reviewNote} Submit a new transaction ID to continue.`
          : "Your previous payment was rejected. Submit a new transaction ID to continue.",
        accessSummary: "Submit a new payment",
        videoSummary: "Still locked",
      };
    }

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
          summary:
            "Orientation classes stay visible from here. To unlock the full course, send bKash payment and submit the transaction ID from Buy Now.",
          accessSummary: "Not granted yet",
          videoSummary: "Submit payment first",
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
    summary: hasUnlimitedCourseAccess(entry)
      ? "Unlimited access is enabled for this course. Access and payment deadlines no longer lock videos while this switch stays on."
      : entry.course.description || "You have active access to this course.",
    accessSummary: formatDateRange(entry.accessStartDate, entry.accessEndDate),
    videoSummary: getEnrollmentVideoAccessSummary(entry),
  };
}

function isEnrollmentBlocked(entry) {
  const normalized = String(entry.status || "").trim().toLowerCase();
  return normalized === "blocked" || normalized === "suspended";
}

function hasUnlimitedCourseAccess(entry) {
  return !!entry && isUnlimitedAccessEnabled(entry.unlimitedAccess);
}

function isPublicOrientationLesson(lesson) {
  const title = getNormalizedLookupValue(lesson?.title || "");
  const moduleTitle = getNormalizedLookupValue(lesson?.module || "");
  return title.includes("orientation class") || title === "orientation" || moduleTitle.includes("orientation class");
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
  const courseEndDate = getLatestValidDateValue([entry.accessEndDate]);
  return courseEndDate?.raw || "";
}

function getEffectiveVideoAccessTimestamp(entry) {
  const fallbackTimestamp = Date.now();
  const accessUntilTimestamp = parseTimestamp(getLessonAvailabilityDate(entry)) ?? fallbackTimestamp;

  return Math.min(accessUntilTimestamp, Date.now());
}

function getEnrollmentVideoAccessSummary(entry) {
  if (entry.securityLocked) {
    return "Only orientation is open";
  }

  if (entry.catalogOnly) {
    return entry.pendingRequest ? "Pending approval" : "Locked";
  }

  if (entry.previewOnly) {
    return "Preview only";
  }

  if (hasUnlimitedCourseAccess(entry)) {
    return "Unlimited access";
  }

  return formatDateRange(entry.accessStartDate, entry.accessEndDate);
}

function getLessonAccessState(entry, lesson) {
  if (isPublicOrientationLesson(lesson)) {
    return {
      canWatch: true,
      reason: "",
      status: "public-open",
    };
  }

  if (entry.securityLocked) {
    return {
      canWatch: false,
      reason: `${getStudentSecurityLockMessage(getActiveStudent()) || SECURITY_LOCK_LOGIN_MESSAGE} ${SECURITY_LOCK_VIDEO_MESSAGE}`,
      status: "security-lock",
    };
  }

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

  if (hasUnlimitedCourseAccess(entry)) {
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

  if (releaseTimestamp > Date.now()) {
    const approvedUntilLabel = formatDate(getLessonAvailabilityDate(entry), "the available date");
    return {
      canWatch: false,
      reason: approvedUntilLabel === "the available date"
        ? `This lesson will unlock on ${formatDate(lesson.releaseDate, "the scheduled date")}.`
        : `This lesson will unlock on ${formatDate(lesson.releaseDate, "the scheduled date")}, within your approved course dates through ${approvedUntilLabel}.`,
      status: "scheduled",
    };
  }

  return {
    canWatch: true,
    reason: "",
    status: "open",
  };
}

function getLessonAccessCtaLabel(entry, accessState) {
  if (accessState.canWatch) {
    if (accessState.status === "public-open") {
      return "Open Orientation";
    }

    return "Play Video";
  }

  if (accessState.status === "security-lock") {
    return "Security Locked";
  }

  if (entry.catalogOnly) {
    return entry.pendingPayment
      ? "Payment Pending"
      : entry.pendingRequest
      ? "Request Pending"
      : entry.paymentRejected
      ? "Pay Again"
      : "Buy Course First";
  }

  if (entry.previewOnly) {
    return "Class List Only";
  }

  if (accessState.status === "scheduled") {
    return "Unlocks Soon";
  }

  if (accessState.status === "outside-window") {
    return "Date Locked";
  }

  if (accessState.status === "blocked") {
    return "Blocked by Admin";
  }

  return "Locked";
}

function getLessonAccessBadgeLabel(entry, accessState) {
  if (accessState.canWatch) {
    if (accessState.status === "public-open") {
      return "Public Open";
    }

    return "Unlocked";
  }

  if (accessState.status === "security-lock") {
    return "Security Lock";
  }

  if (entry.catalogOnly) {
    return entry.pendingPayment
      ? "Payment Review"
      : entry.pendingRequest
      ? "Pending Approval"
      : entry.paymentRejected
      ? "Payment Rejected"
      : "Catalog Lock";
  }

  if (entry.previewOnly) {
    return "Preview Lock";
  }

  if (accessState.status === "scheduled") {
    return "Scheduled";
  }

  if (accessState.status === "outside-window") {
    return "Date Lock";
  }

  if (accessState.status === "blocked") {
    return "Blocked";
  }

  return "Locked";
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
    const lockedLessons = Math.max(totalLessons - unlockedLessons, 0);
    return {
      primaryCount: totalLessons,
      primaryLabel: "Visible Classes",
      secondaryCount: lockedLessons,
      secondaryLabel: isStudentSecurityLocked(student) ? "Blocked Videos" : "Locked Videos",
      total: totalLessons,
      completed: 0,
      remaining: totalLessons,
      unlocked: unlockedLessons,
      locked: lockedLessons,
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
  if (courseEntries.length && courseEntries.every((entry) => entry.securityLocked)) {
    return "Only orientation is open";
  }

  if (courseEntries.length && courseEntries.every((entry) => entry.previewOnly)) {
    return "Preview only";
  }

  const unlimitedCount = courseEntries.filter((entry) => hasUnlimitedCourseAccess(entry)).length;
  if (unlimitedCount) {
    return unlimitedCount === courseEntries.length ? "Unlimited access" : "Varies by course";
  }

  return getProfileAccessSummary(courseEntries);
}

function getProfileLastPaymentSummary(courseEntries) {
  if (courseEntries.length && courseEntries.every((entry) => hasUnlimitedCourseAccess(entry))) {
    return "Not required";
  }

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
  if (courseEntries.length && courseEntries.every((entry) => hasUnlimitedCourseAccess(entry))) {
    return "Not required";
  }

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
  return "#forgot-password";
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
  const modalElements = [
    dom.videoModal,
    dom.profileModal,
    dom.paymentModal,
    dom.forgotPasswordModal,
    dom.approvalStatusModal,
    dom.studentMessageModal,
  ].filter(Boolean);
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

function openSecurityLockNotice(student = getActiveStudent()) {
  if (!student || !isStudentSecurityLocked(student)) {
    return false;
  }

  openApprovalStatusModal({
    title: "Security Lock Active",
    message: getStudentSecurityLockMessage(student) || SECURITY_LOCK_LOGIN_MESSAGE,
    note: SECURITY_LOCK_VIDEO_MESSAGE,
  });
  return true;
}

function closeApprovalStatusModal() {
  dom.approvalStatusModal.classList.add("hidden");
  dom.approvalStatusModal.classList.remove("flex");
  syncBodyOverflow();
}

function setForgotPasswordFeedback(message, tone = "neutral") {
  if (!dom.forgotPasswordFeedback) {
    return;
  }

  const palette = {
    neutral: "text-slate-500",
    success: "text-emerald-700",
    error: "text-red-600",
    info: "text-blue-700",
  };

  dom.forgotPasswordFeedback.textContent = message || "";
  dom.forgotPasswordFeedback.className = `mt-5 text-sm ${palette[tone] || palette.neutral}`;
}

function setForgotPasswordBusy(isBusy, busyLabel = "") {
  state.passwordResetBusy = !!isBusy;

  [
    dom.forgotPasswordQuery,
    dom.forgotPasswordOtp,
    dom.forgotPasswordNewPassword,
    dom.forgotPasswordConfirmPassword,
    dom.forgotPasswordRequestBtn,
    dom.forgotPasswordVerifyBtn,
    dom.forgotPasswordResendBtn,
    dom.forgotPasswordSaveBtn,
    dom.closeForgotPasswordBtn,
  ]
    .filter(Boolean)
    .forEach((element) => {
      element.disabled = !!isBusy;
    });

  if (dom.forgotPasswordRequestBtn) {
    dom.forgotPasswordRequestBtn.textContent = isBusy && busyLabel === "request" ? "Sending OTP..." : "Send OTP";
  }
  if (dom.forgotPasswordVerifyBtn) {
    dom.forgotPasswordVerifyBtn.textContent = isBusy && busyLabel === "verify" ? "Checking OTP..." : "Verify OTP";
  }
  if (dom.forgotPasswordResendBtn) {
    dom.forgotPasswordResendBtn.textContent = isBusy && busyLabel === "resend" ? "Sending..." : "Send Again";
  }
  if (dom.forgotPasswordSaveBtn) {
    dom.forgotPasswordSaveBtn.textContent = isBusy && busyLabel === "save" ? "Updating..." : "Update Password";
  }
}

function setForgotPasswordStep(step = "lookup") {
  const normalizedStep = ["lookup", "otp", "reset"].includes(step) ? step : "lookup";
  const maskedEmail = state.passwordResetMaskedEmail || "your saved email";

  if (dom.forgotPasswordStepLookup) {
    dom.forgotPasswordStepLookup.classList.toggle("hidden", normalizedStep !== "lookup");
  }
  if (dom.forgotPasswordStepOtp) {
    dom.forgotPasswordStepOtp.classList.toggle("hidden", normalizedStep !== "otp");
  }
  if (dom.forgotPasswordStepReset) {
    dom.forgotPasswordStepReset.classList.toggle("hidden", normalizedStep !== "reset");
  }

  if (dom.forgotPasswordTitle) {
    dom.forgotPasswordTitle.textContent =
      normalizedStep === "lookup"
        ? "Reset Portal Password"
        : normalizedStep === "otp"
        ? "Enter OTP"
        : "Set New Password";
  }
  if (dom.forgotPasswordMeta) {
    dom.forgotPasswordMeta.textContent =
      normalizedStep === "lookup"
        ? "Enter your student ID, phone number, or email. We will send an OTP to the email saved on your account."
        : normalizedStep === "otp"
        ? `We sent an OTP to ${maskedEmail}. Enter the code below to continue.`
        : `OTP verified for ${maskedEmail}. Set your new password now.`;
  }
}

function resetForgotPasswordFlow(options = {}) {
  const initialQuery = String(options.query || "").trim();
  state.passwordResetQuery = initialQuery;
  state.passwordResetStudentId = "";
  state.passwordResetMaskedEmail = "";
  state.passwordResetOtp = "";

  if (dom.forgotPasswordQuery) {
    dom.forgotPasswordQuery.value = initialQuery;
  }
  if (dom.forgotPasswordOtp) {
    dom.forgotPasswordOtp.value = "";
  }
  if (dom.forgotPasswordNewPassword) {
    dom.forgotPasswordNewPassword.value = "";
  }
  if (dom.forgotPasswordConfirmPassword) {
    dom.forgotPasswordConfirmPassword.value = "";
  }

  setForgotPasswordStep("lookup");
  setForgotPasswordBusy(false);
  setForgotPasswordFeedback(options.feedback || "");
}

function openForgotPasswordModal(initialQuery = "") {
  const fallbackQuery =
    String(initialQuery || "").trim() ||
    (state.activeStudentId
      ? state.activeStudentId
      : String(dom.query?.value || "").trim());
  resetForgotPasswordFlow({ query: fallbackQuery });
  dom.forgotPasswordModal.classList.remove("hidden");
  dom.forgotPasswordModal.classList.add("flex");
  syncBodyOverflow();
  window.setTimeout(() => {
    dom.forgotPasswordQuery?.focus();
  }, 60);
}

function closeForgotPasswordModal(options = {}) {
  dom.forgotPasswordModal.classList.add("hidden");
  dom.forgotPasswordModal.classList.remove("flex");
  if (!options.preserveState) {
    resetForgotPasswordFlow({
      query: state.activeStudentId ? state.activeStudentId : String(dom.query?.value || "").trim(),
    });
  }
  syncBodyOverflow();
}

async function handleForgotPasswordRequest(options = {}) {
  if (state.passwordResetBusy) {
    return;
  }

  const query = String(
    options.reuseExistingQuery ? state.passwordResetQuery || dom.forgotPasswordQuery?.value || "" : dom.forgotPasswordQuery?.value || ""
  ).trim();
  if (!query) {
    setForgotPasswordFeedback("Enter your student ID, phone number, or email first.", "error");
    return;
  }

  state.passwordResetQuery = query;
  setForgotPasswordBusy(true, options.reuseExistingQuery ? "resend" : "request");
  setForgotPasswordFeedback("Sending OTP to the saved student email...", "info");

  try {
    const response = await requestPasswordResetAction("studentrequestpasswordreset", {
      query,
    });
    if (!response?.ok) {
      throw new Error(response?.message || "Unable to send the OTP.");
    }

    state.passwordResetStudentId = String(response.studentId || "").trim();
    state.passwordResetMaskedEmail = String(response.maskedEmail || "").trim();
    if (dom.forgotPasswordOtp) {
      dom.forgotPasswordOtp.value = "";
    }
    setForgotPasswordStep("otp");
    setForgotPasswordFeedback(response.message || "OTP sent successfully.", "success");
    dom.forgotPasswordOtp?.focus();
  } catch (error) {
    setForgotPasswordFeedback(error?.message || "Unable to send the OTP.", "error");
  } finally {
    setForgotPasswordBusy(false);
  }
}

async function handleForgotPasswordVerify() {
  if (state.passwordResetBusy) {
    return;
  }

  const query = String(dom.forgotPasswordQuery?.value || state.passwordResetQuery || "").trim();
  const otp = getDigitsOnlyValue(dom.forgotPasswordOtp?.value || "");
  if (!query || !otp) {
    setForgotPasswordFeedback("Enter both the student identifier and the OTP.", "error");
    return;
  }

  state.passwordResetQuery = query;
  state.passwordResetOtp = otp;
  setForgotPasswordBusy(true, "verify");
  setForgotPasswordFeedback("Verifying OTP...", "info");

  try {
    const response = await requestPasswordResetAction("studentverifypasswordresetotp", {
      query,
      otp,
    });
    if (!response?.ok) {
      throw new Error(response?.message || "OTP verification failed.");
    }

    state.passwordResetStudentId = String(response.studentId || state.passwordResetStudentId || "").trim();
    state.passwordResetMaskedEmail = String(response.maskedEmail || state.passwordResetMaskedEmail || "").trim();
    setForgotPasswordStep("reset");
    setForgotPasswordFeedback(response.message || "OTP verified. Set your new password now.", "success");
    dom.forgotPasswordNewPassword?.focus();
  } catch (error) {
    setForgotPasswordFeedback(error?.message || "OTP verification failed.", "error");
  } finally {
    setForgotPasswordBusy(false);
  }
}

function finalizeForgotPasswordReset(studentId, newPassword) {
  const nextQuery = String(studentId || state.passwordResetStudentId || state.passwordResetQuery || "").trim();
  closeForgotPasswordModal();

  if (state.activeStudentId) {
    logout({
      message: "Password updated. Use the new password below to enter the portal again.",
      feedbackTone: "success",
      toastMessage: "Password updated successfully.",
      toastType: "success",
      syncRemoteLogout: true,
    });
  } else {
    togglePage("login");
    setFeedback("Password updated. Use the new password below to enter the portal.", "success");
    showToast("Password updated successfully.", "success");
  }

  dom.query.value = nextQuery;
  dom.password.value = newPassword;
  dom.password.type = "password";
  syncStudentPasswordToggle();
  syncLoginDraft();
  dom.password.focus();
}

async function handleForgotPasswordSave() {
  if (state.passwordResetBusy) {
    return;
  }

  const query = String(dom.forgotPasswordQuery?.value || state.passwordResetQuery || "").trim();
  const otp = getDigitsOnlyValue(dom.forgotPasswordOtp?.value || state.passwordResetOtp || "");
  const password = normalizePasswordValue(dom.forgotPasswordNewPassword?.value || "");
  const confirmPassword = normalizePasswordValue(dom.forgotPasswordConfirmPassword?.value || "");

  if (!query || !otp || !password || !confirmPassword) {
    setForgotPasswordFeedback("Enter the identifier, OTP, new password, and confirm password.", "error");
    return;
  }
  if (password !== confirmPassword) {
    setForgotPasswordFeedback("New password and confirm password did not match.", "error");
    return;
  }

  state.passwordResetQuery = query;
  state.passwordResetOtp = otp;
  setForgotPasswordBusy(true, "save");
  setForgotPasswordFeedback("Updating password in the live sheet...", "info");

  try {
    const response = await requestPasswordResetAction("studentresetpassword", {
      query,
      otp,
      password,
    });
    if (!response?.ok) {
      throw new Error(response?.message || "Unable to update the password.");
    }

    finalizeForgotPasswordReset(String(response.studentId || "").trim(), password);
  } catch (error) {
    setForgotPasswordFeedback(error?.message || "Unable to update the password.", "error");
  } finally {
    setForgotPasswordBusy(false);
  }
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
    closePaymentModal();
    closeForgotPasswordModal({ preserveState: true });
    closeStudentMessageModal();
  }

  if (dom.preLoginStage) {
    dom.preLoginStage.classList.toggle("hidden", !isLogin);
  }
  dom.loginSection.classList.toggle("hidden", !isLogin);
  dom.dashboardSection.classList.toggle("hidden", isLogin);
  dom.loginBtn?.classList.toggle("hidden", !isLogin);
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

function dismissActionNotice() {
  if (activeActionNoticeTimer) {
    window.clearTimeout(activeActionNoticeTimer);
    activeActionNoticeTimer = 0;
  }

  if (!activeActionNotice) {
    return;
  }

  activeActionNotice.style.opacity = "0";
  activeActionNotice.style.transform = "translate(-50%, -18px)";
  const noticeToRemove = activeActionNotice;
  activeActionNotice = null;
  window.setTimeout(() => {
    noticeToRemove.remove();
  }, 220);
}

function showActionNotice(options = {}) {
  if (typeof document === "undefined" || !document.body) {
    return;
  }

  dismissActionNotice();

  const type = options.type === "info" ? "info" : "success";
  const title = String(options.title || "Request received").trim();
  const message = String(options.message || "").trim();
  const durationMs = Math.max(1200, Number(options.durationMs) || 2200);
  const accentColor = type === "info" ? "#0f172a" : "#166534";
  const accentSoft = type === "info" ? "rgba(15, 23, 42, 0.08)" : "rgba(22, 101, 52, 0.08)";
  const accentBorder = type === "info" ? "rgba(15, 23, 42, 0.14)" : "rgba(34, 197, 94, 0.24)";

  const notice = document.createElement("div");
  notice.setAttribute("role", "status");
  notice.setAttribute("aria-live", "polite");
  notice.style.position = "fixed";
  notice.style.left = "50%";
  notice.style.top = "20px";
  notice.style.transform = "translateX(-50%)";
  notice.style.zIndex = "120";
  notice.style.width = "min(92vw, 34rem)";
  notice.style.border = `1px solid ${accentBorder}`;
  notice.style.borderRadius = "24px";
  notice.style.background = "rgba(255,255,255,0.98)";
  notice.style.boxShadow = "0 28px 70px -42px rgba(15, 23, 42, 0.55)";
  notice.style.backdropFilter = "blur(10px)";
  notice.style.padding = "16px 18px 16px";
  notice.style.transition = "opacity 0.22s ease, transform 0.22s ease";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close notice");
  closeButton.textContent = "x";
  closeButton.style.position = "absolute";
  closeButton.style.top = "12px";
  closeButton.style.right = "12px";
  closeButton.style.width = "32px";
  closeButton.style.height = "32px";
  closeButton.style.border = "0";
  closeButton.style.borderRadius = "999px";
  closeButton.style.background = "transparent";
  closeButton.style.color = "#64748b";
  closeButton.style.fontSize = "18px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", dismissActionNotice);

  const badge = document.createElement("div");
  badge.textContent = type === "info" ? "PAYMENT REVIEW" : "PAYMENT RECEIVED";
  badge.style.display = "inline-flex";
  badge.style.alignItems = "center";
  badge.style.borderRadius = "999px";
  badge.style.background = accentSoft;
  badge.style.color = accentColor;
  badge.style.padding = "6px 10px";
  badge.style.fontSize = "11px";
  badge.style.fontWeight = "800";
  badge.style.letterSpacing = "0.16em";

  const heading = document.createElement("h3");
  heading.textContent = title;
  heading.style.margin = "12px 38px 6px 0";
  heading.style.color = "#0f172a";
  heading.style.fontSize = "20px";
  heading.style.lineHeight = "1.2";
  heading.style.fontWeight = "800";

  const body = document.createElement("p");
  body.textContent = message;
  body.style.margin = "0";
  body.style.color = "#475569";
  body.style.fontSize = "14px";
  body.style.lineHeight = "1.6";

  notice.appendChild(closeButton);
  notice.appendChild(badge);
  notice.appendChild(heading);
  notice.appendChild(body);
  document.body.appendChild(notice);

  activeActionNotice = notice;
  activeActionNoticeTimer = window.setTimeout(() => {
    dismissActionNotice();
  }, durationMs);
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

  if (isPhoneOnlyDevice()) {
    if (dom.videoStatusText) {
      dom.videoStatusText.textContent = "Opening secure stream";
    }
    startVideoPlayback();
  }
}

function closeVideo() {
  void releaseMobileLandscapeMode();
  resetVideoPlayerState();
  dom.videoModal.classList.add("hidden");
  dom.videoModal.classList.remove("flex");
  syncBodyOverflow();
}

function renderStudentHeader(student, stats) {
  const avatarInitials = getAvatarInitials(student.name);
  const previewOnly = isStudentPreviewOnly(student);
  const securityLocked = isStudentSecurityLocked(student);

  dom.navStudentName.textContent = student.name;
  dom.navStudentId.textContent = `ID: ${student.id}`;
  setAvatarImage(student.profileImage, dom.navAvatarImage, dom.navAvatarFallback, avatarInitials);

  const firstName = student.name.split(" ")[0] || student.name;
  dom.heroStudentName.textContent = firstName;
  dom.heroWelcomeText.textContent =
    securityLocked
      ? `${getStudentSecurityLockMessage(student) || SECURITY_LOCK_LOGIN_MESSAGE} ${SECURITY_LOCK_VIDEO_MESSAGE}`
      : previewOnly
      ? "Preview mode is active. You can review all class titles and total class count, but video playback is disabled."
      : student.highlight || "Your current lessons are listed below. Keep practicing consistently.";

  dom.completedCount.textContent = formatNumber(stats.primaryCount);
  dom.completedLabel.textContent = stats.primaryLabel;
  dom.remainingCount.textContent = formatNumber(stats.secondaryCount);
  dom.remainingLabel.textContent = stats.secondaryLabel;
  dom.studentStatus.textContent = securityLocked ? "Security Lock" : previewOnly ? "Preview Access" : formatStatus(student.status);
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
                    ${hasUnlimitedCourseAccess(entry) ? "Not required" : formatDate(entry.lastPaymentDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Payment Due
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${hasUnlimitedCourseAccess(entry) ? "Not required" : formatDate(entry.paymentDueDate, "Not set")}
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
                                    getLessonAccessCtaLabel(entry, accessState)
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
                                ${getLessonAccessBadgeLabel(entry, accessState)}
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

function replaceStudentPayments(payments) {
  const normalized = normalizeData({
    payments,
  });

  if (Array.isArray(normalized.payments)) {
    state.data.payments = normalized.payments;
    persistPortalDataSnapshot({
      data: state.data,
      modeLabel: state.dataModeLabel,
      persistCache: state.dataModeLabel === "Live Google Sheet",
    });
  }
}

async function refreshStudentPaymentsInBackground(studentId = state.activeStudentId) {
  if (!studentId || APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    return false;
  }

  const requestBody = new URLSearchParams({
    action: "studentgetpayments",
    ...buildStudentSessionPayload(studentId),
  });

  try {
    const response = await fetchRemoteResponseWithTimeout(
      APP_CONFIG.remoteEndpoint,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: requestBody,
      },
      {
        timeoutMs: APP_CONFIG.remoteRequestTimeoutMs,
        timeoutMessage: "Payment history refresh took too long.",
      }
    );

    if (!response.ok) {
      throw new Error(`Unable to refresh payment history (${response.status}).`);
    }

    const result = JSON.parse(await response.text());
    if (!result?.ok) {
      if (result?.requiresLogout || isStudentSessionErrorMessage(result?.message)) {
        logout({
          message: result.message || "This device session is no longer active. Please sign in again.",
          feedbackTone: "error",
          toastMessage: result.message || "Device session ended.",
          toastType: "error",
        });
      }
      throw new Error(result?.message || "Unable to refresh payment history.");
    }

    if (state.activeStudentId !== studentId || !Array.isArray(result.payments)) {
      return false;
    }

    replaceStudentPayments(result.payments);
    return true;
  } catch (error) {
    console.warn("Unable to refresh student payments.", error);
    return false;
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
        ...buildStudentSessionPayload(student.id),
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
      if (result.requiresLogout || isStudentSessionErrorMessage(result.message)) {
        logout({
          message: result.message || "This device session is no longer active. Please sign in again.",
          feedbackTone: "error",
          toastMessage: result.message || "Device session ended.",
          toastType: "error",
        });
      }
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

  const transactionId = String(dom.paymentTransactionId?.value || "").trim();
  const note = String(dom.paymentNote?.value || "").trim();
  if (!transactionId) {
    throw new Error("Enter the bKash transaction ID before submitting.");
  }

  if (APP_CONFIG.dataMode !== "remote" || !APP_CONFIG.remoteEndpoint) {
    const course = state.data.courseMap.get(courseId) || null;
    state.data.payments = [
      {
        id: `demo-payment-${Date.now()}`,
        studentId: student.id,
        studentName: student.name,
        studentPhone: student.phone,
        courseId,
        courseTitle: course?.title || courseId,
        amount: String(course?.price || "").trim(),
        paymentMethod: "bKash Send Money",
        paymentNumber: "01975341714",
        studentTransactionId: transactionId,
        confirmedTransactionId: "",
        status: "Pending",
        submittedOn: new Date().toISOString(),
        reviewedOn: "",
        reviewedBy: "",
        paymentDate: "",
        accessStartDate: "",
        accessEndDate: "",
        paymentDueDate: "",
        approvalMode: "",
        note,
        reviewNote: "",
      },
      ...(state.data.payments || []),
    ];
    persistPortalDataSnapshot({
      data: state.data,
      modeLabel: "Live Google Sheet",
    });
    return {
      ok: true,
      message: "Payment request saved in demo mode.",
      payments: state.data.payments,
    };
  }

  const requestBody = new URLSearchParams({
    action: "studentsubmitpayment",
    studentId: student.id,
    courseId,
    transactionId,
    note,
    ...buildStudentSessionPayload(student.id),
  });
  const totalAttempts = Math.max(1, Number(APP_CONFIG.remotePaymentRetryCount) + 1 || 1);
  let lastError = null;

  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    let rawResponse = "";

    try {
      const response = await fetchRemoteResponseWithTimeout(
        APP_CONFIG.remoteEndpoint,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: requestBody,
        },
        {
          timeoutMs: APP_CONFIG.remotePaymentTimeoutMs,
          timeoutMessage:
            "Payment confirmation is taking longer than usual. Please wait a moment while we verify your request.",
        }
      );

      if (!response.ok) {
        throw new Error(`Unable to submit the payment request right now (${response.status}).`);
      }

      try {
        rawResponse = await response.text();
      } catch (readError) {
        throw new Error("Payment server response could not be read.");
      }

      let result;
      try {
        result = JSON.parse(rawResponse);
      } catch (parseError) {
        if (/^\s*</.test(rawResponse)) {
          throw new Error("Payment server returned HTML instead of JSON. Redeploy the latest Apps Script web app.");
        }

        throw new Error("Payment server returned an invalid JSON response.");
      }

      if (!result.ok) {
        if (result.requiresLogout || isStudentSessionErrorMessage(result.message)) {
          logout({
            message: result.message || "This device session is no longer active. Please sign in again.",
            feedbackTone: "error",
            toastMessage: result.message || "Device session ended.",
            toastType: "error",
          });
        }
        const normalizedMessage = getCompactLookupValue(result.message || "");
        if (normalizedMessage === "unsupportedrequestaction") {
          throw new Error(
            "The payment endpoint is still using an older Apps Script deployment. Redeploy the latest web app so `studentsubmitpayment` works."
          );
        }

        throw new Error(result.message || "Payment request failed.");
      }

      if (Array.isArray(result.payments)) {
        try {
          state.data.payments = normalizeData({ payments: result.payments }).payments || state.data.payments;
          persistPortalDataSnapshot({
            data: state.data,
            modeLabel: "Live Google Sheet",
          });
        } catch (normalizationError) {
          console.warn("Payment request was saved, but the payment list could not be refreshed immediately.", normalizationError);
        }
      }

      return result;
    } catch (error) {
      lastError = error;

      if (!isRemoteTimeoutError(error)) {
        throw error;
      }

      if (attempt < totalAttempts - 1) {
        await delay(APP_CONFIG.remoteRetryDelayMs);
        continue;
      }
    }
  }

  await delay(APP_CONFIG.remoteRetryDelayMs);
  try {
    const refreshed = await loadData();
    if (refreshed?.modeLabel === "Live Google Sheet") {
      applyPortalData(refreshed);
    }
  } catch (refreshError) {
    console.warn("Unable to verify payment submission after timeout.", refreshError);
  }

  const refreshedStudent = getActiveStudent();
  if (!refreshedStudent) {
    return {
      ok: true,
      blocked: true,
      message: "Your account session is no longer available. Please sign in again.",
    };
  }

  const refreshedApprovalState = getStudentApprovalState(refreshedStudent);
  if (refreshedApprovalState.approvalStatus !== "approved") {
    return {
      ok: true,
      blocked: true,
      message: refreshedApprovalState.message || "Your account access has changed. Please sign in again.",
    };
  }

  const latestPayment = getLatestPaymentForCourse(student.id, courseId);
  const hasEnrollment = (state.data.enrollments || []).some((entry) => {
    return entry.studentId === student.id && entry.courseId === courseId;
  });

  if (latestPayment && (isPendingPaymentStatus(latestPayment.status) || isApprovedPaymentStatus(latestPayment.status))) {
    return {
      ok: true,
      pendingReview: !isApprovedPaymentStatus(latestPayment.status),
      alreadyPending: isPendingPaymentStatus(latestPayment.status),
      message: isApprovedPaymentStatus(latestPayment.status)
        ? "Payment was confirmed. Your course access is now active."
        : "Your payment request was received. Please wait a little while. The course will activate automatically after confirmation.",
      payments: getStudentPayments(student.id),
    };
  }

  if (hasEnrollment) {
    return {
      ok: true,
      pendingReview: false,
      alreadyPending: false,
      message: "Payment was confirmed. Your course access is now active.",
      payments: getStudentPayments(student.id),
    };
  }

  throw lastError || new Error("Unable to submit the payment request.");
}

function syncPaymentSubmitState() {
  if (!dom.paymentSubmitBtn) {
    return;
  }

  dom.paymentSubmitBtn.disabled = !!state.paymentSubmitBusy;
  dom.paymentSubmitBtn.classList.toggle("cursor-wait", !!state.paymentSubmitBusy);
  dom.paymentSubmitBtn.classList.toggle("opacity-80", !!state.paymentSubmitBusy);
  dom.paymentSubmitBtn.textContent = state.paymentSubmitBusy ? "Submitting..." : "Submit Payment";
}

function closePaymentModal() {
  state.activePaymentCourseId = "";
  state.paymentSubmitBusy = false;
  syncPaymentSubmitState();
  if (dom.paymentForm) {
    dom.paymentForm.reset();
  }
  if (dom.paymentFeedback) {
    dom.paymentFeedback.textContent = "";
    dom.paymentFeedback.className = "hidden";
  }
  dom.paymentModal?.classList.add("hidden");
  dom.paymentModal?.classList.remove("flex");
  syncBodyOverflow();
}

function openPaymentModal(courseId) {
  const student = getActiveStudent();
  const course = state.data.courseMap.get(courseId) || null;
  if (!student || !course) {
    return false;
  }

  state.activePaymentCourseId = courseId;
  state.paymentSubmitBusy = false;
  syncPaymentSubmitState();
  if (dom.paymentForm) {
    dom.paymentForm.reset();
  }
  if (dom.paymentCourseName) {
    dom.paymentCourseName.textContent = course.title || "Selected Course";
  }
  if (dom.paymentCourseFee) {
    dom.paymentCourseFee.textContent = formatCoursePrice(course.price);
  }
  if (dom.paymentBkashNumber) {
    dom.paymentBkashNumber.textContent = "01975341714";
  }
  if (dom.paymentStudentId) {
    dom.paymentStudentId.textContent = student.id || "-";
  }
  if (dom.paymentFeedback) {
    dom.paymentFeedback.textContent = "";
    dom.paymentFeedback.className = "hidden";
  }
  dom.paymentModal?.classList.remove("hidden");
  dom.paymentModal?.classList.add("flex");
  syncBodyOverflow();
  window.setTimeout(() => dom.paymentTransactionId?.focus(), 80);
  return true;
}

async function handlePaymentSubmit(event) {
  event.preventDefault();

  const courseId = String(state.activePaymentCourseId || "").trim();
  if (!courseId || state.paymentSubmitBusy) {
    return;
  }

  state.paymentSubmitBusy = true;
  syncPaymentSubmitState();
  if (dom.paymentFeedback) {
    dom.paymentFeedback.textContent = "";
    dom.paymentFeedback.className = "hidden";
  }

  try {
    const result = await requestCourseAccess(courseId);
    if (result.blocked) {
      const blockedMessage = result.message || SECURITY_LOCK_LOGIN_MESSAGE;
      closePaymentModal();
      let activeStudent = null;

      try {
        const refreshed = await loadData();
        if (refreshed?.modeLabel === "Live Google Sheet") {
          applyPortalData(refreshed);
        }
      } catch (refreshError) {
        console.warn("Unable to refresh portal data after security lock.", refreshError);
      }

      activeStudent = getActiveStudent();
      if (!activeStudent) {
        state.data.students = (state.data.students || []).map((entry) =>
          entry.id === state.activeStudentId
            ? {
                ...entry,
                status: "Blocked",
                highlight: `Security lock: ${blockedMessage.replace(/^security lock:\s*/i, "")}`,
              }
            : entry
        );
        persistPortalDataSnapshot({
          data: state.data,
          modeLabel: state.dataModeLabel || "Live Google Sheet",
        });
        activeStudent = getActiveStudent();
      }

      if (activeStudent) {
        state.openCourseId = getDefaultOpenCourseId(activeStudent);
        syncPortalSession();
        renderDashboard(activeStudent);
        togglePage("profile");
        openSecurityLockNotice(activeStudent);
      }

      setFeedback(blockedMessage, "error");
      showToast(blockedMessage, "error");
      return;
    }

    closePaymentModal();
    const isPendingReview = !!result.pendingReview;
    const feedbackMessage = result.message ||
      (isPendingReview
        ? "Please wait a little while. Your course will activate automatically after confirmation."
        : "Payment request submitted successfully.");
    try {
      const activeStudent = getActiveStudent();
      if (activeStudent) {
        state.openCourseId = courseId;
        renderDashboard(activeStudent);
      }
      setFeedback(feedbackMessage, isPendingReview ? "neutral" : "success");
    } catch (followUpError) {
      console.warn("Payment request succeeded, but the dashboard could not refresh immediately.", followUpError);
      setFeedback(feedbackMessage, "neutral");
      refreshPortalDataInBackground();
    }

    showActionNotice({
      type: isPendingReview ? "info" : "success",
      title: isPendingReview
        ? `Thank you. Welcome to ${getPortalBrandName()}.`
        : `Payment confirmed. Welcome to ${getPortalBrandName()}.`,
      message: isPendingReview
        ? "Your payment data has been submitted successfully. Please wait a little while. Your course will activate automatically after confirmation."
        : "Your payment was confirmed successfully. Your course is now active and ready to open.",
      durationMs: isPendingReview ? 2600 : 2400,
    });
  } catch (error) {
    const message = error.message || "Unable to submit the payment request.";
    if (dom.paymentFeedback) {
      dom.paymentFeedback.textContent = message;
      dom.paymentFeedback.className =
        "mt-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600";
    }
    showToast(message, "error");
  } finally {
    state.paymentSubmitBusy = false;
    syncPaymentSubmitState();
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
  const pendingCount = courseEntries.filter((entry) => entry.pendingPayment || entry.pendingRequest).length;
  const lockedCount = courseEntries.filter((entry) => entry.catalogOnly && !entry.pendingPayment && !entry.pendingRequest)
    .length;
  const securityLocked = courseEntries.some((entry) => entry.securityLocked);

  const courseMapMarkup = `
    <section class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div class="min-w-0">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Course Map</p>
          <h2 class="mt-2 text-2xl font-bold text-blue-950">See Every Live Course After Login</h2>
          <p class="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            ${
              securityLocked
                ? "You can still enter the portal and review every live course. Because a security lock is active, every paid video stays blocked until the admin removes it, and only orientation classes remain open."
                : "Every live course stays visible here. Courses without access remain locked until you submit payment and the admin confirms it."
            }
          </p>
        </div>
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-[1.5rem] border border-blue-100 bg-blue-50 px-4 py-4">
            <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-500">${
              securityLocked ? "Restricted Courses" : "Active Access"
            }</p>
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
              : entry.securityLocked
              ? "border-rose-200 bg-rose-50 text-rose-700"
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
                  entry.securityLocked
                    ? "bg-rose-400"
                    : !entry.catalogOnly
                    ? "bg-emerald-400"
                    : entry.pendingRequest
                    ? "bg-amber-400"
                    : "bg-slate-400"
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
                      ${
                        hasUnlimitedCourseAccess(entry)
                          ? '<span class="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">Lifetime Unlock</span>'
                          : ""
                      }
                      <span class="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-bold text-violet-700">
                        Next Live: ${nextLiveLabel}
                      </span>
                      ${
                        course.price
                          ? `<span class="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-700">Fee: ${escapeHtml(
                              formatCoursePrice(course.price, "")
                            )}</span>`
                          : ""
                      }
                      ${
                        entry.securityLocked
                          ? `<span class="rounded-full bg-rose-600 px-3 py-1 text-[10px] font-bold text-white">Security Lock: Videos disabled</span>`
                          : entry.catalogOnly
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
                              entry.securityLocked
                                ? "Blocked Videos"
                                : entry.catalogOnly
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
                    entry.securityLocked
                      ? `
                        <div class="w-full rounded-[1.5rem] border border-rose-100 bg-rose-50 p-4 xl:w-[320px]">
                          <p class="text-xs font-bold uppercase tracking-[0.24em] text-rose-600">Admin Contact Required</p>
                          <p class="mt-3 text-sm leading-6 text-rose-900/80">${escapeHtml(
                            getStudentSecurityLockMessage(student) || SECURITY_LOCK_LOGIN_MESSAGE
                          )}</p>
                          <p class="mt-3 rounded-2xl bg-white/80 px-3 py-3 text-xs font-medium leading-5 text-rose-700">${escapeHtml(
                            SECURITY_LOCK_VIDEO_MESSAGE
                          )}</p>
                        </div>
                      `
                      : entry.catalogOnly
                      ? `
                        <div class="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 xl:w-[320px]">
                          <p class="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">${
                            entry.pendingPayment
                              ? "Payment Submitted"
                              : entry.paymentRejected
                              ? "Payment Rejected"
                              : "Unlock This Course"
                          }</p>
                          <p class="mt-3 text-sm leading-6 text-slate-600">${
                            entry.pendingPayment
                              ? "Your transaction ID is already waiting in the payment review queue."
                              : entry.paymentRejected
                              ? "Your previous payment was rejected. Submit a new transaction ID to try again."
                              : `Send Money to bKash and submit the transaction ID to unlock this course.${
                                  course.price ? ` Course fee: ${escapeHtml(formatCoursePrice(course.price, ""))}.` : ""
                                }`
                          }</p>
                          ${
                            entry.paymentRejected && getStudentVisiblePaymentReviewNote(entry.latestRejectedPayment)
                              ? `<p class="mt-3 rounded-2xl bg-rose-50 px-3 py-2 text-xs font-medium leading-5 text-rose-700">Admin note: ${escapeHtml(
                                  getStudentVisiblePaymentReviewNote(entry.latestRejectedPayment)
                                )}</p>`
                              : ""
                          }
                          <button
                            type="button"
                            data-request-course="${course.id}"
                            class="mt-4 w-full rounded-2xl ${
                              entry.pendingPayment
                                ? "bg-slate-300 text-slate-600"
                                : entry.paymentRejected
                                ? "bg-rose-600 text-white hover:bg-rose-500"
                                : "bg-slate-950 text-white hover:bg-slate-800"
                            } px-4 py-3 text-sm font-bold transition ${requestBusy ? "cursor-wait opacity-80" : ""}"
                            ${entry.pendingPayment ? "disabled" : ""}
                          >
                            ${
                              requestBusy
                                ? "Opening..."
                                : entry.pendingPayment
                                ? "Payment Submitted"
                                : entry.paymentRejected
                                ? "Pay Again"
                                : "Buy Now"
                            }
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
                                    getLessonAccessCtaLabel(entry, accessState)
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
                                ${getLessonAccessBadgeLabel(entry, accessState)}
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
    button.addEventListener("click", () => {
      const courseId = String(button.dataset.requestCourse || "").trim();
      if (!courseId || state.courseRequestBusyIds.has(courseId)) {
        return;
      }

      try {
        state.courseRequestBusyIds.add(courseId);
        button.disabled = true;
        button.textContent = "Opening...";
        openPaymentModal(courseId);
      } catch (error) {
        setFeedback(error.message || "Unable to open the payment popup.", "error");
        showToast(error.message || "Unable to open the payment popup.", "error");
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

function logout(options = {}) {
  const feedbackMessage = String(options.message || "").trim();
  const feedbackTone = String(options.feedbackTone || "").trim() || "neutral";
  const toastMessage = String(options.toastMessage || "").trim();
  const toastType = String(options.toastType || "").trim() || "info";
  const suppressToast = options.suppressToast === true;
  const previousStudentId = state.activeStudentId;
  const previousSessionToken = state.studentSessionToken;

  if (options.syncRemoteLogout !== false) {
    logoutActiveDeviceSessionSilently(previousStudentId, previousSessionToken);
  }

  closePaymentModal();
  closeVideo();
  closeProfileModal();
  closeForgotPasswordModal({ preserveState: true });
  closeStudentMessageModal();
  stopStudentInboxPolling();
  state.activeStudentId = "";
  state.studentSessionToken = "";
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
  setFeedback(feedbackMessage || "Enter your student credentials to log in again.", feedbackTone);
  if (!suppressToast) {
    showToast(toastMessage || (feedbackMessage ? feedbackMessage : "Logged out successfully."), toastType);
  }
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
  setLoginBusy(true, "Connecting...");
  setFeedback("Connecting to the login server and checking your credentials...", "neutral");

  try {
    authResult = await authenticateStudent(studentQuery, password, {
      promptLocation: true,
    });
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

      if (authResult?.deviceLimitReached) {
        const deviceSummary = formatApprovedDevicesForPrompt(authResult.activeDevices || []);
        const replaceConfirmed = window.confirm(
          `${failureMessage}\n\n${deviceSummary || "Two devices are already approved for this account."}\n\nPress OK to log out the oldest approved device and continue from this device.`
        );

        if (replaceConfirmed) {
          authResult = await authenticateStudent(studentQuery, password, {
            promptLocation: false,
            replaceOldestDevice: true,
          });
          if (authResult?.ok) {
            // Continue into the success path below.
          } else {
            const retryMessage = authResult?.message || failureMessage;
            setFeedback(retryMessage, "error");
            openApprovalStatusModal({
              title: "Device Limit Reached",
              message: retryMessage,
              note: formatApprovedDevicesForPrompt(authResult?.activeDevices || []),
            });
            showToast(retryMessage, "error");
            return;
          }
        }
        setFeedback(failureMessage, "error");
        openApprovalStatusModal({
          title: "Device Limit Reached",
          message: failureMessage,
          note: formatApprovedDevicesForPrompt(authResult?.activeDevices || []),
        });
        showToast(failureMessage, "error");
        return;
      }

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
    state.studentSessionToken = String(authResult.sessionToken || "").trim();
    state.openCourseId = getDefaultOpenCourseId(nextStudent);
    syncPortalSession();

    renderDashboard(nextStudent);
    togglePage("profile");
    clearLoginDraft();
    dom.password.value = "";
    dom.password.type = "password";
    syncStudentPasswordToggle();
    const securityLocked = isStudentSecurityLocked(nextStudent);
    setFeedback(
      securityLocked ? getStudentSecurityLockMessage(nextStudent) || SECURITY_LOCK_LOGIN_MESSAGE : `${nextStudent.name} logged in successfully.`,
      securityLocked ? "neutral" : "success"
    );
    showToast(securityLocked ? "Security lock is active. Orientation classes stay open." : "Logged in successfully!", securityLocked ? "info" : "success");
    if (securityLocked) {
      openSecurityLockNotice(nextStudent);
    }
    const nextAutoOpenMessage = securityLocked ? null : getNextAutoOpenStudentMessage(nextStudent);
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
  warmRemoteConnection();
}

dom.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await performLogin();
});

dom.loginBtn?.addEventListener("click", () => {
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
if (dom.closePaymentBtn) {
  dom.closePaymentBtn.addEventListener("click", closePaymentModal);
}
if (dom.paymentBackdrop) {
  dom.paymentBackdrop.addEventListener("click", closePaymentModal);
}
if (dom.paymentForm) {
  dom.paymentForm.addEventListener("submit", handlePaymentSubmit);
}
if (dom.copyBkashNumberBtn) {
  dom.copyBkashNumberBtn.addEventListener("click", async () => {
    const paymentNumber = String(dom.paymentBkashNumber?.textContent || "").trim();
    if (!paymentNumber) {
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(paymentNumber);
        showToast("bKash number copied.");
        return;
      }
    } catch (error) {
      console.warn("Clipboard copy failed.", error);
    }

    const helper = document.createElement("input");
    helper.value = paymentNumber;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showToast("bKash number copied.");
  });
}
dom.closeProfileBtn.addEventListener("click", closeProfileModal);
dom.profileBackdrop.addEventListener("click", closeProfileModal);
dom.closeApprovalStatusBtn.addEventListener("click", closeApprovalStatusModal);
dom.approvalStatusBackdrop.addEventListener("click", closeApprovalStatusModal);
dom.approvalStatusOkBtn.addEventListener("click", closeApprovalStatusModal);
if (dom.forgotPasswordBtn) {
  dom.forgotPasswordBtn.addEventListener("click", () => {
    openForgotPasswordModal(dom.query?.value || "");
  });
}
if (dom.closeForgotPasswordBtn) {
  dom.closeForgotPasswordBtn.addEventListener("click", () => {
    closeForgotPasswordModal();
  });
}
if (dom.forgotPasswordBackdrop) {
  dom.forgotPasswordBackdrop.addEventListener("click", () => {
    closeForgotPasswordModal();
  });
}
if (dom.forgotPasswordRequestBtn) {
  dom.forgotPasswordRequestBtn.addEventListener("click", async () => {
    await handleForgotPasswordRequest();
  });
}
if (dom.forgotPasswordVerifyBtn) {
  dom.forgotPasswordVerifyBtn.addEventListener("click", async () => {
    await handleForgotPasswordVerify();
  });
}
if (dom.forgotPasswordResendBtn) {
  dom.forgotPasswordResendBtn.addEventListener("click", async () => {
    await handleForgotPasswordRequest({ reuseExistingQuery: true });
  });
}
if (dom.forgotPasswordSaveBtn) {
  dom.forgotPasswordSaveBtn.addEventListener("click", async () => {
    await handleForgotPasswordSave();
  });
}
if (dom.forgotPasswordQuery) {
  dom.forgotPasswordQuery.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await handleForgotPasswordRequest();
    }
  });
}
if (dom.forgotPasswordOtp) {
  dom.forgotPasswordOtp.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await handleForgotPasswordVerify();
    }
  });
}
if (dom.forgotPasswordConfirmPassword) {
  dom.forgotPasswordConfirmPassword.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await handleForgotPasswordSave();
    }
  });
}
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
dom.profileResetLink.addEventListener("click", (event) => {
  event.preventDefault();
  const activeStudent = getActiveStudent();
  openForgotPasswordModal(activeStudent?.id || dom.query?.value || "");
  if (state.activeStudentId) {
    showToast("OTP reset option opened.", "info");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (dom.paymentModal && !dom.paymentModal.classList.contains("hidden")) {
      closePaymentModal();
      return;
    }

    if (!dom.studentMessageModal.classList.contains("hidden")) {
      dismissStudentMessage();
      closeStudentMessageModal({ preserveActiveId: true });
      return;
    }

    if (!dom.approvalStatusModal.classList.contains("hidden")) {
      closeApprovalStatusModal();
      return;
    }

    if (dom.forgotPasswordModal && !dom.forgotPasswordModal.classList.contains("hidden")) {
      closeForgotPasswordModal();
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
    refreshPortalDataInBackground();
    refreshStudentInboxInBackground(state.activeStudentId, { openModal: true });
  }
});

window.addEventListener("focus", () => {
  if (state.activeStudentId) {
    refreshPortalDataInBackground();
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
