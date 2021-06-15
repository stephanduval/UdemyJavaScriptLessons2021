//================================== Object Spread Operator
 const animals = {
     tiger: 23,
     lion: 5,
     monkey: 2,
     bird: 40
 }


 // Here is where the object spread operator gets used:
 const { tiger, ...reboost} = animals;

// Console readout

//reboost
// {lion: 5, monkey: 2, bird: 40}
// animals 
// {tiger: 23, lion: 5, monkey: 2, bird: 40}
// tiger
// 23
// lion
// udenfined
//monkey
// undefined

// Anything listed in the brackets is created as a global variable (Regardless of order in the list!)
// anything in the 'reboost' (or any parameter name) category is created an a new object called "reboost"


/*  This feature is like the existing array spread operator:
*/
const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a + b + c + d + e;
}

sum(...array;)

// console reads:
// 15
sum(1+2+3+4+5);
// console reads:
// 15



function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

objectSpread(tiger, reboost);

// console reads:
// 23
// {lion: 5, monkey: 2, bird: 40}


// ========================================================= ASYNC  .finally
//. finally is the last thing that happens in a function if there is a .then error which results
//in a .catch being triggered or if there is no error at all

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/users'
    ]
    
    Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    })).then(results => {
        //Our test for the .catch
       // throw Error;
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    }).catch(() =>console.log('Error Dude'))
    // Will throw an error if one of the urls is written incorrectly, for example.

    .finally(() => console.log('extra', urls));

//==========================================  for await of 
// rewind video for the explanation

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/users'
]



// fetch data using an async await function
// to reproduce the .catch funtion we use try catch blocks

const getData = async function() {
    try {
    // this const uses destructuring
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
    ))
    console.log('users',users)
    console.log('posts',posts)
    console.log('albums',albums)
    } catch (err) {
        console.log('Error Dude')
    }
}

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
}

loopThroughUrls(urls);

/* console reads:
https://jsonplaceholder.typicode.com/posts
VM1207:24 https://jsonplaceholder.typicode.com/albums
VM1207:24 https://jsonplaceholder.typicode.com/users
*/

// Here we create a new function using for await of

const getData2 = async function() {
    // create a new array using the product (promises) of fetch over the array of urls
    // fetch produces a promise as a product of it's function
    const arrayOfPromises = urls.map(url => fetch(url));  
    // loop through the promises
    // we use the await keyword here because we are looping over promises
    for await (let request of arrayOfPromises) {
        // extract the data using request.json  
        // we need the await keyword in front of a promise (request)
        const data = await request.json();
        console.log(data);
    }
}