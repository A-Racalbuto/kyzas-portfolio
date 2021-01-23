/**
 * The online shop asks the user for the price and quantity of two items,
 * and outputs the amount of the total sale.
 */

 // two items
 // for each item, get price and quantity from user
 //     get price1 -> prompt()
 //     get quantity1 -> prompt()
 //     get price2 -> prompt()
 //     get quantity2 -> prompt()
 // calculate total sale -> price1 * quantity1 + price2 * quantity2
 // output it -> alert() / console.log()

 /* Get price and quantity for first item */
 let price1;
 let quantity1;

 price1 = prompt("Give me the first item's price", 0)
 quantity1 = prompt("Give me the first item's quantity", 0)

 /* Get price and quantitiy for second item */
 let price2 = prompt("Give me the second item's price", 0)
 let quantity2 = prompt("Give me the second item's quantity", 0)

 /* Calculate the total sale */
let total1 = price1 * quantity1
let total2 = price2 * quantity2
let total = total1 + total2

/* Show the result to the user */
alert(`The total amount is ${total}.`)