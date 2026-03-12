const APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const APP_CONFIG = Object.freeze({
  dataMode: "remote",
  remoteEndpoint: `https://script.google.com/macros/s/${APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
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
      profileImage: "https://i.pravatar.cc/240?img=12",
      password: "law014",
      loginApproval: "Approved",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20LAW-2026-014",
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
      profileImage: "https://i.pravatar.cc/240?img=32",
      password: "bar008",
      loginApproval: "Approved",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20BAR-2026-008",
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
      profileImage: "https://i.pravatar.cc/240?img=15",
      password: "lit031",
      loginApproval: "Pending",
      passwordResetUrl:
        "mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20LIT-2026-031",
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
      releaseDate: "2026-01-05",
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
      releaseDate: "2026-02-08",
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
      releaseDate: "2026-02-04",
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
      releaseDate: "2026-02-02",
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
      releaseDate: "2026-01-06",
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
      releaseDate: "2026-02-12",
      resources: ["Question bank", "Voice practice cues"],
      note: "Best used right before mock viva.",
    },
  ],
  enrollments: [
    {
      studentId: "LAW-2026-014",
      courseId: "judiciary-foundation",
      accessStartDate: "2026-01-01",
      accessEndDate: "2026-07-31",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-15",
      paymentDueDate: "2026-04-15",
      monthlyFee: "1500",
      paidMonths: ["2026-01", "2026-03"],
      status: "Active",
    },
    {
      studentId: "LAW-2026-014",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-10",
      accessEndDate: "2026-08-10",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-15",
      paymentDueDate: "2026-04-15",
      monthlyFee: "1500",
      paidMonths: ["2026-03"],
      status: "Active",
    },
    {
      studentId: "LAW-2026-014",
      courseId: "legal-drafting-lab",
      accessStartDate: "2026-02-20",
      accessEndDate: "2026-06-30",
      videoAccessUntil: "",
      lastPaymentDate: "2026-02-28",
      paymentDueDate: "2026-03-30",
      monthlyFee: "1500",
      paidMonths: ["2026-02"],
      status: "Active",
    },
    {
      studentId: "BAR-2026-008",
      courseId: "bar-viva-clinic",
      accessStartDate: "2026-01-15",
      accessEndDate: "2026-05-30",
      videoAccessUntil: "2026-03-06",
      lastPaymentDate: "2026-02-27",
      paymentDueDate: "2026-03-28",
      monthlyFee: "1500",
      status: "Pending",
    },
    {
      studentId: "BAR-2026-008",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-01",
      accessEndDate: "2026-06-15",
      videoAccessUntil: "",
      lastPaymentDate: "2026-03-02",
      paymentDueDate: "2026-04-02",
      monthlyFee: "1500",
      paidMonths: ["2026-02", "2026-03"],
      status: "Active",
    },
    {
      studentId: "LIT-2026-031",
      courseId: "legal-drafting-lab",
      accessStartDate: "2026-02-18",
      accessEndDate: "2026-07-15",
      videoAccessUntil: "2026-03-02",
      lastPaymentDate: "2026-02-18",
      paymentDueDate: "2026-04-08",
      monthlyFee: "1500",
      status: "Pending",
    },
    {
      studentId: "LIT-2026-031",
      courseId: "criminal-procedure-mastery",
      accessStartDate: "2026-02-25",
      accessEndDate: "2026-08-05",
      videoAccessUntil: "2026-03-12",
      lastPaymentDate: "2026-03-04",
      paymentDueDate: "2026-04-12",
      monthlyFee: "1500",
      status: "Active",
    },
  ],
};

const state = {
  data: null,
  dataModeLabel: "",
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
  navAvatarImage: document.getElementById("navAvatarImage"),
  navAvatarFallback: document.getElementById("navAvatarFallback"),
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
  profileModal: document.getElementById("profileModal"),
  profileBackdrop: document.getElementById("profileBackdrop"),
  closeProfileBtn: document.getElementById("closeProfileBtn"),
  profileBackBtn: document.getElementById("profileBackBtn"),
  profileLogoutBtn: document.getElementById("profileLogoutBtn"),
  profileImage: document.getElementById("profileImage"),
  profileInitials: document.getElementById("profileInitials"),
  profileStudentName: document.getElementById("profileStudentName"),
  profileStudentEmail: document.getElementById("profileStudentEmail"),
  profileStudentId: document.getElementById("profileStudentId"),
  profileStudentBatch: document.getElementById("profileStudentBatch"),
  profileStudentSession: document.getElementById("profileStudentSession"),
  profileCourseCount: document.getElementById("profileCourseCount"),
  profileAccessWindow: document.getElementById("profileAccessWindow"),
  profileVideoAccessUntil: document.getElementById("profileVideoAccessUntil"),
  profileLastPaymentDate: document.getElementById("profileLastPaymentDate"),
  profilePaymentDate: document.getElementById("profilePaymentDate"),
  profileCourseGrid: document.getElementById("profileCourseGrid"),
  profileResetLink: document.getElementById("profileResetLink"),
};

function formatNumber(value) {
  return String(value);
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

function toMonthKey(year, monthNumber) {
  const numericMonth = Number(monthNumber);
  if (!year || numericMonth < 1 || numericMonth > 12) {
    return "";
  }

  return `${String(year).padStart(4, "0")}-${String(numericMonth).padStart(2, "0")}`;
}

function parseMonthValue(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }

  const isoLikeMatch = text.match(/^(\d{4})[-/](\d{1,2})(?:[-/]\d{1,2})?$/);
  if (isoLikeMatch) {
    return toMonthKey(isoLikeMatch[1], isoLikeMatch[2]);
  }

  const leadingIsoMatch = text.match(/^(\d{4})-(\d{1,2})/);
  if (leadingIsoMatch) {
    return toMonthKey(leadingIsoMatch[1], leadingIsoMatch[2]);
  }

  const parsedDate = new Date(text);
  if (!Number.isNaN(parsedDate.getTime())) {
    return toMonthKey(parsedDate.getFullYear(), parsedDate.getMonth() + 1);
  }

  const monthNameDate = new Date(`1 ${text}`);
  if (!Number.isNaN(monthNameDate.getTime())) {
    return toMonthKey(monthNameDate.getFullYear(), monthNameDate.getMonth() + 1);
  }

  return "";
}

function parsePaidMonthList(value) {
  const values = Array.isArray(value)
    ? value
    : String(value || "")
        .split(/[|,\n]/)
        .map((item) => item.trim())
        .filter(Boolean);

  return [...new Set(values.map((item) => parseMonthValue(item)).filter(Boolean))].sort();
}

function formatMonthKey(monthKey, fallback = "Month unavailable") {
  const normalizedKey = parseMonthValue(monthKey);
  if (!normalizedKey) {
    return fallback;
  }

  const [year, month] = normalizedKey.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[Number(month) - 1]} ${year}`;
}

function formatPaidMonthList(monthKeys, fallback = "Not set") {
  const normalizedKeys = parsePaidMonthList(monthKeys);
  if (!normalizedKeys.length) {
    return fallback;
  }

  return normalizedKeys.map((monthKey) => formatMonthKey(monthKey)).join(", ");
}

function hasPaidMonthAccess(entry) {
  return Array.isArray(entry.paidMonths) && entry.paidMonths.length > 0;
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
    profileImage: student.profileImage || student.photo || student.imageUrl || "",
    password: student.password || student.loginPassword || student.portalPassword || "",
    loginApproval:
      student.loginApproval ||
      student.approval ||
      student.loginApproved ||
      student.portalApproval ||
      "",
    passwordResetUrl:
      student.passwordResetUrl ||
      student.resetPasswordUrl ||
      student.forgotPasswordUrl ||
      "",
    highlight: student.highlight || "Your current lessons and updates are ready.",
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

  const enrollments = (raw.enrollments || [])
    .flatMap((enrollment, index) => {
      const studentIds = parseList(
        enrollment.studentId || enrollment.studentIds || enrollment.studentID || ""
      );
      const courseIds = parseList(
        enrollment.courseId || enrollment.courseIds || enrollment.courseID || ""
      );

      return studentIds.flatMap((studentId) =>
        courseIds.map((courseId, courseIndex) => ({
          id: enrollment.id || `enrollment-${index + 1}-${courseIndex + 1}`,
          studentId,
          courseId,
          accessStartDate:
            enrollment.accessStartDate ||
            enrollment.startDate ||
            enrollment.activeFrom ||
            enrollment.accessFrom ||
            "",
          accessEndDate:
            enrollment.accessEndDate ||
            enrollment.endDate ||
            enrollment.validUntil ||
            enrollment.accessUntil ||
            "",
          videoAccessUntil:
            enrollment.videoAccessUntil ||
            enrollment.approvedUntil ||
            enrollment.lessonAccessUntil ||
            enrollment.accessApprovedUntil ||
            enrollment.videoUnlockDate ||
            enrollment.releaseAccessUntil ||
            enrollment.accessEndDate ||
            enrollment.endDate ||
            "",
          lastPaymentDate:
            enrollment.lastPaymentDate ||
            enrollment.paymentApprovedOn ||
            enrollment.paidOn ||
            enrollment.latestPaymentDate ||
            "",
          paymentDueDate:
            enrollment.paymentDueDate ||
            enrollment.nextPaymentDueDate ||
            enrollment.lastPaymentDueDate ||
            enrollment.paymentDate ||
            "",
          monthlyFee:
            enrollment.monthlyFee ||
            enrollment.fee ||
            enrollment.amount ||
            enrollment.monthlyAmount ||
            "",
          paidMonths: parsePaidMonthList(
            enrollment.paidMonths ||
              enrollment.paymentMonths ||
              enrollment.paidMonthList ||
              enrollment.allowedMonths ||
              ""
          ),
          status: enrollment.status || "Active",
        }))
      );
    })
    .filter((enrollment) => enrollment.studentId && enrollment.courseId);

  return {
    students,
    courses,
    lessons,
    enrollments,
    hasEnrollmentSheet: enrollments.length > 0,
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
        modeLabel: "Live Google Sheet",
      };
    } catch (error) {
      console.warn("Falling back to demo data:", error);
    }
  }

  return {
    data: normalizeData(demoData),
    modeLabel: "Demo Data",
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

function isLoginApprovalGranted(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return ["approved", "yes", "true", "allow", "allowed", "active", "1"].includes(normalized);
}

function isStudentLoginBlocked(student) {
  const normalized = String(student.status || "").trim().toLowerCase();
  return ["inactive", "blocked", "suspended", "expired"].includes(normalized);
}

function authenticateLocalStudent(query, password) {
  const student = getStudentByQuery(query);
  if (!student) {
    return {
      ok: false,
      message: "No matching student was found.",
    };
  }

  if (isStudentLoginBlocked(student)) {
    return {
      ok: false,
      studentId: student.id,
      message: "This student account is not active.",
    };
  }

  if (!isLoginApprovalGranted(student.loginApproval)) {
    return {
      ok: false,
      studentId: student.id,
      message: "This account is not ready for access right now.",
    };
  }

  const storedPassword = String(student.password || "").trim();
  if (!storedPassword) {
    return {
      ok: false,
      studentId: student.id,
      message: "Password has not been set for this student yet.",
    };
  }

  if (storedPassword !== String(password || "").trim()) {
    return {
      ok: false,
      studentId: student.id,
      message: "Incorrect password.",
    };
  }

  return {
    ok: true,
    studentId: student.id,
    message: "Login approved.",
  };
}

async function authenticateRemoteStudent(query, password) {
  const response = await fetch(APP_CONFIG.remoteEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams({
      action: "login",
      query: String(query || "").trim(),
      password: String(password || "").trim(),
    }),
  });

  if (!response.ok) {
    throw new Error("Remote login validation failed.");
  }

  return response.json();
}

