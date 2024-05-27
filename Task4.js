function solution(A) {
  // Initialize an object to keep track of the count of doctors at each hospital
  const doctorCounts = {};

  // Iterate over each hospital schedule in the input array
  for (const hospitalSchedule of A) {
    // Iterate over each doctor ID in the hospital schedule
    for (const doctorId of new Set(hospitalSchedule)) {
      // Increment the count for the current doctor ID in the doctorCounts object
      doctorCounts[doctorId] = (doctorCounts[doctorId] || 0) + 1;
    }
  }

  // Filter the values in the doctorCounts object to get the count of doctors working at multiple hospitals
  const doctorsWorkingAtMultipleHospitals = Object.values(doctorCounts).filter(
    (count) => count > 1
  ).length;

  // Return the number of doctors working at multiple hospitals
  return doctorsWorkingAtMultipleHospitals;
}

// Example arrays A, A1, and A2
const A = [
  [1, 1, 5, 2, 3],
  [4, 5, 6, 4, 3],
  [9, 4, 4, 1, 5],
];

const A1 = [
  [4, 3],
  [5, 5],
  [6, 2],
];

const A2 = [
  [1, 2, 2],
  [3, 1, 4],
];

console.log(solution(A));
console.log(solution(A1));
console.log(solution(A2));
