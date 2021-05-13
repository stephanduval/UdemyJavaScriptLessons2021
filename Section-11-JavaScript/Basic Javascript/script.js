4+3;

if (4+3 ===7) {
	console.log("You're Smart!")
}

/* Function declaration */
/* function exists but is not run */
function sayHello() {
	console.log("Hello")
}

/* execute function */
sayHello()

/* function expression */
var sayBye = function() {
	console.log("Bye");
}
/* execute the functon */

sayBye()

/* try it with parameters */
function sing(lyric1,lyric2) {
	console.log(lyric1);
	console.log(lyric2)
}

sing("LALALA","FALALA");

/*  trying out the return fucntion */

function multiplyTwoNumbers(a,b) {
	console.log(a,b)
	return a * b
	}

console.log("Running multiplyTwoNumbers: ", multiplyTwoNumbers(5,10));

/* trying it with and if statement */
/* you can try this with different variables in the console */

function multiplyBelowTenOnly(a,b) {
	if (a>10 || b >10) {
		return "That's too hard"
		} else {
			return a*b;
		}

}

/* assigning a variable to the result of a function */
var c = 5
var d = 6
var total = multiplyTwoNumbers(c,d);
alert("The result of " + c.toString() + " times " + d.toString() + " is " + total.toString());
console.log("Alert of function multiply was sent")