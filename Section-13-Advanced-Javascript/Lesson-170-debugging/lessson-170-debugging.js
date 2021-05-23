// This is a hard function to understand:

/*
 * SD:  I think it reduces the array to a single number using the parameters
 * a and b as the accumulator and current value
 * those a and b values 
 * The function then makes an array out of the values of a and b
  */
const flattened = [[0,1],[2,3],[4,5]].reduce(
  (a,b) => a.concat(b) []);
)

// lets refactor it so it makes sense to us:


// a is the accumulator value of the reduce function,
//b is the initial value which is the iteration over the three
// nested arrays [0,1] and [2,3] and [4,5]
// the accumulator starts off with an' []' empty array so the function starts
// with an empty array and concatenates the array 

// we add console.log function

const flattened = [[0,1],[2,3],[4,5]].reduce(  // reduce loops through the array
                // and ouputs a single value
  (accumulator,array) => {
    console.log('array',array);
    console.log('accumulator',accumulator);
    return accumulator.concat(array) // we need an explicit return because we
                                    // broke the single line function.
    
  },[]);  

  console.log('accumulator',flattened);


  // we can also do this using the debugger
  const flattened = [[0,1],[2,3],[4,5]].reduce(  // reduce loops through the array
    // and ouputs a single value
(accumulator,array) => {
debugger;  // this tells the javascript engine to stop at this line.
            // we can control the function step by step.
            // resume script resumes the script until the next debugging 
            // interrupt
            // step over goes line by line; showing the output as you go.
return accumulator.concat(array) // we need an explicit return because we
                        // broke the single line function.

},[]);  

console.log('accumulator',flattened);



