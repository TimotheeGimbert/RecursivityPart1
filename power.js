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
  return p == 0 ? 1 : n * powerRec(n, --p); // BASE CASE + RECURSIVE CASE
}