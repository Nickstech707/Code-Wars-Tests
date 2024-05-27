function solution(A, D) {
  // Constants
  const monthlyFee = 5;
  const numMonths = 12;
  const paymentsThreshold = 100;

  // Initialize variables
  let totalIncome = 0;
  let totalExpenditure = 0;
  const paymentsPerMonth = new Array(numMonths).fill(0);

  // Iterate over the arrays A and D
  for (let i = 0; i < A.length; i++) {
    const amount = A[i];
    const date = new Date(D[i]);
    const month = date.getMonth();

    // Update total income or total expenditure based on the amount
    if (amount >= 0) {
      totalIncome += amount;
    } else {
      totalExpenditure -= amount;
      paymentsPerMonth[month]++;
    }
  }

  // Calculate the total monthly fee
  let totalFee = monthlyFee * numMonths;

  // Adjust the total fee based on the number of payments and expenditure
  for (let i = 0; i < numMonths; i++) {
    if (paymentsPerMonth[i] >= 3 && totalExpenditure - paymentsThreshold >= 0) {
      totalFee -= monthlyFee;
      totalExpenditure -= paymentsThreshold;
    }
  }

  // Calculate the final balance
  const finalBalance = totalIncome - totalExpenditure - totalFee;

  // Return the final balance
  return finalBalance;
}

console.log(
  solution(
    [100, 100, 100, -10],
    ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]
  )
);
console.log(
  solution(
    [180, -50, -25, -25],
    ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"]
  )
);
console.log(
  solution(
    [1, -1, 0, -105, 1],
    ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"]
  )
);
console.log(
  solution(
    [100, 100, -10, -20, -30],
    ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"]
  )
);
console.log(
  solution(
    [-60, 60, -40, -20],
    ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"]
  )
);
