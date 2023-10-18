//Show people's detail whose age is < 30


const people=[
    {name:"Saket",age:29},
    {name:"xyz", age:31},
    {name:"abc", age:35}
]

// const ageLessThanThirty=people.filter((x)=>
//     x.age<30
// )


const ageLessThanThirty=people.filter((x)=>x.age<30).map((x)=>x.name)
console.log(ageLessThanThirty);


const usingReduce= people.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.name)
    }
    return acc
},[])

console.log(usingReduce);