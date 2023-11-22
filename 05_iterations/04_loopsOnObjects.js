// Iteration on Objects

// For in Loop

// Objects
// const obj = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// // for (const [i,j] of obj){   // for of syntax will not work here 
// //     console.log(i,j)
// // }

// for (const i in obj){
//     console.log(i)
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }