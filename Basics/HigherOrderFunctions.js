//The functions which accepts functions as an argument or may even return a function
//Examples- map, filter, reduce

//map- used to transform any value

const num=[1,2,3,4,5,6]

function double(x){
    return x*2
}
const result= num.map(double)
console.log(result);