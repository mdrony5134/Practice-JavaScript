const user = {
    name: "rony",
    fullName:{
        userFullName:{
            firstName: "khalid",
            firstName: "hasan",
        }
    }
}
// console.log(user.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign(obj1, obj2, obj3) // merge object

// const obj4 = {...obj1, ...obj2, ...obj3} // spared operator
// console.log(obj4)

const userData = [
    {
        id: 1,
        email: "test1@gmail.com"
    },
    {
        id: 2,
        email: "test2@gmail.com"
    },
    {
        id: 3,
        email: "test3@gmail.com"
    },
]

console.log(userData[1].email)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))