// PROMISES
// i) It is created using new
// ii) It has a callback function which has 2 parameters(resolve, reject)
// iii) resolve is connected with then and reject is connected with catch
// iv) then is used to consume the promise
// iv) Finally is used when we have to print it whether the promise is resolved ot rejected




// Creating a promise using a variable

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("This task is done")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("This task is also done")
// })






// Creating a Promise without storing into a variable

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("This task is done")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("This task is also completed")
// })







// Resolve can also accept variable, object, array, etc 

// i)Passing object in resolve

// new Promise(function(resolve, reject){
//     setTimeout( () => {
//         resolve({
//             username: "Ragnar",
//             email: "ragnar@example.com"
//         })
//     }, 1000)
// }).then(function(user){
//     console.log(user)
// })







// ii) Chaining of then 
// -> when I passed object in resolve and then brought that data
// -> Then I can use that data after chianing it again using then

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({
//             username: "Ragnar",
//             email: "ragnar@example.com"
//         })
//     },1000)
// }).then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){   // This is chaining 
//     console.log(username)
// })







// Handling error without passing anything in resolve

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         const error = false;
//         if(!error){
//             resolve("This task is completed")
//         } else{
//             reject("Something went wrong")
//         }
//     }, 1000)

// }).then(function(res){
//     console.log(res)
// }).catch(function(rej){
//     console.log(rej)
// })








// Handling error using reject and catch

// new Promise(function(resolve, reject){
//     setTimeout(() => {
        
//         const error = false;

//         if(!error){
//             resolve({
//                 username: "Ragnar",
//                 email: "ragnar@example.com"
//             })
//         } else{
//             reject("Something went wrong")
//         }


//     }, 1000)
// })
// .then(function(user){
//     console.log(user)
// })
// .catch(function(error){
//     console.log(error)
// })









// Finally is used when something should be printed compulsary

// new Promise( (resolve, reject) => {
//     setTimeout( () => {
        
//         const error = false;

//         if(!error){
//             resolve({
//                 username: "Ragnar",
//                 email: "ragnar@example.com"
//             })
//         } else{
//             reject("Something went wrong!!")
//         }
    
//     })
// })
// .then( (user) => {
//     console.log(user)
//     return user.username
// })
// .then( (username) => {
//     console.log(username)
// })
// .catch( (error) => {
//     console.log(error)
// })
// .finally(function(){
//     console.log("This promise is either resolved or rejected")
// })










// Async and await 

// const promise5 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//          const error = false;

//          if(!error){
//             resolve({
//                 username: "Ragnar",
//                 emaill: "ragnar@example.com"
//             })
//          } else{
//             reject("Something went wrong!!")
//          }
//     })
// })

// async function consumePromise(){
//     try{
//         const response = await promise5
//         console.log(response)
//     } catch(error){
//         console.log(error)
//     }
// }

// consumePromise()








// Fetching data from api using asyn and await 

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("Something went wrong!!")
//     }
// }

// getAllUsers()









// Fetching data from api using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) => console.log("Something went wrong"))

