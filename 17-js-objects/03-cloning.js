/* Not a clone, we are creating a new reference to the same object */

const obj1 = { name: 'Antony' };
const obj2 = obj1;

/* Not a clone, they are similar objects */

const obj1 = { name: 'Antony' };
const obj2 = { name: 'Antony' };

function clone(object) {
  const clonedObject = {};
  for (let key in object) {
    clonedObject[key] = object[key];
  }
  return clonedObject;
}

const objectToClone = { name: 'Antony', age: 38, hungry: true };
const clonedObject = clone(objectToClone);

console.log(objectToClone, clonedObject);
console.log(objectToClone === clonedObject); // false

// Cloning
const objectToClone1 = { name: 'Antony', age: 38, hungry: true };
const clonedObj1 = {};
const clone1 = Object.assign(clonedObj, objectToClone);
