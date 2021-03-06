const milk = { color: 'white', quantity: 1 };

const clone = Object.assign({}, milk);

console.log(clone !== milk);
console.log(clone.color === milk.color);
console.log(clone.quantity === milk.quantity);

for (let key in clone) {
  console.log(clone[key] === milk[key]);
}

console.log(JSON.stringify(clone) === JSON.stringify(milk));

// Weiterer Versuch

const milk1 = { color: 'white', quantity: 1 };

shallowClone(milk1);

const user = {
  name: 'Antony',
  age: 38,
  body: {
    heads: 1,
    torsos: 1,
    limbs: 4,
  },
};

shallowClone(user);

function shallowClone(obj) {
  const clone = Object.assign({}, milk1);

  console.log('Not references to same object', clone !== milk1);
  // console.log(clone.color === milk.color);
  // console.log(clone.quantity === milk.quantity);

  for (let key in clone) {
    console.log(`Equal value for ${key}:`, clone[key] === milk1[key]);
  }

  console.log(
    'Equal string representation',
    JSON.stringify(clone) === JSON.stringify(milk1)
  );
}

// Deep Clone
function deepClone(obj) {
  const clone = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}
