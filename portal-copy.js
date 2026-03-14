(function () {
  const copy = Object.freeze({
    studentIdentifierComboLabel: "Registration Number / Student ID / Phone Number / Email Address",
    studentIdentifierComboPlaceholder: "Enter registration number / student ID / phone number / email address",
    studentIdentifierSentenceLabel: "registration number, student ID, phone number, or email address",
    studentIdLabel: "Student ID",
    registrationNumberLabel: "Registration Number",
    phoneNumberLabel: "Phone Number",
    phoneShortLabel: "Phone",
    emailAddressLabel: "Email Address",
    portalPasswordLabel: "Portal Password",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
  });

  function getPortalCopy(key, fallback) {
    if (Object.prototype.hasOwnProperty.call(copy, key)) {
      return copy[key];
    }

    return fallback || "";
  }

  function applyPortalCopyAttributes() {
    document.querySelectorAll("[data-copy-text]").forEach((element) => {
      const key = element.getAttribute("data-copy-text");
      element.textContent = getPortalCopy(key, element.textContent);
    });

    document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-copy-placeholder");
      element.setAttribute("placeholder", getPortalCopy(key, element.getAttribute("placeholder") || ""));
    });
  }

  window.AIN_PATHSHALA_COPY = copy;
  window.getAinPortalCopy = getPortalCopy;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPortalCopyAttributes);
  } else {
    applyPortalCopyAttributes();
  }
})();
