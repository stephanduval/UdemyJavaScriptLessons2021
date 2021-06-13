/*
ASYNC AWAIT is built on top of promises
ASYNC AWAIT IS A FUNCTION THAT RETURNS A PROMOSE
IT ALSO MAKES CODE EASIER TO READ

Both allow us to do different things in the background while data loads
*/

//Vanilla JS Promise

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// ASYNC AWAIT
// Makes the code look more synchronous
// It's the same, its just prettier: 'syntactic sugar'

async function playerStart() {   // The async function keyword allows us to access a new keyword 'await'
    // await means pause this function until i have a response
    await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(350, 'Left'); //pause
}

// we can assign variables to the await functions:

async function playerStart() {   // The async function keyword allows us to access a new keyword 'await'
    // await means pause this function until i have a response
    const firstMove = await movePlayer(100, 'Left'); //pause
    const first = await movePlayer(400, 'Left'); //pause
    const second =await movePlayer(10, 'Right'); //pause
    const third =await movePlayer(350, 'Left'); //pause
}


