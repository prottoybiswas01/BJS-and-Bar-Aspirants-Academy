const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbxdJm41u61WYLFeu9hqzIYiyLxs-k_daoHj8o2gitynv03J5bVzXsOjKWHHKvrWXdukKA";

const APP_CONFIG = Object.freeze({
  dataMode: "remote",
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
  defaultStudentQuery: "LAW-2026-014",
});

const demoData = {
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
      enrolledCourseIds: [
        "judiciary-foundation",
        "criminal-procedure-mastery",
        "legal-drafting-lab",
      ],
      completedLessonIds: ["jud-01", "jud-02", "crim-01", "draft-01", "draft-02"],
      highlight: "Preparing for judicial service with drafting support.",
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
      enrolledCourseIds: ["bar-viva-clinic", "criminal-procedure-mastery"],
      completedLessonIds: ["bar-01", "crim-01", "crim-02"],
      highlight: "Focused on viva confidence and criminal procedure.",
    },
    {
      id: "LIT-2026-031",
      name: "Sajid Al Mahmud",
      phone: "01712000031",
      email: "sajid.mahmud@example.com",
      batch: "Mixed Litigation Track",
      session: "Morning Batch",
      joinedOn: "2026-01-18",
      status: "Active",
      enrolledCourseIds: ["legal-drafting-lab", "criminal-procedure-mastery"],
      completedLessonIds: ["draft-01"],
      highlight: "Wants practical drafting and procedure side by side.",
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
      description:
        "A structured path for constitutional principles, civil-criminal basics, and high-yield MCQ preparation for judiciary examinees.",
      tone: "gold",
    },
    {
      id: "criminal-procedure-mastery",
      title: "Criminal Procedure Mastery",
      shortTitle: "Criminal Procedure",
      faculty: "Barrister Samiha Karim",
      category: "Procedure Track",
      schedule: "Mon, Wed at 9:00 PM",
      nextLive: "2026-03-15T21:00:00+06:00",
      description:
        "Detailed breakdown of CrPC flow, arrest-to-trial sequence, framing of charge, and practical problem-solving for law students.",
      tone: "ember",
    },
    {
      id: "legal-drafting-lab",
      title: "Legal Drafting Lab",
      shortTitle: "Drafting",
      faculty: "Adv. Tahsin Sarker",
      category: "Practical Skills",
      schedule: "Fri at 7:30 PM",
      nextLive: "2026-03-13T19:30:00+06:00",
      description:
        "Draft plaints, written statements, bail petitions, affidavits, and legal notices with practical templates and review guidance.",
      tone: "sage",
    },
    {
      id: "bar-viva-clinic",
      title: "Bar Viva Clinic",
      shortTitle: "Bar Viva",
      faculty: "Adv. Sharmin Sultana",
      category: "Viva Coaching",
      schedule: "Sat at 8:00 PM",
      nextLive: "2026-03-16T20:00:00+06:00",
      description:
        "Short oral drills, legal ethics, and rapid-fire viva practice to prepare bar candidates for structured questioning.",
      tone: "ink",
    },
  ],
  lessons: [
    {
      id: "jud-01",
      courseId: "judiciary-foundation",
      module: "Constitutional Framework",
      title: "State structure, separation of powers, and court hierarchy",
      duration: "48 min",
      youtubeId: "M7lc1UVf-VE",
      releaseDate: "2026-03-05",
      resources: ["PDF outline", "MCQ drill set"],
      note: "Start here if the student is new to judiciary preparation.",
    },
    {
      id: "jud-02",
      courseId: "judiciary-foundation",
      module: "Core Principles",
      title: "Natural justice and judicial review essentials",
      duration: "44 min",
      youtubeId: "ysz5S6PUM-U",
      releaseDate: "2026-03-08",
      resources: ["Case digest", "Revision notes"],
      note: "Pairs well with constitutional case memorization.",
    },
    {
      id: "jud-03",
      courseId: "judiciary-foundation",
      module: "MCQ Strategy",
      title: "How to extract high-yield points from past papers",
      duration: "36 min",
      youtubeId: "ScMzIvxBSi4",
      releaseDate: "2026-03-11",
      resources: ["Past paper map", "Score tracker"],
      note: "Ideal before weekly model tests.",
    },
    {
      id: "crim-01",
      courseId: "criminal-procedure-mastery",
      module: "Investigation Flow",
      title: "From FIR to police report: the criminal process map",
      duration: "41 min",
      youtubeId: "aqz-KE-bpKQ",
      releaseDate: "2026-03-04",
      resources: ["Flowchart", "Section list"],
      note: "Covers the entire process in one class.",
    },
    {
      id: "crim-02",
      courseId: "criminal-procedure-mastery",
      module: "Trial Mechanics",
      title: "Charge, cognizance, and trial stages simplified",
      duration: "52 min",
      youtubeId: "dQw4w9WgXcQ",
      releaseDate: "2026-03-09",
      resources: ["Procedure chart", "MCQ bank"],
      note: "Strong revision class for bar and judiciary learners.",
    },
    {
      id: "crim-03",
      courseId: "criminal-procedure-mastery",
      module: "Bail and Appeals",
      title: "Bail grounds, revision, and appellate pathways",
      duration: "46 min",
      youtubeId: "ysz5S6PUM-U",
      releaseDate: "2026-03-12",
      resources: ["Bail grounds note", "Quick recall sheet"],
      note: "Good companion lesson before live doubt clearing.",
    },
    {
      id: "draft-01",
      courseId: "legal-drafting-lab",
      module: "Civil Drafting",
      title: "How to draft a plaint with proper heading and cause title",
      duration: "39 min",
      youtubeId: "M7lc1UVf-VE",
      releaseDate: "2026-03-02",
      resources: ["Plaint template", "Checklist"],
      note: "Foundational class for new drafting students.",
    },
    {
      id: "draft-02",
      courseId: "legal-drafting-lab",
      module: "Criminal Drafting",
      title: "Drafting a bail petition with concise legal grounds",
      duration: "34 min",
      youtubeId: "ScMzIvxBSi4",
      releaseDate: "2026-03-07",
      resources: ["Petition sample", "Common mistakes"],
      note: "Short but practical session that students revisit often.",
    },
    {
      id: "draft-03",
      courseId: "legal-drafting-lab",
      module: "Professional Writing",
      title: "Client notice and affidavit drafting workflow",
      duration: "43 min",
      youtubeId: "aqz-KE-bpKQ",
      releaseDate: "2026-03-10",
      resources: ["Notice format", "Affidavit guide"],
      note: "Useful for both examination and chamber practice.",
    },
    {
      id: "bar-01",
      courseId: "bar-viva-clinic",
      module: "Viva Basics",
      title: "Legal ethics and courtroom etiquette drill",
      duration: "28 min",
      youtubeId: "M7lc1UVf-VE",
      releaseDate: "2026-03-06",
      resources: ["Ethics flashcards", "Quick answer sheet"],
      note: "Short warm-up session for viva readiness.",
    },
    {
      id: "bar-02",
      courseId: "bar-viva-clinic",
      module: "Oral Confidence",
      title: "How to answer direct statutory questions in viva",
      duration: "31 min",
      youtubeId: "ScMzIvxBSi4",
      releaseDate: "2026-03-12",
      resources: ["Question bank", "Voice practice cues"],
      note: "Best used right before mock viva.",
    },
  ],
  notices: [
    {
      id: "notice-01",
      type: "all",
      targetId: "",
      date: "2026-03-12",
      title: "Weekly assignment window is open",
      body: "Students can now review this week's sheet-controlled assignment list and submit progress in the next live class.",
    },
    {
      id: "notice-02",
      type: "course",
      targetId: "criminal-procedure-mastery",
      date: "2026-03-12",
      title: "Procedure class live Q&A moved to Friday",
      body: "The criminal procedure live discussion has been moved so judiciary and bar students can both join the same session.",
    },
    {
      id: "notice-03",
      type: "student",
      targetId: "LAW-2026-014",
      date: "2026-03-11",
      title: "Drafting review copy ready",
      body: "Your bail petition draft review note is ready. Open the Drafting course tab and check the latest resources.",
    },
  ],
};

