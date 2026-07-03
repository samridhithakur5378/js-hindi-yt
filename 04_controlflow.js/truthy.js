 const userEmail =""

 if (userEmail){
  console.log("Got user email")
 }else{
  console.log("dont have a user email")
 }

//interview questions
 //falsy values
 //false,0,-0,Bigint (0n),"",null,undefined,NaN
//!!!!!inyerview question
 //truthy values
 //"0",'false'," ",[],{},function() {}


 if (userEmail.length === 0 ){
  console.log("array is empty")
 }


 const emptyObj = {}

 if (Object.keys(emptyObj.length === 0)){
console.log("object is empty")
 }


 //nullish coalescing operator:

 let val1 ;
//val1 = 5 ?? 10
//val1 = null??10
//val1 = undefined ??15
val1 = null?? 10 ?? 20

console.log(val1)

//terniary operator:

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("less than 80"):console.log("more than 80")
