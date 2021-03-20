/* Iterate over an array */

let arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); // Man könnte statt den zwei Befehlen auch einfach console.log(arr[i]); schreiben aber dann hätte man den Index nicht console.logged
}

for (let item of arr) {
  console.log(item);
}

arr.forEach(function (elem, index, arr) {
  console.log(elem, index, arr); // Man könnte auch nur elem nehmen
});

/* Array-Items quadrieren */

const arr1 = [1, 2, 3, 4, 5];

let squares = [];
arr1.forEach(function (item) {
  squares.push(item ** 2);
});

console.log(squares);

// Alternative mit .map und Arrow-Function

const squares1 = arr1.map((item) => item * item);

console.log(squares1);

// Alternative komprimierte Form

const square = (num) => num * num;
const incrementByTwo = (num) => (num += 2);
const sum = (a, b) => a + b;

const squares2 = arr1.map(square);
const incrementedNumbers = arr1.map(incrementByTwo);

console.log(squares2);
console.log(incrementedNumbers);

/* Finding Function */

const isEven = (item) => item % 2 === 0;

const evenNumber = arr1.find(isEven);
const evenNumberIndex = arr1.findIndex(isEven);
const filterEvens = arr1.filter(isEven);
arr.some(isEven);
arr.every(isEven);

let sum1 = 0;
for (let item of arr) {
  sum1 = sum + item;
}
console.log(sum);

// Alternative zu einer Zeile obendrüber (?)
let sum2 = arr.reduce(sum, 0);

console.log(evenNumber);
console.log(evenNumberIndex);
console.log(filterEvens);

// Alternative, um zu filtern (?)
const filteredArray = [];
for (let item of arr1) {
  if (isEven(item)) {
    filteredArray.push(item);
  }
}

/* Sorting */
let arr2 = ['tiago', 'kyza', 'svil', 'sao', 'Redhotty', 'jabbataa'];
arr2.sort(); // Sortiert Redhotty als erstes, weil es großgeschrieben ist

let arr3 = [5, 2, 87, 4, 6, 3, 9];
arr.sort(); // Stellt 87 vor 9, weil es irgendwie in Strings umgewandelt wird

arr3.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

// Alternative
arr3.sort((a, b) => a - b);

// Umkehren
arr3.reverse();

// Verbinden
arr3.toString();
// Alternative
arr3.join();
// Oder mit Leerzeichen verbinden
arr3.join(' ');

// Trennen
const str = 'Hello World!';
str.split(' '); // 'Hello' 'World!'
str.split('o'); // 'Hell' 'o World!'
str.split(''); // 'H' 'e' 'l' 'l' 'o' 'W' 'o' 'r' 'l' 'd' '!'

let fruit = ['Apples', 'Oranges', 'Kiwi'];
console.log(`I like ${fruit.join(', ')}`);

/* Reduce-Function statt For-Loop */
let mappedArr = [];
for (let item of arr1) {
  mappedArr.push(square(item));
}
console.log(mappedArr);

const mappedArr1 = arr1.reduce((acc, item) => {
  acc.push(square(item));
  return acc;
}, []);
