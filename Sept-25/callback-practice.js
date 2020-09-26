// Repl 1 practice
let add = function(a, b) {
  return a+b;
}
let multiply = function(a, b) {
  return a * b;
}

let doWhatever = function(a, b) {
  console.log(`here are your two numbers back ${a}, ${b}`);
}

let calc = function(num1, num2, callback) {

if(typeof callback === "function") {
  return callback(num1, num2);
  }
}

console.log(calc(2,3, function(a,b){return a-b}));

function taskOne() {
  console.log("task 1")
}

function taskTwo() {
  console.log('task 2')
}

setTimeout(taskOne, 2000);

taskTwo();


setTimeout(function () {
  console.log("This message is shown after")
}, 3000);


// Repl 2 Practice
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x);
console.log(y);

let number = 10;

function increase(number) {
  number++
}

increase(number);

console.log(number);


let obj = { value: 10 };

function increase(obj) {
  obj.value++
}

increase(obj);

console.log(obj);
