// if (condition) {
//     statement;
//     anotherStatement;    
// }

/* ---- First try ---- */
// let year = +prompt('In which year was ECMAScript-2015 specification published', '');
// let answerIsRight = year === 2015;
// let answerIsWrong = year !== 2015;
// if (answerIsRight) {
//     alert('You are right!');
// }
// if (answerIsWrong) {
//     alert('You are wrong!');
// }


/* ---- Second try - better ---- */
// let year = +prompt('In which year was ECMAScript-2015 specification published', '');
// let answerIsRight = year === 2015;
// if (answerIsRight) {
//     alert('You are right!')
// } else {
//     alert('Nope...')
// }


/* ---- Third try - even better ---- */
// let year = +prompt('Gimme the year')
// if (year < 2015) {
//     alert('Too early')
// } else {
//     if (year > 2015){
//         alert('Too late')
//     } else {
//         if ( year == 2015) {
//             alert("You're right!")
//         }
//     }
// }


/* ---- Fourth try - simplified to else if ---- */
let year = +prompt('Gimme the year')
if (year < 2015) {
    alert('Too early')
} else if (year > 2015) {
    alert('Too late')
} else {
    alert("You're right!")
}


/**
 * Pissible use of an if-else: assigning a value conditionally
 */
let yearOfBirth = prompt('What is your year of birth?')
let message;
if (yearOfBirth > 2000) {
    message = "You're a Gen Z!";
} else {
    message = "You're not a Gen Z!";
}
alert(message);


/**
 * Ternary operator (or conditional operator '?')
 */
let yearOfBirth = prompt('What is your year of birth?')
let message = yearOfBirth > 2000 ? "You're a Gen Z!" : "You're not a Gen Z!"
alert(message)


/**
 * Alternative shape of the conditional operator '?'
 */
let yearOfBirth = prompt('What is your year of birth?')
let message = yearOfBirth > 2000
    ? "You're a Gen Z!"
    : "You're not a Gen Z!"
alert(message)


/**
 * Same as the one three positions above but here "message" is used
 * and the "alert" only once at the end which makes it easier to be changed e.g. to "console.log"
 */
let year = +prompt('Gimme the year')
if (year < 2015) {
    message = 'Too early';
} else if (year > 2015) {
    message = 'Too late';
} else {
    message = "You're right!";
}
alert(message)


/**
 * Cascading ternary operator -> should not be used
 */
let year = +prompt('Gimme the year')
let message = year < 2015
    ? 'Too early'
    : (year > 2015
        ? 'Too late'
        : "You're right!");
alert(message)


/**
 * First calculator
 */
let num1 = +prompt('Gimme num1')
let num2 = +prompt('Gimme num2')
let operation = prompt('Gimme operation', 'sum')
let result = operation === 'sum' ? num1 + num2 : num1 - num2;
alert(result);