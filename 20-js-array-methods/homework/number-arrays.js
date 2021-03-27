/* Erste Übung vom Übungsslide in Chapter 14 */
const arr = [1, 2, 3, 4, 5, 6, 7];

const double = (n) => n * 2;
const isEven = (n) => n % 2 === 0;
const sum = (n1, n2) => n1 + n2;
const square = (n) => n ** 2;

function printItems() {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item, i);
  }

  for (let item of arr) {
    console.log(item);
  }

  arr.forEach((item, index, arr) => {
    console.log(item, index);
  });
}

function doubleItems() {
  /* Alternative, die mehr "imparative" ist */
  // const doubles = [];
  // for (let i = 0; i < arr.length; i++) {
  //   doubles.push(double(arr[i]));
  // }

  const doubles = arr.map(double);
  console.log(doubles);
}

doubleItems();

/* Nächste Übung vom Übungsslide in Chapter 14 - Auf gerade Zahlen prüfen */
function hasEven(arr) {
  const hasEven = arr.some(isEven);
  console.log(hasEven);
}

// Alternative
function hasEven1(arr) {
  let hasEven1 = false;
  for (let item of arr) {
    if (isEven(item)) {
      hasEven1 = true;
    }
  }

  const hasEven = arr.some(isEven);
  console.log(hasEven);
}

hasEven([1, 2, 3, 4, 5]);
hasEven([1, 3, 5, 7]);

/* Nächste Übung vom Übungsslide in Chapter 14 - Prüfen, ob alle Zahlen gerade sind */
function allEven(arr) {
  console.log(arr.every(isEven));
}

// Alternative
function allEven1(arr) {
  let allEven1 = true;
  for (let item of arr) {
    if (!isEven(item)) {
      allEven1 = false;
    }
  }
  console.log(arr.every(isEven));
}

allEven([1, 2, 3, 4, 5]);
allEven([2, 4, 8, 16]);

/* Nächste Übung vom Übungsslide in Chapter 14 - Erste gerade Zahl oder undefined ausgeben */
function getFirtEven() {
  console.log(arr.find(isEven));
}

function getEvens(arr) {
  console.log(arr.filter(isEven));
}

/* Nächste Übung vom Übungsslide in Chapter 14 - Alle Zahlen im Array aufsummieren */
function sumItems(arr) {
  // let sum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  let sum = 0;
  for (let item of arr) {
    sum += item;
  }

  console.log(arr.reduce(sum, 0)); // Die "0" kann auch weggelassen werden
}

sumItems([1, 2, 3, 4, 5]);
sumItems([2, 4, 8]);

/* Letzte Übung vom Übungsslide in Chapter 14 */
function sumSquaresOfEvens(arr) {
  let sum = 0;
  for (let item of arr) {
    if (isEven(item)) {
      sum += square(item);
    }
  }

  console.log(sum);

  // Alternative 1
  console.log(
    arr.reduce((acc, item) => {
      if (isEven(item)) {
        acc += square(item);
      }
      return acc;
    }, 0)
  );

  // Alternative 2
  console.log(arr.filter(isEven).map(square).reduce(sum));
}

sumSquaresOfEvens([1, 2, 3, 4]);
