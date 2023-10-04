// primitive data type  ---- its call by value

// 7 types: number, string, boolean, null, undefined, symbol, bigInt

const score =100 
const scoreValue = 100.5
const isLoggedIn = false / true
const name = "rony"
let userEmail;
const temp = null;  // object type

// Reference type (Non Primitive)
// array , object, function

// array
const frindsName = ["shihab", "Riyad", "firad"]


// object

const myObj = {
    name: "rony",
    age : 20
}

// function

function hablu(){

}


// ****************** Memory **********************

// Stack (Primitive )   ____  Heap (Non-Primitive)

const userName = "rony"
let anotherName = userName;
anotherName = "hablu"
console.log(userName)
console.log(anotherName)

// heap 

const userObj ={
    email: "user@gmail.com",
    id: 4
}

let userObj2 = userObj;
userObj2.email = "user@google.com"

console.log(userObj.email)
console.log(userObj2.email)