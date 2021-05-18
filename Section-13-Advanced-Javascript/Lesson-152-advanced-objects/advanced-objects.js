// Advanced objects

// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// object 1 === object 2 because object 2 references object 1
// object 3 != object1   object3 !=object2

// [] != []  because arrays are also objects



//context vs scope

// scope is created within curly brackets
function() {
    let a = 4;
}
console.log(a)  // will create an error because a is not defined in this scope

// context tells you where we are in the object:
console.log(this);
console.log(this) === window; // Console readout:   true

this.alert("hello");
// produces the same result as:
window.alert("hello");
// 'this' means the object envionment that we are in right now.

//REVIEW:
//THIS IS THE

function a() {
    console.log(this);
}

//SAME AS:

const a = () => console.log(this)

/* In the above examples 'this' occurs in the window environment, since
 * their parent fuction exists in the window environment
 * to find a context outside of the window envirment we will create an
 * object
 */

const object4 = {
    a: function () {
        console.log(this);
    }
}

// if we ran object4.a then the console reads:

/* 
object4.a()
object4.a
ƒ () {
        console.log(this);
    }
*/


// instantiation

//making instances or multiple copies of an object
// every time you make a copy of an object the constructor is run and creates
// the defined properties for the object.  We use 'this' so that we can access
// the name and type property within the particular instance of that class.
// this means we don't have too use the instance name
// introduce is a method in the class

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// We can add more properties to an object by creating a class
// that extends an object and inherits it's properties
// It still needs a constructor and you need to define a super with the
// properties you want to pass to the parent constructor (like name and type)
//

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)

    }
    play() {
        console.log(`Weeeeee I'm a ${this.type}`);
    }
}

// this is how we will create new wizard objects:
const wizard1 = new Wizard('Stephan', 'Healer');
const wizard2 = new Wizard('Shelly', 'Dark Magic');