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
}