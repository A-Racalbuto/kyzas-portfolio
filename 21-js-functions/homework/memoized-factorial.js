/**
 * 5! = 5 * 4! = 5 * 4 * 3 * 2 * 1
 *
 * 6! = 6 * 5! = 6 * cached(5!)
 */

const memoizedFactorial = memoize();

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));

function memoize() {
  let cache = {};

  return function recursiveFactorial(num) {
    if (num === 1) {
      return num;
    }

    let factorial = cache[num];
    if (factorial != null) {
      return factorial;
    }

    factorial = num * recursiveFactorial(num - 1);
    cache[num] = factorial;
    return factorial;
  };
}

// Weiterentwicklung

const memoizedFactorial1 = memoize1(factorial);

console.log(memoizedFactorial1(5));
console.log(memoizedFactorial1(6));

function memoize1(func) {
  let cache = {};

  return function (num) {
    let result = cache[num];
    if (result != null) {
      return result;
    }

    if (num === 1) {
      return num;
    }

    result = factorial(num);

    cache[num] = result;
    return result;
  };
}

function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
}
