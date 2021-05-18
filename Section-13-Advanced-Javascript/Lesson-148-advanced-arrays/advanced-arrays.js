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

const newArray = array.forEach((num) => {
    double.push(num * 2);  // we are pushing onto the array as we loop though 
                           //it
})

console.log('for Each',double);

// STOP  LOOPING!

// Map, Filter, Reduce


// Map

const mapArray = array.map((num) => {
    return num * 2;
})

console.log('map', mapArray);


//  Filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// Reduce