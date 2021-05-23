// memory heap 
// - part of the JS engine that stores values
//- Call stack, part of the JS engine that stores the list of actions that the 
// code demands to be taken.

// GLobal variables fill up the memory heap because they are there forever
// one of the causes of a memory leak

// the CALL STACK
// reads an executes your code.

const one = () => {
  const two = () => {
    console.log('4)');
  }
  two()
}

//console.log('4')
//two()
//one()
// CALL STACK (built bottom to top; runs top to bottom)

/* JS is a single threaded language that can be non-blocking
This means it only has one call stack and can only do one thing at a time

Snychronous programming call one single of the stack after the other in sequence

Stack overflow is when the call stack get filled with functions and
 the memory get overloaded

for example this recursuve function will overflow the stack:
*/

function foo() {
  foo()
}

foo()



/* DEADLOCKS - not an issue in single threaded languages
A deadlock is a condition where a program cannot access a resource 
it needs to continue. When an active application hits a deadlock, it
 may "hang" or become unresponsive. Resources, such as saved or cached 
 data, may be locked when accessed by a specific process within a program.

 */

 /*  If you have a task in youor code that takes a long time ( a massive loop)
 Then the code will hang on that task until it's done.   How do we solve this 
 problem? 

 ASYNCHRONOUS PROGRAMMING

 */

 console.log('1');
// setTimeout(function,solutionWaitTimeMS)

 setTimeout(
 () => {
  console.log('2');
 }, 2000);
  
  
 console.log('3');


 /* CONSOLE RESULT:
 1
 3

 2

 */

 /*

HOW THIS WORKS:  


 console.log('1');
 ------------------
 setTimeout(
 () => {
  console.log('2');
 }, 2000);  --- > if it's zero milliseconds it still sends it to the callback stack
 ------------------
console.log('3');
-----------------
callback()
  callback -> console.log2
  -----------------
// CALL STACK

setTimeout(), 2000 - After the time it's sent to the callback quque
//WEB API

callback() -> includes setTimeout events
//CALLBACK QUEUE  - runs only if Call Stack of EventLoop is empty the they
                    are sent to the CALL STACK

//EVENT LOOP


 FEATURES OF THE JS RUNTIME ENVIRONMENT

 - WEB APIs
 - AJAX (XMLHTTP-REQUEST)
- TIMEOUT (SET TIMEOUT)


- EVENT LOOP

- CALL BACK QUEUE:
- onClick -> onLoad -> onDone



use asynchrnous for loading large amount of data (tweets or news feed items)




Even loops host 
element.addEventListener('click', () {
  => console.log('click')
});