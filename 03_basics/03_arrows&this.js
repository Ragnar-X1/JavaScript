const user = {
    username : "Ragnar",
    price : "Blood",

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to our Valhalla`)  // {this} keyword is used for the current context
        // console.log(this)

    }

}

// user.welcomeMessage()
// user.username = "Ragnar Lothbrok"  //Here the username is changed and it will reflect into the username

// user.welcomeMessage()


console.log(this)  // It will show {} empty because the current context is empty as there is nothing to relate by this 

// NOTE: If {this} code is written in browser then it will show window




// Arrow Method

// const add = function(num1, num2){
//     return num1 + num2
// }

// const add = (num1, num2) => {   // Explicit
//     return num1 + num2   // Remember, if curly braces is used then it is necessary to write return
// } 

// Another way (It is implicit)
// const add = (num1, num2) => num1 + num2
// console.log(add(5,1))  // Here, return is not used because there is no curly braces

// Another way
// const add = (num1, num2) => (num1+num2)  // curve braces can be used but no need to write return
// console.log(add(5,1)) 



// Passing object in arrow method
const user2 = () => ({firstname : "Ragnar", lastname : "Lothbrok"})
console.log(user2())

