/**
 * Part B3 - String Manipulation
 * JavaScript Assessment 2.
 */


/**
 * ------------
 * B3.2 - Define the strings
 * ------------
 */

// myString created
const myString = "This is a string";
// anotherString created with three spaces at the 
// start
const anotherString = "   Another string"
// Hello there string as per the question
const hello = "Hello there!";
// myName stores my actual real name Mohannad
const myName = "Mohannad";

console.log("B3.2 myString      :", myString);
console.log("B3.2 anotherString :", anotherString);
console.log("B3.2 hello         :", hello);
console.log("B3.2 myName        :", myName);

/**
 * ------------
 * B3.3 - Utilities to find further info 
 * ------------
 */

// Store length of myString in stringLength so
// we can keep consistent console logs rather than
// using myString.length directly
//console.log(myString.length);
const stringLength = myString.length;
// First character of myString
const firstCharacter = myString.charAt(0);
// 11th character of myString
const eleCharacter = myString.charAt(10);

console.log("B3.3 Length of myString: ", stringLength);
console.log("B3.3 First character:    ", firstCharacter);
console.log("B3.3 Eleventh character: ", eleCharacter);