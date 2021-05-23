// ECMAScript 2020
// BigInt

// BigInt is a new type

typeof BigInt;
// console reads:  function
typeof 465465415644651454654614654
// console reads:  number

// to get BigInt you put a 'n' after the number

typeof 1n 
// console reads:  bigint

typeof 465465415644651454654614654n
// console reads bigint

// WHY bigint?

/* Javascript has something called MAX_SAFE_INTEGER

It's the maximum number it can use. about 4 quadrillion

We can find it on the console by typing

Number.MAX_SAFE_INTEGER
9007199254740991
COoooool!

BigInt is used when doing math on number larger than MAX_SAFE_INTEGER
i.e.

9007199254740991n + 100n = 9007199254741091n
9007199254740991 + 100   = 9007199254741092
... apparently it works anyway. despite what the teacher says.  there was an update

It works for all lower numbers too:
1n+ 4n = 5n
*/

// Optional Chaining Operator - ?


let will_pokemon = {
  pikachu: {
    species: 'Mouse',
    height: 0.4,
    weight: 6
  }
}

let andrei_pokemon = {
  raichu: {
    species: 'Mouse',
    height: 0.4,
    weight: 30,
    power: null
  }
}


let weight = will_pokemon.pikachu.weight;
console.log('Weight: ',weight);


// there is no pikachu oobject in andre_pokemon so it will cause an error
/*
let raichu_weight = andrei_pokemon.pikachu.weight; 
console.log('Weight: ',weight);
*/


//To fix this issue we use an if statement, but there is a better way:

if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
  let weight2 = andrei_pokemon.pikachu.weight
} else {
  let weight2 = undefined
}
console.log(weight2);

// The more elegant way with optional chaining:

let weight3= andrei_pokemon?.pikachu?.weight  // each '?' is a check that will
// return 'undefined' if its not true
// chane the chain to raichu instead of pikachu and you will get the weight
console.log(weight3);

// Nullish Coalescing Operator - ??

// we cant use otpional chaning for the end of a chain.... so how do we handle
//exceptions if ther is no value for power?
let power = andrei_pokemon?.raichu?.power  || 'no power'  // value to return if false 
// includes an empty string, no value and a false boolean value
console.log(power);


let power = andrei_pokemon?.raichu?.power  ?? 'no power'  // returns true if the value is
// false or falsy or null  It returns undefined on an or an empty string
console.log(power);  

// Promise.allSettled
  // covered in a later lecture

//globalThis
 // covered in a later lecture