// REST OPERATOR (...)

// function sum(...num1){
//     return num1
// }

// console.log(sum(200,500,400,100,600))


// Handling function with Objects

const obj = {
    name: "Ragnar",
    userId: "abc123"
}

function handleObject(anyObject){
    console.log(`Employee name is ${anyObject.name} and his userId is ${anyObject.userId}`)
}

// handleObject(obj)
handleObject({
    name: "THOR",
    userId: "God"
})



// Handling function with array

const arr = [200,100,300,500,1000,10000]

function returnLastValue(anyArray){
    return anyArray[5]
}

console.log(returnLastValue(arr))