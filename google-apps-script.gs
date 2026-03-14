const SHEET_NAMES = {
  students: "Students",
  courses: "Courses",
  lessons: "Lessons",
  notices: "Notices",
  enrollments: "Enrollments",
  admins: "Admins",
  registrations: "Registrations",
  messages: "Messages",
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
  ],
  courses: ["id", "title", "shortTitle", "faculty", "category", "schedule", "nextLive", "description"],
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
  messages: ["id", "studentIds", "title", "message", "status", "createdOn", "createdBy"],
};

const APPROVED_LOGIN_VALUES = ["approved", "yes", "true", "allow", "allowed", "active", "1"];
const PREVIEW_LOGIN_VALUES = ["preview", "viewonly", "readonly", "audit", "curriculum", "classlist", "listonly", "outline"];
const BLOCKED_STATUS_VALUES = ["inactive", "blocked", "suspended", "expired", "rejected"];
const ADMIN_TOKEN_PREFIX_ = "ain-pathshala.admin-token.";
const ADMIN_TOKEN_TTL_SECONDS_ = 21600;
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
  status: ["status", "studentStatus", "accountStatus", "activeStatus"],
  password: ["password", "loginPassword", "portalPassword", "studentPassword", "passcode", "pin", "loginPin"],
  loginApproval: ["loginApproval", "approval", "loginApproved", "portalApproval", "approvalStatus", "accessApproval"],
  portalAccessMode: ["portalAccessMode", "accessMode", "studentAccessMode", "videoAccessMode", "portalMode"],
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
    },
  ],
  courses: [
    {
      id: "judiciary-foundation",
      title: "Judiciary Foundation",
      shortTitle: "Judiciary",
      faculty: "Adv. Mahmudul Hasan",
      category: "Core Preparation",
      schedule: "Sun, Tue, Thu at 8:30 PM",
      nextLive: "2026-03-14T20:30:00+06:00",
      description: "Constitution, core law topics, and MCQ preparation.",
    },
    {
      id: "criminal-procedure-mastery",
      title: "Criminal Procedure Mastery",
      shortTitle: "Criminal Procedure",
      faculty: "Barrister Samiha Karim",
      category: "Procedure Track",
      schedule: "Mon, Wed at 9:00 PM",
      nextLive: "2026-03-15T21:00:00+06:00",
      description: "From FIR to trial in a structured, exam-focused format.",
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
};

function doGet(e) {
  try {
    const request = parseRequest_(e);
    const action = normalizeValue_(request.action);
    const spreadsheet = ensurePortalSheets_(getSpreadsheet_());

    if (action === "status") {
      return jsonOutput_(buildStatusPayload_(spreadsheet));
    }

    const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));

    return jsonOutput_({
      ok: true,
      generatedAt: new Date().toISOString(),
      spreadsheetId: spreadsheet.getId(),
      spreadsheetName: spreadsheet.getName(),
      students: sanitizeStudents_(students),
      courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
      lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
      notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
      enrollments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
    });
  } catch (error) {
    return errorOutput_(error);
  }
}

