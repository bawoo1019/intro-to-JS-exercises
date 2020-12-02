let array1 = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches (words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1){
      if (pattern.test(words[index])) {
        matches.push(words[index]);
      }
  }
  return matches;
}
console.log(allMatches(array1, /lab/));

//------------Or use below

function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches2(array1, /lab/));