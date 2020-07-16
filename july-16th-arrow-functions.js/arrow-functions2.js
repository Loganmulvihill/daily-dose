//Arrow Functions 2
//This was learned from https://www.youtube.com/watch?v=22fyYvxz-do
//Syntax
(param1, param2) => {statements}
(param1, param2) => expression
(param1, param2) => { return expression; }

(singleParam) => {statements}
singleParam => {statements}

() => {statements}
() => expression
() => {return expression;}

(param1, param2, paramN) => expression


//Normal function
var multiply = function(x,y) = {
  return x * y;
};

//Arrow Function

let multiply = (x, y) => {
  return x * y;
}
//or
let multiply = (x,y) => return x * y;

//Test Example
let materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
]

let materialsLength1 = materials.map(function(material) {
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
})

let materialsLenght3 = materials.map((material) => material.length);

//Example 2
//No Binding of this
function Person(){
  this.age = 0;
  setInterval( () => {
    this.age++;
  },1000)
}

let p = new Person();

//Returning object Literals
let func = () => ({foot: 1});

//Line Breaks no line breaks without curly braces

let func = ()
              => 1; //This doesn't work and has to be in curly braces or on the same line.
