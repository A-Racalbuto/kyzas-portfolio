console.log(
  camelize('background-color') === 'backgroundColor' &&
    camelize('list-style-image') === 'listStyleImage' &&
    camelize('-webkit-transition') === 'WebkitTransition'
);

function camelize(str) {
  const tokens = str.split('-');
  const mappedTokens = tokens.map((token, index) =>
    index ? capitalize(token) : token
  );
  return mappedTokens.join('');

  /* Alternative */
  // return str
  //   .split('-')
  //   .map((token, index) => (index ? capitalize(token) : token))
  //   .join('');
}

// console.log(capitalize('color'));

function capitalize(str) {
  const [first, ...rest] = str.split('');
  return first.toUpperCase() + rest.join('');
}
