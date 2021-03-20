/* Mit Arrays */
const arr = ['a', 'b', 'c', 'd'];

const first = arr[0];
const second = arr[1];
const third = arr[2];

// Das Gleiche aber kürzer
const [first, second, third] = arr; // Erzeugt  drei separate const mit den Werten 'a', 'b' und 'c'
// Spread-Operator
const [first, second, ...rest] = arr; // "..." erzeugt ein Array "rest" mit den restlichen Einträgen

/* Mit Objekten */
const obj = { a: 1, b: 2, c: 3, d: 4 };

const firstProp = obj.a;
const secondProp = obj.b;
const thirdProp = obj.c;

const { a: firstProp, b: secondProp, c: thirdProp } = obj;

// Wenn die Variablennamen die gleichen sind wie die Property-Namen, kann man vereinfachen
const a = obj.a;
const b = obj.b;
const c = obj.c;

const { a, b, c } = obj; // Ist das Gleiche wie const { a:a, b:b, c:c } = obj;
const { a, b, ...rest } = obj; // "..." erzeugt ein Object "rest" mit den restlichen Einträgen

rest.slice(-1)[0];

function sum(arr) {
  // const a = arr[0]
  // const b = arr[1]
  const [a, b] = arr;
}

/* Mehrere Nachrichten drucken */
function print(messages) {
  messages.forEach((message) => {
    console.log(message);
  });
}

print(['hello world!', 'how are you?']);

/* Summe bilden mit "..." */
const sum = (a, b) => a + b;
const sumMany = (...numbers) => numbers.reduce(sum, 0);

sumMany(1, 2, 3, 4, 5);

/* Nested destructuring */
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

const { items } = options;
const [, sweet] = items;
console.log(sweet);
