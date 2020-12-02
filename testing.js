function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('Pete Hanson'));

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));