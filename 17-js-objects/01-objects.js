let obj = {};

// JSON - JavaScript Object Notation

let propertyName = 'hasSunglasses';

let person = {
  name: 'Matteo Antony',
  nickname: 'IceOnFire',
  age: 38,
  body: {
    eyes: 2,
    nose: 1,
    mouth: 1,
    arms: 2,
    legs: 2,
  },
  speak: function () {
    // Funktionen können auch hinzugefügt werden
    console.log('Hello world!');
  },
  speak1() {
    console.log('Hello world 2!'); // Alternative Schreibweise für Funktionen AUSSCHLIEßLICH (!) in Objekten
  },
  calculator: Math, // Benutzt das Math-Object als function für das Objekt
  'I like yogurt': true, // Propertynamen können aus mehreren Wörtern bestehen, brauchen dann aber Anführungszeichen und [] bei Aufrufen
  I_like_turtles: true, // Underscores gehen auch
  [propertyName]: true, // Variable steht außerhalb (oben) und kann hier einfach übernommen werden
};

console.log(person.name);
console.log(person['body']); // Alternative, um Property aufzurufen
console.log(person.body.arms);
const personsArms = person.body.arms;
console.table(person); // stellt das Objekt in einer Tabelle dar

// Fälle, in denen man die Alternative Schreibweise mit [] benutzt
console.log(person['I like yogurt']);

let propertyName1 = prompt('What do you want to know?');
person[propertyName1]; // Ruft person.age (aus dem Prompt abgefragt) auf

const key = 'nickname';
console.log(person[key]); // console.log(person.key) funktioniert nicht!

// Andere Beispiele

const Math = {
  PI: 22 / 7,
  pow: (a, b) => a ** b,
};

console.log(Math.PI);

const complexObject = new Object(); // Alternative aber nicht gebrauchte Schreibweise

const value = 2;

const values = {
  property1: 3,
};

values.property1 = 5; // changing a property
values.property2 = 7; // adding a property

delete values.property1;

// CRUD operations
// Create
// Read/Retrieve
// Update
// Delete

const reservedKeywords = {
  // Möglichkeit, um reserved keywords wie if, delete, etc. doch als Variablenname zu benutzen. Nicht empfehlenswert!
  if: 1,
  for: 2,
  else: 3,
  delete: 4,
  default: 5,
};

const database = {
  create: () => {},

  read: () => {},

  update: () => {},

  delete: () => {},
};

// factory function
function createPerson(name, age) {
  const shoutedName = name.toUpperCase();
  return {
    name: shoutedName,
    age: age,
  };
}

function createPerson1(name, age) {
  // wenn die Namen der Properties gleich den Werten sind, kann man auch nur eins davon schreiben, es wird dann automatisch übernommen
  return { name, age }; // Kann man generell auch in einer Zeile schreiben
}

createPerson1('Mike,24'); // Objekt mit name: Mike und age: 24 wird erstellt

// for-in Loop
for (const key in person) {
  // zeigt alle Properties von person mit console.log auf
  console.log(key);
  const value = person[key];
  console.log(value);
}

for (const key in person) {
  console.log(key, person[key]);
}