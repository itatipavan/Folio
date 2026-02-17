// Calculate experience in half-year milestones from March 2024
// Experience calculator using year.month logic
export const calculateExperience = () => {
  const startDate = new Date("2024-03-01");
  const currentDate = new Date();

  const monthsDiff =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12; // 0–11

  // If 10 or 11 months → round to next year
  if (months >= 10) {
    return `${years + 1}`;
  }

  // If 0–2 months → X+
  if (months <= 2) {
    return `${years}+`;
  }

  // If 3–6 months → X.6+
  if (months <= 6) {
    return `${years}.6+`;
  }

  // If 7–9 months → X.5+
  return `${years}.5+`;
};
