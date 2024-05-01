//Rest Operator

let sum=function(...args){
  let result=0
    for(let i=0;i<args.length;i++){
      result+=args[i]
    }
    console.log(result)
}
sum(5,6,7,8)



//Spread Operator

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1, ...arr2]

console.log(arr3)

