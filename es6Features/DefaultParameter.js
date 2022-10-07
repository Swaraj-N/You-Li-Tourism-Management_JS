// //Case1 passing only 1 argument, here only a will be initialized
// function addition(a,b) {
//     console.log(a+b);
// }
// addition(10) //Nan (Not a Number)
// //overcome the above NaN pass default parameter so here be is not undefined it is initialized with 20
// function addition(a,b=20) {
//     console.log(a+b);
// }
// addition(10) //30
//Case2 Here we have provided default value for a but while calling the function we pass only 1 argument
//which will be re-initialized to a and b will remain undefined
//So it is mandatory to pass default parameter to the last parameter
function addition(a=20,b) {
    console.log(a+b);
}
addition(10) //NaN
//Case3 using default parameter inside a class to the constructor
class defaultParameter{
    constructor(a,b=20)
    {
        console.log(a+b);
    }
}

var df=new defaultParameter(10)
