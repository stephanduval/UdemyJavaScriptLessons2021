// Arrow Functions

function add(a, b) {
    return a + b;
}

// works the same as:

const add = (a, b) => {
    return a + b;
}

// works the same as:
// This only works if we have a a single return

const add = (a, b) => a + b

/* CONSOLE printout:
const add = (a,b) => a + b
undefined
add(5,6)
11
*/