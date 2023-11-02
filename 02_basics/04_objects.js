const tinderUser = {};

tinderUser.id = "abc123"
tinderUser.name = "Ragnar"
tinderUser.isLoogedIn = false

const regularUser = {
    email : "ragnar@google.com",
    fullname : {
        userfullName : {
            firstname : "Ragnar",
            lastname : "Lothbrook" 
        }
    }
}

console.log(regularUser.fullname.userfullName)

// Combining two Objects and returning new object
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 3: 'd'}

// const newObj = {obj1, obj2}
// const newObj = Object.assign({}, obj1, obj2) This is good practice

// Spread method to combine 2 objects and return new Object 
const newObj = {...obj1, ...obj2}
console.log(newObj)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")


// tinderUser
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))