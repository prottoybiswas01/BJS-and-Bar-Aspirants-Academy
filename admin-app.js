const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const APP_CONFIG = Object.freeze({
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
});

const STORAGE_KEYS = Object.freeze({
  adminToken: "ain-pathshala.adminToken",
  adminDashboardCache: "ain-pathshala.adminDashboardCache.v2",
  adminScrollY: "ain-pathshala.adminScrollY",
});

const LOCALIZED_DIGIT_RANGES = Object.freeze([
  Object.freeze({ start: 0x09e6, end: 0x09ef }),
  Object.freeze({ start: 0x0660, end: 0x0669 }),
  Object.freeze({ start: 0x06f0, end: 0x06f9 }),
]);
const TRUSTED_ADMIN_DEVICE_NOTE_PREFIX = "Trusted admin device:";
const SECURITY_LOCK_HIGHLIGHT_PREFIX = "Security lock:";

const STUDENT_FIELD_KEYS = Object.freeze({
  id: ["id", "studentId", "studentID", "userId", "userID", "memberId", "registrationId", "roll", "rollNumber"],
  name: ["name", "fullName", "studentName", "userName"],
  phone: ["phone", "phoneNumber", "mobile", "mobileNumber", "contact", "contactNumber", "whatsapp", "whatsappNumber"],
  email: ["email", "emailAddress", "mail", "gmail"],
  batch: ["batch", "batchName", "group", "groupName"],
  session: ["session", "sessionName", "shift"],
  joinedOn: ["joinedOn", "joinDate", "createdOn", "admittedOn", "admissionDate", "enrolledOn"],
  status: ["status", "studentStatus", "accountStatus", "activeStatus"],
  password: ["password", "loginPassword", "portalPassword", "studentPassword", "passcode", "pin", "loginPin"],
  loginApproval: ["loginApproval", "approval", "loginApproved", "portalApproval", "approvalStatus", "accessApproval"],
  portalAccessMode: ["portalAccessMode", "accessMode", "studentAccessMode", "videoAccessMode", "portalMode"],
  highlight: ["highlight", "note", "remarks", "message"],
  enrolledCourseIds: ["enrolledCourseIds", "courseIds", "courses", "assignedCourses", "enrolledCourses"],
  completedLessonIds: ["completedLessonIds", "completed", "completedLessons"],
  maxDeviceCount: ["maxDeviceCount", "maxDevices", "deviceLimit", "allowedDevices", "approvedDeviceLimit"],
});

const COURSE_FIELD_KEYS = Object.freeze({
  id: ["id", "courseId", "courseID"],
  title: ["title", "name", "courseName"],
  shortTitle: ["shortTitle", "shortName", "shortLabel"],
  faculty: ["faculty", "instructor", "teacher", "mentor"],
  category: ["category", "type", "courseCategory"],
  batch: ["batch", "batchName", "group", "groupName"],
  session: ["session", "sessionName", "shift"],
  schedule: ["schedule", "routine", "time", "classSchedule"],
  nextLive: ["nextLive", "nextClass", "nextLiveClass", "upcomingClass"],
  price: ["price", "fee", "courseFee", "monthlyFee", "amount"],
  description: ["description", "details", "summary", "note"],
  status: ["status", "courseStatus", "visibility", "publishStatus", "courseVisibility", "isActive"],
});

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

const ENROLLMENT_FIELD_KEYS = Object.freeze({
  id: ["id", "enrollmentId"],
  studentId: ["studentId", "studentIds", "studentID", "studentIDList"],
  courseId: ["courseId", "courseIds", "courseID", "courseIDList"],
  accessStartDate: ["accessStartDate", "startDate", "activeFrom", "accessFrom"],
  accessEndDate: ["accessEndDate", "endDate", "validUntil", "accessUntil"],
  unlimitedAccess: [
    "unlimitedAccess",
    "unlimited",
    "isUnlimited",
    "lifetimeAccess",
    "permanentAccess",
    "alwaysOpen",
  ],
  videoAccessUntil: [
    "videoAccessUntil",
    "approvedUntil",
    "lessonAccessUntil",
    "accessApprovedUntil",
    "videoUnlockDate",
    "releaseAccessUntil",
  ],
  lastPaymentDate: ["lastPaymentDate", "paymentApprovedOn", "paidOn", "latestPaymentDate"],
  paymentDueDate: ["paymentDueDate", "nextPaymentDueDate", "lastPaymentDueDate", "paymentDate"],
  monthlyFee: ["monthlyFee", "fee", "amount", "monthlyAmount"],
  status: ["status", "enrollmentStatus", "accessStatus"],
  paidMonths: ["paidMonths", "paymentMonths", "paidMonthList", "allowedMonths"],
});

