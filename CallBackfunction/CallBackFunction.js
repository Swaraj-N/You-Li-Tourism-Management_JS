function add(a,b){
    console.log("Performing Addition");
    return a+b
}
function sub(a,b){
    console.log("Performing Subtraction");
    if(a>b){
        return a-b
    }
    else{
        return b-a
    }
}
function mul(a,b){
    console.log("Performing Multiplication");
    return a*b
}
function div(a,b){
    console.log("Performing Division");
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
performOperation(8,4,add)
performOperation(8,4,mul)
performOperation(8,4,sub)
performOperation(8,4,div)

