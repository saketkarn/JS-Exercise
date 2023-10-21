//Use map to print first name and last name together

const users=[
    {firstName:"Saket",
    lastName:"Karn"}
]

// const output= users.map((x)=> x.firstName + " " + x.lastName)

const output= users.map(function(x){
    return x.firstName + " " + x.lastName
})

console.log(output);
