// Immediately Invoked Function Expression  IIFE

(function dataBase(){
    // named iffe
    console.log("db connected")
})();                             // ; problem iffe - end 

((name)=>{
    console.log("db connected " + name)
})("rony")