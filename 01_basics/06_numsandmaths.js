const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


//***********************maths**************************
console.log(Math);

console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));//always chooses uppervalues

console.log(Math.floor(4.2));//always choosees lower values

console.log(Math.min(1.5,0.5,4,5,6,7,8,8,8.5))//choosese the min value present in an array
console.log(Math.max(8,9.9,1,2,34,5))
console.log(Math.random())//comes values from 0 to 1

console.log(Math.floor(Math.random()*10)+1)


//trick
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1)+min))   //Math.floor to get a single value
