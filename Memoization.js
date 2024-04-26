const memoization=()=>{
  let cache={}
  return(value)=>{
    if(value in cache){
      console.log("Coming from cache")
      return cache[value]
    }
    else{
      console.log("Coming from main memory")
      let result =0
      result+=value
      cache[value]=result
      return result
    }
  }
}

const addition=memoization()
console.time()
console.log(addition(20))
console.timeEnd()
console.time()
console.log(addition(20))
console.timeEnd()