async function authenticateStudent(query, password) {
  if (APP_CONFIG.dataMode === "remote" && APP_CONFIG.remoteEndpoint && state.dataModeLabel === "Live Google Sheet") {
    return authenticateRemoteStudent(query, password);
  }

  return authenticateLocalStudent(query, password);
}

function buildFallbackEnrollments(student) {
  return student.enrolledCourseIds.map((courseId, index) => ({
    id: `fallback-${student.id}-${index + 1}`,
    studentId: student.id,
    courseId,
    accessStartDate: student.joinedOn || "",
    accessEndDate: "",
    paymentDueDate: "",
    paidMonths: [],
    status: student.status || "Active",
  }));
}

function parseTimestamp(dateValue) {
  if (!dateValue) {
    return null;
  }

  const date = new Date(dateValue);
  return Number.isNaN(date.getTime()) ? null : date.getTime();
}

function getStudentCourseEntries(student) {
  const sourceEnrollments = state.data.hasEnrollmentSheet
    ? state.data.enrollments.filter((enrollment) => enrollment.studentId === student.id)
    : buildFallbackEnrollments(student);

  const seenCourseIds = new Set();

  return sourceEnrollments
    .filter((enrollment) => {
      if (seenCourseIds.has(enrollment.courseId)) {
        return false;
      }

      seenCourseIds.add(enrollment.courseId);
      return true;
    })
    .map((enrollment) => ({
      ...enrollment,
      course: state.data.courseMap.get(enrollment.courseId) || null,
    }))
    .filter((entry) => entry.course)
    .sort((left, right) => {
      const leftStart = parseTimestamp(left.accessStartDate) ?? Number.MAX_SAFE_INTEGER;
      const rightStart = parseTimestamp(right.accessStartDate) ?? Number.MAX_SAFE_INTEGER;

      if (leftStart !== rightStart) {
        return leftStart - rightStart;
      }

      return left.course.title.localeCompare(right.course.title);
    });
}

