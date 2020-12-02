

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
  console.log('Sorry, your number is not an integer');
  return;
}

  if (number % 2 === 0) {
    console.log('the number is even');
  } else {
    console.log('the number is odd');
  }  
}


console.log(evenOrOdd(90));
