// let counter=1
// const getData=()=>{
//   console.log("Fetching Data.... "+counter++)
// }

// const debounceFunction=function(fn, delay){
//   let timer
//   return function(){
//     let context=this,
//     args=arguments
//     clearTimeout(timer)
//     timer= setTimeout(()=>{
//       getData.apply(context,args)
//     },delay);
//   }
// }


// const betterFunction = debounceFunction(getData, 300)

let counter = 0

function getData(){
  console.log("key pressed "+counter++)
}

function debounceFunction(call, delay){
  let timer
  return function(...args){
    if(timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      call(...args)
    },delay)
  }
}

const betterFunction = debounceFunction(getData, 1000)
