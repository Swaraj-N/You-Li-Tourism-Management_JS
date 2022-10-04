var a="Manage"
function adminLogin() {
    console.log(a+" is accessible in adminlogin");
    function ManagePackage() {
        var b=87
        console.log(a+" is accessible in ManagePackage");
        function click() {
            var c=67
            console.log(c+b+" is accessible click block");
        }
        click()
    }
    ManagePackage()
}
adminLogin()