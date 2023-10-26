class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()
    }


    set password(newValue){
        this._password=newValue.toUpperCase()
    }


    get email(){
        return `email : ${this._email}`.toUpperCase()
    }

    set email(newEmail){
        this._email=newEmail.toUpperCase()
    }
}

let newUser=new User("saket@abc.com","abc")
console.log(newUser.password)
console.log(newUser.email)