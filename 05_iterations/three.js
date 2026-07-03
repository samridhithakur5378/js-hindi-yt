//for of

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

//syntax:for(const iterator of object){

//}


for (const num of arr){
  console.log(num);


}

const greetings = "hello world!"
for (const greet of greetings){
  console.log(`each char is ${greet}`)
}

//maps:holds key-value pairs and remember the original insertion order of the keys
//KEY VALUE PAIRS ARE UNIQUE
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
console.log(map);


for (const [key,value] of map){
  console.log(key,':-',value);
}

//objects ko iterate karwane ka alag tarika hai
//const myObject = {
//game1:'NFS',
//game2:'Spiderman'
//}
//for(const[key,value] of myObject){
 // console.log(key,':-',value);
//}