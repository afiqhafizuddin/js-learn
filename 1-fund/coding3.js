const numberOfAttempts = 3;
let averageDolphin = (96 + 108 + 89) / numberOfAttempts;
let averageKoalas = (88 + 91 + 110) / numberOfAttempts;

console.log(averageDolphin, averageKoalas);

if (averageDolphin > averageKoalas) {
  console.log(`Dolphins win`);
} else if (averageKoalas > averageDolphin) {
  console.log(`Koalas win`);
} else {
  console.log(`Draw`);
}

// Bonus #2

averageDolphin = (97 + 112 + 101) / numberOfAttempts;
averageKoalas = (109 + 95 + 124) / numberOfAttempts;

console.log(averageDolphin, averageKoalas);

if (averageDolphin > averageKoalas && averageDolphin > 100) {
  console.log(`Dolphins win`);
} else if (averageKoalas > averageDolphin && averageKoalas > 100) {
  console.log(`Koalas win`);
} else {
  console.log(`Draw`);
}

// Bonus #3

averageDolphin = (97 + 112 + 87) / numberOfAttempts;
averageKoalas = (109 + 95 + 86) / numberOfAttempts;

console.log(averageDolphin, averageKoalas);

if (averageDolphin > averageKoalas && averageDolphin > 100) {
  console.log(`Dolphins win`);
} else if (averageKoalas > averageDolphin && averageKoalas > 100) {
  console.log(`Koalas win`);
} else if (
  (averageKoalas == averageDolphin && averageDolphin, averageKoalas >= 100)
) {
  console.log(`Draw`);
} else {
  console.log(`No teams win the trophy`);
}
