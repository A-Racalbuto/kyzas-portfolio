/* Function declaration */
function sum(a, b) {
    return a + b;
}


/* Function expression */
const sum = function (a, b) {
    return a + b;
};


/* Arrow function */
const sum = (a, b) => {
    const result = a + b;
    return result;
};

const sum = (a, b) => {
    return a + b;
};
const sum = (a, b) => a + b; // Alternative Schreibweise


// Weitere Beispiele
const shout = (str) => str.toUppercase();
const yell = (str, excl = '!!!') => str + excl;
const html = (str, tag = "h1") => `${tag}${str}${tag}`;



// Rewriting a function from 02-function-expressions.js
const ask = (question, handleYes, handleNo) => {
    let answer = confirm(question);
    if (answer) {
        handleYes();
    } else {
        handleNo();
    }
}

ask(
    'Did you understand?',
    () => alert('Awesome!'),
    () => alert('I will repeat it once more.')
);


const onHungry = () => console.log('Then eat!');
const onNotHungry = () => console.log('Then drink!');

ask('Are you hungry?', onHungry, onNotHungry)