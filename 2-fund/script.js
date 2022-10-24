// use srict mode to help us find bugs more easily
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive cars");

// const interface = 0;
// const private = 0; reserved word

// Function
function logger() {
  console.log(`My name is Afiq Hafizuddin Bin Zainal`);
}

// Calling, running and invoking function
logger();
logger();
logger();
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(10, 9);
console.log(appleOrangeJuice);

// FUNCTION DECLARATION v. FUNCTION EXPRESSION

// Function Declaration

const age1 = calcAge1(1998);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1991), age1); // shorthand

// Functions Expressions
// const age3 = calcAge2(1993);
// Function expressions can't being called before being defined
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1995);
console.log(calcAge1(1999), age2);

// ARROW FUNCTION
const calcAge3 = (birthYear) => 2038 - birthYear;
const age4 = calcAge3(1996);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 55 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, `Afiq Hafizuddin`));

// FUNCTION CALLING OTHER FUNCTION

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor1 = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

  return juice;
};

console.log(fruitProcessor1(2, 3));

// // DATA STRUCTURE

// // 1. Array

// const friends = ["Michel", "Steven", "Peter", "Jordan", "Virgil"];
// console.log(friends);

// const years = new Array(1997, 1998, 1999, 2000, 2001);
// console.log(friends[0], years[3]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Derek"; // only primitive values are immutable
// console.log(friends);

// const Afiq = ["Afiq", "Hafizuddin", 22, "01 April 1999", "990401 - 01 - 8005"];
// console.log(Afiq);

// // exercise
