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
};

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const state = {
  data: null,
  dataModeLabel: "ডেমো ডাটা",
  activeStudentId: "",
  openCourseId: "",
};

const dom = {
  body: document.body,
  loginBtn: document.getElementById("loginBtn"),
  userProfile: document.getElementById("userProfile"),
  navStudentName: document.getElementById("navStudentName"),
  navStudentId: document.getElementById("navStudentId"),
  navAvatar: document.getElementById("navAvatar"),
  loginSection: document.getElementById("loginSection"),
  dashboardSection: document.getElementById("dashboardSection"),
  form: document.getElementById("lookup-form"),
  query: document.getElementById("student-query"),
  password: document.getElementById("student-password"),
  feedback: document.getElementById("loginFeedback"),
  dataModeBadge: document.getElementById("dataModeBadge"),
  heroStudentName: document.getElementById("heroStudentName"),
  heroWelcomeText: document.getElementById("heroWelcomeText"),
  completedCount: document.getElementById("completedCount"),
  remainingCount: document.getElementById("remainingCount"),
  studentStatus: document.getElementById("studentStatus"),
  studentBatch: document.getElementById("studentBatch"),
  studentSession: document.getElementById("studentSession"),
  courseList: document.getElementById("courseList"),
  videoModal: document.getElementById("videoModal"),
  videoBackdrop: document.getElementById("videoBackdrop"),
  closeVideoBtn: document.getElementById("closeVideoBtn"),
  videoPlayer: document.getElementById("videoPlayer"),
  videoTitle: document.getElementById("videoTitle"),
};

function toBanglaNumber(value) {
  return String(value).replace(/\d/g, (digit) => BENGALI_DIGITS[Number(digit)]);
}

function parseList(value) {
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
    joinedOn: student.joinedOn || "",
    status: student.status || "Active",
    highlight: student.highlight || "Law student profile loaded from the workbook.",
    enrolledCourseIds: parseList(
      student.enrolledCourseIds || student.courseIds || student.courses || ""
    ),
    completedLessonIds: parseList(student.completedLessonIds || student.completed || ""),
  }));

  const courses = (raw.courses || []).map((course) => ({
    id: course.id || course.courseId || "",
    title: course.title || course.name || "Untitled Course",
    shortTitle: course.shortTitle || course.title || "Course",
    faculty: course.faculty || course.instructor || "Faculty not set",
    category: course.category || "Course",
    schedule: course.schedule || "Schedule pending",
    nextLive: course.nextLive || course.nextClass || "",
    description: course.description || "",
  }));

  const lessons = (raw.lessons || []).map((lesson) => ({
    id: lesson.id || lesson.lessonId || "",
    courseId: lesson.courseId || "",
    module: lesson.module || lesson.moduleTitle || "Module",
    title: lesson.title || lesson.lessonTitle || "Untitled Lesson",
    duration: lesson.duration || "N/A",
    youtubeId: lesson.youtubeId || lesson.videoId || "",
    releaseDate: lesson.releaseDate || lesson.date || "",
    resources: parseList(lesson.resources || lesson.resourceList || ""),
    note: lesson.note || "Sheet-linked lesson",
  }));

  return {
    students,
    courses,
    lessons,
    courseMap: new Map(courses.map((course) => [course.id, course])),
  };
}

async function loadData() {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint) {
    try {
      const response = await fetch(APP_CONFIG.remoteEndpoint, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Unable to load remote sheet data.");
      }

      const payload = await response.json();
      return {
        data: normalizeData(payload),
        modeLabel: "লাইভ গুগল শিট",
      };
    } catch (error) {
      console.warn("Falling back to demo data:", error);
    }
  }

  return {
    data: normalizeData(demoData),
    modeLabel: "ডেমো ডাটা",
  };
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
        .some((field) => String(field).trim().toLowerCase() === normalizedQuery)
    ) || null
  );
}

function getActiveStudent() {
  return state.data.students.find((student) => student.id === state.activeStudentId) || null;
}

function getStudentCourses(student) {
  return student.enrolledCourseIds
    .map((courseId) => state.data.courseMap.get(courseId))
    .filter(Boolean);
}

function getCourseLessons(courseId) {
  return state.data.lessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((left, right) => new Date(left.releaseDate) - new Date(right.releaseDate));
}

function getTotalResources(lessons) {
  return lessons.reduce((count, lesson) => count + lesson.resources.length, 0);
}

function getStudentStats(student, courses) {
  const lessons = courses.flatMap((course) => getCourseLessons(course.id));
  const completed = lessons.filter((lesson) => student.completedLessonIds.includes(lesson.id)).length;
  return {
    total: lessons.length,
    completed,
    remaining: Math.max(lessons.length - completed, 0),
  };
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "তারিখ পাওয়া যায়নি";
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return toBanglaNumber(dateValue);
  }

  return new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatStatus(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "active") {
    return "সক্রিয়";
  }
  if (normalized === "inactive") {
    return "নিষ্ক্রিয়";
  }
  return status || "অজানা";
}

