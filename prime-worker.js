// prime-worker.js

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

onmessage = function (e) {
  const max = e.data;
  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  postMessage("Done "); 
};
