// While-Loop
while (condition) {
    something
}

and then something else;


//Do-While-Loop
do {
    something;
} while (condition);

 and then something else;


 //For-Loop
 for (begin; condition; step) {
     something;
 }



//Bsp. gleiche Anweisung jeweils mit While- und For-Loop

let i = 0; // begin
while (i < 3) { // condition
    alert(i); // body
    i++; // step
}

for (let i = 0; i < 3; i++) {
    alert(i)
}


//Bsp. mit Variablen im For-Loop
let start = prompt('Give me a starting number');
let end = prompt('Give me an end');

for (let i = start; i < end; i++) {
    alert(i);
}


//Bsp. mit "false"
let gameOver = false; // begin

while (!gameOver) { // condition
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true; // step
            break;

        default:
            alert('Still playing');
    }
}

alert('Bye!')


//Den While-Loop obendrüber in For-Loop umwandeln
for (let gameOver = false; !gameOver;) { // step wird einfach rausgelassen
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true; // step
            break;

        default:
            alert('Still playing');;
    }
}


//Breaking the loop
let result = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  result += value;

}
alert( 'Sum: ' + result );


//Gleicher Code anders geschrieben
let result = 0;
let value = 3;

while (value !== 0) {
    value = +prompt('Enter a number', '');
    if (value) {
    result += value;
    }
}
alert( 'Sum: ' + result );


// Alternative ohne dass value am Anfang ein Wert zugeschrieben wird
let result = 0;
let value = +prompt('Enter a number', '');

while (value !== 0) {
    if (value) {
    result += value;
    }
    value = +prompt('Enter a number', '');
}
alert( 'Sum: ' + result );


//Das Gleiche mit einem do-while-Loop
let result = 0;
let value;

do {
    value = +prompt('Enter a number', '');
    if (value) {
        result += value;
    }
} while (value);

alert( 'Sum: ' + result );


// Continue-Funktion
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }


// Continue-Funktion ohne "continue"
for (let i = 0; i < 10; i++) {
    let isEven = 1 % 2 == 0;
    
    if (isEven) {  
        alert(i);
    }
}


// Nested Loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`${i}, ${j}`)
    }
}


for (let i = 0; i < 10; i++) {
    let row= '';
    for (let j = 0; j < 10; j++) {
        row += `(${i}, ${j})`;
    }
    console.log(row);
}



let rows= +prompt('How many rows?');
let columns = +prompt('How many columns');

for (let i = 0; i < rows; i++) {
    let row= '';
    for (let j = 0; j < columns; j++) {
        row += `(${i}, ${j})`;
    }
    console.log(row);
}


let rows= +prompt('How many rows?');
let columns = +prompt('How many columns');

let grid = ''
for (let i = 0; i < rows; i++) {
    let row= '';
    for (let j = 0; j < columns; j++) {
        row += `(${i}, ${j})`;
    }
    grid += row + '\n';
}
console.log(grid);


let sum = 0
sum += 5 // sum = sum + 5
sum += 3 // sum = 5 + 3

str = ''
str += Hello // str = str + 'Hello'


