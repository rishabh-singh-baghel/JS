// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsrename(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userDetails = new user("rishu","rishu@gmail.com","1234")
// console.log(userDetails.encryptPassword());
// console.log(userDetails.changeUsrename());


// behind the scene

function user (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsrename = function(){
    return `${this.username.toUpperCase()}`
}

const userDetails = new user("rishu","rishu@gmail.com","1234")
console.log(userDetails.encryptPassword());
console.log(userDetails.changeUsrename());
