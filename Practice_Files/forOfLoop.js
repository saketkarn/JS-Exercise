const arr=[1,2,3,4,5,6]

for(const num of arr){
    console.log(num);
}


const name=['a','b','c','d']

for(const character of name){
    console.log(character);
}

const map = new Map() //duplicate entries won't be allowed
map.set('IN', 'India')
map.set('USA', "United States of America")
map.set('UK', 'United Kingdom')
map.set('IN', 'India')


for (const [key,value] of map) {
    console.log(key,':-',value);
}


// const myObject={
//     'Game1': 'NFS',
//     'Game2': 'SpiderMan'
// }

// for (const [key,value] of myObject) {  //won't work for objects
//     console.log(key,value);
// }



