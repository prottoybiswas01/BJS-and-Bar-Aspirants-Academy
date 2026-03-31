const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const APP_CONFIG = Object.freeze({
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
});

const STORAGE_KEYS = Object.freeze({
  adminToken: "ain-pathshala.adminToken",
  adminDashboardCache: "ain-pathshala.adminDashboardCache",
  adminScrollY: "ain-pathshala.adminScrollY",
});

const LOCALIZED_DIGIT_RANGES = Object.freeze([
  Object.freeze({ start: 0x09e6, end: 0x09ef }),
  Object.freeze({ start: 0x0660, end: 0x0669 }),
  Object.freeze({ start: 0x06f0, end: 0x06f9 }),
]);

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
  description: ["description", "details", "summary", "note"],
});

const ENROLLMENT_FIELD_KEYS = Object.freeze({
  id: ["id", "enrollmentId"],
  studentId: ["studentId", "studentIds", "studentID", "studentIDList"],
  courseId: ["courseId", "courseIds", "courseID", "courseIDList"],
  accessStartDate: ["accessStartDate", "startDate", "activeFrom", "accessFrom"],
  accessEndDate: ["accessEndDate", "endDate", "validUntil", "accessUntil"],
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

const REGISTRATION_FIELD_KEYS = Object.freeze({
  id: ["id", "registrationId", "requestId"],
  studentId: ["studentId", "studentID", "approvedStudentId"],
  name: ["name", "fullName", "studentName", "userName"],
  phone: ["phone", "phoneNumber", "mobile", "mobileNumber", "contact", "contactNumber", "whatsapp", "whatsappNumber"],
  email: ["email", "emailAddress", "mail", "gmail"],
  batch: ["batch", "batchName", "group", "groupName"],
  session: ["session", "sessionName", "shift"],
  password: ["password", "loginPassword", "portalPassword", "studentPassword", "passcode", "pin", "loginPin"],
  requestedCourseIds: ["requestedCourseIds", "courseIds", "courses", "requestedCourses", "requestedCourseList"],
  status: ["status", "registrationStatus", "approvalStatus"],
  submittedOn: ["submittedOn", "createdOn", "requestedOn", "appliedOn"],
  reviewedOn: ["reviewedOn", "updatedOn", "approvedOn"],
  reviewedBy: ["reviewedBy", "approvedBy", "handledBy"],
  reviewNote: ["reviewNote", "note", "remarks", "comment"],
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

const COURSE_RULE_FIELDS = Object.freeze([
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
  studentQuery: "",
  editingStudentId: "",
  editingCourseId: "",
  selectedStudentIds: new Set(),
  visibleStudentIds: [],
  bulkCourseRuleDrafts: {},
};

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
  adminAnalyticsYear: document.getElementById("adminAnalyticsYear"),
  adminAnalyticsMeta: document.getElementById("adminAnalyticsMeta"),
  adminAnalyticsChart: document.getElementById("adminAnalyticsChart"),
  adminAnalyticsHighlights: document.getElementById("adminAnalyticsHighlights"),
  adminAnalyticsYears: document.getElementById("adminAnalyticsYears"),
  studentSearchInput: document.getElementById("studentSearchInput"),
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
  courseDescriptionInput: document.getElementById("courseDescriptionInput"),
  courseFeedback: document.getElementById("courseFeedback"),
  courseListPanel: document.getElementById("courseListPanel"),
  courseCountBadge: document.getElementById("courseCountBadge"),
  registrationQueue: document.getElementById("registrationQueue"),
  messageLogPanel: document.getElementById("messageLogPanel"),
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
    registrations: [],
    messages: [],
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
      description: String(getFirstAvailableValue(course, COURSE_FIELD_KEYS.description, "")).trim(),
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
    }))
    .filter((student) => student.id)
    .sort((left, right) => left.name.localeCompare(right.name));

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

  const registrations = (payload.registrations || [])
    .map((registration) => ({
      id: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.id, "")).trim(),
      studentId: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.studentId, "")).trim(),
      name: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.name, "")).trim(),
      phone: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.phone, "")).trim(),
      email: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.email, "")).trim(),
      batch: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.batch, "")).trim(),
      session: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.session, "")).trim(),
      password: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.password, "")).trim(),
      requestedCourseIds: parseList(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.requestedCourseIds, "")),
      status: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.status, "Pending")).trim() || "Pending",
      submittedOn: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.submittedOn, "")).trim(),
      reviewedOn: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.reviewedOn, "")).trim(),
      reviewedBy: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.reviewedBy, "")).trim(),
      reviewNote: String(getFirstAvailableValue(registration, REGISTRATION_FIELD_KEYS.reviewNote, "")).trim(),
    }))
    .sort((left, right) => new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0));

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

  return {
    generatedAt: String(payload.generatedAt || "").trim(),
    spreadsheetName: String(payload.spreadsheetName || "").trim(),
    students,
    courses,
    lessons: payload.lessons || [],
    notices: payload.notices || [],
    enrollments,
    registrations,
    messages,
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
  ]
    .map((item) => normalizeLookupText(item))
    .filter(Boolean);
}

