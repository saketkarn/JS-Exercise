const coding=["java","js","ruby","cpp"]
coding.forEach(function (eachLanguage){
    console.log(eachLanguage);
})

coding.forEach( (eachLanguage)=> {
    console.log(eachLanguage);
})

function printEachLanguage(coding){
    console.log(coding);
}

coding.forEach(printEachLanguage)


coding.forEach((eachLanguage,index,coding)=>{
    console.log(eachLanguage,index,coding);
})

const myCoding=[
    {
        languageName:'javascript',
        languageFileName:"js"
    },
    {
        languageName:'cpp',
        languageFileName:"c++"
    },
    {
        languageName:'swift by apple',
        languageFileName:"swift"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})


const arr=[1,2,3,4,5,6]

arr.forEach((element) => {
    console.log(element);
});