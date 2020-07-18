//Hoisting

var name = 'Ed';

console.log(name);

var people;



//This is ok because the variable is declared beforehand
const name = 'Ed';

console.log(name);


//This is not ok and will give you and error
console.log(name);
const name = 'Ed';
