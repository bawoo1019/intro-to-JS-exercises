let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objectKeys = Object.keys(obj);

let upperKeys = objectKeys.map((key) => key.toUpperCase());

console.log(upperKeys);

// OR Use Below method

//let upperKeys = [];
//let objectKeys = Object.keys(obj);
//objectKeys.forEach(function(key) {
//  upperKeys.push(key.toUpperCase())
//})

//console.log(upperKeys);