const courseToneMap = {
  gold: {
    panel: "from-amber-100 via-white to-white",
    ring: "ring-amber-200",
    dot: "bg-amber-500",
    text: "text-amber-800",
    soft: "bg-amber-50",
  },
  ember: {
    panel: "from-orange-100 via-white to-white",
    ring: "ring-orange-200",
    dot: "bg-orange-500",
    text: "text-orange-800",
    soft: "bg-orange-50",
  },
  sage: {
    panel: "from-emerald-100 via-white to-white",
    ring: "ring-emerald-200",
    dot: "bg-emerald-500",
    text: "text-emerald-800",
    soft: "bg-emerald-50",
  },
  ink: {
    panel: "from-slate-100 via-white to-white",
    ring: "ring-slate-200",
    dot: "bg-slate-800",
    text: "text-slate-800",
    soft: "bg-slate-100",
  },
};

const state = {
  data: null,
  activeStudentId: "",
  activeCourseId: "",
  activeLessonId: "",
};

const dom = {
  form: document.getElementById("lookup-form"),
  query: document.getElementById("student-query"),
  feedback: document.getElementById("lookup-feedback"),
  modeBadge: document.getElementById("data-mode-badge"),
  studentCard: document.getElementById("student-card"),
  studentProgress: document.getElementById("student-progress"),
  studentCourseStack: document.getElementById("student-course-stack"),
  courseOverview: document.getElementById("course-overview"),
  playerPanel: document.getElementById("player-panel"),
  lessonList: document.getElementById("lesson-list"),
  noticeList: document.getElementById("notice-list"),
  sheetBlueprint: document.getElementById("sheet-blueprint"),
};

