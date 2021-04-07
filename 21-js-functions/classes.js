let user = { name: 'Antony', age: 38 };
let anotherUser = { name: 'Angelo', age: 28 };

function User(name, age) {
  this.name = name;
  this.age = age;
}

let yetAnotherUser = new User('Bobby', 30);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  // instance method
  speak() {
    console.log('Hi, my name is', this.name);
  }
}

// Person.speak()
const person = new Person('DrazeLakeR', 26);
person.speak();

class Woman extends Person {
  getAge() {
    return this.age > 25 ? 25 : this.age;
  }
}

const sao = new Woman('Sao', 32);