function getStudentCourses(student) {
  return getStudentCourseEntries(student).map((entry) => entry.course);
}

function isEnrollmentBlocked(entry) {
  const normalized = String(entry.status || "").trim().toLowerCase();
  return normalized === "blocked" || normalized === "suspended";
}

function getLatestValidDateValue(values) {
  return values
    .map((value) => ({ raw: value, timestamp: parseTimestamp(value) }))
    .filter((item) => item.timestamp !== null)
    .sort((left, right) => right.timestamp - left.timestamp)[0] || null;
}

function getManualVideoAccessTimestamp(entry) {
  return parseTimestamp(entry.videoAccessUntil);
}

function getLessonAvailabilityDate(entry) {
  const paidUnlockDate = getLatestValidDateValue([entry.videoAccessUntil, entry.paymentDueDate]);
  const courseEndDate = getLatestValidDateValue([entry.accessEndDate]);

  if (paidUnlockDate && courseEndDate) {
    return paidUnlockDate.timestamp <= courseEndDate.timestamp ? paidUnlockDate.raw : courseEndDate.raw;
  }

  return paidUnlockDate?.raw || courseEndDate?.raw || "";
}

function getEffectiveVideoAccessTimestamp(entry) {
  const fallbackTimestamp = Date.now();
  const accessUntilTimestamp = parseTimestamp(getLessonAvailabilityDate(entry)) ?? fallbackTimestamp;

  return Math.min(accessUntilTimestamp, Date.now());
}

