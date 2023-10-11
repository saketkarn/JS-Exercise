function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("E");
    console.log("T");
}

sayMyName()

function addTwonumbers(number1, number2) //parameters
{
    console.log(number1+number2);    
}

addTwonumbers(5,6)  //arguments

function loginUserMessage(userName="Karn"){

    if(userName===undefined){
        console.log("Invalid Username")
    }else{
        console.log(`The user ${userName} has logged in`);
    }
}

loginUserMessage()


function calculateCartPrice(a,b,c,...num1){  //rest
    return num1
}

console.log(calculateCartPrice(100,200,300,490,500,600));


const user={
    username:"Saket",
    age:25
}

function handleUser(user){
    console.log(`User's name is ${user.username} and the age is ${user.age}`)
}

handleUser({
    username:"Karn",
    age:27
})


const newArray=[100,200,300,400]

function printArray(newArray){
    console.log(newArray[1]);
}

// printArray(newArray)
printArray([500,600,700])