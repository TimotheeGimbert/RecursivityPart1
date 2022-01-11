const isPrimeNumber = (n) => { // return true if n is a prime number
  let bool = true;
  if (n === 0) bool = false;
  for (let i = n-1; i > 1; i--) {
    if (n % i === 0) bool = false;
  }
  return bool;
}

function isPrimeRec(num, div = 3){
  if(num === 2) return true;
  if(num < 2 || num % 2 === 0)  return false;
  if(div * div > num) return true;
  if(num % div === 0) return false;
  return isPrimeRec(num, div + 2);
}
