var database = [
	{
		username: "Stephan",
		password: "DuVal"
	},
	{
		username: "Sally",
		password: "Field"
	},
	{
		username: "Donald",
		password: "Sutherland"
	},
	{
		username: "Billy",
		password: "Bones"
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



function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
	console.log("false");
}

function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsFeed);
	} else {
		alert("sorry wrong username and password");
	}
}



var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);