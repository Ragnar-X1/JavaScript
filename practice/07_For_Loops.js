// For Of Loop


const maps = new Map()
maps.set("In", "India")
maps.set("Fr","France")
maps.set("USA", "United States Of America")

// for (const i in maps){
//     console.log(i)
// }

// for (const [i,j] of maps){
//     console.log(i," => ",j)
// }


// Loops in Objects
const obj = {
    cpp: "C++",
    rb: "Ruby",
    js: "JavaScript"
}

// for (const i of obj){  //Object is not iterable using for of loop
//     console.log(i)
// } 


// for (const i in obj){
//     console.log(i, " => ", obj[i])
// }