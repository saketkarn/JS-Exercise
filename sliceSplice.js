//slice method

let arr1=[1,2,3,4,5]
let arr2=arr1.slice(1,3) //stores the values from index 1 to 3 without modifying the original array
console.log(arr1)
console.log(arr2)



//splice method

let arr3=[1,2,3,4,5]
let arr4=arr3.splice(1,3) //stores the first 3 values from the index 1 and also modifies the original array
console.log(arr3)
console.log(arr4)

let arr5=arr3
arr5.splice(1,0,10,11) //inserts 10 and 11 at the index 1
console.log(arr5)
