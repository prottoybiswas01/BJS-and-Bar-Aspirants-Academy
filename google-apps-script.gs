const SHEET_NAMES = {
  students: "Students",
  courses: "Courses",
  lessons: "Lessons",
  notices: "Notices",
  enrollments: "Enrollments",
  admins: "Admins",
  registrations: "Registrations",
  messages: "Messages",
  devices: "Devices",
  payments: "Payments",
};

const SPREADSHEET_ID = "1QvEuk1IL-yRZAtu8j54sNDIAHLoDUboBbxTZ6Bh4H20";

const SHEET_HEADERS = {
  students: [
    "id",
    "name",
    "phone",
    "email",
    "batch",
    "session",
    "joinedOn",
    "status",
    "profileImage",
    "password",
    "loginApproval",
    "portalAccessMode",
    "passwordResetUrl",
    "highlight",
    "enrolledCourseIds",
    "completedLessonIds",
    "maxDeviceCount",
  ],
  courses: [
    "id",
    "title",
    "shortTitle",
    "faculty",
    "category",
    "batch",
    "session",
    "schedule",
    "nextLive",
    "price",
    "description",
    "status",
  ],
  lessons: [
    "id",
    "courseId",
    "module",
    "title",
    "duration",
    "youtubeUrl",
    "releaseDate",
    "resources",
    "note",
  ],
  notices: ["id", "title", "message", "publishedOn", "status"],
  enrollments: [
    "studentId",
    "courseId",
    "accessStartDate",
    "accessEndDate",
    "videoAccessUntil",
    "lastPaymentDate",
    "paymentDueDate",
    "monthlyFee",
    "status",
    "paidMonths",
    "unlimitedAccess",
  ],
  admins: ["id", "username", "name", "email", "password", "status", "role"],
  registrations: [
    "id",
    "studentId",
    "name",
    "phone",
    "email",
    "batch",
    "session",
    "password",
    "requestedCourseIds",
    "status",
    "submittedOn",
    "reviewedOn",
    "reviewedBy",
    "reviewNote",
  ],
  messages: ["id", "studentIds", "title", "message", "status", "createdOn", "createdBy", "audience", "recipientStateJson"],
  devices: [
    "id",
    "studentId",
    "deviceId",
    "deviceName",
    "deviceFingerprint",
    "publicIp",
    "userAgent",
    "platform",
    "browserLanguage",
    "timezone",
    "screenSize",
    "clientShell",
    "displayMode",
    "referrer",
    "locationPermission",
    "latitude",
    "longitude",
    "status",
    "firstSeenOn",
    "lastSeenOn",
    "lastLoginOn",
    "sessionToken",
    "sessionExpiresAt",
    "revokedOn",
    "revokedBy",
    "note",
  ],
  payments: [
    "id",
    "studentId",
    "studentName",
    "studentPhone",
    "studentEmail",
    "courseId",
    "courseTitle",
    "amount",
    "paymentMethod",
    "paymentNumber",
    "studentTransactionId",
    "confirmedTransactionId",
    "status",
    "submittedOn",
    "reviewedOn",
    "reviewedBy",
    "paymentDate",
    "accessStartDate",
    "accessEndDate",
    "paymentDueDate",
    "approvalMode",
    "note",
    "reviewNote",
  ],
};

const APPROVED_LOGIN_VALUES = ["approved", "yes", "true", "allow", "allowed", "active", "1"];
const PREVIEW_LOGIN_VALUES = ["preview", "viewonly", "readonly", "audit", "curriculum", "classlist", "listonly", "outline"];
const UNLIMITED_ACCESS_VALUES_ = ["true", "1", "yes", "on", "enable", "enabled", "unlimited", "lifetime", "forever", "permanent"];
const BLOCKED_STATUS_VALUES = ["inactive", "blocked", "suspended", "expired", "rejected"];
const INACTIVE_COURSE_STATUS_VALUES_ = ["inactive", "disabled", "deactivated", "hidden", "draft", "archived", "blocked", "off", "false", "0"];
// Use "approved" for instant login, "preview" for class-list-only access, or "pending" for manual approval.
const SELF_REGISTRATION_ACCESS_MODE_ = "preview";
const SELF_REGISTRATION_REVIEWED_BY_ = "Self Registration";
const STUDENT_LOGIN_QUERY_LABEL_ = "registration number, student ID, phone number, or email";
const ADMIN_TOKEN_PREFIX_ = "ain-pathshala.admin-token.";
const ADMIN_TOKEN_TTL_SECONDS_ = 21600;
const STUDENT_SESSION_TTL_SECONDS_ = 2592000;
const MAX_ACTIVE_DEVICES_PER_STUDENT_ = 2;
const DEVICE_HEARTBEAT_WINDOW_MS_ = 5 * 60 * 1000;
const TRUSTED_ADMIN_DEVICE_NOTE_PREFIX_ = "Trusted admin device:";
const TRUSTED_ADMIN_DEVICE_RULES_ = Object.freeze([
  // Devices listed here can log into any student account without consuming the student's device limit.
  Object.freeze({
    label: "Main Admin Laptop",
    deviceId: "0fa5a59f-2ea5-4ebd-97ef-4bd6f0e8f85b",
  }),
]);
const SECURITY_LOCK_HIGHLIGHT_PREFIX_ = "Security lock:";
const SECURITY_LOCK_LOGIN_MESSAGE_ =
  "Security lock: the same transaction ID was used in multiple places. Contact the admin office.";
const PUBLIC_CACHE_TTL_SECONDS_ = 0;
const PUBLIC_CACHE_KEYS_ = Object.freeze({
  courses: "ain-pathshala.public-courses",
});
const LOCALIZED_DIGIT_RANGES_ = [
  Object.freeze({ start: 0x09e6, end: 0x09ef }),
  Object.freeze({ start: 0x0660, end: 0x0669 }),
  Object.freeze({ start: 0x06f0, end: 0x06f9 }),
];

const STUDENT_FIELD_KEYS_ = {
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
  maxDeviceCount: ["maxDeviceCount", "maxDevices", "deviceLimit", "allowedDevices", "approvedDeviceLimit"],
};

const COURSE_FIELD_KEYS_ = {
  id: ["id", "courseId", "courseID"],
  status: ["status", "courseStatus", "visibility", "publishStatus", "courseVisibility", "isActive"],
};

const DEVICE_FIELD_KEYS_ = {
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
  sessionToken: ["sessionToken", "studentSessionToken"],
  sessionExpiresAt: ["sessionExpiresAt", "expiresAt"],
  revokedOn: ["revokedOn"],
  revokedBy: ["revokedBy"],
  note: ["note", "remarks"],
};

const REGISTRATION_FIELD_KEYS_ = {
  id: ["id", "registrationId", "requestId"],
  studentId: ["studentId", "studentID", "approvedStudentId"],
  phone: ["phone", "phoneNumber", "mobile", "mobileNumber"],
  email: ["email", "emailAddress", "mail"],
};

const ADMIN_FIELD_KEYS_ = {
  id: ["id", "adminId"],
  username: ["username", "userName", "login", "adminLogin"],
  name: ["name", "fullName", "adminName"],
  email: ["email", "emailAddress"],
  password: ["password", "adminPassword", "loginPassword"],
  status: ["status", "accountStatus"],
  role: ["role", "adminRole"],
};

const SAMPLE_DATA = {
  students: [
    {
      id: "LAW-2026-014",
      name: "Aritra Rahman",
      phone: "01712000014",
      email: "aritra.rahman@example.com",
      batch: "Judiciary 2026",
      session: "Weekend Intensive",
      joinedOn: "2025-12-15",
      status: "Active",
      profileImage: "",
      password: "law014",
      loginApproval: "Approved",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20LAW-2026-014",
      highlight: "Preparing for judiciary exams.",
      enrolledCourseIds: "",
      completedLessonIds: "",
      maxDeviceCount: "",
    },
    {
      id: "BAR-2026-008",
      name: "Nafisa Tabassum",
      phone: "01712000008",
      email: "nafisa.tabassum@example.com",
      batch: "Bar Council 2026",
      session: "Evening Program",
      joinedOn: "2025-11-01",
      status: "Active",
      profileImage: "",
      password: "bar008",
      loginApproval: "Approved",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20BAR-2026-008",
      highlight: "Focused on bar viva and procedure.",
      enrolledCourseIds: "",
      completedLessonIds: "",
      maxDeviceCount: "",
    },
  ],
  courses: [
    {
      id: "judiciary-foundation",
      title: "Judiciary Foundation",
      shortTitle: "Judiciary",
      faculty: "Adv. Mahmudul Hasan",
      category: "Core Preparation",
      batch: "Judiciary 2026",
      session: "Weekend Intensive",
      schedule: "Sun, Tue, Thu at 8:30 PM",
      nextLive: "2026-03-14T20:30:00+06:00",
      description: "Constitution, core law topics, and MCQ preparation.",
      status: "Active",
    },
    {
      id: "criminal-procedure-mastery",
      title: "Criminal Procedure Mastery",
      shortTitle: "Criminal Procedure",
      faculty: "Barrister Samiha Karim",
      category: "Procedure Track",
      batch: "Bar Council 2026",
      session: "Evening Program",
      schedule: "Mon, Wed at 9:00 PM",
      nextLive: "2026-03-15T21:00:00+06:00",
      description: "From FIR to trial in a structured, exam-focused format.",
      status: "Active",
    },
  ],
  lessons: [
    {
      id: "jud-01",
      courseId: "judiciary-foundation",
      module: "Constitutional Framework",
      title: "State structure and court hierarchy",
      duration: "48 min",
      youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
      releaseDate: "2026-01-05",
      resources: "PDF outline|MCQ drill set",
      note: "Start here for judiciary preparation.",
    },
    {
      id: "jud-02",
      courseId: "judiciary-foundation",
      module: "Core Principles",
      title: "Natural justice and judicial review",
      duration: "44 min",
      youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      releaseDate: "2026-02-08",
      resources: "Case digest|Revision notes",
      note: "Good for revision before tests.",
    },
    {
      id: "crim-01",
      courseId: "criminal-procedure-mastery",
      module: "Investigation Flow",
      title: "From FIR to police report",
      duration: "41 min",
      youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      releaseDate: "2026-03-04",
      resources: "Flowchart|Section list",
      note: "Overview of the criminal process.",
    },
  ],
  notices: [
    {
      id: "notice-01",
      title: "Monthly Payment Reminder",
      message: "Students must clear monthly fees to unlock newly uploaded lessons.",
      publishedOn: "2026-03-12",
      status: "Published",
    },
  ],
  enrollments: [
    {
      studentId: "LAW-2026-014",
      courseId: "judiciary-foundation",
      accessStartDate: "2026-01-01",
      accessEndDate: "2026-07-31",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-15",
      paymentDueDate: "2026-04-15",
      monthlyFee: "1500",
      status: "Active",
      paidMonths: "2026-01|2026-03",
    },
    {
      studentId: "LAW-2026-014",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-10",
      accessEndDate: "2026-08-10",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-15",
      paymentDueDate: "2026-04-15",
      monthlyFee: "1500",
      status: "Active",
      paidMonths: "2026-03",
    },
    {
      studentId: "BAR-2026-008",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-01",
      accessEndDate: "2026-07-01",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-07",
      paymentDueDate: "2026-04-07",
      monthlyFee: "1500",
      status: "Active",
      paidMonths: "2026-02|2026-03",
    },
  ],
  admins: [
    {
      id: "admin-01",
      username: "admin",
      name: "Portal Admin",
      email: "support@ainpathshala.com",
      password: "admin123",
      status: "Active",
      role: "Super Admin",
    },
  ],
  registrations: [],
  messages: [],
  payments: [],
};

function doGet(e) {
  try {
    const request = parseRequest_(e);
    const action = normalizeValue_(request.action);
    const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
    syncPortalLinkedData_(spreadsheet);

    if (action === "status") {
      return jsonOutput_(buildStatusPayload_(spreadsheet));
    }

    if (action === "courses" || action === "publiccourses") {
      return jsonOutput_(buildCachedCourseCatalogPayload_(spreadsheet));
    }

    const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
    const visibleCourses = getVisibleCoursesForStudents_(
      readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
    );
    const visibleCourseLookup = buildCourseIdLookup_(visibleCourses);

    return jsonOutput_({
      ok: true,
      generatedAt: new Date().toISOString(),
      spreadsheetId: spreadsheet.getId(),
      spreadsheetName: spreadsheet.getName(),
      students: sanitizeStudents_(students),
      courses: visibleCourses,
      lessons: filterRowsByCourseLookup_(
        readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
        visibleCourseLookup,
        getRecordCourseId_
      ),
      notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
      enrollments: filterRowsByCourseLookup_(
        readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
        visibleCourseLookup,
        getRecordCourseId_
      ),
    });
  } catch (error) {
    return errorOutput_(error);
  }
}

function doPost(e) {
  try {
    const request = parseRequest_(e);
    const action = normalizeValue_(request.action);
    const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
    syncPortalLinkedData_(spreadsheet);

    if (action === "login") return handleLogin_(request);
    if (action === "adminlogin") return handleAdminLogin_(request);
    if (action === "registerstudent") return handleStudentRegistration_(request);
    if (action === "requeststudentcourses") return handleStudentCourseRequest_(request);
    if (action === "studentsubmitpayment") return handleStudentSubmitPayment_(request);
    if (action === "studentgetinbox") return handleStudentGetInbox_(request);
    if (action === "studentgetpayments") return handleStudentGetPayments_(request);
    if (action === "studentvalidate") return handleStudentValidate_(request);
    if (action === "studentlogoutdevice") return handleStudentLogoutDevice_(request);
    if (action === "admingetdashboard") return handleAdminGetDashboard_(request);
    if (action === "adminlogoutdevice") return handleAdminLogoutDevice_(request);
    if (action === "adminupdatestudent") return handleAdminUpdateStudent_(request);
    if (action === "adminbulkstudentaction") return handleAdminBulkStudentAction_(request);
    if (action === "adminassigncourses") return handleAdminAssignCourses_(request);
    if (action === "admincreatecourse") return handleAdminCreateCourse_(request);
    if (action === "admindeletecourse") return handleAdminDeleteCourse_(request);
    if (action === "adminremovedevice") return handleAdminRemoveDevice_(request);
    if (action === "admindeletedevice") return handleAdminDeleteDevice_(request);
    if (action === "adminapproveregistration") return handleAdminApproveRegistration_(request);
    if (action === "adminrejectregistration") return handleAdminRejectRegistration_(request);
    if (action === "adminreviewpayment") return handleAdminReviewPayment_(request);
    if (action === "adminsendmessage") return handleAdminSendMessage_(request);
    if (action === "admindeletemessage") return handleAdminDeleteMessage_(request);
    if (action === "studentrespondmessage") return handleStudentRespondMessage_(request);

    return jsonOutput_({
      ok: false,
      message: "Unsupported request action.",
    });
  } catch (error) {
    return errorOutput_(error);
  }
}

function setupLawPortalSheets() {
  const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
  syncPortalLinkedData_(spreadsheet);

  return buildStatusPayload_(spreadsheet);
}

function runPortalAutomation() {
  const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
  const processedPayments = syncPortalLinkedData_(spreadsheet);

  return jsonOutput_({
    ok: true,
    message: "Portal automation finished.",
    processedPayments: processedPayments,
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
  });
}

function handlePortalAutomationEditTrigger(e) {
  const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
  syncPortalLinkedData_(spreadsheet);
}

function handlePortalAutomationChangeTrigger(e) {
  const spreadsheet = ensurePortalSheets_(getSpreadsheet_());
  syncPortalLinkedData_(spreadsheet);
}

function installPortalAutomationTriggers() {
  const spreadsheet = getSpreadsheet_();
  const handlerNames = [
    "handlePortalAutomationEditTrigger",
    "handlePortalAutomationChangeTrigger",
  ];

  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (handlerNames.indexOf(trigger.getHandlerFunction()) !== -1) {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger("handlePortalAutomationEditTrigger")
    .forSpreadsheet(spreadsheet.getId())
    .onEdit()
    .create();

  ScriptApp.newTrigger("handlePortalAutomationChangeTrigger")
    .forSpreadsheet(spreadsheet.getId())
    .onChange()
    .create();

  return jsonOutput_({
    ok: true,
    message: "Installable spreadsheet triggers created successfully.",
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
  });
}

function seedLawPortalDemoData() {
  const spreadsheet = getSpreadsheet_();
  const result = {};

  Object.keys(SHEET_NAMES).forEach(function (key) {
    const sheet = ensureSheetWithHeaders_(spreadsheet, SHEET_NAMES[key], SHEET_HEADERS[key] || []);
    result[SHEET_NAMES[key]] = seedSheetIfEmpty_(sheet, SHEET_HEADERS[key] || [], SAMPLE_DATA[key] || []);
  });

  return jsonOutput_({
    ok: true,
    message: "Sample data inserted into empty sheets only.",
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    seeded: result,
  });
}

function handleLogin_(request) {
  const query = String(request.query || "").trim();
  const password = normalizePasswordValue_(request.password);

  if (!query) {
    return jsonOutput_({ ok: false, message: "A " + STUDENT_LOGIN_QUERY_LABEL_ + " is required." });
  }

  if (!password) {
    return jsonOutput_({ ok: false, message: "Password is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
  let student = findStudentForLogin_(spreadsheet, students, query);

  if (!student) {
    return jsonOutput_({ ok: false, message: "No matching student was found." });
  }

  const initialAccessState = getStudentLoginAccessState_(spreadsheet, student);
  if (initialAccessState.approvalStatus === "rejected" || initialAccessState.approvalStatus === "inactive") {
    return buildDeniedLoginResponse_(student, initialAccessState);
  }

  const storedPassword = getStudentPassword_(student);
  if (!storedPassword) {
    return jsonOutput_({
      ok: false,
      approved: false,
      studentId: getStudentId_(student),
      message: "Password has not been set for this student yet.",
    });
  }

  if (storedPassword !== password) {
    return jsonOutput_({
      ok: false,
      approved: true,
      studentId: getStudentId_(student),
      message: "Incorrect password.",
    });
  }

  if (!isLoginApproved_(student)) {
    const activatedStudent = activateSelfRegisteredStudentIfAllowed_(spreadsheet, student);
    if (activatedStudent) {
      student = activatedStudent;
    }
  }

  const finalAccessState = getStudentLoginAccessState_(spreadsheet, student);
  if (finalAccessState.approvalStatus !== "approved") {
    return buildDeniedLoginResponse_(student, finalAccessState);
  }

  const deviceLoginResult = registerStudentLoginDevice_(spreadsheet, student, request);
  if (!deviceLoginResult.ok) {
    return jsonOutput_({
      ok: false,
      approved: true,
      studentId: getStudentId_(student),
      deviceLimitReached: !!deviceLoginResult.deviceLimitReached,
      maxDevices: Number(deviceLoginResult.maxDevices || getStudentMaxDeviceCount_(student)),
      activeDevices: sanitizeStudentDevices_(deviceLoginResult.activeDevices || []),
      message: deviceLoginResult.message || "This device could not be approved for login.",
    });
  }

  const previewOnly = isPreviewAccessStudent_(student) || isSecurityLockedStudent_(student);
  const securityLocked = isSecurityLockedStudent_(student);
  const notices = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices));
  const courses = getVisibleCoursesForStudents_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
  );
  const visibleCourseLookup = buildCourseIdLookup_(courses);
  const lessons = filterRowsByCourseLookup_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    visibleCourseLookup,
    getRecordCourseId_
  );
  const enrollments = filterRowsByCourseLookup_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
    visibleCourseLookup,
    getRecordCourseId_
  );
  const studentId = getStudentId_(student);
  const inboxMessages = getStudentInboxMessages_(spreadsheet, studentId);
  const relatedPayments = getStudentPayments_(spreadsheet, studentId, visibleCourseLookup);
  const relatedEnrollments = enrollments.filter(function (enrollment) {
    return String(enrollment.studentId || "").trim() === studentId;
  });
  const relatedCourseIds = parseStringList_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.enrolledCourseIds, ""))
    .concat(
      relatedEnrollments.map(function (enrollment) {
        return String(enrollment.courseId || "").trim();
      })
    )
    .filter(Boolean)
    .filter(function (courseId, index, list) {
      return list.indexOf(courseId) === index;
    });

  return jsonOutput_({
    ok: true,
    approved: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    sessionToken: deviceLoginResult.sessionToken,
    maxDevices: Number(deviceLoginResult.maxDevices || getStudentMaxDeviceCount_(student)),
    activeDevices: sanitizeStudentDevices_(deviceLoginResult.activeDevices || []),
    previewOnly: previewOnly,
    studentId: studentId,
    students: sanitizeStudents_([student]),
    courses: courses,
    lessons: lessons,
    notices: notices,
    enrollments: relatedEnrollments,
    messages: inboxMessages,
    payments: relatedPayments,
    message: securityLocked
      ? getStudentSecurityLockMessage_(student, SECURITY_LOCK_LOGIN_MESSAGE_)
      : previewOnly
      ? "Preview access approved."
      : "Login approved.",
  });
}