const MESSAGE_FIELD_KEYS = Object.freeze({
  id: ["id", "messageId"],
  studentIds: ["studentIds", "studentId", "recipientIds", "recipients"],
  title: ["title", "subject", "messageTitle"],
  message: ["message", "body", "content", "text"],
  status: ["status", "messageStatus"],
  createdOn: ["createdOn", "sentOn", "publishedOn"],
  createdBy: ["createdBy", "sender", "sentBy"],
  audience: ["audience", "visibility", "channel"],
  recipientState: ["recipientStateJson", "recipientState", "recipientStatus"],
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

const DEVICE_FIELD_KEYS = Object.freeze({
  id: ["id", "deviceRecordId"],
  studentId: ["studentId", "studentID"],
  deviceId: ["deviceId", "browserDeviceId", "clientDeviceId"],
  deviceName: ["deviceName", "deviceLabel", "label"],
  deviceFingerprint: ["deviceFingerprint", "fingerprint", "deviceSignature"],
  publicIp: ["publicIp", "ip", "ipAddress"],
  userAgent: ["userAgent", "ua"],
  platform: ["platform", "devicePlatform"],
  browserLanguage: ["browserLanguage", "language", "locale"],
  timezone: ["timezone", "timeZone"],
  screenSize: ["screenSize", "screen", "viewport"],
  clientShell: ["clientShell", "appShell", "runtimeShell"],
  displayMode: ["displayMode", "launchMode", "presentationMode"],
  referrer: ["referrer", "documentReferrer", "launchReferrer"],
  locationPermission: ["locationPermission", "geoPermission"],
  latitude: ["latitude", "lat"],
  longitude: ["longitude", "lng", "lon"],
  status: ["status", "deviceStatus"],
  firstSeenOn: ["firstSeenOn", "createdOn"],
  lastSeenOn: ["lastSeenOn", "updatedOn"],
  lastLoginOn: ["lastLoginOn", "loginOn"],
  revokedOn: ["revokedOn"],
  revokedBy: ["revokedBy"],
  note: ["note", "remarks"],
});

const ADMIN_FIELD_KEYS = Object.freeze({
  name: ["name", "fullName", "adminName"],
  username: ["username", "userName", "login", "adminLogin"],
});

const PREVIEW_ACCESS_VALUES = Object.freeze([
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

const UNLIMITED_LOCKED_FIELD_KEYS = Object.freeze([
  "accessEndDate",
  "videoAccessUntil",
  "lastPaymentDate",
  "paymentDueDate",
  "monthlyFee",
  "paidMonths",
]);

const COURSE_RULE_FIELDS = Object.freeze([
  Object.freeze({
    key: "unlimitedAccess",
    label: "Unlimited Access",
    type: "toggle",
    wide: true,
    helper:
      "Turn this on to keep the course unlocked for life. Start and end dates stay visible for reference, but access and payment deadlines stop locking videos until you switch this off.",
  }),
  Object.freeze({ key: "accessStartDate", label: "Access Start Date", type: "date" }),
  Object.freeze({ key: "accessEndDate", label: "Access End Date", type: "date" }),
  Object.freeze({ key: "videoAccessUntil", label: "Video Access Until", type: "date" }),
  Object.freeze({ key: "lastPaymentDate", label: "Last Payment Date", type: "date" }),
  Object.freeze({ key: "paymentDueDate", label: "Payment Due Date", type: "date" }),
  Object.freeze({ key: "monthlyFee", label: "Monthly Fee", type: "text", placeholder: "1500" }),
  Object.freeze({
    key: "status",
    label: "Enrollment Status",
    type: "select",
    options: [
      Object.freeze({ value: "", label: "Keep Current Status" }),
      Object.freeze({ value: "Active", label: "Active" }),
      Object.freeze({ value: "Pending", label: "Pending" }),
      Object.freeze({ value: "Blocked", label: "Blocked" }),
      Object.freeze({ value: "Suspended", label: "Suspended" }),
      Object.freeze({ value: "Expired", label: "Expired" }),
    ],
  }),
  Object.freeze({ key: "paidMonths", label: "Paid Months", type: "text", placeholder: "2026-01|2026-03", wide: true }),
]);

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

const MONTH_LABELS = Object.freeze(
  Array.from({ length: 12 }, (_, index) =>
    new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(2026, index, 1))
  )
);

const state = {
  token: "",
  admin: null,
  data: createEmptyDashboard(),
  analyticsYear: "",
  courseFilter: "all",
  studentQuery: "",
  editingStudentId: "",
  previewStudentId: "",
  editingCourseId: "",
  lastBackgroundRefreshAt: 0,
  selectedStudentIds: new Set(),
  visibleStudentIds: [],
  bulkCourseRuleDrafts: {},
};

let studentPreviewScrollLockY = 0;

const dom = {
  adminLogoutBtn: document.getElementById("adminLogoutBtn"),
  adminLoginSection: document.getElementById("adminLoginSection"),
  adminDashboard: document.getElementById("adminDashboard"),
  adminLoginForm: document.getElementById("adminLoginForm"),
  adminUsername: document.getElementById("adminUsername"),
  adminPassword: document.getElementById("adminPassword"),
  adminLoginFeedback: document.getElementById("adminLoginFeedback"),
  adminWelcome: document.getElementById("adminWelcome"),
  adminTopFeedback: document.getElementById("adminTopFeedback"),
  refreshDashboardBtn: document.getElementById("refreshDashboardBtn"),
  summaryStudents: document.getElementById("summaryStudents"),
  summaryPending: document.getElementById("summaryPending"),
  summaryCourses: document.getElementById("summaryCourses"),
  summaryMessages: document.getElementById("summaryMessages"),
  adminAnalyticsCaption: document.getElementById("adminAnalyticsCaption"),
  adminAnalyticsCourse: document.getElementById("adminAnalyticsCourse"),
  adminAnalyticsYear: document.getElementById("adminAnalyticsYear"),
  adminAnalyticsMeta: document.getElementById("adminAnalyticsMeta"),
  adminAnalyticsChart: document.getElementById("adminAnalyticsChart"),
  adminAnalyticsHighlights: document.getElementById("adminAnalyticsHighlights"),
  adminAnalyticsYears: document.getElementById("adminAnalyticsYears"),
  studentCourseFilter: document.getElementById("studentCourseFilter"),
  studentSearchInput: document.getElementById("studentSearchInput"),
  studentFilterMeta: document.getElementById("studentFilterMeta"),
  newStudentBtn: document.getElementById("newStudentBtn"),
  selectAllStudents: document.getElementById("selectAllStudents"),
  bulkActionSelect: document.getElementById("bulkActionSelect"),
  applyBulkActionBtn: document.getElementById("applyBulkActionBtn"),
  studentTableBody: document.getElementById("studentTableBody"),
  studentMobileList: document.getElementById("studentMobileList"),
  studentSelectionBar: document.getElementById("studentSelectionBar"),
  selectedStudentsSummary: document.getElementById("selectedStudentsSummary"),
  selectedStudentsMeta: document.getElementById("selectedStudentsMeta"),
  studentQuickActionBar: document.getElementById("studentQuickActionBar"),
  studentEditorLabel: document.getElementById("studentEditorLabel"),
  studentEditorForm: document.getElementById("studentEditorForm"),
  editorStudentId: document.getElementById("editorStudentId"),
  editorStudentName: document.getElementById("editorStudentName"),
  editorStudentPhone: document.getElementById("editorStudentPhone"),
  editorStudentEmail: document.getElementById("editorStudentEmail"),
  editorStudentBatch: document.getElementById("editorStudentBatch"),
  editorStudentSession: document.getElementById("editorStudentSession"),
  editorStudentPassword: document.getElementById("editorStudentPassword"),
  editorStudentMaxDevices: document.getElementById("editorStudentMaxDevices"),
  editorStudentStatus: document.getElementById("editorStudentStatus"),
  editorStudentApproval: document.getElementById("editorStudentApproval"),
  editorStudentAccessMode: document.getElementById("editorStudentAccessMode"),
  editorStudentHighlight: document.getElementById("editorStudentHighlight"),
  studentCourseSelector: document.getElementById("studentCourseSelector"),
  studentEditorFeedback: document.getElementById("studentEditorFeedback"),
  bulkCourseSelector: document.getElementById("bulkCourseSelector"),
  bulkCourseRuleCards: document.getElementById("bulkCourseRuleCards"),
  assignCoursesBtn: document.getElementById("assignCoursesBtn"),
  selectedStudentWorkspace: document.getElementById("selectedStudentWorkspace"),
  selectedStudentsCountBadge: document.getElementById("selectedStudentsCountBadge"),
  selectedStudentsWorkspaceMeta: document.getElementById("selectedStudentsWorkspaceMeta"),
  messageTitleInput: document.getElementById("messageTitleInput"),
  messageBodyInput: document.getElementById("messageBodyInput"),
  sendMessageBtn: document.getElementById("sendMessageBtn"),
  messageFeedback: document.getElementById("messageFeedback"),
  clearCourseFormBtn: document.getElementById("clearCourseFormBtn"),
  courseForm: document.getElementById("courseForm"),
  courseIdInput: document.getElementById("courseIdInput"),
  courseTitleInput: document.getElementById("courseTitleInput"),
  courseShortTitleInput: document.getElementById("courseShortTitleInput"),
  courseFacultyInput: document.getElementById("courseFacultyInput"),
  courseCategoryInput: document.getElementById("courseCategoryInput"),
  courseBatchInput: document.getElementById("courseBatchInput"),
  courseSessionInput: document.getElementById("courseSessionInput"),
  courseScheduleInput: document.getElementById("courseScheduleInput"),
  courseNextLiveInput: document.getElementById("courseNextLiveInput"),
  coursePriceInput: document.getElementById("coursePriceInput"),
  courseStatusInput: document.getElementById("courseStatusInput"),
  courseDescriptionInput: document.getElementById("courseDescriptionInput"),
  courseFeedback: document.getElementById("courseFeedback"),
  courseListPanel: document.getElementById("courseListPanel"),
  courseCountBadge: document.getElementById("courseCountBadge"),
  paymentQueue: document.getElementById("paymentQueue"),
  deviceRegistryPanel: document.getElementById("deviceRegistryPanel"),
  messageLogPanel: document.getElementById("messageLogPanel"),
  studentPreviewModal: document.getElementById("studentPreviewModal"),
  studentPreviewTitle: document.getElementById("studentPreviewTitle"),
  studentPreviewMeta: document.getElementById("studentPreviewMeta"),
  studentPreviewBody: document.getElementById("studentPreviewBody"),
  studentPreviewOpenEditorBtn: document.getElementById("studentPreviewOpenEditorBtn"),
};

function createEmptyDashboard() {
  return {
    generatedAt: "",
    spreadsheetName: "",
    students: [],
    courses: [],
    lessons: [],
    notices: [],
    enrollments: [],
    messages: [],
    devices: [],
    payments: [],
    studentMap: new Map(),
    courseMap: new Map(),
  };
}

function getStorage() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function readStoredValue(key) {
  const storage = getStorage();
  if (!storage) {
    return "";
  }

  return String(storage.getItem(key) || "");
}

function writeStoredValue(key, value) {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  storage.setItem(key, String(value || ""));
}

function removeStoredValue(key) {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  storage.removeItem(key);
}

function readStoredJson(key) {
  const raw = readStoredValue(key).trim();
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    removeStoredValue(key);
    return null;
  }
}

function writeStoredJson(key, value) {
  if (!value) {
    removeStoredValue(key);
    return;
  }

  writeStoredValue(key, JSON.stringify(value));
}

function readStoredNumber(key) {
  const value = Number(readStoredValue(key));
  return Number.isFinite(value) ? value : 0;
}

function persistAdminScrollPosition() {
  if (!state.token || dom.adminDashboard.classList.contains("hidden")) {
    return;
  }

  writeStoredValue(STORAGE_KEYS.adminScrollY, Math.max(window.scrollY || window.pageYOffset || 0, 0));
}

function restoreAdminScrollPosition() {
  const targetScrollY = Math.max(readStoredNumber(STORAGE_KEYS.adminScrollY), 0);
  if (!targetScrollY) {
    return;
  }

  const restore = () => window.scrollTo({ top: targetScrollY, left: 0, behavior: "auto" });
  window.requestAnimationFrame(restore);
  window.setTimeout(restore, 60);
}

function isActiveElementInside(container) {
  const activeElement = typeof document !== "undefined" ? document.activeElement : null;
  return !!container && !!activeElement && container.contains(activeElement);
}

function shouldPauseAdminBackgroundRefresh() {
  if (state.previewStudentId || state.editingStudentId || state.editingCourseId || state.selectedStudentIds.size) {
    return true;
  }

  if (String(dom.messageTitleInput?.value || "").trim() || String(dom.messageBodyInput?.value || "").trim()) {
    return true;
  }

  return [
    dom.studentEditorForm,
    dom.bulkCourseSelector,
    dom.bulkCourseRuleCards,
    dom.courseForm,
    dom.paymentQueue,
    dom.deviceRegistryPanel,
    dom.messageLogPanel,
  ].some((container) => isActiveElementInside(container));
}

function normalizeLocalizedDigits(value) {
  return Array.from(String(value || ""))
    .map((character) => {
      const codePoint = character.charCodeAt(0);
      for (const range of LOCALIZED_DIGIT_RANGES) {
        if (codePoint >= range.start && codePoint <= range.end) {
          return String(codePoint - range.start);
        }
      }

      return character;
    })
    .join("");
}

function normalizeLookupText(value) {
  return normalizeLocalizedDigits(value).trim().toLowerCase();
}

function isUnlimitedAccessEnabled(value) {
  return UNLIMITED_ACCESS_VALUES.includes(normalizeLookupText(value));
}

function isCourseRuleFieldLocked(fieldKey, draft = {}) {
  return (
    UNLIMITED_LOCKED_FIELD_KEYS.includes(String(fieldKey || "").trim()) &&
    isUnlimitedAccessEnabled(draft.unlimitedAccess)
  );
}

function normalizePhoneValue(value) {
  return normalizeLocalizedDigits(value).replace(/[^\d+]/g, "");
}

function normalizePasswordValue(value) {
  return normalizeLocalizedDigits(value).trim();
}

function parseList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }

  return String(value || "")
    .split(/[\n,|]/)
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function buildPipeList(values) {
  return parseList(values).join("|");
}

function getFirstAvailableValue(record, keys, fallback = "") {
  if (!record || typeof record !== "object" || !Array.isArray(keys) || !keys.length) {
    return fallback;
  }

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

function getMessageAudience(message) {
  const explicitAudience = normalizeLookupText(message?.audience || message?.visibility || message?.channel || "");
  if (explicitAudience) {
    return explicitAudience === "student" ? "student" : "admin";
  }

  const createdBy = normalizeLookupText(message?.createdBy || "");
  return createdBy === "system" || createdBy === "student portal" ? "admin" : "student";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getAdminCopyValue(key, fallback) {
  if (typeof window !== "undefined" && typeof window.getAinPortalCopy === "function") {
    return window.getAinPortalCopy(key, fallback);
  }

  return fallback || "";
}

function formatDateTime(value, fallback = "-") {
  if (!value) {
    return fallback;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return DATE_TIME_FORMATTER.format(date);
}

function formatDateValue(value, fallback = "-") {
  if (!value) {
    return fallback;
  }

  const date = parseDashboardDate(value) || new Date(value);
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return String(value || "").trim() || fallback;
  }

  return DATE_FORMATTER.format(date);
}

function formatDateTimeOrValue(value, fallback = "-") {
  if (!value) {
    return fallback;
  }

  const formattedValue = formatDateTime(value, "");
  return formattedValue || String(value || "").trim() || fallback;
}

function formatCoursePrice(value, fallback = "Not set") {
  const amount = String(value || "").trim();
  if (!amount) {
    return fallback;
  }

  return `Tk ${amount}`;
}

function normalizePaymentStatus(value) {
  return normalizeLookupText(value).replace(/\s+/g, "");
}

function isPendingPaymentStatus(value) {
  return ["pending", "submitted", "underreview", "awaitingreview", "awaitingconfirmation"].includes(
    normalizePaymentStatus(value)
  );
}

function isRejectedPaymentStatus(value) {
  return ["rejected", "declined", "failed", "cancelled"].includes(normalizePaymentStatus(value));
}

function parseTimestamp(value) {
  if (!value) {
    return null;
  }

  const parsedDate = parseDashboardDate(value) || new Date(value);
  if (!(parsedDate instanceof Date) || Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.getTime();
}

function hasUnlimitedCourseAccess(entry) {
  return !!entry?.unlimitedAccess;
}

function isEnrollmentBlocked(entry) {
  const normalized = normalizeStatus(entry?.status || "");
  return normalized === "blocked" || normalized === "suspended";
}

function isPublicOrientationLesson(lesson) {
  const title = normalizeLookupText(lesson?.title || "");
  const moduleTitle = normalizeLookupText(lesson?.module || "");
  return title.includes("orientation class") || title === "orientation" || moduleTitle.includes("orientation class");
}

function getTodayInputValue() {
  return new Date().toISOString().slice(0, 10);
}

function normalizePaymentAccessMonths(value, fallback = 1) {
  const parsed = Number(String(value || "").trim());
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return Math.max(1, Number(fallback || 1));
  }

  return Math.max(1, Math.floor(parsed));
}

function getPaymentAccessSummary(monthCount, unlimitedEnabled) {
  if (unlimitedEnabled) {
    return {
      buttonLabel: "Approve Unlimited",
      accessLabel: "unlimited access",
      helperText:
        "Unlimited access is on. End date and payment deadline will be cleared, and the course will stay active until you turn unlimited access off later.",
    };
  }

  const normalizedMonthCount = normalizePaymentAccessMonths(monthCount, 1);
  const monthLabel = `${normalizedMonthCount} month${normalizedMonthCount === 1 ? "" : "s"}`;
  return {
    buttonLabel: `Approve ${normalizedMonthCount} Month${normalizedMonthCount === 1 ? "" : "s"}`,
    accessLabel: monthLabel,
    helperText: `This approval will keep the course active for ${monthLabel} from the selected payment date.`,
  };
}

function syncPaymentReviewCard(paymentId) {
  const resolvedPaymentId = String(paymentId || "").trim();
  if (!resolvedPaymentId) {
    return;
  }

  const monthsField = dom.paymentQueue.querySelector(`[data-payment-months="${resolvedPaymentId}"]`);
  const unlimitedField = dom.paymentQueue.querySelector(`[data-payment-unlimited="${resolvedPaymentId}"]`);
  const approveButton = dom.paymentQueue.querySelector(`[data-payment-approve="${resolvedPaymentId}"]`);
  const helper = dom.paymentQueue.querySelector(`[data-payment-access-helper="${resolvedPaymentId}"]`);

  if (!monthsField || !approveButton || !helper) {
    return;
  }

  const unlimitedEnabled = !!unlimitedField?.checked;
  const monthCount = normalizePaymentAccessMonths(monthsField.value, 1);
  if (!String(monthsField.value || "").trim()) {
    monthsField.value = String(monthCount);
  }

  monthsField.disabled = unlimitedEnabled;
  monthsField.classList.toggle("cursor-not-allowed", unlimitedEnabled);
  monthsField.classList.toggle("opacity-60", unlimitedEnabled);

  const accessSummary = getPaymentAccessSummary(monthCount, unlimitedEnabled);
  approveButton.textContent = accessSummary.buttonLabel;
  helper.textContent = accessSummary.helperText;
}

function syncAllPaymentReviewCards() {
  if (!dom.paymentQueue) {
    return;
  }

  dom.paymentQueue.querySelectorAll("[data-payment-approve]").forEach((button) => {
    syncPaymentReviewCard(button.dataset.paymentApprove);
  });
}

function parseDashboardDate(value) {
  const raw = normalizeLocalizedDigits(String(value || "")).trim();
  if (!raw) {
    return null;
  }

  const directDate = new Date(raw);
  if (!Number.isNaN(directDate.getTime())) {
    return directDate;
  }

  const normalized = raw.replace(/\./g, "/").replace(/-/g, "/");
  let match = normalized.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (match) {
    const [, year, month, day] = match;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  match = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return null;
}

function formatMonthYearLabel(date, fallback = "Not recorded") {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return fallback;
  }

  return `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
}

function normalizeStatus(value) {
  return normalizeLookupText(value);
}

function normalizeAccessMode(value) {
  return normalizeLookupText(value).replace(/\s+/g, "");
}

function normalizeCourseStatus(value) {
  return INACTIVE_COURSE_STATUS_VALUES.includes(normalizeLookupText(value)) ? "Inactive" : "Active";
}

function isCourseActive(course) {
  return normalizeCourseStatus(course?.status || "Active") === "Active";
}

function setFeedback(element, message, tone = "neutral") {
  if (!element) {
    return;
  }

  element.textContent = message || "";

  const palette = element.closest(".admin-hero")
    ? {
        neutral: "#e2e8f0",
        success: "#bbf7d0",
        error: "#fecaca",
        info: "#bfdbfe",
      }
    : {
        neutral: "#64748b",
        success: "#047857",
        error: "#b91c1c",
        info: "#1d4ed8",
      };

  element.style.color = palette[tone] || palette.neutral;
}

function renderPill(value, type = "status") {
  const label = String(value || "Unknown").trim() || "Unknown";
  const normalized = normalizeStatus(label);

  const palettes =
    type === "approval"
      ? {
          approved: "bg-emerald-50 text-emerald-700 ring-emerald-100",
          pending: "bg-amber-50 text-amber-700 ring-amber-100",
          preview: "bg-indigo-50 text-indigo-700 ring-indigo-100",
          rejected: "bg-rose-50 text-rose-700 ring-rose-100",
          default: "bg-slate-100 text-slate-600 ring-slate-200",
        }
      : type === "access"
        ? {
            "class list only": "bg-indigo-50 text-indigo-700 ring-indigo-100",
            preview: "bg-indigo-50 text-indigo-700 ring-indigo-100",
            default: "bg-slate-100 text-slate-600 ring-slate-200",
          }
      : {
          active: "bg-blue-50 text-blue-700 ring-blue-100",
          pending: "bg-amber-50 text-amber-700 ring-amber-100",
          submitted: "bg-amber-50 text-amber-700 ring-amber-100",
          underreview: "bg-amber-50 text-amber-700 ring-amber-100",
          sent: "bg-blue-50 text-blue-700 ring-blue-100",
          replied: "bg-emerald-50 text-emerald-700 ring-emerald-100",
          "replies received": "bg-emerald-50 text-emerald-700 ring-emerald-100",
          completed: "bg-indigo-50 text-indigo-700 ring-indigo-100",
          skipped: "bg-slate-100 text-slate-600 ring-slate-200",
          blocked: "bg-rose-50 text-rose-700 ring-rose-100",
          suspended: "bg-rose-50 text-rose-700 ring-rose-100",
          expired: "bg-orange-50 text-orange-700 ring-orange-100",
          inactive: "bg-slate-100 text-slate-600 ring-slate-200",
          approved: "bg-emerald-50 text-emerald-700 ring-emerald-100",
          rejected: "bg-rose-50 text-rose-700 ring-rose-100",
          default: "bg-slate-100 text-slate-600 ring-slate-200",
        };

  const className = palettes[normalized] || palettes.default;
  return `<span class="inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${className}">${escapeHtml(label)}</span>`;
}

function isStudentPreviewOnly(student) {
  return (
    PREVIEW_ACCESS_VALUES.includes(normalizeAccessMode(student?.portalAccessMode)) ||
    PREVIEW_ACCESS_VALUES.includes(normalizeAccessMode(student?.loginApproval))
  );
}

function renderStudentAccessBadge(student) {
  if (!isStudentPreviewOnly(student)) {
    return "";
  }

  return renderPill("Class List Only", "access");
}

function isStudentSecurityLocked(student) {
  const highlight = String(student?.highlight || "").trim();
  const status = normalizeStatus(student?.status || "");
  return highlight.startsWith(SECURITY_LOCK_HIGHLIGHT_PREFIX) && ["blocked", "suspended"].includes(status);
}

function getStudentPreviewMessages(studentId) {
  return state.data.messages
    .filter((message) => message.audience === "student" && message.studentIds.includes(studentId))
    .map((message) => ({
      ...message,
      recipientEntry: message.recipientState?.[studentId] || {},
    }))
    .sort((left, right) => new Date(right.createdOn || 0) - new Date(left.createdOn || 0));
}

function getStudentPreviewPayments(studentId) {
  return state.data.payments
    .filter((payment) => payment.studentId === studentId)
    .sort((left, right) => new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0));
}

function getStudentPreviewNotices() {
  return [...(state.data.notices || [])].sort(
    (left, right) => new Date(right.publishedOn || right.createdOn || 0) - new Date(left.publishedOn || left.createdOn || 0)
  );
}

function getCourseLessons(courseId) {
  return (state.data.lessons || [])
    .filter((lesson) => String(lesson?.courseId || lesson?.courseID || "").trim() === String(courseId || "").trim())
    .sort((left, right) => {
      const leftDate = new Date(left?.releaseDate || 0).getTime();
      const rightDate = new Date(right?.releaseDate || 0).getTime();
      return rightDate - leftDate;
    });
}

function getLatestPaymentForCourse(studentId, courseId) {
  if (!studentId || !courseId) {
    return null;
  }

  return (
    state.data.payments.find(
      (payment) => payment.studentId === studentId && payment.courseId === courseId
    ) || null
  );
}

function buildStudentFallbackEnrollment(student, courseId, index) {
  return {
    id: `preview-fallback-${student.id}-${index + 1}`,
    studentId: student.id,
    courseId,
    accessStartDate: student.joinedOn || "",
    accessEndDate: "",
    unlimitedAccess: false,
    videoAccessUntil: "",
    lastPaymentDate: "",
    paymentDueDate: "",
    monthlyFee: "",
    status: student.status || "Active",
    paidMonths: [],
  };
}

function getStudentSecurityLockCopy(student) {
  return (
    String(student?.highlight || "").trim() ||
    "A security lock is active for this account. Paid videos stay blocked until the admin removes the lock."
  );
}

function getStudentPreviewLessonAccessState(student, entry, lesson) {
  if (!entry?.portalVisible) {
    return {
      canWatch: false,
      status: "course-hidden",
      reason: "This course is inactive or hidden, so it will not appear in the student's portal right now.",
    };
  }

  if (isPublicOrientationLesson(lesson)) {
    return {
      canWatch: true,
      status: "public-open",
      reason: "Orientation content stays open for quick guidance.",
    };
  }

  if (entry?.securityLocked) {
    return {
      canWatch: false,
      status: "security-lock",
      reason: getStudentSecurityLockCopy(student),
    };
  }

  if (entry?.previewOnly) {
    return {
      canWatch: false,
      status: "preview-only",
      reason: "Preview mode lets the student review the full class list, but video playback stays locked.",
    };
  }

  if (isEnrollmentBlocked(entry)) {
    return {
      canWatch: false,
      status: "blocked",
      reason: "Access is blocked by admin for this course.",
    };
  }

  const releaseTimestamp = parseTimestamp(lesson?.releaseDate);
  if (releaseTimestamp === null || hasUnlimitedCourseAccess(entry)) {
    return {
      canWatch: true,
      status: "open",
      reason: "",
    };
  }

  const accessStartTimestamp = parseTimestamp(entry?.accessStartDate);
  if (accessStartTimestamp !== null && releaseTimestamp < accessStartTimestamp) {
    return {
      canWatch: false,
      status: "outside-window",
      reason: `This lesson is before the approved access start date of ${formatDateValue(entry.accessStartDate, "the selected date")}.`,
    };
  }

  const accessEndTimestamp = parseTimestamp(entry?.accessEndDate);
  if (accessEndTimestamp !== null && releaseTimestamp > accessEndTimestamp) {
    return {
      canWatch: false,
      status: "outside-window",
      reason: `This lesson is after the approved access end date of ${formatDateValue(entry.accessEndDate, "the selected date")}.`,
    };
  }

  if (releaseTimestamp > Date.now()) {
    return {
      canWatch: false,
      status: "scheduled",
      reason: `This lesson will unlock on ${formatDateValue(lesson.releaseDate, "the scheduled date")}.`,
    };
  }

  return {
    canWatch: true,
    status: "open",
    reason: "",
  };
}

function getStudentPreviewLessonStateMeta(accessState) {
  const status = String(accessState?.status || "").trim();
  if (status === "public-open") {
    return {
      badge: renderStudentPreviewStateBadge("Public Open", "blue"),
      className: "is-public",
    };
  }

  if (status === "open") {
    return {
      badge: renderStudentPreviewStateBadge("Unlocked", "emerald"),
      className: "is-open",
    };
  }

  if (status === "scheduled") {
    return {
      badge: renderStudentPreviewStateBadge("Scheduled", "amber"),
      className: "is-scheduled",
    };
  }

  if (status === "preview-only") {
    return {
      badge: renderStudentPreviewStateBadge("Preview Lock", "indigo"),
      className: "is-locked",
    };
  }

  if (status === "course-hidden") {
    return {
      badge: renderStudentPreviewStateBadge("Hidden", "slate"),
      className: "is-locked",
    };
  }

  if (status === "security-lock") {
    return {
      badge: renderStudentPreviewStateBadge("Security Lock", "rose"),
      className: "is-locked",
    };
  }

  if (status === "blocked") {
    return {
      badge: renderStudentPreviewStateBadge("Blocked", "rose"),
      className: "is-locked",
    };
  }

  if (status === "outside-window") {
    return {
      badge: renderStudentPreviewStateBadge("Date Lock", "amber"),
      className: "is-locked",
    };
  }

  return {
    badge: renderStudentPreviewStateBadge("Locked", "slate"),
    className: "is-locked",
  };
}

function getStudentPreviewCourseEntries(student) {
  if (!student) {
    return [];
  }

  const previewOnly = isStudentPreviewOnly(student);
  const securityLocked = isStudentSecurityLocked(student);
  const enrollmentMap = new Map(getEnrollmentRecordsForStudent(student.id).map((entry) => [entry.courseId, entry]));

  return getStudentCourseIds(student)
    .map((courseId, index) => {
      const course = state.data.courseMap.get(courseId) || null;
      if (!course) {
        return null;
      }

      const enrollment = enrollmentMap.get(courseId) || buildStudentFallbackEnrollment(student, courseId, index);
      const latestPayment = getLatestPaymentForCourse(student.id, courseId);
      return {
        ...enrollment,
        course,
        latestPayment,
        pendingPayment: isPendingPaymentStatus(latestPayment?.status || ""),
        paymentRejected: isRejectedPaymentStatus(latestPayment?.status || ""),
        previewOnly,
        securityLocked,
        portalVisible: isCourseActive(course),
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      if (left.portalVisible !== right.portalVisible) {
        return left.portalVisible ? -1 : 1;
      }

      const leftStart = parseTimestamp(left.accessStartDate) ?? Number.MAX_SAFE_INTEGER;
      const rightStart = parseTimestamp(right.accessStartDate) ?? Number.MAX_SAFE_INTEGER;
      if (leftStart !== rightStart) {
        return leftStart - rightStart;
      }

      return (left.course?.title || "").localeCompare(right.course?.title || "");
    });
}

function getStudentPreviewLessonStats(student, courseEntries) {
  const lessonStates = courseEntries.flatMap((entry) =>
    getCourseLessons(entry.course.id).map((lesson) => ({
      lesson,
      entry,
      accessState: getStudentPreviewLessonAccessState(student, entry, lesson),
    }))
  );

  const totalLessons = lessonStates.length;
  const unlockedLessons = lessonStates.filter((item) => item.accessState.canWatch).length;
  const lockedLessons = Math.max(totalLessons - unlockedLessons, 0);
  const completedLessons = lessonStates.filter(
    (item) => item.accessState.canWatch && student.completedLessonIds.includes(String(item.lesson?.id || "").trim())
  ).length;

  return {
    totalLessons,
    unlockedLessons,
    lockedLessons,
    completedLessons,
    visibleCourseCount: courseEntries.filter((entry) => entry.portalVisible).length,
    hiddenCourseCount: courseEntries.filter((entry) => !entry.portalVisible).length,
  };
}

function formatSelectedStudentNames(students) {
  const names = students
    .slice(0, 2)
    .map((student) => student.name || student.id)
    .filter(Boolean);

  if (!names.length) {
    return "";
  }

  if (students.length > 2) {
    return `${names.join(", ")} +${students.length - 2} more`;
  }

  return names.join(", ");
}

function setButtonDisabled(button, disabled) {
  if (!button) {
    return;
  }

  button.disabled = !!disabled;
  button.classList.toggle("opacity-50", !!disabled);
  button.classList.toggle("cursor-not-allowed", !!disabled);
}

function normalizeStudentDeviceLimitValue(value, fallback = 2) {
  const fallbackLimit = Math.max(1, Math.floor(Number(fallback || 2)) || 2);
  const rawValue = String(value || "").trim();
  if (!rawValue) {
    return fallbackLimit;
  }

  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallbackLimit;
  }

  return Math.max(1, Math.floor(parsed));
}

function createCourseMap(courses) {
  return new Map(courses.map((course) => [course.id, course]));
}

function normalizeDashboard(payload = {}) {
  const courses = (payload.courses || [])
    .map((course) => ({
      id: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.id, "")).trim(),
      title: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.title, "Untitled Course")).trim() || "Untitled Course",
      shortTitle:
        String(
          getFirstAvailableValue(
            course,
            COURSE_FIELD_KEYS.shortTitle,
            getFirstAvailableValue(course, COURSE_FIELD_KEYS.title, "Course")
          )
        ).trim() || "Course",
      faculty: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.faculty, "")).trim(),
      category: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.category, "")).trim(),
      batch: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.batch, "")).trim(),
      session: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.session, "")).trim(),
      schedule: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.schedule, "")).trim(),
      nextLive: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.nextLive, "")).trim(),
      price: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.price, "")).trim(),
      description: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.description, "")).trim(),
      status: normalizeCourseStatus(getFirstAvailableValue(course, COURSE_FIELD_KEYS.status, "Active")),
    }))
    .filter((course) => course.id)
    .sort((left, right) => left.title.localeCompare(right.title));

  const courseMap = createCourseMap(courses);

  const students = (payload.students || [])
    .map((student) => ({
      id: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.id, "")).trim(),
      name: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.name, "")).trim(),
      phone: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.phone, "")).trim(),
      email: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.email, "")).trim(),
      batch: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.batch, "")).trim(),
      session: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.session, "")).trim(),
      joinedOn: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.joinedOn, "")).trim(),
      status: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.status, "Active")).trim() || "Active",
      password: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.password, "")).trim(),
      loginApproval: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.loginApproval, "Pending")).trim() || "Pending",
      portalAccessMode: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.portalAccessMode, "")).trim(),
      highlight: String(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.highlight, "")).trim(),
      enrolledCourseIds: parseList(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.enrolledCourseIds, "")),
      completedLessonIds: parseList(getFirstAvailableValue(student, STUDENT_FIELD_KEYS.completedLessonIds, "")),
      maxDeviceCount: normalizeStudentDeviceLimitValue(
        getFirstAvailableValue(student, STUDENT_FIELD_KEYS.maxDeviceCount, ""),
        2
      ),
    }))
    .filter((student) => student.id)
    .sort((left, right) => left.name.localeCompare(right.name));
  const studentMap = new Map(students.map((student) => [student.id, student]));

  const enrollments = (payload.enrollments || [])
    .flatMap((enrollment, index) => {
      const studentIds = parseList(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.studentId, ""));
      const courseIds = parseList(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.courseId, ""));

      return studentIds.flatMap((studentId) =>
        courseIds.map((courseId, courseIndex) => ({
          id:
            String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.id, "")).trim() ||
            `enrollment-${index + 1}-${courseIndex + 1}`,
          studentId,
          courseId,
          accessStartDate: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.accessStartDate, "")).trim(),
          accessEndDate: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.accessEndDate, "")).trim(),
          unlimitedAccess: isUnlimitedAccessEnabled(
            getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.unlimitedAccess, "")
          ),
          videoAccessUntil:
            String(
              getFirstAvailableValue(
                enrollment,
                ENROLLMENT_FIELD_KEYS.videoAccessUntil,
                getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.accessEndDate, "")
              )
            ).trim(),
          lastPaymentDate: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.lastPaymentDate, "")).trim(),
          paymentDueDate: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.paymentDueDate, "")).trim(),
          monthlyFee: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.monthlyFee, "")).trim(),
          status: String(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.status, "Active")).trim() || "Active",
          paidMonths: parseList(getFirstAvailableValue(enrollment, ENROLLMENT_FIELD_KEYS.paidMonths, "")),
        }))
      );
    })
    .filter((enrollment) => enrollment.studentId && enrollment.courseId);

  const messages = (payload.messages || [])
    .map((message) => ({
      id: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.id, "")).trim(),
      studentIds: parseList(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.studentIds, "")),
      title: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.title, "Admin Message")).trim() || "Admin Message",
      message: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.message, "")).trim(),
      status: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.status, "Sent")).trim() || "Sent",
      createdOn: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.createdOn, "")).trim(),
      createdBy: String(getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.createdBy, "")).trim(),
      audience: getMessageAudience(message),
      recipientState: parseRecipientState(
        getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.recipientState, ""),
        getFirstAvailableValue(message, MESSAGE_FIELD_KEYS.studentIds, "")
      ),
    }))
    .sort((left, right) => new Date(right.createdOn || 0) - new Date(left.createdOn || 0));

  const payments = (payload.payments || [])
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
        studentTransactionId: String(getFirstAvailableValue(payment, PAYMENT_FIELD_KEYS.studentTransactionId, "")).trim(),
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
    .filter((payment) => payment.id && payment.studentId && payment.courseId)
    .sort((left, right) => new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0));

  const devices = (payload.devices || [])
    .map((device, index) => ({
      id: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.id, `device-${index + 1}`)).trim(),
      studentId: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.studentId, "")).trim(),
      deviceId: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.deviceId, "")).trim(),
      deviceName: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.deviceName, "Unknown Device")).trim() || "Unknown Device",
      deviceFingerprint: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.deviceFingerprint, "")).trim(),
      publicIp: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.publicIp, "")).trim(),
      userAgent: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.userAgent, "")).trim(),
      platform: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.platform, "")).trim(),
      browserLanguage: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.browserLanguage, "")).trim(),
      timezone: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.timezone, "")).trim(),
      screenSize: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.screenSize, "")).trim(),
      clientShell: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.clientShell, "")).trim() || "Browser",
      displayMode: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.displayMode, "browser")).trim() || "browser",
      referrer: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.referrer, "")).trim(),
      locationPermission: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.locationPermission, "")).trim() || "Not Requested",
      latitude: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.latitude, "")).trim(),
      longitude: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.longitude, "")).trim(),
      status: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.status, "Active")).trim() || "Active",
      firstSeenOn: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.firstSeenOn, "")).trim(),
      lastSeenOn: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.lastSeenOn, "")).trim(),
      lastLoginOn: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.lastLoginOn, "")).trim(),
      revokedOn: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.revokedOn, "")).trim(),
      revokedBy: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.revokedBy, "")).trim(),
      note: String(getFirstAvailableValue(device, DEVICE_FIELD_KEYS.note, "")).trim(),
    }))
    .filter((device) => device.id && device.studentId)
    .sort((left, right) => new Date(right.lastSeenOn || right.lastLoginOn || 0) - new Date(left.lastSeenOn || left.lastLoginOn || 0));

  return {
    generatedAt: String(payload.generatedAt || "").trim(),
    spreadsheetName: String(payload.spreadsheetName || "").trim(),
    students,
    courses,
    lessons: payload.lessons || [],
    notices: payload.notices || [],
    enrollments,
    messages,
    devices,
    payments,
    studentMap,
    courseMap,
  };
}

function normalizeAdminSession(admin = null) {
  if (!admin || typeof admin !== "object") {
    return null;
  }

  return {
    ...admin,
    name: String(getFirstAvailableValue(admin, ADMIN_FIELD_KEYS.name, admin.name || "")).trim(),
    username: String(getFirstAvailableValue(admin, ADMIN_FIELD_KEYS.username, admin.username || "")).trim(),
  };
}

function getStudentById(studentId) {
  return state.data.students.find((student) => student.id === studentId) || null;
}

function getDevicesForStudent(studentId) {
  if (!studentId) {
    return [];
  }

  return state.data.devices.filter((device) => device.studentId === studentId);
}

function isTrustedAdminDeviceRecord(device) {
  return String(device?.note || "").trim().startsWith(TRUSTED_ADMIN_DEVICE_NOTE_PREFIX);
}

function extractDeviceHardwareModel(userAgent = "", platform = "") {
  const source = `${userAgent} ${platform}`;
  const androidMatch =
    String(userAgent || "").match(/Android\s[\d.]+;\s*([^;()]+?)\s+Build\//i) ||
    String(userAgent || "").match(/Android\s[\d.]+;\s*([^;()]+?)\)/i);
  if (androidMatch?.[1]) {
    return normalizeStatus(androidMatch[1]);
  }
  if (/iPad/i.test(source)) {
    return "ipad";
  }
  if (/iPhone/i.test(source)) {
    return "iphone";
  }
  if (/Windows/i.test(source)) {
    return "windows";
  }
  if (/Mac/i.test(source)) {
    return "mac";
  }
  if (/Linux/i.test(source)) {
    return "linux";
  }
  return normalizeStatus(platform || "");
}

function buildComparableDeviceSlotKey(device) {
  const rawScreenSize = String(device?.screenSize || "").trim();
  const screenMatch = rawScreenSize.match(/^(\d+)\s*x\s*(\d+)$/i);
  const normalizedScreenSize = screenMatch
    ? `${Math.min(Number(screenMatch[1]), Number(screenMatch[2]))}x${Math.max(Number(screenMatch[1]), Number(screenMatch[2]))}`
    : rawScreenSize;

  return [
    extractDeviceHardwareModel(device?.userAgent || "", device?.platform || ""),
    normalizeStatus(device?.platform || ""),
    normalizeStatus(normalizedScreenSize),
    normalizeStatus(device?.timezone || ""),
    normalizeStatus(device?.browserLanguage || ""),
  ]
    .filter(Boolean)
    .join("|");
}

function getDeviceSlotIdentityCandidates(device) {
  const normalizedFingerprint = normalizeStatus(device?.deviceFingerprint || "");
  const comparableSlot = buildComparableDeviceSlotKey(device);
  const normalizedDeviceId = normalizeStatus(device?.deviceId || "");
  const candidates = [];

  if (normalizedFingerprint.startsWith("slot:")) {
    candidates.push(normalizedFingerprint);
  }
  if (comparableSlot) {
    candidates.push(`cmp:${comparableSlot}`);
  }
  if (normalizedFingerprint && !normalizedFingerprint.startsWith("slot:")) {
    candidates.push(`fp:${normalizedFingerprint}`);
  }
  if (normalizedDeviceId) {
    candidates.push(`id:${normalizedDeviceId}`);
  }

  return candidates.filter((candidate, index, list) => candidate && list.indexOf(candidate) === index);
}

function doDevicesShareSameSlot(device, otherDevice) {
  const leftCandidates = getDeviceSlotIdentityCandidates(device);
  const rightCandidates = getDeviceSlotIdentityCandidates(otherDevice);
  if (!leftCandidates.length || !rightCandidates.length) {
    return false;
  }

  return leftCandidates.some((candidate) => rightCandidates.includes(candidate));
}

function getActiveDevicesForStudent(studentId) {
  return getDevicesForStudent(studentId).reduce((result, device) => {
    if (normalizeStatus(device.status) !== "active" || isTrustedAdminDeviceRecord(device)) {
      return result;
    }

    if (!result.some((existingDevice) => doDevicesShareSameSlot(existingDevice, device))) {
      result.push(device);
    }
    return result;
  }, []);
}

function getStudentDeviceLimit(student) {
  return normalizeStudentDeviceLimitValue(student?.maxDeviceCount, 2);
}

function buildStudentDeviceUsageLabel(student) {
  const activeCount = student?.id ? getActiveDevicesForStudent(student.id).length : 0;
  const allowedCount = getStudentDeviceLimit(student);
  return `${activeCount}/${allowedCount} active device${allowedCount === 1 ? "" : "s"}`;
}

function getEnrollmentRecordsForStudent(studentId) {
  return state.data.enrollments.filter((enrollment) => enrollment.studentId === studentId);
}

function getStudentCourseIds(student) {
  if (!student) {
    return [];
  }

  const seen = new Set();
  const collected = [];

  [...student.enrolledCourseIds, ...getEnrollmentRecordsForStudent(student.id).map((entry) => entry.courseId)].forEach(
    (courseId) => {
      if (!courseId || seen.has(courseId) || !state.data.courseMap.has(courseId)) {
        return;
      }

      seen.add(courseId);
      collected.push(courseId);
    }
  );

  return collected;
}

function getStudentVisibleCourseIds(student) {
  return getStudentCourseIds(student).filter((courseId) => {
    const course = state.data.courseMap.get(courseId);
    return course && isCourseActive(course);
  });
}

function getStudentHiddenCourseCount(student) {
  return getStudentPreviewCourseEntries(student).filter((entry) => !entry.portalVisible).length;
}

function normalizeCourseFilterValue(value) {
  const normalized = String(value || "").trim();
  if (!normalized || normalized === "all" || !state.data.courseMap.has(normalized)) {
    return "all";
  }

  return normalized;
}

function getCourseStudentCountMap() {
  const counts = new Map(state.data.courses.map((course) => [course.id, 0]));

  state.data.students.forEach((student) => {
    getStudentCourseIds(student).forEach((courseId) => {
      counts.set(courseId, (counts.get(courseId) || 0) + 1);
    });
  });

  return counts;
}

function doesStudentMatchCourseFilter(student, courseFilterValue = state.courseFilter) {
  const selectedCourseId = normalizeCourseFilterValue(courseFilterValue);
  return selectedCourseId === "all" ? true : getStudentCourseIds(student).includes(selectedCourseId);
}

function getStudentsInCourseScope(courseFilterValue = state.courseFilter) {
  return state.data.students.filter((student) => doesStudentMatchCourseFilter(student, courseFilterValue));
}

function buildCourseFilterOptions(selectedCourseId = state.courseFilter) {
  const normalizedCourseId = normalizeCourseFilterValue(selectedCourseId);
  const courseCounts = getCourseStudentCountMap();

  return [
    `<option value="all"${normalizedCourseId === "all" ? " selected" : ""}>All Courses (${state.data.students.length})</option>`,
    ...state.data.courses.map((course) => {
      const enrolledCount = courseCounts.get(course.id) || 0;
      const label = `${course.shortTitle || course.title} (${enrolledCount})`;
      return `<option value="${escapeHtml(course.id)}"${
        course.id === normalizedCourseId ? " selected" : ""
      }>${escapeHtml(label)}</option>`;
    }),
  ].join("");
}

function renderCourseFilterControls() {
  const selectedCourseId = normalizeCourseFilterValue(state.courseFilter);
  const selectedCourse = selectedCourseId === "all" ? null : state.data.courseMap.get(selectedCourseId) || null;
  const studentsInScope = getStudentsInCourseScope(selectedCourseId);
  const optionMarkup = buildCourseFilterOptions(selectedCourseId);

  state.courseFilter = selectedCourseId;

  if (dom.adminAnalyticsCourse) {
    dom.adminAnalyticsCourse.innerHTML = optionMarkup;
    dom.adminAnalyticsCourse.disabled = !state.data.courses.length;
    dom.adminAnalyticsCourse.value = selectedCourseId;
  }

  if (dom.studentCourseFilter) {
    dom.studentCourseFilter.innerHTML = optionMarkup;
    dom.studentCourseFilter.disabled = !state.data.courses.length;
    dom.studentCourseFilter.value = selectedCourseId;
  }

  if (dom.studentFilterMeta) {
    dom.studentFilterMeta.textContent = selectedCourse
      ? `Showing ${studentsInScope.length} student${studentsInScope.length === 1 ? "" : "s"} inside ${
          selectedCourse.title
        }. Search works within this course.`
      : `Showing all ${state.data.students.length} students across ${state.data.courses.length} courses.`;
  }
}

function getSelectedStudentIds() {
  return [...state.selectedStudentIds];
}

function getSelectedStudents() {
  return getSelectedStudentIds()
    .map((studentId) => getStudentById(studentId))
    .filter(Boolean);
}

function renderSelectionState() {
  const selectedStudents = getSelectedStudents();
  const selectedCount = selectedStudents.length;
  const hasSelection = selectedCount > 0;
  const selectedNames = formatSelectedStudentNames(selectedStudents);

  dom.studentSelectionBar.classList.toggle("hidden", !hasSelection);
  dom.selectedStudentsSummary.textContent = hasSelection
    ? `${selectedCount} student${selectedCount === 1 ? "" : "s"} selected`
    : "0 students selected";
  dom.selectedStudentsMeta.textContent = hasSelection
    ? `${selectedNames}. Quick actions are ready now, and the full student tools stay available below.`
    : "Quick actions and full student tools are ready.";
  dom.selectedStudentsCountBadge.textContent = hasSelection
    ? `${selectedCount} selected`
    : "No selection";
  dom.selectedStudentsWorkspaceMeta.textContent = hasSelection
    ? `Managing ${selectedNames}. You can update approval, preview access, course access, and messages from this block.`
    : "Select one or more students to update approval, preview access, assign courses, and send messages.";
  dom.selectAllStudents.disabled = !state.visibleStudentIds.length;
  dom.bulkActionSelect.disabled = !hasSelection;
  setButtonDisabled(dom.applyBulkActionBtn, !hasSelection);
  setButtonDisabled(dom.assignCoursesBtn, !hasSelection);
  setButtonDisabled(dom.sendMessageBtn, !hasSelection);

  [...dom.studentQuickActionBar.querySelectorAll("button")].forEach((button) => {
    setButtonDisabled(button, !hasSelection);
  });
}

function buildStudentSearchHaystack(student) {
  const courseTokens = getStudentCourseIds(student).flatMap((courseId) => {
    const course = state.data.courseMap.get(courseId);
    return [courseId, course?.title || "", course?.shortTitle || ""];
  });

  return [
    student.id,
    student.name,
    student.phone,
    student.email,
    student.batch,
    student.session,
    student.status,
    student.loginApproval,
    student.portalAccessMode,
    ...courseTokens,
  ]
    .map((item) => normalizeLookupText(item))
    .filter(Boolean);
}

function getFilteredStudents() {
  const studentsInScope = getStudentsInCourseScope();
  const rawQuery = state.studentQuery.trim();
  if (!rawQuery) {
    return studentsInScope;
  }

  const query = normalizeLookupText(rawQuery);
  const phoneQuery = normalizePhoneValue(rawQuery);

  return studentsInScope.filter((student) => {
    if (phoneQuery && normalizePhoneValue(student.phone).includes(phoneQuery)) {
      return true;
    }

    return buildStudentSearchHaystack(student).some((token) => token.includes(query));
  });
}

function resetStudentEditor() {
  state.editingStudentId = "";
  dom.studentEditorForm.reset();
  dom.editorStudentId.value = "";
  dom.editorStudentMaxDevices.value = "";
  dom.editorStudentStatus.value = "Active";
  dom.editorStudentApproval.value = "Approved";
  dom.editorStudentAccessMode.value = "";
  resetBulkCourseRuleDrafts();
  renderStudentEditor();
  setFeedback(dom.studentEditorFeedback, "");
}

function setEditingStudent(studentId) {
  state.editingStudentId = studentId;
  state.selectedStudentIds = new Set(studentId ? [studentId] : []);
  resetBulkCourseRuleDrafts();
  renderStudentTable();
  renderStudentEditor();
  renderBulkCourseSelector();
  setFeedback(dom.messageFeedback, studentId ? "One student selected for access control." : "", "info");
}

function focusMessageComposer() {
  dom.selectedStudentWorkspace?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.setTimeout(() => {
    dom.messageBodyInput?.focus();
  }, 120);
}

function prefillReplyToStudent(studentId, sourceMessageId) {
  const student = getStudentById(studentId);
  const message = state.data.messages.find((entry) => entry.id === sourceMessageId) || null;

  if (!student || !message) {
    setFeedback(dom.messageFeedback, "Student reply context could not be loaded.", "error");
    return;
  }

  const recipientEntry = message.recipientState?.[studentId] || {};
  const baseTitle = message.title || "Admin Message";
  const normalizedTitle = normalizeLookupText(baseTitle).startsWith("re:")
    ? baseTitle
    : `Re: ${baseTitle}`;

  setEditingStudent(studentId);
  dom.messageTitleInput.value = normalizedTitle;
  dom.messageBodyInput.value = recipientEntry.reply
    ? `Regarding your reply:\n"${recipientEntry.reply}"\n\n`
    : "";
  setFeedback(
    dom.messageFeedback,
    `Reply mode is ready for ${student.name}. Write your message and send it as a popup.`,
    "info"
  );
  focusMessageComposer();
}

function clearCourseForm() {
  state.editingCourseId = "";
  dom.courseForm.reset();
  if (dom.courseStatusInput) {
    dom.courseStatusInput.value = "Active";
  }
  setFeedback(dom.courseFeedback, "");

  const submitButton = dom.courseForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Save Course";
  }
}

function createEmptyCourseRuleDraft() {
  return COURSE_RULE_FIELDS.reduce((result, field) => {
    result[field.key] = "";
    return result;
  }, {});
}

function resetBulkCourseRuleDrafts() {
  state.bulkCourseRuleDrafts = {};
}

function getEnrollmentRecord(studentId, courseId) {
  return (
    state.data.enrollments.find(
      (enrollment) => enrollment.studentId === studentId && enrollment.courseId === courseId
    ) || null
  );
}

function getCourseRuleValueFromEnrollment(enrollment, fieldKey) {
  if (!enrollment) {
    return fieldKey === "unlimitedAccess" ? "false" : "";
  }

  if (fieldKey === "paidMonths") {
    return (enrollment.paidMonths || []).join("|");
  }

  if (fieldKey === "unlimitedAccess") {
    return isUnlimitedAccessEnabled(enrollment.unlimitedAccess) ? "true" : "false";
  }

  return String(enrollment[fieldKey] || "").trim();
}

function getCommonCourseRuleValue(selectedStudents, courseId, fieldKey) {
  if (!selectedStudents.length) {
    return "";
  }

  const values = selectedStudents.map((student) =>
    getCourseRuleValueFromEnrollment(getEnrollmentRecord(student.id, courseId), fieldKey)
  );
  const normalizedValues = [...new Set(values.map((value) => String(value || "").trim()))];
  return normalizedValues.length === 1 ? normalizedValues[0] : "";
}

function getMixedCourseRuleFields(selectedStudents, courseId) {
  if (selectedStudents.length <= 1) {
    return [];
  }

  return COURSE_RULE_FIELDS.filter((field) => {
    const values = selectedStudents.map((student) =>
      getCourseRuleValueFromEnrollment(getEnrollmentRecord(student.id, courseId), field.key)
    );
    return [...new Set(values.map((value) => String(value || "").trim()))].length > 1;
  }).map((field) => field.label);
}

function getCourseRuleDraft(courseId, selectedStudents = getSelectedStudents()) {
  if (!state.bulkCourseRuleDrafts[courseId]) {
    state.bulkCourseRuleDrafts[courseId] = COURSE_RULE_FIELDS.reduce((result, field) => {
      result[field.key] = getCommonCourseRuleValue(selectedStudents, courseId, field.key);
      return result;
    }, createEmptyCourseRuleDraft());
  }

  return state.bulkCourseRuleDrafts[courseId];
}

function renderCourseRuleField(courseId, field, draft) {
  const value = String(draft[field.key] || "").trim();
  const isLockedByUnlimited = isCourseRuleFieldLocked(field.key, draft);
  const controlClassName = isLockedByUnlimited
    ? "w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-400 outline-none"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none";
  const baseAttributes = [
    `data-course-rule-course="${escapeHtml(courseId)}"`,
    `data-course-rule-field="${escapeHtml(field.key)}"`,
    `class="${controlClassName}"`,
  ];
  const toggleAttributes = [
    `data-course-rule-course="${escapeHtml(courseId)}"`,
    `data-course-rule-field="${escapeHtml(field.key)}"`,
    'class="h-5 w-5 rounded border-slate-300 text-blue-700 focus:ring-2 focus:ring-blue-200"',
  ];

  let controlMarkup = "";
  if (field.type === "toggle") {
    const isMixed = !value;
    const isChecked = isUnlimitedAccessEnabled(value);
    const badgeClass = isMixed
      ? "bg-slate-100 text-slate-600"
      : isChecked
      ? "bg-emerald-100 text-emerald-700"
      : "bg-amber-100 text-amber-700";
    const badgeLabel = isMixed ? "Keep Current" : isChecked ? "Unlimited On" : "Unlimited Off";

    controlMarkup = `
      <div class="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0">
            <span class="block text-sm font-semibold text-slate-900">${escapeHtml(field.label)}</span>
            ${
              field.helper
                ? `<span class="mt-1 block text-xs leading-5 text-slate-500">${escapeHtml(field.helper)}</span>`
                : ""
            }
          </div>
          <label class="inline-flex items-center gap-3 self-start rounded-full ${badgeClass} px-3 py-2 text-xs font-bold">
            <input
              ${toggleAttributes.join(" ")}
              type="checkbox"
              value="true"
              data-course-rule-toggle="true"
              data-course-rule-indeterminate="${isMixed ? "true" : "false"}"
              ${isChecked ? "checked" : ""}
            />
            <span>${escapeHtml(badgeLabel)}</span>
          </label>
        </div>
      </div>
    `;
  } else if (field.type === "select") {
    controlMarkup = `
      <select ${baseAttributes.join(" ")} ${isLockedByUnlimited ? "disabled" : ""}>
        ${field.options
          .map(
            (option) => `
              <option value="${escapeHtml(option.value)}" ${option.value === value ? "selected" : ""}>${escapeHtml(
                option.label
              )}</option>
            `
          )
          .join("")}
      </select>
    `;
  } else {
    controlMarkup = `
      <input
        ${baseAttributes.join(" ")}
        type="${escapeHtml(field.type)}"
        value="${escapeHtml(value)}"
        ${field.placeholder ? `placeholder="${escapeHtml(field.placeholder)}"` : ""}
        ${isLockedByUnlimited ? "disabled" : ""}
      />
    `;
  }

  return `
    <label class="block ${field.wide ? "sm:col-span-2 xl:col-span-2" : ""}">
      <span class="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500">${escapeHtml(field.label)}</span>
      ${controlMarkup}
      ${
        isLockedByUnlimited
          ? '<span class="mt-2 block text-[11px] font-medium text-amber-700">Locked while Unlimited Access is on.</span>'
          : ""
      }
    </label>
  `;
}

function renderBulkCourseRuleCards() {
  const selectedStudents = getSelectedStudents();
  const selectedCourseIds = readCheckedCourseIds(dom.bulkCourseSelector, "bulk");

  if (!selectedStudents.length) {
    dom.bulkCourseRuleCards.innerHTML =
      '<div class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500">Select student first to edit course-wise access rules.</div>';
    return;
  }

  if (!selectedCourseIds.length) {
    dom.bulkCourseRuleCards.innerHTML =
      '<div class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500">Check one or more courses above. Only checked courses will show their own access rules here.</div>';
    return;
  }

  dom.bulkCourseRuleCards.innerHTML = selectedCourseIds
    .map((courseId) => {
      const course = state.data.courseMap.get(courseId) || null;
      const draft = getCourseRuleDraft(courseId, selectedStudents);
      const mixedFields = getMixedCourseRuleFields(selectedStudents, courseId);
      const unlimitedEnabled = isUnlimitedAccessEnabled(draft.unlimitedAccess);
      const courseMeta = [
        course?.category ? course.category : "",
        course?.batch ? `Batch: ${course.batch}` : "",
        course?.session ? `Session: ${course.session}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      return `
        <article class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div class="min-w-0">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">${escapeHtml(
                course?.shortTitle || course?.title || courseId
              )}</p>
              <h5 class="mt-2 break-words text-lg font-extrabold text-slate-950">${escapeHtml(
                course?.title || courseId
              )}</h5>
              ${
                courseMeta
                  ? `<p class="mt-2 text-xs text-slate-500">${escapeHtml(courseMeta)}</p>`
                  : ""
              }
            </div>
            <div class="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              ${selectedStudents.length === 1 ? "Per Course Rule" : `${selectedStudents.length} Students`}
            </div>
          </div>
          ${
            mixedFields.length
              ? `<p class="mt-3 text-xs leading-5 text-amber-700">Mixed current values detected for ${escapeHtml(
                  mixedFields.join(", ")
                )}. Blank fields will keep each student's current course rule.</p>`
              : unlimitedEnabled
              ? '<p class="mt-3 text-xs leading-5 text-emerald-700">Unlimited access is on. Access End Date, Video Access Until, and payment-related fields are now reference only and will not lock this course until you turn the switch off.</p>'
              : `<p class="mt-3 text-xs leading-5 text-slate-500">This course keeps its own access window, payment dates, fee, and status.</p>`
          }
          <div class="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            ${COURSE_RULE_FIELDS.map((field) => renderCourseRuleField(courseId, field, draft)).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  syncCourseRuleToggleInputs();
}

function syncCourseRuleToggleInputs() {
  dom.bulkCourseRuleCards.querySelectorAll('[data-course-rule-toggle="true"]').forEach((input) => {
    input.indeterminate = input.dataset.courseRuleIndeterminate === "true";
  });
}

function toggleAuthView(isLoggedIn) {
  dom.adminLoginSection.classList.toggle("hidden", isLoggedIn);
  dom.adminDashboard.classList.toggle("hidden", !isLoggedIn);
  dom.adminLogoutBtn.classList.toggle("hidden", !isLoggedIn);
}

function clearAdminSession() {
  closeStudentPreview();
  state.token = "";
  state.admin = null;
  state.data = createEmptyDashboard();
  state.analyticsYear = "";
  state.courseFilter = "all";
  state.studentQuery = "";
  state.editingStudentId = "";
  state.previewStudentId = "";
  state.editingCourseId = "";
  state.lastBackgroundRefreshAt = 0;
  state.selectedStudentIds = new Set();
  state.visibleStudentIds = [];
  resetBulkCourseRuleDrafts();
  if (dom.studentSearchInput) {
    dom.studentSearchInput.value = "";
  }
  if (dom.adminAnalyticsCourse) {
    dom.adminAnalyticsCourse.value = "all";
  }
  if (dom.studentCourseFilter) {
    dom.studentCourseFilter.value = "all";
  }
  removeStoredValue(STORAGE_KEYS.adminToken);
  removeStoredValue(STORAGE_KEYS.adminDashboardCache);
  removeStoredValue(STORAGE_KEYS.adminScrollY);
  renderSelectionState();
  toggleAuthView(false);
}

function getCachedDashboardPayload() {
  const cached = readStoredJson(STORAGE_KEYS.adminDashboardCache);
  if (!cached || !Array.isArray(cached.students)) {
    return null;
  }

  return cached;
}

async function requestAction(action, payload = {}, options = {}) {
  const response = await fetch(APP_CONFIG.remoteEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(
      Object.entries({
        action,
        token: state.token,
        ...payload,
      }).reduce((result, [key, value]) => {
        if (value !== undefined && value !== null) {
          result[key] = String(value);
        }

        return result;
      }, {})
    ),
  });

  if (!response.ok) {
    throw new Error("Unable to complete the request.");
  }

  const data = await response.json();
  if (!data.ok && normalizeLookupText(data.message).includes("admin authentication is required")) {
    if (!options.preserveSessionOnUnauthorized) {
      clearAdminSession();
      setFeedback(dom.adminLoginFeedback, "Admin session expired. Log in again.", "error");
    }
  }

  return data;
}

async function requestPublicData() {
  const response = await fetch(APP_CONFIG.remoteEndpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load live data.");
  }

  return response.json();
}

function applyDashboardPayload(payload, feedbackMessage = "", tone = "success") {
  state.data = normalizeDashboard(payload);
  resetBulkCourseRuleDrafts();
  if (payload.admin) {
    state.admin = normalizeAdminSession(payload.admin);
  }
  if (payload?.ok) {
    writeStoredJson(STORAGE_KEYS.adminDashboardCache, payload);
  }

  const validStudentIds = new Set(state.data.students.map((student) => student.id));
  state.selectedStudentIds = new Set(getSelectedStudentIds().filter((studentId) => validStudentIds.has(studentId)));

  if (state.editingStudentId && !validStudentIds.has(state.editingStudentId)) {
    state.editingStudentId = "";
  }
  if (state.previewStudentId && !validStudentIds.has(state.previewStudentId)) {
    state.previewStudentId = "";
  }

  const validCourseIds = new Set(state.data.courses.map((course) => course.id));
  if (state.editingCourseId && !validCourseIds.has(state.editingCourseId)) {
    state.editingCourseId = "";
  }

  renderDashboard();

  const pendingPaymentCount = state.data.payments.filter((payment) => isPendingPaymentStatus(payment.status)).length;

  if (feedbackMessage) {
    setFeedback(dom.adminTopFeedback, feedbackMessage, tone);
  } else if (pendingPaymentCount) {
    setFeedback(
      dom.adminTopFeedback,
      `${pendingPaymentCount} payment review${pendingPaymentCount === 1 ? "" : "s"} ${pendingPaymentCount === 1 ? "is" : "are"} waiting in the queue.`,
      "info"
    );
  } else if (state.data.spreadsheetName) {
    setFeedback(
      dom.adminTopFeedback,
      `${state.data.spreadsheetName} synced at ${formatDateTime(state.data.generatedAt, "just now")}.`,
      "info"
    );
  }
}

async function loadDashboard(feedbackMessage = "", options = {}) {
  const payload = await requestAction("admingetdashboard", {}, options);
  if (!payload.ok) {
    throw new Error(payload.message || "Unable to load admin dashboard.");
  }

  applyDashboardPayload(payload, feedbackMessage, "success");
  toggleAuthView(true);
}

async function refreshDashboardInBackground() {
  if (!state.token || typeof document === "undefined" || document.hidden || shouldPauseAdminBackgroundRefresh()) {
    return;
  }

  const now = Date.now();
  if (state.lastBackgroundRefreshAt && now - state.lastBackgroundRefreshAt < 45000) {
    return;
  }
  state.lastBackgroundRefreshAt = now;

  try {
    await loadDashboard("", {
      preserveSessionOnUnauthorized: true,
    });
  } catch (error) {
    state.lastBackgroundRefreshAt = 0;
    console.warn("Unable to refresh the admin dashboard in the background.", error);
  }
}

function renderSummaryCards() {
  const pendingPayments = state.data.payments.filter((payment) => isPendingPaymentStatus(payment.status)).length;
  const activeCourses = state.data.courses.filter((course) => isCourseActive(course)).length;

  dom.summaryStudents.textContent = String(state.data.students.length);
  dom.summaryPending.textContent = String(pendingPayments);
  dom.summaryCourses.textContent = String(activeCourses);
  dom.summaryMessages.textContent = String(state.data.messages.length);

  const adminName = state.admin?.name || state.admin?.username || "Admin";
  dom.adminWelcome.textContent = `${adminName} Dashboard`;
}

function buildAdmissionsAnalytics() {
  const selectedCourseId = normalizeCourseFilterValue(state.courseFilter);
  const selectedCourse = selectedCourseId === "all" ? null : state.data.courseMap.get(selectedCourseId) || null;
  const studentsInScope = getStudentsInCourseScope(selectedCourseId);
  const datedStudents = studentsInScope
    .map((student) => {
      const joinedDate = parseDashboardDate(student.joinedOn);
      if (!(joinedDate instanceof Date) || Number.isNaN(joinedDate.getTime())) {
        return null;
      }

      return {
        student,
        joinedDate,
      };
    })
    .filter(Boolean);

  const yearTotals = new Map();
  datedStudents.forEach((entry) => {
    const year = entry.joinedDate.getFullYear();
    yearTotals.set(year, (yearTotals.get(year) || 0) + 1);
  });

  const years = [...yearTotals.keys()].sort((left, right) => right - left);
  let selectedYear = String(state.analyticsYear || "").trim();

  if (!selectedYear || (selectedYear !== "all" && !years.includes(Number(selectedYear)))) {
    selectedYear = years.length ? String(years[0]) : "all";
  }

  state.analyticsYear = selectedYear;

  const filteredStudents =
    selectedYear === "all"
      ? datedStudents
      : datedStudents.filter((entry) => entry.joinedDate.getFullYear() === Number(selectedYear));

  const monthlyCounts = Array.from({ length: 12 }, () => 0);
  filteredStudents.forEach((entry) => {
    monthlyCounts[entry.joinedDate.getMonth()] += 1;
  });

  const totalStudents = filteredStudents.length;
  const maxMonthlyCount = monthlyCounts.length ? Math.max(...monthlyCounts) : 0;
  const peakMonthIndex = maxMonthlyCount ? monthlyCounts.indexOf(maxMonthlyCount) : -1;
  const averagePerMonth = totalStudents ? (totalStudents / 12).toFixed(totalStudents >= 12 ? 1 : 2) : "0";
  const latestJoinedEntry = filteredStudents
    .slice()
    .sort((left, right) => right.joinedDate.getTime() - left.joinedDate.getTime())[0] || null;
  const previousYear =
    selectedYear === "all" ? null : years.find((year) => year < Number(selectedYear)) || null;
  const previousYearTotal = previousYear ? yearTotals.get(previousYear) || 0 : 0;
  const selectedYearTotal =
    selectedYear === "all" ? datedStudents.length : yearTotals.get(Number(selectedYear)) || 0;
  const growthDelta =
    previousYear && selectedYear !== "all" ? selectedYearTotal - previousYearTotal : null;
  return {
    years,
    selectedYear,
    selectedCourseId,
    selectedCourse,
    scopedStudentCount: studentsInScope.length,
    monthlyCounts,
    totalStudents,
    maxMonthlyCount,
    peakMonthIndex,
    averagePerMonth,
    latestJoinedEntry,
    yearTotals,
    growthDelta,
    previousYear,
    recordsWithoutDate: Math.max(studentsInScope.length - datedStudents.length, 0),
  };
}

function renderAdmissionsAnalytics() {
  if (
    !dom.adminAnalyticsCaption ||
    !dom.adminAnalyticsYear ||
    !dom.adminAnalyticsMeta ||
    !dom.adminAnalyticsChart ||
    !dom.adminAnalyticsHighlights ||
    !dom.adminAnalyticsYears
  ) {
    return;
  }

  const analytics = buildAdmissionsAnalytics();
  const optionMarkup = [
    `<option value="all"${analytics.selectedYear === "all" ? " selected" : ""}>All Years</option>`,
    ...analytics.years.map(
      (year) => `<option value="${year}"${String(year) === analytics.selectedYear ? " selected" : ""}>${year}</option>`
    ),
  ].join("");

  dom.adminAnalyticsYear.innerHTML = optionMarkup;
  dom.adminAnalyticsYear.disabled = !analytics.years.length;
  dom.adminAnalyticsYear.value = analytics.selectedYear;

  if (!analytics.totalStudents) {
    dom.adminAnalyticsCaption.textContent = analytics.recordsWithoutDate
      ? `${analytics.recordsWithoutDate} student${
          analytics.recordsWithoutDate === 1 ? "" : "s"
        } in ${analytics.selectedCourse?.title || "the current view"} still have no valid join date.`
      : analytics.selectedCourse
        ? `No student is currently assigned to ${analytics.selectedCourse.title}.`
        : "Admissions data will appear here as soon as student records start coming into the live sheet.";

    dom.adminAnalyticsMeta.innerHTML = `
      <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">${
          analytics.selectedCourse ? "Students in course" : "Total students"
        }</p>
        <p class="mt-2 text-2xl font-extrabold text-slate-950">${analytics.scopedStudentCount}</p>
      </div>
      <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Peak month</p>
        <p class="mt-2 text-2xl font-extrabold text-slate-950">-</p>
      </div>
      <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Monthly average</p>
        <p class="mt-2 text-2xl font-extrabold text-slate-950">0</p>
      </div>
    `;

    dom.adminAnalyticsChart.innerHTML = `
      <div class="col-span-full rounded-[1.2rem] border border-dashed border-slate-300 bg-slate-50 px-4 py-7 text-center text-sm leading-6 text-slate-500">
        ${
          analytics.selectedCourse
            ? `No chart-ready admission data is available for ${escapeHtml(analytics.selectedCourse.title)} yet.`
            : "No monthly admission pattern is available yet."
        }
      </div>
    `;

    dom.adminAnalyticsHighlights.innerHTML = `
      <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Missing join dates</p>
        <p class="mt-2 text-2xl font-extrabold text-slate-950">${analytics.recordsWithoutDate}</p>
      </div>
      <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3 text-sm leading-6 text-slate-600">
        ${
          analytics.selectedCourse
            ? `Use the course filter to compare ${escapeHtml(analytics.selectedCourse.title)} with the rest of your catalog.`
            : "Use the course filter to compare one course against your full catalog."
        }
      </div>
    `;

    dom.adminAnalyticsYears.innerHTML = "";
    return;
  }

  const selectedYearLabel =
    analytics.selectedYear === "all" ? "all recorded cohorts" : analytics.selectedYear;
  const selectedCourseLabel = analytics.selectedCourse?.title || "all courses";
  const peakMonthLabel =
    analytics.peakMonthIndex >= 0 ? MONTH_LABELS[analytics.peakMonthIndex] : "No peak month";
  const growthLabel =
    analytics.growthDelta === null
      ? "No year-on-year comparison"
      : analytics.growthDelta === 0
      ? `Same as ${analytics.previousYear}`
      : `${analytics.growthDelta > 0 ? "+" : ""}${analytics.growthDelta} vs ${analytics.previousYear}`;

  dom.adminAnalyticsCaption.textContent = `Review ${selectedCourseLabel} across ${selectedYearLabel} with a clear month-by-month admission breakdown.`;

  dom.adminAnalyticsMeta.innerHTML = `
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">${
        analytics.selectedCourse ? "Students in course" : "Total students"
      }</p>
      <p class="mt-2 text-2xl font-extrabold text-slate-950">${analytics.scopedStudentCount}</p>
      <p class="mt-1.5 text-[11px] text-slate-500">${
        analytics.selectedYear === "all"
          ? `${analytics.totalStudents} tracked with join dates`
          : `${analytics.totalStudents} joined in ${analytics.selectedYear}`
      }</p>
    </div>
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Peak month</p>
      <p class="mt-2 text-2xl font-extrabold text-slate-950">${escapeHtml(peakMonthLabel)}</p>
      <p class="mt-1.5 text-[11px] text-slate-500">${analytics.maxMonthlyCount} student${analytics.maxMonthlyCount === 1 ? "" : "s"}</p>
    </div>
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Monthly average</p>
      <p class="mt-2 text-2xl font-extrabold text-slate-950">${escapeHtml(analytics.averagePerMonth)}</p>
      <p class="mt-1.5 text-[11px] text-slate-500">${analytics.recordsWithoutDate ? `${analytics.recordsWithoutDate} without join date` : "All dated records included"}</p>
    </div>
  `;

  dom.adminAnalyticsChart.innerHTML = analytics.monthlyCounts
    .map((count, index) => {
      const height = analytics.maxMonthlyCount
        ? Math.max(Math.round((count / analytics.maxMonthlyCount) * 84), count ? 18 : 8)
        : 8;
      const isPeak = analytics.peakMonthIndex === index && count > 0;
      const barGradient = isPeak
        ? "linear-gradient(180deg, rgba(251,191,36,0.98) 0%, rgba(217,119,6,0.92) 100%)"
        : "linear-gradient(180deg, rgba(96,165,250,0.96) 0%, rgba(37,99,235,0.72) 100%)";

      return `
        <div class="rounded-[1.1rem] border border-slate-200 bg-slate-50 px-2 py-2.5 text-center">
          <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">${MONTH_LABELS[index].slice(0, 3)}</p>
          <div class="mt-2.5 flex h-[84px] items-end justify-center rounded-[0.9rem] bg-white px-2 py-2">
            <div
              class="w-full rounded-[0.8rem] shadow-[0_18px_32px_-18px_rgba(30,64,175,0.35)]"
              style="height:${height}px;background:${barGradient};opacity:${count ? "1" : "0.28"}"
              title="${MONTH_LABELS[index]}: ${count} student${count === 1 ? "" : "s"}"
            ></div>
          </div>
          <p class="mt-2.5 text-base font-extrabold text-slate-950">${count}</p>
        </div>
      `;
    })
    .join("");

  dom.adminAnalyticsHighlights.innerHTML = `
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Latest admission</p>
      <p class="mt-2 text-lg font-extrabold text-slate-950">${escapeHtml(
        analytics.latestJoinedEntry?.student?.name || "Not recorded"
      )}</p>
      <p class="mt-1.5 text-sm text-slate-500">${escapeHtml(
        formatMonthYearLabel(analytics.latestJoinedEntry?.joinedDate)
      )}</p>
    </div>
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Missing join dates</p>
      <p class="mt-2 text-2xl font-extrabold text-slate-950">${analytics.recordsWithoutDate}</p>
      <p class="mt-1.5 text-sm text-slate-500">Student records in the current scope that still need a valid join date.</p>
    </div>
    <div class="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Current scope</p>
      <p class="mt-2 text-lg font-extrabold text-slate-950">${escapeHtml(
        analytics.selectedCourse?.shortTitle || analytics.selectedCourse?.title || "All courses"
      )}</p>
      <p class="mt-1.5 text-sm text-slate-500">${escapeHtml(
        `${analytics.selectedYear === "all" ? "All years" : analytics.selectedYear} | ${growthLabel}`
      )}</p>
    </div>
  `;

  dom.adminAnalyticsYears.innerHTML = [
    `
        <button
          type="button"
          data-analytics-year="all"
          class="rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
            analytics.selectedYear === "all"
              ? "border-blue-200 bg-blue-50 text-blue-950"
              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }"
        >
          All cohorts
        </button>
    `,
    ...analytics.years.map((year) => {
      const total = analytics.yearTotals.get(year) || 0;
      const isActive = String(year) === analytics.selectedYear;

      return `
        <button
          type="button"
          data-analytics-year="${year}"
          class="rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
            isActive
              ? "border-blue-200 bg-blue-50 text-blue-950"
              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }"
        >
          ${year} <span class="ml-1 text-xs ${isActive ? "text-blue-500" : "text-slate-400"}">${total}</span>
        </button>
      `;
    }),
  ].join("");

  dom.adminAnalyticsYears.querySelectorAll("[data-analytics-year]").forEach((button) => {
    button.addEventListener("click", () => {
      state.analyticsYear = String(button.dataset.analyticsYear || "").trim();
      renderAdmissionsAnalytics();
    });
  });
}

function renderCourseCheckboxes(container, selectedCourseIds, checkboxName) {
  if (!state.data.courses.length) {
    container.innerHTML =
      '<p class="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-4 text-sm text-slate-500">No courses are available yet.</p>';
    return;
  }

  const selected = new Set(selectedCourseIds);

  container.innerHTML = state.data.courses
    .map(
      (course) => `
        <label class="flex items-start gap-3 rounded-2xl border border-white bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-slate-200">
          <input
            type="checkbox"
            value="${escapeHtml(course.id)}"
            data-course-checkbox="${escapeHtml(checkboxName)}"
            class="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
            ${selected.has(course.id) ? "checked" : ""}
          />
          <span class="min-w-0">
            <span class="block truncate font-bold text-slate-900">${escapeHtml(course.title)}</span>
            <span class="mt-1 block text-xs text-slate-500">${escapeHtml(course.category || "Course")}</span>
          </span>
        </label>
      `
    )
    .join("");
}

function readCheckedCourseIds(container, checkboxName) {
  return [...container.querySelectorAll(`[data-course-checkbox="${checkboxName}"]:checked`)]
    .map((input) => String(input.value || "").trim())
    .filter(Boolean);
}

function renderStudentEditor() {
  const student = state.editingStudentId ? getStudentById(state.editingStudentId) : null;
  const courseIds = getStudentCourseIds(student);

  dom.studentEditorLabel.textContent = student ? student.id : "New Student";
  dom.editorStudentId.value = student?.id || "";
  dom.editorStudentName.value = student?.name || "";
  dom.editorStudentPhone.value = student?.phone || "";
  dom.editorStudentEmail.value = student?.email || "";
  dom.editorStudentBatch.value = student?.batch || "";
  dom.editorStudentSession.value = student?.session || "";
  dom.editorStudentPassword.value = student?.password || "";
  dom.editorStudentMaxDevices.value = student?.maxDeviceCount ? String(student.maxDeviceCount) : "";
  dom.editorStudentStatus.value = student?.status || "Active";
  dom.editorStudentApproval.value = isStudentPreviewOnly(student) ? "Approved" : student?.loginApproval || "Approved";
  dom.editorStudentAccessMode.value = isStudentPreviewOnly(student) ? "Preview" : student?.portalAccessMode || "";
  dom.editorStudentHighlight.value = student?.highlight || "";

  renderCourseCheckboxes(dom.studentCourseSelector, courseIds, "editor");
}

function renderBulkCourseSelector() {
  const selectedStudents = getSelectedStudents();
  if (!selectedStudents.length) {
    dom.bulkCourseSelector.innerHTML =
      '<p class="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-4 text-sm text-slate-500">Select one or more students to manage their course access.</p>';
    renderBulkCourseRuleCards();
    return;
  }

  const selectedCourseIds = state.data.courses
    .filter((course) =>
      selectedStudents.every((student) => {
        return getStudentCourseIds(student).includes(course.id);
      })
    )
    .map((course) => course.id);

  renderCourseCheckboxes(dom.bulkCourseSelector, selectedCourseIds, "bulk");
  renderBulkCourseRuleCards();
}

function renderStudentMobileList(students) {
  if (!students.length) {
    dom.studentMobileList.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">No students matched this filter.</div>';
    return;
  }

  dom.studentMobileList.innerHTML = students
    .map((student) => {
      const isSelected = state.selectedStudentIds.has(student.id);
      const courseIds = getStudentCourseIds(student);
      const deviceUsage = buildStudentDeviceUsageLabel(student);
      const courseSummary = courseIds.length
        ? courseIds
            .slice(0, 2)
            .map((courseId) => state.data.courseMap.get(courseId)?.shortTitle || state.data.courseMap.get(courseId)?.title || courseId)
            .join(", ")
        : "No course assigned";

      return `
        <article class="rounded-[1.5rem] border ${
          isSelected ? "border-blue-200 bg-blue-50/70" : "border-slate-200 bg-white"
        } p-4 shadow-sm">
          <div class="flex items-start justify-between gap-3">
            <label class="inline-flex items-center gap-3 text-sm font-semibold text-slate-700">
              <input
                type="checkbox"
                value="${escapeHtml(student.id)}"
                data-student-select="true"
                class="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
                ${isSelected ? "checked" : ""}
              />
              <span>Select</span>
            </label>
            <div class="flex flex-wrap justify-end gap-2">
              ${renderPill(student.loginApproval || "Pending", "approval")}
              ${renderStudentAccessBadge(student)}
              ${renderPill(student.status || "Active")}
            </div>
          </div>
          <div class="mt-4">
            <h5 class="text-lg font-extrabold text-slate-950">${escapeHtml(student.name || "Unnamed Student")}</h5>
            <p class="mt-1 text-sm text-slate-500">${escapeHtml(student.id)}</p>
            <p class="mt-2 text-sm text-slate-600">${escapeHtml(student.email || "Email not set")}</p>
          </div>
          <div class="mt-4 grid gap-3 rounded-[1.25rem] bg-slate-50 p-4 sm:grid-cols-2">
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Phone</p>
              <p class="mt-2 text-sm font-semibold text-slate-700">${escapeHtml(student.phone || "-")}</p>
            </div>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Batch</p>
              <p class="mt-2 text-sm font-semibold text-slate-700">${escapeHtml(student.batch || "-")}</p>
              <p class="mt-1 text-xs text-slate-500">${escapeHtml(student.session || "-")}</p>
            </div>
            <div class="sm:col-span-2">
              <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Courses</p>
              <p class="mt-2 text-sm font-semibold text-slate-700">${courseIds.length}</p>
              <p class="mt-1 text-xs text-slate-500">${escapeHtml(courseSummary)}</p>
            </div>
            <div class="sm:col-span-2">
              <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Device Policy</p>
              <p class="mt-2 text-sm font-semibold text-slate-700">${escapeHtml(deviceUsage)}</p>
              <p class="mt-1 text-xs text-slate-500">Default is 2 devices unless you customize this student.</p>
            </div>
          </div>
          <div class="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              data-view-student="${escapeHtml(student.id)}"
              class="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
              View
            </button>
            <button
              type="button"
              data-edit-student="${escapeHtml(student.id)}"
              class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Open Editor
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderStudentTable() {
  const students = getFilteredStudents();
  state.visibleStudentIds = students.map((student) => student.id);

  if (!students.length) {
    dom.studentTableBody.innerHTML =
      '<tr><td colspan="8" class="px-3 py-8 text-center text-sm text-slate-500">No students matched this filter.</td></tr>';
    renderStudentMobileList([]);
    dom.selectAllStudents.checked = false;
    renderSelectionState();
    renderDeviceRegistry();
    return;
  }

  renderStudentMobileList(students);

  dom.studentTableBody.innerHTML = students
    .map((student) => {
      const isSelected = state.selectedStudentIds.has(student.id);
      const courseIds = getStudentCourseIds(student);
      const deviceUsage = buildStudentDeviceUsageLabel(student);
      const courseSummary = courseIds.length
        ? courseIds
            .slice(0, 2)
            .map((courseId) => state.data.courseMap.get(courseId)?.shortTitle || state.data.courseMap.get(courseId)?.title || courseId)
            .join(", ")
        : "No course";

      return `
        <tr class="${isSelected ? "bg-blue-50/70" : "bg-white"}">
          <td class="px-3 py-4 align-top">
            <input
              type="checkbox"
              value="${escapeHtml(student.id)}"
              data-student-select="true"
              class="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              ${isSelected ? "checked" : ""}
            />
          </td>
          <td class="px-3 py-4 align-top">
            <div class="min-w-[220px]">
              <p class="font-bold text-slate-900">${escapeHtml(student.name || "Unnamed Student")}</p>
              <p class="mt-1 text-xs text-slate-500">${escapeHtml(student.id)}</p>
              <p class="mt-2 text-xs text-slate-500">${escapeHtml(student.email || "Email not set")}</p>
            </div>
          </td>
          <td class="px-3 py-4 align-top text-slate-600">${escapeHtml(student.phone || "-")}</td>
          <td class="px-3 py-4 align-top text-slate-600">
            <p>${escapeHtml(student.batch || "-")}</p>
            <p class="mt-1 text-xs text-slate-400">${escapeHtml(student.session || "-")}</p>
          </td>
          <td class="px-3 py-4 align-top">
            <div class="flex min-w-[150px] flex-wrap gap-2">
              ${renderPill(student.loginApproval || "Pending", "approval")}
              ${renderStudentAccessBadge(student)}
            </div>
            <p class="mt-2 text-xs text-slate-500">${escapeHtml(deviceUsage)}</p>
          </td>
          <td class="px-3 py-4 align-top">${renderPill(student.status || "Active")}</td>
          <td class="px-3 py-4 align-top">
            <p class="font-semibold text-slate-800">${courseIds.length}</p>
            <p class="mt-1 text-xs text-slate-500">${escapeHtml(courseSummary)}</p>
          </td>
          <td class="px-3 py-4 align-top">
            <div class="flex flex-wrap gap-2">
              <button
                type="button"
                data-view-student="${escapeHtml(student.id)}"
                class="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                View
              </button>
              <button
                type="button"
                data-edit-student="${escapeHtml(student.id)}"
                class="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Edit
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  dom.selectAllStudents.checked =
    state.visibleStudentIds.length > 0 &&
    state.visibleStudentIds.every((studentId) => state.selectedStudentIds.has(studentId));
  renderSelectionState();
  renderDeviceRegistry();
}

function renderCourseList() {
  const activeCourseCount = state.data.courses.filter((course) => isCourseActive(course)).length;
  dom.courseCountBadge.textContent = state.data.courses.length
    ? activeCourseCount === state.data.courses.length
      ? `${activeCourseCount} active`
      : `${activeCourseCount} active / ${state.data.courses.length} total`
    : "0";

  if (!state.data.courses.length) {
    dom.courseListPanel.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-white px-5 py-6 text-sm text-slate-500">No course has been created yet.</div>';
    return;
  }

  dom.courseListPanel.innerHTML = state.data.courses
    .map((course) => {
      const courseStatus = normalizeCourseStatus(course.status);
      const inactiveCourse = courseStatus !== "Active";
      const assignedCount = state.data.students.filter((student) => getStudentCourseIds(student).includes(course.id)).length;
      const batchSessionLabel = [
        course.batch ? `Batch: ${course.batch}` : "",
        course.session ? `Session: ${course.session}` : "",
      ]
        .filter(Boolean)
        .join(" | ");
      const priceLabel = formatCoursePrice(course.price, "");
      const cardClass = inactiveCourse
        ? "border border-slate-200 bg-slate-50/80"
        : "border border-white bg-white";
      const toggleButtonClass = inactiveCourse
        ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
        : "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 transition hover:bg-amber-100";

      return `
        <div class="rounded-[1.5rem] ${cardClass} p-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <p class="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">${escapeHtml(course.category || "Course")}</p>
                ${renderPill(courseStatus)}
              </div>
              <h5 class="mt-2 break-words text-lg font-extrabold text-slate-950">${escapeHtml(course.title)}</h5>
              <p class="mt-1 break-words text-sm text-slate-500">${escapeHtml(course.faculty || "Faculty not set")}</p>
              ${
                batchSessionLabel
                  ? `<p class="mt-3 text-sm text-slate-600">${escapeHtml(batchSessionLabel)}</p>`
                  : ""
              }
              <p class="mt-3 text-sm text-slate-600">${escapeHtml(course.schedule || "Schedule pending")}</p>
              ${
                inactiveCourse
                  ? '<p class="mt-2 text-sm font-medium text-slate-600">This course is hidden from students, videos, and registration until you activate it again.</p>'
                  : ""
              }
              ${
                priceLabel
                  ? `<p class="mt-2 text-sm font-semibold text-amber-700">Course Fee: ${escapeHtml(priceLabel)}</p>`
                  : ""
              }
              <p class="mt-2 text-xs text-slate-400">ID: ${escapeHtml(course.id)} | Students: ${assignedCount}</p>
            </div>
            <div class="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                data-course-toggle="${escapeHtml(course.id)}"
                class="${toggleButtonClass}"
              >
                ${inactiveCourse ? "Activate" : "Deactivate"}
              </button>
              <button
                type="button"
                data-course-edit="${escapeHtml(course.id)}"
                class="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Edit
              </button>
              <button
                type="button"
                data-course-delete="${escapeHtml(course.id)}"
                class="rounded-2xl bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 transition hover:bg-rose-100"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderPaymentQueue() {
  const pendingPayments = state.data.payments.filter((payment) => isPendingPaymentStatus(payment.status));

  if (!pendingPayments.length) {
    dom.paymentQueue.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-500">No submitted payment is waiting for review.</div>';
    return;
  }

  dom.paymentQueue.innerHTML = pendingPayments
    .map((payment) => {
      const course = state.data.courseMap.get(payment.courseId) || null;
      const courseTitle = course?.title || payment.courseTitle || payment.courseId;
      const submittedDateValue = String(payment.submittedOn || "").trim();
      const paymentDateValue = submittedDateValue ? submittedDateValue.slice(0, 10) : getTodayInputValue();
      return `
        <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
          <div class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <p class="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Pending Payment</p>
                ${renderPill(payment.status || "Pending")}
              </div>
              <h4 class="mt-2 break-words text-lg font-extrabold text-slate-950">${escapeHtml(
                payment.studentName || payment.studentId || "Student"
              )}</h4>
              <p class="mt-1 text-sm text-slate-600">${escapeHtml(payment.studentPhone || "-")} | ${escapeHtml(
                payment.studentId || "-"
              )}</p>
              <p class="mt-3 text-sm text-slate-600">Course: <span class="font-semibold text-slate-900">${escapeHtml(
                courseTitle
              )}</span></p>
              <p class="mt-2 text-sm text-slate-600">Fee: <span class="font-semibold text-amber-700">${escapeHtml(
                formatCoursePrice(payment.amount, "Not set")
              )}</span> | Method: ${escapeHtml(payment.paymentMethod || "bKash Send Money")}</p>
              <p class="mt-2 text-sm text-slate-600">Send Money number: <span class="font-semibold text-slate-900">${escapeHtml(
                payment.paymentNumber || "01975341714"
              )}</span></p>
              <p class="mt-2 text-sm text-slate-600">Student transaction ID: <span class="font-semibold text-slate-900">${escapeHtml(
                payment.studentTransactionId || "-"
              )}</span></p>
              ${
                payment.note
                  ? `<p class="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">Student note: ${escapeHtml(
                      payment.note
                    )}</p>`
                  : ""
              }
              <p class="mt-3 text-xs text-slate-400">Submitted: ${escapeHtml(
                formatDateTime(payment.submittedOn, "Not recorded")
              )}</p>
            </div>
            <div class="w-full max-w-md rounded-[1.25rem] border border-white bg-white p-4">
              <label class="mb-2 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Confirmed Transaction ID</label>
              <input
                type="text"
                value="${escapeHtml(payment.confirmedTransactionId || "")}"
                data-payment-confirmed="${escapeHtml(payment.id)}"
                class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                placeholder="Enter the transaction ID received in bKash"
              />
              <label class="mt-4 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Payment Date</label>
              <input
                type="date"
                value="${escapeHtml(paymentDateValue)}"
                data-payment-date="${escapeHtml(payment.id)}"
                class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
              />
              <label class="mt-4 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Access Duration</label>
              <div class="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value="1"
                  data-payment-months="${escapeHtml(payment.id)}"
                  class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none sm:max-w-[10rem]"
                  placeholder="Months"
                />
                <label class="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
                  <input
                    type="checkbox"
                    data-payment-unlimited="${escapeHtml(payment.id)}"
                    class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Unlimited Access</span>
                </label>
              </div>
              <p
                class="mt-3 text-xs leading-5 text-slate-500"
                data-payment-access-helper="${escapeHtml(payment.id)}"
              >
                This approval will keep the course active for 1 month from the selected payment date.
              </p>
              <label class="mt-4 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Review Note</label>
              <textarea
                rows="3"
                data-payment-note="${escapeHtml(payment.id)}"
                class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                placeholder="Optional approval or rejection note"
              >${escapeHtml(payment.reviewNote || "")}</textarea>
              <p class="mt-3 text-xs leading-5 text-slate-500">
                Matching submitted and confirmed transaction IDs will be stored as Auto Match. If the IDs differ, the approval is still saved as Manual Review.
              </p>
              <div class="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  data-payment-approve="${escapeHtml(payment.id)}"
                  class="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Approve 1 Month
                </button>
                <button
                  type="button"
                  data-payment-reject="${escapeHtml(payment.id)}"
                  class="rounded-2xl bg-rose-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-rose-700"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  syncAllPaymentReviewCards();
}

function buildDeviceLocationLabel(device) {
  const latitude = String(device.latitude || "").trim();
  const longitude = String(device.longitude || "").trim();
  if (latitude && longitude) {
    return `${latitude}, ${longitude}`;
  }

  return device.locationPermission || "Not Requested";
}

function formatDeviceDisplayModeLabel(value) {
  const normalized = normalizeStatus(value || "browser");
  if (!normalized || normalized === "browser") {
    return "Browser";
  }
  if (normalized === "minimalui" || normalized === "minimal-ui") {
    return "Minimal UI";
  }
  if (normalized === "windowcontrolsoverlay" || normalized === "window-controls-overlay") {
    return "Window Controls Overlay";
  }

  return String(value || "")
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getDeviceShellLabel(device) {
  return String(device?.clientShell || "").trim() || "Browser";
}

function buildDeviceNetworkLabel(device) {
  const publicIp = String(device?.publicIp || "").trim();
  if (publicIp) {
    return publicIp;
  }

  const shellLabel = getDeviceShellLabel(device);
  return shellLabel && shellLabel !== "Browser" ? `IP unavailable in ${shellLabel}` : "Public IP not captured";
}

function buildDeviceShellMeta(device) {
  const meta = [];
  const shellLabel = getDeviceShellLabel(device);
  if (shellLabel && shellLabel !== "Browser") {
    meta.push(shellLabel);
  }

  const displayMode = formatDeviceDisplayModeLabel(device?.displayMode || "browser");
  if (displayMode && displayMode !== "Browser") {
    meta.push(`Mode ${displayMode}`);
  }

  if (device?.timezone) {
    meta.push(device.timezone);
  }

  return meta.join(" | ");
}

function buildDeviceReferrerLabel(device) {
  const referrer = String(device?.referrer || "").trim();
  if (!referrer) {
    return "";
  }

  try {
    const parsed = new URL(referrer);
    return parsed.origin || referrer;
  } catch (error) {
    return referrer;
  }
}

function getOrderedDeviceRegistryEntries() {
  const selectedStudentIds = getSelectedStudentIds().filter((studentId) => !!getStudentById(studentId));
  if (!selectedStudentIds.length) {
    return [];
  }

  const selectedOrder = new Map(selectedStudentIds.map((studentId, index) => [studentId, index]));
  return state.data.devices
    .filter((device) => selectedOrder.has(device.studentId))
    .sort((left, right) => {
      const studentOrder = selectedOrder.get(left.studentId) - selectedOrder.get(right.studentId);
      if (studentOrder !== 0) {
        return studentOrder;
      }

      return (
        new Date(right.lastSeenOn || right.lastLoginOn || 0).getTime() -
        new Date(left.lastSeenOn || left.lastLoginOn || 0).getTime()
      );
    });
}

function renderDeviceRegistry() {
  if (!dom.deviceRegistryPanel) {
    return;
  }

  const selectedStudents = getSelectedStudents();
  if (!selectedStudents.length) {
    dom.deviceRegistryPanel.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-500">Select one or more students from the Student Access Manager to see only their approved devices here.</div>';
    return;
  }

  const orderedDevices = getOrderedDeviceRegistryEntries();
  if (!orderedDevices.length) {
    dom.deviceRegistryPanel.innerHTML = `<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-500">No approved device record was found for ${
      selectedStudents.length === 1 ? escapeHtml(selectedStudents[0].name || selectedStudents[0].id) : "the selected students"
    }.</div>`;
    return;
  }

  const selectedNames = formatSelectedStudentNames(selectedStudents);
  const leadStudent = selectedStudents[0] || null;

  dom.deviceRegistryPanel.innerHTML = [
    selectedStudents.length === 1
      ? `<div class="rounded-[1.25rem] border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">Showing ${orderedDevices.length} device record${
          orderedDevices.length === 1 ? "" : "s"
        } for ${escapeHtml(leadStudent?.name || leadStudent?.id || "this student")} only. Policy: ${escapeHtml(
          buildStudentDeviceUsageLabel(leadStudent)
        )}.</div>`
      : `<div class="rounded-[1.25rem] border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">Showing ${orderedDevices.length} device record${
          orderedDevices.length === 1 ? "" : "s"
        } for ${selectedStudents.length} selected students only: ${escapeHtml(selectedNames)}.</div>`,
    orderedDevices
      .map((device) => {
      const student = getStudentById(device.studentId) || null;
      const studentLabel = student?.name || device.studentId || "Student";
      const studentMeta = [device.studentId, student?.phone || ""].filter(Boolean).join(" | ");
      const canForceLogout = normalizeStatus(device.status) === "active";
      const deviceUsage = student ? buildStudentDeviceUsageLabel(student) : "Unknown device policy";
      const deviceShellMeta = buildDeviceShellMeta(device);
      const deviceReferrerLabel = buildDeviceReferrerLabel(device);

      return `
        <div class="rounded-[1.5rem] border ${
          state.selectedStudentIds.has(device.studentId) ? "border-blue-200 bg-blue-50/70" : "border-slate-100 bg-slate-50"
        } p-4">
          <div class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">${escapeHtml(studentLabel)}</p>
                ${renderPill(device.status || "Active")}
              </div>
              <h4 class="mt-2 text-lg font-extrabold text-slate-950">${escapeHtml(device.deviceName || "Unknown Device")}</h4>
               <p class="mt-1 text-sm text-slate-500">${escapeHtml(studentMeta || "Student details unavailable")}</p>
               <p class="mt-2 text-xs font-semibold text-slate-500">Device policy: ${escapeHtml(deviceUsage)}</p>
               <div class="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                 <div>
                   <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Network / Shell</p>
                   <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(buildDeviceNetworkLabel(device))}</p>
                   <p class="mt-1 text-xs text-slate-500">${escapeHtml(
                     deviceShellMeta || device.browserLanguage || "Shell details unavailable"
                   )}</p>
                 </div>
                 <div>
                   <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Browser / Platform</p>
                   <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(device.platform || "Platform unavailable")}</p>
                   <p class="mt-1 text-xs text-slate-500">${escapeHtml(device.userAgent || device.browserLanguage || "Browser details unavailable")}</p>
                </div>
                <div>
                  <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Location / Screen</p>
                  <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(buildDeviceLocationLabel(device))}</p>
                  <p class="mt-1 text-xs text-slate-500">${escapeHtml(device.screenSize || "Screen size unavailable")}</p>
                </div>
              </div>
               <p class="mt-4 text-xs text-slate-400">
                 First seen: ${escapeHtml(formatDateTime(device.firstSeenOn, "Not recorded"))}
                 | Last login: ${escapeHtml(formatDateTime(device.lastLoginOn, "Not recorded"))}
                 | Last seen: ${escapeHtml(formatDateTime(device.lastSeenOn, "Not recorded"))}
               </p>
               ${
                 deviceReferrerLabel
                   ? `<p class="mt-2 text-xs text-slate-500">Launch source: ${escapeHtml(deviceReferrerLabel)}</p>`
                   : ""
               }
               ${
                 device.note
                   ? `<p class="mt-2 text-xs text-slate-500">${escapeHtml(device.note)}</p>`
                   : ""
               }
            </div>
            <div class="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                data-device-logout="${escapeHtml(device.id)}"
                class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 transition hover:border-amber-300 hover:bg-amber-100 ${canForceLogout ? "" : "opacity-50 cursor-not-allowed"}"
                ${canForceLogout ? "" : "disabled"}
              >
                Force Logout
              </button>
              <button
                type="button"
                data-device-delete="${escapeHtml(device.id)}"
                class="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join(""),
  ].join("");
}

function renderStudentPreviewModePill(label, tone = "default") {
  const palette = {
    full: "bg-blue-100 text-blue-800",
    preview: "bg-indigo-100 text-indigo-800",
    pending: "bg-amber-100 text-amber-800",
    security: "bg-rose-100 text-rose-800",
    restricted: "bg-slate-200 text-slate-700",
    default: "bg-white/15 text-white",
  };

  return `<span class="inline-flex rounded-full px-3 py-1 text-xs font-bold ${palette[tone] || palette.default}">${escapeHtml(
    label
  )}</span>`;
}

function renderStudentPreviewStateBadge(label, tone = "slate") {
  const palette = {
    blue: "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    indigo: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100",
    rose: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
    slate: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
  };

  return `<span class="inline-flex rounded-full px-3 py-1 text-xs font-bold ${palette[tone] || palette.slate}">${escapeHtml(
    label
  )}</span>`;
}

function buildStudentPreviewCourseAlert(entry) {
  if (!entry?.portalVisible) {
    return "This course is still assigned to the student, but it is inactive or hidden. The student will not see it in the live portal until the course becomes active again.";
  }

  if (entry?.securityLocked) {
    return "Security lock is active. Orientation can stay open, but every paid lesson remains blocked until the lock is removed.";
  }

  if (entry?.previewOnly) {
    return "Preview mode is active for this student. They can review the class list, but every video stays locked.";
  }

  if (entry?.pendingPayment) {
    return "A payment for this course is in review. The student still sees the course, but full access stays locked until confirmation.";
  }

  if (entry?.paymentRejected) {
    return "The latest submitted payment for this course was rejected. Access remains locked until a valid payment is approved.";
  }

  if (isEnrollmentBlocked(entry)) {
    return "This enrollment is blocked by admin. The student cannot watch lessons from this course right now.";
  }

  if (hasUnlimitedCourseAccess(entry)) {
    return "Unlimited access is enabled for this course. Date-based access locks are currently disabled.";
  }

  return entry?.course?.description || "This course is currently attached to the student's account.";
}

function getStudentPreviewAccessSummary(student) {
  if (isStudentSecurityLocked(student)) {
    return {
      label: "Security Lock",
      tone: "security",
      note:
        String(student?.highlight || "").trim() ||
        "This student can review course titles, but full access is blocked until the lock is removed.",
    };
  }

  if (isStudentPreviewOnly(student)) {
    return {
      label: "Preview Access",
      tone: "preview",
      note:
        "This student can open the portal and review the course map, but full lesson playback remains restricted.",
    };
  }

  const normalizedStatus = normalizeStatus(student?.status || "active");
  if (normalizedStatus === "pending") {
    return {
      label: "Pending Approval",
      tone: "pending",
      note: "This student would see a waiting-for-approval message instead of full access right now.",
    };
  }

  if (["inactive", "blocked", "suspended", "rejected", "expired"].includes(normalizedStatus)) {
    return {
      label: "Restricted",
      tone: "restricted",
      note: String(student?.highlight || "").trim() || "This account is not ready for full access right now.",
    };
  }

  return {
    label: "Full Access",
    tone: "full",
    note:
      String(student?.highlight || "").trim() ||
      "This student can open the live dashboard with current course, notice, and payment data.",
  };
}

function setStudentPreviewModalOpen(isOpen) {
  if (!dom.studentPreviewModal) {
    return;
  }

  const wasOpen = !dom.studentPreviewModal.classList.contains("hidden");
  dom.studentPreviewModal.classList.toggle("hidden", !isOpen);
  dom.studentPreviewModal.classList.toggle("flex", isOpen);

  if (isOpen && !wasOpen) {
    studentPreviewScrollLockY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${studentPreviewScrollLockY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    if (dom.studentPreviewBody) {
      dom.studentPreviewBody.scrollTop = 0;
    }
    return;
  }

  if (!isOpen && wasOpen) {
    const restoreScrollY = studentPreviewScrollLockY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    studentPreviewScrollLockY = 0;
    window.scrollTo(0, restoreScrollY);
  }
}

function closeStudentPreview() {
  state.previewStudentId = "";
  if (dom.studentPreviewOpenEditorBtn) {
    dom.studentPreviewOpenEditorBtn.dataset.studentId = "";
  }
  if (dom.studentPreviewBody) {
    dom.studentPreviewBody.innerHTML = "";
  }
  setStudentPreviewModalOpen(false);
}

function openStudentPreview(studentId) {
  const student = getStudentById(studentId);
  if (!student) {
    return;
  }

  state.previewStudentId = student.id;
  renderStudentPreviewModal();
}

function renderStudentPreviewModal() {
  if (!dom.studentPreviewModal || !dom.studentPreviewBody) {
    return;
  }

  if (!state.previewStudentId) {
    closeStudentPreview();
    return;
  }

  const student = getStudentById(state.previewStudentId);
  if (!student) {
    closeStudentPreview();
    return;
  }

  const courseEntries = getStudentPreviewCourseEntries(student);
  const messages = getStudentPreviewMessages(student.id);
  const payments = getStudentPreviewPayments(student.id);
  const devices = getDevicesForStudent(student.id);
  const notices = getStudentPreviewNotices();
  const accessSummary = getStudentPreviewAccessSummary(student);
  const lessonStats = getStudentPreviewLessonStats(student, courseEntries);
  const hiddenCourseCount = lessonStats.hiddenCourseCount;
  const totalLessons = lessonStats.totalLessons;
  const activeDeviceCount = getActiveDevicesForStudent(student.id).length;

  const courseMarkup = courseEntries.length
    ? courseEntries
        .map((entry) => {
          const course = entry.course || {};
          const lessons = getCourseLessons(course.id);
          const lessonMarkup = lessons.length
            ? lessons
                .map((lesson, index) => {
                  const accessState = getStudentPreviewLessonAccessState(student, entry, lesson);
                  const stateMeta = getStudentPreviewLessonStateMeta(accessState);
                  const isCompleted =
                    accessState.canWatch && student.completedLessonIds.includes(String(lesson.id || "").trim());

                  return `
                    <article class="student-preview-lesson-item ${stateMeta.className}">
                      <div class="flex flex-wrap items-start justify-between gap-3">
                        <div class="min-w-0">
                          <div class="flex flex-wrap items-center gap-2">
                            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[11px] font-bold text-white">${
                              index + 1
                            }</span>
                            <p class="text-sm font-bold text-slate-950">${escapeHtml(lesson.title || "Untitled lesson")}</p>
                            ${isCompleted ? renderStudentPreviewStateBadge("Completed", "emerald") : ""}
                          </div>
                          <p class="mt-2 text-xs text-slate-500">${escapeHtml(
                            [
                              lesson.module || "Module",
                              formatDateValue(lesson.releaseDate, "Release pending"),
                              lesson.duration || "",
                            ]
                              .filter(Boolean)
                              .join(" | ")
                          )}</p>
                        </div>
                        ${stateMeta.badge}
                      </div>
                      ${
                        lesson.note
                          ? `<p class="mt-3 text-xs leading-5 text-slate-500">${escapeHtml(lesson.note)}</p>`
                          : ""
                      }
                      ${
                        accessState.reason
                          ? `<p class="mt-3 text-xs leading-5 text-slate-600">${escapeHtml(accessState.reason)}</p>`
                          : ""
                      }
                    </article>
                  `;
                })
                .join("")
            : '<div class="student-preview-alert text-sm">No lesson is attached to this course yet.</div>';
          const unlockedLessons = lessons.filter((lesson) =>
            getStudentPreviewLessonAccessState(student, entry, lesson).canWatch
          ).length;
          const courseBadges = [
            renderPill(entry.status || "Active"),
            renderStudentPreviewStateBadge(
              entry.portalVisible ? "Portal Visible" : "Hidden From Portal",
              entry.portalVisible ? "blue" : "slate"
            ),
            entry.previewOnly && entry.portalVisible ? renderStudentPreviewStateBadge("Videos Locked", "indigo") : "",
            entry.securityLocked && entry.portalVisible ? renderStudentPreviewStateBadge("Security Lock", "rose") : "",
            entry.pendingPayment ? renderStudentPreviewStateBadge("Payment Review", "amber") : "",
            entry.paymentRejected ? renderStudentPreviewStateBadge("Payment Rejected", "rose") : "",
            hasUnlimitedCourseAccess(entry) ? renderStudentPreviewStateBadge("Unlimited", "emerald") : "",
            String(entry.id || "").startsWith("preview-fallback-")
              ? renderStudentPreviewStateBadge("Fallback Access", "slate")
              : "",
          ]
            .filter(Boolean)
            .join("");

          return `
            <article class="student-preview-course-card ${entry.portalVisible ? "" : "is-portal-hidden"}">
              <div class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div class="min-w-0">
                  <p class="student-preview-field-label student-preview-field-label-dark">${escapeHtml(
                    course.category || "Course"
                  )}</p>
                  <h4 class="mt-2 text-xl font-extrabold text-slate-950">${escapeHtml(course.title || course.id || "Untitled course")}</h4>
                  <p class="mt-2 text-sm student-preview-meta-dark">${escapeHtml(
                    [course.shortTitle || "", course.faculty || "", course.schedule || ""].filter(Boolean).join(" | ") ||
                      "Schedule pending"
                  )}</p>
                  <div class="mt-4 flex flex-wrap gap-2">${courseBadges}</div>
                  <p class="mt-4 text-sm leading-6 text-slate-600">${escapeHtml(buildStudentPreviewCourseAlert(entry))}</p>
                </div>
                <div class="student-preview-mini-grid xl:w-[360px]">
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Lesson Audit</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${lessons.length} total | ${unlockedLessons} open | ${Math.max(
                      lessons.length - unlockedLessons,
                      0
                    )} locked</p>
                  </div>
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Access Window</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(
                      hasUnlimitedCourseAccess(entry)
                        ? "Unlimited"
                        : [formatDateValue(entry.accessStartDate, "Not set"), formatDateValue(entry.accessEndDate, "Open ended")].join(" -> ")
                    )}</p>
                  </div>
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Next Live</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(
                      formatDateTimeOrValue(course.nextLive, "Schedule pending")
                    )}</p>
                  </div>
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Payment / Fee</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(
                      hasUnlimitedCourseAccess(entry)
                        ? "Not required"
                        : [formatCoursePrice(course.price, "Fee not set"), formatDateValue(entry.paymentDueDate, "No due date")].join(" | ")
                    )}</p>
                  </div>
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Enrollment Status</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(entry.status || "Active")}</p>
                  </div>
                  <div class="student-preview-alert">
                    <p class="student-preview-field-label student-preview-field-label-dark">Last Payment</p>
                    <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(
                      formatDateValue(entry.lastPaymentDate, entry.pendingPayment ? "Payment in review" : "Not recorded")
                    )}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <p class="student-preview-field-label student-preview-field-label-dark">Complete Lesson List</p>
                  <p class="text-xs font-semibold text-slate-500">Every lesson below shows the exact access state the student would face.</p>
                </div>
                <div class="student-preview-lesson-list mt-3">${lessonMarkup}</div>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="student-preview-alert text-sm">No assigned course or lesson is linked to this student right now.</div>';

  const noticeMarkup = notices.length
    ? notices
        .map((notice) => {
          return `
            <article class="student-preview-alert">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="text-sm font-bold text-slate-900">${escapeHtml(notice.title || "Notice")}</p>
                ${renderPill(notice.status || "Published")}
              </div>
              <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHtml(notice.message || "")}</p>
              <p class="mt-3 text-xs text-slate-400">${escapeHtml(
                formatDateValue(notice.publishedOn || notice.createdOn, "Not recorded")
              )}</p>
            </article>
          `;
        })
        .join("")
    : '<div class="student-preview-alert text-sm">No notice is available right now.</div>';

  const messageMarkup = messages.length
    ? messages
        .map((message) => {
          const recipientStatus = String(message.recipientEntry?.status || "Pending").trim() || "Pending";
          const replyText = String(message.recipientEntry?.reply || "").trim();
          return `
            <article class="student-preview-alert">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="text-sm font-bold text-slate-900">${escapeHtml(message.title || "Admin Message")}</p>
                ${renderPill(recipientStatus)}
              </div>
              <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHtml(message.message || "")}</p>
              ${
                replyText
                  ? `<div class="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Reply: ${escapeHtml(
                      replyText
                    )}</div>`
                  : ""
              }
              <p class="mt-3 text-xs text-slate-400">${escapeHtml(
                formatDateTime(message.createdOn, "Not recorded")
              )}</p>
            </article>
          `;
        })
        .join("")
    : '<div class="student-preview-alert text-sm">No popup message is waiting for this student.</div>';

  const paymentMarkup = payments.length
    ? payments
        .map((payment) => {
          return `
            <article class="student-preview-alert">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="text-sm font-bold text-slate-900">${escapeHtml(payment.courseTitle || payment.courseId || "Course payment")}</p>
                ${renderPill(payment.status || "Pending")}
              </div>
              <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">${escapeHtml(
                formatCoursePrice(payment.amount, "Amount not set")
              )}</p>
              <p class="mt-3 text-sm text-slate-600">${escapeHtml(
                payment.reviewNote || payment.note || payment.studentTransactionId || "No payment note recorded."
              )}</p>
              <p class="mt-3 text-xs text-slate-400">${escapeHtml(
                formatDateTime(payment.submittedOn || payment.reviewedOn || payment.paymentDate, "Not recorded")
              )}</p>
            </article>
          `;
        })
        .join("")
    : '<div class="student-preview-alert text-sm">No payment history is visible for this student.</div>';

  const deviceMarkup = devices.length
    ? devices
        .map((device) => {
          const deviceMeta = [buildDeviceNetworkLabel(device), buildDeviceShellMeta(device), device.screenSize || ""]
            .filter(Boolean)
            .join(" | ");
          const deviceReferrerLabel = buildDeviceReferrerLabel(device);
          return `
            <article class="student-preview-alert">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="text-sm font-bold text-slate-900">${escapeHtml(device.deviceName || "Unknown device")}</p>
                ${renderPill(device.status || "Active")}
              </div>
              <p class="mt-2 text-sm text-slate-600">${escapeHtml(deviceMeta || "Device details unavailable")}</p>
              ${
                deviceReferrerLabel
                  ? `<p class="mt-3 text-xs font-semibold text-slate-500">Launch source: ${escapeHtml(deviceReferrerLabel)}</p>`
                  : ""
              }
              ${
                device.note
                  ? `<p class="mt-3 text-xs font-semibold text-slate-500">${escapeHtml(device.note)}</p>`
                  : ""
              }
              <p class="mt-3 text-xs text-slate-400">${escapeHtml(
                formatDateTime(device.lastSeenOn || device.lastLoginOn || device.firstSeenOn, "Not recorded")
              )}</p>
            </article>
          `;
        })
        .join("")
    : '<div class="student-preview-alert text-sm">No approved device record is saved for this student.</div>';

  const accountMarkup = [
    ["Student ID", student.id || "-"],
    ["Phone", student.phone || "Not set"],
    ["Email", student.email || "Not set"],
    ["Batch", student.batch || "Not set"],
    ["Session", student.session || "Not set"],
    ["Joined On", formatDateValue(student.joinedOn, "Not recorded")],
    ["Login Approval", student.loginApproval || "Pending"],
    ["Portal Mode", student.portalAccessMode || "Full Access"],
    ["Student Status", student.status || "Active"],
    ["Device Usage", buildStudentDeviceUsageLabel(student)],
    ["Completed Lessons", String(student.completedLessonIds.length || 0)],
    ["Assigned Courses", String(courseEntries.length)],
  ]
    .map(
      ([label, value]) => `
        <div class="student-preview-alert">
          <p class="student-preview-field-label student-preview-field-label-dark">${escapeHtml(label)}</p>
          <p class="mt-2 text-sm font-semibold text-slate-900">${escapeHtml(value)}</p>
        </div>
      `
    )
    .join("");

  if (dom.studentPreviewTitle) {
    dom.studentPreviewTitle.textContent = `${student.name || student.id} Full Access Audit`;
  }
  if (dom.studentPreviewMeta) {
    dom.studentPreviewMeta.textContent = `Synced ${formatDateTime(
      state.data.generatedAt,
      "just now"
    )} from ${state.data.spreadsheetName || "the live sheet"}. Full admin inspection of assigned courses, lessons, payments, and devices.`;
  }
  if (dom.studentPreviewOpenEditorBtn) {
    dom.studentPreviewOpenEditorBtn.dataset.studentId = student.id;
  }

  dom.studentPreviewBody.innerHTML = `
    <div class="student-preview-stack">
      <section class="student-preview-hero">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div class="min-w-0">
            <p class="student-preview-field-label student-preview-field-label-light">Student Access Audit</p>
            <h4 class="mt-3 text-3xl font-extrabold">${escapeHtml(student.name || "Unnamed Student")}</h4>
            <p class="mt-2 text-sm student-preview-meta-light">${escapeHtml(
              [student.id || "-", student.batch || "-", student.session || "-"].filter(Boolean).join(" | ")
            )}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${renderPill(student.loginApproval || "Pending", "approval")}
              ${renderStudentAccessBadge(student)}
              ${renderPill(student.status || "Active")}
              ${renderStudentPreviewModePill(accessSummary.label, accessSummary.tone)}
            </div>
            <p class="mt-4 max-w-3xl text-sm leading-6 student-preview-meta-light">${escapeHtml(accessSummary.note)}</p>
            ${
              student.highlight
                ? `<div class="mt-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white">${escapeHtml(
                    student.highlight
                  )}</div>`
                : ""
            }
            ${
              hiddenCourseCount
                ? `<p class="mt-3 text-xs font-semibold student-preview-meta-light">${hiddenCourseCount} assigned course${
                    hiddenCourseCount === 1 ? "" : "s"
                  } are hidden or inactive, so the student will not see them in the portal until reactivated.</p>`
                : ""
            }
          </div>
          <div class="student-preview-kpi-grid xl:w-[480px]">
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">Assigned Courses</p>
              <p class="mt-2 text-3xl font-extrabold">${courseEntries.length}</p>
            </div>
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">Portal Visible</p>
              <p class="mt-2 text-3xl font-extrabold">${lessonStats.visibleCourseCount}</p>
            </div>
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">All Lessons</p>
              <p class="mt-2 text-3xl font-extrabold">${totalLessons}</p>
            </div>
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">Locked / Restricted</p>
              <p class="mt-2 text-3xl font-extrabold">${lessonStats.lockedLessons}</p>
            </div>
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">Completed Open</p>
              <p class="mt-2 text-3xl font-extrabold">${lessonStats.completedLessons}</p>
            </div>
            <div class="student-preview-kpi">
              <p class="student-preview-field-label student-preview-field-label-light">Active Devices</p>
              <p class="mt-2 text-3xl font-extrabold">${activeDeviceCount}</p>
              <p class="mt-1 text-xs student-preview-meta-light">${escapeHtml(buildStudentDeviceUsageLabel(student))}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="grid gap-6 xl:grid-cols-[minmax(0,1.2fr),minmax(360px,0.8fr)]">
        <div class="space-y-6">
          <section class="student-preview-surface">
            <div class="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p class="student-preview-field-label student-preview-field-label-dark">Course Audit</p>
                <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Complete Course And Lesson Access</h5>
              </div>
              <p class="text-sm text-slate-500">Every assigned course and every lesson is shown below, including hidden and locked states.</p>
            </div>
            <div class="mt-5 grid gap-4">${courseMarkup}</div>
          </section>

          <section class="student-preview-surface">
            <p class="student-preview-field-label student-preview-field-label-dark">Live Notices</p>
            <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Shared Portal Notices</h5>
            <div class="mt-5 grid gap-4">${noticeMarkup}</div>
          </section>
        </div>

        <div class="space-y-6">
          <section class="student-preview-surface">
            <p class="student-preview-field-label student-preview-field-label-dark">Account Snapshot</p>
            <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Student Profile Diagnostics</h5>
            <div class="student-preview-account-grid mt-5">${accountMarkup}</div>
          </section>

          <section class="student-preview-surface">
            <p class="student-preview-field-label student-preview-field-label-dark">Inbox</p>
            <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Student Popup Messages</h5>
            <div class="mt-5 grid gap-4">${messageMarkup}</div>
          </section>

          <section class="student-preview-surface">
            <p class="student-preview-field-label student-preview-field-label-dark">Payments</p>
            <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Payment Timeline</h5>
            <div class="mt-5 grid gap-4">${paymentMarkup}</div>
          </section>

          <section class="student-preview-surface">
            <p class="student-preview-field-label student-preview-field-label-dark">Devices</p>
            <h5 class="mt-2 text-2xl font-extrabold text-slate-950">Approved Devices</h5>
            <div class="mt-5 grid gap-4">${deviceMarkup}</div>
          </section>
        </div>
      </div>
    </div>
  `;

  setStudentPreviewModalOpen(true);
}

function renderMessageLog() {
  if (!state.data.messages.length) {
    dom.messageLogPanel.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-500">No internal message has been saved yet.</div>';
    return;
  }

  dom.messageLogPanel.innerHTML = state.data.messages
    .slice(0, 8)
    .map((message) => {
      const recipientStates = Object.values(message.recipientState || {});
      const repliedEntries = recipientStates.filter((entry) => normalizeStatus(entry.status) === "replied");
      const skippedCount = recipientStates.filter((entry) => normalizeStatus(entry.status) === "skipped").length;
      const pendingCount = recipientStates.filter((entry) => normalizeStatus(entry.status) === "pending").length;
      const replyMarkup = repliedEntries.length
        ? repliedEntries
            .slice(0, 3)
            .map((entry) => {
              const student = getStudentById(entry.respondedBy) || null;
              const studentLabel = student?.name || entry.respondedBy || "Student";
              return `
                <div class="rounded-2xl border border-white bg-white px-4 py-3">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">${escapeHtml(studentLabel)}</p>
                    ${
                      student?.id
                        ? `<button
                            type="button"
                            data-message-reply-student="${escapeHtml(student.id)}"
                            data-message-reply-source="${escapeHtml(message.id)}"
                            class="rounded-2xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          >
                            Reply
                          </button>`
                        : ""
                    }
                  </div>
                  <p class="mt-2 text-sm leading-6 text-slate-700">${escapeHtml(entry.reply || "Reply received.")}</p>
                  <p class="mt-2 text-xs text-slate-400">${escapeHtml(formatDateTime(entry.respondedOn, "Just now"))}</p>
                </div>
              `;
            })
            .join("")
        : "";

      return `
        <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="min-w-0">
              <h4 class="text-sm font-extrabold text-slate-950">${escapeHtml(message.title)}</h4>
              <p class="mt-2 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                <span>${message.audience === "student" ? "Student Popup" : "Admin Notice"}</span>
                <span>Pending: ${pendingCount}</span>
                <span>Replies: ${repliedEntries.length}</span>
                <span>Skipped: ${skippedCount}</span>
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              ${renderPill(message.status)}
              <button
                type="button"
                data-message-delete="${escapeHtml(message.id)}"
                class="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
              >
                Delete
              </button>
            </div>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHtml(message.message)}</p>
          ${
            replyMarkup
              ? `<div class="mt-4 grid gap-3">${replyMarkup}</div>`
              : ""
          }
          <p class="mt-3 text-xs text-slate-400">
            Students: ${message.studentIds.length} | By: ${escapeHtml(message.createdBy || "-")} | ${escapeHtml(
              formatDateTime(message.createdOn, "Not recorded")
            )}
          </p>
        </div>
      `;
    })
    .join("");
}

function applySharedCourseFilter(nextValue) {
  const normalizedCourseId = normalizeCourseFilterValue(nextValue);
  const studentsInScope = new Set(getStudentsInCourseScope(normalizedCourseId).map((student) => student.id));

  state.courseFilter = normalizedCourseId;
  state.selectedStudentIds = new Set(
    [...state.selectedStudentIds].filter((studentId) => studentsInScope.has(studentId))
  );

  if (state.editingStudentId && !studentsInScope.has(state.editingStudentId)) {
    state.editingStudentId = "";
  }

  resetBulkCourseRuleDrafts();
  renderCourseFilterControls();
  renderAdmissionsAnalytics();
  renderStudentTable();
  renderStudentEditor();
  renderBulkCourseSelector();
}

function renderDashboard() {
  renderSummaryCards();
  renderCourseFilterControls();
  renderAdmissionsAnalytics();
  renderStudentTable();
  renderStudentEditor();
  renderBulkCourseSelector();
  renderCourseList();
  renderPaymentQueue();
  renderMessageLog();
  renderStudentPreviewModal();

  if (state.editingCourseId) {
    const course = state.data.courses.find((entry) => entry.id === state.editingCourseId) || null;
    if (course) {
      populateCourseForm(course);
    }
  }
}

function populateCourseForm(course) {
  state.editingCourseId = course.id;
  dom.courseIdInput.value = course.id || "";
  dom.courseTitleInput.value = course.title || "";
  dom.courseShortTitleInput.value = course.shortTitle || "";
  dom.courseFacultyInput.value = course.faculty || "";
  dom.courseCategoryInput.value = course.category || "";
  dom.courseBatchInput.value = course.batch || "";
  dom.courseSessionInput.value = course.session || "";
  dom.courseScheduleInput.value = course.schedule || "";
  dom.courseNextLiveInput.value = course.nextLive || "";
  dom.coursePriceInput.value = course.price || "";
  dom.courseStatusInput.value = normalizeCourseStatus(course.status || "Active");
  dom.courseDescriptionInput.value = course.description || "";

  const submitButton = dom.courseForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Update Course";
  }
}

