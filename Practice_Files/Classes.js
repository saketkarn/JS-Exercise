// function User(usnermame, password, email){
//     this.usnermame=usnermame
//     this.password=password
//     this.email=email
// }

// User.prototype.encryptPassword=function(){
//     return `{this.password}abc`
// }

// User.prototype.changeUsername=function(){
//     return `{this.username.toUpperCase()}`
// }

// let userDetails=new User('Saket','abc@123','saketkarn38@gmail.com')
// console.log(userDetails)


class User{
    constructor(usnermame,password,email){
        this.usnermame=usnermame
        this.password=password
        this.email=email
    }

    encryptPassword(){
        return `{this.password}abc`
    }

    changeUsername(){
        return `{this.username}.toUpperCase()`
    }
}

let userDetails = new User('saket','abc@123', 'abc@123')
console.log(userDetails)

