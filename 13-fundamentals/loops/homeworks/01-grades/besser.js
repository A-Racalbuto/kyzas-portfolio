// Verbesserter Do-While-Loop von Antony
let grade2;
let counter2 = 0;
let sumOfGrades2 = 0;

do {
    grade2 = +prompt('Enter the grade');
    if (grade2)
    sumOfGrades2 += grade2;
    counter2++;
    }

} while (grade2 > 0 && grade2 < 7);

let avrGrade2 = sumOfGrades2/counter2;
alert('The average grade has been calculated successfully. Your average grade is: ' + avrGrade2.toFixed(1));



// Tiago's Nachfrage

let counter = 0;
let gradeString = prompt('Enter your grade', '');
let sumOfGrades = 0;

while (gradeString != null && gradeString !== '' && gradeString >= 0) {
    let grade = Number(gradeString);
    sumOfGrades += grade;
    counter++;
    gradeString = prompt('Enter your grade', '');
}

let avrGrade = sumOfGrades/counter
alert('Your average grade is: ' + avrGrade.toFixed(2));


// Bobby's Versuch
let finalScore = 0;
for (i=0;;i++) {
    let grades = +prompt("Please enter grade " + (i+1))
    finalScore += grades;
    if (!grades) {
        alert(finalScore/i);
        break
    }
}

    // Verbesserung
    let sum = 0;
    for (let grades=0;;grades++) {
        let grade = +prompt("Please enter grade " + (grades + 1));
        sum += grade;
        if (!grades) {
            alert(sum/grades);
            break
        }
    }


    // Verbesserung, weil der Ansatz do until falsy schlechter ist als do while truthy
    let sum = 0;
    let grades = 0;
    let grade = +prompt("Please enter grade " + (grades + 1));
    for (; grade;grades++) {
        sum += grade;
        grade = +prompt("Please enter grade " + (grades + 1));
    }