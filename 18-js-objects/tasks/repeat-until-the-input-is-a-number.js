gimmeNumber();

function gimmeNumber() {
  const INFINITE_LOOP = true;

  while (INFINITE_LOOP) {
    const input = prompt('Gimme number');

    if (input == null || input === '') {
      return null;
    }

    if (isFinite(input)) {
      return +input;
    }
  }
}
