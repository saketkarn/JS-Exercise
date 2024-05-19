let p1=new Promise(function(resolve, reject){
  let flag=true
  if(flag){
    resolve("Promise resolved")
  }
  else{
    reject("ERROR!")
  }
})

p1
.then(function(res){
  console.log(res)
})
.catch(function(error){
  console.log(error)
})
