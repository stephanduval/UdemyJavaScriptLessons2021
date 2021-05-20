// Type Coercion  - Truthy and Falsy
// resource:
// Javascript eaulity table
//https://dorey.github.io/JavaScript-Equality-Table/

1 == '1'
// console: true 
// the string is converted to a number for the comparison

// do all languages have type coercion?   
// YES
// Javascript has a heavy coercion because its dynamically typed

1 === '1'
// console: false
// this means dont coerce the values

if (1) {
    console.timeLog(5)
} 
// JAvascript coerces 1 to be true



if (0) {
    console.timeLog(5)
} 
// JAvascript coerces 1 to be false

-0 === +0
// console returns true

Object.is(-0,+0)
//console returns false
//The Object.is() method determines whether two values are the same value.


NaN === NaN
//console returns false
Object.is(NaN,Nan)
//console returns true