const randomNumbers = [];

while (randomNumbers.length < 5) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(rand)) {
    randomNumbers.push(rand);
  }
}

const numbers = randomNumbers.join(" - ");
alert(`Ricordati questi numeri: ${numbers}`);

const timer = setTimeout(() => {
  const userNumbers = [];
  const correctNumbers = [];

  while (userNumbers.length < 5) {
    const num = Number(prompt("Inserisci i numeri che ricordi, uno alla volta:"));
    if (!userNumbers.includes(num)) {
      userNumbers.push(num);

      if (randomNumbers.includes(num)) {
        correctNumbers.push(num);
      }
    }
  }

  const numbers = correctNumbers.join(" - ");
  alert(`Hai indovinato ${correctNumbers.length} numeri: ${numbers}`);
}, 3000);
