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

Recommended columns:

### Students

```text
id | name | phone | email | batch | session | joinedOn | status | profileImage | passwordResetUrl | highlight | enrolledCourseIds | completedLessonIds
```

### Courses

```text
courseId | title | shortTitle | faculty | category | schedule | nextLive | description | tone
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
- `videoAccessUntil`: lessons with `releaseDate` after this date stay locked
- `lastPaymentDate`: latest payment date
- `paymentDueDate`: next payment deadline
- `monthlyFee`: optional display value like `1500`
- `status`: use `Active`, `Pending`, `Blocked`, `Suspended`, `Expired`

## Payment-based video locking

This system now works like a monthly utility bill:

- If a student has not paid for the new period, keep `videoAccessUntil` at the old approved date
- The student will still be able to watch videos uploaded on or before that date
- Videos uploaded after that date will show as locked
- When payment is made, update `lastPaymentDate` and move `videoAccessUntil` forward
- If you want the student to watch everything uploaded up to today, set `videoAccessUntil` to today
- If you want to block the whole course manually, set `status=Blocked` or `status=Suspended`

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

- The student can watch every lesson in that course with `releaseDate <= 2026-03-09`
- Lessons uploaded after `2026-03-09` stay locked
- After payment, change `videoAccessUntil` to the new approved date

## Course assignment rules

- If there is no row for a student in `Enrollments`, that course does not show for that student
- One student can have multiple rows for multiple courses
- A new course only appears for the student IDs you explicitly add to `Enrollments`
- Students not listed for that course will not see its details

## Apps Script deployment

The frontend is currently configured to use this deployed Apps Script web app:

- Deployment ID: `AKfycbxdJm41u61WYLFeu9hqzIYiyLxs-k_daoHj8o2gitynv03J5bVzXsOjKWHHKvrWXdukKA`
- Web app endpoint: `https://script.google.com/macros/s/AKfycbxdJm41u61WYLFeu9hqzIYiyLxs-k_daoHj8o2gitynv03J5bVzXsOjKWHHKvrWXdukKA/exec`
- Library: `https://script.google.com/macros/library/d/1u2Q2yRUGeRYvTFW66fe_cVcM6-eBz8W4qogdhoh5w1r6WcqfehWjUdHy/1`

If you redeploy later:

1. Open the spreadsheet.
2. Open Extensions -> Apps Script.
3. Paste the contents of `google-apps-script.gs`.
4. Deploy as a Web App with read access.
5. Replace the deployment ID at the top of `app.js`.
6. Run `setupLawPortalSheets()` once if you want Apps Script to create the recommended headers automatically.

## Local usage

Open `index.html` in a browser.

The current version uses demo data by default, so you can test the portal immediately.

## Production note

This prototype uses a student lookup input so the flow can be tested quickly. Before going live, add real authentication or OTP-based access control.
