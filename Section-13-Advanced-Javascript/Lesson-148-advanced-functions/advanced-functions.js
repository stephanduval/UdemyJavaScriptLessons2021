// Advanced functions

/*
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;        
}

*/

// Refactor the function using arrows to the new JavaScript Syntax:

const first = () => {
    const greet = 'Hi';  // This can be a constant because each funtion has a 
                        // new scope
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();  // what newfunction returns becomes newFunc
newFunc();

/* Closures 
 *   "the fucntion ran but it still remembers the references to the variaables"
 * The Child scope always had reference to the parent scope
 * This is why the second function can use a constant - "greet" that is declared
 * in it's parent function
 * Children scope dont have access to their parents'
 */


// Currying - Converting a function that takes multiple arguments into a
// function that takes one at a timwe
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
// returns the remaining part of the function:
 curriedMultiply(3)(4);
// returns 12
/* breaking down currying:
 * const curriedmultiply = (a) => (b) => a * b;
 * Passing a argument into a returns a function: (b) => a * b
 * passing a second arugment into the returned function resolves the function
 * returning a * b 
 */ 
const multiplyBy5 = curriedMultiply(5); 
// now passing a value into multiplyby5(*) will multiply that number with
// curriedMultiply with a value of 5, 