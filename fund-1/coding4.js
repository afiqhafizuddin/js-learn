const bill = 178;
// const bill = 0;
// bill_str = Number(bill);
// Number(bill);
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
