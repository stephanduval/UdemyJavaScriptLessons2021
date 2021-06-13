// ASYNC AWAIT WITH FETCH
// with fetch() we get a promise
// fetch is built into the JS engine as window.fetch

const { Console } = require("console");
const { response } = require("express")

// fetch data using a promise

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// fetch data using an async await function

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);
}


// Trying again with an array of urls


const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/users'
]

// fetch data using a promise



Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() =>console.log('Error Dude'));




// ====================================================================

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
