//Arrow function practice
//To follow this tutorial yourself checkout https://www.youtube.com/watch?v=NAN7U3MrX6o

function message() {
  return 'Hello World!';
}

//Arrow Function syntax
let message = () => {
  return 'Hello World!'
}
//or
let message = () => 'Hello world!';

console.log(message)

//Example 2
function message(a) {
  return `Hello ${a}`;
}

//Arrow function syntax
let message = (a) => {
  return `Hello ${a}`
}
//or
let message = a => `Hello ${a}`;
//or
let message = (a) => `Hello ${a}`;
//or
let message = (a, b) => `${a} ${b}`;

//Example 3
document.addEventListener('click', function () {
  console.log("Click");
})
//Arrow function Syntax
document.addEventListener('click', () => {
  console.log('Click')
})
//or
document.addEventListener('Click', () => console.log('Click'));

//Example 4 Anonymous Function
const people = [
  {
    fName: "John",
    lName: "Smith"
  },
  {
    fName: "Mary",
    lName: "Clark"
  },
]

console.log( people.map(function(person){
  return person.fName;
}))
//Arrow function syntax
console.log( people.map((person) => person.fName));
//Or
console.log( people.map(person => {
  person.fName;
}))
//or
console.log(people.map( (person) => {
  person.fName;
}))

//Example 5 Using This
let demo = function(){
  console.log(this);
}

window.addEventListener('load', demo);

document.getElementById('btn').addEventListener('click', demo);

//Arrow function example
let demo = () => {
  console.log(this);
}

window.addEventListener('load', demo);

document.getElementById('btn').addEventListener('click', demo);

//Example 6 Stopwatch
function stopwatch() {
  this.time = 0;

  setInterval(function () {
    this.time++;
    console.log(this.time);
  }, 1000);

}

let timer = new stopwatch();
//Arrow Function Syntax
let stopwatch() => {
  this.time = 0;

  setInterval(() => {
    this.time++;
    console.log(this.time);
  }, 1000);

}

let timer = new stopwatch();


//Example 7 Being careful with returning objects. You need to put a parentheses as an object because the arrow function sees the curly braces as an expression.
let name = () => {name: 'John'};
//Proper arrow syntax
let name = () => ({name: 'John'});

//Example 8 You can't have line breaks
let message = ()
              => 'Hello World';

console.log(message());
//Arrow function syntax
let message = () => 'Hellow World';
