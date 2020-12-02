let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const integerOnly = array.filter(array => Number.isInteger(array));

console.log(integerOnly);

//--------------------------------------------------

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

console.log(findIntegers(array));



