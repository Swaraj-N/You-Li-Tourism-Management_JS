//initialize using this keyword
function Package(PackageName,packageLocation,packageDetails,book){
    this.PackageName=PackageName
    this.packageLocation=packageLocation
    this.packageDetails=packageDetails
   this.book=function() {console.log("I want to Book this Package");}
}
//Create a reference variable for the function
var P=new Package("Trip to Mysore","Mysore","5 Days Trip")
console.log(P);
console.log(P.PackageName);
console.log(P.packageLocation);
console.log(P.packageDetails);
console.log(P.book());