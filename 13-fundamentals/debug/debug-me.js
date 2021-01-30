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