function doPost(e) {
  try {
    const request = parseRequest_(e);
    const action = normalizeValue_(request.action);
    ensurePortalSheets_(getSpreadsheet_());

    if (action === "login") return handleLogin_(request);
    if (action === "adminlogin") return handleAdminLogin_(request);
    if (action === "registerstudent") return handleStudentRegistration_(request);
    if (action === "admingetdashboard") return handleAdminGetDashboard_(request);
    if (action === "adminupdatestudent") return handleAdminUpdateStudent_(request);
    if (action === "adminbulkstudentaction") return handleAdminBulkStudentAction_(request);
    if (action === "adminassigncourses") return handleAdminAssignCourses_(request);
    if (action === "admincreatecourse") return handleAdminCreateCourse_(request);
    if (action === "admindeletecourse") return handleAdminDeleteCourse_(request);
    if (action === "adminapproveregistration") return handleAdminApproveRegistration_(request);
    if (action === "adminrejectregistration") return handleAdminRejectRegistration_(request);
    if (action === "adminsendmessage") return handleAdminSendMessage_(request);

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

  return buildStatusPayload_(spreadsheet);
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
    return jsonOutput_({ ok: false, message: "Student ID, phone number, or email is required." });
  }

  if (!password) {
    return jsonOutput_({ ok: false, message: "Password is required." });
  }

  const spreadsheet = getSpreadsheet_();
  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
  const student = findStudentByQuery_(students, query);

  if (!student) {
    return jsonOutput_({ ok: false, message: "No matching student was found." });
  }

  const studentStatus = normalizeValue_(getStudentStatus_(student));
  if (BLOCKED_STATUS_VALUES.indexOf(studentStatus) !== -1) {
    return jsonOutput_({
      ok: false,
      approved: false,
      studentId: getStudentId_(student),
      message: "This student account is not active.",
    });
  }

  if (!isLoginApproved_(student)) {
    return jsonOutput_({
      ok: false,
      approved: false,
      studentId: getStudentId_(student),
      message: "This account is not ready for access right now.",
    });
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

  const previewOnly = isPreviewAccessStudent_(student);

  return jsonOutput_({
    ok: true,
    approved: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    previewOnly: previewOnly,
    studentId: getStudentId_(student),
    students: sanitizeStudents_(students),
    courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
    lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
    enrollments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
    message: previewOnly ? "Preview access approved." : "Login approved.",
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
  const courses = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses));

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
  const note = requestedCourses.length
    ? "Registered online and waiting for admin approval."
    : "Registered online. Course selection pending admin review.";

  const nextStudent = Object.assign(
    {
      id: studentId,
      name: name,
      phone: phone,
      email: email,
      batch: batch,
      session: session,
      joinedOn: today,
      status: "Pending",
      profileImage: "",
      password: password,
      loginApproval: "Pending",
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
  nextStudent.status = "Pending";
  nextStudent.password = password;
  nextStudent.loginApproval = "Pending";
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
        status: "Pending",
        submittedOn: getNowIso_(),
        reviewedOn: "",
        reviewedBy: "",
        reviewNote: "",
      },
    ])
  );

  return jsonOutput_({
    ok: true,
    message: "Registration submitted. Wait for admin approval.",
    studentId: studentId,
    registrationId: registrationId,
  });
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
  nextStudent.enrolledCourseIds = buildPipeList_(courseIds);

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
    } else if (action === "preview" || action === "classlist" || action === "listonly") {
      nextStudent.status = "Active";
      nextStudent.loginApproval = "Approved";
      nextStudent.portalAccessMode = "Preview";
    } else if (action === "activate") {
      nextStudent.status = "Active";
      nextStudent.portalAccessMode = "";
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

  syncStudentCourses_(spreadsheet, studentIds, courseIds, {
    accessStartDate: request.accessStartDate || "",
    accessEndDate: request.accessEndDate || "",
    videoAccessUntil: request.videoAccessUntil || "",
    lastPaymentDate: request.lastPaymentDate || "",
    paymentDueDate: request.paymentDueDate || "",
    monthlyFee: request.monthlyFee || "",
    status: request.status || "",
    paidMonths: request.paidMonths || "",
    replaceExisting: request.replaceExisting === "true",
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
      schedule: String(payload.schedule || "Schedule pending").trim(),
      nextLive: String(payload.nextLive || "").trim(),
      description: String(payload.description || "").trim(),
    },
    existing || {}
  );

  nextCourse.id = courseId;
  nextCourse.title = title;
  nextCourse.shortTitle = shortTitle;
  nextCourse.faculty = String(payload.faculty || nextCourse.faculty || "").trim();
  nextCourse.category = String(payload.category || nextCourse.category || "").trim();
  nextCourse.schedule = String(payload.schedule || nextCourse.schedule || "").trim();
  nextCourse.nextLive = String(payload.nextLive || nextCourse.nextLive || "").trim();
  nextCourse.description = String(payload.description || nextCourse.description || "").trim();

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
      enrolledCourseIds: buildPipeList_(requestedCourses),
      completedLessonIds: "",
    },
    existingStudent || {}
  );

  nextStudent.id = studentId;
  nextStudent.status = "Active";
  nextStudent.loginApproval = "Approved";
  nextStudent.portalAccessMode = "";
  nextStudent.password = normalizePasswordValue_(nextStudent.password || registration.password || "");
  nextStudent.enrolledCourseIds = buildPipeList_(requestedCourses);
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

  syncStudentCourses_(spreadsheet, [studentId], requestedCourses, {
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

  writeSheetEntries_(
    messagesData.sheet,
    messagesData.headers,
    messagesData.records.concat([
      {
        id: Utilities.getUuid(),
        studentIds: buildPipeList_(studentIds),
        title: title || "Admin Message",
        message: message,
        status: "Sent",
        createdOn: getNowIso_(),
        createdBy: auth.username || auth.name || auth.id || "",
      },
    ])
  );

  return jsonOutput_(buildAdminPayload_(spreadsheet, auth));
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

function getStudentId_(student) {
  return String(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.id, "")).trim();
}

function getStudentPassword_(student) {
  return normalizePasswordValue_(getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.password, ""));
}

