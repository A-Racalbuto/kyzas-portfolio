/**
 * GenZ is an application that asks the user for their year
 * of birth, ten outputs true if the user is a GenzZ and false if
 * the user is not a GenZ.
 * 
 * A GenzZ is anybody born after the year 2000.
 */

 // ask the user for their year of birth
 // genz born after 2000
 // output true/false, depending on  genz or not

let yearOfBirth = prompt("What is your year of birth?");
yearOfBirth = Number(yearOfBirth);
let isGenZ = yearOfBirth > 2000;
alert(`User is a GenZ: ${isGenZ}`);