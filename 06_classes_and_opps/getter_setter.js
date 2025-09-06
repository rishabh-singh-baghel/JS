class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rishu`
    }
    set password(value){
        this._password = value
    }
}

const rishabh = new User("rishabh@gmail.com", "abcd")
console.log(rishabh.email);
console.log(rishabh.password);