function handleAdminLogin_(request) {
  const query = String(request.username || request.query || request.email || "").trim();
  const password = normalizePasswordValue_(request.password);

  if (!query || !password) {
    return jsonOutput_({ ok: false, message: "Admin username/email and password are required." });
  }

  const spreadsheet = getSpreadsheet_();
  const adminsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.admins);
  const admins = ensureDefaultAdminIfMissing_(adminsData);
  const admin = getAdminByQuery_(admins, query);

  if (!admin) {
    return jsonOutput_({ ok: false, message: "No matching admin account was found." });
  }

  if (normalizeValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.status, "Active")) !== "active") {
    return jsonOutput_({ ok: false, message: "This admin account is inactive." });
  }

  if (normalizePasswordValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.password, "")) !== password) {
    return jsonOutput_({ ok: false, message: "Incorrect admin password." });
  }

  const token = putAdminSession_(sanitizeAdmin_(admin));

  return jsonOutput_({
    ok: true,
    message: "Admin login approved.",
    token: token,
    admin: sanitizeAdmin_(admin),
  });
}

function handleStudentRegistration_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  const courses = getVisibleCoursesForStudents_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
  );
  const selfRegistrationAccess = buildSelfRegistrationAccessState_();

  const requestedCourses = buildCourseIdList_(request.requestedCourseIds || request.courseIds || "", courses);
  const name = String(request.name || "").trim();
  const phone = normalizePhoneLookupValue_(request.phone);
  const email = String(request.email || "").trim();
  const batch = String(request.batch || "Pending Batch").trim();
  const session = String(request.session || "Pending Session").trim();
  const password = normalizePasswordValue_(request.password);

  if (!name || !phone || !password) {
    return jsonOutput_({
      ok: false,
      message: "Name, phone number, and password are required for registration.",
    });
  }

  const duplicateStudent = studentsData.records.find(function (student) {
    return (
      (phone && normalizePhoneLookupValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "")) === phone) ||
      (email && normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "")) === normalizeValue_(email))
    );
  });

  if (duplicateStudent && isLoginApproved_(duplicateStudent)) {
    return jsonOutput_({
      ok: false,
      message: "A student account with this phone or email already exists.",
    });
  }

  const duplicateRegistration = registrationsData.records.find(function (registration) {
    return (
      normalizeValue_(registration.status) === "pending" &&
      ((phone && normalizePhoneLookupValue_(registration.phone) === phone) ||
        (email && normalizeValue_(registration.email) === normalizeValue_(email)))
    );
  });

  if (duplicateRegistration) {
    return jsonOutput_({
      ok: false,
      message: "A pending registration already exists for this phone or email.",
    });
  }

  const studentId = duplicateStudent ? getStudentId_(duplicateStudent) : generateStudentId_(studentsData.records);
  const registrationId = generateRegistrationId_(registrationsData.records);
  const today = getTodayIso_();
  const note = buildSelfRegistrationHighlight_(requestedCourses, selfRegistrationAccess);
  const reviewedOn = normalizeValue_(selfRegistrationAccess.registrationStatus) === "pending" ? "" : getNowIso_();

  const nextStudent = Object.assign(
    {
      id: studentId,
      name: name,
      phone: phone,
      email: email,
      batch: batch,
      session: session,
      joinedOn: today,
      status: selfRegistrationAccess.studentStatus,
      profileImage: "",
      password: password,
      loginApproval: selfRegistrationAccess.loginApproval,
      portalAccessMode: selfRegistrationAccess.portalAccessMode,
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20" +
        encodeURIComponent(studentId),
      highlight: note,
      enrolledCourseIds: buildPipeList_(requestedCourses),
      completedLessonIds: "",
    },
    duplicateStudent || {}
  );

  nextStudent.id = studentId;
  nextStudent.name = name;
  nextStudent.phone = phone;
  nextStudent.email = email;
  nextStudent.batch = batch;
  nextStudent.session = session;
  nextStudent.status = selfRegistrationAccess.studentStatus;
  nextStudent.password = password;
  nextStudent.loginApproval = selfRegistrationAccess.loginApproval;
  nextStudent.portalAccessMode = selfRegistrationAccess.portalAccessMode;
  nextStudent.highlight = note;
  nextStudent.enrolledCourseIds = buildPipeList_(requestedCourses);
  nextStudent.joinedOn = nextStudent.joinedOn || today;

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records
      .filter(function (student) {
        return getStudentId_(student) !== studentId;
      })
      .concat([nextStudent])
  );

  writeSheetEntries_(
    registrationsData.sheet,
    registrationsData.headers,
    registrationsData.records.concat([
      {
        id: registrationId,
        studentId: studentId,
        name: name,
        phone: phone,
        email: email,
        batch: batch,
        session: session,
        password: password,
        requestedCourseIds: buildPipeList_(requestedCourses),
        status: selfRegistrationAccess.registrationStatus,
        submittedOn: getNowIso_(),
        reviewedOn: reviewedOn,
        reviewedBy: reviewedOn ? selfRegistrationAccess.reviewedBy : "",
        reviewNote: reviewedOn ? selfRegistrationAccess.reviewNote : "",
      },
    ])
  );

  appendSystemMessage_(spreadsheet, {
    studentIds: buildPipeList_([studentId]),
    title: "New Registration Request",
    message: buildRegistrationAlertMessage_(studentId, name, batch, session, requestedCourses, courses),
    status: "Sent",
    createdBy: "System",
  });

  return jsonOutput_({
    ok: true,
    message: selfRegistrationAccess.responseMessage,
    loginReady: normalizeValue_(selfRegistrationAccess.loginApproval) !== "pending",
    previewOnly: !!selfRegistrationAccess.portalAccessMode,
    studentId: studentId,
    registrationId: registrationId,
  });
}

function handleStudentCourseRequest_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  const courses = getVisibleCoursesForStudents_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
  );
  const studentId = String(request.studentId || "").trim();

  if (!studentId) {
    return jsonOutput_({
      ok: false,
      message: "Student ID is required for a course request.",
    });
  }

  const sessionValidation = validateStudentDeviceSession_(spreadsheet, request);
  if (!sessionValidation.ok) {
    return jsonOutput_(sessionValidation);
  }

  const student = studentsData.records.find(function (entry) {
    return getStudentId_(entry) === studentId;
  });
  if (!student) {
    return jsonOutput_({
      ok: false,
      message: "Student account was not found.",
    });
  }

  const requestedCourseIds = buildCourseIdList_(
    request.requestedCourseIds || request.courseIds || request.courseId || "",
    courses
  );
  if (!requestedCourseIds.length) {
    return jsonOutput_({
      ok: false,
      message: "Select at least one live course before sending a request.",
    });
  }

  const assignedCourseIds = getStudentAssignedCourseIds_(spreadsheet, student);
  const newCourseIds = requestedCourseIds.filter(function (courseId) {
    return assignedCourseIds.indexOf(courseId) === -1;
  });
  if (!newCourseIds.length) {
    return jsonOutput_({
      ok: false,
      message: "These course requests are already active for this student.",
    });
  }

  const pendingRegistrationIndex = registrationsData.records.findIndex(function (registration) {
    return (
      normalizeValue_(registration.status) === "pending" &&
      String(registration.studentId || "").trim() === studentId
    );
  });

  const studentName = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.name, "Student")).trim();
  const studentBatch = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.batch, "-")).trim();
  const studentSession = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.session, "-")).trim();
  const studentPhone = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "")).trim();
  const studentEmail = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "")).trim();
  const studentPassword = normalizePasswordValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.password, ""));
  let registrationId = "";
  let mergedRequestedCourseIds = [];

  if (pendingRegistrationIndex !== -1) {
    const pendingRegistration = registrationsData.records[pendingRegistrationIndex] || {};
    registrationId = String(pendingRegistration.id || "").trim();
    mergedRequestedCourseIds = parseStringList_(pendingRegistration.requestedCourseIds || "").concat(newCourseIds);
    mergedRequestedCourseIds = mergedRequestedCourseIds.filter(function (courseId, index, list) {
      return list.indexOf(courseId) === index;
    });

    writeSheetEntries_(
      registrationsData.sheet,
      registrationsData.headers,
      registrationsData.records.map(function (entry, index) {
        if (index !== pendingRegistrationIndex) {
          return entry;
        }

        const nextEntry = Object.assign({}, entry);
        nextEntry.studentId = studentId;
        nextEntry.name = studentName;
        nextEntry.phone = studentPhone;
        nextEntry.email = studentEmail;
        nextEntry.batch = studentBatch;
        nextEntry.session = studentSession;
        nextEntry.password = studentPassword;
        nextEntry.requestedCourseIds = buildPipeList_(mergedRequestedCourseIds);
        nextEntry.submittedOn = getNowIso_();
        return nextEntry;
      })
    );
  } else {
    registrationId = generateRegistrationId_(registrationsData.records);
    mergedRequestedCourseIds = newCourseIds.slice();

    writeSheetEntries_(
      registrationsData.sheet,
      registrationsData.headers,
      registrationsData.records.concat([
        {
          id: registrationId,
          studentId: studentId,
          name: studentName,
          phone: studentPhone,
          email: studentEmail,
          batch: studentBatch,
          session: studentSession,
          password: studentPassword,
          requestedCourseIds: buildPipeList_(mergedRequestedCourseIds),
          status: "Pending",
          submittedOn: getNowIso_(),
          reviewedOn: "",
          reviewedBy: "",
          reviewNote: "",
        },
      ])
    );
  }

  appendSystemMessage_(spreadsheet, {
    studentIds: buildPipeList_([studentId]),
    title: "New Course Access Request",
    message: buildCourseRequestAlertMessage_(
      studentId,
      studentName,
      studentBatch,
      studentSession,
      newCourseIds,
      courses
    ),
    status: "Sent",
    createdBy: "Student Portal",
  });

  return jsonOutput_({
    ok: true,
    message:
      newCourseIds.length === 1
        ? "Course request sent to the admin queue."
        : "Course requests sent to the admin queue.",
    registrationId: registrationId,
    requestedCourseIds: buildPipeList_(mergedRequestedCourseIds),
  });
}

function handleStudentSubmitPayment_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const paymentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.payments);
  const courses = getVisibleCoursesForStudents_(
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
  );
  const studentId = String(request.studentId || "").trim();
  const courseId = String(request.courseId || "").trim();
  const transactionId = String(request.transactionId || request.studentTransactionId || "").trim();
  const note = String(request.note || "").trim();

  if (!studentId) {
    return jsonOutput_({ ok: false, message: "Student ID is required for payment submission." });
  }

  if (!courseId) {
    return jsonOutput_({ ok: false, message: "Course ID is required for payment submission." });
  }

  if (!transactionId) {
    return jsonOutput_({ ok: false, message: "Transaction ID is required for payment submission." });
  }

  const sessionValidation = validateStudentDeviceSession_(spreadsheet, request);
  if (!sessionValidation.ok) {
    return jsonOutput_(sessionValidation);
  }

  const student = studentsData.records.find(function (entry) {
    return getStudentId_(entry) === studentId;
  });
  if (!student) {
    return jsonOutput_({ ok: false, message: "Student account was not found." });
  }

  if (BLOCKED_STATUS_VALUES.indexOf(normalizeValue_(getStudentStatus_(student))) !== -1) {
    return jsonOutput_({
      ok: true,
      blocked: true,
      message: getStudentSecurityLockMessage_(
        student,
        "This student account is blocked. Contact the admin office before submitting another payment."
      ),
      payments: getStudentPayments_(spreadsheet, studentId),
    });
  }

  const course = courses.find(function (entry) {
    return String(entry.id || entry.courseId || "").trim() === courseId;
  });
  if (!course) {
    return jsonOutput_({ ok: false, message: "This course is not active right now." });
  }

  const hasPendingPayment = paymentsData.records.some(function (payment) {
    return (
      String(payment.studentId || "").trim() === studentId &&
      String(payment.courseId || "").trim() === courseId &&
      isPendingPaymentStatus_(payment.status || "")
    );
  });
  if (hasPendingPayment) {
    return jsonOutput_({
      ok: true,
      pendingReview: true,
      alreadyPending: true,
      message:
        "Your payment request is already in the review queue. Please wait a little while. The course will activate automatically after confirmation.",
      payments: getStudentPayments_(spreadsheet, studentId),
    });
  }

  const nextPayment = {
    id: Utilities.getUuid(),
    studentId: studentId,
    studentName: String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.name, "Student")).trim(),
    studentPhone: String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "")).trim(),
    studentEmail: String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "")).trim(),
    courseId: courseId,
    courseTitle: String(course.title || course.shortTitle || courseId).trim(),
    amount: String(course.price || course.fee || course.courseFee || "").trim(),
    paymentMethod: "bKash Send Money",
    paymentNumber: "01975341714",
    studentTransactionId: transactionId,
    confirmedTransactionId: "",
    status: "Pending",
    submittedOn: getNowIso_(),
    reviewedOn: "",
    reviewedBy: "",
    paymentDate: "",
    accessStartDate: "",
    accessEndDate: "",
    paymentDueDate: "",
    approvalMode: "",
    note: note,
    reviewNote: "",
  };

  const duplicatePayments = getPaymentsByTransactionId_(paymentsData.records.concat([nextPayment]), transactionId);
  if (duplicatePayments.length > 1) {
    nextPayment.reviewNote = buildDuplicateTransactionSecurityReviewNote_();
  }

  writeSheetEntries_(paymentsData.sheet, paymentsData.headers, paymentsData.records.concat([nextPayment]));

  const duplicateLockResult = applyDuplicateTransactionSecurityLock_(
    spreadsheet,
    paymentsData.records.concat([nextPayment]),
    transactionId
  );

  if (duplicateLockResult.duplicateDetected) {
    return jsonOutput_({
      ok: true,
      blocked: true,
      pendingReview: false,
      alreadyPending: false,
      message: SECURITY_LOCK_LOGIN_MESSAGE_,
      paymentId: nextPayment.id,
      studentId: studentId,
      payments: getStudentPayments_(spreadsheet, studentId),
    });
  }

  appendSystemMessage_(spreadsheet, {
    studentIds: buildPipeList_([studentId]),
    title: "New Payment Submission",
    message:
      nextPayment.studentName +
      " submitted a payment for " +
      nextPayment.courseTitle +
      ". Student ID: " +
      studentId +
      ". Submitted transaction ID: " +
      transactionId +
      ". Review it from the payment queue.",
    status: "Sent",
    createdBy: "Student Portal",
  });

  return jsonOutput_({
    ok: true,
    pendingReview: true,
    alreadyPending: false,
    message:
      "Payment submitted successfully. Please wait a little while. Your course will activate automatically after the transaction is confirmed.",
    paymentId: nextPayment.id,
    studentId: studentId,
    payments: getStudentPayments_(spreadsheet, studentId),
  });
}

function handleStudentGetInbox_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentId = String(request.studentId || "").trim();

  if (!studentId) {
    return jsonOutput_({
      ok: false,
      message: "Student ID is required to load inbox messages.",
    });
  }

  const sessionValidation = validateStudentDeviceSession_(spreadsheet, request);
  if (!sessionValidation.ok) {
    return jsonOutput_(sessionValidation);
  }

  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
  const matchedStudent = students.find(function (student) {
    return getStudentId_(student) === studentId;
  });

  if (!matchedStudent) {
    return jsonOutput_({
      ok: false,
      message: "Student account was not found.",
    });
  }

  return jsonOutput_({
    ok: true,
    messages: getStudentInboxMessages_(spreadsheet, studentId),
  });
}

function handleStudentGetPayments_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentId = String(request.studentId || "").trim();

  if (!studentId) {
    return jsonOutput_({
      ok: false,
      message: "Student ID is required to load payment history.",
    });
  }

  const sessionValidation = validateStudentDeviceSession_(spreadsheet, request);
  if (!sessionValidation.ok) {
    return jsonOutput_(sessionValidation);
  }

  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
  const matchedStudent = students.find(function (student) {
    return getStudentId_(student) === studentId;
  });

  if (!matchedStudent) {
    return jsonOutput_({
      ok: false,
      message: "Student account was not found.",
    });
  }

  return jsonOutput_({
    ok: true,
    payments: getStudentPayments_(spreadsheet, studentId),
  });
}

function handleStudentValidate_(request) {
  const spreadsheet = getSpreadsheet_();
  const validation = validateStudentDeviceSession_(spreadsheet, request);
  if (!validation.ok) {
    return jsonOutput_(validation);
  }

  return jsonOutput_({
    ok: true,
    message: "Device session is active.",
    device: sanitizeStudentDevice_(validation.device || {}),
  });
}

function handleStudentLogoutDevice_(request) {
  const spreadsheet = getSpreadsheet_();
  const studentId = String(request.studentId || "").trim();
  const sessionToken = String(request.sessionToken || request.token || "").trim();
  const deviceId = String(request.deviceId || "").trim();

  if (!studentId || !sessionToken || !deviceId) {
    return jsonOutput_({
      ok: true,
      message: "Student device session cleared locally.",
    });
  }

  const devicesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.devices);
  const deviceIndex = devicesData.records.findIndex(function (device) {
    return (
      getDeviceStudentId_(device) === studentId &&
      getDeviceIdValue_(device) === deviceId &&
      getDeviceSessionToken_(device) === sessionToken
    );
  });

  if (deviceIndex === -1) {
    return jsonOutput_({
      ok: true,
      message: "Student device session cleared locally.",
    });
  }

  const nextDevices = devicesData.records.slice();
  nextDevices[deviceIndex] = revokeStudentDeviceRecord_(
    nextDevices[deviceIndex],
    studentId,
    "Student logged out from this device.",
    "Logged Out"
  );
  writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);

  return jsonOutput_({
    ok: true,
    message: "Device logged out successfully.",
  });
}

function buildSelfRegistrationAccessState_() {
  const mode = normalizeValue_(SELF_REGISTRATION_ACCESS_MODE_);

  if (mode === "pending") {
    return {
      studentStatus: "Pending",
      loginApproval: "Pending",
      portalAccessMode: "",
      registrationStatus: "Pending",
      reviewedBy: "",
      reviewNote: "",
      responseMessage: "Registration submitted. Wait for admin approval.",
    };
  }

  if (PREVIEW_LOGIN_VALUES.indexOf(mode) !== -1) {
    return {
      studentStatus: "Active",
      loginApproval: "Approved",
      portalAccessMode: "Preview",
      registrationStatus: "Pending",
      reviewedBy: "",
      reviewNote: "",
      responseMessage: "Registration submitted. Preview access is ready now. Videos will unlock after admin approval.",
    };
  }

  return {
    studentStatus: "Active",
    loginApproval: "Approved",
    portalAccessMode: "",
    registrationStatus: "Approved",
    reviewedBy: SELF_REGISTRATION_REVIEWED_BY_,
    reviewNote: "Approved automatically from self registration.",
    responseMessage: "Registration submitted. Login is ready now.",
  };
}

function buildSelfRegistrationHighlight_(requestedCourses, accessState) {
  if (!requestedCourses.length) {
    return normalizeValue_(accessState.registrationStatus) === "pending"
      ? "Registered online. Course selection pending admin review."
      : "Registered online. Login is active. Course selection is still pending.";
  }

  if (accessState.portalAccessMode) {
    return "Registered online. Preview access activated automatically. Full video access is waiting for admin approval.";
  }

  return normalizeValue_(accessState.registrationStatus) === "pending"
    ? "Registered online and waiting for admin approval."
    : "Registered online. Login activated automatically.";
}

