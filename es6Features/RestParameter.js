function UserSignup(Firstname,lastname,Emailid,...mobilenum) {
    console.log(mobilenum);
}
UserSignup("SWARAJ","P T","swaraj926@gmail.com","1234567890","2345678901","3456789012","4567890123")
//output
//[ '1234567890', '2345678901', '3456789012', '4567890123' ]

//Below code is not object creation it is just equating
var {Firstname,lastname,Emailid,...mobilenum}={
    Firstname:"SWARAJ",
    lastname:"P T",
    Emailid:"swaraj926@gmail.com",
    mobilenum:["1234567890","2345678901","3456789012","4567890123"]
}
console.log(mobilenum);
//output
/* {
    Firstname: 'SWARAJ',
    lastname: 'P T',
    Emailid: 'swaraj926@gmail.com',
    mobilenum: [ '1234567890', '2345678901', '3456789012', '4567890123' ]
  } */