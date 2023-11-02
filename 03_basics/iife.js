// Immediatelly Invoked Function Expressions (IIFE)

// This is used, so that global scope should not pollute the functions scoped 
// This can be used with this and arrow

// Syntax 
// (function(){}) ();


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ragnar')