function solution(A) {
  const doctorCounts = {};

  for (const hospitalSchedule of A) {
    for (const doctorId of new Set(hospitalSchedule)) {
      doctorCounts[doctorId] = (doctorCounts[doctorId] || 0) + 1;
    }
  }

  const doctorsWorkingAtMultipleHospitals = Object.values(doctorCounts).filter(
    (count) => count > 1
  ).length;

  return doctorsWorkingAtMultipleHospitals;
}

A = [
  [1, 1, 5, 2, 3],
  [4, 5, 6, 4, 3],
  [9, 4, 4, 1, 5],
];

A1 = [
  [4, 3],
  [5, 5],
  [6, 2],
];

A2 = [
  [1, 2, 2],
  [3, 1, 4],
];
console.log(solution(A));
console.log(solution(A1));
console.log(solution(A2));
