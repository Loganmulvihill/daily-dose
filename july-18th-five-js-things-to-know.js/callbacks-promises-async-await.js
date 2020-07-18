//Callbacks
//All a callback is, is a function that gets called as an argument for another function.

//Synchronous callback
const sayName = (name, callback) => {
  console.log('running some code');
  console.log('running some code');
  console.log(`My name is ${name}`);
  callback();
};

function cb(){
  console.log("This ran at the end");
}

sayName('Ed', cb);


//Asynchronous Callback

console.log('first');

setTimeout(() => {
console.log('from callback')
}, 2000);

console.log('last');


//Async Await Example

//Add async to front of function to let JS know it is an asynchronous function
 async function getData() {
   let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done'), 3000);
   });

   //Add await
   let result = await promise;
   console.log(result);
}

getData();
