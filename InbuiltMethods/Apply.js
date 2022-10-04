var Package={
    packageName:"Trip to Manali",
    packageLocation:"Manali",
    packageDuration:"10 days",
    packageDetails:{
        packagePrice:"300$",
        packageincludes:"Meals and Accomodation"
    },
    book:function () {
        console.log("Package Name is "+this.packageName+" "+"Package Duration is "+this.packageDuration);
    }
}
var packagedetails={
    packageName:"Trip to Mysore",
    packageLocation:"Manali",
    packageDuration:"5 days",
    change:function(value1,value2){
        console.log(value1+" "+this.packageName+" "+value2+" "+this.packageDuration);
    }
}
//passing object reference(userdetails) and array ["User First Name is "," User Last Name is"]
packagedetails.change.apply(Package,["Name is ","Duration is "])