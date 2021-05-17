//Ternary operators:

// condition ? expr1 : expr2
// if condition is true evaluate expr1
// if condition is false evaluate expr2

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available") 

// how is this different from:


function conditon() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();


// Switch statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            // break out of the switch statement
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        // default is run when no argument is passed or the argument doesnt
        // match any of the switch conditions
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;

}
