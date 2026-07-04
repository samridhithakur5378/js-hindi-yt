const myObject = {
  js:"javascript",
  cpp:'C++',
  rb:"ruby",
  swift:"swift by apple"

}

for (const key in myObject){
  console.log(`${key} shortcut is for ${myObject[key]}`)
}



const programming = ["js", "rb","py","java","cpp"]
  for (const key in programming){
    console.log(programming[key])

  }

//there willbe no output as map is not iteratable
 // const map = new Map()
//map.set('IN',"India")
//map.set('USA',"United State of America")
//map.set('Fr',"France")

//for (const key in map){
 // console.log(key);
//}
