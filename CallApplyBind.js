// Call method--- helps in function borrowing

// let firstObject={
//     firstName:'Saket',
//     lastName:'Karn',
// }

// let printFullName=function(city){
//         console.log(this.firstName+' '+this.lastName+' '+city)
//     }

// printFullName.call(firstObject,"Patna")

// let secondObject={
//     firstName:'Xyz',
//     lastName:'Abc'
// }

// printFullName.call(secondObject,"Honolulu")


// Bind method--- helps in function borrowing, works same as call method, just we need to pass the parameters as an array

// let firstObject={
//     firstName:'Saket',
//     lastName:'Karn',
// }

// let printFullName=function(city){
//         console.log(this.firstName+' '+this.lastName+' '+city)
//     }

// printFullName.apply(firstObject,["Patna"])

// let secondObject={
//     firstName:'Xyz',
//     lastName:'Abc'
// }

// printFullName.apply(secondObject,["Honolulu"])

//Apply method--- helps in function borrowing, works the same way, just while calling the function, we need to store it another variable which we need to call as a function

let firstObject={
    firstName:'Saket',
    lastName:'Karn',
}

let printFullName=function(city){
        console.log(this.firstName+' '+this.lastName+' '+city)
    }

let firstResult=printFullName.bind(firstObject,"Patna")
firstResult()

let secondObject={
    firstName:'Xyz',
    lastName:'Abc'
}

let secondResult = printFullName.bind(secondObject,"Honolulu")
secondResult()