function parseCourseIds(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return String(value || "")
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeData(raw) {
  const students = (raw.students || []).map((student) => ({
    id: student.id || student.studentId || "",
    name: student.name || student.fullName || "Unknown Student",
    phone: student.phone || "",
    email: student.email || "",
    batch: student.batch || "N/A",
    session: student.session || "N/A",
    joinedOn: student.joinedOn || new Date().toISOString().slice(0, 10),
    status: student.status || "Active",
    highlight: student.highlight || "Law student profile loaded from the workbook.",
    enrolledCourseIds: parseCourseIds(
      student.enrolledCourseIds || student.courseIds || student.courses || ""
    ),
    completedLessonIds: parseCourseIds(student.completedLessonIds || student.completed || ""),
  }));

  const courses = (raw.courses || []).map((course) => ({
    id: course.id || course.courseId || "",
    title: course.title || course.name || "Untitled Course",
    shortTitle: course.shortTitle || course.title || "Course",
    faculty: course.faculty || course.instructor || "Faculty not set",
    category: course.category || "Course",
    schedule: course.schedule || "Schedule pending",
    nextLive: course.nextLive || course.nextClass || "",
    description: course.description || "No description yet.",
    tone: course.tone || "gold",
  }));

  const lessons = (raw.lessons || []).map((lesson) => ({
    id: lesson.id || lesson.lessonId || "",
    courseId: lesson.courseId || "",
    module: lesson.module || lesson.moduleTitle || "Module",
    title: lesson.title || lesson.lessonTitle || "Untitled Lesson",
    duration: lesson.duration || "N/A",
    youtubeId: lesson.youtubeId || lesson.videoId || "",
    releaseDate: lesson.releaseDate || lesson.date || new Date().toISOString().slice(0, 10),
    resources: Array.isArray(lesson.resources)
      ? lesson.resources
      : parseCourseIds(lesson.resources || lesson.resourceList || ""),
    note: lesson.note || "Sheet-linked lesson",
  }));

  const notices = (raw.notices || raw.announcements || []).map((notice) => ({
    id: notice.id || notice.noticeId || "",
    type: notice.type || notice.targetType || "all",
    targetId: notice.targetId || notice.target || "",
    date: notice.date || new Date().toISOString().slice(0, 10),
    title: notice.title || "Notice",
    body: notice.body || notice.message || "",
  }));

  return {
    students,
    courses,
    lessons,
    notices,
    courseMap: new Map(courses.map((course) => [course.id, course])),
    lessonMap: new Map(lessons.map((lesson) => [lesson.id, lesson])),
  };
}

async function loadData() {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
    const response = await fetch(APP_CONFIG.remoteEndpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to load remote sheet data.");
    }

    const payload = await response.json();
    dom.modeBadge.textContent = "Live Google Sheet";
    return normalizeData(payload);
  }

  dom.modeBadge.textContent = "Demo data";
  return normalizeData(demoData);
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function formatDate(dateValue, withTime = false) {
  if (!dateValue) {
    return "Not scheduled";
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...(withTime ? { hour: "numeric", minute: "2-digit" } : {}),
  }).format(date);
}

