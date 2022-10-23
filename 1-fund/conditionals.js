// conditionals in JavaScript
const age = 13;

if (age >= 18) {
  console.log("Sara can start driving");
} else {
  const yearLeft = 18 - age;
  console.log(`Sara is too young, She has to wait ${yearLeft} years`);
}

const birthYear = 2003;
let century; // declare variable outside the if-else block
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
