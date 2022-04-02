"use strict";
// Selecting elements
const player0El = document.querySelector(".player--0"); // class: player--0 and player--1
const player1El = document.querySelector(".player--1");

// selecting by IDs
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// selecting by class
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting element
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// current score condition
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; // change later
  } else {
    // switch to other player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
