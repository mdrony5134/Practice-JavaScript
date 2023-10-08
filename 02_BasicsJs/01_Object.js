// singleTone
// Object.create

// literal
const myKey = Symbol("key1") //interview question
const user = {
    name: "Rony",
    "full Name": "rony khan",
    age: 18,
    email: "rony@gmail.com",
    isLoggedIn: true,
    week:["fri", "sun", "mon"],
    [myKey]: "mykey1",
}


// console.log(user[myKey])
// console.log(user["full Name"])
// user.email = "rony@gmail.com"
// Object.freeze(user)
// user.email = "rony1@gmail.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello js Lover ")
}
console.log(user.greeting())

user.greeting = function(){
    console.log(`Hello js Lover ${this.name}`)
}
console.log(user.greeting())