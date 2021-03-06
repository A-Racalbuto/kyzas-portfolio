let user = {
  name: 'Antony',
  age: 38,
};

/** factory function */

function createUser(name, age) {
  let user = {
    name, // wenn name: name, oder age: age, kann man das ja so zusammenschreiben (Kurzform)
    age,
  };

  return user;
}

console.log(createUser('kyza219', 28));
console.log(createUser('sao', 27));
console.log(createUser('tiago', 27));

const admin = createUser('Antony', 38);

/** constructor function */

// function User(name, age) {
//   this = { // internally erstellt die constructor function eine const = this und dann this.name und this.age; deshalb könnte man stattdessen und statt dem return auch einfach nur this.name,this.age,this.speak, etc. schrieben
//     name,
//     age,
//   };

//   return this;
// }

// Alternative, die genau gleich ist
function User(name, age) {
  this.name = name;
  this.age = age;
  this.speak = () => console.log('Hi, my name is', this.name, '!');
}

const admin2 = new User('Antony', 38);

console.log(User('kyza219', 28));
console.log(User('sao', 27));
console.log(User('tiago', 27));
