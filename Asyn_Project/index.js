// generate random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)] 
    }
    return hexColor;
}
 

let intervalId;
const startBgColorChanging = function(){
    if(!intervalId){
   intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
   document.body.style.backgroundColor = randomColor()
   }
}
const stoptBgColorChanging = function(){
  clearInterval(intervalId)
  intervalId = null;
}

document.querySelector("#start").addEventListener("click",startBgColorChanging)
document.querySelector("#stop").addEventListener("click", stoptBgColorChanging)


// console.log(randomColor())