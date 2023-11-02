// Object Literals

const mySymbol = Symbol("Key1")

const JsUser = {
    name : "Ragnar",
    "last name" : "Lothbrook",
    [mySymbol] : "myKeys1",
    age : 20,
    location : "Valhalla",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturaday"]
}

console.log(JsUser)
console.log(JsUser.name)
console.log(JsUser["name"])  //This is good practice
// console.log(JsUser.last name) // This will not work
console.log(JsUser["last name"])
console.log(JsUser[mySymbol])

JsUser["last name"] = "Lothbrookk"
console.log(JsUser)

// Object.freeze(JsUser) // This will not not allow ny modification in the object



// Functions In Objects

JsUser.greetings = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greetings)
console.log(JsUser.greetings())


JsUser.greetings2 = function(){
    console.log(`HelloJS User, ${this.name}`)
}

console.log(JsUser.greetings2())