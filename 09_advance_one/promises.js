//promise is an object representing the eventual completion 
//q and blue bird libraries of promises were used earlier
//creation and consumption of promesises
const promiseOne = new Promise(function(resolve,reject){
  //DO an async task
  //DB calls,cryptograpgy,network
  setTimeout(function(){
    console.log('async task is completed')
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log('Promise consumed')
})



new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2");
    resolve()
  },1000)

}).then(function(){
  console.log("Async to resolved")
})

const promiseThree = new Promise(function(resolve,reject)
{
  setTimeout(function(){
resolve({username:"Chai",email:"chai@example"})
  },1000)
})

promiseThree.then(function(user){
 console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
let error = true
if(!error){
  resolve({username:"hitesh",password:"123"})
}else{
  reject('ERROR:Something went wrong')
}

  },1000)
})


promiseFour
.then((user) => {
  console.log(user)
  return user.username
})
.then(()=>{
console.log(username)
})
.catch(function(error){
  console.log(error)
}).finally(() => console.log("the promise is either resolved or rejected"))

//revise 5th promise agin still an error here
const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
let error = false
if(!error){
  resolve({username:"javascript",password:"123"})
}else{
  reject('ERROR:JS went wrong')
}
  },1000)

})

//async function consumePromiseFive(){
 // try{
//const response = await promiseFive
 // console.log(response);
 // }catch(error){
  //  console.log(error)
 // }
//}
//consumePromiseFive()


//async function getAllUsers(){
//try{
//  const response =await fetch("https://jsonplaceholder.typicode.com/users")
//const data =  await response.json()
//console.log(data)
//}catch(error){
 // console.log("E:",error)
//}
//}
//getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  return response.json
})
.then((data)=>{
  console.log(data)
})
.catch((error)=> console.log(error))
//there is till an error refer sir's notes