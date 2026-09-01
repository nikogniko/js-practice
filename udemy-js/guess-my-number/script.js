//  JavaScript in browser: DOM and Events

// Document Object Model (DOM) is a structural representation of the HTML document. It allows us to manipulate the content and structure of web pages using JavaScript.

// DOM isn't part of the JavaScript language.
// It is a separate API that is provided by the browser.
// API - Application Programming Interface

'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
