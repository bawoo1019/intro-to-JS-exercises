
function factorial(num) {
  let result = 1;
  for (let n = num; n > 0; n -= 1) {
    result *= n;
}
  return result;
}

console.log(factorial(5));

