// FUNCTIONS


function loginUserMessage(username = "THOR"){

    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username}, just logged in`

}

console.log(loginUserMessage())