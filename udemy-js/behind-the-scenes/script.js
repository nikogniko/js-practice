//  How JavaScript Works Behind the Scenes

// Plan:
// - Execution Contexts and the Call Stack
// - Scoping and the Scope Chain
// - Hoisting and the Temporal Dead Zone
// - The this Keyword

'use strict';

// Global Execution Context (GEC) is created when the JavaScript engine first starts executing the code. It is the default execution context, and it is created for the entire script. It contains the global object (window in browsers) and the this keyword (which points to the global object).

// The Call Stack is a data structure that keeps track of the execution contexts in the order they are created. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, the execution context is popped off the call stack.

// The Scope Chain is a mechanism that allows functions to access variables from their parent scopes. When a function is called, it creates a new execution context, and the scope chain is created by linking the current execution context to its parent execution context. This allows the function to access variables from its parent scopes.

// Component of an execution context:
// 1. Variable Environment (VE) - contains all the variables and functions defined in the current execution context
// 2. Scope Chain - contains references to the variable environments of all parent execution contexts
// 3. this Keyword - contains a reference to the object that is executing the current function

//// Execution Contexts and the Call Stack    /////
//// Scope and the Scope Chain                /////

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName); // can access variables from parent scope

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true; // var is function scoped, so it is accessible outside of this block

      const firstName = 'Steven'; // const is block scoped, so it is not accessible outside of this block

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!'; // reassigning a variable from the parent scope
    }

    console.log(millennial); // true, because var is function scoped

    //console.log(add(2, 3)); // ReferenceError: add is not defined, because function declarations are block scoped in strict mode
    // without strict mode, this would work, because function declarations are hoisted to the top of their scope, but in strict mode, they are block scoped

    console.log(output); // NEW OUTPUT!, because output was reassigned in the if block, and it is accessible here because it is in the same function scope
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
console.log(calcAge(1991));

//console.log(age); // ReferenceError: age is not defined
//printAge(); // ReferenceError: printAge is not defined

//
//
//// Hoisting and the Temporal Dead Zone (TDZ) /////
//

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code. However, only function declarations and var variables are hoisted, while let and const variables are not hoisted and will throw a ReferenceError if accessed before declaration.

console.log('----- Hoisting and the Temporal Dead Zone (TDZ) -----');

// Variables

console.log(x); // undefined, because var is hoisted to the top of the scope
var x = 5;
console.log(x);

//console.log(y); // ReferenceError: Cannot access 'y' before initialization, because let is not hoisted
let y = 10;
console.log(y);

// console.log(z); // ReferenceError: Cannot access 'z' before initialization, because const is not hoisted
const z = 15;
console.log(z);

//
// true, because var variables are added as properties to the global object (window in browsers)
console.log(x === window.x);

// false, because let and const variables are not added as properties to the global object
console.log(y === window.y);
console.log(z === window.z);

// Functions

console.log(addDecl(4, 3)); // 5, because function declarations are hoisted to the top of the scope

//console.log(addExpr(4, 3)); // ReferenceError: Cannot access 'addExpr' before initialization, because function expressions are not hoisted

//console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization, because arrow functions are not hoisted

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//
//
/// The this Keyword    /////
//

// The this keyword is a special variable that is created for every execution context. It is a reference to the object that is executing the current function. The value of this depends on how the function is called, and it can be different in different contexts.

// this is NOT static and its value is only assigned when a function is actually called.
// It points to the object that is calling the function

// in strict mode This = undefined in regular functions,
// and This = window in non-strict mode

// arrow functions do not get their own this keyword, they inherit it from the parent scope

//event listener callbacks get their this keyword set to the element that the event handler is attached to

console.log('----- The this Keyword -----');