function getEnrollmentVideoAccessSummary(entry) {
  if (hasPaidMonthAccess(entry)) {
    return formatPaidMonthList(entry.paidMonths);
  }

  return formatDate(getLessonAvailabilityDate(entry), "Not set");
}

function getLessonAccessState(entry, lesson) {
  if (isEnrollmentBlocked(entry)) {
    return {
      canWatch: false,
      reason: "Access is blocked by admin for this course.",
      status: "blocked",
    };
  }

  const releaseTimestamp = parseTimestamp(lesson.releaseDate);
  if (releaseTimestamp === null) {
    return {
      canWatch: true,
      reason: "",
      status: "open",
    };
  }

  const accessStartTimestamp = parseTimestamp(entry.accessStartDate);
  if (accessStartTimestamp !== null && releaseTimestamp < accessStartTimestamp) {
    return {
      canWatch: false,
      reason: `This lesson is outside the approved access window that starts on ${formatDate(
        entry.accessStartDate,
        "the selected date"
      )}.`,
      status: "outside-window",
    };
  }

  const accessEndTimestamp = parseTimestamp(entry.accessEndDate);
  if (accessEndTimestamp !== null && releaseTimestamp > accessEndTimestamp) {
    return {
      canWatch: false,
      reason: `This lesson is outside the approved access window that ends on ${formatDate(
        entry.accessEndDate,
        "the selected date"
      )}.`,
      status: "outside-window",
    };
  }

  const manualVideoAccessTimestamp = getManualVideoAccessTimestamp(entry);
  if (manualVideoAccessTimestamp !== null && releaseTimestamp <= manualVideoAccessTimestamp) {
    return {
      canWatch: true,
      reason: "",
      status: "open",
    };
  }

  if (hasPaidMonthAccess(entry)) {
    const lessonMonthKey = parseMonthValue(lesson.releaseDate);
    if (!lessonMonthKey || entry.paidMonths.includes(lessonMonthKey)) {
      return {
        canWatch: true,
        reason: "",
        status: "open",
      };
    }

    const lessonMonthLabel = formatMonthKey(lessonMonthKey, "this month");
    return {
      canWatch: false,
      reason: `This lesson was uploaded in ${lessonMonthLabel}. That month is not marked as paid for this course.`,
      status: "payment-required",
    };
  }

  const effectiveAccessTimestamp = getEffectiveVideoAccessTimestamp(entry);
  if (releaseTimestamp > effectiveAccessTimestamp) {
    const approvedUntilLabel = formatDate(getLessonAvailabilityDate(entry), "the available date");
    return {
      canWatch: false,
      reason: `New lessons after ${approvedUntilLabel} are not available yet.`,
      status: "payment-required",
    };
  }

  return {
    canWatch: true,
    reason: "",
    status: "open",
  };
}

function getCourseLessons(courseId) {
  return state.data.lessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((left, right) => new Date(left.releaseDate) - new Date(right.releaseDate));
}

function getTotalResources(lessons) {
  return lessons.reduce((count, lesson) => count + lesson.resources.length, 0);
}

function getStudentStats(student, courseEntries) {
  const lessons = courseEntries.flatMap((entry) =>
    getCourseLessons(entry.course.id).filter((lesson) => getLessonAccessState(entry, lesson).canWatch)
  );
  const completed = lessons.filter((lesson) => student.completedLessonIds.includes(lesson.id)).length;
  return {
    total: lessons.length,
    completed,
    remaining: Math.max(lessons.length - completed, 0),
  };
}

