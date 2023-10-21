const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}


const programming =['js','rb','py','cpp']
for (const key in programming) {
    console.log(programming[key]);
}