function normalizeCourseRuleDraftForRequest(draft = {}) {
  const normalizedUnlimitedValue = String(draft.unlimitedAccess || "").trim();
  const unlimitedEnabled = isUnlimitedAccessEnabled(normalizedUnlimitedValue);
  return {
    unlimitedAccess: normalizedUnlimitedValue
      ? unlimitedEnabled
        ? "true"
        : "false"
      : "",
    accessStartDate: String(draft.accessStartDate || "").trim(),
    accessEndDate: unlimitedEnabled ? "" : String(draft.accessEndDate || "").trim(),
    videoAccessUntil: unlimitedEnabled ? "" : String(draft.videoAccessUntil || "").trim(),
    lastPaymentDate: unlimitedEnabled ? "" : String(draft.lastPaymentDate || "").trim(),
    paymentDueDate: unlimitedEnabled ? "" : String(draft.paymentDueDate || "").trim(),
    monthlyFee: unlimitedEnabled ? "" : String(draft.monthlyFee || "").trim(),
    status: String(draft.status || "").trim(),
    paidMonths: unlimitedEnabled ? "" : buildPipeList(String(draft.paidMonths || "").trim()),
  };
}

function getSelectedCourseRulePayload(courseIds) {
  return courseIds.reduce((result, courseId) => {
    result[courseId] = normalizeCourseRuleDraftForRequest(
      state.bulkCourseRuleDrafts[courseId] || createEmptyCourseRuleDraft()
    );
    return result;
  }, {});
}

