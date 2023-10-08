function myFunc(parameter){
    console.log("Hello function")  // function definition
}
// myFunc()         // myFunc - function reference , (argument/pass value) - execution


function sum(num1, num2){
    // console.log(num1 + num2)
    return num1 + num2
}
// sum(1, 2)
const result = sum(2, 4)
console.log("Result:", result)

function logInMessage(username="sam"){
    if(!username){                                  //username === undefined
        console.log("Please enter user name")
        return
    }
    return `${username} just loggedIn`
}
console.log(logInMessage(""))