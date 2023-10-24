//Promise can be defined as an object which returns the state of an async task, it can be pending, fulfilled or rejected.

// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     setTimeout(function(){
//         console.log("Check Promise")
//         resolve()
//     })
// })

// promiseOne.then(function(){
//     console.log("Promise has been completed successfully");
// })


new Promise(function(resolve, reject){
  console.log("ABC")  
  resolve()
}).then(function(){
    console.log("XYZ")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(
        function(){
            resolve({username:"Saket", email:"saketkarn38@gmail.com"})
        },1000)
})

promiseThree.then(function(userDetails){
    console.log(userDetails)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"Saket",password:123})
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },2000)
})

promiseFour
.then(function(user){
    console.log(user)
    return user.password
}).then(function(userPassword){
    console.log(userPassword)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise has been either rejected or completed successfully")
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"javascript",password:9876})
        }
        else{
            reject('ERROR: JS WENT WRONG')
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //We need to add await here as to convert raw data to json, it'd take some time.
//     console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getAllUsers()


// const getAllUsers = new Promise(function(resolve,reject){
//     const response=fetch('https://jsonplaceholder.typicode.com/users')
//     response.then(function(){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     response.catch(function(error){
//         console.log(error)
//     })
// })

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})