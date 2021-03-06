/**
 *    *
 *   ***
 *  *****
 * *******
 *
 * 1. How do I build this triangle?
 *    1a. how to concatenate multiple rows together
 *    1b. how to build one row?
 *        1bI. how to build the spaces?
 *        1bII. how to build asterisks?
 */

testBuildTriangle();

function testBuildTriangle() {
  console.log(buildTriangle(4));
}

function buildTriangle(rows) {
  const lastRow = rows - 1;
  let triangle = '';
  for (let i = 0; i < rows; i++) {
    triangle += buildRow(i, lastRow) + '\n';
  }
  return triangle;
}

// testBuildRow();

function testBuildRow() {
  const lastRow = 3;
  console.log(buildRow(0, lastRow));
  console.log(buildRow(1, lastRow));
  console.log(buildRow(2, lastRow));
  console.log(buildRow(3, lastRow));
}

function buildRow(row, lastRow) {
  return buildSpaces(row, lastRow) + buildAsterisks(row);
}

// testBuildSpaces();

function testBuildSpaces() {
  const lastRow = 3;
  console.log(buildSpaces(0, 3) + buildAsterisks(0));
  console.log(buildSpaces(1, 3) + buildAsterisks(1));
  console.log(buildSpaces(2, 3) + buildAsterisks(2));
  console.log(buildSpaces(3, 3) + buildAsterisks(3));
}

function buildSpaces(row, lastRow) {
  const limit = lastRow - row;
  let spaces = '';
  for (let i = 0; i < limit; i++) {
    spaces += ' ';
  }
  return spaces;
}

function testBuildAsterisks() {
  console.log(buildAsterisks(0));
  console.log(buildAsterisks(1));
  console.log(buildAsterisks(2));
  console.log(buildAsterisks(3));
}

function buildAsterisks(row) {
  const limit = row * 2 + 1;
  let asterisks = '';
  for (let i = 0; i < limit; i++) {
    asterisks += '*';
  }
  return asterisks;
}
