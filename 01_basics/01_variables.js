const accountId=144553
let accountEmail="sam@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

//not allowed accountId=2
accountEmail="SAM@11"
accountCity="bengaluru"
accountPassword="121212"
console.log(accountId)

/*prefer not to use var because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])