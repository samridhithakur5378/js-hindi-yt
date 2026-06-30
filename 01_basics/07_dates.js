//dates

let myDate = new Date()
console.log(myDate.toString())//trying to convert date into string

console.log(myDate.toDateString())


console.log(myDate.toLocaleString())


console.log(myDate.toISOString())

console.log(typeof myDate)//interview question

let myCreatedDate = new Date('01-14-2023')//in javascript months start from 0
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))  //interview question remember



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{ weekday :"long"})




