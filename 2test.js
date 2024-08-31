console.log(`hello raj ..`);

const { calculation } = require('./calculator.js')
const { checkEvendd } = require('./checkEvenOdd.js')

calculation.addition(8,3)
calculation.substraction(8,3)

console.log("---------------------------");
console.log(" num is odd or even : " , checkEvendd.checkEvenodd(77));



