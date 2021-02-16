/**
 * Rectangle: Build an ASCII rectangle, given the number of rows and columns:
 *
 * *****
 * *****
 * *****
 *
 * HINT: The problem can be split into multiple sub-problems:
 * 1. how to build one row?
 * 2. how to repeat the process?
 */

 let numRow = +prompt('How many rows?');
 let numCol = +prompt('How many columns?');
 let i = 0;
 let j = 0;

 let strCol = '';
 let finalStr = '';

 while (i < numCol) {
     strCol += '*';
     i++;
 }

 while (j < numRow) {
     finalStr += strCol + '\n';
     j++;
 }

 console.log(finalStr)






























/*
 * Empty rectangle: Build an ASCII rectangle, but this time asterisks only delimit the borders and the rest is spaces.
 *
 * ******
 * *    *
 * *    *
 * ******
 *
 * HINT: split the problem into multiple sub-problems:
 *
 * 1. how to build a 'full' row
 * 2. how to build an 'empty' row
 * 3. how to build the whole button, knowing that:
 *    1. the first and last rows are always 'full'
 *    2. all other rows in between are always 'empty'
 */

 let numRow = +prompt('How many rows?');
 let numCol = +prompt('How many columns?');
 let i = 0;
 let j = 0;

 let strCol = '';
 let fullStr = '';
 let emptStr = '';
 let finalStr = '';

 // Full string
 for (let i = 0; i < numCol; i++) {
     fullStr += '*';     
 }

 //Empty string
 for (let i = 0; i < (numCol - 2); i++) {
    strCol += ' ';
 }
 emptStr = '*' + strCol + '*';

 finalStr = fullStr + '\n';

 while (j < (numRow - 2)) {
     finalStr += emptStr + '\n';
     j++;
 }

 finalStr = finalStr + fullStr;

 console.log(finalStr);
























/**
 * Rectangular triangle: Build an ASCII triangle, given the number of rows. The width of the triangle should be automatically calculated.
 * 
 * *
 * **
 * ***
 * ****
 * 
 * HINT: The number of asterisks is directly proportional to the row number:
 * 1    row 0 + 1 = 1
 * 12   row 1 + 1 = 2
 * 123  row 2 + 1 = 3
 * 1234 row 3 + 1 = 4
 */

 let numTrRows = +prompt('How many rows should the triangle have?');
 let strAstRow = '';
 let strTrRows = '';

 for (let i = 1; i <= numTrRows; i++) {
     strAstRow += '*';
     strTrRows += strAstRow + '\n';
 }

 console.log(strTrRows);

 


























/**
 * Isosceles triangle: Build an ASCII triangle, given the number of rows. The width and position of the triangle should be automatically calculated.
 *
 *    *
 *   ***
 *  *****
 * *******
 *
 * HINT: The number of asterisks is directly proportional to the row number:
 *    1    row 0 * 2 + 1 = 1
 *   123   row 1 * 2 + 1 = 3
 *  12345  row 2 * 2 + 1 = 5
 * 1234567 row 3 * 2 + 1 = 7
 * 
 * The number of spaces is instead inversely proportional to the row number:
 *
 * 123*    lastRow 3 - row 0
 * 12***   lastRow 3 - row 1
 * 1*****  lastRow 3 - row 2
 * ******* lastRow 3 - row 3
 */

 let numbRows = +prompt('How many rows should your triangle have?', '');
 let pyrStr = '';
 let newStr = '';

 for (let i = 0; i < numbRows; i++) {

    let numStars = '';
    let numSpaces = '';

    for (let j = 0; j < (i*2+1); j++) {        
        numStars += '*';
    }

    for (let k = 0; k < (numbRows-(i+1)); k++) {
        numSpaces += ' ';
    }

    newStr = numSpaces + numStars;
    pyrStr += newStr + '\n';
    
}

console.log(pyrStr);





































 
/**
 * Clessidra
 * 
 * *******
 *  *****
 *   ***
 *    *
 *   ***
 *  *****
 * *******
 * 
 */


 let numbRows1 = +prompt('How many rows should your triangle have?', '');
 let pyrStr1 = '';
 let newStr1 = '';

 for (let i = (numbRows1 - 1); i >= 0; i--) {

    let numStars1 = '';
    let numSpaces1 = '';

    for (let j = 0; j < (i*2+1); j++) {        
        numStars1 += '*';
    }

    for (let k = 0; k < (numbRows1-(i+1)); k++) {
        numSpaces1 += ' ';
    }

    newStr1 = numSpaces1 + numStars1;
    pyrStr1 += newStr1 + '\n';
    
 }

 console.log(pyrStr1);










 /**
 * Reversed isosceles triangle: Build an ASCII triangle, given the number of rows. It should be shown upside down.
 * 
 * *******
 *  *****
 *   ***
 *    *
 * 
 * HINT: the proportionality is similar to the previous exercise, but reversed.
 */