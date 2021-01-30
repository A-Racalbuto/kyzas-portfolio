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
 * This time let's use a switch statement
 */

let num1 = +prompt('First operand');
let num2 = +prompt('Second operand');
let operation = prompt('Operation');

let isNum1Valid = !isNaN(num1);
let isNum2Valid = !isNaN(num2);

if (isNum1Valid && isNum2Valid) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        
        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        default:
            alert('Invalid operation');

    }

    if (typeof result === 'number') {
        alert(`The result is ${result}`);
    }
} else {
    alert('Invalid input numbers');
}