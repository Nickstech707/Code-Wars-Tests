function solution(S) {
  const N = S.length; // Number of rows
  const M = S[0].length; // Number of columns
  const commonLetters = []; // Array to store the indices of the first common letters

  // Iterate over each pair of rows
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      // Iterate over each column
      for (let k = 0; k < M; k++) {
        // Check if the characters at the same position in the two rows are the same
        if (S[i][k] === S[j][k]) {
          // If they are the same, add the indices of the first common letter to the array
          commonLetters.push([i, j, k]);
          break;
        }
      }
    }
  }

  // Return the indices of the first common letter in each row, or an empty array if there are no common letters
  return commonLetters.length > 0 ? commonLetters[0] : [];
}

const S = ["zzzz", "ferz", "zdsr", "fgtd"];
const result = solution(S);
console.log(result);
