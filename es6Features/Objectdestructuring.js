var Package={
    packageName:"Trip to Manali",
    packageLocation:"Manali",
    packageDuration:"10 days",
    packageDetails:{
        packagePrice:["300$","500$","700$","800$"],
        packageincludes:"Meals and Accomodation"
    },
    book:function (message) {
        console.log(message);
    }
}

//Case1: Regular Method returns array
let pname=Package.packageName
let pprice=Package.packageDetails.packagePrice
console.log(pname);
console.log(pprice);

//Case 2: returns object
//condition 1: Curly braces
//condition 2: Refrence name should be same as that which is in the object
let {packageDetails}=Package
let {packageLocation}=Package
console.log(packageDetails);
console.log(packageLocation);

//Case 3: Change the reference variable => so that we can declare our own reference variable
//packageDetails in object myself will be renamed as Pname
let{packageDetails:Pname}=Package
console.log(Pname);
//console.log(packageDetails); //ReferenceError: packageDetails is not defined