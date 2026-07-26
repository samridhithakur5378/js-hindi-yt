class User {
constructor(username){
  this.username = username
}
logMe(){
  console.log(`USERNAME is ${this.username} `)
}
}

class Teacher extends User{
  constructor(username,email,password){
    super(username) // Call the parent class constructor 
    this.email = email
    this.password = password
  }

addCourse(){
  console.log(`a new course was added by${this.username}`)
}

}

const chai = new  Teacher("chai","cahi@teacher.com","1234")
chai.addCourse()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai==masalaChai)
console.log(chai === Teacher)

console.log(chai instanceof User)
