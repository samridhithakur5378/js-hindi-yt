const myNums =[1,2,3]
//const myTotal = myNums.reduce(function (acc , currval) {
  //console.log(`acc:${acc} and currval:${currval}` )
  //return acc + currval
//},0)

//console.log(myTotal);
//The JavaScript reduce() method is a higher-order function 
// that iterates over an array from left to right, applying a
//  provided callback 
// function to each element to accumulate a single output value


const myTotal =myNums.reduce((acc,curr) =>acc+curr,0)

console.log(myTotal)


const shoppingCart =[
  {
    itemName:"js course",
    price:999
  }, 
    {
    itemName:"mobile dev course",
    price:2999
  }, 
    {
    itemName:"data scienec course",
    price:2999
  }, 
]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay)

