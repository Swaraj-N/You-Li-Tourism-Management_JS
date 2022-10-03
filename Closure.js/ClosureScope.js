var a="Manage"
function adminLogin() {
    console.log(a+" is accessible in adminlogin");
    function ManagePackage() {
        console.log(a+" is accessible in ManagePackage");
        function click() {
            console.log(a+" is accessible click block");
        }
        click()
    }
    ManagePackage()
}
adminLogin()