//declare the object within a class by using constructor keyword and initialize it using this keyword
class Package{
    constructor(PackageName,packageLocation,packageDetails){
        this.PackageName=PackageName
        this.packageLocation=packageLocation
        this.packageDetails=packageDetails
    }
}
//To access the properties create a reference variable for the object
var P=new Package("Trip to Mysore","Mysore","5 Days Trip")
console.log(P);
console.log(P.PackageName);
console.log(P.packageLocation);
console.log(P.packageDetails);