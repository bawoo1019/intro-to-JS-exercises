
function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let a = getNumber('Input first number: ');
let b = getNumber('Input second number: ');
console.log(`${a} * ${b} = ${multiply(a, b)}`);

