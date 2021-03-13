// state -> properties
// behaviour -> methods

let calculator = {
  read() {
    this.num1 = +prompt('Value 1 please');
    this.num2 = +prompt('Value 2 please');
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
