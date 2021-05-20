//Evaluate these:
//#1
[2] === [2] 

// Stephan's Answer: 
// false 
{} === {}

// Stephan's Answer: 
// false  

//#2 what is the value of property a for each object.
const object1 = { a: 5 };  // Stephan's Answer: 5
const object2 = object1;  // Stephan's Answer: 5
const object3 = object2;  // Stephan's Answer: 5
const object4 = { a: 5}; // Stephan's Answer: 5
object1.a = 4; // Stephan's Answer: 4

// Stephan's Answer: value of a for all ojects is 4, EXCEPT object4.a === 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name,type,color){
    super(name,type,color) 
    }
    sound() {
        console.log(`moooo ${name}, is a ${type} and I am ${color}  )
    }
}