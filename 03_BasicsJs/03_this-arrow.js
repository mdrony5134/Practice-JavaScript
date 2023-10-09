const user = {
    name: "rony",
    email: 'test@gmail.com',
    welcomeMessage: function(){
        // console.log(`${this.name} welcome`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
// console.log(this)

// function sum(){
//     let name = "rony"
//     console.log(this.name)
// }
// sum()

// const  sum = () =>{
     // let name = "rony"
//     console.log(this)
// }
// sum()

// const sum = (num1, num2) =>{   //explicit return
//     return num1 + num2
// }

// const sum = (num1, num2) => ( num1 + num2 )      //implicit return
// console.log(sum(1 , 2))

const sum = (num1, num2) => ({naem: "rony"})
console.log(sum())