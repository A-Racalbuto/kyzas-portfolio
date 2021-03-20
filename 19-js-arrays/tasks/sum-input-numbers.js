function sumInput() {
  const arr = [];

  let input = prompt('First number plz');
  while (input != null && input != '' && isFinite(input)) {
    arr.push(+input);
    input = prompt('Next number plz');
  }

  /* for loop with index */
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  /* for loop with index - alternative */
  // let sum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  /* for..of loop */
  // let sum = 0;
  // for (let item of arr) {
  //   sum += item;
  // }

  /* for..of loop - alternative*/
  // const [first, ...rest] = arr;
  // let sum = first;
  // for (let item of rest) {
  //   sum += item;
  // }

  /* array method: reduce */
  const sum = arr.reduce((acc, item) => acc + item, 0);

  return sum;
}
