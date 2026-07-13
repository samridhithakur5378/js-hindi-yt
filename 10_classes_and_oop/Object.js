function multipleBy5 (num){
return num*5

}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//function is function and an object as well
//javascript has prototype based inheritance.

function createUser(username,score){
 this.username = username
 this.score =score
}
 createUser.prototype.increment = function(){
  this.score++//this matlab jis
 }
  createUser.prototype.printMe = function(){
    console.log(`prize is ${this.score}`);
  }
 
 const chai = new createUser("chai", 25)//new keyword importance interview question
 const tea = new createUser('tea',30)

chai.printMe()
