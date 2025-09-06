function User (email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
         }
    })
    Object.defineProperty(this, "password", {
        get: function(){
            return `${this._password}rishabh`
        },
        set: function(value){
            this._password = value
         }
    })
}

const rishu = new User ("rishu@gmail.com", "abcd")
console.log(rishu.email);
console.log(rishu.password);
