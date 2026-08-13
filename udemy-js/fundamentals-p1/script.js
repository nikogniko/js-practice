//  Udemy Course by Jonas Schmedtmann
//  https://www.udemy.com/course/the-complete-javascript-course/

// !!! About versions !!!
// During development: Simply use the latest Google Chrome!
// During production: Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users).

//  JavaScript Fundamentals - Part 1
//  Plan:
//  - Values and Variables
//  - Data Types
//  - let, const and var
//  - Basic Operators
//  - Operator Precedence
//  - Strings and Template Literals
//  - Taking Decisions: if / else Statements
//  - Type Conversion and Coercion
//  - Truthy and Falsy Values
//  - Equality Operators: == vs. ===
//  - Logical Operators
//  - The switch Statement
//  - Statements and Expressions
//  - The Conditional (Ternary) Operator

console.log('----- Values and Variables -----');

const country = 'Ukraine';
const continent = 'Europe';
let population = 41000000;

console.log('country: ' + country);
console.log('continent: ' + continent);
console.log('population: ' + population);

console.log('----- Data Types -----');

const isIsland = false;
let language;

console.log('typeof isIsland: ' + typeof isIsland);
console.log('typeof population: ' + typeof population);
console.log('typeof country: ' + typeof country);
console.log('typeof continent: ' + typeof continent);

console.log('language: ' + language); // it returns 'undefined'
console.log('typeof language: ' + typeof language); // it returns 'undefined'

language = 'Ukrainian';

console.log('----------');

console.log('typeof null: ' + typeof null); // it returns 'object' (this is a bug in JS)
console.log('typeof undefined: ' + typeof undefined);
console.log('typeof NaN: ' + typeof NaN); // it returns 'number'

console.log('----------');

console.log('----- Basic operators -----');

// If your country split in half, and each half would contain half the population, then how many people would live in each half?

const halfPopulation = population / 2;
console.log('halfPopulation: ' + halfPopulation);

// Increase the population of your country by 1 and log the result to the console.
let newPopulation = population;
newPopulation++;
console.log('population after increment: ' + newPopulation);

// Finland has a population of 6 million. Does your country have more people than Finland ?
const finlandPopulation = 6000000;
console.log(
  'population > finlandPopulation: ' + (population > finlandPopulation),
); // true

//The average population of a country is 33 million people. Does you country have less people than the average country?
const averagePopulation = 33000000;
console.log(
  'population < averagePopulation: ' + (population < averagePopulation),
); // false

// Based on the variables you created, create a new variable description which contains
// a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population / 1000000 +
  ' million people speak ' +
  language +
  '.';
console.log('description: ' + description);
// 'Ukraine is in Europe, and its 41 million people speak Ukrainian.'

console.log('----- Challenge 1 -----');

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

console.log('----- Strings and Template Literals -----');

const firstName = 'John';
const job = 'teacher';
const birthYear = 1996;
const year = 2025;

const john =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(john);

// Template literals
const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(johnNew);

console.log('String with \n multiple \n lines');

console.log(`String with
  multiple
  lines`);

// HW - Recreate the description variable from the last assignment, this time using the template literal syntax.

const description2 = `${country} is in ${continent}, and its ${
  population / 1000000
} million people speak ${language}.`;

console.log('description2: ' + description2);
// 'Ukraine is in Europe, and its 41 million people speak Ukrainian.'

console.log('----- Taking Decisions: if / else Statements -----');

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 😎 🚗');
} else {
  console.log(`Sarah is too young. Wait another ${18 - age} years 👌`);
}

console.log('-------------');
const birthYear2 = 2012;

let century;

// if (birthYear2 <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

century = birthYear2 <= 2000 ? 20 : 21;

console.log(`birthYear2: ${birthYear2}, century: ${century}`); // 21

// HW

// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

// population = 13000000;

if (population > averagePopulation) {
  console.log(
    `${country}'s population is ${
      (population - averagePopulation) / 1000000
    } millions above average`,
  );
} else {
  console.log(
    `${country}'s population is ${
      (averagePopulation - population) / 1000000
    } millions below average`,
  );
}

console.log('----- Challenge 2 -----');

// -- code from Challenge 1 --
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

console.log('----- Type Conversion and Coercion -----');

