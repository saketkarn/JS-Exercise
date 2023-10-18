//The functions which accepts functions as an argument or may even return a function
//Examples- map, filter, reduce

//map- used to transform any value

const num=[1,2,3,4,5,6]
function double(x){
    return x*2
}
const result=num.map(double)
console.log(result);

//filter - used to filter values from array
function greaterThanThree(y){
    return y>3
}

const res=num.filter(greaterThanThree)
console.log(res);


//reduce - used to take values from array and come up with a single value out of them

//normal way:-

function sum(num){
    let s=0;
    for(let i=0;i<num.length;i++){
        s=s+num[i]
    }
    return s
}

console.log((sum(num)));

//using reduce:-

const output=num.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)

console.log(output);

const maxValue=num.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr
    }
    return acc
},0)
console.log(maxValue);