function formatDate(dateValue, fallback = "Date unavailable") {
  if (!dateValue) {
    return fallback;
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatDateRange(startDate, endDate) {
  if (startDate && endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }

  if (startDate) {
    return `From ${formatDate(startDate)}`;
  }

  if (endDate) {
    return `Until ${formatDate(endDate)}`;
  }

  return "Not set";
}

function getSortedDateItems(values) {
  return values
    .map((value) => ({ raw: value, timestamp: parseTimestamp(value) }))
    .filter((item) => item.timestamp !== null)
    .sort((left, right) => left.timestamp - right.timestamp);
}

function getProfileAccessSummary(courseEntries) {
  const accessStarts = getSortedDateItems(courseEntries.map((entry) => entry.accessStartDate));
  const accessEnds = getSortedDateItems(courseEntries.map((entry) => entry.accessEndDate));

  if (accessStarts.length || accessEnds.length) {
    return formatDateRange(
      accessStarts[0] ? accessStarts[0].raw : "",
      accessEnds.length ? accessEnds[accessEnds.length - 1].raw : ""
    );
  }

  const fallbackStart = courseEntries.find((entry) => entry.accessStartDate)?.accessStartDate || "";
  const fallbackEnd =
    [...courseEntries].reverse().find((entry) => entry.accessEndDate)?.accessEndDate || "";
  return formatDateRange(fallbackStart, fallbackEnd);
}

function getProfileVideoAccessSummary(courseEntries) {
  if (courseEntries.some((entry) => hasPaidMonthAccess(entry))) {
    if (!courseEntries.every((entry) => hasPaidMonthAccess(entry))) {
      return "Varies by course";
    }

    const paidMonths = [...new Set(courseEntries.flatMap((entry) => entry.paidMonths || []))].sort();
    return formatPaidMonthList(paidMonths, "Not set");
  }

  const approvalDates = getSortedDateItems(
    courseEntries.map((entry) => getLessonAvailabilityDate(entry))
  );

  if (approvalDates.length) {
    const selected = approvalDates[approvalDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  const fallbackEntry = [...courseEntries].reverse().find((entry) => getLessonAvailabilityDate(entry));
  const fallback = fallbackEntry ? getLessonAvailabilityDate(fallbackEntry) : "";
  return formatDate(fallback, "Not set");
}

function getProfileLastPaymentSummary(courseEntries) {
  const paymentDates = getSortedDateItems(courseEntries.map((entry) => entry.lastPaymentDate));
  if (paymentDates.length) {
    const selected = paymentDates[paymentDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  return formatDate(
    courseEntries.find((entry) => entry.lastPaymentDate)?.lastPaymentDate || "",
    "Not set"
  );
}

function getProfilePaymentSummary(courseEntries) {
  const paymentDates = getSortedDateItems(courseEntries.map((entry) => entry.paymentDueDate));
  if (paymentDates.length) {
    const now = Date.now();
    const nextDue = paymentDates.find((item) => item.timestamp >= now);
    const selected = nextDue || paymentDates[paymentDates.length - 1];
    return formatDate(selected.raw, "Not set");
  }

  return courseEntries.find((entry) => entry.paymentDueDate)?.paymentDueDate || "Not set";
}

function formatStatus(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "active") {
    return "Active";
  }
  if (normalized === "inactive") {
    return "Inactive";
  }
  if (normalized === "expired") {
    return "Expired";
  }
  if (normalized === "pending") {
    return "Pending";
  }
  if (normalized === "blocked") {
    return "Blocked";
  }
  if (normalized === "suspended") {
    return "Suspended";
  }
  return status || "Unknown";
}

function getStatusBadgeClass(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "active") {
    return "bg-emerald-100 text-emerald-700";
  }
  if (normalized === "expired" || normalized === "inactive") {
    return "bg-red-100 text-red-700";
  }
  if (normalized === "pending") {
    return "bg-amber-100 text-amber-700";
  }
  if (normalized === "blocked" || normalized === "suspended") {
    return "bg-slate-900 text-white";
  }
  return "bg-slate-100 text-slate-600";
}

function getAvatarInitials(name) {
  const parts = String(name || "Student")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return (
    parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "S"
  );
}

function setAvatarImage(imageUrl, imageElement, fallbackElement, fallbackText) {
  fallbackElement.textContent = fallbackText;

  if (!imageUrl) {
    imageElement.removeAttribute("src");
    imageElement.classList.add("hidden");
    fallbackElement.classList.remove("hidden");
    return;
  }

  imageElement.onerror = () => {
    imageElement.classList.add("hidden");
    fallbackElement.classList.remove("hidden");
  };

  imageElement.onload = () => {
    imageElement.classList.remove("hidden");
    fallbackElement.classList.add("hidden");
  };

  imageElement.src = imageUrl;
}

function getPasswordResetUrl(student) {
  return (
    student.passwordResetUrl ||
    `mailto:support@ainpathshala.com?subject=Password%20Reset%20Request%20for%20${encodeURIComponent(
      student.id || "student"
    )}`
  );
}

function setFeedback(message, type = "neutral") {
  const classMap = {
    success: "mt-5 text-sm text-emerald-600",
    error: "mt-5 text-sm text-red-500",
    neutral: "mt-5 text-sm text-slate-500",
  };

  if (!message) {
    dom.feedback.textContent = "";
    dom.feedback.className = "hidden";
    return;
  }

  dom.feedback.textContent = message;
  dom.feedback.className = classMap[type] || classMap.neutral;
}

function closeProfileModal() {
  dom.profileModal.classList.add("hidden");
  dom.profileModal.classList.remove("flex");

  if (dom.videoModal.classList.contains("hidden")) {
    dom.body.style.overflow = "";
  }
}

function togglePage(page) {
  const isLogin = page === "login";

  if (isLogin) {
    closeProfileModal();
  }

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
    showToast("This lesson does not have a video link yet.", "error");
    return;
  }

  dom.videoTitle.textContent = title || "Class Video";
  dom.videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  dom.videoModal.classList.remove("hidden");
  dom.videoModal.classList.add("flex");
  dom.body.style.overflow = "hidden";
}

function closeVideo() {
  dom.videoPlayer.src = "";
  dom.videoModal.classList.add("hidden");
  dom.videoModal.classList.remove("flex");
  if (dom.profileModal.classList.contains("hidden")) {
    dom.body.style.overflow = "";
  }
}

function renderStudentHeader(student, stats) {
  const avatarInitials = getAvatarInitials(student.name);

  dom.navStudentName.textContent = student.name;
  dom.navStudentId.textContent = `ID: ${student.id}`;
  setAvatarImage(student.profileImage, dom.navAvatarImage, dom.navAvatarFallback, avatarInitials);

  const firstName = student.name.split(" ")[0] || student.name;
  dom.heroStudentName.textContent = firstName;
  dom.heroWelcomeText.textContent =
    student.highlight ||
    "Your current lessons are listed below. Keep practicing consistently.";

  dom.completedCount.textContent = formatNumber(stats.completed);
  dom.remainingCount.textContent = formatNumber(stats.remaining);
  dom.studentStatus.textContent = formatStatus(student.status);
  dom.studentBatch.textContent = student.batch || "-";
  dom.studentSession.textContent = student.session || "-";
}

function renderProfileModal(student, courseEntries) {
  const avatarInitials = getAvatarInitials(student.name);

  dom.profileStudentName.textContent = student.name;
  dom.profileStudentEmail.textContent = student.email || "Email not provided";
  dom.profileStudentId.textContent = student.id || "-";
  dom.profileStudentBatch.textContent = student.batch || "-";
  dom.profileStudentSession.textContent = student.session || "-";
  dom.profileCourseCount.textContent = formatNumber(courseEntries.length);
  dom.profileAccessWindow.textContent = getProfileAccessSummary(courseEntries);
  dom.profileVideoAccessUntil.textContent = getProfileVideoAccessSummary(courseEntries);
  dom.profileLastPaymentDate.textContent = getProfileLastPaymentSummary(courseEntries);
  dom.profilePaymentDate.textContent = getProfilePaymentSummary(courseEntries);
  dom.profileResetLink.href = getPasswordResetUrl(student);

  setAvatarImage(student.profileImage, dom.profileImage, dom.profileInitials, avatarInitials);

  dom.profileCourseGrid.innerHTML = courseEntries.length
    ? courseEntries
        .map((entry) => {
          const course = entry.course;
          return `
            <article class="h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 p-5">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    ${course.category}
                  </p>
                  <h4 class="mt-2 break-words text-lg font-bold leading-tight text-blue-950">${course.title}</h4>
                  <p class="mt-1 break-words text-sm text-slate-500">${course.faculty}</p>
                </div>
                <span class="rounded-full px-3 py-1 text-[10px] font-bold ${getStatusBadgeClass(
                  entry.status
                )}">
                  ${formatStatus(entry.status)}
                </span>
              </div>

              <div class="mt-5 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Access Start
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.accessStartDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Access End
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.accessEndDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Video Access
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${getEnrollmentVideoAccessSummary(entry)}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Last Payment
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.lastPaymentDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Payment Due
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${formatDate(entry.paymentDueDate, "Not set")}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Monthly Fee
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">
                    ${entry.monthlyFee ? `BDT ${entry.monthlyFee}` : "Not set"}
                  </p>
                </div>
                <div class="min-w-0 rounded-2xl border border-white bg-white p-4 sm:col-span-2 2xl:col-span-3">
                  <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Schedule
                  </p>
                  <p class="mt-2 break-words text-sm font-semibold leading-snug text-slate-800">${course.schedule}</p>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : `
      <div class="rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500 md:col-span-2">
        No course details are available for this account yet.
      </div>
    `;
}

function openProfileModal() {
  const student = getActiveStudent();
  if (!student) {
    return;
  }

  renderProfileModal(student, getStudentCourseEntries(student));
  dom.profileModal.classList.remove("hidden");
  dom.profileModal.classList.add("flex");
  dom.body.style.overflow = "hidden";
}

function renderCourseList(student, courseEntries) {
  if (!courseEntries.length) {
    dom.courseList.innerHTML = `
      <div class="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm">
        <h3 class="text-2xl font-bold text-blue-950">No Courses Found</h3>
        <p class="mt-3 text-slate-500">No courses are available for this account right now.</p>
      </div>
    `;
    return;
  }

  if (!courseEntries.some((entry) => entry.course.id === state.openCourseId)) {
    state.openCourseId = courseEntries[0].course.id;
  }

  dom.courseList.innerHTML = courseEntries
    .map((entry, index) => {
      const course = entry.course;
      const lessons = getCourseLessons(course.id);
      const resourceCount = getTotalResources(lessons);
      const unlockedCount = lessons.filter((lesson) => getLessonAccessState(entry, lesson).canWatch)
        .length;
      const lockedCount = Math.max(lessons.length - unlockedCount, 0);
      const isOpen = state.openCourseId === course.id;

      return `
        <div class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm ${
          isOpen ? "accordion-active" : ""
        }">
          <button
            type="button"
            data-course-id="${course.id}"
            class="flex w-full flex-col items-start justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:px-8 sm:py-7"
          >
            <div class="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                ${formatNumber(String(index + 1).padStart(2, "0"))}
              </div>
              <div class="min-w-0">
                <h3 class="break-words text-xl font-bold text-blue-950">${course.title}</h3>
                <p class="break-words text-sm text-slate-500">
                  ${formatNumber(lessons.length)} recorded classes • ${formatNumber(
                    resourceCount
                  )} resources
                </p>
              </div>
            </div>
            <div
              class="arrow-icon shrink-0 rounded-full bg-slate-100 p-2 transition-transform duration-300"
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
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Faculty</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.faculty}</p>
                  </div>
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Schedule</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.schedule}</p>
                  </div>
                  <div class="min-w-0">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Category</p>
                    <p class="mt-1 break-words font-semibold text-slate-800">${course.category}</p>
                  </div>
                </div>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">
                    Access: ${formatDateRange(entry.accessStartDate, entry.accessEndDate)}
                  </span>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-700">
                    Video Access: ${getEnrollmentVideoAccessSummary(entry)}
                  </span>
                  <span class="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">
                    Unlocked Videos: ${formatNumber(unlockedCount)}
                  </span>
                  ${
                    lockedCount
                      ? `<span class="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-bold text-rose-700">Locked Videos: ${formatNumber(
                          lockedCount
                        )}</span>`
                      : ""
                  }
                  <span class="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-700">
                    Payment Due: ${formatDate(entry.paymentDueDate, "Not set")}
                  </span>
                  <span class="rounded-full px-3 py-1 text-[10px] font-bold ${getStatusBadgeClass(
                    entry.status
                  )}">
                    ${formatStatus(entry.status)}
                  </span>
                </div>
              </div>

              ${
                lessons.length
                  ? lessons
                      .map((lesson, lessonIndex) => {
                        const isCompleted = student.completedLessonIds.includes(lesson.id);
                        const accessState = getLessonAccessState(entry, lesson);
                        return `
                          <div class="card-hover group/item flex flex-col items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:border-blue-200 sm:flex-row sm:items-center">
                            <div class="flex w-full min-w-0 items-center space-x-4 sm:w-auto">
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
                              <div class="min-w-0">
                                <h4 class="break-words font-bold text-slate-800">
                                  Class ${formatNumber(String(lessonIndex + 1).padStart(2, "0"))}: ${
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
                                  data-video-locked="${accessState.canWatch ? "false" : "true"}"
                                  data-lock-reason="${accessState.reason}"
                                  class="mt-2 flex items-center text-xs font-bold transition ${
                                    accessState.canWatch
                                      ? "text-blue-600 hover:text-blue-800"
                                      : "text-slate-400 hover:text-slate-500"
                                  }"
                                >
                                  <span>${accessState.canWatch ? "Play Video" : "Locked Until Payment"}</span>
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
                                Updated: ${formatDate(lesson.releaseDate)}
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                accessState.canWatch
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-rose-100 text-rose-700"
                              }">
                                ${accessState.canWatch ? "Unlocked" : "Payment Lock"}
                              </div>
                              <div class="rounded-full px-3 py-1 text-[10px] font-bold ${
                                isCompleted
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }">
                                ${isCompleted ? "Completed" : "New"}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")
                  : `
                    <div class="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
                      No classes have been added to this course yet.
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
      renderCourseList(student, courseEntries);
    });
  });

  dom.courseList.querySelectorAll("[data-video-id]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.videoLocked === "true") {
        showToast(button.dataset.lockReason || "This video is not available right now.", "info");
        return;
      }

      openVideo(button.dataset.videoId, button.dataset.videoTitle);
    });
  });
}

