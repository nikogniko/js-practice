//  JavaScript Fundamentals - Part 2

// principle DRY - Don't Repeat Yourself
// This means that we should not repeat ourselves in code, and instead use functions to encapsulate reusable logic

//  Plan:
//  - Activating Strict Mode
//  - Functions
//  - Function Declarations vs. Expressions
//  - Arrow Functions
//  - Functions Calling Other Functions
//  - Reviewing Functions
//  - Introduction to Arrays
//  - Basic Array Operations (Methods)
//  - Introduction to Objects
//  - Dot vs. Bracket Notation
//  - Object Methods
//  - Iteration: The for Loop
//  - Looping Arrays, Breaking and Continuing
//  - Looping Backwards and Loops in Loops
//  - The while Loop

//  - Activating Strict Mode
'use strict'; // forbids us to do certain things and it creates visible errors in the console when we do them

console.log('----- Activating Strict Mode -----');
let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true; // ReferenceError: hasDriverLicense is not defined

if (hasDriversLicense) {
  console.log('I can drive!');
} else {
  console.log('I cannot drive!');
}

//const private = 534; // reserved word in strict mode
// console.log('----------');

//
console.log('----- Functions -----');
// function is a simple piece of code that performs a specific task and can be reused

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // parameters - variables that act as placeholders for the values that will be passed to the function

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 1));

//
console.log('----- Function Declarations & Expressions -----');

console.log('age 1: ', calcAge1(1991));

// Function Declaration
// main difference - we can call the function before it is declared

function calcAge1(birthYear) {
  return 2026 - birthYear;
}

// Function Expression
// function is a value, so we can store it in a variable
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

console.log('age 2: ', calcAge2(1991));

//
console.log('----- Arrow Functions -----');
// Arrow function is a special form of function expression
// it didn't have its own THIS keyword!

const calcAge3 = birthYear => 2026 - birthYear;
console.log('age 3: ', calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirementAge = 65;
  return `${firstName} has ${retirementAge - age} years left until retirement.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//
console.log('----- Function Calling Other Functions -----');

///  - Functions Calling Other Functions    ///

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//  - Reviewing Functions
console.log('----- Reviewing Functions -----');

const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Jonas'));

// CHALLENGE 1
console.log('----- CHALLENGE 1 -----');

/* Write your code below. Good luck! 🙂 */
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;
const isFirstDoubled = (score1, score2) => score1 >= score2 * 2;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  let winnerName, winnerScore, loserScore;

  if (isFirstDoubled(avgDolphins, avgKoalas)) {
    winnerName = 'Dolphins';
    winnerScore = avgDolphins;
    loserScore = avgKoalas;
  } else if (isFirstDoubled(avgKoalas, avgDolphins)) {
    winnerName = 'Koalas';
    winnerScore = avgKoalas;
    loserScore = avgDolphins;
  } else {
    return 'No team wins...';
  }

  return `${winnerName} win (${winnerScore} vs. ${loserScore})`;
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

//  - Introduction to Arrays
console.log('----- Introduction to Arrays -----');

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

//last element of an array
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // we can change the value of an array element
console.log(friends);

//friends = ['Bob', 'Alice']; // we cannot reassign the entire array if it is declared with const

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

console.log(jonas.length);

//exercise
const calcAge4 = function (birthYear) {
  return 2026 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];
console.log(years2);

console.log(calcAge4(years2)); // NaN

const ages = [
  calcAge4(years2[0]),
  calcAge4(years2[1]),
  calcAge4(years2[years2.length - 1]),
];
console.log(ages);

//
//  - Basic Array Operations (Methods)

console.log('----- Basic Array Operations (Methods) -----');

// adds an element to the end of the array
// returns the new length of the array
const newLenght = friends.push('Peter');
console.log(friends);
console.log(newLenght);

// adds an element to the beginning of the array
friends.unshift('John');
console.log(friends);

//removes the last element of the array

friends.pop();
console.log(friends.pop()); // returns the removed element
console.log(friends);

//removes the first element of the array
friends.shift();
console.log(friends);

// returns the index of the element, if not found returns -1
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// INCLUDES(x) returns true if the element is in the array, false otherwise
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// forEach methood does not change the original array, it just executes a function for each element in the array
years2.forEach(element => (element = calcAge4(element)));
console.log(years2);

// CHALLENGE 2
console.log('----- CHALLENGE 2 -----');

//my solution
// function calcTip(value) {
//   const tip = value >= 50 && value <= 300 ? 15 : 20;
//   return value / 100 - tip;
// }

//example solution
const calcTip = value =>
  value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;

const bills = [125, 555, 44];

let tips = [];
bills.forEach(value => tips.push(calcTip(value)));
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

//  - Introduction to Objects
// Objects are a collection of key-value pairs, where the keys are strings and the values can be any data type

console.log('----- Introduction to Objects -----');

const jonasObj = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonasObj);

//  - Dot vs. Bracket

console.log('----- Dot vs. Bracket -----');
// Dot notation is used to access properties of an object using the property name directly,
// while bracket notation allows us to access properties using a string or variable.

// Bracket notation is useful when the property name is dynamic or not a valid identifier.

console.log(jonasObj.lastName);
console.log(jonasObj['lastName']);

const nameKey = 'Name';
console.log(jonasObj['first' + nameKey]);
console.log(jonasObj['last' + nameKey]);

// Example of using bracket notation with a variable to access a property

/*
const interestedIn = prompt(
  'what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends',
);
*/

// if the user enters a property that does not exist, it will return UNDEFINED (it is falsy value)

/*
if (jonasObj[interestedIn]) {
  console.log(jonasObj[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends',
  );
}
*/

// Add new properties

jonasObj.location = 'Portugal';
jonasObj['twitter'] = '@jonasschmedtman';
console.log(jonasObj);

// Challange
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[0]}`,
);

