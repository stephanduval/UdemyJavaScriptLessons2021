// ASYNC AWAIT WITH FETCH
// with fetch() we get a promise
// fetch is built into the JS engine as window.fetch

const { Console } = require("console");
const { response } = require("express")

// fetch data using a promise

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)


async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);

}