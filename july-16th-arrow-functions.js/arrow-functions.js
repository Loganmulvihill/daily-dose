//Converting standard functions to arrow functions

// 1. Named Function with multiple parameters
function sum(a,b) {
  return a + b
}

//Arrow function format
 let sum2 = (a, b) => {
  return a + b
}
//or
let sum2 = (a,b) => a + b;
//Everything is assumed to be returned in arrow functions regarding a + b


//2.Named function with one parameter
function isPositive(number) {
  return number >= 0
}

//Arrow function format 1
let isPositive = (number) => {
  return number >= 0
}
//or
let isPositive = number => {
  return number >= 0;
}
//Arrow function format 2
let isPositive = (number) => number >= 0;
//or
let isPositive = number => number >= 0;

//3.Named function with no parameters
function randomNumber(){
  return Math.random
}

//4.Anonymous function
document.addEventListener('click', function(){
  console.log('Click')
})


//Steps to change named function to arrow function
//1. Remove function at beginning
//2. Create variable then set equal to
// put arrow in between function block and parameters
