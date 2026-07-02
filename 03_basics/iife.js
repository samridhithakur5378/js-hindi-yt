//Immediately invoked Function Expressions(IIFE)
//named iife
(function chai(){
  console.log(`DB CONNECTED`);

})()

//unnamed iffe
(() =>{
console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')


//sometimes we have problem from the pollution of global scope
//so to remove that pollution we use iife