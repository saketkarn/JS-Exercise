//While sending the JSON data to the server, we need the data to be present in string format.
//So, to convert the data, we take the use of JSON.stringify

const json1= {name:"saket",age:25}
const stringifiedJson1= JSON.stringify(json1)
console.log(json1)
console.log(stringifiedJson1)
