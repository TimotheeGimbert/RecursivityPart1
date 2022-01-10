const factorialIt = (n) => {
  if (n < 0) return undefined; // does not manage negativ numbers
  else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

const factorialRec = (n) => {
  if (n < 0) return undefined; // does not manage negativ numbers
  if (n === 0) return 1; // BASE CASE
  else return n * computeFactorialRec(n - 1); // RECURSIVE CASE
}