function buildRegistrationAlertMessage_(studentId, name, batch, session, requestedCourseIds, courses) {
  const courseLookup = {};
  (courses || []).forEach(function (course) {
    const courseId = String(course.id || course.courseId || "").trim();
    if (courseId) {
      courseLookup[courseId] = String(course.shortTitle || course.title || courseId).trim();
    }
  });

  const requestedCourseLabels = (requestedCourseIds || [])
    .map(function (courseId) {
      return courseLookup[courseId] || courseId;
    })
    .filter(Boolean);
  const requestedCourseText = requestedCourseLabels.length ? requestedCourseLabels.join(", ") : "No course requested";

  return (
    "Student " +
    String(name || "Unknown Student").trim() +
    " submitted a new registration request. Student ID: " +
    String(studentId || "-").trim() +
    ". Batch: " +
    String(batch || "-").trim() +
    ". Session: " +
    String(session || "-").trim() +
    ". Requested courses: " +
    requestedCourseText +
    ". Review this request from the registration queue."
  );
}

function buildCourseRequestAlertMessage_(studentId, name, batch, session, requestedCourseIds, courses) {
  const courseLookup = {};
  (courses || []).forEach(function (course) {
    const courseId = String(course.id || course.courseId || "").trim();
    if (courseId) {
      courseLookup[courseId] = String(course.shortTitle || course.title || courseId).trim();
    }
  });

  const requestedCourseLabels = (requestedCourseIds || [])
    .map(function (courseId) {
      return courseLookup[courseId] || courseId;
    })
    .filter(Boolean);

  return (
    String(name || "A student").trim() +
    " requested additional course access from the student portal. Student ID: " +
    String(studentId || "-").trim() +
    ". Batch: " +
    String(batch || "-").trim() +
    ". Session: " +
    String(session || "-").trim() +
    ". Requested courses: " +
    (requestedCourseLabels.length ? requestedCourseLabels.join(", ") : "No course requested") +
    ". Review this request from the registration queue."
  );
}

function getMessageAudience_(message) {
  const explicitAudience = normalizeValue_(message.audience || message.visibility || message.channel || "");
  if (explicitAudience) {
    return explicitAudience === "student" ? "student" : "admin";
  }

  const createdBy = normalizeValue_(message.createdBy || "");
  if (createdBy === "system" || createdBy === "student portal") {
    return "admin";
  }

  return "student";
}

function buildMessageRecipientState_(studentIds) {
  return parseStringList_(studentIds).reduce(function (result, studentId) {
    result[studentId] = {
      status: "Pending",
      reply: "",
      respondedOn: "",
      respondedBy: "",
    };
    return result;
  }, {});
}

function parseMessageRecipientState_(value, studentIds) {
  const parsed = parseJsonField_(value);
  const recipientState =
    parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};

  parseStringList_(studentIds).forEach(function (studentId) {
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

function serializeMessageRecipientState_(recipientState) {
  try {
    return JSON.stringify(recipientState || {});
  } catch (error) {
    return "{}";
  }
}

function buildMessageAggregateStatus_(recipientState) {
  const statuses = Object.keys(recipientState || {}).map(function (studentId) {
    return normalizeValue_((recipientState[studentId] || {}).status || "pending");
  });

  if (!statuses.length) {
    return "Sent";
  }

  const pendingCount = statuses.filter(function (status) {
    return !status || status === "pending" || status === "sent";
  }).length;
  const repliedCount = statuses.filter(function (status) {
    return status === "replied";
  }).length;
  const skippedCount = statuses.filter(function (status) {
    return status === "skipped";
  }).length;

  if (!pendingCount && repliedCount && !skippedCount) {
    return "Replied";
  }

  if (!pendingCount && skippedCount && !repliedCount) {
    return "Skipped";
  }

  if (!pendingCount) {
    return "Completed";
  }

  if (repliedCount) {
    return "Replies Received";
  }

  return "Sent";
}

function getStudentInboxMessages_(spreadsheet, studentId) {
  if (!spreadsheet || !studentId) {
    return [];
  }

  return readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.messages))
    .filter(function (message) {
      return (
        getMessageAudience_(message) === "student" &&
        parseStringList_(message.studentIds || "").indexOf(studentId) !== -1
      );
    })
    .map(function (message) {
      const targetedStudentIds = parseStringList_(message.studentIds || "");
      const recipientState = parseMessageRecipientState_(
        message.recipientStateJson || message.recipientState || "",
        targetedStudentIds
      );

      return Object.assign({}, message, {
        audience: "Student",
        status: buildMessageAggregateStatus_(recipientState),
        recipientStateJson: serializeMessageRecipientState_(recipientState),
      });
    })
    .sort(function (left, right) {
      return new Date(right.createdOn || 0) - new Date(left.createdOn || 0);
    });
}

function getStudentPayments_(spreadsheet, studentId, courseLookup) {
  if (!spreadsheet || !studentId) {
    return [];
  }

  const activeCourseLookup = courseLookup || buildCourseIdLookup_(
    getVisibleCoursesForStudents_(
      readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
    )
  );

  return readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.payments))
    .filter(function (payment) {
      return (
        String(payment.studentId || "").trim() === studentId &&
        !!activeCourseLookup[String(payment.courseId || "").trim()]
      );
    })
    .sort(function (left, right) {
      return new Date(right.submittedOn || 0) - new Date(left.submittedOn || 0);
    });
}

function getCourseId_(course) {
  return String(getFirstAvailableValue_(course || {}, COURSE_FIELD_KEYS_.id, "")).trim();
}

function getCourseStatus_(course) {
  return String(getFirstAvailableValue_(course || {}, COURSE_FIELD_KEYS_.status, "Active")).trim() || "Active";
}

function normalizeCourseStatusLabel_(value) {
  return INACTIVE_COURSE_STATUS_VALUES_.indexOf(normalizeValue_(value)) !== -1 ? "Inactive" : "Active";
}

function isCourseVisibleToStudents_(course) {
  return INACTIVE_COURSE_STATUS_VALUES_.indexOf(normalizeValue_(getCourseStatus_(course))) === -1;
}

function getVisibleCoursesForStudents_(courses) {
  return (courses || []).filter(function (course) {
    return getCourseId_(course) && isCourseVisibleToStudents_(course);
  });
}

function buildCourseIdLookup_(courses) {
  return (courses || []).reduce(function (result, course) {
    const courseId = getCourseId_(course);
    if (courseId) {
      result[courseId] = true;
    }
    return result;
  }, {});
}

function getRecordCourseId_(record) {
  return String((record && (record.courseId || record.courseID || "")) || "").trim();
}

function filterRowsByCourseLookup_(records, courseLookup, extractor) {
  return (records || []).filter(function (record) {
    const courseId = String(
      (typeof extractor === "function" ? extractor(record) : getRecordCourseId_(record)) || ""
    ).trim();
    return !!courseId && !!courseLookup[courseId];
  });
}

function buildStudentDevicePayloadFromRequest_(request) {
  const userAgent = String(request.userAgent || "").trim();
  const displayMode = normalizeDeviceDisplayModeLabel_(
    request.displayMode || request.launchMode || request.presentationMode || ""
  );
  const referrer = String(request.referrer || request.documentReferrer || request.launchReferrer || "").trim();
  const platform = normalizeDevicePlatformLabel_(request.platform || "", userAgent);
  const clientShell = normalizeDeviceClientShellLabel_(request.clientShell || request.appShell || request.shell || "", {
    userAgent: userAgent,
    referrer: referrer,
    displayMode: displayMode,
  });
  const deviceName = String(request.deviceName || request.deviceLabel || "").trim();

  return {
    deviceId: String(request.deviceId || request.clientDeviceId || "").trim(),
    deviceName: deviceName || (clientShell !== "Browser" ? clientShell + " on " + platform : "Unknown Device"),
    deviceFingerprint: String(request.deviceFingerprint || request.fingerprint || "").trim(),
    publicIp: String(request.publicIp || request.ip || "").trim(),
    userAgent: userAgent,
    platform: platform,
    browserLanguage: String(request.browserLanguage || request.language || "").trim(),
    timezone: String(request.timezone || request.timeZone || "").trim(),
    screenSize: String(request.screenSize || request.screen || request.viewport || "").trim(),
    clientShell: clientShell,
    displayMode: displayMode,
    referrer: referrer,
    locationPermission: normalizeDeviceLocationPermissionStatus_(request.locationPermission || ""),
    latitude: String(request.latitude || request.lat || "").trim(),
    longitude: String(request.longitude || request.lng || request.lon || "").trim(),
  };
}

function normalizeDevicePlatformLabel_(value, userAgent) {
  const explicitValue = String(value || "").trim();
  const source = (explicitValue + " " + String(userAgent || "").trim()).trim();
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
  return explicitValue || "Device";
}

function normalizeDeviceDisplayModeLabel_(value) {
  const normalized = normalizeValue_(value);
  if (!normalized || normalized === "browser") {
    return "browser";
  }
  if (normalized === "minimalui" || normalized === "minimal-ui") {
    return "minimal-ui";
  }
  if (normalized === "windowcontrolsoverlay" || normalized === "window-controls-overlay") {
    return "window-controls-overlay";
  }
  if (normalized === "fullscreen" || normalized === "standalone") {
    return normalized;
  }
  return String(value || "").trim() || "browser";
}

function normalizeDeviceClientShellLabel_(value, context) {
  const normalized = normalizeValue_(value);
  if (normalized === "androidwebview" || normalized === "webview") {
    return "Android WebView";
  }
  if (normalized === "trustedwebactivity" || normalized === "twa") {
    return "Trusted Web Activity";
  }
  if (normalized === "standaloneapp" || normalized === "standalone" || normalized === "pwa") {
    return "Standalone App";
  }
  if (normalized === "embeddedapp" || normalized === "inappbrowser" || normalized === "inapp") {
    return "Embedded App";
  }
  if (normalized === "browser") {
    return "Browser";
  }

  const userAgent = normalizeValue_((context && context.userAgent) || "");
  const referrer = String((context && context.referrer) || "").trim();
  const displayMode = normalizeValue_((context && context.displayMode) || "");
  if (/^android-app:\/\//i.test(referrer)) {
    return "Trusted Web Activity";
  }
  if (userAgent && userAgent.indexOf("android") !== -1 && userAgent.indexOf("wv") !== -1) {
    return "Android WebView";
  }
  if (displayMode && displayMode !== "browser") {
    return "Standalone App";
  }
  if (
    userAgent &&
    ["fban", "fbav", "instagram", "line/", "tiktok", "gsa/", "linkedinapp", "snapchat"].some(function (token) {
      return userAgent.indexOf(token) !== -1;
    })
  ) {
    return "Embedded App";
  }

  return String(value || "").trim() || "Browser";
}

function normalizeDeviceLocationPermissionStatus_(value) {
  const normalized = normalizeValue_(value);
  if (normalized === "granted" || normalized === "allowed") {
    return "Granted";
  }
  if (normalized === "denied" || normalized === "blocked") {
    return "Denied";
  }
  if (normalized === "prompt") {
    return "Prompt";
  }
  if (normalized === "unsupported") {
    return "Unsupported";
  }
  return normalized ? "Unknown" : "Not Requested";
}

function doesTrustedAdminDeviceRuleMatch_(rule, deviceInfo) {
  if (!rule || !deviceInfo) {
    return false;
  }

  const checks = [
    hasProvidedValue_(rule.deviceId) ? normalizeValue_(rule.deviceId) === normalizeValue_(deviceInfo.deviceId) : null,
    hasProvidedValue_(rule.deviceFingerprint)
      ? normalizeValue_(rule.deviceFingerprint) === normalizeValue_(deviceInfo.deviceFingerprint)
      : null,
    hasProvidedValue_(rule.publicIp) ? normalizeValue_(rule.publicIp) === normalizeValue_(deviceInfo.publicIp) : null,
  ].filter(function (value) {
    return value !== null;
  });

  return checks.length > 0 && checks.every(Boolean);
}

function findTrustedAdminDeviceRule_(request) {
  const deviceInfo = buildStudentDevicePayloadFromRequest_(request || {});
  return (
    TRUSTED_ADMIN_DEVICE_RULES_.find(function (rule) {
      return doesTrustedAdminDeviceRuleMatch_(rule, deviceInfo);
    }) || null
  );
}

function buildTrustedAdminDeviceNote_(rule) {
  return TRUSTED_ADMIN_DEVICE_NOTE_PREFIX_ + " " + String((rule && rule.label) || "Admin override").trim();
}

function isTrustedAdminDeviceRecord_(device) {
  const note = String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.note, "")).trim();
  return note.indexOf(TRUSTED_ADMIN_DEVICE_NOTE_PREFIX_) === 0;
}

function applyTrustedAdminDeviceNoteToRecord_(record, trustedRule) {
  const nextRecord = Object.assign({}, record || {});
  if (trustedRule) {
    nextRecord.note = buildTrustedAdminDeviceNote_(trustedRule);
    return nextRecord;
  }

  if (isTrustedAdminDeviceRecord_(nextRecord)) {
    nextRecord.note = "";
  }

  return nextRecord;
}

function getDeviceRecordId_(device) {
  return String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.id, "")).trim();
}

function getDeviceStudentId_(device) {
  return String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.studentId, "")).trim();
}

function getDeviceIdValue_(device) {
  return String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.deviceId, "")).trim();
}

function getDeviceStatus_(device) {
  return String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.status, "Active")).trim() || "Active";
}

function normalizeDeviceStatusLabel_(value) {
  const normalized = normalizeValue_(value);
  if (normalized === "revoked" || normalized === "removed" || normalized === "blocked") {
    return "Revoked";
  }
  if (
    normalized === "loggedout" ||
    normalized === "logged out" ||
    normalized === "logout" ||
    normalized === "signedout" ||
    normalized === "signed out"
  ) {
    return "Logged Out";
  }
  if (normalized === "expired") {
    return "Expired";
  }
  return "Active";
}

function isActiveDeviceRecord_(device) {
  return normalizeDeviceStatusLabel_(getDeviceStatus_(device)) === "Active";
}

function getDeviceSessionToken_(device) {
  return String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.sessionToken, "")).trim();
}

function getDeviceSessionExpiryTimestamp_(device) {
  const rawValue = String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.sessionExpiresAt, "")).trim();
  const parsed = Number(rawValue);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  const directDate = new Date(rawValue);
  return Number.isNaN(directDate.getTime()) ? 0 : directDate.getTime();
}

function isStudentDeviceSessionExpired_(device) {
  const expiresAt = getDeviceSessionExpiryTimestamp_(device);
  return !expiresAt || expiresAt <= Date.now();
}

function sanitizeStudentDevice_(device) {
  const copy = Object.assign({}, device || {});
  DEVICE_FIELD_KEYS_.sessionToken.forEach(function (key) {
    delete copy[key];
  });
  return copy;
}

function sanitizeStudentDevices_(devices) {
  return (devices || []).map(sanitizeStudentDevice_);
}

function buildDeviceRegistryDisplayName_(device) {
  const deviceName = String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.deviceName, "")).trim();
  const publicIp = String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.publicIp, "")).trim();
  const clientShell = String(getFirstAvailableValue_(device || {}, DEVICE_FIELD_KEYS_.clientShell, "")).trim();
  return deviceName || (publicIp ? "IP " + publicIp : clientShell || "Unknown Device");
}

function getStudentDeviceRecords_(spreadsheet, studentId) {
  if (!spreadsheet || !studentId) {
    return [];
  }

  return readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.devices)).filter(function (device) {
    return getDeviceStudentId_(device) === studentId;
  });
}

function getStudentActiveDeviceRecords_(devices, studentId, options) {
  const includeTrustedAdminDevices = !!(options && options.includeTrustedAdminDevices);
  return (devices || [])
    .filter(function (device) {
      return (
        getDeviceStudentId_(device) === studentId &&
        isActiveDeviceRecord_(device) &&
        !isStudentDeviceSessionExpired_(device) &&
        (includeTrustedAdminDevices || !isTrustedAdminDeviceRecord_(device))
      );
    })
    .sort(function (left, right) {
      return new Date(right.lastSeenOn || right.lastLoginOn || 0) - new Date(left.lastSeenOn || left.lastLoginOn || 0);
    });
}

function findLatestStudentDeviceIndex_(devices, studentId, deviceId) {
  for (let index = (devices || []).length - 1; index >= 0; index -= 1) {
    const device = devices[index] || {};
    if (getDeviceStudentId_(device) === studentId && getDeviceIdValue_(device) === deviceId) {
      return index;
    }
  }

  return -1;
}

function buildDeviceLimitExceededMessage_(devices, maxDevices) {
  const allowedDeviceCount = Math.max(1, Number(maxDevices || MAX_ACTIVE_DEVICES_PER_STUDENT_));
  const labels = (devices || [])
    .slice(0, allowedDeviceCount)
    .map(function (device) {
      return buildDeviceRegistryDisplayName_(device);
    })
    .filter(Boolean);

  return (
    "This account is already active on " +
    allowedDeviceCount +
    " devices. Remove one approved device or log out an older device before continuing. " +
    (labels.length ? "Active devices: " + labels.join(", ") + "." : "")
  );
}

function buildStudentDeviceRecord_(studentId, deviceInfo, sessionToken, overrides) {
  const nowIso = getNowIso_();
  const sessionExpiresAt = Date.now() + STUDENT_SESSION_TTL_SECONDS_ * 1000;
  const nextRecord = Object.assign(
    {
      id: Utilities.getUuid(),
      studentId: studentId,
      deviceId: deviceInfo.deviceId,
      deviceName: deviceInfo.deviceName,
      deviceFingerprint: deviceInfo.deviceFingerprint,
      publicIp: deviceInfo.publicIp,
      userAgent: deviceInfo.userAgent,
      platform: deviceInfo.platform,
      browserLanguage: deviceInfo.browserLanguage,
      timezone: deviceInfo.timezone,
      screenSize: deviceInfo.screenSize,
      clientShell: deviceInfo.clientShell,
      displayMode: deviceInfo.displayMode,
      referrer: deviceInfo.referrer,
      locationPermission: deviceInfo.locationPermission,
      latitude: deviceInfo.latitude,
      longitude: deviceInfo.longitude,
      status: "Active",
      firstSeenOn: nowIso,
      lastSeenOn: nowIso,
      lastLoginOn: nowIso,
      sessionToken: sessionToken,
      sessionExpiresAt: String(sessionExpiresAt),
      revokedOn: "",
      revokedBy: "",
      note: "",
    },
    overrides || {}
  );

  nextRecord.studentId = studentId;
  nextRecord.deviceId = deviceInfo.deviceId;
  nextRecord.deviceName = deviceInfo.deviceName || nextRecord.deviceName || "Unknown Device";
  nextRecord.deviceFingerprint = deviceInfo.deviceFingerprint || nextRecord.deviceFingerprint || "";
  nextRecord.publicIp = deviceInfo.publicIp || nextRecord.publicIp || "";
  nextRecord.userAgent = deviceInfo.userAgent || nextRecord.userAgent || "";
  nextRecord.platform = deviceInfo.platform || nextRecord.platform || "";
  nextRecord.browserLanguage = deviceInfo.browserLanguage || nextRecord.browserLanguage || "";
  nextRecord.timezone = deviceInfo.timezone || nextRecord.timezone || "";
  nextRecord.screenSize = deviceInfo.screenSize || nextRecord.screenSize || "";
  nextRecord.clientShell = deviceInfo.clientShell || nextRecord.clientShell || "Browser";
  nextRecord.displayMode = deviceInfo.displayMode || nextRecord.displayMode || "browser";
  nextRecord.referrer = deviceInfo.referrer || nextRecord.referrer || "";
  nextRecord.locationPermission = deviceInfo.locationPermission || nextRecord.locationPermission || "Not Requested";
  nextRecord.latitude = deviceInfo.latitude || nextRecord.latitude || "";
  nextRecord.longitude = deviceInfo.longitude || nextRecord.longitude || "";
  nextRecord.status = "Active";
  nextRecord.lastSeenOn = nowIso;
  nextRecord.lastLoginOn = nowIso;
  nextRecord.sessionToken = sessionToken;
  nextRecord.sessionExpiresAt = String(sessionExpiresAt);
  nextRecord.revokedOn = "";
  nextRecord.revokedBy = "";

  if (!String(nextRecord.firstSeenOn || "").trim()) {
    nextRecord.firstSeenOn = nowIso;
  }

  return nextRecord;
}

