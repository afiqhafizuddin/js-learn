// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const x = `23`;
const birthYear = 1999;
const calcAge = (birthYear) => 2039 - birthYear;
// return calcAge;
console.log(x);
console.log(calcAge(1999));

console.log(calcAge(1999));

// Practice Problem Solving

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// (1) Understanding the problem
// - What is temp amplitude? Ans: Difference between highrst and lowest temp
// - How to compute max and min temp?
// What's a senosr error? And what to do?

// (2) Breaking it inot sub-problems
// - How to ignore errors?
// - Find max value in temp array?
// - Find minimum value in temp array?
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// console.log(max);
// calcTempAmplitude([4, 5, 6]);
// calcTempAmplitude(temperatures);
// console.log(amplitude);

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2

const temperatures1 = [3, 9, 80, 98, 54, -76, "error", 87, 19, 65];

const array3 = temperatures.concat(temperatures1);
const amplitude1 = calcTempAmplitude(array3);
console.log(amplitude1);
console.log(array3);
