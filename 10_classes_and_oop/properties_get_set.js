//function behaves in two ways function is a function asw ell as an object
function User(email,password){
  this._email = email;
  this._password = password

Object.defineProperty(this,"email",{
get: function(){

  return this._password.toUpperCase()
},
set:function(value){
  this.password = value
}
})
}
const chai = new User("chai@chai.com",'chai')
