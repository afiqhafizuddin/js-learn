// DATA STRUCTURE

// 1. Array

// ways of assigning arrays
const friends = ["Michel", "Steven", "Peter", "Jordan", "Virgil"];
console.log(friends);

const years = new Array(1997, 1998, 1999, 2000, 2001);
console.log(friends[0], years[3]);

// display the length of array & specific element in an arrays
console.log(friends.length);
console.log(friends[friends.length - 1]);

// mutate an element in an aray
friends[2] = "Derek"; // only primitive values are immutable
console.log(friends);

// array can store different type of data
const Afiq = ["Afiq", "Hafizuddin", 22, "01 April 1999", "990401 - 01 - 8005"];
console.log(Afiq);

// exercise 1: function and array
const calculateAge = function (birthYear1) {
  return 2022 - birthYear1;
};

const years1 = [1990, 1999, 1994, 1997, 1998, 1999, 2000, 2001, 2007];

console.log(calculateAge(years1[5]));

// Basic Array Operations (Method)

// Appending at the end of the array and at the start of the arrray
const friends1 = ["Michael", "Steven", "Peter"];
const newLength = friends1.push("Fernando");
console.log(friends1);
console.log(newLength);

friends1.unshift("John");
console.log(friends1);

// removing elements
friends1.pop(); // remove last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift();
console.log(friends1);

// Indexing
console.log(friends1.indexOf("Steven"));
console.log(friends1.indexOf("John"));

console.log(friends1.includes("Steven"));
console.log(friends1.includes("Bobby"));
console.log(friends1.includes(0));

// Conditional in .includes method

if (friends1.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("You have nada");
}

// OBJECTS
const Afiq_Hafizuddin = {
  firstName: "Afiq",
  middleName: `Afiq. H`,
  lastName: `Hafizuddin`,
  age: 23,
  job: `engineer`,
  friends2: [`Steven`, `Mo Salah`, `Virgil van Dijk`, `Hendo`],
};

console.log(Afiq_Hafizuddin);

console.log(Afiq_Hafizuddin.lastName); // dot notation
console.log(Afiq_Hafizuddin[`firstName`]); // square bracket notation

const nameKey = `Name`;
console.log(Afiq_Hafizuddin[`first` + nameKey]);
console.log(Afiq_Hafizuddin[`middle` + nameKey]);
console.log(Afiq_Hafizuddin[`last` + nameKey]);

// const interestedIn = prompt(
//   `What do you want to know about Afiq? Choose between firstName, lastName, age, job, and friends`
// );
// console.log(Afiq_Hafizuddin[interestedIn]);

// if (Afiq_Hafizuddin[interestedIn]) {
//   console.log(Afiq_Hafizuddin[IntersectionObserver]);
// } else {
//   console.log(
//     `Wrong request. Choose between firstName, lastName, age, job, and friends`
//   );
// }

Afiq_Hafizuddin.location = `Malaysia`;
Afiq_Hafizuddin[`twitter handle`] = `@afiqhafizuddin`;
console.log(Afiq_Hafizuddin);

// Challenge
// Jonas has 3 friends, and his best friend is Michael

console.log(
  `${Afiq_Hafizuddin.firstName} has ${Afiq_Hafizuddin.friends2.length} friends, and his best friend is ${Afiq_Hafizuddin.friends2[1]}`
);

// Object Methods

const currentYear = prompt(`Enter Year`);

const afiqHafizuddinZainal = {
  firstName: `Afiq`,
  lastName: `Hafizuddin`,
  middleName: `Hafiz`,
  birthYear: 1999,
  job: [`Engineer, Web Developer`],
  friends: [
    `Mo Salah`,
    `Virgil van Dijk`,
    `Hendo`,
    `Luis Fernando Diaz`,
    `Sadio Mane`,
  ],
  hasDriversLicense: false,
  isHandsome: true,

  // calcAge: function (birthYear) {
  //   return 2039 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return currentYear - this.birthYear;
  // },

  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(afiqHafizuddinZainal.calcAge(1999));
// console.log(afiqHafizuddinZainal[`calcAge`](1999));

console.log(afiqHafizuddinZainal.calcAge());
console.log(afiqHafizuddinZainal.age);

// Challenge
// "Afiq is a 23-year old engineer, and he has a driving license"
// console.log(afiqHafizuddinZainal.getSummary());
console.log(afiqHafizuddinZainal.getSummary());

// Iteration: The For Loop

// console.log(`Lifting weights repetition 1`);

// for loop keeps runnign while condition is TRUE
for (let rep = 1; rep <= 5; rep += 1) {
  console.log(`Lifting weight repetition ${rep} `);
}

const types = [];
const moSalah = [
  `Mohamed`,
  `Salah`,
  522,
  `Liverpool`,
  1994,
  522,
  `UCL 2018/19 Champion`,
  899,
  `Egyptian King `,
  [`Sadio Mane`, `Virgil van Dijk`, `Hendo`, `Trent AA`, `Tsimikas`],
];

for (let i = 0; i < moSalah.length; i++) {
  console.log(moSalah[i], typeof moSalah[i]);

  types[i] = typeof moSalah[i];
}

console.log(types);

const tahunLahir = [1990, 1992, 1993, 1994, 1995, 1996, 1997, 1999];
const ages = [];

for (let i = 0; i < tahunLahir.length; i++) {
  ages.push(currentYear - tahunLahir[i]);
}

console.log(ages);

// Continue and Break Statement
for (let i = 0; i < moSalah.length; i++) {
  if (typeof moSalah[i] !== `string`) continue;

  console.log(moSalah[i], typeof moSalah[i]);
}

for (let i = 0; i < moSalah.length; i++) {
  if (typeof moSalah[i] === `number`) break;

  console.log(moSalah[i], typeof moSalah[i]);
}

// reverse counter
for (let i = moSalah.length - 1; i >= 0; i--) {
  console.log(moSalah[i]);
}

// Loop inside loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting Exercise: Set ${exercise}-------`);

  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`Lifting Weights Repetition ${repetition}`);
  }
}

repetition = 1;
while (repetition <= 10) {
  console.log(`Lifting Weights Rep ${repetition}`);
  repetition++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`Loop is about to end......`);
}
