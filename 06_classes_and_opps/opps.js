// Object literal
const user = {
    username: "Rishabh",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// Constructor

function User (username, loginCount, isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn
    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
        
    }
    return this
}

const userOne = new User("Rishabh", 8, true)
const userTwo = new User("Rishu", 11, false)
console.log(userOne);
console.log(userTwo);
