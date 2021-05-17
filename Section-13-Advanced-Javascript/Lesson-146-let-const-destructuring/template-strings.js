//Template Strings

// The old and frankly uncool way of using dynamic strings

const greeting =
    "Hello "
    + name
    + " you seem to be doing "
    + greeting
    + " !"

/* This is the new cool way:  TEMPLATE STRINGS
 * `` - > Backticks above the tab key open an close a template string
 * inside a template string, double quotes "" and single quotes ''
 * are treated as part of the string.
 * variables and expressions can be inserted inside a template string using 
 * the dollar sign and curly braces ${variable or expression}
 */

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;

/* put the greting inside a function
* Note: The function will still take arguments, but we have coded
* default arguments in case it is called as a blank
 */ 

function greet(name = '', age = 30 pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
    }