function renderDashboard(student) {
  const courseEntries = getStudentCourseEntries(student);
  const stats = getStudentStats(student, courseEntries);

  renderStudentHeader(student, stats);
  renderCourseList(student, courseEntries);
  renderProfileModal(student, courseEntries);
}

function logout() {
  closeVideo();
  closeProfileModal();
  state.activeStudentId = "";
  state.openCourseId = "";
  dom.query.value = "";
  dom.password.value = "";
  togglePage("login");
  setFeedback("Enter your student credentials to log in again.");
  showToast("Logged out successfully.", "info");
}

async function performLogin(query = dom.query.value) {
  const studentQuery = String(query || "").trim();
  const password = String(dom.password.value || "").trim();

  if (!studentQuery) {
    setFeedback("Enter a student ID, phone number, or email address.", "error");
    showToast("Please enter your login information.", "error");
    return;
  }

  if (!password) {
    setFeedback("Enter your password to continue.", "error");
    showToast("Password is required.", "error");
    return;
  }

  let authResult;
  try {
    authResult = await authenticateStudent(studentQuery, password);
  } catch (error) {
    console.error(error);
    setFeedback("Login validation is unavailable right now.", "error");
    showToast("Could not validate login.", "error");
    return;
  }

  if (!authResult || !authResult.ok) {
    setFeedback(authResult?.message || "Login failed.", "error");
    showToast(authResult?.message || "Login failed.", "error");
    return;
  }

  const student =
    state.data.students.find((entry) => entry.id === authResult.studentId) || getStudentByQuery(studentQuery);
  if (!student) {
    setFeedback("Student data could not be loaded after login.", "error");
    showToast("Student data missing.", "error");
    return;
  }

  state.activeStudentId = student.id;
  state.openCourseId = getStudentCourseEntries(student)[0]?.course.id || "";

  renderDashboard(student);
  togglePage("profile");
  dom.password.value = "";
  setFeedback(`${student.name} logged in successfully.`, "success");
  showToast("Logged in successfully!");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function initialize() {
  const result = await loadData();
  state.data = result.data;
  state.dataModeLabel = result.modeLabel;

  dom.dataModeBadge.textContent = result.modeLabel || "";
  dom.query.value = "";
  dom.password.placeholder = "Enter your password";
  setFeedback("");
  togglePage("login");
}

dom.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await performLogin();
});

