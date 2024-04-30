let details={
    firstname:'Saket',
    lastname:'Karn'
}

let printDetails=function(hometown,state){
    console.log(this.firstname+' '+this.lastname+' '+hometown+' '+state)
}

let result=printDetails.bind(details,"Patna")
result("Bihar")

Function.prototype.myBind=function(...args){
    //this->printDetails
    let obj=this //storing this in obj
    params=args.slice(1) //first argument would be removed and the rest of them would be stored in param in the form of an array
    return function(...args2){
        // obj.call(args[0]) //args[0] would be pointing to the details object
        obj.apply(args[0],[...params,...args2])
        //call was changed to apply because params which is being passed is an array
        
    }
}

let result2=printDetails.myBind(details,"Patna")
result2("Bihar")
