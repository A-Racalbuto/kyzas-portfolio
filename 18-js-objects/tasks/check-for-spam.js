function checkSpamWithIfs(str) {
  return (
    str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
  );
}

function checkSpamWithObjects(str) {
  const spam = ['viagra', 'xxx'];

  for (let i = 0; i < spam.length; i++) {
    let word = spam[i];
    if (str.toLowerCase().includes(spam[word])) {
      return true;
    }
  }

  for (let word of spam) {
    if (str.toLowerCase().includes(word)) {
      return true;
    }
  }

  return false;
}
