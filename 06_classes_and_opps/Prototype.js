let myName = "Rishabh     "
let myNickName = "Rishu     "


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",
     
    getSpiderPower: function(){
        console.log(`Spidy power${this.spiderman}`);
        
    }
}

Object.prototype.rishabh = function(){
    console.log(`rishabh is present in all object`);
    
}
Array.prototype.heyRishabh = function(){
    console.log(`Rishabh says hello`);    
}

// heroPower.rishabh()
// myHeroes.rishabh()
// myHeroes.heyRishabh()
// //heroPower.heyRishabh()


// Inheritance
const User = {
    name: "Rishabh",
    email: "rishabh@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssiment: "js assiment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// morden syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser = "RishabhSingh"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`); 
}

anotherUser.trueLength()
myName.trueLength()
"Rishu".trueLength()
"IceTea   ".trueLength()