function revokeStudentDeviceRecord_(record, revokedBy, note, status) {
  const nextRecord = Object.assign({}, record || {});
  nextRecord.status = normalizeDeviceStatusLabel_(status || "Revoked");
  nextRecord.revokedOn = getNowIso_();
  nextRecord.revokedBy = String(revokedBy || "").trim();
  nextRecord.note = String(note || nextRecord.note || "").trim();
  nextRecord.sessionToken = "";
  nextRecord.sessionExpiresAt = "";
  return nextRecord;
}

function registerStudentLoginDevice_(spreadsheet, student, request) {
  const studentId = getStudentId_(student);
  const maxDevices = getStudentMaxDeviceCount_(student);
  const deviceInfo = buildStudentDevicePayloadFromRequest_(request);
  const trustedAdminRule = findTrustedAdminDeviceRule_(request);
  if (!studentId) {
    return {
      ok: false,
      message: "Student ID is missing for device registration.",
      activeDevices: [],
      maxDevices: maxDevices,
    };
  }

  if (!deviceInfo.deviceId) {
    return {
      ok: false,
      message: "Device verification is required for login. Please refresh the page and try again.",
      activeDevices: [],
      maxDevices: maxDevices,
    };
  }

  const devicesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.devices);
  const studentDevices = devicesData.records.filter(function (device) {
    return getDeviceStudentId_(device) === studentId;
  });
  const activeDevices = getStudentActiveDeviceRecords_(studentDevices, studentId);
  const existingDeviceIndex = findLatestStudentDeviceIndex_(devicesData.records, studentId, deviceInfo.deviceId);
  const existingDeviceRecord = existingDeviceIndex === -1 ? null : devicesData.records[existingDeviceIndex] || null;
  const existingDeviceAlreadyActive =
    !!existingDeviceRecord &&
    isActiveDeviceRecord_(existingDeviceRecord) &&
    !isStudentDeviceSessionExpired_(existingDeviceRecord);
  const replaceDeviceId = String(request.replaceDeviceId || "").trim();
  const replaceOldestDevice = normalizeValue_(request.replaceOldestDevice || "") === "true";
  let nextDevices = devicesData.records.slice();

  if (!trustedAdminRule && !existingDeviceAlreadyActive && activeDevices.length >= maxDevices) {
    let targetDevice = null;
    if (replaceDeviceId) {
      targetDevice = activeDevices.find(function (device) {
        return getDeviceIdValue_(device) === replaceDeviceId;
      }) || null;
    }

    if (!targetDevice && replaceOldestDevice) {
      targetDevice = activeDevices[activeDevices.length - 1] || null;
    }

    if (!targetDevice) {
      return {
        ok: false,
        message: buildDeviceLimitExceededMessage_(activeDevices, maxDevices),
        activeDevices: activeDevices,
        deviceLimitReached: true,
        maxDevices: maxDevices,
      };
    }

    const targetIndex = findLatestStudentDeviceIndex_(
      nextDevices,
      studentId,
      getDeviceIdValue_(targetDevice)
    );
    if (targetIndex !== -1) {
      nextDevices[targetIndex] = revokeStudentDeviceRecord_(
        nextDevices[targetIndex],
        "Auto Device Replace",
        "Removed automatically to allow a new approved device.",
        "Revoked"
      );
    }
  }

  const sessionToken = Utilities.getUuid();
  let nextRecord = null;
  if (existingDeviceIndex !== -1) {
    nextRecord = buildStudentDeviceRecord_(
      studentId,
      deviceInfo,
      sessionToken,
      nextDevices[existingDeviceIndex]
    );
    nextDevices[existingDeviceIndex] = applyTrustedAdminDeviceNoteToRecord_(nextRecord, trustedAdminRule);
  } else {
    nextRecord = buildStudentDeviceRecord_(studentId, deviceInfo, sessionToken);
    nextDevices.push(applyTrustedAdminDeviceNoteToRecord_(nextRecord, trustedAdminRule));
  }

  writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);

  return {
    ok: true,
    sessionToken: sessionToken,
    activeDevices: getStudentActiveDeviceRecords_(nextDevices, studentId),
    maxDevices: maxDevices,
  };
}

function buildStudentSessionErrorResult_(message) {
  return {
    ok: false,
    message: String(message || "This device session is no longer active. Please log in again.").trim(),
    requiresLogout: true,
  };
}

function shouldRefreshDeviceHeartbeat_(device, request) {
  const lastSeen = new Date(String(device.lastSeenOn || device.lastLoginOn || "")).getTime();
  if (!lastSeen || Number.isNaN(lastSeen)) {
    return true;
  }

  const requestIp = String(request.publicIp || request.ip || "").trim();
  if (requestIp && requestIp !== String(device.publicIp || "").trim()) {
    return true;
  }

  return Date.now() - lastSeen >= DEVICE_HEARTBEAT_WINDOW_MS_;
}

function validateStudentDeviceSession_(spreadsheet, request) {
  const studentId = String(request.studentId || "").trim();
  const sessionToken = String(request.sessionToken || request.token || "").trim();
  const deviceInfo = buildStudentDevicePayloadFromRequest_(request);

  if (!studentId || !sessionToken || !deviceInfo.deviceId) {
    return buildStudentSessionErrorResult_("Device session data is missing. Please log in again.");
  }

  const devicesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.devices);
  const deviceIndex = devicesData.records.findIndex(function (device) {
    return (
      getDeviceStudentId_(device) === studentId &&
      getDeviceIdValue_(device) === deviceInfo.deviceId &&
      getDeviceSessionToken_(device) === sessionToken
    );
  });

  if (deviceIndex === -1) {
    return buildStudentSessionErrorResult_("This device is no longer approved for this account.");
  }

  const matchedDevice = devicesData.records[deviceIndex] || {};
  if (!isActiveDeviceRecord_(matchedDevice)) {
    return buildStudentSessionErrorResult_("This device was removed from the approved device list.");
  }

  if (isStudentDeviceSessionExpired_(matchedDevice)) {
    const nextDevices = devicesData.records.slice();
    nextDevices[deviceIndex] = revokeStudentDeviceRecord_(
      matchedDevice,
      "System",
      "Student device session expired automatically.",
      "Expired"
    );
    writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);
    return buildStudentSessionErrorResult_("Your device session expired. Please log in again.");
  }

  if (shouldRefreshDeviceHeartbeat_(matchedDevice, deviceInfo)) {
    const nextDevices = devicesData.records.slice();
    nextDevices[deviceIndex] = buildStudentDeviceRecord_(
      studentId,
      deviceInfo,
      sessionToken,
      matchedDevice
    );
    nextDevices[deviceIndex].firstSeenOn = String(matchedDevice.firstSeenOn || nextDevices[deviceIndex].firstSeenOn).trim();
    nextDevices[deviceIndex].lastLoginOn = String(matchedDevice.lastLoginOn || nextDevices[deviceIndex].lastLoginOn).trim();
    writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);
    return {
      ok: true,
      device: nextDevices[deviceIndex],
    };
  }

  return {
    ok: true,
    device: matchedDevice,
  };
}

function normalizePaymentTransactionId_(value) {
  return normalizeLookupText_(value).replace(/\s+/g, "").trim().toLowerCase();
}

function isSecurityLockHighlight_(value) {
  return String(value || "").trim().indexOf(SECURITY_LOCK_HIGHLIGHT_PREFIX_) === 0;
}

function getStudentSecurityLockMessage_(student, fallback) {
  const highlight = String(getFirstAvailableValue_(student || {}, STUDENT_FIELD_KEYS_.highlight, "")).trim();
  return isSecurityLockHighlight_(highlight) ? highlight : String(fallback || "").trim();
}

function isSecurityLockedStudent_(student) {
  if (!student) {
    return false;
  }

  const studentStatus = normalizeValue_(getStudentStatus_(student));
  return (studentStatus === "blocked" || studentStatus === "suspended") &&
    isSecurityLockHighlight_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.highlight, ""));
}

function buildDuplicateTransactionSecurityHighlight_() {
  return SECURITY_LOCK_LOGIN_MESSAGE_;
}

function buildDuplicateTransactionSecurityReviewNote_() {
  return "Duplicate transaction ID detected. Related student accounts were blocked automatically.";
}

function getPaymentsByTransactionId_(payments, transactionId) {
  const normalizedTransactionId = normalizePaymentTransactionId_(transactionId);
  if (!normalizedTransactionId) {
    return [];
  }

  return (payments || []).filter(function (payment) {
    return normalizePaymentTransactionId_(payment.studentTransactionId || "") === normalizedTransactionId;
  });
}

function buildDuplicateTransactionAlertMessage_(transactionId, matchedPayments, blockedStudents) {
  const studentLabels = (blockedStudents || [])
    .map(function (student) {
      const studentId = getStudentId_(student);
      const studentName = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.name, "Student")).trim();
      return studentId ? studentName + " (" + studentId + ")" : studentName;
    })
    .filter(Boolean);
  const courseLabels = (matchedPayments || [])
    .map(function (payment) {
      return String(payment.courseTitle || payment.courseId || "").trim();
    })
    .filter(Boolean)
    .filter(function (label, index, list) {
      return list.indexOf(label) === index;
    });

  return (
    "Duplicate payment transaction ID detected. Transaction ID: " +
    String(transactionId || "-").trim() +
    ". Related student accounts were blocked automatically: " +
    (studentLabels.length ? studentLabels.join(", ") : "No linked student found") +
    ". Related course submissions: " +
    (courseLabels.length ? courseLabels.join(", ") : "Not available") +
    ". Review the payment sheet before restoring access."
  );
}

function applyDuplicateTransactionSecurityLock_(spreadsheet, payments, transactionId) {
  const matchedPayments = getPaymentsByTransactionId_(payments, transactionId);
  if (matchedPayments.length < 2) {
    return {
      duplicateDetected: false,
      blockedStudentIds: [],
      blockedStudents: [],
    };
  }

  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const studentLookup = buildStudentLookupMaps_(studentsData.records);
  const blockedStudentIds = matchedPayments
    .map(function (payment) {
      const linkedStudent = resolveLinkedStudentRecord_(
        studentLookup,
        payment.studentId || "",
        payment.studentPhone || "",
        payment.studentEmail || ""
      );
      return linkedStudent ? getStudentId_(linkedStudent) : String(payment.studentId || "").trim();
    })
    .filter(Boolean)
    .filter(function (studentId, index, list) {
      return list.indexOf(studentId) === index;
    });

  if (!blockedStudentIds.length) {
    return {
      duplicateDetected: true,
      blockedStudentIds: [],
      blockedStudents: [],
    };
  }

  const securityHighlight = buildDuplicateTransactionSecurityHighlight_();
  let hasStudentChanges = false;
  const nextStudents = studentsData.records.map(function (student) {
    const studentId = getStudentId_(student);
    if (blockedStudentIds.indexOf(studentId) === -1) {
      return student;
    }

    const nextStudent = Object.assign({}, student);
    nextStudent.status = "Blocked";
    nextStudent.portalAccessMode = "";
    nextStudent.highlight = securityHighlight;

    if (hasRecordChangesForHeaders_(student, nextStudent, studentsData.headers)) {
      hasStudentChanges = true;
      return nextStudent;
    }

    return student;
  });

  if (hasStudentChanges) {
    writeSheetEntries_(studentsData.sheet, studentsData.headers, nextStudents);
  }

  const blockedStudents = nextStudents.filter(function (student) {
    return blockedStudentIds.indexOf(getStudentId_(student)) !== -1;
  });

  appendSystemMessage_(spreadsheet, {
    title: "Duplicate Transaction ID Detected",
    message: buildDuplicateTransactionAlertMessage_(transactionId, matchedPayments, blockedStudents),
    status: "Sent",
    createdBy: "Security Lock",
    audience: "Admin",
  });

  syncLatestRegistrationReviewsForStudents_(spreadsheet, blockedStudents, {
    username: "Security Lock",
    name: "Security Lock",
    id: "Security Lock",
  });

  return {
    duplicateDetected: true,
    blockedStudentIds: blockedStudentIds,
    blockedStudents: blockedStudents,
  };
}

function buildDuplicateTransactionStudentLookup_(payments, students) {
  const studentLookup = buildStudentLookupMaps_(students || []);
  const paymentGroups = {};

  (payments || []).forEach(function (payment) {
    const normalizedTransactionId = normalizePaymentTransactionId_(payment.studentTransactionId || "");
    if (!normalizedTransactionId) {
      return;
    }

    if (!paymentGroups[normalizedTransactionId]) {
      paymentGroups[normalizedTransactionId] = [];
    }

    paymentGroups[normalizedTransactionId].push(payment);
  });

  return Object.keys(paymentGroups).reduce(function (result, transactionId) {
    const groupedPayments = paymentGroups[transactionId] || [];
    if (groupedPayments.length < 2) {
      return result;
    }

    groupedPayments.forEach(function (payment) {
      const matchedStudent = resolveLinkedStudentRecord_(
        studentLookup,
        payment.studentId || "",
        payment.studentPhone || "",
        payment.studentEmail || ""
      );
      const studentId = matchedStudent ? getStudentId_(matchedStudent) : String(payment.studentId || "").trim();
      if (studentId) {
        result[studentId] = true;
      }
    });

    return result;
  }, {});
}

function releaseResolvedDuplicateTransactionSecurityLocks_(spreadsheet, students, payments) {
  if (!spreadsheet) {
    return [];
  }

  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const sourceStudents = Array.isArray(students) && students.length ? students : studentsData.records;
  const lockedStudents = sourceStudents.filter(function (student) {
    return isSecurityLockHighlight_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.highlight, ""));
  });

  if (!lockedStudents.length) {
    return [];
  }

  const duplicateStudentLookup = buildDuplicateTransactionStudentLookup_(payments, sourceStudents);
  let hasChanges = false;
  const restoredStudents = [];
  const nextStudents = studentsData.records.map(function (student) {
    const studentId = getStudentId_(student);
    const highlight = String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.highlight, "")).trim();
    if (!studentId || !isSecurityLockHighlight_(highlight) || duplicateStudentLookup[studentId]) {
      return student;
    }

    const nextStudent = Object.assign({}, student);
    const normalizedStatus = normalizeValue_(nextStudent.status || "");
    if (
      normalizedStatus === "blocked" ||
      normalizedStatus === "suspended" ||
      normalizedStatus === "inactive"
    ) {
      nextStudent.status = "Active";
    }
    nextStudent.highlight = "";

    if (hasRecordChangesForHeaders_(student, nextStudent, studentsData.headers)) {
      hasChanges = true;
      restoredStudents.push(nextStudent);
      return nextStudent;
    }

    return student;
  });

  if (!hasChanges) {
    return [];
  }

  writeSheetEntries_(studentsData.sheet, studentsData.headers, nextStudents);
  syncLatestRegistrationReviewsForStudents_(spreadsheet, restoredStudents, {
    username: "Security Lock Auto Release",
    name: "Security Lock Auto Release",
    id: "Security Lock Auto Release",
  });
  return restoredStudents;
}

function syncPortalLinkedData_(spreadsheet) {
  if (!spreadsheet) {
    return 0;
  }

  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const coursesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.courses);
  syncLinkedRegistrations_(spreadsheet, studentsData.records);
  syncLinkedPayments_(spreadsheet, studentsData.records, coursesData.records);
  const syncedStudents = readSheet_(studentsData.sheet);
  const syncedPayments = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.payments));
  releaseResolvedDuplicateTransactionSecurityLocks_(spreadsheet, syncedStudents, syncedPayments);
  return processAutoMatchedPayments_(
    spreadsheet,
    readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students))
  );
}

function syncLinkedRegistrations_(spreadsheet, students) {
  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  if (!registrationsData.records.length) {
    return;
  }

  const studentLookup = buildStudentLookupMaps_(students);
  let hasChanges = false;
  const nextRegistrations = registrationsData.records.map(function (registration) {
    const matchedStudent = resolveLinkedStudentRecord_(
      studentLookup,
      registration.studentId || "",
      registration.phone || "",
      registration.email || ""
    );

    if (!matchedStudent) {
      return registration;
    }

    const nextRegistration = Object.assign({}, registration);
    nextRegistration.studentId = getStudentId_(matchedStudent) || String(nextRegistration.studentId || "").trim();
    nextRegistration.name = String(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.name, nextRegistration.name || "")
    ).trim();
    nextRegistration.phone = normalizePhoneLookupValue_(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.phone, nextRegistration.phone || "")
    );
    nextRegistration.email = String(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.email, nextRegistration.email || "")
    ).trim();
    nextRegistration.batch = String(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.batch, nextRegistration.batch || "")
    ).trim();
    nextRegistration.session = String(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.session, nextRegistration.session || "")
    ).trim();
    nextRegistration.password = normalizePasswordValue_(
      getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.password, nextRegistration.password || "")
    );

    if (hasRecordChangesForHeaders_(registration, nextRegistration, registrationsData.headers)) {
      hasChanges = true;
      return nextRegistration;
    }

    return registration;
  });

  if (hasChanges) {
    writeSheetEntries_(registrationsData.sheet, registrationsData.headers, nextRegistrations);
  }
}

function syncLinkedPayments_(spreadsheet, students, courses) {
  const paymentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.payments);
  if (!paymentsData.records.length) {
    return;
  }

  const studentLookup = buildStudentLookupMaps_(students);
  const courseLookup = buildCourseLookupMap_(courses);
  let hasChanges = false;
  const nextPayments = paymentsData.records.map(function (payment) {
    const matchedStudent = resolveLinkedStudentRecord_(
      studentLookup,
      payment.studentId || "",
      payment.studentPhone || "",
      payment.studentEmail || ""
    );
    const matchedCourse = courseLookup[String(payment.courseId || "").trim()] || null;
    const nextPayment = Object.assign({}, payment);

    if (matchedStudent) {
      nextPayment.studentId = getStudentId_(matchedStudent) || String(nextPayment.studentId || "").trim();
      nextPayment.studentName = String(
        getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.name, nextPayment.studentName || "")
      ).trim();
      nextPayment.studentPhone = normalizePhoneLookupValue_(
        getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.phone, nextPayment.studentPhone || "")
      );
      nextPayment.studentEmail = String(
        getFirstAvailableValue_(matchedStudent, STUDENT_FIELD_KEYS_.email, nextPayment.studentEmail || "")
      ).trim();
    }

    if (matchedCourse) {
      const liveCourseTitle = String(matchedCourse.title || matchedCourse.shortTitle || nextPayment.courseId || "").trim();
      const liveCourseAmount = String(
        matchedCourse.price || matchedCourse.fee || matchedCourse.courseFee || matchedCourse.amount || ""
      ).trim();

      if (liveCourseTitle) {
        nextPayment.courseTitle = liveCourseTitle;
      }
      if (liveCourseAmount) {
        nextPayment.amount = liveCourseAmount;
      }
    }

    nextPayment.paymentMethod = String(nextPayment.paymentMethod || "bKash Send Money").trim() || "bKash Send Money";
    nextPayment.paymentNumber = String(nextPayment.paymentNumber || "01975341714").trim() || "01975341714";

    if (hasRecordChangesForHeaders_(payment, nextPayment, paymentsData.headers)) {
      hasChanges = true;
      return nextPayment;
    }

    return payment;
  });

  if (hasChanges) {
    writeSheetEntries_(paymentsData.sheet, paymentsData.headers, nextPayments);
  }
}

function buildStudentLookupMaps_(students) {
  return (students || []).reduce(
    function (result, student) {
      const studentId = getStudentId_(student);
      const studentPhone = normalizePhoneLookupValue_(
        getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "")
      );
      const studentEmail = normalizeValue_(
        getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "")
      );

      if (studentId && !result.byId[studentId]) {
        result.byId[studentId] = student;
      }
      if (studentPhone && !result.byPhone[studentPhone]) {
        result.byPhone[studentPhone] = student;
      }
      if (studentEmail && !result.byEmail[studentEmail]) {
        result.byEmail[studentEmail] = student;
      }

      return result;
    },
    { byId: {}, byPhone: {}, byEmail: {} }
  );
}

