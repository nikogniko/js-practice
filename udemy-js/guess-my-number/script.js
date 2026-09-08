//  JavaScript in browser: DOM and Events
//  Project 1

// Plan:
// - DOM Manipulation
// - Selecting and manipulating elements
// - Handling click events
// - Implementing game logic
// - Manipulating CSS styles
// - Refactoring code for better structure and readability

//
// Document Object Model (DOM) is a structural representation of the HTML document. It allows us to manipulate the content and structure of web pages using JavaScript.
//

//
// DOM isn't part of the JavaScript language.
// It is a separate API that is provided by the browser.
// API - Application Programming Interface
//

'use strict';

// Generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highscore = 0;

// Refactor code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// what we do below is called
// an "event listener" - it listens for a certain event to happen, and then executes a function when that event happens

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (score > 0) {
    // When there is no input
    if (!guess) {
      displayMessage('⛔ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');

      document.querySelector('.number').textContent = secretNumber;

      highscore = Math.max(highscore, score);
      document.querySelector('.highscore').textContent = highscore;

      // that's add inline style to the html,
      // but it's better to use CSS classes instead of inline styles
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      // When guess is wrong
      // Refactor this code to use a single condition instead of two separate ones
    } else if (guess !== secretNumber) {
      decreaseScore();
    }
  }
});

function decreaseScore() {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
  } else {
    score = 0;
    displayMessage('💥 You lost the game!');
  }
  document.querySelector('.score').textContent = score;
}

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
