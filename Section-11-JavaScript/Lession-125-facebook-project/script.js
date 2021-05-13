var database = [
	{
		username: "Stephan",
		password: "DuVal"
	}
];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from all that learning"
},
{
	username: "Sally",
	timeline: "JavaScript is sooo cooool!"
}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
	alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);

//function declaration does not need line end semi-colon
function newFunction() {

}

//function expression needs line end semi-colon
var newFunction = function () {

};

//expressions
1 + 3;
var a = 2
return true;

//calling or invoking a function
alert();
newFunction(param1, param2);

//assign a variable
var a = true;

// OBJECT > CLASS > METHOD


//functions vs methods
function thisIsAFunction() {

}


// functions are called like this:
thisIsAFunction()

//methods are part of an object (that is derived from a class) and are called like this:

var obj = {
	thisIsAMethod: function () {
	}
}

// Methods are called like this:
obj.thisIsAMethod()


