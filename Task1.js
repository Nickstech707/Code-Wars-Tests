function solution(S) {
  const N = S.length;
  const M = S[0].length;
  const commonLetters = [];

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (S[i][k] === S[j][k]) {
          commonLetters.push([i, j, k]);
          break;
        }
      }
    }
  }

  return commonLetters.length > 0 ? commonLetters[0] : [];
}

const S = ["zzzz", "ferz", "zdsr", "fgtd"];
const result = solution(S);
console.log(result);
