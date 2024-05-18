function Person(name){
  this.name=name
}

Person.prototype.greet=function(){
  console.log("Hello "+this.name)
}

let person1=new Person("Saket")
person1.greet()

let person2=new Person("Karn")
console.log(person2.__proto__===Person.prototype)