function resolveLinkedStudentRecord_(studentLookup, studentId, phone, email) {
  const normalizedStudentId = String(studentId || "").trim();
  if (normalizedStudentId && studentLookup.byId[normalizedStudentId]) {
    return studentLookup.byId[normalizedStudentId];
  }

  const normalizedPhone = normalizePhoneLookupValue_(phone);
  if (normalizedPhone && studentLookup.byPhone[normalizedPhone]) {
    return studentLookup.byPhone[normalizedPhone];
  }

  const normalizedEmail = normalizeValue_(email);
  if (normalizedEmail && studentLookup.byEmail[normalizedEmail]) {
    return studentLookup.byEmail[normalizedEmail];
  }

  return null;
}

function buildCourseLookupMap_(courses) {
  return (courses || []).reduce(function (result, course) {
    const courseId = String(course.id || course.courseId || "").trim();
    if (courseId && !result[courseId]) {
      result[courseId] = course;
    }
    return result;
  }, {});
}

function hasRecordChangesForHeaders_(currentRecord, nextRecord, headers) {
  return (headers || []).some(function (header) {
    return serializeRowValue_(currentRecord[header]) !== serializeRowValue_(nextRecord[header]);
  });
}

function processAutoMatchedPayments_(spreadsheet, students) {
  const payments = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.payments));
  if (!payments.length) {
    return 0;
  }

  const studentLookup = buildStudentLookupMaps_(students || readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students)));

  return payments.reduce(function (count, payment) {
    const paymentId = String(payment.id || "").trim();
    const studentTransactionId = normalizeValue_(payment.studentTransactionId || "");
    const confirmedTransactionId = normalizeValue_(payment.confirmedTransactionId || "");
    const paymentStatus = normalizeValue_(payment.status || "");
    const paymentAccessSettings = derivePaymentAccessSettings_(payment);
    const matchedStudent = resolveLinkedStudentRecord_(
      studentLookup,
      payment.studentId || "",
      payment.studentPhone || "",
      payment.studentEmail || ""
    );
    const needsSelfHealing =
      !String(payment.accessStartDate || "").trim() ||
      (!paymentAccessSettings.unlimitedAccess &&
        (!String(payment.accessEndDate || "").trim() || !String(payment.paymentDueDate || "").trim())) ||
      (matchedStudent && isPreviewAccessStudent_(matchedStudent));

    if (
      !paymentId ||
      !studentTransactionId ||
      !confirmedTransactionId ||
      studentTransactionId !== confirmedTransactionId ||
      paymentStatus === "rejected" ||
      (!isPendingPaymentStatus_(payment.status || "") && !needsSelfHealing)
    ) {
      return count;
    }

    const result = approvePaymentRecordById_(spreadsheet, paymentId, {
      confirmedTransactionId: String(payment.confirmedTransactionId || "").trim(),
      paymentDate: String(payment.paymentDate || "").trim(),
      reviewedBy: String(payment.reviewedBy || "Sheet Auto Match").trim() || "Sheet Auto Match",
      reviewNote:
        String(payment.reviewNote || "Approved automatically after transaction ID match.").trim() ||
        "Approved automatically after transaction ID match.",
      approvalMode: getPaymentApprovalBaseMode_(payment.approvalMode || "Auto Match"),
      accessMonths: paymentAccessSettings.accessMonths,
      unlimitedAccess: paymentAccessSettings.unlimitedAccess ? "true" : "false",
      source: "auto",
    });

    return count + (result && result.changed ? 1 : 0);
  }, 0);
}

function approvePaymentRecordById_(spreadsheet, paymentId, options) {
  const paymentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.payments);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const enrollmentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.enrollments);
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));
  const paymentIndex = paymentsData.records.findIndex(function (entry) {
    return String(entry.id || "").trim() === String(paymentId || "").trim();
  });

  if (paymentIndex === -1) {
    throw new Error("Payment record was not found.");
  }

  const payment = paymentsData.records[paymentIndex] || {};
  const studentLookup = buildStudentLookupMaps_(studentsData.records);
  const student = resolveLinkedStudentRecord_(
    studentLookup,
    payment.studentId || "",
    payment.studentPhone || "",
    payment.studentEmail || ""
  );
  if (!student) {
    throw new Error("Student account was not found for this payment.");
  }

  const studentId = getStudentId_(student);
  const courseId = String(payment.courseId || "").trim();
  if (!courseId) {
    throw new Error("Course ID is missing from this payment record.");
  }

  const course = courses.find(function (entry) {
    return String(entry.id || entry.courseId || "").trim() === courseId;
  });
  if (!course) {
    throw new Error("Course was not found for this payment record.");
  }

  const confirmedTransactionId = String(
    (options && options.confirmedTransactionId) || payment.confirmedTransactionId || ""
  ).trim();
  if (!confirmedTransactionId) {
    throw new Error("Confirmed bKash transaction ID is required.");
  }

  const normalizedStudentTransactionId = normalizeValue_(payment.studentTransactionId || "");
  const normalizedConfirmedTransactionId = normalizeValue_(confirmedTransactionId);
  const paymentAccessSettings = normalizePaymentAccessSettings_(options, payment);
  const approvalMode =
    (options && options.approvalMode) ||
    (normalizedStudentTransactionId && normalizedStudentTransactionId === normalizedConfirmedTransactionId
      ? "Auto Match"
      : "Manual Review");
  const approvalModeLabel = buildPaymentApprovalModeLabel_(
    approvalMode,
    paymentAccessSettings.accessMonths,
    paymentAccessSettings.unlimitedAccess
  );
  const paymentDate = normalizeIsoDateValue_(
    (options && options.paymentDate) || payment.paymentDate || getTodayIso_()
  );
  const paymentDueDate = paymentAccessSettings.unlimitedAccess
    ? ""
    : addMonthsIso_(paymentDate, paymentAccessSettings.accessMonths);
  const accessStartDate = getEarliestCourseLessonReleaseDate_(spreadsheet, courseId) || paymentDate;
  const monthlyFee = String(payment.amount || course.price || course.fee || course.courseFee || "").trim();
  const reviewedBy =
    String(
      (options && options.reviewedBy) ||
        payment.reviewedBy ||
        (approvalMode === "Auto Match" ? "Sheet Auto Match" : "Admin Panel")
    ).trim() || (approvalMode === "Auto Match" ? "Sheet Auto Match" : "Admin Panel");
  const reviewNote =
    String(
      (options && options.reviewNote) ||
        payment.reviewNote ||
        buildPaymentApprovalReviewNote_(approvalMode, paymentAccessSettings)
    ).trim() ||
    buildPaymentApprovalReviewNote_(approvalMode, paymentAccessSettings);
  const reviewTimestamp = getNowIso_();
  const existingStudentCourseIds = parseStringList_(
    getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.enrolledCourseIds, "")
  );
  const existingEnrollmentCourseIds = enrollmentsData.records
    .filter(function (enrollment) {
      return String(enrollment.studentId || "").trim() === studentId;
    })
    .map(function (enrollment) {
      return String(enrollment.courseId || "").trim();
    })
    .filter(Boolean);
  const mergedCourseIds = existingStudentCourseIds
    .concat(existingEnrollmentCourseIds)
    .concat([courseId])
    .filter(function (entryCourseId, index, list) {
      return entryCourseId && list.indexOf(entryCourseId) === index;
    });

  let hasStudentChanges = false;
  const nextStudents = studentsData.records.map(function (entry) {
    if (getStudentId_(entry) !== studentId) {
      return entry;
    }

    const nextEntry = Object.assign({}, entry);
    nextEntry.status = "Active";
    nextEntry.loginApproval = "Approved";
    nextEntry.portalAccessMode = "";
    nextEntry.enrolledCourseIds = buildPipeList_(mergedCourseIds);
    if (!String(nextEntry.highlight || "").trim() || isPreviewAccessStudent_(entry)) {
      nextEntry.highlight = paymentAccessSettings.unlimitedAccess
        ? "Payment confirmed. Unlimited course access is now active."
        : "Payment confirmed. Full course access is now active.";
    }

    if (hasRecordChangesForHeaders_(entry, nextEntry, studentsData.headers)) {
      hasStudentChanges = true;
      return nextEntry;
    }

    return entry;
  });

  if (hasStudentChanges) {
    writeSheetEntries_(studentsData.sheet, studentsData.headers, nextStudents);
  }

  let hasEnrollmentChanges = false;
  let hasTargetEnrollment = false;
  const nextEnrollments = enrollmentsData.records.map(function (entry) {
    if (
      String(entry.studentId || "").trim() !== studentId ||
      String(entry.courseId || "").trim() !== courseId
    ) {
      return entry;
    }

    hasTargetEnrollment = true;
    const nextEntry = Object.assign({}, entry);
    nextEntry.studentId = studentId;
    nextEntry.courseId = courseId;
    nextEntry.accessStartDate = accessStartDate;
    nextEntry.accessEndDate = paymentDueDate;
    nextEntry.unlimitedAccess = paymentAccessSettings.unlimitedAccess ? "true" : "false";
    nextEntry.videoAccessUntil = paymentAccessSettings.unlimitedAccess ? "" : paymentDueDate;
    nextEntry.lastPaymentDate = paymentAccessSettings.unlimitedAccess ? "" : paymentDate;
    nextEntry.paymentDueDate = paymentAccessSettings.unlimitedAccess ? "" : paymentDueDate;
    nextEntry.monthlyFee = paymentAccessSettings.unlimitedAccess ? "" : monthlyFee;
    nextEntry.status = "Active";
    nextEntry.paidMonths = "";

    if (hasRecordChangesForHeaders_(entry, nextEntry, enrollmentsData.headers)) {
      hasEnrollmentChanges = true;
      return nextEntry;
    }

    return entry;
  });

  if (!hasTargetEnrollment) {
    nextEnrollments.push({
      studentId: studentId,
      courseId: courseId,
      accessStartDate: accessStartDate,
      accessEndDate: paymentDueDate,
      videoAccessUntil: paymentAccessSettings.unlimitedAccess ? "" : paymentDueDate,
      lastPaymentDate: paymentAccessSettings.unlimitedAccess ? "" : paymentDate,
      paymentDueDate: paymentAccessSettings.unlimitedAccess ? "" : paymentDueDate,
      monthlyFee: paymentAccessSettings.unlimitedAccess ? "" : monthlyFee,
      status: "Active",
      paidMonths: "",
      unlimitedAccess: paymentAccessSettings.unlimitedAccess ? "true" : "false",
    });
    hasEnrollmentChanges = true;
  }

  if (hasEnrollmentChanges) {
    writeSheetEntries_(enrollmentsData.sheet, enrollmentsData.headers, nextEnrollments);
  }

  let hasPaymentChanges = false;
  const forceReviewOverwrite = !!(options && options.forceReviewOverwrite);
  const nextPayments = paymentsData.records.map(function (entry, index) {
    if (index !== paymentIndex) {
      return entry;
    }

    const nextEntry = Object.assign({}, entry);
    nextEntry.confirmedTransactionId = confirmedTransactionId;
    nextEntry.courseTitle = String(course.title || course.shortTitle || courseId).trim();
    nextEntry.amount = monthlyFee;
    nextEntry.status = "Approved";
    nextEntry.paymentDate = paymentDate;
    nextEntry.accessStartDate = accessStartDate;
    nextEntry.accessEndDate = paymentDueDate;
    nextEntry.paymentDueDate = paymentAccessSettings.unlimitedAccess ? "" : paymentDueDate;
    nextEntry.approvalMode = forceReviewOverwrite
      ? approvalModeLabel
      : String(nextEntry.approvalMode || approvalModeLabel).trim() || approvalModeLabel;
    nextEntry.reviewedOn = forceReviewOverwrite
      ? reviewTimestamp
      : String(nextEntry.reviewedOn || "").trim() || reviewTimestamp;
    nextEntry.reviewedBy = forceReviewOverwrite
      ? reviewedBy
      : String(nextEntry.reviewedBy || "").trim() || reviewedBy;
    nextEntry.reviewNote = forceReviewOverwrite
      ? reviewNote
      : String(nextEntry.reviewNote || "").trim() || reviewNote;

    if (hasRecordChangesForHeaders_(entry, nextEntry, paymentsData.headers)) {
      hasPaymentChanges = true;
      return nextEntry;
    }

    return entry;
  });

  if (hasPaymentChanges) {
    writeSheetEntries_(paymentsData.sheet, paymentsData.headers, nextPayments);
  }

  const finalStudent =
    nextStudents.find(function (entry) {
      return getStudentId_(entry) === studentId;
    }) || student;
  syncLatestRegistrationReviewsForStudents_(spreadsheet, [finalStudent], {
    username: reviewedBy,
    name: reviewedBy,
    id: reviewedBy,
  });

  return {
    ok: true,
    changed: hasStudentChanges || hasEnrollmentChanges || hasPaymentChanges,
    paymentId: paymentId,
    studentId: studentId,
    courseId: courseId,
  };
}

function getStudentAssignedCourseIds_(spreadsheet, student) {
  const studentCourseIds = parseStringList_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.enrolledCourseIds, ""));
  const studentId = getStudentId_(student);
  const enrollments = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments));
  const enrollmentCourseIds = enrollments
    .filter(function (enrollment) {
      return String(enrollment.studentId || "").trim() === studentId;
    })
    .map(function (enrollment) {
      return String(enrollment.courseId || "").trim();
    })
    .filter(Boolean);

  return studentCourseIds.concat(enrollmentCourseIds).filter(function (courseId, index, list) {
    return list.indexOf(courseId) === index;
  });
}

function activateSelfRegisteredStudentIfAllowed_(spreadsheet, student) {
  const accessState = buildSelfRegistrationAccessState_();
  if (normalizeValue_(accessState.registrationStatus) === "pending") {
    return null;
  }

  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  const registrationIndex = findLatestRegistrationIndexForStudent_(registrationsData.records, student);
  if (registrationIndex === -1) {
    return null;
  }

  const matchedRegistration = registrationsData.records[registrationIndex] || {};
  const registrationStatus = normalizeValue_(matchedRegistration.status || "");
  if (registrationStatus === "rejected" || registrationStatus === "blocked") {
    return null;
  }

  const studentId = getStudentId_(student);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const nextStudent = Object.assign({}, student);
  nextStudent.status = accessState.studentStatus;
  nextStudent.loginApproval = accessState.loginApproval;
  nextStudent.portalAccessMode = accessState.portalAccessMode;
  nextStudent.highlight =
    String(nextStudent.highlight || "").trim() || buildSelfRegistrationHighlight_(parseStringList_(nextStudent.enrolledCourseIds || ""), accessState);

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records.map(function (entry) {
      return getStudentId_(entry) === studentId ? nextStudent : entry;
    })
  );

  writeSheetEntries_(
    registrationsData.sheet,
    registrationsData.headers,
    registrationsData.records.map(function (entry, index) {
      if (index !== registrationIndex) {
        return entry;
      }

      const nextEntry = Object.assign({}, entry);
      nextEntry.studentId = studentId || String(nextEntry.studentId || "").trim();
      nextEntry.status = accessState.registrationStatus;
      nextEntry.reviewedOn = getNowIso_();
      nextEntry.reviewedBy = accessState.reviewedBy;
      nextEntry.reviewNote = accessState.reviewNote;
      return nextEntry;
    })
  );

  return nextStudent;
}

function handleAdminGetDashboard_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  return jsonOutput_(buildAdminPayload_(getSpreadsheet_(), auth));
}

