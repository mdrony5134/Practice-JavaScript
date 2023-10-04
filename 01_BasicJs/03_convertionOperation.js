let score = null
// console.log(typeof score);
// console.log(typeof (score));

let scoreNumber = Number(score)

// console.log(typeof scoreNumber);
// console.log(scoreNumber);

// "33" => 33 - number
// "33abc" => NaN
// null => 0
// true => 1 ? false => 0

let loggedIn = ''
let booleanLoggedIn = Boolean(loggedIn)
// console.log(typeof booleanLoggedIn);

// 1 => true and 0 => false
// "" => false
// "rony" => true

// ************* Operations ************************

let str1 = 'Hello'
let str2 = 'rony'
let str3 = "hello" + " rony"
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + + 1 + "2")
// console.log("1" + 1 + 2)

// console.log(+true);
// console.log(+"");


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

