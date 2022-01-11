const squareRoot = (n) => {
  if (n === 0) return 0;
  else return powerRec(n, n) === n ? n : undefined; // nop, did not solve it yet ^^
}