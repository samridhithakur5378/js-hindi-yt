//objectlietral

const user={
  username: "hitesh",
  loginCount:8,
  signedIn:true,

getUserDetails : function(){
 // console.log("Got user details from database")
 //.log(`username:${this.username}`)
 console.log(this)//this is used for getting values of current context
}

}
console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)


//constructor function gives you a new copy/instance originals do not get affected by it
//new keyword used to get new instance
function User(username,loginCount,isLoggedIn){
  this.username =  username,
  this.loginCount=loginCount,
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`)
  }
  return this
}
const userOne =  new User("hitesh",12,true)
const userTwo =  new User("Chai aur code",11,false)
console.log(userOne.constructor)
//console.log(userTwo)

//whenever new keyword  is used new object is created
//constructor function is called due to new keyword
//this keyword will get injected in these objects 
//then you get these in function
//constructor proprty is just a refernce to the function taht created the instance