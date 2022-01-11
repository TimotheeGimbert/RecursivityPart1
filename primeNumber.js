const isPrimeNumber = (n) => { // return true if n is a prime number
  let bool = true;
  if (n === 0) bool = false;
  for (let i = n-1; i > 1; i--) {
    if (n % i === 0) bool = false;
  }
  return bool;
}

const nullModulo = (a, b) => {
  return a % b === 0 ? true : false;
}
