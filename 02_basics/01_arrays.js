//array
//array are written inside square brackets
//an array can contain different type of elements 
//javascript arrays are resizable


//interview questions
//array make shallow copy that is its properties shares the same referenve point
const myArr = [1,2,3,4,5,true,"hitesh"]
console.log(myArr[0])


const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)

//ARRAY METHODS
//push method used to add element into array
myArr.push(6)//this adds a new element at the end of array
myArr.push("helloguys(:")


//pop method used to remove the last element from the array
myArr.pop()


//unshift method adds element in the starting of a line
myArr.unshift(0)


//shift method removes the very first element
myArr.shift()

//includes tells if there is any element present inside the array or not
console.log(myArr.includes(3))

//indexof gives the index of the passed element
console.log(myArr.indexOf(4))

const newArr = myArr.join()
console.log(newArr)
console.log(myArr)


//slice and splice (imp for interview)

console.log("A",myArr)

const myn1 = myArr.slice(1,3)//here last index is not included

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)//splice manupulates the original array:interview question
console.log("C",myArr)
console.log(myn2)

