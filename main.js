// main.js

const worker = new Worker("prime-worker.js");

const colorButton = document.querySelector("#color");
const slowButton = document.querySelector("#slow");
const timeButton = document.querySelector("#time");
const resultContainer = document.querySelector("#res");
const timeMessage = document.querySelector("#time-message");
const slowWithoutWorkerButton = document.querySelector("#slow-without-worker");


// Toggle background color between red and blue
colorButton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = currentColor === "red" ? "blue" : "red";
});

// Start a CPU-heavy task in the worker
slowButton.addEventListener("click", () => {
  resultContainer.innerText = "Calculating...";
  worker.postMessage(1e7); // Sends the upper limit for prime calculation
});

timeButton.addEventListener("click", () => {
  console.log("test");
  timeMessage.innerText = "Processing...";
  setTimeout(() => {
    timeMessage.innerText = "completed";
  }, 2000);
});

worker.onmessage = (event) => {
  alert("Worker finished processing");
  resultContainer.innerText = `Prime counted: ${event.data} `;
};

worker.onerror = (error) => {
  console.error("Worker error:", error.message);
  resultContainer.innerText = "Error in worker.";
};


// Check if a number is prime
function slow(){
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Handle messages from main thread
  const max = 1e7;
  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  postMessage(primes); // Send result back to main thread
  
}  
slowWithoutWorkerButton.addEventListener("click", () => {
  resultContainer.innerText = "Calculating without worker...";
  slow();
}
)
