let p1=new Promise(function(resolve, reject){
  let flag=true
  if(flag){
    resolve("Promise resolved")
  }
  else{
    reject("ERROR!")
  }
})

async function handlePromise(){
  try{
    let try1=await p1
    console.log(try1)
  }
  catch(error){
    console.log(error)
  }
}
