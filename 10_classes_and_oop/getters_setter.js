class User {
  constructor(email,password){
    this.email = email,
    this.password = password
  }


//class ke bahar se koi value get karna chah te ho to getter use hota hai
//class ke bahar se koi value set karna cahte ho to setter use hota hai
get password(){
return `${this._password}hitesh`
}


get email(){
  return this._email.toUpperCase()
}

set email(value){
  this._email= value
}


set password(value){
  this._password = value
}
}
const hitesh = new User("h@hitesh.ai","123")
console.log(hitesh.password);

