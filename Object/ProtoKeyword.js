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
var P={}
console.log(P);
P.__proto__=Package
P.packageName="Trip to Somewhere"
P.packageLocation="Anywhere",
P.packageDuration="Unknown days",
console.log(P.packageName);
console.log(P.packageLocation);
console.log(P.packageDuration);
console.log(P);