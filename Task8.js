function solution(A, B) {
  // Convert the start time to minutes since midnight
  let start =
    parseInt(A.split(":")[0]) * 4 + Math.floor(parseInt(A.split(":")[1]) / 15);

  // Convert the end time to minutes since midnight
  let end =
    parseInt(B.split(":")[0]) * 4 + Math.floor(parseInt(B.split(":")[1]) / 15);

  // If the end time is earlier than the start time, it means John played overnight
  if (end < start) {
    end += 96; // Add 96 minutes to the end time to account for playing overnight
  }

  // Calculate the difference between the start and end times in minutes
  return end - start;
}

console.log(solution("12:03", "12:03"));
console.log(solution("20:00", "06:00"));
console.log(solution("00:00", "23:59"));
