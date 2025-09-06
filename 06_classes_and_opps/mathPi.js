const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(discriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const chai  = {
    name: "gingerTea",
    price: 20,
    isAvilable: true,
    orderChai: function(){
        console.log("chai is not ready");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
     writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== "function") {
    console.log(`${key} :  ${value}`);
    }
}