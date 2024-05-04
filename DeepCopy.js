/*
Dep Copy-- Object ke andar ka sab kch chahe wo nested ho ya na ho, kisi ka v reference ni jaega, sabka original copy store hoga from original object to the second object
*/

var obj1={
  name:"Saket",
  age:25,
  social:{
    facebook:{
    ac1:"somewhere@gmail.com",
    ac2:"somewhere@gmail.com"
    },
    twitter:{
      free:{
      ac1:"somewhere@gmail.com"
      },
    paid:{
      ac1:"somewhere@gmail.com"
      }
    }
  }
}

var obj2=JSON.parse(JSON.stringify(obj1))

obj2.social.facebook.ac1="new account"
console.log(obj1.social.facebook.ac1)
console.log(obj2.social.facebook.ac1)
