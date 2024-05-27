function solution(A) {
  A.sort((a, b) => b - a);

  for (let i = 0; i < Math.min(2, A.length); i++) {
    const sumOfDigits = String(A[i])
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    A[i] = sumOfDigits;
  }
  let newSum = A.reduce((sum, num) => sum + num, 0);

  return newSum;
}

const A = [2, 29, 3];

const result = solution(A);
console.log(result);
