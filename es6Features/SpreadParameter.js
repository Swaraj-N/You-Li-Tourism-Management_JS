//Concatinating the two arrays
var array=[1,2,3,4]
var array1=[5,6,7,8]
var array2=[...array1,...array]
console.log(array2);
//concatinating two objects
var user={
    fname:"User1",
    lname:"user"
}
var user_details={
    email:"user1@gmail.com",
    mnum:"1234567890"
}
var b={...user,...user_details}
console.log(b);
//converting a string into and array
var userName="User123"
console.log(...userName);
//when we concatinate two objects if the properties are same then the latest object value will be overridden
let users={
    fname:"User1",
    lname:"user"
}
let userdetails2={
    fname:"User2",
    email:"user1@gmail.com",
    mnum:"1234567890"
}
users={...users,...userdetails2}
console.log(users);