function handleBulkCourseRuleInput(event) {
  const field = event.target.closest("[data-course-rule-field]");
  if (!field) {
    return;
  }

  const courseId = String(field.dataset.courseRuleCourse || "").trim();
  const fieldKey = String(field.dataset.courseRuleField || "").trim();
  if (!courseId || !fieldKey) {
    return;
  }

  const nextDraft = {
    ...createEmptyCourseRuleDraft(),
    ...(state.bulkCourseRuleDrafts[courseId] || {}),
  };
  nextDraft[fieldKey] =
    field.type === "checkbox" ? (field.checked ? "true" : "false") : String(field.value || "").trim();
  state.bulkCourseRuleDrafts[courseId] = nextDraft;

  if (field.type === "checkbox") {
    renderBulkCourseRuleCards();
  }
}

function handleBulkCourseSelectionChange(event) {
  if (!event.target.matches('[data-course-checkbox="bulk"]')) {
    return;
  }

  renderBulkCourseRuleCards();
}

async function handleAdminLoginSubmit(event) {
  event.preventDefault();

  const username = dom.adminUsername.value.trim();
  const password = normalizePasswordValue(dom.adminPassword.value);

  if (!username || !password) {
    setFeedback(dom.adminLoginFeedback, "Enter admin username and password first.", "error");
    return;
  }

  setFeedback(dom.adminLoginFeedback, "Checking admin credentials...", "info");

  try {
    const payload = await requestAction("adminlogin", {
      token: "",
      username,
      password,
    });

    if (!payload.ok || !payload.token) {
      throw new Error(payload.message || "Admin login failed.");
    }

    state.token = payload.token;
    state.admin = payload.admin || null;
    writeStoredValue(STORAGE_KEYS.adminToken, state.token);

    await loadDashboard("Admin panel connected to the live sheet.");
    setFeedback(dom.adminLoginFeedback, "Admin login approved.", "success");
    dom.adminPassword.value = "";
  } catch (error) {
    clearAdminSession();
    setFeedback(dom.adminLoginFeedback, error.message || "Admin login failed.", "error");
  }
}

