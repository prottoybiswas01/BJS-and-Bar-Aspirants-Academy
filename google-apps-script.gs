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

function doGet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const payload = {
    generatedAt: new Date().toISOString(),
    students: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students)),
    courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
    lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
    enrollments: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.enrollments)),
  };

  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function setupLawPortalSheets() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  Object.keys(SHEET_NAMES).forEach((key) => {
    ensureSheetWithHeaders_(spreadsheet, SHEET_NAMES[key], SHEET_HEADERS[key] || []);
  });
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
