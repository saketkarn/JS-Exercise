// const tinderUer=new Object()  //singleton object
const tinderUser={}  //non-singleton object

tinderUser.id="123abc"
tinderUser.name="Saket"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName: {
            firstName: "Saket",
            lastName:"Karn"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1, obj2}
// const obj3= Object.assign({}, obj1,obj2)


const obj3={...obj1, ...obj2}

console.log(obj3);

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log((tinderUser.hasOwnProperty('isLoggedIn')));


const course={
    courseName : "JS by Hitesh in Hindi",
    price : 999,
    courseLearner : "Saket"
}


// course.courseLearner

const {courseLearner} = course  //object de-structure

console.log(courseLearner)