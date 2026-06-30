const name="samridhi"
const repoCount=50

//console.log(name+repoCount+"hi")
//remember these are not commas remeber brickets
console.log(`hello my name is  ${name} and my repo count is${repoCount} `)

const gameName = new String('hitesh-c')


console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('t'))

//go through all methods of string on time

const newString = gameName.substring(0,4)//in this function the last index is not getting included
console.log(newString)

const anotherString = gameName.slice(-6,0)//try to understand slice command again
console.log(anotherString)


const newStringOne = "   hitesh  "//here there are some unwanted spaces
console.log(newStringOne)
console.log(newStringOne.trim())//it removes unwanted spaces in start and end


const url = "https://hitesh.com//hitesh%20choudhary"

console.log(url.replace('%20','-')) //replaces one character with another
console.log(url.includes('hitesh'))//tells if the string conatins taht specific substring

console.log(gameName.split('-'))//here we split on the bases of dash