function handleAdminUpdateStudent_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const spreadsheet = getSpreadsheet_();
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));
  const payload = parseJsonField_(request.student) || request;
  const hasExplicitHighlight = payload.highlight !== undefined && payload.highlight !== null;
  const explicitStudentId = String(payload.id || payload.studentId || request.studentId || "").trim();
  const existingStudent = studentsData.records.find(function (student) {
    return explicitStudentId && getStudentId_(student) === explicitStudentId;
  });
  const studentId = explicitStudentId || (existingStudent ? getStudentId_(existingStudent) : generateStudentId_(studentsData.records));
  const courseIds = buildCourseIdList_(
    payload.enrolledCourseIds || payload.courseIds || request.enrolledCourseIds || request.courseIds || "",
    courses
  );

  const nextStudent = Object.assign(
    {
      id: studentId,
      name: "",
      phone: "",
      email: "",
      batch: "",
      session: "",
      joinedOn: getTodayIso_(),
      status: "Active",
      profileImage: "",
      password: "",
      loginApproval: "Approved",
      portalAccessMode: "",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20" +
        encodeURIComponent(studentId),
      highlight: "Updated from admin panel.",
      enrolledCourseIds: "",
      completedLessonIds: "",
      maxDeviceCount: "",
    },
    existingStudent || {}
  );

  [
    "name",
    "phone",
    "email",
    "batch",
    "session",
    "joinedOn",
    "status",
    "profileImage",
    "password",
    "loginApproval",
    "portalAccessMode",
    "passwordResetUrl",
    "highlight",
    "maxDeviceCount",
  ].forEach(function (field) {
    if (payload[field] !== undefined && payload[field] !== null) {
      nextStudent[field] = String(payload[field]);
    }
  });

  nextStudent.id = studentId;
  nextStudent.phone = normalizePhoneLookupValue_(nextStudent.phone || "");
  nextStudent.password = normalizePasswordValue_(nextStudent.password);
  nextStudent.portalAccessMode = String(nextStudent.portalAccessMode || "").trim();
  if (isPreviewAccessStudent_(nextStudent)) {
    nextStudent.loginApproval = "Approved";
  }
  if (
    !hasExplicitHighlight &&
    normalizeValue_(nextStudent.status || "") !== "blocked" &&
    isSecurityLockHighlight_(nextStudent.highlight || "")
  ) {
    nextStudent.highlight = "Access restored from admin panel.";
  }
  nextStudent.enrolledCourseIds = buildPipeList_(courseIds);
  nextStudent.maxDeviceCount = normalizeStudentMaxDeviceCountStorageValue_(nextStudent.maxDeviceCount);

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records
      .filter(function (student) {
        return getStudentId_(student) !== studentId;
      })
      .concat([nextStudent])
  );

  if (request.syncCourses !== "false") {
    syncStudentCourses_(spreadsheet, [studentId], courseIds, {
      accessStartDate: request.accessStartDate || "",
      accessEndDate: request.accessEndDate || "",
      videoAccessUntil: request.videoAccessUntil || "",
      lastPaymentDate: request.lastPaymentDate || "",
      paymentDueDate: request.paymentDueDate || "",
      monthlyFee: request.monthlyFee || "",
      status: request.enrollmentStatus || request.status || "",
      paidMonths: request.paidMonths || "",
      unlimitedAccess: request.unlimitedAccess || "",
      replaceExisting: request.replaceExisting === "true",
    });
  }

  syncLatestRegistrationReviewsForStudents_(spreadsheet, [nextStudent], auth);

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminBulkStudentAction_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const studentIds = parseStringList_(request.studentIds || request.ids || "");
  const action = normalizeValue_(request.bulkAction || request.mode || "");

  if (!studentIds.length || !action) {
    return jsonOutput_({ ok: false, message: "Select students and an action first." });
  }

  const spreadsheet = getSpreadsheet_();
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const selected = {};
  studentIds.forEach(function (studentId) {
    selected[studentId] = true;
  });

  const nextStudents = studentsData.records.map(function (student) {
    const studentId = getStudentId_(student);
    if (!selected[studentId]) {
      return student;
    }

    const nextStudent = Object.assign({}, student);

    if (action === "approve") {
      nextStudent.status = "Active";
      nextStudent.loginApproval = "Approved";
      nextStudent.portalAccessMode = "";
      if (isSecurityLockHighlight_(nextStudent.highlight || "")) {
        nextStudent.highlight = "Access restored from admin panel.";
      }
    } else if (action === "preview" || action === "classlist" || action === "listonly") {
      nextStudent.status = "Active";
      nextStudent.loginApproval = "Approved";
      nextStudent.portalAccessMode = "Preview";
      if (isSecurityLockHighlight_(nextStudent.highlight || "")) {
        nextStudent.highlight = "Access restored from admin panel.";
      }
    } else if (action === "activate") {
      nextStudent.status = "Active";
      nextStudent.portalAccessMode = "";
      if (isSecurityLockHighlight_(nextStudent.highlight || "")) {
        nextStudent.highlight = "Access restored from admin panel.";
      }
    } else if (action === "block" || action === "suspend" || action === "disable") {
      nextStudent.status = "Blocked";
      nextStudent.portalAccessMode = "";
    } else if (action === "pending") {
      nextStudent.status = "Pending";
      nextStudent.loginApproval = "Pending";
      nextStudent.portalAccessMode = "";
    } else if (action === "reject") {
      nextStudent.status = "Inactive";
      nextStudent.loginApproval = "Rejected";
      nextStudent.portalAccessMode = "";
    }

    return nextStudent;
  });

  writeSheetEntries_(studentsData.sheet, studentsData.headers, nextStudents);
  syncLatestRegistrationReviewsForStudents_(
    spreadsheet,
    nextStudents.filter(function (student) {
      return selected[getStudentId_(student)];
    }),
    auth
  );
  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminAssignCourses_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const studentIds = parseStringList_(request.studentIds || request.ids || "");
  if (!studentIds.length) {
    return jsonOutput_({ ok: false, message: "Select at least one student." });
  }

  const spreadsheet = getSpreadsheet_();
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));
  const courseIds = buildCourseIdList_(request.courseIds || "", courses);
  const courseRulesMap = parseJsonField_(request.courseRulesJson) || {};

  syncStudentCourses_(spreadsheet, studentIds, courseIds, {
    accessStartDate: request.accessStartDate || "",
    accessEndDate: request.accessEndDate || "",
    videoAccessUntil: request.videoAccessUntil || "",
    lastPaymentDate: request.lastPaymentDate || "",
    paymentDueDate: request.paymentDueDate || "",
    monthlyFee: request.monthlyFee || "",
    status: request.status || "",
    paidMonths: request.paidMonths || "",
    unlimitedAccess: request.unlimitedAccess || "",
    replaceExisting: request.replaceExisting === "true",
    courseRulesMap: courseRulesMap,
  });

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminCreateCourse_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const spreadsheet = getSpreadsheet_();
  const coursesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.courses);
  const payload = parseJsonField_(request.course) || request;
  const title = String(payload.title || "").trim();
  const shortTitle = String(payload.shortTitle || title || "Course").trim();

  if (!title) {
    return jsonOutput_({ ok: false, message: "Course title is required." });
  }

  const courseId = String(payload.id || payload.courseId || "").trim() || slugify_(title);
  const existing = coursesData.records.find(function (course) {
    return String(course.id || "") === courseId;
  });

  const nextCourse = Object.assign(
    {
      id: courseId,
      title: title,
      shortTitle: shortTitle,
      faculty: String(payload.faculty || "Faculty not set").trim(),
      category: String(payload.category || "Course").trim(),
      batch: String(payload.batch || "").trim(),
      session: String(payload.session || "").trim(),
      schedule: String(payload.schedule || "Schedule pending").trim(),
      nextLive: String(payload.nextLive || "").trim(),
      price: String(payload.price || "").trim(),
      description: String(payload.description || "").trim(),
      status: "Active",
    },
    existing || {}
  );

  nextCourse.id = courseId;
  nextCourse.title = title;
  nextCourse.shortTitle = shortTitle;
  nextCourse.faculty = String(payload.faculty || nextCourse.faculty || "").trim();
  nextCourse.category = String(payload.category || nextCourse.category || "").trim();
  nextCourse.batch = String(payload.batch || nextCourse.batch || "").trim();
  nextCourse.session = String(payload.session || nextCourse.session || "").trim();
  nextCourse.schedule = String(payload.schedule || nextCourse.schedule || "").trim();
  nextCourse.nextLive = String(payload.nextLive || nextCourse.nextLive || "").trim();
  nextCourse.price = String(payload.price || nextCourse.price || "").trim();
  nextCourse.description = String(payload.description || nextCourse.description || "").trim();
  nextCourse.status = normalizeCourseStatusLabel_(payload.status || nextCourse.status || "Active");

  writeSheetEntries_(
    coursesData.sheet,
    coursesData.headers,
    coursesData.records
      .filter(function (course) {
        return String(course.id || "") !== courseId;
      })
      .concat([nextCourse])
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminDeleteCourse_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const courseId = String(request.courseId || request.id || "").trim();
  if (!courseId) {
    return jsonOutput_({ ok: false, message: "Course ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const coursesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.courses);
  const lessonsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.lessons);
  const enrollmentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.enrollments);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);

  writeSheetEntries_(
    coursesData.sheet,
    coursesData.headers,
    coursesData.records.filter(function (course) {
      return String(course.id || "") !== courseId;
    })
  );

  writeSheetEntries_(
    lessonsData.sheet,
    lessonsData.headers,
    lessonsData.records.filter(function (lesson) {
      return String(lesson.courseId || "") !== courseId;
    })
  );

  writeSheetEntries_(
    enrollmentsData.sheet,
    enrollmentsData.headers,
    enrollmentsData.records.filter(function (enrollment) {
      return String(enrollment.courseId || "") !== courseId;
    })
  );

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records.map(function (student) {
      const nextStudent = Object.assign({}, student);
      nextStudent.enrolledCourseIds = buildPipeList_(
        parseStringList_(student.enrolledCourseIds).filter(function (id) {
          return id !== courseId;
        })
      );
      return nextStudent;
    })
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminLogoutDevice_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const deviceRecordId = String(request.deviceRecordId || request.deviceIdRecord || request.id || "").trim();
  const deviceId = String(request.deviceId || "").trim();
  const studentId = String(request.studentId || "").trim();
  if (!deviceRecordId && (!deviceId || !studentId)) {
    return jsonOutput_({ ok: false, message: "Device record ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const devicesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.devices);
  const deviceIndex = devicesData.records.findIndex(function (device) {
    return (
      (deviceRecordId && getDeviceRecordId_(device) === deviceRecordId) ||
      (!deviceRecordId && getDeviceStudentId_(device) === studentId && getDeviceIdValue_(device) === deviceId)
    );
  });

  if (deviceIndex === -1) {
    return jsonOutput_({ ok: false, message: "Approved device was not found." });
  }

  const nextDevices = devicesData.records.slice();
  nextDevices[deviceIndex] = revokeStudentDeviceRecord_(
    nextDevices[deviceIndex],
    auth.username || auth.name || auth.id || "",
    "Forced logout from the admin panel.",
    "Logged Out"
  );
  writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminRemoveDevice_(request) {
  return handleAdminLogoutDevice_(request);
}

function handleAdminDeleteDevice_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const deviceRecordId = String(request.deviceRecordId || request.deviceIdRecord || request.id || "").trim();
  const deviceId = String(request.deviceId || "").trim();
  const studentId = String(request.studentId || "").trim();
  if (!deviceRecordId && (!deviceId || !studentId)) {
    return jsonOutput_({ ok: false, message: "Device record ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const devicesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.devices);
  const nextDevices = devicesData.records.filter(function (device) {
    if (deviceRecordId) {
      return getDeviceRecordId_(device) !== deviceRecordId;
    }

    return !(
      getDeviceStudentId_(device) === studentId &&
      getDeviceIdValue_(device) === deviceId
    );
  });

  if (nextDevices.length === devicesData.records.length) {
    return jsonOutput_({ ok: false, message: "Approved device was not found." });
  }

  writeSheetEntries_(devicesData.sheet, devicesData.headers, nextDevices);
  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminApproveRegistration_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const registrationId = String(request.registrationId || request.id || "").trim();
  if (!registrationId) {
    return jsonOutput_({ ok: false, message: "Registration ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));

  const registration = registrationsData.records.find(function (entry) {
    return String(entry.id || "") === registrationId;
  });

  if (!registration) {
    return jsonOutput_({ ok: false, message: "Registration was not found." });
  }

  const studentId = String(registration.studentId || "").trim() || generateStudentId_(studentsData.records);
  const existingStudent = studentsData.records.find(function (student) {
    return getStudentId_(student) === studentId;
  });
  const requestedCourses = buildCourseIdList_(registration.requestedCourseIds || "", courses);
  const mergedCourseIds = (existingStudent ? getStudentAssignedCourseIds_(spreadsheet, existingStudent) : [])
    .concat(requestedCourses)
    .filter(function (courseId, index, list) {
      return courseId && list.indexOf(courseId) === index;
    });

  const nextStudent = Object.assign(
    {
      id: studentId,
      name: registration.name || "",
      phone: registration.phone || "",
      email: registration.email || "",
      batch: registration.batch || "",
      session: registration.session || "",
      joinedOn: getTodayIso_(),
      status: "Active",
      profileImage: "",
      password: normalizePasswordValue_(registration.password || ""),
      loginApproval: "Approved",
      portalAccessMode: "",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20" +
        encodeURIComponent(studentId),
      highlight: "Approved from admin panel.",
      enrolledCourseIds: buildPipeList_(mergedCourseIds),
      completedLessonIds: "",
    },
    existingStudent || {}
  );

  nextStudent.id = studentId;
  nextStudent.status = "Active";
  nextStudent.loginApproval = "Approved";
  nextStudent.portalAccessMode = "";
  nextStudent.password = normalizePasswordValue_(nextStudent.password || registration.password || "");
  nextStudent.enrolledCourseIds = buildPipeList_(mergedCourseIds);
  nextStudent.joinedOn = nextStudent.joinedOn || getTodayIso_();

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records
      .filter(function (student) {
        return getStudentId_(student) !== studentId;
      })
      .concat([nextStudent])
  );

  syncStudentCourses_(spreadsheet, [studentId], mergedCourseIds, {
    accessStartDate: getTodayIso_(),
    accessEndDate: "",
    videoAccessUntil: "",
    lastPaymentDate: "",
    paymentDueDate: "",
    monthlyFee: "",
    status: "Active",
    paidMonths: "",
  });

  writeSheetEntries_(
    registrationsData.sheet,
    registrationsData.headers,
    registrationsData.records.map(function (entry) {
      if (String(entry.id || "") !== registrationId) {
        return entry;
      }

      const nextEntry = Object.assign({}, entry);
      nextEntry.studentId = studentId;
      nextEntry.status = "Approved";
      nextEntry.reviewedOn = getNowIso_();
      nextEntry.reviewedBy = auth.username || auth.name || auth.id || "";
      nextEntry.reviewNote = String(request.reviewNote || "Approved from admin panel.");
      return nextEntry;
    })
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminRejectRegistration_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const registrationId = String(request.registrationId || request.id || "").trim();
  if (!registrationId) {
    return jsonOutput_({ ok: false, message: "Registration ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);

  const registration = registrationsData.records.find(function (entry) {
    return String(entry.id || "") === registrationId;
  });

  if (!registration) {
    return jsonOutput_({ ok: false, message: "Registration was not found." });
  }

  const studentId = String(registration.studentId || "").trim();

  writeSheetEntries_(
    registrationsData.sheet,
    registrationsData.headers,
    registrationsData.records.map(function (entry) {
      if (String(entry.id || "") !== registrationId) {
        return entry;
      }

      const nextEntry = Object.assign({}, entry);
      nextEntry.status = "Rejected";
      nextEntry.reviewedOn = getNowIso_();
      nextEntry.reviewedBy = auth.username || auth.name || auth.id || "";
      nextEntry.reviewNote = String(request.reviewNote || "Rejected from admin panel.");
      return nextEntry;
    })
  );

  if (studentId) {
    writeSheetEntries_(
      studentsData.sheet,
      studentsData.headers,
      studentsData.records.map(function (student) {
        if (getStudentId_(student) !== studentId) {
          return student;
        }

        const nextStudent = Object.assign({}, student);
        nextStudent.status = "Inactive";
        nextStudent.loginApproval = "Rejected";
        nextStudent.portalAccessMode = "";
        return nextStudent;
      })
    );
  }

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminReviewPayment_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const paymentId = String(request.paymentId || request.id || "").trim();
  const reviewAction = normalizeValue_(request.reviewAction || request.actionType || "approve");
  if (!paymentId) {
    return jsonOutput_({ ok: false, message: "Payment ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const paymentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.payments);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));
  const payment = paymentsData.records.find(function (entry) {
    return String(entry.id || "").trim() === paymentId;
  });

  if (!payment) {
    return jsonOutput_({ ok: false, message: "Payment record was not found." });
  }

  const studentId = String(payment.studentId || "").trim();
  const courseId = String(payment.courseId || "").trim();
  const student = studentsData.records.find(function (entry) {
    return getStudentId_(entry) === studentId;
  });
  if (!student) {
    return jsonOutput_({ ok: false, message: "Student account was not found for this payment." });
  }

  if (!courseId) {
    return jsonOutput_({ ok: false, message: "Course ID is missing from this payment record." });
  }

  if (reviewAction === "reject") {
    writeSheetEntries_(
      paymentsData.sheet,
      paymentsData.headers,
      paymentsData.records.map(function (entry) {
        if (String(entry.id || "").trim() !== paymentId) {
          return entry;
        }

        const nextEntry = Object.assign({}, entry);
        nextEntry.status = "Rejected";
        nextEntry.reviewedOn = getNowIso_();
        nextEntry.reviewedBy = auth.username || auth.name || auth.id || "";
        nextEntry.reviewNote = String(request.reviewNote || "Payment rejected from admin panel.");
        return nextEntry;
      })
    );

    return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
  }

  const confirmedTransactionId = String(request.confirmedTransactionId || request.merchantTransactionId || "").trim();
  if (!confirmedTransactionId) {
    return jsonOutput_({ ok: false, message: "Confirmed bKash transaction ID is required." });
  }

  approvePaymentRecordById_(spreadsheet, paymentId, {
    confirmedTransactionId: confirmedTransactionId,
    paymentDate: normalizeIsoDateValue_(request.paymentDate || payment.submittedOn || getTodayIso_()),
    reviewedBy: auth.username || auth.name || auth.id || "",
    reviewNote: String(request.reviewNote || "Payment approved from admin panel."),
    accessMonths: request.accessMonths || "",
    unlimitedAccess: request.unlimitedAccess || "",
    approvalMode:
      normalizeValue_(payment.studentTransactionId || "") === normalizeValue_(confirmedTransactionId)
        ? "Auto Match"
        : "Manual Review",
    forceReviewOverwrite: true,
    source: "admin",
  });

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminSendMessage_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const studentIds = parseStringList_(request.studentIds || request.ids || "");
  const title = String(request.title || "").trim();
  const message = String(request.message || "").trim();

  if (!studentIds.length || !message) {
    return jsonOutput_({ ok: false, message: "Select students and write a message first." });
  }

  const spreadsheet = getSpreadsheet_();
  const messagesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.messages);
  const recipientState = buildMessageRecipientState_(studentIds);

  writeSheetEntries_(
    messagesData.sheet,
    messagesData.headers,
    messagesData.records.concat([
      {
        id: Utilities.getUuid(),
        studentIds: buildPipeList_(studentIds),
        title: title || "Admin Message",
        message: message,
        status: buildMessageAggregateStatus_(recipientState),
        createdOn: getNowIso_(),
        createdBy: auth.username || auth.name || auth.id || "",
        audience: "Student",
        recipientStateJson: serializeMessageRecipientState_(recipientState),
      },
    ])
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleAdminDeleteMessage_(request) {
  const auth = getAuthorizedAdminSession_(request);
  if (!auth) {
    return unauthorizedOutput_();
  }

  const messageId = String(request.messageId || request.id || "").trim();
  if (!messageId) {
    return jsonOutput_({ ok: false, message: "Message ID is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const messagesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.messages);
  const existingMessage = messagesData.records.find(function (entry) {
    return String(entry.id || "").trim() === messageId;
  });

  if (!existingMessage) {
    return jsonOutput_({ ok: false, message: "Message was not found." });
  }

  writeSheetEntries_(
    messagesData.sheet,
    messagesData.headers,
    messagesData.records.filter(function (entry) {
      return String(entry.id || "").trim() !== messageId;
    })
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
}

function handleStudentRespondMessage_(request) {
  const studentId = String(request.studentId || "").trim();
  const messageId = String(request.messageId || request.id || "").trim();
  const responseType = normalizeValue_(request.responseType || request.mode || "");
  const replyText = String(request.reply || request.replyText || "").trim();

  if (!studentId || !messageId) {
    return jsonOutput_({
      ok: false,
      message: "Student ID and message ID are required.",
    });
  }

  if (responseType !== "reply" && responseType !== "skip") {
    return jsonOutput_({
      ok: false,
      message: "Choose reply or skip for this message.",
    });
  }

  if (responseType === "reply" && !replyText) {
    return jsonOutput_({
      ok: false,
      message: "Write a reply before sending it to the admin.",
    });
  }

  const spreadsheet = getSpreadsheet_();
  const sessionValidation = validateStudentDeviceSession_(spreadsheet, request);
  if (!sessionValidation.ok) {
    return jsonOutput_(sessionValidation);
  }

  const messagesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.messages);
  const messageIndex = messagesData.records.findIndex(function (entry) {
    return String(entry.id || "").trim() === messageId;
  });

  if (messageIndex === -1) {
    return jsonOutput_({
      ok: false,
      message: "This message could not be found.",
    });
  }

  const currentMessage = messagesData.records[messageIndex] || {};
  const targetedStudentIds = parseStringList_(currentMessage.studentIds || "");
  if (
    getMessageAudience_(currentMessage) !== "student" ||
    targetedStudentIds.indexOf(studentId) === -1
  ) {
    return jsonOutput_({
      ok: false,
      message: "This message is not available for the current student.",
    });
  }

  const recipientState = parseMessageRecipientState_(
    currentMessage.recipientStateJson || currentMessage.recipientState || "",
    targetedStudentIds
  );
  recipientState[studentId] = Object.assign({}, recipientState[studentId] || {}, {
    status: responseType === "reply" ? "Replied" : "Skipped",
    reply: responseType === "reply" ? replyText : "",
    respondedOn: getNowIso_(),
    respondedBy: studentId,
  });

  writeSheetEntries_(
    messagesData.sheet,
    messagesData.headers,
    messagesData.records.map(function (entry, index) {
      if (index !== messageIndex) {
        return entry;
      }

      const nextEntry = Object.assign({}, entry);
      nextEntry.status = buildMessageAggregateStatus_(recipientState);
      nextEntry.audience = getMessageAudience_(entry) === "admin" ? "Admin" : "Student";
      nextEntry.recipientStateJson = serializeMessageRecipientState_(recipientState);
      return nextEntry;
    })
  );

  return jsonOutput_({
    ok: true,
    message:
      responseType === "reply"
        ? "Your reply has been sent to the admin."
        : "This message has been skipped for now.",
    messages: getStudentInboxMessages_(spreadsheet, studentId),
  });
}

function appendSystemMessage_(spreadsheet, entry) {
  const messagesData = loadSheetEntries_(spreadsheet, SHEET_NAMES.messages);

  writeSheetEntries_(
    messagesData.sheet,
    messagesData.headers,
    messagesData.records.concat([
      {
        id: Utilities.getUuid(),
        studentIds: buildPipeList_(parseStringList_(entry.studentIds || "")),
        title: String(entry.title || "System Message").trim(),
        message: String(entry.message || "").trim(),
        status: String(entry.status || "Sent").trim() || "Sent",
        createdOn: getNowIso_(),
        createdBy: String(entry.createdBy || "System").trim() || "System",
        audience: String(entry.audience || "Admin").trim() || "Admin",
        recipientStateJson: String(entry.recipientStateJson || "").trim(),
      },
    ])
  );
}

function parseRequest_(e) {
  const parameterData = (e && e.parameter) || {};
  const postData = e && e.postData && e.postData.contents ? String(e.postData.contents) : "";

  let bodyData = {};
  if (postData) {
    try {
      bodyData = JSON.parse(postData);
    } catch (error) {
      bodyData = parseFormEncodedBody_(postData);
    }
  }

  return Object.assign({}, bodyData, parameterData);
}

function buildCachedCourseCatalogPayload_(spreadsheet) {
  const cache = getScriptCache_();
  const canUseCache = !!cache && PUBLIC_CACHE_TTL_SECONDS_ > 0;
  if (canUseCache) {
    const cached = cache.get(PUBLIC_CACHE_KEYS_.courses);
    if (cached) {
      const parsed = parseJsonField_(cached);
      if (parsed) {
        return parsed;
      }
    }
  }

  const payload = {
    ok: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    courses: getVisibleCoursesForStudents_(
      readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses))
    ),
  };

  if (canUseCache) {
    try {
      cache.put(PUBLIC_CACHE_KEYS_.courses, JSON.stringify(payload), PUBLIC_CACHE_TTL_SECONDS_);
    } catch (error) {
      // Ignore cache write failures and still return live payload.
    }
  }

  return payload;
}

function getScriptCache_() {
  try {
    return CacheService.getScriptCache();
  } catch (error) {
    return null;
  }
}

function invalidatePublicReadCaches_() {
  const cache = getScriptCache_();
  if (!cache) {
    return;
  }

  try {
    cache.removeAll(Object.keys(PUBLIC_CACHE_KEYS_).map(function (key) {
      return PUBLIC_CACHE_KEYS_[key];
    }));
  } catch (error) {
    // Ignore cache invalidation failures.
  }
}

function parseFormEncodedBody_(postData) {
  return String(postData || "")
    .split("&")
    .filter(Boolean)
    .reduce(function (result, pair) {
      const parts = pair.split("=");
      const rawKey = parts.shift() || "";
      const rawValue = parts.join("=");
      const key = decodeURIComponent(rawKey.replace(/\+/g, " "));
      const value = decodeURIComponent(rawValue.replace(/\+/g, " "));

      if (key) {
        result[key] = value;
      }

      return result;
    }, {});
}

function readSheet_(sheet) {
  if (!sheet) {
    return [];
  }

  const values = sheet.getDataRange().getDisplayValues();
  const headers = values[0] || [];
  const rows = values.slice(1).filter(function (row) {
    return row.some(function (cell) {
      return String(cell).trim() !== "";
    });
  });

  return rows.map(function (row) {
    return headers.reduce(function (record, header, index) {
      const value = row[index];
      getHeaderAliases_(header).forEach(function (alias) {
        if (!(alias in record)) {
          record[alias] = value;
        }
      });

      return record;
    }, {});
  });
}

function getHeaderAliases_(header) {
  const aliases = [
    String(header || "").trim(),
    normalizeHeaderKey_(header),
    compactLookupValue_(header),
  ];

  return aliases.filter(Boolean).filter(function (alias, index, list) {
    return list.indexOf(alias) === index;
  });
}

function normalizeHeaderKey_(header) {
  const normalized = normalizeValue_(header).replace(/[^a-z0-9]+/g, " ").trim();
  if (!normalized) {
    return "";
  }

  return normalized
    .split(/\s+/)
    .map(function (part, index) {
      return index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

function sanitizeStudents_(students) {
  return students.map(function (student) {
    const copy = Object.assign({}, student);
    STUDENT_FIELD_KEYS_.password.forEach(function (key) {
      delete copy[key];
    });
    return copy;
  });
}

function sanitizeAdmins_(admins) {
  return admins.map(sanitizeAdmin_);
}

function sanitizeDevicesForAdmin_(devices) {
  return sanitizeStudentDevices_(devices);
}

function sanitizeAdmin_(admin) {
  const copy = Object.assign({}, admin);
  ADMIN_FIELD_KEYS_.password.forEach(function (key) {
    delete copy[key];
  });
  return copy;
}

function findStudentByQuery_(students, query) {
  const normalizedQuery = normalizeValue_(query);
  const compactQuery = compactLookupValue_(query);
  const canonicalQuery = canonicalLookupValue_(query);
  const normalizedPhone = normalizePhoneLookupValue_(query);

  if (!normalizedQuery && !compactQuery && !canonicalQuery && !normalizedPhone) {
    return null;
  }

  return (
    students.find(function (student) {
      const tokens = getStudentLookupTokens_(student);
      return (
        (normalizedQuery && tokens.indexOf(normalizedQuery) !== -1) ||
        (compactQuery && tokens.indexOf(compactQuery) !== -1) ||
        (canonicalQuery && tokens.indexOf(canonicalQuery) !== -1) ||
        (normalizedPhone && tokens.indexOf(normalizedPhone) !== -1)
      );
    }) || null
  );
}

function findStudentForLogin_(spreadsheet, students, query) {
  const directStudent = findStudentByQuery_(students, query);
  if (directStudent) {
    return directStudent;
  }

  const registrations = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.registrations));
  const matchedRegistration = findRegistrationByQuery_(registrations, query);
  if (!matchedRegistration) {
    return null;
  }

  const registrationStudentId = String(
    getFirstAvailableValue_(matchedRegistration, REGISTRATION_FIELD_KEYS_.studentId, "")
  ).trim();
  if (registrationStudentId) {
    const linkedStudent = students.find(function (student) {
      return getStudentId_(student) === registrationStudentId;
    });
    if (linkedStudent) {
      return linkedStudent;
    }
  }

  const registrationPhone = normalizePhoneLookupValue_(
    getFirstAvailableValue_(matchedRegistration, REGISTRATION_FIELD_KEYS_.phone, "")
  );
  const registrationEmail = normalizeValue_(
    getFirstAvailableValue_(matchedRegistration, REGISTRATION_FIELD_KEYS_.email, "")
  );

  return (
    students.find(function (student) {
      return (
        (registrationPhone &&
          normalizePhoneLookupValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "")) ===
            registrationPhone) ||
        (registrationEmail &&
          normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "")) === registrationEmail)
      );
    }) || null
  );
}

function findRegistrationByQuery_(registrations, query) {
  const normalizedQuery = normalizeValue_(query);
  const compactQuery = compactLookupValue_(query);
  const canonicalQuery = canonicalLookupValue_(query);
  const normalizedPhone = normalizePhoneLookupValue_(query);

  if (!normalizedQuery && !compactQuery && !canonicalQuery && !normalizedPhone) {
    return null;
  }

  return (
    (registrations || []).find(function (registration) {
      const tokens = getRegistrationLookupTokens_(registration);
      return (
        (normalizedQuery && tokens.indexOf(normalizedQuery) !== -1) ||
        (compactQuery && tokens.indexOf(compactQuery) !== -1) ||
        (canonicalQuery && tokens.indexOf(canonicalQuery) !== -1) ||
        (normalizedPhone && tokens.indexOf(normalizedPhone) !== -1)
      );
    }) || null
  );
}

function getStudentId_(student) {
  return String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.id, "")).trim();
}

function getStudentPassword_(student) {
  return normalizePasswordValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.password, ""));
}

function getStudentStatus_(student) {
  return getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.status, "");
}

function normalizeStudentMaxDeviceCountStorageValue_(value) {
  if (!hasProvidedValue_(value)) {
    return "";
  }

  const parsed = Number(String(value || "").trim());
  if (!Number.isFinite(parsed) || parsed < 1) {
    return String(MAX_ACTIVE_DEVICES_PER_STUDENT_);
  }

  return String(Math.max(1, Math.floor(parsed)));
}

function getStudentMaxDeviceCount_(student) {
  const rawValue = String(getFirstAvailableValue_(student || {}, STUDENT_FIELD_KEYS_.maxDeviceCount, "")).trim();
  if (!rawValue) {
    return MAX_ACTIVE_DEVICES_PER_STUDENT_;
  }

  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return MAX_ACTIVE_DEVICES_PER_STUDENT_;
  }

  return Math.max(1, Math.floor(parsed));
}

function buildDeniedLoginResponse_(student, accessState) {
  return jsonOutput_({
    ok: false,
    approved: false,
    studentId: getStudentId_(student),
    approvalStatus: accessState.approvalStatus,
    reviewNote: accessState.reviewNote || "",
    message: accessState.message || "This account is not ready for access right now.",
  });
}

function getStudentLoginAccessState_(spreadsheet, student) {
  const studentStatus = normalizeValue_(getStudentStatus_(student));
  const approvalValue = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.loginApproval, ""));
  const latestRegistration = getLatestRegistrationForStudent_(spreadsheet, student);
  const registrationStatus = normalizeValue_(latestRegistration && latestRegistration.status);
  const reviewNote = String((latestRegistration && latestRegistration.reviewNote) || "").trim();
  const previewOnly = isPreviewAccessStudent_(student);
  const loginApproved = isLoginApproved_(student);

  if (registrationStatus === "rejected" || approvalValue === "rejected" || studentStatus === "rejected") {
    return {
      approvalStatus: "rejected",
      reviewNote: reviewNote,
      message: reviewNote || "Your registration was not approved by the admin. Please contact the office.",
    };
  }

  if (approvalValue === "pending" || studentStatus === "pending") {
    return {
      approvalStatus: "pending",
      reviewNote: reviewNote,
      message: "Your registration is waiting for admin approval. Video access will open after approval.",
    };
  }

  if (BLOCKED_STATUS_VALUES.indexOf(studentStatus) !== -1) {
    if (isSecurityLockedStudent_(student)) {
      return {
        approvalStatus: "approved",
        reviewNote: reviewNote,
        message: getStudentSecurityLockMessage_(student, SECURITY_LOCK_LOGIN_MESSAGE_),
      };
    }

    return {
      approvalStatus: "inactive",
      reviewNote: reviewNote,
      message: getStudentSecurityLockMessage_(student, "This student account is not active."),
    };
  }

  if (registrationStatus === "pending" && !loginApproved) {
    return {
      approvalStatus: "pending",
      reviewNote: reviewNote,
      message: "Your registration is waiting for admin approval. Video access will open after approval.",
    };
  }

  return {
    approvalStatus: "approved",
    reviewNote: reviewNote,
    message: previewOnly
      ? "Preview access approved. Videos will stay locked until admin approval."
      : "Login approved.",
  };
}

function isLoginApproved_(student) {
  const approvalValue = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.loginApproval, ""));
  return (
    APPROVED_LOGIN_VALUES.indexOf(approvalValue) !== -1 ||
    PREVIEW_LOGIN_VALUES.indexOf(approvalValue) !== -1
  );
}

function isPreviewAccessStudent_(student) {
  const approvalValue = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.loginApproval, ""));
  const accessModeValue = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.portalAccessMode, ""));
  return PREVIEW_LOGIN_VALUES.indexOf(approvalValue) !== -1 || PREVIEW_LOGIN_VALUES.indexOf(accessModeValue) !== -1;
}

