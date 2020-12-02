let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
 // => [1, 5, 3]

function oddLengths(strings) {
      return strings.reduce((accumulator, element) => {
        let length = element.length;
        if (length % 2 === 1) {
          accumulator.push(length);
        }
        return accumulator;
    }, []);
}

console.log(oddLengths(arr));


