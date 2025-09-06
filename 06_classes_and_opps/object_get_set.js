const User = {
    _email: "ray@mysterio.com",
    _password: "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const userDetail = Object.create(User)
console.log(userDetail.email);
