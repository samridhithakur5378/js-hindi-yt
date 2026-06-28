//primitive

//7 types:string,number,boolean,null,undefined,Symbol,Bigint

const score=100
//javascript is dynamically typed taht is datatypes are not explicitly defined beforehand


const scoreValue=100.3

const isLoggedIn=false

const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);
const bigNumber=35445368979798786675634212123n;

//reference/non-primitive



//arrays,objects,functions

const heroes=['shaktiman','doga','naagraj']
let myObj={
   name:"hitesh"


}

const myFunction =function(){}
console.log("hello world");


console.log(typeof myFunction)



//**********************************memory*************************************************
//stack (primitive datatypes)and heap(non-primitive datatypes)


let youTubename= "sam"

let anotherName=youTubename
anotherName="chaiaurcode"

console.log(youTubename)
console.log(anotherName)


let userOne={

   email:"user@google.com",
   upi:"abc@123"
}

let userTwo= userOne

userTwo.email="hi@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
