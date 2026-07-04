const coding = ["js","ruby","java","python","cpp"]


//const values = coding.forEach((item) =>{
//  console.log(item)
 // return item
//})

//console.log(values);

const myNums = [1,2,3,4,5,6,8,9,10]
//const newNums = myNums.filter((num) => {
//    return num>4
//})


//const  newNums =[]
//myNums.forEach((num)=>{
  //if (num>4){
   // newNums.push(num)
 // }
//})
 // console.log(newNums);

//if you open scope you have to use return keyword


const books = [
  {title:'book one',genre:'history',publish:1981,edition:2004}
]

let userBooks =books.filter((bk)=>bk.genre ==='History')
userBooks = books.filter ((bk) =>{
  return bk.publish >= 2000 && bk.genre ==='History'
})
console.log(userBooks)