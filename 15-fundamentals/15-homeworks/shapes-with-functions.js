
// function for full row
function createFullRow (columns) {
    let fullString = '';

    for (let i = 0; i < columns; i++) {
        fullString += '*';
    }

    return fullString;
}


// function for empty row
function createEmptyRow (numColumns) {
    let emptyString = '*';

    for (let i = 0; i < numColumns - 2; i++) {
        emptyString += ' ';
    }

    emptyString = emptyString + '*';
    return emptyString;
}


// function for building full rectangle
function builFullRectangle () {
    let numRows = +prompt('How many rows would you like?');
    let numColumns = +prompt('How many columns would you like?');
    let fullString = createFullRow(numColumns);
    let fullRectangle = '';

    for (let i = 0; i < numRows; i++) {        
        fullRectangle += fullString + '\n';
    }

    console.log(fullRectangle);
}


// function for building empty rectangle
function buildEmptyRectangle () {
    let numRows = +prompt('How many rows would you like?');
    let numColumns = +prompt('How many columns would you like?');
    let emptyString = createEmptyRow(numColumns);
    let emptyTorso = '';
    let emptyRectangle = '';

    for (let i = 0; i < numRows - 2; i++) {        
        emptyTorso += emptyString + '\n';
    }

    let fullString = createFullRow(numColumns);

    emptyRectangle = fullString + '\n' + emptyTorso + fullString;

    console.log(emptyRectangle);
}


// User request for rectangle
let typeChoice = prompt('Which type of rectangle do you want? Choose "full" (or 1) or "empty" (or 2) !');

if (typeChoice === 'full' || typeChoice === '1') {
    builFullRectangle();

}   else if (typeChoice === 'empty' || typeChoice === '2') {
        buildEmptyRectangle();
    }

    else {
        alert('Please type in either "full"/"1" or "empty"/"2" to run the code!');
    }