dom.loginBtn.addEventListener("click", () => {
  togglePage("login");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

dom.userProfile.addEventListener("click", () => {
  if (state.activeStudentId) {
    openProfileModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll("[data-student-pill]").forEach((button) => {
  button.addEventListener("click", async () => {
    dom.query.value = button.dataset.studentPill;
    const student = getStudentByQuery(button.dataset.studentPill);
    if (student && student.password) {
      dom.password.value = student.password;
    }

    await performLogin(button.dataset.studentPill);
  });
});

dom.closeVideoBtn.addEventListener("click", closeVideo);
dom.videoBackdrop.addEventListener("click", closeVideo);
dom.closeProfileBtn.addEventListener("click", closeProfileModal);
dom.profileBackdrop.addEventListener("click", closeProfileModal);
dom.profileBackBtn.addEventListener("click", closeProfileModal);
dom.profileLogoutBtn.addEventListener("click", () => {
  logout();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
dom.profileResetLink.addEventListener("click", () => {
  if (state.activeStudentId) {
    showToast("Password reset option opened.", "info");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!dom.profileModal.classList.contains("hidden")) {
      closeProfileModal();
      return;
    }

    closeVideo();
  }
});

initialize().catch((error) => {
  console.error(error);
  setFeedback("Failed to load data.", "error");
  showToast("Could not load data.", "error");
});
