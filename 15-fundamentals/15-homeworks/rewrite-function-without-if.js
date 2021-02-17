function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }


  // rewritten with ternary operator
  function checkAge(age) {
    // let value = condition ? value1 : value2;
    return age > 18 ? true : confirm('Did parents allow you?');    
  }

  // rewritten with ||
  function checkAge(age) {
      return age > 18 || confirm('Did parents allow you?');    
  }