function getFilteredStudents() {
  const rawQuery = state.studentQuery.trim();
  if (!rawQuery) {
    return state.data.students;
  }

  const query = normalizeLookupText(rawQuery);
  const phoneQuery = normalizePhoneValue(rawQuery);

  return state.data.students.filter((student) => {
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
    return "";
  }

  if (fieldKey === "paidMonths") {
    return (enrollment.paidMonths || []).join("|");
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
  const baseAttributes = [
    `data-course-rule-course="${escapeHtml(courseId)}"`,
    `data-course-rule-field="${escapeHtml(field.key)}"`,
    'class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"',
  ];

  let controlMarkup = "";
  if (field.type === "select") {
    controlMarkup = `
      <select ${baseAttributes.join(" ")}>
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
      />
    `;
  }

  return `
    <label class="block ${field.wide ? "sm:col-span-2 xl:col-span-2" : ""}">
      <span class="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500">${escapeHtml(field.label)}</span>
      ${controlMarkup}
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
              : `<p class="mt-3 text-xs leading-5 text-slate-500">This course keeps its own access window, payment dates, fee, and status.</p>`
          }
          <div class="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            ${COURSE_RULE_FIELDS.map((field) => renderCourseRuleField(courseId, field, draft)).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function toggleAuthView(isLoggedIn) {
  dom.adminLoginSection.classList.toggle("hidden", isLoggedIn);
  dom.adminDashboard.classList.toggle("hidden", !isLoggedIn);
  dom.adminLogoutBtn.classList.toggle("hidden", !isLoggedIn);
}

function clearAdminSession() {
  state.token = "";
  state.admin = null;
  state.data = createEmptyDashboard();
  state.selectedStudentIds = new Set();
  state.visibleStudentIds = [];
  resetBulkCourseRuleDrafts();
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

  const validCourseIds = new Set(state.data.courses.map((course) => course.id));
  if (state.editingCourseId && !validCourseIds.has(state.editingCourseId)) {
    state.editingCourseId = "";
  }

  renderDashboard();

  const pendingRegistrationCount = state.data.registrations.filter(
    (registration) => normalizeStatus(registration.status) === "pending"
  ).length;

  if (feedbackMessage) {
    setFeedback(dom.adminTopFeedback, feedbackMessage, tone);
  } else if (pendingRegistrationCount) {
    setFeedback(
      dom.adminTopFeedback,
      `${pendingRegistrationCount} registration request${
        pendingRegistrationCount === 1 ? " is" : "s are"
      } waiting for approval in the queue.`,
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

function renderSummaryCards() {
  const pendingRegistrations = state.data.registrations.filter(
    (registration) => normalizeStatus(registration.status) === "pending"
  ).length;

  dom.summaryStudents.textContent = String(state.data.students.length);
  dom.summaryPending.textContent = String(pendingRegistrations);
  dom.summaryCourses.textContent = String(state.data.courses.length);
  dom.summaryMessages.textContent = String(state.data.messages.length);

  const adminName = state.admin?.name || state.admin?.username || "Admin";
  dom.adminWelcome.textContent = `${adminName} Dashboard`;
}

function buildAdmissionsAnalytics() {
  const datedStudents = state.data.students
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
  const pendingRegistrations = state.data.registrations.filter(
    (registration) => normalizeStatus(registration.status) === "pending"
  ).length;

  return {
    years,
    selectedYear,
    monthlyCounts,
    totalStudents,
    maxMonthlyCount,
    peakMonthIndex,
    averagePerMonth,
    latestJoinedEntry,
    pendingRegistrations,
    yearTotals,
    growthDelta,
    previousYear,
    recordsWithoutDate: Math.max(state.data.students.length - datedStudents.length, 0),
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
      ? "Student records are available, but join dates are missing. Add valid dates to unlock this view."
      : "Admissions activity will appear here once student records start coming into the live sheet.";

    dom.adminAnalyticsMeta.innerHTML = `
      <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Confirmed joins</p>
        <p class="mt-2 text-2xl font-extrabold text-cyan-100">0</p>
      </div>
      <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Busiest month</p>
        <p class="mt-2 text-2xl font-extrabold text-white">-</p>
      </div>
      <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Monthly average</p>
        <p class="mt-2 text-2xl font-extrabold text-white">0</p>
      </div>
    `;

    dom.adminAnalyticsChart.innerHTML = `
      <div class="col-span-full rounded-[1.2rem] border border-dashed border-white/15 bg-white/5 px-4 py-7 text-center text-sm leading-6 text-white/70">
        No monthly admission pattern is available yet.
      </div>
    `;

    dom.adminAnalyticsHighlights.innerHTML = `
      <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
        <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/[0.55]">Approval queue</p>
        <p class="mt-2 text-2xl font-extrabold text-white">${analytics.pendingRegistrations}</p>
      </div>
      <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3 text-sm leading-6 text-white/75">
        Keep the joined date field updated to unlock a cleaner year-wise admission review.
      </div>
    `;

    dom.adminAnalyticsYears.innerHTML = "";
    return;
  }

  const selectedYearLabel =
    analytics.selectedYear === "all" ? "all recorded cohorts" : analytics.selectedYear;
  const peakMonthLabel =
    analytics.peakMonthIndex >= 0 ? MONTH_LABELS[analytics.peakMonthIndex] : "No peak month";
  const growthLabel =
    analytics.growthDelta === null
      ? "No year-on-year comparison"
      : analytics.growthDelta === 0
      ? `Same as ${analytics.previousYear}`
      : `${analytics.growthDelta > 0 ? "+" : ""}${analytics.growthDelta} vs ${analytics.previousYear}`;

  dom.adminAnalyticsCaption.textContent = `A compact month-by-month view for ${selectedYearLabel}, tuned for faster admission review.`;

  dom.adminAnalyticsMeta.innerHTML = `
    <div class="rounded-[1.2rem] border border-cyan-300/[0.14] bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Confirmed joins</p>
      <p class="mt-2 text-2xl font-extrabold text-cyan-100">${analytics.totalStudents}</p>
      <p class="mt-1.5 text-[11px] text-white/60">${growthLabel}</p>
    </div>
    <div class="rounded-[1.2rem] border border-emerald-300/[0.14] bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Busiest month</p>
      <p class="mt-2 text-2xl font-extrabold text-white">${escapeHtml(peakMonthLabel)}</p>
      <p class="mt-1.5 text-[11px] text-white/60">${analytics.maxMonthlyCount} student${analytics.maxMonthlyCount === 1 ? "" : "s"}</p>
    </div>
    <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100/[0.55]">Monthly average</p>
      <p class="mt-2 text-2xl font-extrabold text-white">${escapeHtml(analytics.averagePerMonth)}</p>
      <p class="mt-1.5 text-[11px] text-white/60">${analytics.recordsWithoutDate ? `${analytics.recordsWithoutDate} without join date` : "All dated records included"}</p>
    </div>
  `;

  dom.adminAnalyticsChart.innerHTML = analytics.monthlyCounts
    .map((count, index) => {
      const height = analytics.maxMonthlyCount
        ? Math.max(Math.round((count / analytics.maxMonthlyCount) * 84), count ? 18 : 8)
        : 8;
      const isPeak = analytics.peakMonthIndex === index && count > 0;
      const barGradient = isPeak
        ? "linear-gradient(180deg, rgba(52,211,153,0.98) 0%, rgba(13,148,136,0.92) 100%)"
        : "linear-gradient(180deg, rgba(125,211,252,0.96) 0%, rgba(14,165,233,0.62) 100%)";

      return `
        <div class="rounded-[1.1rem] border border-white/10 bg-slate-950/[0.16] px-2 py-2.5 text-center">
          <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100/50">${MONTH_LABELS[index].slice(0, 3)}</p>
          <div class="mt-2.5 flex h-[84px] items-end justify-center rounded-[0.9rem] bg-white/[0.06] px-2 py-2">
            <div
              class="w-full rounded-[0.8rem] shadow-[0_18px_32px_-18px_rgba(8,47,73,0.7)]"
              style="height:${height}px;background:${barGradient};opacity:${count ? "1" : "0.28"}"
              title="${MONTH_LABELS[index]}: ${count} student${count === 1 ? "" : "s"}"
            ></div>
          </div>
          <p class="mt-2.5 text-base font-extrabold text-white">${count}</p>
        </div>
      `;
    })
    .join("");

  dom.adminAnalyticsHighlights.innerHTML = `
    <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/[0.55]">Latest joined</p>
      <p class="mt-2 text-lg font-extrabold text-white">${escapeHtml(
        analytics.latestJoinedEntry?.student?.name || "Not recorded"
      )}</p>
      <p class="mt-1.5 text-sm text-white/70">${escapeHtml(
        formatMonthYearLabel(analytics.latestJoinedEntry?.joinedDate)
      )}</p>
    </div>
    <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/[0.55]">Approval queue</p>
      <p class="mt-2 text-2xl font-extrabold text-white">${analytics.pendingRegistrations}</p>
      <p class="mt-1.5 text-sm text-white/70">Students currently waiting for approval.</p>
    </div>
    <div class="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-3 py-3">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/[0.55]">Current focus</p>
      <p class="mt-2 text-lg font-extrabold text-white">${escapeHtml(
        analytics.selectedYear === "all" ? "All cohorts" : analytics.selectedYear
      )}</p>
      <p class="mt-1.5 text-sm text-white/70">${escapeHtml(growthLabel)}</p>
    </div>
  `;

  dom.adminAnalyticsYears.innerHTML = [
    `
        <button
          type="button"
          data-analytics-year="all"
          class="rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
            analytics.selectedYear === "all"
              ? "border-cyan-200 bg-cyan-100 text-slate-950"
              : "border-white/15 bg-white/5 text-white hover:bg-white/10"
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
              ? "border-cyan-200 bg-cyan-100 text-slate-950"
              : "border-white/15 bg-white/5 text-white hover:bg-white/10"
          }"
        >
          ${year} <span class="ml-1 text-xs ${isActive ? "text-slate-500" : "text-white/60"}">${total}</span>
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
          </div>
          <div class="mt-4 flex flex-col gap-2 sm:flex-row">
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
    return;
  }

  renderStudentMobileList(students);

  dom.studentTableBody.innerHTML = students
    .map((student) => {
      const isSelected = state.selectedStudentIds.has(student.id);
      const courseIds = getStudentCourseIds(student);
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
          </td>
          <td class="px-3 py-4 align-top">${renderPill(student.status || "Active")}</td>
          <td class="px-3 py-4 align-top">
            <p class="font-semibold text-slate-800">${courseIds.length}</p>
            <p class="mt-1 text-xs text-slate-500">${escapeHtml(courseSummary)}</p>
          </td>
          <td class="px-3 py-4 align-top">
            <button
              type="button"
              data-edit-student="${escapeHtml(student.id)}"
              class="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Edit
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  dom.selectAllStudents.checked =
    state.visibleStudentIds.length > 0 &&
    state.visibleStudentIds.every((studentId) => state.selectedStudentIds.has(studentId));
  renderSelectionState();
}

function renderCourseList() {
  dom.courseCountBadge.textContent = String(state.data.courses.length);

  if (!state.data.courses.length) {
    dom.courseListPanel.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-white px-5 py-6 text-sm text-slate-500">No course has been created yet.</div>';
    return;
  }

  dom.courseListPanel.innerHTML = state.data.courses
    .map((course) => {
      const assignedCount = state.data.students.filter((student) => getStudentCourseIds(student).includes(course.id)).length;
      const batchSessionLabel = [
        course.batch ? `Batch: ${course.batch}` : "",
        course.session ? `Session: ${course.session}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      return `
        <div class="rounded-[1.5rem] border border-white bg-white p-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <p class="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">${escapeHtml(course.category || "Course")}</p>
              <h5 class="mt-2 break-words text-lg font-extrabold text-slate-950">${escapeHtml(course.title)}</h5>
              <p class="mt-1 break-words text-sm text-slate-500">${escapeHtml(course.faculty || "Faculty not set")}</p>
              ${
                batchSessionLabel
                  ? `<p class="mt-3 text-sm text-slate-600">${escapeHtml(batchSessionLabel)}</p>`
                  : ""
              }
              <p class="mt-3 text-sm text-slate-600">${escapeHtml(course.schedule || "Schedule pending")}</p>
              <p class="mt-2 text-xs text-slate-400">ID: ${escapeHtml(course.id)} | Students: ${assignedCount}</p>
            </div>
            <div class="flex shrink-0 gap-2">
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

function renderRegistrationQueue() {
  const pendingRegistrations = state.data.registrations.filter(
    (registration) => normalizeStatus(registration.status) === "pending"
  );

  if (!pendingRegistrations.length) {
    dom.registrationQueue.innerHTML =
      '<div class="rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-500">No pending registration is waiting for approval.</div>';
    return;
  }

  dom.registrationQueue.innerHTML = pendingRegistrations
    .map((registration) => {
      const courseTitles = registration.requestedCourseIds.length
        ? registration.requestedCourseIds
            .map((courseId) => state.data.courseMap.get(courseId)?.shortTitle || state.data.courseMap.get(courseId)?.title || courseId)
            .join(", ")
        : "No course requested";

      return `
        <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div class="min-w-0">
              <p class="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Pending Registration</p>
              <h4 class="mt-2 break-words text-lg font-extrabold text-slate-950">${escapeHtml(
                registration.name || "Unnamed Student"
              )}</h4>
              <p class="mt-1 text-sm text-slate-600">${escapeHtml(registration.phone || "-")} | ${escapeHtml(
                registration.email || "No email"
              )}</p>
              <p class="mt-2 text-xs text-slate-400">${escapeHtml(getAdminCopyValue("studentIdLabel", "Student ID"))}: ${escapeHtml(
                registration.studentId || "Will be generated"
              )} | Submitted: ${escapeHtml(formatDateTime(registration.submittedOn, "Not recorded"))}</p>
              <p class="mt-3 text-sm text-slate-600">Batch: ${escapeHtml(registration.batch || "-")} | Session: ${escapeHtml(
                registration.session || "-"
              )}</p>
              <p class="mt-2 text-sm text-slate-600">Requested Courses: ${escapeHtml(courseTitles)}</p>
            </div>
            <div class="w-full max-w-sm rounded-[1.25rem] border border-white bg-white p-4">
              <label class="mb-2 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Review Note</label>
              <textarea
                rows="3"
                data-registration-note="${escapeHtml(registration.id)}"
                class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                placeholder="Optional note for approval or rejection"
              ></textarea>
              <div class="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  data-registration-approve="${escapeHtml(registration.id)}"
                  class="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Approve
                </button>
                <button
                  type="button"
                  data-registration-reject="${escapeHtml(registration.id)}"
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

function renderDashboard() {
  renderSummaryCards();
  renderAdmissionsAnalytics();
  renderStudentTable();
  renderStudentEditor();
  renderBulkCourseSelector();
  renderCourseList();
  renderRegistrationQueue();
  renderMessageLog();

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
  dom.courseDescriptionInput.value = course.description || "";

  const submitButton = dom.courseForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Update Course";
  }
}

function normalizeCourseRuleDraftForRequest(draft = {}) {
  return {
    accessStartDate: String(draft.accessStartDate || "").trim(),
    accessEndDate: String(draft.accessEndDate || "").trim(),
    videoAccessUntil: String(draft.videoAccessUntil || "").trim(),
    lastPaymentDate: String(draft.lastPaymentDate || "").trim(),
    paymentDueDate: String(draft.paymentDueDate || "").trim(),
    monthlyFee: String(draft.monthlyFee || "").trim(),
    status: String(draft.status || "").trim(),
    paidMonths: buildPipeList(String(draft.paidMonths || "").trim()),
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
  nextDraft[fieldKey] = String(field.value || "").trim();
  state.bulkCourseRuleDrafts[courseId] = nextDraft;
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

async function handleRegistrationReview(registrationId, action) {
  const noteField = dom.registrationQueue.querySelector(`[data-registration-note="${registrationId}"]`);
  const reviewNote = noteField?.value.trim() || "";
  const endpointAction = action === "approve" ? "adminapproveregistration" : "adminrejectregistration";

  try {
    setFeedback(dom.adminTopFeedback, `${action === "approve" ? "Approving" : "Rejecting"} registration...`, "info");
    const response = await requestAction(endpointAction, {
      registrationId,
      reviewNote,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unable to update the registration.");
    }

    applyDashboardPayload(response, `Registration ${action === "approve" ? "approved" : "rejected"}.`);
  } catch (error) {
    setFeedback(dom.adminTopFeedback, error.message || "Unable to update the registration.", "error");
  }
}

function handleStudentTableClick(event) {
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

function handleRegistrationQueueClick(event) {
  const approveButton = event.target.closest("[data-registration-approve]");
  if (approveButton) {
    handleRegistrationReview(approveButton.dataset.registrationApprove, "approve");
    return;
  }

  const rejectButton = event.target.closest("[data-registration-reject]");
  if (rejectButton) {
    handleRegistrationReview(rejectButton.dataset.registrationReject, "reject");
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
dom.registrationQueue.addEventListener("click", handleRegistrationQueueClick);
dom.messageLogPanel.addEventListener("click", handleMessageLogClick);
window.addEventListener("scroll", persistAdminScrollPosition, { passive: true });

bootstrap();
