alert("Hi there!"); alert("How are you?") //man kann es mehrere Befehle in eine Zeile schreiben

alert(2 +   //Befehle können über mehrere Zeilen gehen, not recommended though
    3
    +
    5)

    
/* semicolons (;) are optional in JS */

/* declare a variable */
let bagOfApples

/* assign a value to the variable */
bagOfApples = 5

/* declare and assign */
let bagOfBananas = 6

alert(2 * bagOfApples + bagOfBananas) // magic number

let bagsOfApples = 2
let applesInABag = 4
let bagsOfBananas = 1
let bananasInABag = 6
let totalFruit = 
    bagsOfApples * applesInABag +
    bagsOfBananas * bananasInABag +
    3 * applesInABag

bagsOfApples = 3 // der Variable einen neuen Wert gegeben

alert(totalFruit)
alert("Total fruit: " + totalFruit)

// let bagsOfApples = 250 // funktioniert nicht, weil die Variable nur einmal definiert werden kann mit "let"

// applesInABag = bananasInABag // gibt applesInABag den Wert von bananasInABag, nämlich 6