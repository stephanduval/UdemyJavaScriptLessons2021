// NEW features
// String padding
// .padStart()

'Turtle'.padStart(10);

// console result:
//"          Turtle"

// .padEnd

'Turtle'.padEnd(10);

// console result:
//"Turtle          "



// trailing commands in functions parameters lists and calls
// end commands in parameter lists are now valid and wont give out and error

const fun (a,b,c,d,) = >{
    console.log(a)
}


fun(1,2,3,4,)


// Why is this useful?  
/* we write long paramters like this and it 
makes it easier and cleaner
*/

const fun (
    a,
    b,
    c,
    d,
    ) = >{    
    console.log(a)
}

// Object.values
// Object.entries

/* similar to Object.keys which allows us interate over values from objects,
 similar to array[3]
*/

let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr.Grinch'
}

// old way:
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


//Object. Values

Object.values(obj).forEach(value => {
    console.log(value);
})



Object.entries(obj).forEach(value => {
    console.log(value);
})

// CONSOLE RESULT:

/*
username0 Santa
VM924:10 username1 Rudolph
VM924:10 username2 Mr.Grinch
VM924:17 Santa
VM924:17 Rudolph
VM924:17 Mr.Grinch
VM924:23 (2) ["username0", "Santa"]0: "username0"1: "Santa"length: 2__proto__: Array(0)
VM924:23 (2) ["username1", "Rudolph"]0: "username1"1: "Rudolph"length: 2__proto__: Array(0)
VM924:23 (2) ["username2", "Mr.Grinch"]
*/


// add the usernumber to the name 

Object.entries(obj).map(value => {
    return value[1] + value [0].replace('username','');
})


// Console result:
//(3) ["Santa0", "Rudolph1", "Mr.Grinch2"]


// We will cover Async Await later after we learn about Asynchronous calls