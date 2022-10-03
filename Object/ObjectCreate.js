var userDetails={
    UserName:"User",
    Password:"Pwd1234",
validate:function(){
console.log("The modified Details is "+this.UserName+" "+this.Password);
}
}
var modify=Object.create(userDetails)
modify.UserName="ModifiedUserName"
modify.Password="ModifiedPassword"
console.log("Password before modification");
console.log(userDetails.UserName);
console.log(userDetails.Password);
modify.validate()
//If you log object full body will be the output
console.log(userDetails);
//If you log object reference of object.create it will only give the output of overridden implementation
console.log(modify);