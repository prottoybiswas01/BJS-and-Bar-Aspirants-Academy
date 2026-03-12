# Dada Class Portal

This is a frontend prototype for a law-focused coaching portal that uses Tailwind CSS and vanilla JavaScript.

## Files

- `index.html`: the main student-facing interface
- `app.js`: demo data, multi-course student logic, and Google Sheets loader
- `google-apps-script.gs`: Apps Script endpoint to expose workbook tabs as JSON

## What is already implemented

- A polished landing and portal interface for law students
- One student can access multiple courses at the same time
- Course lessons are rendered from course-linked YouTube IDs
- Notices are filtered by student, course, or global audience
- A workbook blueprint is shown directly inside the UI

## How multi-course access works

In the `Students` sheet, use the `enrolledCourseIds` column. Put multiple course IDs in one cell separated by the pipe character.

Example:

```text
judiciary-foundation|criminal-procedure-mastery|legal-drafting-lab
```

The portal reads that one field and shows all matching courses for the same student.

## Google Sheets setup

Create one spreadsheet with these tabs:

1. `Students`
2. `Courses`
3. `Lessons`
4. `Notices`

Recommended columns:

### Students

```text
studentId | name | phone | email | batch | session | joinedOn | status | enrolledCourseIds | completedLessonIds | highlight
```

### Courses

```text
courseId | title | shortTitle | faculty | category | schedule | nextLive | description | tone
```

### Lessons

```text
lessonId | courseId | module | title | duration | youtubeId | releaseDate | resources | note
```

For `resources`, use a pipe-separated value if you want multiple tags:

```text
PDF outline|MCQ drill set
```

### Notices

```text
noticeId | type | targetId | date | title | body
```

Rules:

- `type=all` means every student sees the notice
- `type=student` means only one student sees it, using `targetId=studentId`
- `type=course` means all students enrolled in that course see it, using `targetId=courseId`

## Apps Script deployment

1. Open the spreadsheet.
2. Open Extensions -> Apps Script.
3. Paste the contents of `google-apps-script.gs`.
4. Deploy as a Web App with read access.
5. Copy the deployment URL.

Then open `app.js` and switch:

```js
const APP_CONFIG = Object.freeze({
  dataMode: "remote",
  remoteEndpoint: "YOUR_APPS_SCRIPT_WEB_APP_URL",
  defaultStudentQuery: "LAW-2026-014",
});
```

## Local usage

Open `index.html` in a browser.

The current version uses demo data by default, so you can test the portal immediately.

## Production note

This prototype uses a student lookup input so the flow can be tested quickly. Before going live, add real authentication or OTP-based access control.
