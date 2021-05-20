// ECMAScript 2019

//.flat()  
// Is a method that can be used on arrays

const array = [1,2,3,4,5];
array.flat();
// console: [1, 2, 3, 4, 5]
// does nothing.  however with nested arrays

const array2 = [1,[2,3],[4,5]];
array2.flat();
//console: [1, 2, 3, 4, 5]

// it flattens it to a single array

const array3 = [1,2,[3,4,[5]]];
array3.flat();
// console: [1, 2, 3, 4, [5]]


// but only one level... unless we use a parameter to flatten it multiple layers
// you can flatten beyond the layers and it does nothing bad
array3.flat(2);
array3.flat(50);
//console: [1, 2, 3, 4, 5]


const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat();
// console reads: (3) ["bob", "sally", "cindy"]
// it cleans up the empty spaces in the array


// flatMap()
const nameList = [[["Aaryn"], "Aayan", "Abdihakim"], "Abdirahman", [[["Sally"]]]];
const nameListscary = nameList.flatMap(aName => aName + 'boo');
// console: ["Aaryn,Aayan,Abdihakimboo", "Abdirahmanboo", "Sallyboo"]
// it only goes to a depth of 1


/// trim

const userEmail = '     eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com             '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())


// fromEntries
// It transforms a list of key value pairs into an object

userProfiles = [['commanderTom',23],['derekZlander',40],['hansel',18]]
// we want to create an object where each user name is associated with an age
const obj = Object.fromEntries(userProfiles);
Object.entries(obj); // converts it back to an array


// try catch block
// allows us to try a piece of code and catch any errors

try {
a+5;   // a+ 5 this does not compute
} catch {
console.log('you messed up')
}

// with the error type added in:


try {
    a+5;   // a+ 5 this does not compute
    } catch (errorvariable) {
    console.log('you messed up ' + errorvariable)
    }
    

try {
    4+5;   // 4 + 5 this does  compute
    } catch {
    console.log('you messed up')
    }