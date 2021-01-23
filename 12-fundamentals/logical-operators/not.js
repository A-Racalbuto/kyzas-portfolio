let year = 1982;
let isGenZ = year > 2000;
let isNotGenZ = !isGenZ; // year <= 2000;



/* Alle drei  commands (zwei Kommentare und der aktive) sagen das Gleiche aus */
let myVariable;
// let hasAValue = myVariable !== undefined && myVariable !== null;
// let hasAValue = !(myVariable === undefined) && !(myVariable === null);
let hasAValue = !(myVariable === undefined || myVariable === null); // DeMorgan Law
if (hasAValue) {
    alert(myVariable);
}


/* Really explicit */
let isUndefined = myVariable === undefined;
let isNull = myVariable === null;
let hasNoValue = isUndefined || isNull;
let hasAValue = !hasNoValue;


/* The most concise */
let hasAValue = myVariable != null;

if (hasAValue) {
    alert(myVariable);
}