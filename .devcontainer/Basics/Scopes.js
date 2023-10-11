//var c=300
let a=300
if(true){
    let a=10
    const b=20
    console.log("INNER : "+a);
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="Saket"

    function two(){
        const website="youtube"
        console.log(username);  //chote bare se ice cream maang sakta hai
    }
    // console.log(website);  //bara chote se ice cream ni maang sakta hai

    two()
}

one()