async function handleRefreshDashboard() {
  try {
    setFeedback(dom.adminTopFeedback, "Refreshing live data...", "info");
    await loadDashboard("Dashboard refreshed.");
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to refresh data.", "error");
  }
}

async function handleStudentSave(event) {
  event.preventDefault();

  const courseIds = readCheckedCourseIds(dom.studentCourseSelector, "editor");
  const payload = {
    id: dom.editorStudentId.value.trim(),
    name: dom.editorStudentName.value.trim(),
    phone: normalizePhoneValue(dom.editorStudentPhone.value),
    email: dom.editorStudentEmail.value.trim(),
    batch: dom.editorStudentBatch.value.trim(),
    session: dom.editorStudentSession.value.trim(),
    password: normalizePasswordValue(dom.editorStudentPassword.value),
    maxDeviceCount: dom.editorStudentMaxDevices.value.trim(),
    status: dom.editorStudentStatus.value.trim(),
    loginApproval: dom.editorStudentApproval.value.trim(),
    portalAccessMode: dom.editorStudentAccessMode.value.trim(),
    highlight: dom.editorStudentHighlight.value.trim(),
    courseIds: buildPipeList(courseIds),
  };

  if (!payload.name || !payload.phone || !payload.password) {
    setFeedback(dom.studentEditorFeedback, "Name, phone, and password are required.", "error");
    return;
  }

  try {
    setFeedback(dom.studentEditorFeedback, "Saving student profile...", "info");
    const response = await requestAction("adminupdatestudent", {
      student: JSON.stringify(payload),
      courseIds: payload.courseIds,
      replaceExisting: "false",
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to save the student.");
    }

    const savedStudent =
      (response.students || []).find((student) => normalizePhoneValue(student.phone || "") === payload.phone) || null;

    state.editingStudentId = savedStudent?.id || payload.id || "";
    applyDashboardPayload(response, "Student profile saved.");
    setFeedback(dom.studentEditorFeedback, "Student profile saved.", "success");

    if (state.editingStudentId) {
      state.selectedStudentIds = new Set([state.editingStudentId]);
      renderStudentTable();
      renderBulkCourseSelector();
    }
  } catch (error) {
    setFeedback(dom.studentEditorFeedback, error.message || "Unable to save the student.", "error");
  }
}

async function applyBulkActionToSelected(bulkAction) {
  const selectedStudentIds = getSelectedStudentIds();

  if (!selectedStudentIds.length || !bulkAction) {
    setFeedback(dom.adminTopFeedback, "Select students and a bulk action first.", "error");
    return;
  }

  try {
    setFeedback(dom.adminTopFeedback, "Applying bulk action...", "info");
    const response = await requestAction("adminbulkstudentaction", {
      studentIds: buildPipeList(selectedStudentIds),
      bulkAction,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to apply the bulk action.");
    }

    applyDashboardPayload(response, "Bulk student action saved.");
    dom.bulkActionSelect.value = "";
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to apply the bulk action.", "error");
  }
}

async function handleBulkActionApply() {
  await applyBulkActionToSelected(dom.bulkActionSelect.value.trim());
}

async function handleAssignCourses() {
  const selectedStudentIds = getSelectedStudentIds();
  const courseIds = readCheckedCourseIds(dom.bulkCourseSelector, "bulk");

  if (!selectedStudentIds.length) {
    setFeedback(dom.messageFeedback, "Select students first.", "error");
    return;
  }

  const courseRulesByCourse = getSelectedCourseRulePayload(courseIds);

  try {
    setFeedback(dom.messageFeedback, "Saving course access...", "info");
    const response = await requestAction("adminassigncourses", {
      studentIds: buildPipeList(selectedStudentIds),
      courseIds: buildPipeList(courseIds),
      replaceExisting: "true",
      courseRulesJson: JSON.stringify(courseRulesByCourse),
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to save course access.");
    }

    applyDashboardPayload(response, "Course access updated.");
    setFeedback(dom.messageFeedback, "Course access updated.", "success");
  } catch (error) {
    setFeedback(dom.messageFeedback, error.message || "Unable to save course access.", "error");
  }
}

async function handleSendMessage() {
  const selectedStudentIds = getSelectedStudentIds();
  const title = dom.messageTitleInput.value.trim();
  const message = dom.messageBodyInput.value.trim();

  if (!selectedStudentIds.length || !message) {
    setFeedback(dom.messageFeedback, "Select students and write a message first.", "error");
    return;
  }

  try {
    setFeedback(dom.messageFeedback, "Sending popup message...", "info");
    const response = await requestAction("adminsendmessage", {
      studentIds: buildPipeList(selectedStudentIds),
      title,
      message,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to send the popup message.");
    }

    applyDashboardPayload(response, "Popup message sent.");
    dom.messageTitleInput.value = "";
    dom.messageBodyInput.value = "";
    setFeedback(dom.messageFeedback, "Popup message sent to the selected students.", "success");
  } catch (error) {
    setFeedback(dom.messageFeedback, error.message || "Unable to send the popup message.", "error");
  }
}

async function handleCourseSave(event) {
  event.preventDefault();
  const wasEditingExistingCourse = !!state.editingCourseId;

  const payload = {
    id: (state.editingCourseId || dom.courseIdInput.value).trim(),
    title: dom.courseTitleInput.value.trim(),
    shortTitle: dom.courseShortTitleInput.value.trim(),
    faculty: dom.courseFacultyInput.value.trim(),
    category: dom.courseCategoryInput.value.trim(),
    batch: dom.courseBatchInput.value.trim(),
    session: dom.courseSessionInput.value.trim(),
    schedule: dom.courseScheduleInput.value.trim(),
    nextLive: dom.courseNextLiveInput.value.trim(),
    price: dom.coursePriceInput.value.trim(),
    status: normalizeCourseStatus(dom.courseStatusInput.value),
    description: dom.courseDescriptionInput.value.trim(),
  };

  if (!payload.title) {
    setFeedback(dom.courseFeedback, "Course title is required.", "error");
    return;
  }

  try {
    setFeedback(dom.courseFeedback, "Saving course...", "info");
    const response = await requestAction("admincreatecourse", {
      course: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to save the course.");
    }

    const successMessage = wasEditingExistingCourse ? "Course updated." : "Course saved.";
    try {
      await loadDashboard(successMessage);
    } catch (refreshError) {
      applyDashboardPayload(response, successMessage);
    }
    clearCourseForm();
    setFeedback(dom.courseFeedback, successMessage, "success");
  } catch (error) {
    setFeedback(dom.courseFeedback, error.message || "Unable to save the course.", "error");
  }
}

async function handleCourseStatusToggle(courseId) {
  const course = state.data.courseMap.get(courseId) || null;
  if (!course) {
    setFeedback(dom.courseFeedback, "Course could not be loaded.", "error");
    return;
  }

  const nextStatus = isCourseActive(course) ? "Inactive" : "Active";

  try {
    setFeedback(
      dom.courseFeedback,
      `${nextStatus === "Active" ? "Activating" : "Hiding"} course...`,
      "info"
    );
    const response = await requestAction("admincreatecourse", {
      course: JSON.stringify({
        ...course,
        status: nextStatus,
      }),
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to update the course status.");
    }

    const successMessage =
      nextStatus === "Active"
        ? "Course activated. Students can see it again."
        : "Course deactivated. It is now hidden from students.";

    try {
      await loadDashboard(successMessage);
    } catch (refreshError) {
      applyDashboardPayload(response, successMessage);
    }

    const refreshedCourse = state.data.courseMap.get(courseId) || null;
    if (refreshedCourse && state.editingCourseId === courseId) {
      populateCourseForm(refreshedCourse);
    }
    setFeedback(dom.courseFeedback, successMessage, "success");
  } catch (error) {
    setFeedback(dom.courseFeedback, error.message || "Unable to update the course status.", "error");
  }
}

async function handleCourseDelete(courseId) {
  const course = state.data.courseMap.get(courseId);
  const confirmed = window.confirm(
    `Delete "${course?.title || courseId}"? This will also remove related lesson and enrollment entries.`
  );

  if (!confirmed) {
    return;
  }

  try {
    setFeedback(dom.courseFeedback, "Deleting course...", "info");
    const response = await requestAction("admindeletecourse", {
      courseId,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to delete the course.");
    }

    applyDashboardPayload(response, "Course deleted.");
    clearCourseForm();
    setFeedback(dom.courseFeedback, "Course deleted.", "success");
  } catch (error) {
    setFeedback(dom.courseFeedback, error.message || "Unable to delete the course.", "error");
  }
}

async function handleDeviceLogout(deviceRecordId) {
  const device = state.data.devices.find((entry) => entry.id === deviceRecordId) || null;
  if (!device) {
    setFeedback(dom.adminTopFeedback, "Device record could not be found.", "error");
    return;
  }

  const student = getStudentById(device.studentId) || null;
  const confirmed = window.confirm(
    `Remove "${device.deviceName || "this device"}" from ${student?.name || device.studentId || "this student"}? The active session on that device will be forced to log out.`
  );

  if (!confirmed) {
    return;
  }

  try {
    setFeedback(dom.adminTopFeedback, "Forcing logout from this device...", "info");
    const response = await requestAction("adminlogoutdevice", {
      deviceRecordId,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to force logout on this device.");
    }

    applyDashboardPayload(response, "Device logged out from the admin panel.");
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to force logout on this device.", "error");
  }
}

async function handleDeviceDelete(deviceRecordId) {
  const device = state.data.devices.find((entry) => entry.id === deviceRecordId) || null;
  if (!device) {
    setFeedback(dom.adminTopFeedback, "Device record could not be found.", "error");
    return;
  }

  const student = getStudentById(device.studentId) || null;
  const confirmed = window.confirm(
    `Delete the device record for "${device.deviceName || "this device"}" from ${student?.name || device.studentId || "this student"}? This removes the row from the spreadsheet and kicks the session out if it is still active.`
  );

  if (!confirmed) {
    return;
  }

  try {
    setFeedback(dom.adminTopFeedback, "Deleting device record from the spreadsheet...", "info");
    const response = await requestAction("admindeletedevice", {
      deviceRecordId,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to delete the device record.");
    }

    applyDashboardPayload(response, "Device record deleted from the spreadsheet.");
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to delete the device record.", "error");
  }
}

async function handleMessageDelete(messageId) {
  const message = state.data.messages.find((entry) => entry.id === messageId) || null;
  const confirmed = window.confirm(
    `Delete "${message?.title || "this message"}"? This will remove it from the admin log and from the spreadsheet.`
  );

  if (!confirmed) {
    return;
  }

  try {
    setFeedback(dom.messageFeedback, "Deleting popup message...", "info");
    const response = await requestAction("admindeletemessage", {
      messageId,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to delete the popup message.");
    }

    applyDashboardPayload(response, "Popup message deleted.");
    setFeedback(dom.messageFeedback, "Popup message deleted.", "success");
  } catch (error) {
    setFeedback(dom.messageFeedback, error.message || "Unable to delete the popup message.", "error");
  }
}

async function handlePaymentReview(paymentId, action) {
  const confirmedField = dom.paymentQueue.querySelector(`[data-payment-confirmed="${paymentId}"]`);
  const paymentDateField = dom.paymentQueue.querySelector(`[data-payment-date="${paymentId}"]`);
  const accessMonthsField = dom.paymentQueue.querySelector(`[data-payment-months="${paymentId}"]`);
  const unlimitedField = dom.paymentQueue.querySelector(`[data-payment-unlimited="${paymentId}"]`);
  const noteField = dom.paymentQueue.querySelector(`[data-payment-note="${paymentId}"]`);
  const confirmedTransactionId = confirmedField?.value.trim() || "";
  const paymentDate = paymentDateField?.value.trim() || "";
  const unlimitedAccess = !!unlimitedField?.checked;
  const accessMonths = normalizePaymentAccessMonths(accessMonthsField?.value || "1", 1);
  const reviewNote = noteField?.value.trim() || "";

  if (action === "approve" && !confirmedTransactionId) {
    setFeedback(dom.adminTopFeedback, "Enter the confirmed bKash transaction ID before approving.", "error");
    confirmedField?.focus();
    return;
  }

  if (action === "approve" && !unlimitedAccess && accessMonths < 1) {
    setFeedback(dom.adminTopFeedback, "Enter a valid month count before approving.", "error");
    accessMonthsField?.focus();
    return;
  }

  try {
    const accessSummary = getPaymentAccessSummary(accessMonths, unlimitedAccess);
    setFeedback(
      dom.adminTopFeedback,
      action === "approve"
        ? `Approving payment for ${accessSummary.accessLabel}...`
        : "Rejecting payment...",
      "info"
    );
    const response = await requestAction("adminreviewpayment", {
      paymentId,
      reviewAction: action,
      confirmedTransactionId,
      paymentDate,
      accessMonths: action === "approve" ? String(accessMonths) : "",
      unlimitedAccess: action === "approve" && unlimitedAccess ? "true" : "false",
      reviewNote,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to update the payment review.");
    }

    applyDashboardPayload(
      response,
      action === "approve"
        ? `Payment approved for ${accessSummary.accessLabel}.`
        : "Payment rejected."
    );
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to update the payment review.", "error");
  }
}

function handleStudentTableClick(event) {
  const viewButton = event.target.closest("[data-view-student]");
  if (viewButton) {
    openStudentPreview(String(viewButton.dataset.viewStudent || "").trim());
    return;
  }

  const editButton = event.target.closest("[data-edit-student]");
  if (!editButton) {
    return;
  }

  setEditingStudent(editButton.dataset.editStudent);
}

function handleStudentTableChange(event) {
  const checkbox = event.target.closest("[data-student-select]");
  if (!checkbox) {
    return;
  }

  const studentId = String(checkbox.value || "").trim();
  if (!studentId) {
    return;
  }

  if (checkbox.checked) {
    state.selectedStudentIds.add(studentId);
  } else {
    state.selectedStudentIds.delete(studentId);
  }

  resetBulkCourseRuleDrafts();
  renderStudentTable();
  renderBulkCourseSelector();
}

function handleSelectAllToggle() {
  if (!state.visibleStudentIds.length) {
    return;
  }

  if (dom.selectAllStudents.checked) {
    state.visibleStudentIds.forEach((studentId) => state.selectedStudentIds.add(studentId));
  } else {
    state.visibleStudentIds.forEach((studentId) => state.selectedStudentIds.delete(studentId));
  }

  resetBulkCourseRuleDrafts();
  renderStudentTable();
  renderBulkCourseSelector();
}

async function handleStudentQuickActionClick(event) {
  const quickActionButton = event.target.closest("[data-quick-action]");
  if (quickActionButton) {
    const quickAction = String(quickActionButton.dataset.quickAction || "").trim();
    if (!quickAction) {
      return;
    }

    dom.bulkActionSelect.value = quickAction;
    await applyBulkActionToSelected(quickAction);
  }
}

function handleCourseListClick(event) {
  const toggleButton = event.target.closest("[data-course-toggle]");
  if (toggleButton) {
    handleCourseStatusToggle(toggleButton.dataset.courseToggle);
    return;
  }

  const editButton = event.target.closest("[data-course-edit]");
  if (editButton) {
    const course = state.data.courseMap.get(editButton.dataset.courseEdit) || null;
    if (course) {
      populateCourseForm(course);
      setFeedback(dom.courseFeedback, "Editing existing course.", "info");
    }
    return;
  }

  const deleteButton = event.target.closest("[data-course-delete]");
  if (deleteButton) {
    handleCourseDelete(deleteButton.dataset.courseDelete);
  }
}

function handlePaymentQueueClick(event) {
  const approveButton = event.target.closest("[data-payment-approve]");
  if (approveButton) {
    handlePaymentReview(approveButton.dataset.paymentApprove, "approve");
    return;
  }

  const rejectButton = event.target.closest("[data-payment-reject]");
  if (rejectButton) {
    handlePaymentReview(rejectButton.dataset.paymentReject, "reject");
  }
}

function handlePaymentQueueChange(event) {
  const target = event.target.closest("[data-payment-months], [data-payment-unlimited]");
  if (!target) {
    return;
  }

  syncPaymentReviewCard(target.dataset.paymentMonths || target.dataset.paymentUnlimited || "");
}

function handleDeviceRegistryClick(event) {
  const logoutButton = event.target.closest("[data-device-logout]");
  if (logoutButton) {
    handleDeviceLogout(String(logoutButton.dataset.deviceLogout || "").trim());
    return;
  }

  const deleteButton = event.target.closest("[data-device-delete]");
  if (deleteButton) {
    handleDeviceDelete(String(deleteButton.dataset.deviceDelete || "").trim());
  }
}

function handleMessageLogClick(event) {
  const deleteButton = event.target.closest("[data-message-delete]");
  if (deleteButton) {
    handleMessageDelete(String(deleteButton.dataset.messageDelete || "").trim());
    return;
  }

  const replyButton = event.target.closest("[data-message-reply-student]");
  if (replyButton) {
    prefillReplyToStudent(
      String(replyButton.dataset.messageReplyStudent || "").trim(),
      String(replyButton.dataset.messageReplySource || "").trim()
    );
  }
}

function handleStudentPreviewModalClick(event) {
  if (event.target.closest("[data-student-preview-close]")) {
    closeStudentPreview();
  }
}

function openStudentPreviewInEditor() {
  const studentId = String(dom.studentPreviewOpenEditorBtn?.dataset.studentId || "").trim();
  if (!studentId) {
    return;
  }

  closeStudentPreview();
  setEditingStudent(studentId);
  dom.studentEditorForm?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  dom.editorStudentName?.focus();
}

async function bootstrap() {
  resetStudentEditor();
  clearCourseForm();

  state.token = readStoredValue(STORAGE_KEYS.adminToken).trim();
  const cachedPayload = getCachedDashboardPayload();

  if (!state.token) {
    toggleAuthView(false);
    return;
  }

  if (cachedPayload) {
    applyDashboardPayload(
      cachedPayload,
      "Dashboard restored from this device. Syncing live data now...",
      "info"
    );
    toggleAuthView(true);
    restoreAdminScrollPosition();
  }

  try {
    setFeedback(
      cachedPayload ? dom.adminTopFeedback : dom.adminLoginFeedback,
      cachedPayload ? "Syncing live admin data..." : "Restoring admin session...",
      "info"
    );
    await loadDashboard("Admin session restored.", {
      preserveSessionOnUnauthorized: true,
    });
    restoreAdminScrollPosition();
  } catch (error) {
    if (!state.token) {
      return;
    }

    if (cachedPayload) {
      toggleAuthView(true);
      setFeedback(
        dom.adminTopFeedback,
        `${error.message || "Live data could not be refreshed right now."} Showing the last synced dashboard on this device.`,
        "error"
      );
      return;
    }

    toggleAuthView(false);
    setFeedback(
      dom.adminLoginFeedback,
      error.message || "Admin session could not be restored right now.",
      "error"
    );
  }
}

dom.adminLoginForm.addEventListener("submit", handleAdminLoginSubmit);
dom.refreshDashboardBtn.addEventListener("click", handleRefreshDashboard);
dom.adminLogoutBtn.addEventListener("click", () => {
  clearAdminSession();
  setFeedback(dom.adminLoginFeedback, "Admin session closed.", "info");
});
if (dom.adminAnalyticsYear) {
  dom.adminAnalyticsYear.addEventListener("change", () => {
    state.analyticsYear = dom.adminAnalyticsYear.value || "";
    renderAdmissionsAnalytics();
  });
}
if (dom.adminAnalyticsCourse) {
  dom.adminAnalyticsCourse.addEventListener("change", () => {
    applySharedCourseFilter(dom.adminAnalyticsCourse.value || "all");
  });
}
if (dom.studentCourseFilter) {
  dom.studentCourseFilter.addEventListener("change", () => {
    applySharedCourseFilter(dom.studentCourseFilter.value || "all");
  });
}
dom.studentSearchInput.addEventListener("input", () => {
  state.studentQuery = dom.studentSearchInput.value || "";
  renderStudentTable();
});
dom.newStudentBtn.addEventListener("click", () => {
  resetStudentEditor();
  state.selectedStudentIds = new Set();
  resetBulkCourseRuleDrafts();
  renderStudentTable();
  renderBulkCourseSelector();
});
dom.studentEditorForm.addEventListener("submit", handleStudentSave);
dom.studentTableBody.addEventListener("click", handleStudentTableClick);
dom.studentTableBody.addEventListener("change", handleStudentTableChange);
dom.studentMobileList.addEventListener("click", handleStudentTableClick);
dom.studentMobileList.addEventListener("change", handleStudentTableChange);
dom.selectAllStudents.addEventListener("change", handleSelectAllToggle);
dom.bulkCourseSelector.addEventListener("change", handleBulkCourseSelectionChange);
dom.bulkCourseRuleCards.addEventListener("input", handleBulkCourseRuleInput);
dom.bulkCourseRuleCards.addEventListener("change", handleBulkCourseRuleInput);
dom.studentQuickActionBar.addEventListener("click", handleStudentQuickActionClick);
dom.applyBulkActionBtn.addEventListener("click", handleBulkActionApply);
dom.assignCoursesBtn.addEventListener("click", handleAssignCourses);
dom.sendMessageBtn.addEventListener("click", handleSendMessage);
dom.courseForm.addEventListener("submit", handleCourseSave);
dom.clearCourseFormBtn.addEventListener("click", clearCourseForm);
dom.courseListPanel.addEventListener("click", handleCourseListClick);
dom.paymentQueue.addEventListener("click", handlePaymentQueueClick);
dom.paymentQueue.addEventListener("input", handlePaymentQueueChange);
dom.paymentQueue.addEventListener("change", handlePaymentQueueChange);
dom.deviceRegistryPanel?.addEventListener("click", handleDeviceRegistryClick);
dom.messageLogPanel.addEventListener("click", handleMessageLogClick);
dom.studentPreviewModal?.addEventListener("click", handleStudentPreviewModalClick);
dom.studentPreviewOpenEditorBtn?.addEventListener("click", openStudentPreviewInEditor);
window.addEventListener("scroll", persistAdminScrollPosition, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.previewStudentId) {
    closeStudentPreview();
  }
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && state.token) {
    refreshDashboardInBackground();
  }
});
window.addEventListener("focus", () => {
  if (state.token) {
    refreshDashboardInBackground();
  }
});

bootstrap();
