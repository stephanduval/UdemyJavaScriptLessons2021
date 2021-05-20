// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John');  //console: false


// #2) Check if this array includes any name that has "John" inside of it. If 
//it does, return that
// name or names in an array.

// Stephan: this beat's my crappy loop answer:

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered
// as a parameter

const hundieExp = (num) => num**100;

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result


const hundieExp = (10000) => num**100; 

// infity
// it overflowed the buffer

