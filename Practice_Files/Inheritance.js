class Student{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(this.username);
    }
}

class Teacher extends Student{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    printDetails(){
        console.log(`Username : ${this.username}` +" " + `Email : ${this.email}` + " " + `Password : ${this.password}`);
    }
}

let newTeacher = new Teacher("Saket", "saketkarn38@gmail.com", "abc123")

newTeacher.printDetails()