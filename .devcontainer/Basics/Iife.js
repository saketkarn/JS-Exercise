// Immediately Invoked Function Expressions (IIFE)

(function chai(){ //Named IIFE
    console.log('DB CONNECTED');
})(); //Here semicolon is required to mark the end of IIFE as if after this function, one more IIFE is called, then it'd throw an error

// chai()


// (function aurchai(){
//     console.log('SECOND DB CONNECTED');
// })()


( () => {
    console.log('SECOND DB CONNECTED');
}) ();


( (name) =>{  //Un-named IIFE
    console.log(`THIRD DB CONNECTED BY ${name}`);
}) ('Saket')