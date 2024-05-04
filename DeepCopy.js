/*
Dep Copy-- Object ke andar ka sab kch chahe wo nested ho ya na ho, kisi ka v reference ni jaega, sabka original copy store hoga from original object to the second object
*/

var obj1 = {
  name: "Saket",
  age: 25,
  social: {
    facebook: {
      ac1: "somewhere@gmail.com",
      ac2: "somewhere@gmail.com"
    },
    twitter: {
      free: {
        ac1: "somewhere@gmail.com"
      },
      paid: {
        ac1: "somewhere@gmail.com"
      }
    }
  }
};

function makeDeepCopy(obj) {
  if (typeof obj === 'object' && obj !== null) {
    var copiedVal = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedVal;
  }
  return obj;
}

var copy = makeDeepCopy(obj1);
console.log(copy);

copy.social.facebook.ac1="changed"
console.log(copy.social.facebook.ac1)
console.log(obj1.social.facebook.ac1)
