// Verbesserter Do-While-Loop von Antony
let grade2;
let counter2 = 0;
let sumOfGrades2 = 0;

do {
    grade2 = +prompt('Enter the grade');
    if (grade2) {
    sumOfGrades2 += grade2;
    counter2++;
    }

} while (grade2 > 0 && grade2 < 7);

let avrGrade2 = sumOfGrades2/counter2;
alert('The average grade has been calculated successfully. Your average grade is: ' + avrGrade2.toFixed(1));