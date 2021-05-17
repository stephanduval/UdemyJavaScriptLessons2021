// let + const


/* with let anytime its wrapped around a curly bracket
 * it changes it's scope.   The let statement in if (){*}
 * is in a different scope than the window let on the 
 * third reltative line of the code 
 * "let wizardLevel = false;"
 * if we swapped let for var then the if statement would
 * change the value of wizardLevel in the parent scope
 * AND the if statement
 * 
 * var assigns a global variable, let assigns a SCOPED
 * variable
 */ 



const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log(wizardLevel);

/* OUPUT
 * inside true
 * false
 */



const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
    var wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log(wizardLevel);

/* OUPUT
 * inside true
 * true
 */


/* TAKEAWAY:  Always use let instead of var because
 * it is block {} scoped and won't inherit a unexpected
 * value if its already been assigned one outside
 * the scope of your statement or function
 */ 


// =================== CONSTANTS const

/* Constants cannot be updated or changed once
 * they've been declared
 */


/* if an object is assigned to a constant then you can
 * change the properties of the object, but you cant 
 * reassign the object itself.
 * example below:
 */

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

/* Console:
 *{player: "bobby", experience: 100, wizardLevel: false}
 *
 * obj.wizardLevel = true;
 * true
 * obj
 * {player: "bobby", experience: 100, wizardLevel: true}
 *
 *
 * obj = 5;
 * VM1831:1 Uncaught TypeError: Assignment to constant variable.
 */
