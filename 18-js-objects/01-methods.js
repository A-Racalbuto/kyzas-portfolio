const user = {
  name: 'Antony',
  age: 38,
  walk() {
    console.log('Left foot, right foot');
  },
};

user.speak = speak; // Reference to the funnction (without brackets) and not invoke it (with brackets)

user.speak();

const dog = {
  name: 'Arya',
  age: 6,
  speak: speak,
};

dog.speak();

speak(); // Gibt undefined aus

function speak() {
  console.log(this);
  console.log(`Hi, my name is ${this.name}!`);
}
