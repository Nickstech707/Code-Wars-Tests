function solution(A) {
  // Sort the array in descending order
  A.sort((a, b) => b - a);

  // Iterate over the first two elements of the array (or fewer if the array has fewer than two elements)
  for (let i = 0; i < Math.min(2, A.length); i++) {
    // Calculate the sum of digits of the current element
    const sumOfDigits = String(A[i])
      .split("") // Convert the element to a string and split it into individual digits
      .reduce((acc, curr) => acc + parseInt(curr), 0); // Reduce the digits to their sum

    // Assign the calculated sum back to the corresponding element in the array
    A[i] = sumOfDigits;
  }

  // Calculate the sum of all elements in the array
  let newSum = A.reduce((sum, num) => sum + num, 0);

  // Return the sum
  return newSum;
}

const A = [2, 29, 3];

const result = solution(A);
console.log(result);
