//Array

const Marvel=["Thor","Hulk", "Spidy"]
const DC=['A',"B","C"]

// Marvel.push(DC)

// console.log(Marvel);

// console.log(Marvel.concat(DC));


// const newHeroes = [...Marvel , ...DC]
// console.log(newHeroes);

const ajibArray=[1,2,3,[4,5,6],[7,[6,7,[4,5]]]]

const sidhaArray=ajibArray.flat(Infinity)
console.log(sidhaArray);

console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));

console.log(Array.from({name:"Saket"}));   //It'll give empty array as we haven't specified about the key/value from which we need to make the new array.

let score1=10
let score2=50
let score3=100

console.log(Array.of(score1,score2,score3));
