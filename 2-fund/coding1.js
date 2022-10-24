const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🥇 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🥇 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins........`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(100, 50);
checkWinner(100, 200);

//  Test 2
scoreDolphins1 = calcAverage(85, 54, 41);
scoreKoalas1 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins1, scoreKoalas1);
