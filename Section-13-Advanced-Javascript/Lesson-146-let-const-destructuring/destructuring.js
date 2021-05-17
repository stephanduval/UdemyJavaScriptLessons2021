const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}


/* How we grab the properties of an oject 
 * without destructuring:
 */

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

/* This is how we do it in a destructured format 
 * After these lines of code we can use the 
 * constants player, experience and the variable
 * wizardLevel 
 */

const { player, experience } = obj;
let { wizardLevel } = obj;

/* Dynamic property values in a object:
 * 
 */

const name = 'john snow';

const obj = {
    [name]: 'hello',
    [1+2]: 'hihi'
}

/* Console readout: 
 * obj
 * { 3: "hihi", john snow: "hello" }
 * 3: "hihi" john snow: "hello"__proto__: Object
 */


const a = "simon";
const b = true;
const c = {};  // an empty object


// now we add them to an object the lame way:

/* 
const obj = {
    a: a,
    b: b,
    c: c,
}
*/

// Or the cool way (if the propery and value are the same)

const obj = {
    a,
    b,
    c
}


