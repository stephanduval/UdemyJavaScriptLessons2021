var a = 5;
var b = 10;
bar b = a; // b = 5

b++;  //add 1 too b


let obj1 = {name: 'yao', passowrd: '123'};
let obj2 = obj1;  // it refers to the address in memory

obj2.password = 'easypeasy';

console.log(obj1);

/* console reads:  
 {name: "yao", passowrd: "123", password: "easypeasy"}name: "yao"passowrd: "123"password: "easypeasy"__proto__: Object
undefined


This is because the value isn't stored in object2, object2 refers to the value that is stored in object1.   
changes to the object are routed to the holder of the value in the same way as calls for the value.

Why is this good?   
- It saves space in memory.  
- 

 */

// Arrays are objects and work in the same way.

var c = [1,2,3,4,5];
var d = c;

d.push(1231312312);

console.log(d);
/* console reads:
(6) [1, 2, 3, 4, 5, 1231312312]
*/

// if we want d to be a unique array we can concatenate c and assign d that value

var d= [].concat(c);
d.push(11111)
console.log(c)
console.log(d)
/* console reads:
(6) [1, 2, 3, 4, 5, 1231312312]
VM85:3 (7) [1, 2, 3, 4, 5, 1231312312, 11111]
*/

// Cloning an object is more difficult:

let obj = {a: 'a', b: 'b', c: 'c'};

let clone = Object.assign({}, obj);

/* The Object.assign() method copies all enumerable own properties from one or 
 * more source objects to a target object. It returns the target object.
 * 
 * Object.assign(target, ...sources)
 * 
 * target
The target object — what to apply the sources’ properties to, which is returned after it is modified.
// {} copies to an empty object

sources
The source object(s) — objects containing the properties you want to apply.
obj is the object referred to one line 56
*/

obj.c = 5;
console.log(clone);
console.log(obj);

/* Console Reads:
{a: "a", b: "b", c: "c"}a: "a"b: "b"c: "c"__proto__: Object
undefined
obj
{a: "a", b: "b", c: 5}
*/

// the cloned object was not affected by the value change

// we can also copy an object using the spread operator {...thing}
// This is a new feature
let clone2 = {...obj};
clone.c = 2;
console.log(clone);
console.log(clone2);
/* Console Reads:
{a: "a", b: "b", c: 2}a: "a"b: "b"c: 2__proto__: Object
VM67:3 {a: "a", b: "b", c: 5}  

clone2 was not moodified
*/


// what about objects in objects?
let obj ={
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
   }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c.deep = 'hahahaa';
console.log(obj); 
console.log(clone);
console.log(clone2);

/*  Oh fuck, the object within the object was changed for all the clones.
Because we did a shallow clone.
CONSOLE READS:

{a: "a", b: "b", c: {…}}a: "a"b: "b"c: {deep: "hahahaa"}
__proto__: Object
VM112:2 {a: "a", b: "b", c: {…}}a: "a"b: "b"c: {deep: "hahahaa"}
__proto__: Object
VM112:3 
{a: "a", b: "b", c: {…}}
a: "a"
b: "b"
c:
deep: "hahahaa"
__proto__: Object
*/

// Because the deep object has its own adress in memory.
// How can we do deep cloining?   JSON
// stringify turns everything into a string and then parse turns it into an
//Object.
let superClone = JSON.parse(JSON.stringify(obj));
console.log(obj); 
console.log(clone);
console.log(clone2);
console.log(superclone);