function normalizeValue_(value) {
  return normalizeLookupText_(value).trim().toLowerCase();
}

function isPendingPaymentStatus_(value) {
  const normalized = normalizeValue_(value).replace(/\s+/g, "");
  return (
    normalized === "pending" ||
    normalized === "submitted" ||
    normalized === "underreview" ||
    normalized === "awaitingreview" ||
    normalized === "awaitingconfirmation"
  );
}

function normalizeUnlimitedAccessValue_(value) {
  return UNLIMITED_ACCESS_VALUES_.indexOf(normalizeValue_(value)) !== -1 ? "true" : "false";
}

function normalizePaymentAccessMonthCount_(value, fallback) {
  const parsed = Number(String(value || "").trim());
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return Math.max(1, Number(fallback || 1));
  }

  return Math.max(1, Math.floor(parsed));
}

function getPaymentApprovalBaseMode_(value) {
  const normalized = normalizeValue_(value);
  return normalized.indexOf("auto") === 0 ? "Auto Match" : "Manual Review";
}

function derivePaymentAccessSettings_(payment) {
  const approvalModeText = String((payment && payment.approvalMode) || "").trim();
  const unlimitedAccess = /\bunlimited\b/i.test(approvalModeText);
  const monthsMatch = approvalModeText.match(/(\d+)\s*month/i);

  return {
    accessMonths: unlimitedAccess ? 1 : normalizePaymentAccessMonthCount_(monthsMatch ? monthsMatch[1] : "", 1),
    unlimitedAccess: unlimitedAccess,
  };
}

function normalizePaymentAccessSettings_(options, payment) {
  const derivedSettings = derivePaymentAccessSettings_(payment);
  const unlimitedAccess = hasProvidedValue_(options && options.unlimitedAccess)
    ? normalizeUnlimitedAccessValue_(options.unlimitedAccess) === "true"
    : !!derivedSettings.unlimitedAccess;

  return {
    accessMonths: unlimitedAccess
      ? 1
      : normalizePaymentAccessMonthCount_(
          hasProvidedValue_(options && options.accessMonths)
            ? options.accessMonths
            : derivedSettings.accessMonths,
          1
        ),
    unlimitedAccess: unlimitedAccess,
  };
}

function buildPaymentApprovalModeLabel_(baseMode, accessMonths, unlimitedAccess) {
  return String(baseMode || "Manual Review").trim() +
    " - " +
    (unlimitedAccess
      ? "Unlimited"
      : String(normalizePaymentAccessMonthCount_(accessMonths, 1)) +
        " Month" +
        (normalizePaymentAccessMonthCount_(accessMonths, 1) === 1 ? "" : "s"));
}

function buildPaymentApprovalReviewNote_(baseMode, accessSettings) {
  const actionLabel = String(baseMode || "Manual Review").trim() === "Auto Match"
    ? "Approved automatically after transaction ID match"
    : "Payment approved from admin panel";

  if (accessSettings && accessSettings.unlimitedAccess) {
    return actionLabel + " with unlimited course access.";
  }

  const monthCount = normalizePaymentAccessMonthCount_(
    accessSettings && accessSettings.accessMonths,
    1
  );
  return (
    actionLabel +
    " for " +
    monthCount +
    " month" +
    (monthCount === 1 ? "" : "s") +
    "."
  );
}

function normalizeLocalizedDigit_(character) {
  const charCode = character.charCodeAt(0);

  for (let i = 0; i < LOCALIZED_DIGIT_RANGES_.length; i += 1) {
    const range = LOCALIZED_DIGIT_RANGES_[i];
    if (charCode >= range.start && charCode <= range.end) {
      return String(charCode - range.start);
    }
  }

  return character;
}

function normalizeLookupText_(value) {
  let text = String(value || "");

  if (typeof text.normalize === "function") {
    text = text.normalize("NFKC");
  }

  return text
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[\u2010-\u2015\u2212]/g, "-")
    .replace(/[\u09E6-\u09EF\u0660-\u0669\u06F0-\u06F9]/g, normalizeLocalizedDigit_);
}

function compactLookupValue_(value) {
  return normalizeValue_(value).replace(/[^a-z0-9]+/g, "");
}

function normalizePasswordValue_(value) {
  return normalizeLookupText_(value).replace(/\s+/g, " ").trim();
}

function canonicalLookupValue_(value) {
  const segments = normalizeValue_(value).match(/[a-z]+|\d+/g);
  if (!segments || !segments.length) {
    return "";
  }

  return segments
    .map(function (segment) {
      return /^\d+$/.test(segment) ? String(Number(segment)) : segment;
    })
    .join("");
}

function digitsOnlyValue_(value) {
  return normalizeLookupText_(value).replace(/\D/g, "");
}

function normalizePhoneLookupValue_(value) {
  const digits = digitsOnlyValue_(value);
  if (!digits) {
    return "";
  }

  if (digits.length === 10 && digits.indexOf("1") === 0) {
    return "0" + digits;
  }

  if (digits.length === 12 && digits.indexOf("88") === 0) {
    return "0" + digits.slice(2);
  }

  if (digits.length === 13 && digits.indexOf("880") === 0) {
    return "0" + digits.slice(3);
  }

  return digits;
}

function getStudentLookupTokens_(student) {
  const rawStudentId = getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.id, "");
  const rawEmail = getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, "");
  const rawPhone = getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, "");
  const tokens = [
    normalizeValue_(rawStudentId),
    compactLookupValue_(rawStudentId),
    canonicalLookupValue_(rawStudentId),
    normalizeValue_(rawEmail),
    compactLookupValue_(rawEmail),
    normalizePhoneLookupValue_(rawPhone),
  ];

  const idSegments = String(rawStudentId)
    .split(/[^a-zA-Z0-9]+/)
    .map(function (segment) {
      return normalizeValue_(segment);
    })
    .filter(function (segment) {
      return segment.length >= 2;
    });

  return tokens.concat(idSegments).filter(Boolean).filter(function (token, index, list) {
    return list.indexOf(token) === index;
  });
}

function getRegistrationLookupTokens_(registration) {
  const rawRegistrationId = getFirstAvailableValue_(registration, REGISTRATION_FIELD_KEYS_.id, "");
  const rawStudentId = getFirstAvailableValue_(registration, REGISTRATION_FIELD_KEYS_.studentId, "");
  const rawEmail = getFirstAvailableValue_(registration, REGISTRATION_FIELD_KEYS_.email, "");
  const rawPhone = getFirstAvailableValue_(registration, REGISTRATION_FIELD_KEYS_.phone, "");

  return [
    normalizeValue_(rawRegistrationId),
    compactLookupValue_(rawRegistrationId),
    canonicalLookupValue_(rawRegistrationId),
    normalizeValue_(rawStudentId),
    compactLookupValue_(rawStudentId),
    canonicalLookupValue_(rawStudentId),
    normalizeValue_(rawEmail),
    compactLookupValue_(rawEmail),
    normalizePhoneLookupValue_(rawPhone),
  ]
    .filter(Boolean)
    .filter(function (token, index, list) {
      return list.indexOf(token) === index;
    });
}

function getAdminByQuery_(admins, query) {
  const normalizedQuery = normalizeValue_(query);
  const compactQuery = compactLookupValue_(query);

  return (
    admins.find(function (admin) {
      const tokens = [
        normalizeValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.username, "")),
        compactLookupValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.username, "")),
        normalizeValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.email, "")),
        compactLookupValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.email, "")),
        normalizeValue_(getFirstAvailableValue_(admin, ADMIN_FIELD_KEYS_.id, "")),
      ].filter(Boolean);

      return (
        (normalizedQuery && tokens.indexOf(normalizedQuery) !== -1) ||
        (compactQuery && tokens.indexOf(compactQuery) !== -1)
      );
    }) || null
  );
}

function getFirstAvailableValue_(record, keys, fallback) {
  if (!Array.isArray(keys) || !keys.length) {
    return fallback || "";
  }

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
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

  return fallback || "";
}

function parseJsonField_(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "object") {
    return value;
  }

  try {
    return JSON.parse(String(value));
  } catch (error) {
    return null;
  }
}

function parseStringList_(value) {
  if (Array.isArray(value)) {
    return value
      .reduce(function (result, item) {
        return result.concat(parseStringList_(item));
      }, [])
      .filter(Boolean)
      .filter(function (item, index, list) {
        return list.indexOf(item) === index;
      });
  }

  return String(value || "")
    .split(/[\r\n|,;]+/)
    .map(function (item) {
      return String(item || "").trim();
    })
    .filter(Boolean)
    .filter(function (item, index, list) {
      return list.indexOf(item) === index;
    });
}

function getCourseLookupTokens_(course) {
  return [
    normalizeValue_(course.id),
    compactLookupValue_(course.id),
    canonicalLookupValue_(course.id),
    normalizeValue_(course.title),
    compactLookupValue_(course.title),
    canonicalLookupValue_(course.title),
    normalizeValue_(course.shortTitle),
    compactLookupValue_(course.shortTitle),
    canonicalLookupValue_(course.shortTitle),
  ].filter(Boolean);
}

function buildCourseIdList_(value, courses) {
  const rawItems = parseStringList_(value);
  if (!rawItems.length) {
    return [];
  }

  const hasCourseCatalog = Array.isArray(courses) && courses.length > 0;
  const courseMap = {};
  (courses || []).forEach(function (course) {
    getCourseLookupTokens_(course).forEach(function (token) {
      if (!courseMap[token]) {
        courseMap[token] = course.id;
      }
    });
  });

  return rawItems
    .map(function (item) {
      const tokens = [normalizeValue_(item), compactLookupValue_(item), canonicalLookupValue_(item)].filter(Boolean);
      for (let i = 0; i < tokens.length; i += 1) {
        if (courseMap[tokens[i]]) {
          return courseMap[tokens[i]];
        }
      }

      return hasCourseCatalog ? "" : item;
    })
    .filter(Boolean)
    .filter(function (item, index, list) {
      return list.indexOf(item) === index;
    });
}

function buildPipeList_(values) {
  return parseStringList_(values).join("|");
}

function buildRegistrationReviewFromStudent_(student) {
  const approvalValue = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.loginApproval, ""));
  const statusValue = normalizeValue_(getStudentStatus_(student));

  if (approvalValue === "rejected") {
    return {
      status: "Rejected",
      reviewNote: "Rejected from admin panel.",
    };
  }

  if (approvalValue === "pending" || statusValue === "pending") {
    return {
      status: "Pending",
      reviewNote: "Marked pending from admin panel.",
    };
  }

  if (isPreviewAccessStudent_(student)) {
    return {
      status: "Approved",
      reviewNote: "Class list only access granted from admin panel.",
    };
  }

  if (statusValue === "blocked" || statusValue === "suspended" || statusValue === "expired" || statusValue === "inactive") {
    return {
      status: "Blocked",
      reviewNote: "Access blocked from admin panel.",
    };
  }

  if (isLoginApproved_(student) || statusValue === "active") {
    return {
      status: "Approved",
      reviewNote: "Approved from admin panel.",
    };
  }

  return null;
}

