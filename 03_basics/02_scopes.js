//var c = 300//written outside bracket is global scope


let a = 300
//written inside if is block scope
//these curly braces are called scope when used with a function or program
 if (true){
let a = 10
const b =20
//console.log('INNER',a)}

console.log(a);
//console.log(b);
//console.log(c);

function one(){
  const username = "hitesh"

//the inside function can access outer varibale sof outer function
  function two (){
    const website = "youtube"
    console.log(username);

  }

 // console.log(website)


 // two()
}

one ()

if (true){
  const username = 'hitesh'
  if (username === 'hitesh'){
    const  website = "youtube"
    //console.log(username+website);
  }

  //console.log(website);
}

 }
//console.log(username);


//*****************interesting*************

console.log(addone(5))
function addone(num){
  return num+1
}



addtwo(5)
const addtwo = function(num){
  return num + 2
}

//hoastinh how functions are declared  







