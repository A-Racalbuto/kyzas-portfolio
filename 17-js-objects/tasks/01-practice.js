let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Check ob object leer ist
function isEmpty(object) {
  for (let key in object) {
    return true;
  }
  return false;
}

// Alternative mit Counter
function howManyProperties(obj) {
  let props = 0;
  for (let key in obj) {
    props++;
  }
  return props;
}

// Summe bilden
function sum(object) {
  let sum = 0;
  for (let key in object) {
    sum += object[key];
  }
  return sum;
}

// Bedingte Multiplikation mit 2 - eigener Versuch
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (isNaN(obj[key]) === false) {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}

// Bedingte Multiplikation mit 2 - Websitelösung
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}
