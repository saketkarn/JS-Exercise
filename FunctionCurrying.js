//Function currying using bind method

let multiply = function(a,b){
    console.log(a*b)
}

let multiplyByTwo=multiply.bind(this, 2)
multiplyByTwo(3)


let multiplyByThree=multiply.bind(this, 3)
multiplyByThree(9)



//Function currying using closure

let product=function(x){
    return function(y){
        console.log(x*y)
    }
}

let newProduct=product(5)
newProduct(10)
