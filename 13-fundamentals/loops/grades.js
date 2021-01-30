/**
 * Grades is an application that asks the user for grades until the user cancels, and then
 * calculates the average of all grades.
 * 
 * The average is calculated like this:
 * 
 * avg = (grade1 + grad2 + grade3 + ...) / #grades
 */

let counter = 0;
let grade = +prompt('Enter your grade', '');
let sumOfGrades = 0;

while (grade > 0 && grade < 7) {
    if (grade) {
    sumOfGrades += grade;
    counter++;
    }
    grade = +prompt('Enter your grade', '');
}

let avrGrade = sumOfGrades/counter
alert('Your average grade is: ' + avrGrade.toFixed(2));



// Nochmal ohne Hilfe versucht
let counter1 = 0;
let grade1 = +prompt('Please enter your grade');
let sumOfGrades1 = 0;

while (grade1 > 0 && grade1 < 7) {
    if (grade1) {
        sumOfGrades1 += grade1;
        counter1++;
    }
    grade1 = +prompt('Please enter your grade');
}

let avrGrade1 = sumOfGrades1/counter1;
alert('The average grade is: ' + avrGrade1.toFixed(1))



//Das Gleiche aber als Do-While-Loop
let grade2 = +prompt('Enter your grade');
let counter2 = 0;
let sumOfGrades2 = 0;

do {
    sumOfGrades2 += grade2;
    counter2++;
    grade2 = +prompt('Enter the grade');

} while (grade2 > 0 && grade2 < 7);

let avrGrade2 = sumOfGrades2/counter2;
alert('The average grade has been calculated successfully. Your average grade is: ' + avrGrade2.toFixed(1));


// Das Gleiche aber als For-Loop
let counter3 = 0;
let sumOfGrades3 = 0;

for (let grade3 = +prompt('Enter the grade again please'); grade3 > 0 && grade3 < 7; counter3++) {
    sumOfGrades3 += grade3;
    grade3 = +prompt('Enter the grade again');
}

let avrGrade3 = sumOfGrades3/counter3;
alert('The average was calculated and is: ' + avrGrade3.toFixed(1));