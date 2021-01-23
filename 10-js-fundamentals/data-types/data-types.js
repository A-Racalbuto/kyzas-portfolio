/* Numbers */

let integer = 123 // integer
let floatingPoint = 123.456 // floating point

console.log(integer)


/* Strings */

let singleQuote = 'Single quotes' 
let doubleQuote = "Double quotes"
let multiLine = 'First row \n' + 'Second row'
let singleQuotes = 'Single quotes allow quoted text \n like \'this\' or "this", nice!'
let doubleQuotes = "Double quotes allow quoted text like \"this\" or 'this', nice!"
let templateLiteral = `A template literal doesn't care about "quotes" or 'quotes'
    and allows for
                                multi-line strings`

console.log(singleQuote, doubleQuote)
console.log(singleQuotes)
console.log(doubleQuotes)
console.log(templateLiteral)
console.log(multiLine)

let apples = 4
let oranges = 6

console.log('I have ' + apples + ' apples and ' + oranges + ' oranges.')
console.log('I have', apples, 'apples and', oranges, 'oranges')

let sentence = `I have ${apples + 3} apples and ${oranges} oranges`
console.log(sentence)

let anotherSentence = `I have ${apples} apples` // Doesn't work with '' or "", only wth the template literal ``
console.log(anotherSentence)


/* Booleans */

let amIHappy = false
let amITired = true
let isItAfternoon = false

console.log(amIHappy, amITired, isItAfternoon)

let isFourGreaterThanOne = 4 > 1
console.log(isFourGreaterThanOne)

let areYouHappy = null // no value, or I don't know yet
let yourAge = null


// user tells me they're happy

areYouHappy = true
yourAge = 38

console.log(areYouHappy)
console.log(yourAge)


// Undefined
let myFavouriteNumber

myFavouriteNumber = 0
myFavouriteNumber = 42
myFavouriteNumber = null

console.log(myFavouriteNumber)

let sum = undefined

let kiwis = 2
let cherries = 3

sum = kiwis + cherries

console.log(sum)

prompt('How are you doing?')

/**
 * every
 * comment
 * line
 * is
 * indented
 * automatically
 * with
 * double star
 * comment
 */