function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function computePrimes(onPrime, startAt = 1) {
  let currNum;
  for (currNum = startAt; currNum % 5 !== 0; currNum++) {
    if (isPrime(currNum)) onPrime(currNum);
  }
  setTimeout(() => {
    computePrimes(onPrime, currNum + 1);
  }, 0);
}

computePrimes(prime => {
  console.log(prime);
});