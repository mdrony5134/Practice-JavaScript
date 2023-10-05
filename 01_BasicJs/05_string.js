let name = "rony"
let gitRepo = 30

// console.log(`my name is ${name} and my repo count is ${gitRepo}`) // modern syntax

const stringName =  new String("Rony-ni-hasan")
console.log(stringName[1])
console.log(stringName.__proto__)
console.log(stringName.toUpperCase())
console.log(stringName.charAt(2))  //Returns the character at the specified index.
console.log(stringName.indexOf("n")) //Returns the position of the first occurrence of a substring.



const newStringName = stringName.substring(0, 5);
console.log(newStringName);
const newStringOne = stringName.slice(-6, 5)
console.log(newStringOne);

const newStringTwo = "   Rony      "
console.log(newStringTwo)
console.log(newStringTwo.trim())

const url = "https//rony.com/ni%20rony"
console.log(url.replace("%20", "-"))

console.log(url.includes("sunny")) //true / false value return kore


console.log(stringName.split('-')) //Split a string into substrings using the specified separator and return them as an array.

