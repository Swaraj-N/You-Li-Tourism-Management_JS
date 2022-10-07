function addition(a,b){
    return a+b
}
function substraction(a,b){
    if(a>b){
        return a-b
    }
    else{
        return b-a
    }
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    if(a>b){
        return a/b
    }
    else{
        return b/a
    }
}
function performOperation(a,b,operation){
    console.log("Function Started");
    console.log(operation.name+" is being Performed");
    result=operation(a,b)
    console.log(result);
    console.log("Function Ended");
}
performOperation(8,4,addition)
performOperation(8,4,multiplication)
performOperation(8,4,substraction)
performOperation(8,4,division)

