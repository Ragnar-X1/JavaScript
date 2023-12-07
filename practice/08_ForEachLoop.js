// ForEach Loops


const arr = ["C++", "Ruby", "JavaScript", "React", "Python"]

// arr.forEach( (items) => {
//     console.log(items)
// } )

// arr.forEach( function(items) {
//     console.log(items)
// } )

// function printItems(items){
//     console.log(items)
// }

// arr.forEach(printItems)





// ForEach Loop in Objects

const Coding = [
    {
        language: "JavaScript",
        languageFileName: "js"
    },
    {
        language: "Python",
        languageFileName: "py"
    },
    {
        language: "C++",
        languageFileName: "cpp"
    },
    {
        language: "Ruby",
        languageFileName: "rb"
    }
]

Coding.forEach( (items) => {
    console.log(items.languageFileName)
} )