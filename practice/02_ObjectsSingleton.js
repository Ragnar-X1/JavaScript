
// OBJECTS using SINGLETON / CONSTRUCTOR


const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Ragnar"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//     email: "ragnar@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname: "Ragnar",
//             lastname: "Lothbrook"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.lastname)



const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'x', 4:'d'}

// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(obj1)

console.log(tinderUser)

console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLogged"))