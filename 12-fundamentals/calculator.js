/**
 * Calculator is a webapp that asks for two numbers and
 * performs a specific operation on them.
 * 
 * The avaibale operations are:
 * - sum
 * - subtraction
 * - multiplication
 * - division
 * - power
 * - remainder
 * - ...
 * 
 * You can use an if-else cascade, or the ternary operator (not recommended)
 */

 let num1 = +prompt('First operand');
 let num2 = +prompt('Second operand');
 let operation = prompt('Operation');

 if (operation === '+') {
     alert(num1 + num2);
 } else if (operation === '-') {
     alert(num1 - num2);
 }