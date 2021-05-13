var list = ["tiger","cat","bear","bird"];
console.log(list[1]);

var numbers = [1,2,3,4];

var booleans = [true, false, true];

var functionList = [function apple() {
	console.log("apple");}
	];


var nestedAnimalList = [
		["tiger","cat","bear","bird"],
		[1,2,3,4]
		];
console.log(nestedAnimalList[0][3]);


/* concatenate lists */

var myList = ["cat","bear","elephant", "bee","dear"];
var myNewList = ["monkey"];

var concatenatedList = myList.concat(myNewList);
console.log(concatenatedList);

