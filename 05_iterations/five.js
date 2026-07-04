const coding =["js","ruby","java","python","cpp"]
//method 1
coding.forEach(function (val) {
  console.log(val)
})

//method 2
coding.forEach((item)=>{
  console.log(item);
})

//method 3
function printMe(item){
  console.log(item)
}

coding.forEach(printMe)

//coding.forEach((item,index,arr) =>{
 // console.log(item,index,arr);
//})

const myCoding = [
{
  languageName:"javascript",
  languageFileName:"js"
},
{
  languageName:"python",
  languageFileName:"py"
},
{
  languageName:"javascript",
  languageFileName:"js"
}]





myCoding.forEach((item) => {
console.log(item.languageFileName)

})