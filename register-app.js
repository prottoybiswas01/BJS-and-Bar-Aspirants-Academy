const REGISTER_APPS_SCRIPT_DEPLOYMENT_ID =
  "AKfycbwTggMJSfIRDC1TGURJwAca38O0ZWErf2sqAW_236WpxaFuge36t30FZXIrmd9d3JnP";

const REGISTER_APP_CONFIG = Object.freeze({
  remoteEndpoint: `https://script.google.com/macros/s/${REGISTER_APPS_SCRIPT_DEPLOYMENT_ID}/exec`,
  courseCacheTtlMs: 5 * 60 * 1000,
  requestTimeoutMs: 15000,
});

const REGISTER_LOCALIZED_DIGIT_RANGES = Object.freeze([
  Object.freeze({ start: 0x09e6, end: 0x09ef }),
  Object.freeze({ start: 0x0660, end: 0x0669 }),
  Object.freeze({ start: 0x06f0, end: 0x06f9 }),
]);

const REGISTER_STORAGE_KEYS = Object.freeze({
  courseCatalog: "ain-pathshala.register.courseCatalog",
});

const registerState = {
  courses: [],
  courseMap: new Map(),
};

const registerDom = {
  registrationForm: document.getElementById("registrationForm"),
  registerName: document.getElementById("registerName"),
  registerPhone: document.getElementById("registerPhone"),
  registerEmail: document.getElementById("registerEmail"),
  registerBatch: document.getElementById("registerBatch"),
  registerSession: document.getElementById("registerSession"),
  registerPassword: document.getElementById("registerPassword"),
  refreshCoursesBtn: document.getElementById("refreshCoursesBtn"),
  registerCourseList: document.getElementById("registerCourseList"),
  registrationFeedback: document.getElementById("registrationFeedback"),
  registrationResult: document.getElementById("registrationResult"),
};

function getRegisterCopyValue(key, fallback) {
  if (typeof window !== "undefined" && typeof window.getAinPortalCopy === "function") {
    return window.getAinPortalCopy(key, fallback);
  }

  return fallback || "";
}

function normalizeRegisterDigits(value) {
  return Array.from(String(value || ""))
    .map((character) => {
      const codePoint = character.charCodeAt(0);
      for (const range of REGISTER_LOCALIZED_DIGIT_RANGES) {
        if (codePoint >= range.start && codePoint <= range.end) {
          return String(codePoint - range.start);
        }
      }

      return character;
    })
    .join("");
}

function normalizeRegisterPhone(value) {
  return normalizeRegisterDigits(value).replace(/[^\d+]/g, "");
}

function normalizeRegisterPassword(value) {
  return normalizeRegisterDigits(value).trim();
}

function escapeRegisterHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseRegisterList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }

  return String(value || "")
    .split(/[\n,|]/)
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function buildRegisterPipeList(values) {
  return parseRegisterList(values).join("|");
}

function getRegisterStore() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function readCachedRegisterCourses() {
  const store = getRegisterStore();
  if (!store) {
    return null;
  }

  const raw = String(store.getItem(REGISTER_STORAGE_KEYS.courseCatalog) || "").trim();
  if (!raw) {
    return null;
  }

  try {
    const payload = JSON.parse(raw);
    const cachedAt = Number(payload.cachedAt || 0);
    const courses = Array.isArray(payload.courses) ? payload.courses : [];
    if (!cachedAt || Date.now() - cachedAt > REGISTER_APP_CONFIG.courseCacheTtlMs || !courses.length) {
      return null;
    }

    return courses;
  } catch (error) {
    return null;
  }
}

function cacheRegisterCourses(courses) {
  const store = getRegisterStore();
  if (!store) {
    return;
  }

  try {
    store.setItem(
      REGISTER_STORAGE_KEYS.courseCatalog,
      JSON.stringify({
        cachedAt: Date.now(),
        courses: courses,
      })
    );
  } catch (error) {
    // Ignore storage write failures.
  }
}

function setRegisterFeedback(message, tone = "neutral") {
  registerDom.registrationFeedback.textContent = message || "";

  const palette = {
    neutral: "#64748b",
    success: "#047857",
    error: "#b91c1c",
    info: "#1d4ed8",
  };

  registerDom.registrationFeedback.style.color = palette[tone] || palette.neutral;
}

function getRegisterCourseMeta(course) {
  const parts = [
    course.batch ? `Batch: ${course.batch}` : "",
    course.session ? `Session: ${course.session}` : "",
  ].filter(Boolean);

  return parts.join(" | ");
}

function collectRegisterCourseValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function syncRegisterBatchSession() {
  const selectedCourses = getSelectedRegisterCourseIds()
    .map((courseId) => registerState.courseMap.get(courseId))
    .filter(Boolean);

  const batches = collectRegisterCourseValues(selectedCourses.map((course) => course.batch));
  const sessions = collectRegisterCourseValues(selectedCourses.map((course) => course.session));

  registerDom.registerBatch.value = batches.join(", ");
  registerDom.registerSession.value = sessions.join(", ");
}

function renderRegisterCourses() {
  if (!registerState.courses.length) {
    registerDom.registerCourseList.innerHTML =
      '<div class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500 sm:col-span-2">No live course is available right now.</div>';
    syncRegisterBatchSession();
    return;
  }

  registerDom.registerCourseList.innerHTML = registerState.courses
    .map(
      (course) => {
        const courseMeta = getRegisterCourseMeta(course);

        return `
        <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-white">
          <input
            type="checkbox"
            value="${escapeRegisterHtml(course.id)}"
            data-register-course="true"
            class="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
          />
          <span class="min-w-0">
            <span class="block truncate font-bold text-slate-900">${escapeRegisterHtml(course.title)}</span>
            <span class="mt-1 block text-xs text-slate-500">${escapeRegisterHtml(course.category || "Course")}</span>
            ${
              courseMeta
                ? `<span class="mt-2 block text-xs text-slate-500">${escapeRegisterHtml(courseMeta)}</span>`
                : ""
            }
            <span class="mt-2 block text-xs text-slate-400">${escapeRegisterHtml(course.schedule || "Schedule pending")}</span>
          </span>
        </label>
      `;
      }
    )
    .join("");
  syncRegisterBatchSession();
}