function getStudentByQuery(query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  if (!normalizedQuery) {
    return null;
  }

  return (
    state.data.students.find((student) =>
      [student.id, student.phone, student.email]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase() === normalizedQuery)
    ) || null
  );
}

function getStudentCourses(student) {
  return student.enrolledCourseIds
    .map((courseId) => state.data.courseMap.get(courseId))
    .filter(Boolean);
}

function getCourseLessons(courseId) {
  return state.data.lessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

function getVisibleNotices(student, courseIds) {
  return state.data.notices
    .filter((notice) => {
      if (notice.type === "all") {
        return true;
      }
      if (notice.type === "student") {
        return notice.targetId === student.id;
      }
      if (notice.type === "course") {
        return courseIds.includes(notice.targetId);
      }
      return false;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getProgress(student, courseId) {
  const lessons = getCourseLessons(courseId);
  if (!lessons.length) {
    return {
      completed: 0,
      total: 0,
      percent: 0,
    };
  }

  const completed = lessons.filter((lesson) => student.completedLessonIds.includes(lesson.id))
    .length;
  return {
    completed,
    total: lessons.length,
    percent: Math.round((completed / lessons.length) * 100),
  };
}

function getOverallProgress(student, courses) {
  const totals = courses.reduce(
    (accumulator, course) => {
      const progress = getProgress(student, course.id);
      return {
        completed: accumulator.completed + progress.completed,
        total: accumulator.total + progress.total,
      };
    },
    { completed: 0, total: 0 }
  );

  return {
    ...totals,
    percent: totals.total ? Math.round((totals.completed / totals.total) * 100) : 0,
  };
}

function ensureActiveSelection(student) {
  const courses = getStudentCourses(student);
  const courseIds = courses.map((course) => course.id);

  if (!courseIds.includes(state.activeCourseId)) {
    state.activeCourseId = courseIds[0] || "";
  }

  const courseLessons = getCourseLessons(state.activeCourseId);
  const lessonIds = courseLessons.map((lesson) => lesson.id);
  const firstIncomplete = courseLessons.find(
    (lesson) => !student.completedLessonIds.includes(lesson.id)
  );

  if (!lessonIds.includes(state.activeLessonId)) {
    state.activeLessonId = (firstIncomplete || courseLessons[0] || {}).id || "";
  }
}

function selectStudent(student) {
  state.activeStudentId = student.id;
  ensureActiveSelection(student);
  renderPortal();
}

function selectCourse(courseId) {
  state.activeCourseId = courseId;
  const student = state.data.students.find((item) => item.id === state.activeStudentId);
  if (!student) {
    return;
  }

  const lessons = getCourseLessons(courseId);
  const firstIncomplete = lessons.find((lesson) => !student.completedLessonIds.includes(lesson.id));
  state.activeLessonId = (firstIncomplete || lessons[0] || {}).id || "";
  renderPortal();
}

function selectLesson(lessonId) {
  state.activeLessonId = lessonId;
  renderPortal();
}

function renderStudentCard(student, courses) {
  const initials = getInitials(student.name);
  dom.studentCard.innerHTML = `
    <div class="flex items-start justify-between gap-4">
      <div class="flex items-center gap-4">
        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-court-900 text-xl font-bold text-white shadow-lg">${initials}</div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Student Profile</p>
          <h2 class="mt-2 text-2xl font-semibold text-court-900">${student.name}</h2>
          <p class="mt-1 text-sm text-slate-600">${student.id} • ${student.batch}</p>
        </div>
      </div>
      <span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">${student.status}</span>
    </div>

    <p class="mt-6 rounded-2xl bg-sand px-4 py-4 text-sm leading-7 text-slate-700">${student.highlight}</p>

    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-court-100 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Session</p>
        <p class="mt-2 text-sm font-medium text-slate-800">${student.session}</p>
      </div>
      <div class="rounded-2xl border border-court-100 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Joined</p>
        <p class="mt-2 text-sm font-medium text-slate-800">${formatDate(student.joinedOn)}</p>
      </div>
      <div class="rounded-2xl border border-court-100 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Phone</p>
        <p class="mt-2 text-sm font-medium text-slate-800">${student.phone || "Not set"}</p>
      </div>
      <div class="rounded-2xl border border-court-100 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Enrolled</p>
        <p class="mt-2 text-sm font-medium text-slate-800">${courses.length} active courses</p>
      </div>
    </div>
  `;
}

function renderStudentProgress(student, courses) {
  const overall = getOverallProgress(student, courses);
  const strongestCourse = courses
    .map((course) => ({
      course,
      progress: getProgress(student, course.id),
    }))
    .sort((left, right) => right.progress.percent - left.progress.percent)[0];

  dom.studentProgress.innerHTML = `
    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Progress Board</p>
    <div class="mt-5 rounded-[1.75rem] bg-court-900 p-5 text-white">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-sm text-court-100">Overall completion</p>
          <p class="mt-2 text-4xl font-semibold">${overall.percent}%</p>
        </div>
        <div class="text-right text-sm text-court-100">
          <p>${overall.completed} lessons completed</p>
          <p>${overall.total} total lessons visible</p>
        </div>
      </div>
      <div class="mt-4 h-3 rounded-full bg-white/10">
        <div class="h-3 rounded-full bg-gold" style="width: ${overall.percent}%"></div>
      </div>
    </div>

    <div class="mt-5 grid gap-3">
      ${courses
        .map((course) => {
          const progress = getProgress(student, course.id);
          return `
            <div class="rounded-2xl border border-court-100 p-4">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold text-slate-900">${course.title}</p>
                  <p class="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">${progress.completed}/${progress.total} lessons</p>
                </div>
                <span class="text-sm font-semibold text-court-800">${progress.percent}%</span>
              </div>
              <div class="mt-3 h-2 rounded-full bg-slate-100">
                <div class="h-2 rounded-full bg-court-700" style="width: ${progress.percent}%"></div>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>

    <div class="mt-5 rounded-2xl bg-sand p-4 text-sm leading-7 text-slate-700">
      Strongest course right now:
      <span class="font-semibold text-slate-900">${
        strongestCourse ? strongestCourse.course.title : "Not enough lesson data"
      }</span>
    </div>
  `;
}

function renderStudentCourseStack(student, courses) {
  dom.studentCourseStack.innerHTML = `
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Assigned Courses</p>
        <h3 class="mt-2 text-xl font-semibold text-court-900">Sheet-controlled access</h3>
      </div>
      <div class="rounded-full bg-court-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-court-800">${courses.length} visible</div>
    </div>
    <div class="mt-5 space-y-3">
      ${
        courses.length
          ? courses
              .map((course) => {
                const tone = courseToneMap[course.tone] || courseToneMap.gold;
                const progress = getProgress(student, course.id);
                const isActive = course.id === state.activeCourseId;
                return `
                  <button
                    type="button"
                    data-course-id="${course.id}"
                    class="w-full rounded-[1.5rem] border p-4 text-left transition ${
                      isActive
                        ? `border-transparent bg-gradient-to-br ${tone.panel} ring-1 ${tone.ring}`
                        : "border-court-100 bg-white hover:border-court-300"
                    }"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <div class="flex items-center gap-3">
                          <span class="h-2.5 w-2.5 rounded-full ${tone.dot}"></span>
                          <p class="text-sm font-semibold text-slate-900">${course.title}</p>
                        </div>
                        <p class="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">${course.category}</p>
                      </div>
                      <span class="rounded-full ${tone.soft} px-3 py-1 text-xs font-semibold ${tone.text}">${progress.percent}%</span>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-slate-600">${course.schedule}</p>
                  </button>
                `;
              })
              .join("")
          : `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-5 text-sm leading-7 text-slate-600">No course is currently assigned to this student in the sheet. Add one or more IDs in <span class="font-semibold text-slate-900">enrolledCourseIds</span>.</div>`
      }
    </div>
  `;

  dom.studentCourseStack.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => selectCourse(button.dataset.courseId));
  });
}

function renderCourseOverview(student, course) {
  const tone = courseToneMap[course.tone] || courseToneMap.gold;
  const progress = getProgress(student, course.id);
  const lessons = getCourseLessons(course.id);
  dom.courseOverview.innerHTML = `
    <div class="rounded-[1.8rem] bg-gradient-to-br ${tone.panel} p-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <span class="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">${course.category}</span>
            <span class="rounded-full ${tone.soft} px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${tone.text}">${course.shortTitle}</span>
          </div>
          <h2 class="mt-4 font-display text-4xl font-bold text-court-900">${course.title}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-700">${course.description}</p>
        </div>
        <div class="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Faculty</p>
          <p class="mt-2 text-lg font-semibold text-slate-900">${course.faculty}</p>
          <p class="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Next live class</p>
          <p class="mt-2 text-sm font-medium text-slate-800">${formatDate(course.nextLive, true)}</p>
        </div>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl border border-white/70 bg-white/70 p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Visible lessons</p>
          <p class="mt-2 text-3xl font-semibold text-court-900">${lessons.length}</p>
        </div>
        <div class="rounded-2xl border border-white/70 bg-white/70 p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Completed</p>
          <p class="mt-2 text-3xl font-semibold text-court-900">${progress.completed}</p>
        </div>
        <div class="rounded-2xl border border-white/70 bg-white/70 p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Student access rule</p>
          <p class="mt-2 text-sm font-medium leading-6 text-slate-800">
            ${student.id} can see this course because the course ID is listed in the student's enrolled course column.
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderPlayerPanel(student, lesson) {
  const isCompleted = student.completedLessonIds.includes(lesson.id);
  dom.playerPanel.innerHTML = `
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Featured Lesson</p>
        <h3 class="mt-2 text-2xl font-semibold text-court-900">${lesson.title}</h3>
      </div>
      <span class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
        isCompleted
          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border border-court-200 bg-court-50 text-court-800"
      }">${isCompleted ? "Completed" : "Next to watch"}</span>
    </div>

    <div class="mt-5 overflow-hidden rounded-[1.5rem] border border-court-200 bg-slate-950 shadow-lg">
      <div class="aspect-video">
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/${lesson.youtubeId}"
          title="${lesson.title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="mt-5 grid gap-4 md:grid-cols-3">
      <div class="rounded-2xl border border-court-100 bg-sand p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Module</p>
        <p class="mt-2 text-sm font-medium text-slate-900">${lesson.module}</p>
      </div>
      <div class="rounded-2xl border border-court-100 bg-sand p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Published</p>
        <p class="mt-2 text-sm font-medium text-slate-900">${formatDate(lesson.releaseDate)}</p>
      </div>
      <div class="rounded-2xl border border-court-100 bg-sand p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Duration</p>
        <p class="mt-2 text-sm font-medium text-slate-900">${lesson.duration}</p>
      </div>
    </div>

    <div class="mt-5 rounded-[1.5rem] border border-court-100 p-5">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Lesson note</p>
      <p class="mt-3 text-sm leading-7 text-slate-700">${lesson.note}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${lesson.resources
          .map(
            (resource) =>
              `<span class="rounded-full border border-court-200 bg-court-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-court-800">${resource}</span>`
          )
          .join("")}
      </div>
      <p class="mt-4 text-xs text-slate-500">
        Video source is linked by YouTube ID. Replace with your own uploaded class IDs from the sheet.
      </p>
    </div>
  `;
}

function renderLessonList(student, course) {
  const lessons = getCourseLessons(course.id);
  dom.lessonList.innerHTML = `
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Lesson Library</p>
        <h3 class="mt-2 text-2xl font-semibold text-court-900">${course.shortTitle} lessons</h3>
      </div>
      <div class="rounded-full bg-court-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-court-800">${lessons.length} items</div>
    </div>

    <div class="mt-5 space-y-3">
      ${
        lessons.length
          ? lessons
              .map((lesson) => {
                const isActive = lesson.id === state.activeLessonId;
                const isCompleted = student.completedLessonIds.includes(lesson.id);
                return `
                  <button
                    type="button"
                    data-lesson-id="${lesson.id}"
                    class="w-full rounded-[1.4rem] border p-4 text-left transition ${
                      isActive
                        ? "border-court-900 bg-court-900 text-white shadow-lg"
                        : "border-court-100 bg-white hover:border-court-300 hover:bg-sand"
                    }"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.28em] ${
                          isActive ? "text-court-200" : "text-slate-500"
                        }">${lesson.module}</p>
                        <p class="mt-2 text-sm font-semibold leading-6 ${
                          isActive ? "text-white" : "text-slate-900"
                        }">${lesson.title}</p>
                      </div>
                      <span class="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${
                        isActive
                          ? "bg-white/10 text-white"
                          : isCompleted
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-court-50 text-court-800"
                      }">${isCompleted ? "Done" : "Open"}</span>
                    </div>
                    <div class="mt-3 flex items-center justify-between gap-3 text-xs ${
                      isActive ? "text-court-100" : "text-slate-500"
                    }">
                      <span>${lesson.duration}</span>
                      <span>${formatDate(lesson.releaseDate)}</span>
                    </div>
                  </button>
                `;
              })
              .join("")
          : `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-5 text-sm leading-7 text-slate-600">No lessons are linked to this course yet. Add rows in the <span class="font-semibold text-slate-900">Lessons</span> tab with the matching <span class="font-semibold text-slate-900">courseId</span>.</div>`
      }
    </div>
  `;

  dom.lessonList.querySelectorAll("[data-lesson-id]").forEach((button) => {
    button.addEventListener("click", () => selectLesson(button.dataset.lessonId));
  });
}

function renderNoticeList(student, courses) {
  const notices = getVisibleNotices(
    student,
    courses.map((course) => course.id)
  );

  dom.noticeList.innerHTML = `
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Notices</p>
        <h3 class="mt-2 text-2xl font-semibold text-court-900">Student-facing updates</h3>
      </div>
      <div class="rounded-full bg-court-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-court-800">${notices.length} notices</div>
    </div>

    <div class="mt-5 space-y-3">
      ${
        notices.length
          ? notices
              .map(
                (notice) => `
                  <article class="rounded-[1.5rem] border border-court-100 p-4">
                    <div class="flex items-center justify-between gap-4">
                      <p class="text-sm font-semibold text-slate-900">${notice.title}</p>
                      <span class="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">${formatDate(
                        notice.date
                      )}</span>
                    </div>
                    <p class="mt-3 text-sm leading-7 text-slate-700">${notice.body}</p>
                  </article>
                `
              )
              .join("")
          : `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-5 text-sm leading-7 text-slate-600">No notices are active for this student right now.</div>`
      }
    </div>
  `;
}

function renderSheetBlueprint(student, courses) {
  const sampleCourseString = student.enrolledCourseIds.join(" | ");
  const lesson = getCourseLessons(courses[0]?.id || "")[0];
  dom.sheetBlueprint.innerHTML = `
    <div id="blueprint">
      <p class="text-xs font-semibold uppercase tracking-[0.35em] text-court-700">Sheet Blueprint</p>
      <h3 class="mt-2 text-2xl font-semibold text-court-900">How the workbook should be structured</h3>

      <div class="mt-5 grid gap-3">
        <div class="rounded-[1.5rem] border border-court-100 bg-sand p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Students tab</p>
          <p class="mt-3 text-sm font-medium text-slate-900">studentId | name | phone | batch | enrolledCourseIds</p>
          <p class="mt-3 rounded-xl bg-white px-3 py-3 font-mono text-xs text-slate-700">${student.id} | ${student.name} | ${student.phone} | ${student.batch} | ${sampleCourseString}</p>
        </div>

        <div class="rounded-[1.5rem] border border-court-100 bg-white p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Courses tab</p>
          <p class="mt-3 text-sm font-medium text-slate-900">courseId | title | faculty | schedule | tone</p>
          <p class="mt-3 rounded-xl bg-sand px-3 py-3 font-mono text-xs text-slate-700">${courses[0]?.id || "course-id"} | ${courses[0]?.title || "Course title"} | ${courses[0]?.faculty || "Faculty"} | ${courses[0]?.schedule || "Schedule"} | ${courses[0]?.tone || "gold"}</p>
        </div>

        <div class="rounded-[1.5rem] border border-court-100 bg-white p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-700">Lessons tab</p>
          <p class="mt-3 text-sm font-medium text-slate-900">lessonId | courseId | module | title | youtubeId | releaseDate</p>
          <p class="mt-3 rounded-xl bg-sand px-3 py-3 font-mono text-xs text-slate-700">${lesson ? `${lesson.id} | ${lesson.courseId} | ${lesson.module} | ${lesson.title} | ${lesson.youtubeId} | ${lesson.releaseDate}` : "No lesson loaded"}</p>
        </div>
      </div>

      <div class="mt-5 rounded-[1.5rem] border border-court-100 bg-court-900 p-4 text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-court-200">Assignment rule</p>
        <p class="mt-3 text-sm leading-7 text-court-100">
          To give a student 2 or 3 courses, add multiple course IDs in the Students sheet separated
          by the pipe character. Example: <span class="font-mono text-white">${sampleCourseString}</span>
        </p>
      </div>
    </div>
  `;
}

function renderPortal() {
  const student = state.data.students.find((item) => item.id === state.activeStudentId);
  if (!student) {
    return;
  }

  const courses = getStudentCourses(student);

  renderStudentCard(student, courses);
  renderStudentProgress(student, courses);
  renderStudentCourseStack(student, courses);
  renderNoticeList(student, courses);
  renderSheetBlueprint(student, courses);

  if (!courses.length) {
    dom.courseOverview.innerHTML = `<div class="rounded-[1.8rem] border border-dashed border-court-200 bg-sand p-6 text-sm leading-7 text-slate-600">This student record is loaded, but no course has been assigned yet. Add course IDs in the <span class="font-semibold text-slate-900">Students</span> tab to unlock the dashboard.</div>`;
    dom.playerPanel.innerHTML = `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-6 text-sm leading-7 text-slate-600">Once a course is assigned and lessons are linked, the selected YouTube class will appear here.</div>`;
    dom.lessonList.innerHTML = `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-6 text-sm leading-7 text-slate-600">No lesson list yet because the student has no visible course.</div>`;
    return;
  }

  const course = state.data.courseMap.get(state.activeCourseId) || courses[0];
  const lesson = state.data.lessonMap.get(state.activeLessonId) || getCourseLessons(course.id)[0];

  renderCourseOverview(student, course);
  renderLessonList(student, course);

  if (!lesson) {
    dom.playerPanel.innerHTML = `<div class="rounded-[1.5rem] border border-dashed border-court-200 bg-sand p-6 text-sm leading-7 text-slate-600">The course is visible, but no YouTube lesson is linked yet. Add a row in the <span class="font-semibold text-slate-900">Lessons</span> tab with this course ID.</div>`;
    return;
  }

  renderPlayerPanel(student, lesson);
}

