//Prototypal Inheritance

let object1={
    name:"Saket",
    city:"Patna"
}

let object2={
    age:25
}

object2.__proto__=object1

console.log(object2.name)
