function printNumbers(from, to) {
  let num = from;

  const id = setInterval(() => {
    if (num <= to) {
      console.log(num);
      num++;
    } else {
      clearInterval(id);
    }
  }, 1000);
}

// Alternative
function printNumbers(from, to) {
  let num = from;

  const id = setInterval(() => {
    if (num > to) {
      clearInterval(id);
    }
    console.log(num);
    num++;
  }, 1000);
}

// Nächste Aufgabe
function printNumbers(from, to) {
  let num = from;
  console.log(num);
  num++;

  waitAndPrint(num, to);
}

function waitAndPrint(num, max) {
  if (num > max) {
    return;
  }

  setTimeout(() => {
    console.log(num);
    num++;
    waitAndPrint(num, max);
  }, 1000);
}
