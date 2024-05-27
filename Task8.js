function solution(A, B) {
  let start =
    parseInt(A.split(":")[0]) * 4 + Math.floor(parseInt(A.split(":")[1]) / 15);
  let end =
    parseInt(B.split(":")[0]) * 4 + Math.floor(parseInt(B.split(":")[1]) / 15);

  if (end < start) {
    end += 96;
  }

  return end - start;
}

console.log(solution("12:03", "12:03"));
