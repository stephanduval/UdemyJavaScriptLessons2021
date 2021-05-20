// loops review:

const basket = ['apples', 'oranges', 'grapes'];

// for loop
for ( let i = 0; i < basket.length; i++) {
    console.log('for',basket[i]);
}


// forEach loop

basket.forEach(item => {
    console.log('forEach',item);
})

// while loop 
i=0
while (i < basket.length)
{
    console.log('while',basket[i]);
    i++
}

// do While

i = 0
do {
    console.log('do while',basket[i]);
    i++
} while (i < basket.length);



// OKAY NOW THE ADVANCED LOOPS
// for of

for (item of basket) {
    console.log('for of',item);
}


const basketObj = {
    apple: 5,
    oranges: 10,
    grapes: 1000,
}

// for in 
// works with objects
// but we can also use object.keys() or Object.values() or Object.entries()

for (item in basketObj) {
    console.log('for in',item);
}

 

/* In Javascript you can iterate over:
* -arrays
* -strings
*   For objects we:
* - enumerate  
* because properties of an ojbect are enumerable
* and a JS object is enumerable if we can see the properties
* 
*  If we try an interating loop over an object we will get the error
* "object is not iterable"
*
*   HOWEVER, because arrays are objects and have indexes [0] [1] [2]
* If we iterate over them we will return the index of the items 0,1,2,3,4, ..etc
*
*/  

