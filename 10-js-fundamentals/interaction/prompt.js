let apples = prompt('How many apples?', 0)
let oranges = prompt('How many oranges?', 0)

apples = parseInt(apples) // parseInt Funktion, damit die Zahl aus dem Prompt nicht als String, sondern Zahl erkannt wird und eine Summe gebildet werden kann
oranges = parseInt(oranges)

let sum = apples + oranges

alert(sum)


//Gleicher Code in nur einer Zeile:
// alert(parseInt(prompt('How many apples?', 0)) + parseInt(prompt('How many oranges?', 0)))