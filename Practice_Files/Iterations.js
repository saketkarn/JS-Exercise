const myNums=[1,2,3,4,5,6,7,8,9,10]

// const result=myNums.map((val)=>{
//     return val*2
// })

const result=myNums.filter((num)=>{
    return num>4
})

console.log(result);


const res=myNums.map((val)=>{
    val=val+10
    return val
})

console.log(res);

const myNewArr=[]
myNums.forEach((element) => {
    element+=10
    myNewArr.push(element)
    return myNewArr
});
console.log(myNewArr);


const latestNum=myNums.map((num)=>{
    return num*10
})
.map((num)=>{
    return num+1
}
)
.filter((num) =>{
    return num>=40
})

console.log(latestNum);


const myReduce=myNums.reduce((acc,curr)=>{
    acc=acc+curr
    return acc
},0)

console.log((myReduce));