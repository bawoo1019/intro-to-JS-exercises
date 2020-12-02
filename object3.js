let myProtoObj = {
  foo: 1,
  bar: 2,
};



let myObj = Object.create(myProtoObj);
myObj.qux = 3;

for (let prop in myObj){
  console.log(myObj[prop]);
}   

//------

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//------
for (let key in myObj) {
  console.log(key);
}
//We can add a conditional to snippet 2 to get the same output from for..in: 
//all we need to do is check whether the key is myObj's own property:

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}