function getStudentStatus_(student) {
  return getFirstAvailableValue_(student, STUDENT_FIELD_KEYS_.status, "");
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

      return item;
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
      username: "admin",
      name: "Portal Admin",
      email: "support@ainpathshala.com",
      password: "admin123",
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
    return;
  }

  const values = records.map(function (record) {
    return headers.map(function (header) {
      return serializeRowValue_(record[header]);
    });
  });

  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
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
      const accessStartDate =
        replaceExisting && hasProvidedValue_(defaults.accessStartDate)
          ? defaults.accessStartDate
          : existing.accessStartDate || defaults.accessStartDate || getTodayIso_();
      const accessEndDate =
        replaceExisting && hasProvidedValue_(defaults.accessEndDate)
          ? defaults.accessEndDate
          : existing.accessEndDate || defaults.accessEndDate || "";
      const videoAccessUntil =
        replaceExisting && hasProvidedValue_(defaults.videoAccessUntil)
          ? defaults.videoAccessUntil
          : existing.videoAccessUntil || defaults.videoAccessUntil || "";
      const lastPaymentDate =
        replaceExisting && hasProvidedValue_(defaults.lastPaymentDate)
          ? defaults.lastPaymentDate
          : existing.lastPaymentDate || defaults.lastPaymentDate || "";
      const paymentDueDate =
        replaceExisting && hasProvidedValue_(defaults.paymentDueDate)
          ? defaults.paymentDueDate
          : existing.paymentDueDate || defaults.paymentDueDate || "";
      const monthlyFee =
        replaceExisting && hasProvidedValue_(defaults.monthlyFee)
          ? defaults.monthlyFee
          : existing.monthlyFee || defaults.monthlyFee || "";
      const status =
        replaceExisting && hasProvidedValue_(defaults.status)
          ? defaults.status
          : existing.status || defaults.status || "Active";
      const paidMonths =
        replaceExisting && hasProvidedValue_(defaults.paidMonths)
          ? defaults.paidMonths
          : existing.paidMonths || defaults.paidMonths || "";

      nextEnrollments.push({
        id: existing.id || Utilities.getUuid(),
        studentId: studentId,
        courseId: courseId,
        accessStartDate: accessStartDate,
        accessEndDate: accessEndDate,
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

  const cache = CacheService.getScriptCache();
  const raw = cache.get(ADMIN_TOKEN_PREFIX_ + token);
  if (!raw) {
    return null;
  }

  const payload = parseJsonField_(raw);
  if (!payload) {
    return null;
  }

  cache.put(ADMIN_TOKEN_PREFIX_ + token, JSON.stringify(payload), ADMIN_TOKEN_TTL_SECONDS_);
  return payload;
}

function putAdminSession_(admin) {
  const token = Utilities.getUuid();
  CacheService.getScriptCache().put(
    ADMIN_TOKEN_PREFIX_ + token,
    JSON.stringify({
      id: admin.id || "",
      username: admin.username || "",
      name: admin.name || "",
      role: admin.role || "",
      email: admin.email || "",
    }),
    ADMIN_TOKEN_TTL_SECONDS_
  );
  return token;
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
