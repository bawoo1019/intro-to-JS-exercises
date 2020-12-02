function zero(argumentsZero) {
  let result = false;
  let result2 = true;
  if (100/argumentsZero === Infinity) {
    return result;
  } else {
    (100/argumentsZero === -Infinity)
  } return result2; 
  }
console.log(zero(-0));

//OR

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}
console.log(isNegativeZero(-0));

//OR

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}
console.log(isNegativeZero(-0));