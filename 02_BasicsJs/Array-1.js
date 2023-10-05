const friends = ["rahim", "karim", "jasim", "nasim"]
const fruits = ["apple", "orange", "banana", "dragon"]
// friends.push(fruits)
// console.log(friends) 

// const newArr = friends.concat(fruits)
// console.log(newArr)
// const newArr = [...friends, ...fruits] // spread  operator 
// console.log(newArr)

// const anotherArr = [1,2,3, [4,5,6], 7, [8, 9 , [4, 5, 6]]]
// const newArr = anotherArr.flat(3) 
// console.log(newArr)

// console.log(Array.isArray("Rony"))
// console.log(Array.from("Rony"))
// console.log(Array.from({name: "rony"})) // interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

const newScore = Array.of(score1, score2, score3)
console.log(newScore)