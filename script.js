"use strict";

let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
let scoreBoardVal = document.querySelector(".score");
const highScoreBoardVal = document.querySelector(".highscore");
const again = document.querySelector(".again");
// console.log(score - 1);
const number = document.querySelector(".number");

function displayMessage(msg) {
  message.textContent = msg;
}

checkButton.addEventListener("click", () => {
  // read the number when the user click the button , then only we can get the value , else empty string or 0.
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    displayMessage("😫 No Number!");
  }

  if (guessedNumber > 0) {
    if (secretNumber === guessedNumber) {
      displayMessage("😎 Guessed Number is Right !");
      number.textContent = secretNumber;

      document.querySelector("body").style.background = "#60b347";

      if (score > highScore) {
        highScore = score;
        highScoreBoardVal.textContent = highScore;
      }
    } else if (secretNumber !== guessedNumber) {
      guessedNumber > secretNumber
        ? displayMessage("🙄 Guessed Number is Too High !")
        : displayMessage("🙄 Guessed Number is Too Low !");
      score > 0 ? score-- : 0;
      score === 0 ? displayMessage("😫 You Lost The GAME!") : "";
      scoreBoardVal.textContent = score;
    }
  }
});
console.log(secretNumber);

again.addEventListener("click", () => {
  score = 20;
  displayMessage("Start guessing...");
  number.textContent = "?";
  scoreBoardVal.textContent = 0;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").value = "";
});
