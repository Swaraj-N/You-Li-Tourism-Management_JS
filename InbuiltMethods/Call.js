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
    change:function(){
        console.log("Package Name is "+this.packageName+" "+"Package Duration is "+this.packageDuration);
    }
}


//use call method along with function and pass object reference in it
//here we are using the concept of Function Borrowing
Package.book.call(packagedetails)