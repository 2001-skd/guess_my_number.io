"use strict";

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
let scoreBoardVal = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");
// console.log(score - 1);
// const number = document.querySelector(".number");

checkButton.addEventListener("click", () => {
  // read the number when the user click the button , then only we can get the value , else empty string or 0.
  const guessedNumber = Number(document.querySelector(".guess").value);

  //   number.textContent = secretNumber;

  if (!guessedNumber) {
    // console.log("No Number");
    message.textContent = "😫 No Number!";
  }

  if (guessedNumber > 0) {
    if (secretNumber === guessedNumber) {
      //   console.log("Guessed Number is Right !");
      message.textContent = "😎 Guessed Number is Right !";
      highScore.textContent = score;
      document.querySelector("body").style.background = "#60b347";
    } else if (guessedNumber > secretNumber) {
      //   console.log("Guessed Number is Too High !");
      message.textContent = "🙄 Guessed Number is Too High !";
      score > 0 ? score-- : 0;
      score === 0 ? (message.textContent = "😫 You Lost The GAME!") : "";
      //   console.log(score);
      scoreBoardVal.textContent = score;
    } else if (guessedNumber < secretNumber) {
      message.textContent = "🙄 Guessed Number is Too Low !";
      score > 0 ? score-- : 0;
      score === 0 ? (message.textContent = "😫 You Lost The GAME!") : "";
      //   console.log(score);

      scoreBoardVal.textContent = score;
    }
  }

  //   console.log(guessedNumber);
});
console.log(secretNumber);

again.addEventListener("click", () => {
  window.location.reload();
});
