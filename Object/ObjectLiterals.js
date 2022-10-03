var Package={
    packageName:"Trip to Manali",
    packageLocation:"Manali",
    packageDuration:"10 days",
    packageDetails:{
        packagePrice:"300$",
        packageincludes:"Meals and Accomodation"
    },
    book:function (message) {
        console.log(message);
    }
}
//To print all the Properties in the Package
console.log(Package);
//To add a property array to the object objName.property=[a1,a2,a3]
Package.packagesize=[4,5,6]
//To add a property array to an object within an object objName.objeName.Property
Package.packageDetails.packagePrice=["500$","1000$","1500$"]
//To delete a property use delete keyword followed by objName.property, below is an example for deleting a particular element in an array
delete Package.packageDetails.packagePrice[0]
//To print a particular property console.log(objname.property)
console.log(Package.packageName);
//To print a property with object of another object
console.log(Package.packageDetails.packagePrice);
//To call a function within a object objName.functionName
Package.book("I want to Book this Package")