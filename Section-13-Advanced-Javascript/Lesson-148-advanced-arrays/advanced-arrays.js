// Advanced Arrays


/*  This is the wrong way; we aren't saving the values to the new variable
 *   
const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => {
    num * 2;
})

console.log(newArray);
*/


const double = []
const array = [1, 2, 10, 16];

console.log('array', array);

const newArray = array.forEach((num) => {
    double.push(num * 2);  // we are pushing onto the array as we loop though 
                           //it
})

console.log('for Each',double);

// STOP  LOOPING!

// map, filter, reduce


// map

const mapArray = array.map((num) => {
    return num * 2;
})

console.log('map', mapArray);


//  filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce
// reduce is very powerful, it can filter, map and more...

// accumulator, often acc can be any name
// accumulator keeps the last returned value from the reduce() function


const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);  // 5 is the starting value of the accumulator

console.log('reduce', reduceArray);

