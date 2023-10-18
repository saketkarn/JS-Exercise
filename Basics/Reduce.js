//Use reduce to count different ages present in the users

const users=[
    {age:21},
    {age:22},
    {age:23},
    {age:24},
    {age:21}
]

let differentAge = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]+=acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc
},{})

console.log(differentAge);