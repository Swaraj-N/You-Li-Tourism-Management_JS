//Note 1 Variable in JS is Loosely Typed
//That is there is no need to specify the return type During the execution it will take on its own based on the Literal passed
var a=10
console.log(a);
//Note 2 We can change the Data type explicitly in JS (Usually from string to number and vice versa)
var b="20"
console.log(typeof(Number(b))) //Here String type of data is converted to Number
//Note 3 Difference between == and === in JS
var c=30
var d="30"
if (c==d) //It will perform Equals operation without taking data type into consideration
{
    console.log("c and d are same")
}
else
{
    console.log("c and d are not same");
}
var e=10
var f="10"
if(e===f) //It will perform Equals operation with taking data type into consideration
{
    console.log("e and f are not same");
}
else
{
    console.log("e and f are not same");
}
//Note 4 Pre Increment and Post Increment
var x=45
var z=50
//Pre increment will first initialize and then execute
console.log(x);
result=++x
console.log(result);
//Post increment will first execute and then initialize
console.log(z);
result2=z++
console.log(result2);