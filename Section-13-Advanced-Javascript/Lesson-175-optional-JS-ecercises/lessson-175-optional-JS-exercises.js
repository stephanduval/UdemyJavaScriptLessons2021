/*
What is the Challenge?
Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. 
Something that is useful not only in interviews when you get challenging problems, but also in your
 day to day work as a developer. First, start off by reading this article: 
 https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
 make a function that organizes these into individual array that is ordered. For example 
 answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
 Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
 should return [[1,2], ["2", "3"]]

 */
 
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]


const sortArrayNumerically = (array) => {
//  debugger;
  console.log(array);
 if (array.length < 2) {
   console.log('length is less than 2',array);
   return array;
 } else {
     let middle = (array.length)/2
     let left = sortArrayNumerically(array.slice(0,middle))
     let right = sortArrayNumerically(array.slice(middle))
    return merge(left,right);
  
 }
}


const merge = (left,right) => {
 // debugger;
  let result = [];
  let i = 0;
  let j = 0;
   while (i < left.length && j < right.length){
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++
  }
  while (j < right.length) {
    result.push(right[j]);
    j++
  }
  return result
  }

console.log(sortArrayNumerically(array));

/*

Question 2: Write a javascript function that takes an array of numbers and a target number.
 The function should find two different numbers in the array that, when added together, give
  the target number. For example: answer([1,2,3], 4)should return [1,3]

  */

const thisMakesThat = (array, targetNumber) => {
      /**
     * Summary          Finds out if a number can be produced by adding two numbers in an array
     * Description      Loops through each combinaton of numbers tro try every result O(n)
     * 
     * @param           one array, one int
     * @author:         StephanDDuVal
     * @Created:         23MAY2021
     */
 // debugger;
  let i = 0;
  while (i < array.length) {
    for (j = 0; j <array.length; j++) {
      if (array[j] + array[i] == targetNumber) {
     answer = `First Number: ${array[i]}, Second Number: ${array[j]}`;
     return answer
      } 
  
    }
    i++
  } 

    return 'damn fool'
  }
  

// test code
thisMakesThat([1,2,3], 5)


  function checkBasket(basket, lookingFor) {
    for (item in basket) {
      if (item === lookingFor){
      return true;
    } 
    }
    return false;
    }
}





  /*

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the
 formats so that if you enter HEX color format it returns RGB and if you enter RGB color format
  it returns HEX.
*/

// This is better code than I could have written:

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255)); // #0033ff

// ==ANOTHER VERSION ====================================================
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

alert(rgbToHex(0, 51, 255)); // #0033ff

// ==ANOTHER VERSION ====================================================

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

console.log(hexToRgb("#0033ff")) // [0, 51, 255]
console.log(hexToRgb("#03f")) // [0, 51, 255]


// ==ANOTHER VERSION ====================================================


function rgbToHex(r, g, b) {
        /**
     * Summary          RGB to Hexadecimal Value
     * Description      Bit shits << the input values and then adds them.  Then it uses the toSrting(radix)
     *                  parameter to convert the numbers to base 16 (hexadecimal). Finally it clices the first
     *                  number off, which isn't used for some reason.
     * 
     * @param           three values (r+g+b)
     * @author:         Grepper
     * @Created:        Aug 02 2019
     * @complexity      O(n)
     */

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}







function hexToRgb(hex) {
          /**
     * Summary          Hexadecimal to RGB Value
     * Description      
     * 
     * @param           a seven digit hexadecimal value
     * @author:         Grepper
     * @Created:        Aug 02 2019
     * @complexity      
     */
  var result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
  if(result){
      var r= parseInt(result[1], 16);
      var g= parseInt(result[2], 16);
      var b= parseInt(result[3], 16);
      return r+","+g+","+b;//return 23,14,45 -> reformat if needed 
  } 
  return null;
}
console.log(rgbToHex(10, 54, 120)); //#0a3678
console.log(hexToRgb("#0a3678"));//"10,54,120"