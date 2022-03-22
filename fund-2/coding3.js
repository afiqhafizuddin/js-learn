const markMiller = {
  firstName: `Mark`,
  lastName: `Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnSmith = {
  firstName: `John`,
  lastName: `Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(johnSmith.calcBMI(), markMiller.calcBMI());

// without calling the function

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
  console.log(
    `${markMiller.firstName}'s BMI (${markMiller.calcBMI()}) is higher than ${
      johnSmith.firstName
    }'s BMI (${johnSmith.calcBMI()})`
  );
} else {
  console.log(
    `${johnSmith.firstName}'s BMI (${johnSmith.calcBMI()}) is higher than ${
      markMiller.firstName
    }'s BMI (${markMiller.calcBMI()})`
  );
}

// calling out the function first

markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.BMI > johnSmith.BMI) {
  console.log(
    `${markMiller.firstName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.firstName}'s BMI (${johnSmith.BMI})`
  );
} else {
  console.log(
    `${johnSmith.firstName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.firstName}'s BMI (${markMiller.BMI})`
  );
}
