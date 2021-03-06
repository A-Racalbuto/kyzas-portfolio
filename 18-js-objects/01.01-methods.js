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
  // speak: speak,
};

// dog.speak();

const speaky = () => {
  // bla bla bla
  console.log(this);
};

const speakAsDog = speak.bind(dog);

speakAsDog();

const that = this;
console.log(that);

function speak() {
  console.log(that);
  console.log(`Hi, my name is ${this.name}!`);
}
