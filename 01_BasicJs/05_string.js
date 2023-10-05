let name = "rony"
let gitRepo = 30

// console.log(`my name is ${name} and my repo count is ${gitRepo}`) // modern syntax

const stringName =  new String("Rony-ni-hasan")
console.log(stringName[1])
console.log(stringName.__proto__)
console.log(stringName.toUpperCase())
console.log(stringName.charAt(2)) 
console.log(stringName.indexOf("n")) 



const newStringName = stringName.substring(0, 5);
console.log(newStringName);
const newStringOne = stringName.slice(-6, 5)
console.log(newStringOne);

const newStringTwo = "   Rony      "
console.log(newStringTwo)
console.log(newStringTwo.trim())

const url = "https//rony.com/ni%20rony"
console.log(url.replace("%20", "-"))

console.log(url.includes("sunny"))


console.log(stringName.split('-'))

