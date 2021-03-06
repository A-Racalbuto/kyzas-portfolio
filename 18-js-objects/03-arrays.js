const obj = {
  key1: 'value1',
  key2: 'value2',
}; // object literal
// const obj = new Object(); --- Alternative Schreibweise aber nicht empfehlenswert

const arr = ['value1', 'value2', 42]; // array literal
// const arr = new Array(); --- Alternative Schreibweise aber nicht empfehlenswert

arr[0]; // 'value1'
arr[1]; // 'value2'
arr[2]; // 42

const user = {
  name: 'Antony',
  age: 38,
  body: [
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    'nose',
    'brain',
    'torso',
  ], // Array in Object
};

user.body[1] = 'right ear'; // ersetzt 'right arm' mit 'right ear'
user.body[user.body.length] = 'head'; // fügt 'head' im body hinzu
user.body.push('feet'); // alternative Schreibweise, um Werte ('feet') hinzuzufügen (dem body)
