const mySymbol = Symbol("key1")

const user={
    name:"Saket",
    [mySymbol]:"mykey1",
    "full name":"Saket Karn",
    age:24,
    location:"Pune",
    email:"saketkarn38@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

user.email="newemail@gmail.com"

console.log(user.email)
console.log(user["email"]);

console.log(user["full name"]);

console.log(user[mySymbol]);

// Object.freeze(user)
user.email="latestemail@gmail.com"
console.log(user["email"]);

user.greeting=function() {
    console.log("hello JS user");
}

console.log(user.greeting);
console.log(user.greeting());
