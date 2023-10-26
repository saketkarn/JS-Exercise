class Student{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(this.username);
    }

    static createId(){ //Cannot extend the function as static is mentioned
        return `123`
    }
}

class Teacher extends Student{
    constructor(username, password){
        super(username)
        this.password=password
    }

    showDetails(usnermame,password){
        console.log(`Username: ${this.username}` + " " + ` Password : ${this.password}`);
    }
}

let Saket = new Teacher("saket", "abc123")
Saket.showDetails()
Saket.createId()