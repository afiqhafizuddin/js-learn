const massMark = 89;
const heightMark = 1.78;
const massVladimir = 93;
const heightVladimir = 1.89;

const BMIMark = massMark / heightMark ** 2;
const BMIVladimir = massVladimir / (heightVladimir * heightVladimir);
console.log(BMIMark, BMIVladimir);

const markHigherBMI = BMIMark > BMIVladimir;

console.log(BMIMark, BMIVladimir, markHigherBMI);

if (BMIMark > BMIVladimir) {
  console.log("Mark's BMI is higher than Vladimir's!");
} else {
  console.log(`Vladimir's BMI is higher than Mark's`);
}
