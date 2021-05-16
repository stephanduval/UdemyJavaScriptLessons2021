
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// answer to above:
// 3


//#2
var a = 0;
function q2() {
    a = 5;
}
// answer to above:
// 5


function q22() {
    alert(a);
}

// answer to above:
// doesnt exist or 0 (if we are considering the whole file)


//#3
function q3() {
    window.a = "hello";
}
// answer to above:
// hello


function q32() {
    alert(a);
}

// answer to above:
// hello (from q3) 


//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

// answer to above:
// test


//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

// answer to above:
// 5