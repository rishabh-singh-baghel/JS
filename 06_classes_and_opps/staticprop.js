class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return 123
    }
}
const rishu = new User("Rishu")
//console.log(rishu.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const userDetail = new Teacher("Remen","remen@gmail.com")

// userDetail.logMe()

userDetail.createId()