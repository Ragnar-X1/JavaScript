// for Each Loop
// for each is a high order loop which uses a callback function 

const coding = ["JavaScript", "Python", "C++", "Next.js", "Swift"]

// coding.forEach( function (items) {
//     console.log(items)
// })




// Another Way 
// Arrow function

// coding.forEach( (items) => {
//     console.log(items)
// })




// Accessing an Array which contains objects as its values using forEach
const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },

    {
        languageName : "Python",
        languageFileName : 'py'
    },

    {
        languageName : "Java",
        languageFileName : "java"
    }

]

myCoding.forEach( (items) => {   // Here items means each object in array
    // console.log(items)
    console.log(items.languageName)
})