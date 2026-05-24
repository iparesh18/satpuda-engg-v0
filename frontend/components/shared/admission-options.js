export const PROGRAM_OPTIONS = ["Diploma", "B.Tech"];

export const BRANCH_OPTIONS = {
  Diploma: [
    "Computer Science Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Mining and Mine Survey",
  ],
  "B.Tech": [
    "Computer Science Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
  ],
};

export function getBranchOptions(program) {
  return BRANCH_OPTIONS[program] || [];
}

export function buildAdmissionCourse(program, branch) {
  if (!program || !branch) return "";
  return `${program} - ${branch}`;
}