// -- Type Conversion - manually (explicit) convert from one data type to another --

const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(Number(inputYear) + 18); // 2009

console.log('Number(Jonas): ' + Number('Jonas')); // NaN (Not a Number)
console.log('typeof NaN: ' + typeof NaN); // number

console.log(String(23), 23); // '23' 23

console.log('-------------');

// -- Type Coercion - JS automatically converts data types for us (implicit) --

console.log('I am ' + 23 + ' years old'); // 'I am 23 years old'
console.log('23' + '10' + 3); // '23103'

console.log('23' - '10' - 3); // 10 - other operators converts strings to numbers
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

console.log('-------------');

let n = '1' + 1;
console.log("n = '1' + 1 = " + n); // '11' - result of a concatenation

n = n - 1;
console.log('n - 1 = ' + n); // 10 - result of a subtraction

console.log('------ truthy and falsy values ------');
// Boollean conversion is always implicit - js does it automatically behind the scenes

// -- 5 falsy values:
//    0, '', undefined, null, NaN
//    they convert to false when we try to convert them to a boolean

// -- truthy values:
//    all numbers (except 0), all strings (except ''), objects, arrays, etc.

console.log('Boolean(0): ' + Boolean(0)); // false
console.log('Boolean(undefined): ' + Boolean(undefined)); // false
console.log('Boolean("Jonas"): ' + Boolean('Jonas')); // true
console.log('Boolean({}): ' + Boolean({})); // true
console.log('Boolean(""): ' + Boolean('')); // false

console.log('-------------');

const money = 0; // 0 - falsy value
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height; // undefined - falsy value
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

console.log('----- Equality Operators: == vs. === -----');

// strict equality operator - doesn't perform type coercion (checks also the type)
console.log('18 === 18:', 18 === 18); // true
console.log("18 === '18':", 18 === '18'); // false

// loose equality operator - performs type coercion (converts the string to a number)
console.log("18 == '18':", 18 == '18'); // true

const age2 = '18';
if (age2 === 18) console.log('You just became an adult :D (strict)');
if (age2 == 18) console.log('You just became an adult :D (loose)');

console.log('-------------');

// Promt
// const favorite = Number(prompt("What's your favorite number?")); // we need to convert the string to a number
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number');
// } else if (favorite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favorite !== 23) {
//   console.log('Why not 23?');
// }

console.log('----- Logical Operators -----');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

console.log('----- Challenge 3 -----');

let scoreDolphins = (96 + 112 + 92) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) console.log('Dolphins win the trophy');
// else if (scoreDolphins < scoreKoalas) console.log('Koalas win the trophy');
// else console.log('Both win the trophy');

// Bonus

// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// scoreDolphins = (97 + 100 + 101) / 3;
// scoreKoalas = (109 + 95 + 91) / 3;
// console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
  console.log('Dolphins win the trophy');
else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100)
  console.log('Koalas win the trophy');
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100)
  console.log('Both win the trophy');
else console.log('No one wins the trophy');

console.log('----- The switch Statement -----');
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

//HW

const key = 'chinese';
console.log(key);

switch (key) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;

  default:
    console.log('Great language too :D');
    break;
}

console.log('----- Statements and Expressions -----');

// A STATEMENT performs some action, but does not return a value
// for example, if-else statements or switch statements
// All that ends with a semicolon(;) is a statement

// An EXPRESSION means a certain value

if (23 > 10) {
  const str = '23 is greater than 10'; // - the string itself is an expression, and this whole line of code is a statement
}

const me = 'Jonas';
const myAge = 2037 - 1991;

// In a TEMPLATE LITERAL we can insert only expressions, but not statements

console.log(`I'm ${myAge} years old ${me}`);

console.log('----- The Conditional (Ternary) Operator -----');

// this operator is an expression (it always returns a value)

const myAge2 = 21;
// myAge2 >= 18
//   ? console.log('I like to drink wine')
//   : console.log('I like to drink water');

const drink = myAge2 >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}`);

console.log(`I like to drink ${myAge2 >= 18 ? 'wine' : 'water'}`);

// CHALLENGE #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`,
);

//HW
console.log(
  `${country}'s population is ${
    population > averagePopulation ? 'above' : 'below'
  } average`,
);
