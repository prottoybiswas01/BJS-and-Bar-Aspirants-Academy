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
