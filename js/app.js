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

// ============================
// FUNCTIONS
// ============================

function addNumberToDOM(num, parent, color) {
  const element = document.createElement("div");
  element.classList.add("number");
  element.innerHTML = num;

  if (color) {
    element.style.backgroundColor = color;
  }

  parent.append(element);
}

function removeNumbersFromDOM(parent) {
  document.querySelectorAll(".number").forEach((e) => parent.removeChild(e));
}

// ============================
// MAIN
// ============================

const maxTime = 30;
const randomNumbers = [];
const userNumbers = [];

// DOM Elements
const instructions = document.querySelector(".instructions");
const timer = document.querySelector(".timer");
const numbers = document.querySelector(".numbers-wrapper");
const userInput = document.querySelector(".user-input");
const inputNumber = document.querySelector(".user-input input");
const sendBtn = document.querySelector(".user-input button");
const restartBtn = document.querySelector(".btn-restart");

// Set instructions
instructions.innerHTML = "Prova a ricordare questi numeri...";

// generate random numbers
while (randomNumbers.length < 5) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(rand)) {
    randomNumbers.push(rand);
    addNumberToDOM(rand, numbers);
  }
}

// start timer by Immediately-invoked Function Expression (IIFE)
// https://www.geeksforgeeks.org/how-to-execute-setinterval-function-without-delay-for-the-first-time-in-javascript/
let timerCount = maxTime;

const timerId = setInterval(
  (function startTimer() {
    timer.innerHTML = timerCount--;

    if (timerCount < 0) {
      instructions.innerHTML = "Digita i numeri che ricordi!";
      // remove timer
      timer.remove();
      // remove number ui to prevent cheating and hide the block
      removeNumbersFromDOM(numbers);
      numbers.style.display = "none";
      // show user input for guessing
      userInput.style.display = "flex";

      clearInterval(timerId);
    }

    return startTimer;
  })(),
  1000
);

sendBtn.addEventListener("click", function () {
  const num = Number(inputNumber.value);
  inputNumber.value = "";

  if (userNumbers.length >= 4) {
    instructions.innerHTML = "Vuoi riprovare?";
    userInput.style.display = "none";
    restartBtn.style.display = "block";
  }

  if (userNumbers.length < 5) {
    if (!userNumbers.includes(num)) {
      userNumbers.push(num);
      numbers.style.display = "flex";

      if (randomNumbers.includes(num)) {
        addNumberToDOM(num, numbers, "rgba(0, 255, 0, 0.5)");
      } else {
        addNumberToDOM(num, numbers, "rgba(255, 0, 0, 0.5)");
      }
    }
  }
});

restartBtn.addEventListener("click", () => location.reload());
