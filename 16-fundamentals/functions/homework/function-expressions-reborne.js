/* function declaration */

// hoisting

makeMeASandwich('avocado, salmon, cream cheese');

function makeMeASandwich(ingredients) {
  console.log(ingredients);
}

/* function expression */

// no hoisting

const makeMeASandwich = function (ingredients) {
  console.log(ingredients);
};

makeMeASandwich('tomato, mozzarella, basil');

function showTwo() {
  let num = 2;
  console.log(num);
}

const showTwo = function () {
  let num = 2;
  console.log(num);
};

/* arrow function */

const sum = (x, y) => x + y;

const square = (x) => x * x;

const square = (x) => {
  x * x;
};

const square = function (x) {
  return x * x;
};

function square(x) {
  return x * x;
}
