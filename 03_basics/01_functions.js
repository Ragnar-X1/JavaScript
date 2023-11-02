// Functions

function myName(){

    console.log('R')
    console.log('A')
    console.log('G')
    console.log('N')
    console.log('A')
    console.log('R')

}

myName();

console.log("++++++++++++++++++++++++++++++++++++++++++")

function add(num1, num2){

    console.log(num1+num2)

}

function UserloginMessage(username){

    if(username === undefined){  // If username is not entered then it will work
        console.log("Please enter username")
        return // Here if this condition is true then it will execute this scope only
    }

    return `${username} you are looged in`  // If username is entered then this scope will execute

}

// console.log(UserloginMessage())  // Here the username is empty, so if block will execute only
console.log(UserloginMessage("Ragnar"))

console.log("++++++++++++++++++++++++++++++++++++++++++")
console.log("++++++++++++++++++++++++++++++++++++++++++")


// Rest method (...) is used when you don't know how many arguments are gonna pass

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(500,300,1000))


// How to pass objects in functions

const user = {
    name : "Vikings",
    price : "Blood"
}

function handleObject(anyobject){ // Here, any name can be given as parameters
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

console.log(handleObject(user)) // Here, the name of object is passed


// How to pass arrays in funtion
const arr = [200,400,600,800, 1000]

function handleArray(anyArray){
    return anyArray
}

console.log(handleArray(arr))