function getAvatarLetter(name) {
  return String(name || "S")
    .trim()
    .charAt(0)
    .toUpperCase();
}

function setFeedback(message, type = "neutral") {
  const classMap = {
    success: "mt-5 text-sm text-emerald-600",
    error: "mt-5 text-sm text-red-500",
    neutral: "mt-5 text-sm text-slate-500",
  };

  dom.feedback.textContent = message;
  dom.feedback.className = classMap[type] || classMap.neutral;
}

function togglePage(page) {
  const isLogin = page === "login";
  dom.loginSection.classList.toggle("hidden", !isLogin);
  dom.dashboardSection.classList.toggle("hidden", isLogin);
  dom.loginBtn.classList.toggle("hidden", !isLogin);
  dom.userProfile.classList.toggle("hidden", isLogin);
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  const colorClass =
    type === "error"
      ? "bg-red-600"
      : type === "info"
      ? "bg-slate-900"
      : "law-gradient";

  toast.className = `fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-2xl px-8 py-4 font-bold text-white shadow-2xl transition-all duration-500 ${colorClass}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -20px)";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

function openVideo(videoId, title) {
  if (!videoId) {
    showToast("এই লেসনের ভিডিও লিংক পাওয়া যায়নি।", "error");
    return;
  }

  dom.videoTitle.textContent = title || "ক্লাস ভিডিও";
  dom.videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  dom.videoModal.classList.remove("hidden");
  dom.videoModal.classList.add("flex");
  dom.body.style.overflow = "hidden";
}

function closeVideo() {
  dom.videoPlayer.src = "";
  dom.videoModal.classList.add("hidden");
  dom.videoModal.classList.remove("flex");
  dom.body.style.overflow = "";
}

function renderStudentHeader(student, stats) {
  dom.navStudentName.textContent = student.name;
  dom.navStudentId.textContent = `আইডি: ${toBanglaNumber(student.id)}`;
  dom.navAvatar.textContent = getAvatarLetter(student.name);

  const firstName = student.name.split(" ")[0] || student.name;
  dom.heroStudentName.textContent = firstName;
  dom.heroWelcomeText.textContent =
    student.highlight ||
    "আপনার আজকের লেসনগুলো নিচে তালিকাভুক্ত করা হয়েছে। নিয়মিত অনুশীলন করুন।";

  dom.completedCount.textContent = toBanglaNumber(stats.completed);
  dom.remainingCount.textContent = toBanglaNumber(stats.remaining);
  dom.studentStatus.textContent = formatStatus(student.status);
  dom.studentBatch.textContent = student.batch || "-";
  dom.studentSession.textContent = student.session || "-";
}

function renderCourseList(student, courses) {
  if (!courses.length) {
    dom.courseList.innerHTML = `
      <div class="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm">
        <h3 class="text-2xl font-bold text-blue-950">কোনো কোর্স পাওয়া যায়নি</h3>
        <p class="mt-3 text-slate-500">
          এই স্টুডেন্টের জন্য এখনও কোনো কোর্স যুক্ত করা হয়নি। Google Sheet-এর enrolledCourseIds
          কলাম আপডেট করুন।
        </p>
      </div>
    `;
    return;
  }

  if (!courses.some((course) => course.id === state.openCourseId)) {
    state.openCourseId = courses[0].id;
  }

  dom.courseList.innerHTML = courses
    .map((course, index) => {
      const lessons = getCourseLessons(course.id);
      const resourceCount = getTotalResources(lessons);
      const isOpen = state.openCourseId === course.id;

      return `
        <div class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm ${
          isOpen ? "accordion-active" : ""
        }">
          <button
            type="button"
            data-course-id="${course.id}"
            class="flex w-full items-center justify-between px-8 py-7 text-left transition-colors hover:bg-slate-50"
          >
            <div class="flex items-center space-x-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                ${toBanglaNumber(String(index + 1).padStart(2, "0"))}
              </div>
              <div>
                <h3 class="text-xl font-bold text-blue-950">${course.title}</h3>
                <p class="text-sm text-slate-500">
                  ${toBanglaNumber(lessons.length)}টি রেকর্ড করা ক্লাস • ${toBanglaNumber(
                    resourceCount
                  )}টি রিসোর্স
                </p>
              </div>
            </div>
            <div
              class="arrow-icon rounded-full bg-slate-100 p-2 transition-transform duration-300"
              style="transform: rotate(${isOpen ? 180 : 0}deg)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div class="accordion-content px-4">
            <div class="space-y-3 rounded-3xl bg-slate-50 p-4">
              <div class="rounded-2xl border border-slate-100 bg-white p-4">
                <div class="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">ফ্যাকাল্টি</p>
                    <p class="mt-1 font-semibold text-slate-800">${course.faculty}</p>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">রুটিন</p>
                    <p class="mt-1 font-semibold text-slate-800">${course.schedule}</p>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">ক্যাটাগরি</p>
                    <p class="mt-1 font-semibold text-slate-800">${course.category}</p>
                  </div>
                </div>
              </div>

              ${
                lessons.length
                  ? lessons
                      .map((lesson, lessonIndex) => {
                        const isCompleted = student.completedLessonIds.includes(lesson.id);
                        return `
                          <div class="card-hover group/item flex flex-col items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:border-blue-200 sm:flex-row sm:items-center">
                            <div class="flex w-full items-center space-x-4 sm:w-auto">
                              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover/item:bg-blue-600 group-hover/item:text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <div>
                                <h4 class="font-bold text-slate-800">
                                  Class ${toBanglaNumber(String(lessonIndex + 1).padStart(2, "0"))}: ${
                                    lesson.title
                                  }
                                </h4>
                                <p class="mt-1 text-xs text-slate-500">${lesson.module} • ${
                                  lesson.duration
                                }</p>
                                <button
                                  type="button"
                                  data-video-id="${lesson.youtubeId}"
                                  data-video-title="${lesson.title}"
                                  class="mt-2 flex items-center text-xs font-bold text-blue-600 transition hover:text-blue-800"
                                >
                                  <span>ভিডিওটি প্লে করুন</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:justify-end">
                              <div class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-400">
                                আপডেট: ${formatDate(lesson.releaseDate)}
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                isCompleted
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }">
                                ${isCompleted ? "সম্পন্ন" : "নতুন"}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")
                  : `
                    <div class="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
                      এই কোর্সের জন্য এখনও কোনো ক্লাস যোগ করা হয়নি।
                    </div>
                  `
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  dom.courseList.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.openCourseId = state.openCourseId === button.dataset.courseId ? "" : button.dataset.courseId;
      renderCourseList(student, courses);
    });
  });

  dom.courseList.querySelectorAll("[data-video-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openVideo(button.dataset.videoId, button.dataset.videoTitle);
    });
  });
}

function renderDashboard(student) {
  const courses = getStudentCourses(student);
  const stats = getStudentStats(student, courses);

  renderStudentHeader(student, stats);
  renderCourseList(student, courses);
}

function logout() {
  closeVideo();
  state.activeStudentId = "";
  state.openCourseId = "";
  togglePage("login");
  setFeedback("আবার লগইন করতে স্টুডেন্ট তথ্য দিন।");
  showToast("লগআউট হয়েছে।", "info");
}

function performLogin(query = dom.query.value) {
  const studentQuery = String(query || "").trim();

  if (!studentQuery) {
    setFeedback("স্টুডেন্ট আইডি, ফোন নাম্বার অথবা ইমেইল লিখুন।", "error");
    showToast("লগইন তথ্য দিন।", "error");
    return;
  }

  const student = getStudentByQuery(studentQuery);
  if (!student) {
    setFeedback("কোনো স্টুডেন্ট খুঁজে পাওয়া যায়নি।", "error");
    showToast("স্টুডেন্ট তথ্য মেলেনি।", "error");
    return;
  }

  state.activeStudentId = student.id;
  state.openCourseId = getStudentCourses(student)[0]?.id || "";

  renderDashboard(student);
  togglePage("profile");
  setFeedback(`${student.name} সফলভাবে লগইন করেছেন।`, "success");
  showToast("সাফল্যের সাথে লগইন হয়েছে!");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function initialize() {
  const result = await loadData();
  state.data = result.data;
  state.dataModeLabel = result.modeLabel;

  dom.dataModeBadge.textContent = result.modeLabel;
  dom.query.value = APP_CONFIG.defaultStudentQuery;
  setFeedback("ডেমো লগইন করতে স্টুডেন্ট আইডি, ফোন বা ইমেইল ব্যবহার করুন।");
  togglePage("login");
}

dom.form.addEventListener("submit", (event) => {
  event.preventDefault();
  performLogin();
});

dom.loginBtn.addEventListener("click", () => {
  togglePage("login");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

dom.userProfile.addEventListener("click", () => {
  if (state.activeStudentId) {
    logout();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll("[data-student-pill]").forEach((button) => {
  button.addEventListener("click", () => {
    dom.query.value = button.dataset.studentPill;
    performLogin(button.dataset.studentPill);
  });
});

dom.closeVideoBtn.addEventListener("click", closeVideo);
dom.videoBackdrop.addEventListener("click", closeVideo);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideo();
  }
});

initialize().catch((error) => {
  console.error(error);
  setFeedback("ডাটা লোড করতে সমস্যা হয়েছে।", "error");
  showToast("ডাটা লোড করা যায়নি।", "error");
});
