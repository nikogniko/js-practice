//  JavaScript in browser: DOM and Events
//  Project 3. Pig Game

// Plan:
// - Rolling dice functionality
// - Holding current score functionality
// - Switching players
// - Resetting the game conditions

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentPlayer, currentScore, playing;

/////////  Functions  /////////

// Starting conditions
function resetStartConditions() {
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  document.querySelectorAll(`.player`).forEach(player => {
    player.classList.remove('player--winner');
    player.classList.remove('player--active');
  });
  player0El.classList.add('player--active');

  diceEl.classList.add('hidden');
}

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//////////

// Set starting conditions
resetStartConditions();

// Event handlers
btnNew.addEventListener('click', resetStartConditions);

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    const diceHref = `sprite.svg#dice-${dice}`;
    diceEl.querySelector('use').href.baseVal = diceHref;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // 2. Check if player's score is >= 100
    if (scores[currentPlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
