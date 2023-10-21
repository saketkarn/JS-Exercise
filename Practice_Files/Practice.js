function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}

x()


// function outer(b){
//     function inner(){
//         console.log(a,b);
//     }
//     var a=10;
//     return inner;
// }

// outer("Hello")()


// function outest(){
//     let a=200
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         let b=100
//         return inner
//     }
//     return outer
// }
// outest()()("Hello")


function outest(){
    let a=20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let c=10;
        return inner
    }
    return outer
}
outest()("Hello")()


const sum = (a,b) => a+b;


console.log(sum(5,6));