// ============================
// OLD CODE
// ============================
// const randomNumbers = [];

// while (randomNumbers.length < 5) {
//   const rand = Math.floor(Math.random() * 100) + 1;
//   if (!randomNumbers.includes(rand)) {
//     randomNumbers.push(rand);
//   }
// }

// const numbers = randomNumbers.join(" - ");
// alert(`Ricordati questi numeri: ${numbers}`);

// const timer = setTimeout(() => {
//   const userNumbers = [];
//   const correctNumbers = [];

//   while (userNumbers.length < 5) {
//     const num = Number(prompt("Inserisci i numeri che ricordi, uno alla volta:"));
//     if (!userNumbers.includes(num)) {
//       userNumbers.push(num);

//       if (randomNumbers.includes(num)) {
//         correctNumbers.push(num);
//       }
//     }
//   }

//   const numbers = correctNumbers.join(" - ");
//   alert(`Hai indovinato ${correctNumbers.length} numeri: ${numbers}`);
// }, 3000);

// ============================
// NEW CODE
// ============================

const maxTime = 30;
const randomNumbers = [];

// DOM Elements
const numbers = document.querySelector(".numbers-wrapper");
const timer = document.querySelector(".timer");
const userInput = document.querySelector(".user-input");

// generate random numbers
while (randomNumbers.length < 5) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(rand)) {
    randomNumbers.push(rand);
  }
}

// add numbers into the dom
randomNumbers.forEach((rand) => {
  const num = document.createElement("div");
  num.classList.add("number");
  num.innerHTML = rand;

  numbers.append(num);
});

// start timer by Immediately-invoked Function Expression (IIFE)
// https://www.geeksforgeeks.org/how-to-execute-setinterval-function-without-delay-for-the-first-time-in-javascript/
let timerCount = maxTime;
const timerId = setInterval(
  (function startTimer() {
    timer.innerHTML = timerCount--;
    if (timerCount < 0) {
      // hide number ui
      timer.style.display = "none";
      numbers.style.display = "none";
      // show user input for guessing
      userInput.style.display = "flex";

      clearInterval(timerId);
    }
    return startTimer;
  })(),
  1000
);
