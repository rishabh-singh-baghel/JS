function setUserName(username){
    this.username = username
}

function creatUser(username, email, password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const rishu = new creatUser("rishu","rishu@gmail.com","1234")
console.log(rishu);
