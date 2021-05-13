var user = {
	name: "John",
	age: 34,
	hobby: "soccer",
	isMarried: false,
	coursesCompleted: ["English", "math", "economics"],
	shout: function() {
		console.log("AHHHHHHHHH!");
	}
};

console.log(user);

console.log("user name: ", user.name);
console.log("user age: ", user.age);
console.log("user hobby: ", user.hobby);
console.log("is user married? ", user.isMarried);

user.favouriteFood = "spinach";
console.log("added a favorite food: ", user);

user.isMarried = true;
console.log("user got married: ", user.isMarried);

console.log(user.name + " took this course: " + user.coursesCompleted[2].toString());

/* an object in a array */

var list = [
	{
		username: "andy",
		rank: "private"
	},
	{
		username: "jess",
		password: "liutennant"
	}
];

console.log("Andy's rank is: " + list[0].rank);

/* call the shout function in the user object */
/* shout is a method of the user object
Like in list.pop() , pop() is a method of list */
user.shout();