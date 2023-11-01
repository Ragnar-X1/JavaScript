"use strict"

let score = "33";

let score1 = "100bac"

console.log(score)

console.log(typeof(score))
console.log(typeof score)

// Type Conversion into Number/Integer of score
let valueInNumber = Number(score)
console.log(typeof valueInNumber)


// Type Conversion into Number/Integer of score1
let valueInNumber1 = Number(score1) // This will change it but type will be NaN
console.log(typeof valueInNumber1)
console.log(valueInNumber1)



// Type Conversion into Boolean 
let isLoggedIn = 1;
console.log(isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)


// Type Conversion of Number into String
let num = 100
let stringNum = String(num)

console.log(stringNum)
console.log(typeof(stringNum))

console.log(" ")


// ************************ Operations ****************************

console.log("**************** OPERATIONS ****************")

let value = 5;

let negValue = -value;

console.log(negValue)
console.log(typeof negValue)

// Arthematic Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)
// console.log(2%2)

let value2 = 1 + "2" // It's type will be string
console.log(typeof value2)


