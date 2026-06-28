let score=true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0


let isLoggedIn='hitesh'
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//0=>false
//1=>true

//""=>false
//"samridhi"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)




///******************conversion*******************************
let value=3
let negValue=-value
console.log(negValue)



console.log(3+3)
console.log(3-3)
console.log(3*3)
console.log(3**3)
console.log(9/3)
console.log(9%3)

let str1="hello"
let str2="hitesh"
let str3= str1+str2;
console.log(str3)



console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
//reason for different output is that if string is first then  treated like a string
console.log(1+2+"2");
//here integer is first therefore firtly addition takes place

console.log(+true)
console.log(+"")

//dont write code like below





let gameCounter=100
gameCounter++;
console.log(gameCounter)