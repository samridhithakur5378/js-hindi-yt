class User {
  constructor(username) {
    this.username = username;
  }


  logMe(){
    console.log(`username is ${this.username}`)
  }
//static keyword 
   static createId(){
    return `123`
  }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())

class Teacher extends User {
  constructor(email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId())