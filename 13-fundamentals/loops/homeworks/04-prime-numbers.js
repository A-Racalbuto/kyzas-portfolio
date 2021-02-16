/**
 *  Print all prime numbers up to MaxNum.
 * 
 *  HINT: Implement the Sieve of Erathostenes:
 *  1. Run through all the numbers starting from 2
 *  2. Only print those who are prime. A prime number is not divisible by any of the previous ones:
 *      a. Run through all the previous numbers, starting from 2
 *      b. Check of the current number is divisible by the current previous number
 *          i. A number is divisible by another of dividing them gives a remainder of 0
 * 
 *  All numbers:    2 3 4 5 6 7 8 9 10
 *  Prime numbers:  2 3 x 5 x 7 x x x 
 */

 let maxNum = 10
 for (let number = 2; number < maxNum; number++) {
    let isPrime = true;

    /* checks if the number is prime */
    for (let previous = 2; previous < number; previous++) {
        if (number % previous === 0) {
            isPrime = false;
        }
    }

    if(isPrime) {
         console.log(number);
     }
 }