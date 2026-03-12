const SHEET_NAMES = {
  students: "Students",
  courses: "Courses",
  lessons: "Lessons",
  notices: "Notices",
  enrollments: "Enrollments",
};

// If you use a standalone Apps Script project or manage multiple spreadsheets,
// paste the target Google Sheet ID here. Leave it blank only when the script is
// bound directly to the same spreadsheet you want to use.
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
    "youtubeId",
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
  ],
};

const APPROVED_LOGIN_VALUES = ["approved", "yes", "true", "allow", "allowed", "active", "1"];
const BLOCKED_STATUS_VALUES = ["inactive", "blocked", "suspended", "expired"];

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
      youtubeId: "M7lc1UVf-VE",
      releaseDate: "2026-03-05",
      resources: "PDF outline|MCQ drill set",
      note: "Start here for judiciary preparation.",
    },
    {
      id: "jud-02",
      courseId: "judiciary-foundation",
      module: "Core Principles",
      title: "Natural justice and judicial review",
      duration: "44 min",
      youtubeId: "ysz5S6PUM-U",
      releaseDate: "2026-03-08",
      resources: "Case digest|Revision notes",
      note: "Good for revision before tests.",
    },
    {
      id: "crim-01",
      courseId: "criminal-procedure-mastery",
      module: "Investigation Flow",
      title: "From FIR to police report",
      duration: "41 min",
      youtubeId: "aqz-KE-bpKQ",
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
      videoAccessUntil: "2026-03-13",
      lastPaymentDate: "2026-03-05",
      paymentDueDate: "2026-04-05",
      monthlyFee: "1500",
      status: "Active",
    },
    {
      studentId: "LAW-2026-014",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-10",
      accessEndDate: "2026-08-10",
      videoAccessUntil: "2026-03-09",
      lastPaymentDate: "2026-03-01",
      paymentDueDate: "2026-04-10",
      monthlyFee: "1500",
      status: "Active",
    },
    {
      studentId: "BAR-2026-008",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-01",
      accessEndDate: "2026-07-01",
      videoAccessUntil: "2026-03-12",
      lastPaymentDate: "2026-03-07",
      paymentDueDate: "2026-04-07",
      monthlyFee: "1500",
      status: "Active",
    },
  ],
};

function doGet(e) {
  try {
    const request = parseRequest_(e);
    if (String(request.action || "").trim().toLowerCase() === "status") {
      return jsonOutput_(buildStatusPayload_());
    }

    const spreadsheet = getSpreadsheet_();
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

    if (request.action === "login") {
      return handleLogin_(request);
    }

    return jsonOutput_({
      ok: false,
      message: "Unsupported request action.",
    });
  } catch (error) {
    return errorOutput_(error);
  }
}

function setupLawPortalSheets() {
  const spreadsheet = getSpreadsheet_();

  Object.keys(SHEET_NAMES).forEach((key) => {
    ensureSheetWithHeaders_(spreadsheet, SHEET_NAMES[key], SHEET_HEADERS[key] || []);
  });

  return buildStatusPayload_();
}

function seedLawPortalDemoData() {
  const spreadsheet = getSpreadsheet_();
  const result = {};

  Object.keys(SHEET_NAMES).forEach((key) => {
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
  const password = String(request.password || "").trim();

  if (!query) {
    return jsonOutput_({
      ok: false,
      message: "Student ID, phone number, or email is required.",
    });
  }

  if (!password) {
    return jsonOutput_({
      ok: false,
      message: "Password is required.",
    });
  }

  const spreadsheet = getSpreadsheet_();
  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));
  const student = findStudentByQuery_(students, query);

  if (!student) {
    return jsonOutput_({
      ok: false,
      message: "No matching student was found.",
    });
  }

  const studentStatus = normalizeValue_(student.status);
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
      message: "Login is pending admin approval.",
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

  return jsonOutput_({
    ok: true,
    approved: true,
    studentId: getStudentId_(student),
    message: "Login approved.",
  });
}

function parseRequest_(e) {
  const parameterData = (e && e.parameter) || {};
  const postData = e && e.postData && e.postData.contents ? String(e.postData.contents) : "";

  let bodyData = {};
  if (postData) {
    try {
      bodyData = JSON.parse(postData);
    } catch (error) {
      bodyData = {};
    }
  }

  return Object.assign({}, bodyData, parameterData);
}

function readSheet_(sheet) {
  if (!sheet) {
    return [];
  }

  const values = sheet.getDataRange().getDisplayValues();
  const headers = values[0] || [];
  const rows = values.slice(1).filter((row) => row.some((cell) => String(cell).trim() !== ""));

  return rows.map((row) =>
    headers.reduce((record, header, index) => {
      record[header] = row[index];
      return record;
    }, {})
  );
}

function sanitizeStudents_(students) {
  return students.map((student) => {
    const copy = Object.assign({}, student);
    delete copy.password;
    delete copy.loginPassword;
    delete copy.portalPassword;
    return copy;
  });
}

function findStudentByQuery_(students, query) {
  const normalizedQuery = normalizeValue_(query);

  return (
    students.find((student) =>
      [student.id, student.studentId, student.phone, student.email]
        .filter(Boolean)
        .some((field) => normalizeValue_(field) === normalizedQuery)
    ) || null
  );
}

function getStudentId_(student) {
  return String(student.id || student.studentId || "").trim();
}

function getStudentPassword_(student) {
  return String(student.password || student.loginPassword || student.portalPassword || "").trim();
}

function isLoginApproved_(student) {
  const approvalValue = normalizeValue_(
    student.loginApproval || student.approval || student.loginApproved || student.portalApproval || ""
  );
  return APPROVED_LOGIN_VALUES.indexOf(approvalValue) !== -1;
}

function normalizeValue_(value) {
  return String(value || "").trim().toLowerCase();
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

function buildStatusPayload_() {
  const spreadsheet = getSpreadsheet_();
  const sheetNames = spreadsheet.getSheets().map((sheet) => sheet.getName());
  const requiredSheetNames = Object.keys(SHEET_NAMES).map((key) => SHEET_NAMES[key]);

  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    spreadsheetUrl: spreadsheet.getUrl(),
    requiredSheets: requiredSheetNames,
    availableSheets: sheetNames,
    missingSheets: requiredSheetNames.filter((sheetName) => sheetNames.indexOf(sheetName) === -1),
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
  const needsHeaderUpdate = headers.some((header, index) => existingHeaders[index] !== header);

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

  const values = rows.map((record) => headers.map((header) => record[header] || ""));
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
  return values.length;
}

function jsonOutput_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function errorOutput_(error) {
  return jsonOutput_({
    ok: false,
    message: error && error.message ? error.message : "Unknown Apps Script error.",
  });
}
