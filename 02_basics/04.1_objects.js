// Destructuring Objects

const course = {
    coursename : "Vikings",
    price : "Blood",
    courseInstructor : "Ragnar Lothbrook"
}

// console.log(course.courseIntructor)

// Another Way 
const {courseInstructor : coach} = course  // This is de-structuring the object and we can give another name to the keys for calling
// console.log(courseInstructor)
console.log(coach)



// JSON API format 
// This is the data which comes from APIs and it's in JSON fromat
// It is little bit same Objects

// {
//     name : "Ragnar Lothbrook",
//     course : "Vikings",
//     price : "Blood",

// }
