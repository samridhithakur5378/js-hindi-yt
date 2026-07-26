let myName = "hitesh     "
let myChannel = "chai   "
//console.log(myName.trueLength)


//console.log(myName.trim().length)

let myHeroes = ['thor','spiderman']
let heroPower = {

  thor:'hammer',
  spiderman:'sling',
  
getSuitPower:function(){
  console.log('spidy poer is ${this.spiderman}');
}
}
Object.prototype.hitesh = function(){
  console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
  console.log(`hitesh says hello`)
}
//not getting printed why??
//heroPower.hitesh()
//myHeroes.hitesh()
//myHeroes.heyHitesh()
//heroPower.heyHitesh()


//inheritance
const User = {
  name:'chai',
  email:"chai@gamil.com"

}
const Teacher = {
  makeVideo :true
}
const TeachingSupport={
  isAvailable:false
}
const TASupport = {
  makeAssignments:'JS asignment',
  fullTime:true ,
  __proto__:TeachingSupport
}

Teacher.__proto__ =User
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="chaiaurcode"
String.prototype.trueLength = function(){
  console.log(`${this}`)
   console.log(`${this.name}`)
   console.log(`True length is ${this.trim().length}`)
}
anotherUsername.trueLength()
//ok so we are not getting output again why check revise this lec
"hitesh".trueLength()
"icetea".trueLength()