//Function currying using closure

let product=function(x){
    return function(y){
        console.log(x*y)
    }
}

let newProduct=product(5)
newProduct(10)
