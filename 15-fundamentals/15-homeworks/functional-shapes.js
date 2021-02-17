/**
 * Full rectangle
 * 
 * *****
 * *****
 * *****
 */

console.log(buildFullRectangle(3, 5));

 function buildFullRectangle(rows, columns) {
    let fullRectangle = '';

    for (let row = 0; row < rows; row++) {
        fullRectangle += buildRow(columns);
    }

    return fullRectangle;
}

function buildRow(columns) {
    let row = '';

    for (let column = 0; column < columns; column++) {
        row += '*';
    }

    return row + '\n'
}



/**
 * Empty rectangle
 * 
 * *******
 * *     *
 * *     *
 * *******
 */

console.log(buildEmptyRectangle(4, 7));

// high-level function

function buildEmptyRectangle(rows, columns) {
    const fullRow = buildFullRow(columns);    
    const emptyRows = buildEmptyRows(rows, columns);

    return `${fullRow}${emptyRows}${fullRow}`;
}

// mid-level function

function buildEmptyRows(rows, columns) {
    const rowTemplate = buildEmptyRow(columns);

    let emptyRows = '';

    for (let row = 1; row < rows - 1; row++) {
        emptyRows += rowTemplate;
    }
    
    return emptyRows;
}

// low-level function

function buildFullRow(columns) {
    let row = '';

    for (let column = 0; column < columns; column++) {
        row += '*';
    }

    return row + '\n'
}

function buildEmptyRow(columns) {
    let row = '';

    for (let column = 1; column < columns -1 ; column++) {
        row +=  ' '
    }

    return `*${row}*\n`;
}


/**
 * Right triangle
 * 
 * *
 * **
 * ***
 * ****
 */

console.log(buildRightTriangle(4))

function buildRightTriangle(rows) {
    let triangle = '';

    for (let row = 0; row < rows; row++) {
        triangle += buildRow(row);
    }

    return triangle;
}

function buildRow(rowIndex) {
    let row = '*';

    for (let j = 0; j < rowIndex; j++) {
        row += '*';
    }

    return row + '\n';
}