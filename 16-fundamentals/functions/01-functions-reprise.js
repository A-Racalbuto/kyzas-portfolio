// firstTry();

function firstTry() {
  // Kürzere Alternative ohne function aber nicht empfehlenswert
  console.log('Hello world'.toUpperCase());
  console.log('Did you get it?'.toUpperCase());
  console.log("Then let's move on!".toUpperCase());

  // Besser mit der function
  shout('Hello world');
  shout('Did you get it?');
  shout("Then let's move on!");

  function shout(str) {
    console.log(str.toUpperCase());
  }
}

secondTry();

function secondTry() {
  /* str -> STR -> STR!!! -> <h1>STR!!!</h1> */

  /* Normaler Ansatz */
  tryCleanerApproach();
  function tryCleanerApproach() {
    const shoutedStr = 'Hello world'.toUpperCase();
    const yelledStr = `${shoutedStr}!!!`;
    const htmlStr = `<h1>${yelledStr}</h1>`;
    console.log(htmlStr);
  }

  /* Alles in einer Zeile, was more performant ist aber weniger verständlich für den Programmierer */
  console.log(`<h1>${'Smartass'.toUpperCase()}!!!</h1>`);

  /* Smartass way 2 */
  console.log(html(yell(shout('Functional smartass'))));

  /* Mit functions */
  testFunctions('Hello world');
  testFunctions('Did you get it?');
  testFunctions('Awesome!');

  function testFunctions(str) {
    const shoutedStr = shout(str);
    const yelledStr = yell(shoutedStr);
    const htmlStr = html(yelledStr);
    console.log(htmlStr);
  }

  testFewerFunctions('Fewer functions');
  function testFewerFunctions(str) {
    const yelledStr = yell(str);
    const htmlStr = html(yelledStr);
    console.log(htmlStr);
  }

  testDifferentOrder('Different order');
  function testDifferentOrder(str) {
    const yelledStr = yell(str, '?!?!?!?!');
    const htmlStr = html(yelledStr, 'p');
    const shoutedStr = shout(htmlStr);
    console.log(shoutedStr);
  }

  testCrazyOrder('Crazy order');
  function testCrazyOrder(str) {
    let result = str;
    result = html(result);
    result = shout(result);
    result = yell(result);
    console.log(result);
  }

  function shout(str) {
    return str.toUpperCase();
  }

  function yell(str, excl = '!!!') {
    return str + excl;
  }

  function html(str, tag = 'h1') {
    return `<${tag}>${str}</${tag}>`;
  }
}

console.log(Document('Home'));
function Document(title) {
  return `
        <html>
            <head></head>
            <body>
                ${Title(title)}
            </body>
        </html>
    `;
}

function Title(str) {
  return `<h1>${str}</h1>`;
}
