console.log(truncate('Short', 20));
console.log(truncate('This is a long, long string.', 20));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }

  return str;
}
