let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedArray = Object.entries(person);

console.log(nestedArray);
//--------------
let nestedArray2 = [];

for (let property in person) {
  nestedArray2.push([property, person[property]]);
}

//----------


//Shallow copy means that it returns a new object that has the same key/value pairs, 
//but that you don't need to worry about cloning the values as well
function clone(obj) {
  let cloneNow = Object.assign({}, obj);
  return cloneNow;
}

let coolPerson = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(coolPerson);
coolPerson.age = 34;

console.log(coolPerson.age);       // 34
console.log(clonedPerson.age); // 33