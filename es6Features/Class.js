class Package {
    constructor(PackageName, packageLocation, packageDuration) {
        this.PackageName = PackageName
        this.packageLocation = packageLocation
        this.packageDuration = packageDuration
    }
    static user1 = "I am Static User"
    user2 = "I am non Static User"

    static book() {
        console.log(this.user1); //Accssing static variable in static method
        console.log(this.PackageName);
        console.log();//Accessing non static variable in static method
        console.log("Booked");
        let refuser = new Package() // Create an Object to access non static variable in Static Method
        console.log(refuser.user2); //object name.non-static variable name
    }

    cancel() {
        console.log(this.user2);//Accessing non static variable inside non static method
        console.log(Package.user1); //Accessing static variable inside non static method
        console.log("Booking Cancelled");
    }

    static call(obj_ref) {
        this.book();//Accessing one static method inside another static method
        //In order to access non static method inside static method  pass obj_ref as parameter
        obj_ref.cancel()// Accessing non static method inside static block
    }

    callback() {
        Package.book()// Accessing static method inside non static method
        this.cancel()//Accessing one non static method inside another non static method
    }

}
//Creating instance is mandatory
//Trip1 & Trip2 are instance variable or reference variable
let trip1 = new Package("Manali", "Manali Location", ["10 days trip", "15 days trip", "20 days trip"])
let trip2 = new Package("Goa", "Goa Location", ["10 days trip", "15 days trip", "20 days trip"])
//Calling static variable
// console.log(Package.user1);
// //Callig non static variable
// console.log(trip1.user2);
//Calling static method
// Package.book();
//Calling Non-Static method
// trip1.cancel();
Package.call(trip1)
