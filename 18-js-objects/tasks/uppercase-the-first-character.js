function ucFirst(str) {
  const firstChar = str[0];
  const rest = str.slice(1);
  return firstChar.toUpperCase() + rest;
}

console.log(ucFirst('antony'));
console.log(ucFirst('angelo'));
console.log(ucFirst('giada'));
