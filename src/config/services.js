/**
 * Centralized configuration for all SCET external applications.
 * Update these URLs to point to your deployed microservices/applications.
 */
export const SERVICE_CONFIG = {
  faculty_management: "http://localhost:5174/faculty", // Example local port
  timetable_management: "http://localhost:5175/timetable",
  smart_campus_erp: "http://localhost:5176/erp",
  iqac_management: "http://localhost:5177/iqac",
  academic_support: "http://localhost:5178/academic",
  question_paper: "http://localhost:5179/exams",
  internships: "http://localhost:5180/internship",
  counselling: "http://localhost:5181/counselling",
  leave_management: "http://localhost:5182/leave",
  research: "http://localhost:5183/research",
  learning_resources: "http://localhost:5184/learning",
  placements: "http://localhost:5185/placements"
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
