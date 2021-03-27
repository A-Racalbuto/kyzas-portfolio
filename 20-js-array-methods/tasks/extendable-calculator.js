const calc = {
  operators: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  },

  addOperator(name, func) {
    this.operators[name] = func;
  },

  calculate(expr) {
    // '3 + 7'
    let [left, operator, right] = expr.split(' ');
    left = Number(left);
    right = Number(right);

    return this.operators[operator](left, right);

    // switch (operator) {
    //   case '+':
    //     return left + right;

    //   case '-':
    //     return left - right;
    // }
  },
};

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 7'));

calc.addOperator('*', (a, b) => a * b);

console.log(calc.calculate('3 * 7'));
