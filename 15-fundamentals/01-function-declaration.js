function showMessage() {
    console.log('Hello world!')
}

showMessage     // zeigt im Browser die Funktion
showMessage();  // zeigt im Browser das Ergebnis (hier: "Hello world!")

function showTwo(); {
    let num = 2;
    console.log(num);
}

console.log(num)        // funktioniert nicht, weil num nur lokal (innerhalb der Funktion) definiert ist


// Verbesserter Ansatz
let num;

function showThree() {
    num = 2;
    console.log(num);
}

console.log(num)


// Variable nachträglich ändern
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // zeigt 'Hello, John'

serName = 'Sebastian';

showMessage(); // zeigt 'Hello, Sebastian'


/*
 ** IIFE (Immediately invoked function expression) -> Funktion nochmal checken
 */
(function() {
    var name = 'Tiago';
    console.log(name);
})();


// Manche Funktionen akzeptieren oder brauchen mehrere Paramter, manche nicht
console.log('Hello', 'world!')          // funktioniert
alert('Hello', 'world!')                // funktioniert nicht
prompt('Question?', 'Default value')    // funktioniert



// function mit Variable
function sayHello(who) {
    console.log(`Hello ${who}!`);
}

let name = 'world'

sayHello(name);         // -> Variable
sayHello('everybody');  // -> Text


function sum(x, y) {
    console.log(x + y);
}

sum(2, 3);


// Input in Zahl umwandeln, 3 Möglichkeiten
let myString = '3';

Number(myString);
+(myString);
parseInt(myString);


// Erstmal ohne Parameter definieren
function sum(); {
    console.log(x + y);
}

let x = 2;
let y = 3;

sum();


// Increment Funktion

    // Diese Funktion ändert a und b nicht (a und b könnten auch x und y heißen)
    function incrementandSum(x, y) {
        x += 1;
        y += 1;
        console.log(x + y);
    }

    let a = 2;
    let b = 3;
    incrementandSum(a, b);

    // Diese Funktion ändert x und y
    function incrementAndSum() {
        x += 1;
        y += 1;
        console.log(x + y);
    }

    let x = 2;
    let y = 3;
    incrementAndSum();



// wenn einer der Werte nicht gegeben wird
function sum(x, y) {                                // man könnte auch schreiben sum(x = 0, y) wenn man nur schauen will, ob x undefined ist. Bedeutet ich will in der function ein x und wenn es undefined ist, macht es 0.
    if (x === undefined || x = 0 || x = '') {
        x = 0;
    }

    if (y === undefined || y = 0 || y = '') {
        y = 0;
    }

    console.log(x + y);
}

sum(2, 3);
sum(2);
sum(undefined, 3);
sum();


// mit Strings arbeiten
function sum(x = 0, y = 0) {
    if (typeof x === 'string') {
        x = Number(x);
    }

    if (typeof y === 'string') {
        y = Number(y);
    }

    console.log(x + y);
}

sum('2', '3');



function sum(x, y) {
    console.log(x + y);
}

sum(2, 3);
sum(3, 5);
sum(5, 7);


function sum(x, y) {
    const result = x + y;
    return result;          // you can only return one thing
}

const result = sum(2, 3);
console.log(result);
console.log(sum(2, 3));
alert(sum(2, 3));

const answer = prompt('Did you understand?', 'No');



/**
 * Calculate the hypothenuse of a right triangle
 * 
 *  h = sqrt(leg1 ** 2 + leg2 ** 2)
 */

 `
 |\
 | \
 |  \
 +---+ 
 `

 // Hier kann console.log statt return benutzt werden
 function calculateHypothenuse(leg1, leg2) {
     const h = Math.sqrt(leg1 ** 2 + leg2 ** 2);
     console.log(h);
 }

 const leg1 = prompt();
 const leg2 = prompt();

 calculateHypothenuse(leg1, leg2);


 /*
  * Hier muss return benutzt werden, weil z.B. bei der ersten function (square)
  * mit console.log ein undefined Wert ausgegeben würde und später in den anderen
  * Funktionen nicht mehr genutzt werden kann. Deshalb braucht man return, denn das gibt wirklich einen Wert zurück.
  */
 function square(num) {
     return num ** 2;
 }

 function sum(num1, num2) {
     return num1 + num2;
 }

 function calculateHypothenuse(leg1, leg2) {
    const leg1squared = square(leg1);
    const leg2squared = square(leg2);
    const sumOfSquares = sum(leg1squared + leg2squared);
    const h = Math.sqrt(sumOfSquares);
    return h;
 }

 const leg1 = prompt();
 const leg2 = prompt();

 const hypothenuse = calculateHypothenuse(leg1, leg2);

 


// Beispiel für return
function login(username, password) {
    return true
}


// fucntion declaration
// function expression
// function XXXXXX