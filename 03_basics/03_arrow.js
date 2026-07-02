const user = {
   username :"hitesh",
   price :999,

   welcomeMessage :function(){
    console.log(`${this.username} , welcome to website`)
   console.log(this)
  
  }
}

//user.welcomeMessage()
//user.username = "sam"//we have changed context or values here
//user.welcomeMessage ()


console.log(this)
//browser mein global object is window object

//function chai (){
 // let username="hitesh"
 // console.log(this.username);
//}

//chai()


//const chai = function(){
//let username = "hitesh"
//console.log(this.username);
//}
//chai()



//arow function//interview questions
const chai = () =>{
let username = "hitesh"
console.log(this.username)

}
//chai()


//arrow function

//const addTwo =  (num1,num2) =>   num1 + num2

//const addTwo =(num1,num2) =>{
 //   return num1+num2
//}


//const addTwo = (num1, num2) => (num1 +num2)


const addTwo = (num1, num2) => ({username:"hitesh"})
 

//when curly braces are added then we have to write return keyword or else we dont need to write it



console.log(addTwo(9,0))


//const myArray = [2, 5,3,7,8]

//myArray.forEach(() =>{})