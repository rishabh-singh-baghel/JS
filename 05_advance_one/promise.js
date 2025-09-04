const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
 })

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username: "Rishabh", emai: "rishabh@gmail.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Rishu", password: "1234"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour
.then(function(user) {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);  
}).finally(() => console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
        
    }  
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data); 
//     } catch (error) {
//        console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))

