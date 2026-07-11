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


//constructor function gives you a new copy originals do not get affected by it

function User(username,loginCount,isLoggedIn){
  this.username =  username,
  this.loginCount=loginCount,
  this.isLoggedIn = isLoggedIn

  return this
}
const userOne =  new User("hitesh",12,true)
const userTwo =  new User("Chai aur code",11,false)
console.log(userOne)