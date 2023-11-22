// For of loop syntax 


// Array
// const myArray = [1,2,3,4,5]

// for (const i of myArray){
//     console.log(i)
// }


// Strings 
// const arr = "Ragnar"

// for (const i of arr){
//     console.log(`Each letter is ${i}`)
// }




// MAPS 
// Map is like a object but it holds only unique values 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")

// console.log(map)

// for (const [i,j] of map){  // we are destructuring the keys and values of map
//     // console.log(i)   // It will give output in array
//     console.log(i,j)
    
// }


// Objects
const obj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [i,j] of obj){   // for of syntax will not work here 
//     console.log(i,j)
// }

for (const i in obj){
    console.log(i)
}