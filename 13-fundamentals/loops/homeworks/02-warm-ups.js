/**
 * Print all numbers from 0 to 10 (excluded).
 * Try with a while loop, then with a for loop.
 */

 /* While-Loop */
 let i = 0;
 
 while (i < 10) {
     console.log(i);
     i++;
 }

 /* For-Loop */
 for (let g = 0; g < 10; g++) {
     console.log(g);
 }


/**
 * Print all numbers from 10 to 0 (excluded), reversed.
 * Try with a for loop, then with a while loop.
 */

 /* For-Loop */
 for (let h = 10; h > 0; h--) {
     console.log(h);
 }

 /* While-Loop */
 let j = 10;

 while (j > 0) {
     console.log(j);
     j--;
 }

/**
 * Print even numbers from 0 to 10 (excluded) with a for loop.
 * There are at least 3 possible solutions, can you find them all?
 */

 /* First try */
 for(let k = 0; k < 5; k++) {
     console.log(k*2);     
 }

 /* Second try */
 for (let l = 0; l < 10; l++) {
     if (l%2===0) {
         console.log(l)
     }     
 }

 /* Third try */
 for(let a = 0; a < 10; a += 2) {
    console.log(a);     
 }


/**
 * Guess the number: Prompt the user for a number until it equals the secret number or it's a falsy value
 * 
 * HINT: "until" something is true means "while" the same is false, and viceversa!
 */

 let sn = 9;
 let gn;

 while (gn != sn) {
    gn = +prompt('Guess a number between 1 and 15:', '')
    if (gn == 9) {
        alert('Congratulations! You have guessed the right number! :)')
    }
 }


/* Additional else if involved */
 let secrNum = 9;
 let guessedNum;

 while (guessedNum != secrNum) {
    guessedNum = +prompt('Guess a number between 1 and 15:', '')

     if (guessedNum < 9) {
         alert('Try a higher number!');
     }
         else if (guessedNum > 9) {
             alert('Try a lower number!');
         }

         else {
             alert('Congratulations! You have guessed the right number! :)');
         }    
 }


/**
 * Sum all numbers from 1 to 5
 *
 * HINT: use a variable to accumulate partial results
 */

 let partRes = 0;

 for (let n = 1; n <= 5; n++) {
     partRes += n;
 }

 console.log('The total sum is: ' + partRes)

/**
 * Build a string that looks like this:
 * "Na Na Na Na Na (...16 times) Batman!"
 * The string should be built by looping 16 times,
 * and at the end of the loop I want to print the result to the 
 * 
 * HINT: we can use string concatenation to build strings
 */

 let o = 0;
 let na = 'Na ';
 let strBat = '';

 while (o < 16) {
     strBat += na;
     o++;
 }

 alert(strBat + 'Batman!')