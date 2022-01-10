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

const powerIt = (n, p) => {
  if (n === 0) return 0; // zero to the power of any number is equal to 0
  if (p === 0) return 1; // any number to the power of zero is equal to 1
  let result = n;
  exp = Math.abs(p);
  while (exp > 1) {
    result *= n;
    exp --;
  }
  if (p > 0) return result;
  else if (p < 0) return 1 / result;
  else return undefined; // error case
}

const powerRec = (n, p) => {
  if (p === 1) return n; // BASE CASE
  else if (p >= 1) return n + computePowerRec(n, p - 1); // RECURSIVE CASE
  else if (p === 0) return 1;
  else return 0;
}