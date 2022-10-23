let js = "amazing";
console.log(40 + 80 + 9 - 10);

console.log("Afiq");
console.log(58);

// let firstName = "Afiq"; // declaring a variable

// console.log(firstName);

let myFirstName = "Afiq Hafizuddin";
let myFirstJob = "Programmer";

console.log(myFirstJob);
console.log(myFirstName);

let True = "Truest Form of Love";
console.log(True);

// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

let age = 30; //use it only when you're sure there is change in variables
age = 32;

const birthYear = 1999; //by default use it for variables
// birthYear = 2001;
// const job;

console.log(birthYear);

// Operators - transform values or combine values
// Math, logical, assignment
const now = 2022;
const ageAfiq = now - 1999;
const ageSara = now - 1987;
console.log(ageAfiq, ageSara);

console.log(ageAfiq * 2, ageAfiq / 10, 2 ** 8);
// ** for to the power of

const firstName = "Afiq";
const lastName = "Hafizuddin";
console.log(firstName + " " + lastName);
console.log(firstName, " ", lastName);

// assignment operator
let x = 10 + 5;
x += 10;
console.log(x);
x += 4;
console.log(x);
x *= 4;
console.log(x);
x--;
console.log(x);

// comparison operator

console.log(ageAfiq > ageSara);
console.log(ageAfiq >= 19);
console.log(ageSara <= -98);
const isAgeGreater = ageAfiq >= 18;

console.log(now - 1991 > now - 1998);

// Precedence of operator
console.log(now - 1991 > now - 1998);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageAfiq + ageSara) / 2;
console.log(ageAfiq, ageSara, averageAge);

// coding challenge #1

const massMark = 89;
const heightMark = 1.78;
const massVladimir = 93;
const heightVladimir = 1.89;

const BMIMark = massMark / heightMark ** 2;
const BMIVladimir = massVladimir / (heightVladimir * heightVladimir);
console.log(BMIMark, BMIVladimir);

const markHigherBMI = BMIMark > BMIVladimir;

console.log(BMIMark, BMIVladimir, markHigherBMI);

// strings and template literal
const afiq = `I'm ${firstName}, a ${birthYear}`;
console.log(afiq);

console.log(`String
with 
multiple 
lines!
Can you believe it?!
NO!`);

// Type conversion & Type Coercion

// 1. Type Conversion
const inputYear = `1999`;
console.log(inputYear, Number(inputYear));
console.log(inputYear + 18);

console.log(Number(`Afiq`));
console.log(typeof NaN);

console.log(String(23111), 233111);

// 2. Type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`I am`, 24, `years old`);
console.log(`23` - `100` + 450);
console.log(String(24) * String(4));

let n = `1` + 1;
n -= 1;
console.log(n);

let m = 1 + `1`; //Coerced to be a string
m -= 1;
console.log(m);

// Truthy & Falsy Values
// 5 falsy values: undefined, null, 0, NaN, ''

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(``));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 400;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job!`);
}

let Height;
if (Height) {
  console.log(`YAY! Defined`);
} else {
  console.log(`Sigh, Undefined`);
}

// Equality Operators
const isAge = `18`;
if (isAge === 18) console.log(`Congrats, you're an adult now`);
else console.log(`Sorry!`); // triple equal is a strict equality
// doesn't perform type coercion

if (isAge == 18) console.log(`Congrats, you're an adult now`);
else console.log(`Sorry!`); // double equal is a loose equaliy
// does perform type coercion

// Performing Prompt

// const favorite = prompt(`What's your favorite Liverpool FC moment? `);
// console.log(typeof favorite);

// if (favorite === `UCL18/19`) console.log(`Yeay mine too`, typeof favorite);
// else if (favorite === `Prem`) console.log(`First in 30 years`, typeof favorite);
// else if (favorite === `Mo Salah`) console.log(`The best ITW`, typeof favorite);
// else if (favorite === `VVD`) console.log(`Best CB ITW`, typeof favorite);
// else console.log(`Boring!`, typeof favorite);

// Boolean Logic (AND, OR, NOT)

// logical operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

const isTired = false;
const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
// console.log(hasDriverLicense && hasGoodVision && !isTired);

if (shouldDrive) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Sara can't drive`);
}