function handleLookup(query) {
  const student = getStudentByQuery(query);
  if (!student) {
    dom.feedback.textContent = "No student matched that ID, phone, or email in the current dataset.";
    dom.feedback.className = "mt-4 text-sm text-amber-200";
    return;
  }

  dom.feedback.textContent = `${student.name} loaded with ${student.enrolledCourseIds.length} visible courses.`;
  dom.feedback.className = "mt-4 text-sm text-emerald-200";
  selectStudent(student);
}

async function initialize() {
  try {
    state.data = await loadData();
    const defaultStudent = getStudentByQuery(APP_CONFIG.defaultStudentQuery) || state.data.students[0];
    if (!defaultStudent) {
      throw new Error("No student records were found.");
    }

    selectStudent(defaultStudent);
    dom.feedback.textContent = `${defaultStudent.name} is loaded by default so you can test the multi-course flow immediately.`;
    dom.feedback.className = "mt-4 text-sm text-court-100";
    dom.query.value = defaultStudent.id;
  } catch (error) {
    dom.feedback.textContent = error.message || "Failed to initialize portal.";
    dom.feedback.className = "mt-4 text-sm text-amber-200";
  }
}

dom.form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLookup(dom.query.value);
});

document.querySelectorAll("[data-student-pill]").forEach((button) => {
  button.addEventListener("click", () => {
    const studentId = button.dataset.studentPill;
    dom.query.value = studentId;
    handleLookup(studentId);
  });
});

initialize();