//  - Object Methods
console.log('----- Object Methods -----');

jonasObj.hasDriversLicense = true;
jonasObj.birthYear = 1991;

// every function that is attached to an object is called a METHOD

jonasObj.calcAge = function () {
  console.log(this); // this keyword points to the object that is calling the method

  //return 2037 - this.birthYear;

  this.age = 2037 - this.birthYear; // we can add new properties to the object using the this keyword
  return this.age;
};

// Metod is also a property of an object, so we can use both of notations to access it

console.log(jonasObj.calcAge());
//console.log(jonasObj['calcAge']());

console.log(jonasObj.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

jonasObj.getSummary = function () {
  return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
};

console.log(jonasObj.getSummary());

//
// CHALLANGE #3
console.log('----- CHALLENGE 3 -----');

/* Write your code below. Good luck! 🙂 */

const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return this.bmi;
  },
};

const john = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})!`,
  );
} else {
  console.log(
    `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})!`,
  );
}

//
//
//     LOOPS
//
//
//  - Iteration: The for Loop
console.log('----- Iteration: The for Loop -----');

// for loop keeps running while the condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Repition ${rep}`);
}

//  - Looping Arrays, Breaking and Continuing
console.log('----- Looping Arrays, Breaking and Continuing -----');

const jonasArray = [
  firstName,
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Steven', 'Peter'],
  true,
];

let types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonasArray

  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array

  types.push(typeof jonasArray[i]);
  //types[i] = typeof jonasArray[i];
}

console.log(types);

const years3 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years3.length; i++) {
  ages2.push(2026 - years3[i]);
}
console.log(ages2);

// continue and break

// continue - skips the current iteration and continues with the next one

console.log('---- ONLY STRINGS ----');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// break - exits the loop entirely

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

//  - Looping Backwards and Loops in Loops
console.log('----- Looping Backwards and Loops in Loops -----');

// Looping Backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// Loop in Loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//  - The while Loop

// The while loop keeps running while the condition is TRUE

// it is used when we don't know how many times we need to loop, and we want to loop until a certain condition is met

console.log('----- The while Loop -----');

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Repition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // generates a random number between 1 and 6

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

//
//
// CHALLANGE 4
console.log('----- CHALLENGE 4 -----');

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips2 = [],
  totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2.push(calcTip2(bills2[i]));
  totals2.push(bills2[i] + tips2[i]);
}

console.log(bills2);
console.log(tips2);
console.log(totals2);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2(totals2));

//
// Generate lectures nums //

function printNumbers(numFrom, numTo) {
  let str = '';
  for (let i = numFrom; i <= numTo; i++) {
    str += i + ', ';
  }
  return str;
}
console.log('------------');
console.log(printNumbers(53, 90));
