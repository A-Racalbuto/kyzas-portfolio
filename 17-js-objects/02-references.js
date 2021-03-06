let x = 2;
let y = 3;

console.log(x, y); // 2, 3
console.log(incrementAndSum(x, y)); // 7
console.log(x, y); // 2, 3
console.log(a, b); // error because a and b have never been defined

function incrementAndSum(a, b) {
  a++;
  b++;
  return a + b;
}

let person = { age: 38 };
let firstName = 'Matteo Antony';

console.log(person); // '[object, Object]'
console.log(person); // '{"age": 38}'

const newPerson = setName(person, firstName);

console.log(newPerson);
console.log(person);

function setName(obj, name) {
  obj.name = name;
  return obj;
}

/* primitive values */
let a = 1;
let b = a;
// the two values are equal, b is a copy of a
console.log(a === b);

/* objects */
const obj = {};
const newObj = obj;
// the two references point to the same object
newObj === obj; // true, weil nur Verweis auf dasselbe Objekt

const obj1 = {};
const obj2 = {};
// the two references point to two different objects
obj === obj2; // false, weil zwar ähnlicher Inhalt aber nicht dasselbe Objekt

/* constants */
const number = 1;
number = 'string';

const constObj = 1;
constObj = 'string';
constObj.name = 'Antony';

/* Gleiches Beispiel wie oben aber "let" wird durch "const" ersetzt */
const person = { age: 38 };
const firstName = 'Matteo Antony';

console.log(person); // '[object, Object]'
console.log(person); // '{"age": 38}'

const newPerson = setName(person, firstName);

console.log(newPerson);
console.log(person);

function setName(obj, name) {
  obj.name = name;
  return obj;
}
