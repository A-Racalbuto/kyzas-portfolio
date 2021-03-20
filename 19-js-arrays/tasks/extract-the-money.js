console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('€420'));
console.log(extractCurrencyValue('¥69'));
console.log(extractCurrencyValue('ITL1936.27'));

/* Erster Versuch */
function extractCurrencyValue(str) {
  return +str.slice(1); // Funktioniert nicht für ITL1936.27
}
