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
- Student profile modal with course access and payment details
- Payment-based video locking using Google Sheets approval dates

## Admin workflow

There is no separate secure admin panel in this static build. The recommended workflow is to let your two admins manage the same Google Sheet as editors.

This is the safer and more practical setup for the current project:

- Admin 1 and Admin 2 both get edit access to the spreadsheet
- Course assignment is controlled from the `Enrollments` tab
- Payment approval is controlled from the same `Enrollments` tab
- Students only see the courses that have a matching `studentId + courseId` row

The old `Students.enrolledCourseIds` field is still supported as a fallback when the `Enrollments` sheet is empty, but the current system is designed to run from `Enrollments`.

## Google Sheets setup

Create one spreadsheet with these tabs:

1. `Students`
2. `Courses`
3. `Lessons`
4. `Notices`
5. `Enrollments`

If you use more than one spreadsheet, this project should read from one main Google Sheet only. If your Apps Script is standalone or you keep switching files, paste the main sheet ID into `SPREADSHEET_ID` inside `google-apps-script.gs`.

Recommended columns:

### Students

```text
id | name | phone | email | batch | session | joinedOn | status | profileImage | password | loginApproval | passwordResetUrl | highlight | enrolledCourseIds | completedLessonIds
```

Important login columns:

- `password`: the student password used for portal login
- `loginApproval`: write `Approved` when the student is allowed to log in
- If `loginApproval` is empty, `Pending`, or anything other than an approved value, the student cannot log in
- If `status` is `Inactive`, `Blocked`, `Suspended`, or `Expired`, the student cannot log in even if the password is correct

### Courses

```text
id | title | shortTitle | faculty | category | schedule | nextLive | description
```

### Lessons

```text
id | courseId | module | title | duration | youtubeId | releaseDate | resources | note
```

For `resources`, use a pipe-separated value if you want multiple tags:

```text
PDF outline|MCQ drill set
```

### Notices

```text
id | title | message | publishedOn | status
```

### Enrollments

```text
studentId | courseId | accessStartDate | accessEndDate | videoAccessUntil | lastPaymentDate | paymentDueDate | monthlyFee | status
```

Meaning of the important columns:

- `studentId`: the exact student ID
- `courseId`: the exact course ID
- `accessStartDate`: when the student starts using the course
- `accessEndDate`: overall course access window
- `videoAccessUntil`: optional manual lesson-access date; if you fill it, it can extend availability beyond the default monthly cycle
- `lastPaymentDate`: latest payment date
- `paymentDueDate`: current paid-through date for monthly lesson access
- `monthlyFee`: optional display value like `1500`
- `status`: use `Active`, `Pending`, `Blocked`, `Suspended`, `Expired`

## Payment-based video locking

This system now works like a monthly utility bill:

- If a student pays for one month, set `paymentDueDate` to the last date of that paid period
- The student will be able to watch every lesson uploaded on or before that paid-through date
- Lessons uploaded after that paid-through date will stay locked until the next payment is recorded
- When the next monthly payment is made, update `lastPaymentDate` and move `paymentDueDate` forward
- If you want to unlock lessons manually up to a different date, fill `videoAccessUntil`
- If you want to block the whole course manually, set `status=Blocked` or `status=Suspended`

## Student login approval flow

This is the current sheet-driven login system:

- A student enters `student ID / phone / email` plus `password`
- The site sends the login request to Apps Script for validation
- The password is checked against the `Students` sheet
- The student can log in only when `loginApproval=Approved`
- If approval is not written by admin, login will fail

Example:

```text
id: LAW-2026-014
password: law014
loginApproval: Approved
status: Active
```

Example:

```text
studentId: LAW-2026-014
courseId: criminal-procedure-mastery
videoAccessUntil: 2026-03-09
lastPaymentDate: 2026-03-01
paymentDueDate: 2026-04-10
monthlyFee: 1500
status: Active
```

With that row:

- The student can watch every lesson in that course with `releaseDate <= 2026-04-10`
- Lessons uploaded after `2026-04-10` stay locked until the next payment
- If you need a manual override, set `videoAccessUntil` to a different approved date

## Course assignment rules

- If there is no row for a student in `Enrollments`, that course does not show for that student
- One student can have multiple rows for multiple courses
- A new course only appears for the student IDs you explicitly add to `Enrollments`
- Students not listed for that course will not see its details

## Apps Script deployment

The frontend is currently configured to use this deployed Apps Script web app:

- Deployment ID: `AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP`
- Web app endpoint: `https://script.google.com/macros/s/AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP/exec`
- Library: not required for frontend runtime; the portal uses the deployed Web App `/exec` URL

Connection flow:

- `app.js` uses the deployed `/exec` URL as the live data source
- The deployed Apps Script runs the logic from `google-apps-script.gs`
- `google-apps-script.gs` reads the `Students`, `Courses`, `Lessons`, `Notices`, and `Enrollments` sheets
- Student login validation also goes through the same deployed Apps Script via `doPost`
- `google-apps-script.gs` can be locked to one spreadsheet with `SPREADSHEET_ID`
- Open `/exec?action=status` to confirm which spreadsheet the deployment is actually reading

If you redeploy later:

1. Open the spreadsheet.
2. Open Extensions -> Apps Script.
3. Paste the contents of `google-apps-script.gs`.
4. Deploy as a Web App with read access.
5. Replace the deployment ID at the top of `app.js`.
6. Run `setupLawPortalSheets()` once if you want Apps Script to create the recommended headers automatically.
7. If data still does not show, set `SPREADSHEET_ID`, redeploy, and check `/exec?action=status`.

## Local usage

Open `index.html` in a browser.

The current version uses demo data by default, so you can test the portal immediately.

## Production note

This prototype uses a student lookup input so the flow can be tested quickly. Before going live, add real authentication or OTP-based access control.
