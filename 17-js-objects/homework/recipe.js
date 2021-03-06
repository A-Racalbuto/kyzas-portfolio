let ingredients = {
  FlourInKg: 0.5,
  MilkInLiter: 1,
  Eggs: 5,
  SaltInG: 20,
};
let instructions = {
  Directions: 'Mix everything together and cook up some pancakes.',
};
let servingTips = {
  Direction1: 'Fill it with some chocolate.',
  Direction2: 'Dust it with powdered sugar',
};

let FullRecipe = Object.assign(ingredients, instructions, servingTips);
console.log(FullRecipe);
