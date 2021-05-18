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
 *   "the fucntion ran but it still remembers the references to the variables"
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

// Composed
/* create a function called compose that takes parameters 'f','g' that returns a
 * function that takes parameter 'a' that returns a function that
 */

// the function comopose takes two functions and a integer, 
// It's compose
const compose = (f ,g) => (a) => f(g(a));
// Sum adds one to the number
const sum = (num) => num +1;

// call compose
compose(sum,sum)(5);


/*  PIPING:

This is a bunch of functions strung together: 

reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))))
// 'TEKCUB'


We can clean it up using piping: 

pipe(
  getName,
  uppercase,
  get6Characters,
  reverse 
)({ name: 'Buckethead' })
// 'TEKCUB'


*/  

/*  MORE READING 

https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
https://medium.com/@wpcarro/stop-writing-for-loops-compose-7d4ac507bd36
https://medium.com/@wpcarro/stop-writing-for-loops-reduce-a25a7dae5ad5#.ex8jpci2m

*/   


// Avoiding side effects, functional purity = determinism

/*What is a side effect?   Anything that is not explicitly returned by
 * a function.  Pure functions are deterministic.  The same input will always
 * return the same value.   This prevents bugs.
 */

/* This fucntion changes the global variable a, and doesn't return it.
 * This creates a hidden side effect. not good 
 * Even Console.log creates a 'hidden' side effect
 * 
 */

var a = 1;
function b() {
    a = 2;
}


