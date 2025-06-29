// main.js

// Create the worker
const worker = new Worker("prime-worker.js");
const color = document.querySelector("#color");
const slow = document.querySelector("#slow");
const time = document.querySelector("#time");
const timeMessage = document.querySelector("#time-message");

color.addEventListener("click", () => {
  const backGroundColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor =
    backGroundColor === "red" ? "blue" : "red";
});
slow.addEventListener("click", () => {

 worker.postMessage(1000000); // Calculate primes up to 100,000

// Listen for results from the worker
worker.onmessage = function (e) {
  console.log("Primes:", e.data); // List of primes
};

// Handle any errors
worker.onerror = function (error) {
  console.error("Worker error:", error.message);
};
});
time.addEventListener("click", () => {
    console.log("test" )
  timeMessage.innerText = "test "
  setTimeout(() => {
  timeMessage.innerText = "completed"
  }, 2000);
})