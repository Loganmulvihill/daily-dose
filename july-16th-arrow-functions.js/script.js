class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow(){
    setTimeout(() => {
      console.log('Arrow: ' + this.name)
    }, 100)
  }

  printNameFunction(){
    setTimeout(function(){
      console.log('Function: ' + this.name)
    }, 100)
  }
}


let person = new Person('Bob');

person.printNameArrow();
person.printNameFunction();
//printNameFunction uses global scope vs the arrow function which uses the this keyword and takes the value from the this object and its scope.
