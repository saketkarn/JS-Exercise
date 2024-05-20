const myThrottle=(fn,delay)=>{
  return function(...args){
    document.getElementById("clickButton").disabled=true
    setTimeout(()=>{
      fn()
    },delay);
  }
}

const myFun=myThrottle(()=>{
  document.getElementById("clickButton").disabled=false
  console.log("User Clicked!")
},1000)