function findLatestRegistrationIndexForStudent_(registrations, student) {
  const studentId = getStudentId_(student);
  const phone = normalizePhoneLookupValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, ""));
  const email = normalizeValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, ""));
  let matchedIndex = -1;

  (registrations || []).forEach(function (registration, index) {
    const registrationStudentId = String(registration.studentId || "").trim();
    const registrationPhone = normalizePhoneLookupValue_(registration.phone || "");
    const registrationEmail = normalizeValue_(registration.email || "");

    if (
      (studentId && registrationStudentId === studentId) ||
      (phone && registrationPhone === phone) ||
      (email && registrationEmail === email)
    ) {
      matchedIndex = index;
    }
  });

  return matchedIndex;
}

function getLatestRegistrationForStudent_(spreadsheet, student) {
  if (!spreadsheet || !student) {
    return null;
  }

  const registrations = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.registrations));
  const matchIndex = findLatestRegistrationIndexForStudent_(registrations, student);
  return matchIndex === -1 ? null : registrations[matchIndex];
}

function syncLatestRegistrationReviewsForStudents_(spreadsheet, students, auth) {
  const selectedStudents = (students || []).filter(Boolean);
  if (!selectedStudents.length) {
    return;
  }

  const registrationsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.registrations);
  if (!registrationsData.records.length) {
    return;
  }

  const reviewedOn = getNowIso_();
  const reviewedBy = auth ? auth.username || auth.name || auth.id || "" : "";
  const nextRegistrations = registrationsData.records.slice();
  let hasChanges = false;

  selectedStudents.forEach(function (student) {
    const review = buildRegistrationReviewFromStudent_(student);
    if (!review) {
      return;
    }

    const matchIndex = findLatestRegistrationIndexForStudent_(nextRegistrations, student);
    if (matchIndex === -1) {
      return;
    }

    const nextRegistration = Object.assign({}, nextRegistrations[matchIndex]);
    nextRegistration.studentId = getStudentId_(student) || nextRegistration.studentId || "";
    nextRegistration.name = String(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.name, nextRegistration.name || "")
    ).trim();
    nextRegistration.phone = normalizePhoneLookupValue_(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.phone, nextRegistration.phone || "")
    );
    nextRegistration.email = String(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.email, nextRegistration.email || "")
    ).trim();
    nextRegistration.batch = String(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.batch, nextRegistration.batch || "")
    ).trim();
    nextRegistration.session = String(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.session, nextRegistration.session || "")
    ).trim();
    nextRegistration.password = normalizePasswordValue_(
      getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.password, nextRegistration.password || "")
    );
    nextRegistration.status = review.status;
    nextRegistration.reviewedOn = reviewedOn;
    nextRegistration.reviewedBy = reviewedBy;
    nextRegistration.reviewNote = review.reviewNote;
    nextRegistrations[matchIndex] = nextRegistration;
    hasChanges = true;
  });

  if (hasChanges) {
    writeSheetEntries_(registrationsData.sheet, registrationsData.headers, nextRegistrations);
  }
}

function getSpreadsheet_() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (spreadsheet) {
    return spreadsheet;
  }

  throw new Error(
    "No spreadsheet is connected. Bind this Apps Script to a Google Sheet or set SPREADSHEET_ID."
  );
}

function ensurePortalSheets_(spreadsheet) {
  Object.keys(SHEET_NAMES).forEach(function (key) {
    ensureSheetWithHeaders_(spreadsheet, SHEET_NAMES[key], SHEET_HEADERS[key] || []);
  });

  return spreadsheet;
}

function ensureDefaultAdminIfMissing_(adminsData) {
  if (adminsData.records.length) {
    return adminsData.records;
  }

  const defaultAdmin = Object.assign(
    {
      id: "admin-01",
      username: "prottoy",
      name: "Portal Admin",
      email: "Prottoybiswas575358@gmail.com",
      password: "Prottoy75@",
      status: "Active",
      role: "Super Admin",
    },
    (SAMPLE_DATA.admins && SAMPLE_DATA.admins[0]) || {}
  );

  writeSheetEntries_(adminsData.sheet, adminsData.headers, [defaultAdmin]);
  return [defaultAdmin];
}

function buildStatusPayload_(spreadsheet) {
  spreadsheet = spreadsheet || getSpreadsheet_();
  const sheetNames = spreadsheet.getSheets().map(function (sheet) {
    return sheet.getName();
  });
  const requiredSheetNames = Object.keys(SHEET_NAMES).map(function (key) {
    return SHEET_NAMES[key];
  });

  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    spreadsheetUrl: spreadsheet.getUrl(),
    requiredSheets: requiredSheetNames,
    availableSheets: sheetNames,
    missingSheets: requiredSheetNames.filter(function (sheetName) {
      return sheetNames.indexOf(sheetName) === -1;
    }),
  };
}

function ensureSheetWithHeaders_(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (!headers.length) {
    return sheet;
  }

  const existingHeaders = sheet.getRange(1, 1, 1, headers.length).getDisplayValues()[0];
  const needsHeaderUpdate = headers.some(function (header, index) {
    return existingHeaders[index] !== header;
  });

  if (needsHeaderUpdate) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  sheet.setFrozenRows(1);
  return sheet;
}

function seedSheetIfEmpty_(sheet, headers, rows) {
  if (!sheet || !headers.length || !rows.length) {
    return 0;
  }

  const existingDataRows = Math.max(sheet.getLastRow() - 1, 0);
  if (existingDataRows > 0) {
    return 0;
  }

  const values = rows.map(function (record) {
    return headers.map(function (header) {
      return serializeRowValue_(record[header] || "");
    });
  });
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
  return values.length;
}

function loadSheetEntries_(spreadsheet, sheetName) {
  const key = Object.keys(SHEET_NAMES).find(function (entry) {
    return SHEET_NAMES[entry] === sheetName;
  });
  const headers = SHEET_HEADERS[key] || [];
  const sheet = ensureSheetWithHeaders_(spreadsheet, sheetName, headers);
  return {
    sheet: sheet,
    headers: headers,
    records: readSheet_(sheet),
  };
}

function writeSheetEntries_(sheet, headers, records) {
  const lastRow = sheet.getLastRow();
  const clearColumns = Math.max(sheet.getLastColumn(), headers.length || 1);

  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, clearColumns).clearContent();
  }

  if (!records.length || !headers.length) {
    invalidatePublicReadCaches_();
    flushSpreadsheetChanges_();
    return;
  }

  const values = records.map(function (record) {
    return headers.map(function (header) {
      return serializeRowValue_(record[header]);
    });
  });

  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
  invalidatePublicReadCaches_();
  flushSpreadsheetChanges_();
}
  
function flushSpreadsheetChanges_() {
  try {
    SpreadsheetApp.flush();
  } catch (error) {
    // Ignore flush failures and allow the write to continue.
  }
}

function serializeRowValue_(value) {
  if (Array.isArray(value)) {
    return value.join("|");
  }

  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
}

function hasProvidedValue_(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== null && value !== undefined && String(value).trim() !== "";
}

function syncStudentCourses_(spreadsheet, studentIds, courseIds, defaults) {
  const normalizedStudentIds = parseStringList_(studentIds);
  const normalizedCourseIds = parseStringList_(courseIds);
  const studentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.students);
  const enrollmentsData = loadSheetEntries_(spreadsheet, SHEET_NAMES.enrollments);
  const currentEnrollments = enrollmentsData.records || [];
  const preservedMap = {};
  const replaceExisting = !!(defaults && defaults.replaceExisting);
  const courseRulesMap =
    defaults && defaults.courseRulesMap && typeof defaults.courseRulesMap === "object"
      ? defaults.courseRulesMap
      : {};

  currentEnrollments.forEach(function (enrollment) {
    preservedMap[String(enrollment.studentId || "") + "::" + String(enrollment.courseId || "")] = enrollment;
  });

  const selectedLookup = {};
  normalizedStudentIds.forEach(function (studentId) {
    selectedLookup[studentId] = true;
  });

  const nextEnrollments = currentEnrollments.filter(function (enrollment) {
    return !selectedLookup[String(enrollment.studentId || "")];
  });

  normalizedStudentIds.forEach(function (studentId) {
    normalizedCourseIds.forEach(function (courseId) {
      const key = studentId + "::" + courseId;
      const existing = preservedMap[key] || {};
      const courseDefaultsRaw =
        courseRulesMap[courseId] && typeof courseRulesMap[courseId] === "object"
          ? courseRulesMap[courseId]
          : {};
      const courseDefaults = {
        accessStartDate: hasProvidedValue_(courseDefaultsRaw.accessStartDate)
          ? courseDefaultsRaw.accessStartDate
          : defaults.accessStartDate || "",
        accessEndDate: hasProvidedValue_(courseDefaultsRaw.accessEndDate)
          ? courseDefaultsRaw.accessEndDate
          : defaults.accessEndDate || "",
        unlimitedAccess: hasProvidedValue_(courseDefaultsRaw.unlimitedAccess)
          ? courseDefaultsRaw.unlimitedAccess
          : defaults.unlimitedAccess || "",
        videoAccessUntil: hasProvidedValue_(courseDefaultsRaw.videoAccessUntil)
          ? courseDefaultsRaw.videoAccessUntil
          : defaults.videoAccessUntil || "",
        lastPaymentDate: hasProvidedValue_(courseDefaultsRaw.lastPaymentDate)
          ? courseDefaultsRaw.lastPaymentDate
          : defaults.lastPaymentDate || "",
        paymentDueDate: hasProvidedValue_(courseDefaultsRaw.paymentDueDate)
          ? courseDefaultsRaw.paymentDueDate
          : defaults.paymentDueDate || "",
        monthlyFee: hasProvidedValue_(courseDefaultsRaw.monthlyFee)
          ? courseDefaultsRaw.monthlyFee
          : defaults.monthlyFee || "",
        status: hasProvidedValue_(courseDefaultsRaw.status)
          ? courseDefaultsRaw.status
          : defaults.status || "",
        paidMonths: hasProvidedValue_(courseDefaultsRaw.paidMonths)
          ? courseDefaultsRaw.paidMonths
          : defaults.paidMonths || "",
      };
      const accessStartDate =
        replaceExisting && hasProvidedValue_(courseDefaults.accessStartDate)
          ? courseDefaults.accessStartDate
          : existing.accessStartDate || courseDefaults.accessStartDate || getTodayIso_();
      const accessEndDate =
        replaceExisting && hasProvidedValue_(courseDefaults.accessEndDate)
          ? courseDefaults.accessEndDate
          : existing.accessEndDate || courseDefaults.accessEndDate || "";
      const unlimitedAccess =
        replaceExisting && hasProvidedValue_(courseDefaults.unlimitedAccess)
          ? normalizeUnlimitedAccessValue_(courseDefaults.unlimitedAccess)
          : hasProvidedValue_(existing.unlimitedAccess)
          ? normalizeUnlimitedAccessValue_(existing.unlimitedAccess)
          : hasProvidedValue_(courseDefaults.unlimitedAccess)
          ? normalizeUnlimitedAccessValue_(courseDefaults.unlimitedAccess)
          : "false";
      const videoAccessUntil =
        replaceExisting && hasProvidedValue_(courseDefaults.videoAccessUntil)
          ? courseDefaults.videoAccessUntil
          : existing.videoAccessUntil || courseDefaults.videoAccessUntil || "";
      const lastPaymentDate =
        replaceExisting && hasProvidedValue_(courseDefaults.lastPaymentDate)
          ? courseDefaults.lastPaymentDate
          : existing.lastPaymentDate || courseDefaults.lastPaymentDate || "";
      const paymentDueDate =
        replaceExisting && hasProvidedValue_(courseDefaults.paymentDueDate)
          ? courseDefaults.paymentDueDate
          : existing.paymentDueDate || courseDefaults.paymentDueDate || "";
      const monthlyFee =
        replaceExisting && hasProvidedValue_(courseDefaults.monthlyFee)
          ? courseDefaults.monthlyFee
          : existing.monthlyFee || courseDefaults.monthlyFee || "";
      const status =
        replaceExisting && hasProvidedValue_(courseDefaults.status)
          ? courseDefaults.status
          : existing.status || courseDefaults.status || "Active";
      const paidMonths =
        replaceExisting && hasProvidedValue_(courseDefaults.paidMonths)
          ? courseDefaults.paidMonths
          : existing.paidMonths || courseDefaults.paidMonths || "";

      nextEnrollments.push({
        id: existing.id || Utilities.getUuid(),
        studentId: studentId,
        courseId: courseId,
        accessStartDate: accessStartDate,
        accessEndDate: accessEndDate,
        unlimitedAccess: unlimitedAccess,
        videoAccessUntil: videoAccessUntil,
        lastPaymentDate: lastPaymentDate,
        paymentDueDate: paymentDueDate,
        monthlyFee: monthlyFee,
        status: status,
        paidMonths: paidMonths,
      });
    });
  });

  writeSheetEntries_(
    studentsData.sheet,
    studentsData.headers,
    studentsData.records.map(function (student) {
      const studentId = getStudentId_(student);
      if (!selectedLookup[studentId]) {
        return student;
      }

      const nextStudent = Object.assign({}, student);
      nextStudent.enrolledCourseIds = buildPipeList_(normalizedCourseIds);
      return nextStudent;
    })
  );

  writeSheetEntries_(enrollmentsData.sheet, enrollmentsData.headers, nextEnrollments);
}

function getAuthorizedAdminSession_(request) {
  const token = String(request.token || "").trim();
  if (!token) {
    return null;
  }

  const cachedPayload = readAdminSessionPayloadFromCache_(token);
  const storedPayload = cachedPayload || readAdminSessionPayloadFromStore_(token);
  if (!storedPayload) {
    return null;
  }

  if (isAdminSessionExpired_(storedPayload)) {
    deleteAdminSessionPayload_(token);
    return null;
  }

  const refreshedPayload = refreshAdminSessionPayloadExpiry_(storedPayload);
  storeAdminSessionPayload_(token, refreshedPayload);
  return sanitizeAdminSessionPayload_(refreshedPayload);
}

function putAdminSession_(admin) {
  const token = Utilities.getUuid();
  const payload = refreshAdminSessionPayloadExpiry_({
    id: admin.id || "",
    username: admin.username || "",
    name: admin.name || "",
    role: admin.role || "",
    email: admin.email || "",
  });
  storeAdminSessionPayload_(token, payload);
  return token;
}

function getAdminSessionStorageKey_(token) {
  return ADMIN_TOKEN_PREFIX_ + String(token || "").trim();
}

function getAdminSessionStore_() {
  try {
    return PropertiesService.getScriptProperties();
  } catch (error) {
    return null;
  }
}

function refreshAdminSessionPayloadExpiry_(payload) {
  const nextPayload = Object.assign({}, payload);
  nextPayload.expiresAt = Date.now() + ADMIN_TOKEN_TTL_SECONDS_ * 1000;
  return nextPayload;
}

function sanitizeAdminSessionPayload_(payload) {
  const nextPayload = Object.assign({}, payload);
  delete nextPayload.expiresAt;
  return nextPayload;
}

function isAdminSessionExpired_(payload) {
  const expiresAt = Number(payload && payload.expiresAt);
  return !expiresAt || expiresAt <= Date.now();
}

function readAdminSessionPayloadFromCache_(token) {
  try {
    const raw = CacheService.getScriptCache().get(getAdminSessionStorageKey_(token));
    return raw ? parseJsonField_(raw) : null;
  } catch (error) {
    return null;
  }
}

function readAdminSessionPayloadFromStore_(token) {
  const store = getAdminSessionStore_();
  if (!store) {
    return null;
  }

  try {
    const raw = store.getProperty(getAdminSessionStorageKey_(token));
    return raw ? parseJsonField_(raw) : null;
  } catch (error) {
    return null;
  }
}

function storeAdminSessionPayload_(token, payload) {
  const key = getAdminSessionStorageKey_(token);

  try {
    CacheService.getScriptCache().put(key, JSON.stringify(payload), ADMIN_TOKEN_TTL_SECONDS_);
  } catch (error) {
    // Ignore cache write failures.
  }

  const store = getAdminSessionStore_();
  if (!store) {
    return;
  }

  try {
    store.setProperty(key, JSON.stringify(payload));
  } catch (error) {
    // Ignore property write failures.
  }
}

function deleteAdminSessionPayload_(token) {
  const key = getAdminSessionStorageKey_(token);

  try {
    CacheService.getScriptCache().remove(key);
  } catch (error) {
    // Ignore cache delete failures.
  }

  const store = getAdminSessionStore_();
  if (!store) {
    return;
  }

  try {
    store.deleteProperty(key);
  } catch (error) {
    // Ignore property delete failures.
  }
}

function buildAdminPayload_(spreadsheet, adminSession) {
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    admin: adminSession || null,
    students: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students)),
    courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
    lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
    enrollments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
    admins: sanitizeAdmins_(readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.admins))),
    registrations: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.registrations)),
    messages: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.messages)),
    devices: sanitizeDevicesForAdmin_(readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.devices))),
    payments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.payments)),
  };
}

function generateStudentId_(students) {
  const year = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "Asia/Dhaka", "yyyy");
  const prefix = "STU-" + year + "-";
  let maxNumber = 0;

  (students || []).forEach(function (student) {
    const match = getStudentId_(student).match(/(\d+)$/);
    if (match) {
      maxNumber = Math.max(maxNumber, Number(match[1]));
    }
  });

  return prefix + String(maxNumber + 1).padStart(3, "0");
}

function generateRegistrationId_(registrations) {
  const datePart = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "Asia/Dhaka", "yyyyMMdd");
  let maxNumber = 0;

  (registrations || []).forEach(function (registration) {
    const match = String(registration.id || "").match(/-(\d+)$/);
    if (match) {
      maxNumber = Math.max(maxNumber, Number(match[1]));
    }
  });

  return "REG-" + datePart + "-" + String(maxNumber + 1).padStart(3, "0");
}

function slugify_(value) {
  return normalizeLookupText_(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function getTodayIso_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "Asia/Dhaka", "yyyy-MM-dd");
}

function getNowIso_() {
  return new Date().toISOString();
}

function normalizeIsoDateValue_(value) {
  const text = String(value || "").trim();
  if (!text) {
    return getTodayIso_();
  }

  const directDate = new Date(text);
  if (!Number.isNaN(directDate.getTime())) {
    return Utilities.formatDate(directDate, Session.getScriptTimeZone() || "Asia/Dhaka", "yyyy-MM-dd");
  }

  return getTodayIso_();
}

function addMonthsIso_(isoDate, monthCount) {
  const baseDate = new Date(String(isoDate || getTodayIso_()).trim() + "T00:00:00");
  if (Number.isNaN(baseDate.getTime())) {
    return getTodayIso_();
  }

  baseDate.setMonth(baseDate.getMonth() + Number(monthCount || 0));
  return Utilities.formatDate(baseDate, Session.getScriptTimeZone() || "Asia/Dhaka", "yyyy-MM-dd");
}

function getEarliestCourseLessonReleaseDate_(spreadsheet, courseId) {
  if (!spreadsheet || !courseId) {
    return "";
  }

  const lessons = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons))
    .filter(function (lesson) {
      return String(lesson.courseId || "").trim() === courseId && String(lesson.releaseDate || "").trim();
    })
    .sort(function (left, right) {
      return new Date(left.releaseDate || 0) - new Date(right.releaseDate || 0);
    });

  if (!lessons.length) {
    return "";
  }

  return normalizeIsoDateValue_(lessons[0].releaseDate || "");
}

function jsonOutput_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function unauthorizedOutput_() {
  return jsonOutput_({
    ok: false,
    message: "Admin authentication is required.",
  });
}

function errorOutput_(error) {
  return jsonOutput_({
    ok: false,
    message: error && error.message ? error.message : "Unknown Apps Script error.",
  });
}
