let package=10
let updatedpackage=package+1
let createdpackage=++package
if (createdpackage==updatedpackage) {
    console.log("1 Package has been created");
} 
else if(updatedpackage==package)
{
console.log("UpdatedPackage is equal to Package");
}
else {
    console.log("Package not created");
}