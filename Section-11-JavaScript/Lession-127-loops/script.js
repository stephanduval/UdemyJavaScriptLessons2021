var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study JavaScript",
    "eat healthy"
];


var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study JavaScript!",
    "eat healthy!"
];


/*
 *  for parameters 
 *  assign i to zero; while i is less than todos.length run the loop; 
 *  increment i by 1
*/

var todosLength = todos.length;
console.log(todosLength);


//for (var i=0; i < todoslength; i++) {
//    todos.pop();
//    console.log(todos);
//}

//var counterone = 10

//while (counterone > 0) {
//    console.log(counterone);
//    counterone--
//}

var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

// Do Vs While, the difference is when the counter is modified
// but most of the time you will use a for loop

//forEach iterates along an array

//todos.forEach(function(i) {
//    console.log(i)
//})

//// has the same output as:

//todos.forEach(function(anything) {
//    console.log(anything)
//})

//// we can put different parameters into todo like this:

//todos.forEach(function (anything, i) {
//    console.log(anything, i)
//})


// Let's make Todos more readable!

function logTodos(anything, i) {
    console.log(anything, i);
}

todos.forEach(logTodos);

todosImportant.forEach(logTodos);

