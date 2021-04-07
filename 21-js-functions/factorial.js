/**
 * 5! = 5 * 4 * 3 * 2 * 1
 */

console.log(iterativeFactorial(5) === 120);

function iterativeFactorial(num) {
  let factorial = num;
  for (let i = num - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

/**
 * 5! = 5 * 4!
 * 4! = 4 * 3!
 * 3! = 3 * 2!
 * 2! = 2 * 1!
 * 1! = 1
 */

console.log(recursiveFactorial(5) === 120);

function recursiveFactorial(num) {
  if (num === 1) {
    return num;
  }

  return num * recursiveFactorial(num - 1);
}

/**
 * pow(n, m) => n * n * n... (m times)
 */

/**
 * pow(n, m) => n * pow(n, m - 1)
 * pow(n, 1) => n
 */
