let details={
  name:'saket',
  age:25
}

Object.defineProperty(details,'name',{
  writable:false
})

details.name='karn'

console.log(details.name)
