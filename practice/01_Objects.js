
// OBJECT LITERALS


const sym = Symbol("key1")

const obj = {
    name : "Ragnar",
    email : "ragnar@gmail.com",
    [sym] : "key1",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(obj.email)
// console.log(obj["email"])
// console.log(obj[sym])
// console.log(typeof obj["sym"])

// console.log(obj)

obj.greeting = function(){
    console.log("Hello, JS User")
}

// console.log(obj.greeting())

obj.greeting2 = function(){
    console.log(`Hello ${this.name}, Welcome to JS `)
}

console.log(obj.greeting2())


