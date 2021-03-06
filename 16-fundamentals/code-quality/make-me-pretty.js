const shout = (str) => str.toUppercase();
const yell = (str, excl = '!!!') => str + excl;
const html = (str, tag = 'h1') => `${tag}${str}${tag}`;

let result = 'hello';
result = shout(result);
result = yell(result);
result = html(result);
console.log(result);
