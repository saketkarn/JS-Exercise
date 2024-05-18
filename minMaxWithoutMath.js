let num=[5,4,3,2,1]

function funMin(arr){
  let min=Infinity
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i]
    }
  }
  return min
}

function funMax(arr){
  let max=-Infinity
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  return max
}

console.log(funMin(num))
console.log(funMax(num))
