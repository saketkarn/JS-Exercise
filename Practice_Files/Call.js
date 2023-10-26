function setUsername(username){
    this.username=username
    console.log("called");
}


function setAllDetails(username, email, password){
    setUsername.call(this, username) //Here, the above function is explicitly called and the above function would be using this username instead of it's own one.
    this.email=email
    this.password=password
}

let userDetails=new setAllDetails('saket','saketkarn38@gmail.com','abc@123')
console.log(userDetails);