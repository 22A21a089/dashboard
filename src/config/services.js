/**
 * Centralized configuration for all SCET external applications.
 * Update these URLs to point to your deployed microservices/applications.
 */
export const SERVICE_CONFIG = {
  faculty_management: "https://culty.basketind.in",
  timetable_management: "https://timetable.basketind.in",
  smart_campus_erp: "https://erp.basketind.in",
  iqac_management: "https://iqac.basketind.in",
  academic_support: "https://support.basketind.in",
  question_paper: "https://qp.basketind.in",
  internships: "https://internship.basketind.in",
  counselling: "https://counselling.basketind.in",
  leave_management: "https://leaves.basketind.in",
  research: "https://research.basketind.in",
  learning_resources: "https://supportai.basketind.in",
  placements: "https://placements.basketind.in"
};

/**
 * Utility to handle external redirection with logging/analytics potential
 */
export const redirectToApp = (serviceKey) => {
  const url = SERVICE_CONFIG[serviceKey];
  if (url) {
    console.log(`Redirecting to external system: ${serviceKey} -> ${url}`);
    window.open(url, "_blank"); // Opens in new tab to keep dashboard active
  } else {
    console.warn(`No URL configured for service: ${serviceKey}`);
  }
};
