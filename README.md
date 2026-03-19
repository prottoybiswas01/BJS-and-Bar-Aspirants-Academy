# Dada Class Portal

This is a frontend prototype for a law-focused coaching portal that uses Tailwind CSS and vanilla JavaScript.

## Files

- `index.html`: the main student-facing interface
- `app.js`: demo data, multi-course student logic, and Google Sheets loader
- `admin.html`: the admin control panel UI
- `admin-app.js`: admin panel logic for login, dashboard, and sheet actions
- `register.html`: the student registration page
- `register-app.js`: registration form logic
- `google-apps-script.gs`: Apps Script endpoint to expose workbook tabs as JSON
- `styles/tailwind.css`: Tailwind input stylesheet
- `styles/app.css`: compiled production stylesheet used by all pages

## CSS build

Install dependencies once:

```text
npm install
```

Build the minified stylesheet:

```text
npm run build:css
```

For active editing:

```text
npm run watch:css
```

## What is already implemented

- A polished landing and portal interface for law students
- One student can access multiple courses at the same time
- Course lessons are rendered from full YouTube links that you can paste directly from YouTube
- Student profile modal with course access and payment details
- Payment-based video locking using monthly paid access or approval dates

## Admin workflow

This project now includes a separate `admin.html` control panel connected to the same Apps Script backend.

The admin panel can:

- log in using the `Admins` sheet
- approve student registrations
- create and delete courses
- assign course access and payment rules
- send internal admin messages
- update student approval, password, and status

The sheet is still the source of truth. `Enrollments` remains the main course-access table, and `Students.enrolledCourseIds` is only a fallback.

## Google Sheets setup

Create one spreadsheet with these tabs:

1. `Students`
2. `Courses`
3. `Lessons`
4. `Notices`
5. `Enrollments`
6. `Admins`
7. `Registrations`
8. `Messages`

If you use more than one spreadsheet, this project should read from one main Google Sheet only. If your Apps Script is standalone or you keep switching files, paste the main sheet ID into `SPREADSHEET_ID` inside `google-apps-script.gs`.

The current Apps Script also auto-creates these tabs with headers on the first live request. If the `Admins` tab is empty, it bootstraps the default admin account once:

```text
username: admin
password: admin123
```

Recommended columns:

### Students

```text
id | name | phone | email | batch | session | joinedOn | status | profileImage | password | loginApproval | passwordResetUrl | highlight | enrolledCourseIds | completedLessonIds
```

Important login columns:

- `password`: the student password used for portal login
- `loginApproval`: write `Approved` for normal login or use `Preview`/`Class List Only` access when the student should log in without video playback
- If `loginApproval` is empty, `Pending`, or anything other than an approved or preview value, the student cannot log in
- If `status` is `Inactive`, `Blocked`, `Suspended`, or `Expired`, the student cannot log in even if the password is correct

### Courses

```text
id | title | shortTitle | faculty | category | schedule | nextLive | description
```

### Lessons

```text
id | courseId | module | title | duration | youtubeUrl | releaseDate | resources | note
```

For the `youtubeUrl` column, paste the full YouTube link directly, for example:

- `https://www.youtube.com/watch?v=M7lc1UVf-VE`

Old sheets that still use `youtubeId` will continue to work, but the recommended setup is now `youtubeUrl` with the full link.

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
studentId | courseId | accessStartDate | accessEndDate | videoAccessUntil | lastPaymentDate | paymentDueDate | monthlyFee | status | paidMonths
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
- `paidMonths`: optional month list like `2026-01|2026-03`; when this field is used, only lessons uploaded in those months unlock

## Payment-based video locking

This system supports two locking modes:

- Month-based access:
- Write `paidMonths` as a pipe-separated list such as `2026-01|2026-03`
- A student can watch only the lessons whose `releaseDate` month appears in `paidMonths`
- If February is missing from `paidMonths`, all February uploads stay locked even if January and March are paid
- If the student pays on March 15, you still write `2026-03`; that unlocks all March uploads for that course
- Legacy continuous access:
- If you prefer the old model, leave `paidMonths` empty and use `paymentDueDate`
- The student will be able to watch every lesson uploaded on or before that paid-through date
- `videoAccessUntil` still works as a manual override
- If you want to block the whole course manually, set `status=Blocked` or `status=Suspended`

## Student login approval flow

This is the current sheet-driven login system:

- A student enters `student ID / phone / email` plus `password`
- The site sends the login request to Apps Script for validation
- The password is checked against the `Students` sheet
- Self-registration is auto-approved by default in `google-apps-script.gs`
- Change `SELF_REGISTRATION_ACCESS_MODE_` to `pending` if you want to restore manual admin approval
- The student can log in when `loginApproval=Approved`

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
lastPaymentDate: 2026-03-15
paymentDueDate: 2026-04-15
monthlyFee: 1500
status: Active
paidMonths: 2026-01|2026-03
```

With that row:

- The student can watch January 2026 uploads
- February 2026 uploads stay locked
- March 2026 uploads unlock even if payment happened on March 15
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
- Admin login and admin dashboard requests also use the same Apps Script deployment
- Student login validation also goes through the same deployed Apps Script via `doPost`
- `google-apps-script.gs` can be locked to one spreadsheet with `SPREADSHEET_ID`
- Open `/exec?action=status` to confirm which spreadsheet the deployment is actually reading

If you redeploy later:

1. Open the spreadsheet.
2. Open Extensions -> Apps Script.
3. Paste the contents of `google-apps-script.gs`.
4. Deploy as a Web App with read access.
5. Replace the deployment ID at the top of `app.js`, `admin-app.js`, and `register-app.js`.
6. Optional: run `setupLawPortalSheets()` once from the Apps Script editor if you want to create every tab immediately.
7. Optional: run `seedLawPortalDemoData()` if you want demo rows for testing.
8. If data still does not show, set `SPREADSHEET_ID`, redeploy, and check `/exec?action=status`.

## Local usage

Open `index.html` in a browser.

The current version uses demo data by default, so you can test the portal immediately.

## Production note

This prototype uses a student lookup input so the flow can be tested quickly. Before going live, add real authentication or OTP-based access control.
