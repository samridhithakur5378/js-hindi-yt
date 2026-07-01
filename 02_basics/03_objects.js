//singleton means only one kind of object
//when we declate as literal then not singleton
//if declared by contructor then singleton

//how to declare symbol
//iportant interview question
const mySym = Symbol("key1")


//object literals
//Object.create
const JsUser ={
name:"Hitesh",
"fullname":"hitesh choudhary",
age:18,
[mySym]:"mykey1",//(You need to write it in single block bracket to use as symbol or else it willbe a string)
location:"jaipur",
email:"sam@gmail.com",
isloggedin:false,
lastLogindays:["monday","saturday"]
}
//{} are empty object, in object we put keys and values


 //how to access
 console.log(JsUser["email"])
 console.log(JsUser.email)
console.log(JsUser["fullname"])



console.log( JsUser[mySym])



JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser) // if you freeze something then its value cannot be changed



JsUser.email = "hi@gamail.com"
//console.log(JsUser)


JsUser.greeting = function(){console.log("hello JS user")}
console.log(JsUser.greeting())

JsUser.greetings2= function(){
console.log("hello JS user, ${this.name}")}//string interpolation is used here
console.log(JsUser.greetings2())

