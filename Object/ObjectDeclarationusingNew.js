var P=new Object()
    P.packageName="Trip to Manali"
    P.packageLocation="Manali"
    P.packageDuration="10 days"
    P.packageDetails={
        packagePrice:"300$",
        packageincludes:"Meals and Accomodation"}
        P.book=function (message) {
            console.log(message);
        }
//To print all the Properties in the Package
console.log(P);
//To add a property array to the object objName.property=[a1,a2,a3]
P.packagesize=[4,5,6]
//To add a property array to an object within an object objName.objeName.Property
P.packageDetails.packagePrice=["500$","1000$","1500$"]
//To delete a property use delete keyword followed by objName.property, below is an example for deleting a particular element in an array
delete P.packageDetails.packagePrice[0]
//To print a particular property console.log(objname.property)
console.log(P.packageName);
//To print a property with object of another object
console.log(P.packageDetails.packagePrice);
//To call a function within a object objName.functionName
P.book("I want to Book this Package")