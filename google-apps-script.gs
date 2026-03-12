const SHEET_NAMES = {
  students: "Students",
  courses: "Courses",
  lessons: "Lessons",
  notices: "Notices",
};

function doGet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const payload = {
    generatedAt: new Date().toISOString(),
    students: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.students)),
    courses: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.courses)),
    lessons: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.lessons)),
    notices: readSheet_(spreadsheet.getSheetByName(SHEET_NAMES.notices)),
  };

  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
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
