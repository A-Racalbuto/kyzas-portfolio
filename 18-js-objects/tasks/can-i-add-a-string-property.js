// strings are IMMUTABLE, meaning they cannot be changed

let str = 'Hello';

str.test = 5;

console.log(str.test);

console.log(parseInt('FF', 16)); // -> shows FF in base 16

let num = Math.PI;
console.log(num.toFixed(2)); // -> Zahlen runden
