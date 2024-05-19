/* Shallow Copy- 
Jab hm kisi object ko copy kare with object.assign ya spread operator ko use krke to in dono hi case me top level props copy ho jate h 
bt nested object ki props copy hone ki jagah fir se reference pass kr deti h */

var obj1={
  name:"Saket",
  age:25,
  social:{
    facebook:{
    ac1:"somewhere@gmail.com",
    ac2:"somewhere@gmail.com"
    },
    twitter:{
      free:{
      ac1:"somewhere@gmail.com"
      },
    paid:{
      ac1:"somewhere@gmail.com"
      }
    }
  }
}

var obj2={...obj1}

obj2.name="new name"
console.log(obj1.name)
console.log(obj2.name)

obj2.social.facebook.ac1="new account"
console.log(obj1.social.facebook.ac1) //older object's ac1 also got changed
console.log(obj2.social.facebook.ac1)



//Easy Code

let obj1={
  name:"Saket",
  age:25
}

let obj2= obj1

obj2.name="Karn"

console.log(obj1.name)
console.log(obj2.name)
