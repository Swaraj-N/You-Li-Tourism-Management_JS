function userlogin(usn,pwd){
    console.log("User Login Succesfull");
}
function adminlogin(usn,pwd){
    console.log("Admin Login Succesfull");
}
function loginOperation(usn,pwd,account){
    return account(usn,pwd)
}
loginOperation("Swaraj","Password",adminlogin)