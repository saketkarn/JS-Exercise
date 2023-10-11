const a=5
console.log(a)

const b=new Number(100)
console.log(b)

console.log(typeof(b.toString()))


// const num=123.66766
const num=1234.578485
console.log(num.toPrecision(3))


const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'))

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min )