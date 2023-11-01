// Datatype Summary

// 2 types of Datatype

// 1. Primitive -> 7 Types
        // 1. String
        // 2. Number
        // 3. Boolean
        // 4. BigInt
        // 5. Symbol
        // 6. Undefined
        // 7. null

    // These are not same 
    const id = Symbol("123") 
    const id2 = Symbol("123")

    console.log(id === id2)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXX")


// 2. Reference (Non Primitive)
        // 1. Arrays
        // 2. Objects
        // 3. Functions

    // Arrays
    console.log("****************Arrays*****************")
    const heros = ["Superman", "Shaktiman", "Iron Man"]
    console.log(heros);
    console.log(typeof(heros))
    console.log("XXXXXXXXXXXXXX")


    // Objects
    console.log("************************Objects************************")
    let myObj = {
        name: "Ragnar",
        age: 20,
    }
    console.log(myObj)
    console.log(typeof(myObj))
    console.log("XXXXXXXXXXXXXXXXXXXXXXXX")


    // Functions
    console.log("*****************Functions*********************")
    const myFunction = function(){
        console.log("This is Ragnar");
    }
    console.log(myFunction)
    console.log(typeof myFunction)


    