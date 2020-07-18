//Scope


//Global Scope
const name = 'Ed';
const age = 26;
console.log(name);

function sayName(){
//The function will use the const for name and age as they are global unless you put const and age within the function then those will be used.
//If I put const age = 10; This age will be used.
  console.log(`Hello there my name is ${name}`)

  console.log(`Hello there my age is ${age}`);
}

//Function Scope


//The variables within this function can't be used as they are function scoped.
function sayFullName(){
  const name = 'Jesse';
  const age = 30;

  console.log(name, age);

}
sayFullName();
