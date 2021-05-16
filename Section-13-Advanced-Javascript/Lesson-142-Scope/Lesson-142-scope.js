// Scope

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    // as soon as we open the curly brackets we enter the child scope
    var fun = "hellllooooo";
    console.log(1, fun);
}   

function funerFunction() {
    var fun = "byeeee";
    console.log(2, fun);

}

function funestFunction() {
    // this next line will override the fun variable in the window scope!!
    fun = "AHHHHHH";
    console.log(3, fun);
}   

//result: "window 5"
console.log("window", fun);



funFunction();
funerFunction();
funestFunction();

//result: "window AHHHHHHHH"
// because fun = "AHHHH" overwrote the fun variable in the window scope 
console.log("window", fun);

