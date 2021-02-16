/**
 * Sao's quest is about asking the user for the number of values to sum
 * and then sum them all and provide the result as output.
 * 
 * Example: the user inputs 3, then the app asks for the numbers
 * (and I want to ask 3 times, because that was what the user said).
 * Question: Can I use "while" to say : while the number of inputs is
 * not equal to numvalue, ask for numbers.
 */

 // 1. get numValues from user
 // 2. get values from user until we reach numValues
 //                            while we haven't reached numValues

 const numValues = +prompt('How many values do you want me to add together?');
 
 let sum = 0;
 let numbersLeft = numValues;

 while (true) {
     const number = +prompt('Next number please...');
     // sum = sum + number;
     sum += number;
     numbersLeft--; // = "count += 1" = "count = count + 1"
     if (!numbersLeft) {
         break;
     }
 }

 alert(`The sum of your numbers is ${sum}, Enjoy!`);



 const numValues = +prompt('How many values do you want me to add together?');
 
 let numbersLeft = numValues;
 let sum = 0;

 while (numbersLeft) {
     const number = +prompt('Next number please...');
     // sum = sum + number;
     sum += number;
     numbersLeft--; // = "count += 1" = "count = count + 1"
 }

 alert(`The sum of your numbers is ${sum}, Enjoy!`);