// Symbol  sym
// This is one of the seven types of Javascript data structures

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

/* Symbols are entirely unique and are not equivalent even if they have the 
 * same values
 */ 

/*  CONSOLE OUTPUT
sym1
Symbol()
sym2
Symbol(foo)
sym3
Symbol(foo)
sym2 === sym3
false  
*/


