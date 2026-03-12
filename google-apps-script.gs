const SHEET_NAMES = {
  students: "Students",
  courses: "Courses",
  lessons: "Lessons",
  notices: "Notices",
  enrollments: "Enrollments",
};

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

function doGet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const students = readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students));

  const payload = {
    generatedAt: new Date().toISOString(),
    students: sanitizeStudents_(students),
    courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
    lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
    enrollments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
  };

  return jsonOutput_(payload);
}

function doPost(e) {
  const request = parseRequest_(e);

  if (request.action === "login") {
    return handleLogin_(request);
  }

  return jsonOutput_({
    ok: false,
    message: "Unsupported request action.",
  });
}

function setupLawPortalSheets() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  Object.keys(SHEET_NAMES).forEach((key) => {
    ensureSheetWithHeaders_(spreadsheet, SHEET_NAMES[key], SHEET_HEADERS[key] || []);
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

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
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

function jsonOutput_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
