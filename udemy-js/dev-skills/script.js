//  Developers Skills & Editor Setup

//  Plan:
//  - Solving a Problem in 4 Steps
//  - Debugging with the console and breakpoints
//  - Coding Challenge #1
//  - Coding Challenge #2 With AI

'use strict'; // forbids us to do certain things and it creates visible errors in the console when we do them

console.log('----- Solving a Problem in 4 Steps -----');

// PROBLEM 1

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems

// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    debugger; // XXX this will pause the execution of the code at this point, allowing us to inspect the values of variables in the browser's debugger
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude([3, 5, 1]));
console.log(calcTempAmplitude(temperatures));

//
//
// PROBLEM 2

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  return calcTempAmplitude(temps);
};

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));

//
//
// Debugging with the console and breakpoints
//
//

// Bug is any unexpected or unintended behavior in the code.
// Debugging is the process of finding and fixing bugs.

// 1) Identify the bug
// during development, testing software, user reports during production, manual testing in browser

// 2) Find the bug
// Isolating where exactly the bug is happening in the code
// using console.log to print values to the console, or using breakpoints to pause the execution of the code and inspect values in the debugger.

// 3) Fix the bug
// Replace wrong solution with new correct solution, and test to make sure the bug is fixed and no new bugs were introduced.

// 4) Prevent future bugs
// Searching for similar bugs in the codebase, adding unit tests to catch future bugs, and improving the code to make it less error-prone.

console.log('----- Debugging with the console and breakpoints -----');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) Fix the bug
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // console.log(measurement.value);

  // displays a warning in the console
  // console.warn(measurement.value);

  // displays an error in the console
  // console.error(measurement.value);

  // B) Find the bug
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
// D) Prevent future bugs
console.log(measureKelvin());

///////////////////////////////
//
// Coding Challenge #1
//

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data 1: [17, 21, 23]
Test data 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  str += ' ...';
  console.log(str);
};

printForecast(data1);
printForecast(data2);

///////////////////////////////////////////////
// Coding Challenge #2 With AI

/*
I'm building a time tracking application for freelancers. write a function called analyzeWorkWeek that receives an array of daily work hours for a certain week, and returns an object with the following information:
1. Total hours worked
2. Average daily hours (round to one decimal place)
3. The day with the most hours worked (assume monday is day 0 in the array)
4. Number of days worked (days with > 0 hours)
5. Whether the week was full-time (>= 35 hours) or part-time

// The function should handle edge cases, such as empty arrays or invalid input (non-numeric values). If the input is invalid, the function should return an error message.
// the function should require the input array to have exactly 7 days, update the function accordingly.

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWorkWeek(dailyHours) {
  // 1. Validate that input is an array of exactly 7 days
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    return {
      error:
        'Invalid input: Expected an array containing exactly 7 daily hour entries (Monday to Sunday).',
    };
  }

  // 2. Validate that every entry is a valid, non-negative number
  const hasInvalidEntry = dailyHours.some(
    hours =>
      typeof hours !== 'number' ||
      Number.isNaN(hours) ||
      !Number.isFinite(hours) ||
      hours < 0,
  );

  if (hasInvalidEntry) {
    return {
      error: 'Invalid input: All entries must be non-negative numeric values.',
    };
  }

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageDailyHours = Number((totalHours / 7).toFixed(1));

  let maxHours = -1;
  let maxDayIndex = 0;
  let daysWorked = 0;

  dailyHours.forEach((hours, index) => {
    if (hours > maxHours) {
      maxHours = hours;
      maxDayIndex = index;
    }
    if (hours > 0) {
      daysWorked++;
    }
  });

  const isFullTime = totalHours >= 35;

  return {
    totalHours: Number(totalHours.toFixed(2)),
    averageDailyHours,
    mostWorkedDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime,
    workType: isFullTime ? 'full-time' : 'part-time',
  };
}
// Valid week
console.log(analyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));
// Returns: { totalHours: 34.5, averageDailyHours: 4.9, mostWorkedDay: 'Friday', daysWorked: 5, isFullTime: false, workType: 'part-time' }

// Empty array
console.log(analyzeWorkWeek([]));
// Returns: { error: 'Invalid input: Expected an array containing exactly 7 daily hour entries (Monday to Sunday).' }

// Wrong array length (< 7 or > 7)
console.log(analyzeWorkWeek([8, 8, 8, 8, 8]));
// Returns: { error: 'Invalid input: Expected an array containing exactly 7 daily hour entries (Monday to Sunday).' }

// Non-numeric elements (strings, null, NaN)
console.log(analyzeWorkWeek([8, 'eight', 6.5, 0, 8.5, 4, 0]));
// Returns: { error: 'Invalid input: All entries must be non-negative numeric values.' }

// Negative hours
console.log(analyzeWorkWeek([8, -4, 6.5, 0, 8.5, 4, 0]));
// Returns: { error: 'Invalid input: All entries must be non-negative numeric values.' }

// Non-array input
console.log(analyzeWorkWeek(null));
// Returns: { error: 'Invalid input: Expected an array containing exactly 7 daily hour entries (Monday to Sunday).' }
