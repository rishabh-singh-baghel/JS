class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const userDetails = new Teacher("Rishabh", "rishabh@gmail.com", "12345")
userDetails.logMe()
userDetails.addCourse()

const tea = new User("tea")
tea.logMe()

console.log(userDetails instanceof Teacher);
console.log(userDetails instanceof User);