function applyRegisterCourses(courses) {
  registerState.courses = courses;
  registerState.courseMap = new Map(registerState.courses.map((course) => [course.id, course]));
  renderRegisterCourses();
}

async function loadRegisterCourses(options = {}) {
  const forceRefresh = !!options.forceRefresh;

  if (!forceRefresh) {
    const cachedCourses = readCachedRegisterCourses();
    if (cachedCourses) {
      applyRegisterCourses(cachedCourses);
      setRegisterFeedback("Live course list loaded.", "success");
      return;
    }
  }

  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutHandle = controller
    ? setTimeout(() => controller.abort(), REGISTER_APP_CONFIG.requestTimeoutMs)
    : null;

  try {
    setRegisterFeedback("Loading live courses...", "info");
    const requestUrl = new URL(REGISTER_APP_CONFIG.remoteEndpoint);
    requestUrl.searchParams.set("action", "courses");

    const response = await fetch(requestUrl.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller ? controller.signal : undefined,
    });

    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (!response.ok) {
      throw new Error("Unable to load live courses.");
    }

    const payload = await response.json();
    registerState.courses = (payload.courses || [])
      .map((course) => ({
        id: String(course.id || course.courseId || "").trim(),
        title: String(course.title || "").trim(),
        category: String(course.category || "").trim(),
        batch: String(course.batch || course.batchName || "").trim(),
        session: String(course.session || course.sessionName || "").trim(),
        schedule: String(course.schedule || "").trim(),
      }))
      .filter((course) => course.id && course.title)
      .sort((left, right) => left.title.localeCompare(right.title));
    cacheRegisterCourses(registerState.courses);
    applyRegisterCourses(registerState.courses);
    setRegisterFeedback(
      registerState.courses.length ? "Live course list loaded." : "No live course is available right now.",
      registerState.courses.length ? "success" : "neutral"
    );
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    if (error && error.name === "AbortError") {
      error = new Error("Course list took too long to load. Please try again.");
    }
    if (!registerState.courses.length) {
      applyRegisterCourses([]);
    }
    setRegisterFeedback(error.message || "Unable to load live courses.", "error");
  }
}

function getSelectedRegisterCourseIds() {
  return [...registerDom.registerCourseList.querySelectorAll("[data-register-course]:checked")]
    .map((input) => String(input.value || "").trim())
    .filter(Boolean);
}

function handleRegisterCourseSelection(event) {
  if (!event.target.matches("[data-register-course]")) {
    return;
  }

  syncRegisterBatchSession();
}

async function handleRegistrationSubmit(event) {
  event.preventDefault();

  const payload = {
    name: registerDom.registerName.value.trim(),
    phone: normalizeRegisterPhone(registerDom.registerPhone.value),
    email: registerDom.registerEmail.value.trim(),
    batch: registerDom.registerBatch.value.trim(),
    session: registerDom.registerSession.value.trim(),
    password: normalizeRegisterPassword(registerDom.registerPassword.value),
    requestedCourseIds: buildRegisterPipeList(getSelectedRegisterCourseIds()),
  };

  if (!payload.name || !payload.phone || !payload.password) {
    setRegisterFeedback(
      `Name, ${getRegisterCopyValue("phoneNumberLabel", "Phone Number").toLowerCase()}, and ${getRegisterCopyValue(
        "portalPasswordLabel",
        "Portal Password"
      ).toLowerCase()} are required.`,
      "error"
    );
    return;
  }

  try {
    setRegisterFeedback("Submitting registration...", "info");

    const response = await fetch(REGISTER_APP_CONFIG.remoteEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "registerstudent",
        ...payload,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to submit the registration.");
    }

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.message || "Registration failed.");
    }

    setRegisterFeedback(result.message || "Registration submitted.", "success");
    registerDom.registrationResult.innerHTML = `
      <div class="space-y-3 text-sm text-slate-700">
        <p class="font-bold text-slate-950">Registration submitted successfully.</p>
        <p>${escapeRegisterHtml(getRegisterCopyValue("studentIdLabel", "Student ID"))}: <span class="font-extrabold text-blue-700">${escapeRegisterHtml(result.studentId || "-")}</span></p>
        <p>${escapeRegisterHtml(getRegisterCopyValue("registrationNumberLabel", "Registration Number"))}: <span class="font-extrabold text-emerald-700">${escapeRegisterHtml(
          result.registrationId || "-"
        )}</span></p>
        <p class="text-slate-500">${
          result.loginReady
            ? result.previewOnly
              ? "Preview access is active now. Use the same password with the student ID or registration number to log in. Videos stay locked until admin approval."
              : "Login is active now. Use the same password with the student ID or registration number to log in."
            : "Your request has been sent to the admin approval queue. Videos will stay locked until an admin approves your account."
        }</p>
      </div>
    `;

    registerDom.registrationForm.reset();
    renderRegisterCourses();
  } catch (error) {
    setRegisterFeedback(error.message || "Unable to submit the registration.", "error");
  }
}

registerDom.registrationForm.addEventListener("submit", handleRegistrationSubmit);
registerDom.refreshCoursesBtn.addEventListener("click", () => loadRegisterCourses({ forceRefresh: true }));
registerDom.registerCourseList.addEventListener("change", handleRegisterCourseSelection);

loadRegisterCourses();
