//Mandatory to create object for the date
let d=new Date

//to convert date to string we use todateString()
console.log(d.toDateString());
//to convert date to string we use getDate()
console.log("Today's date "+d.getDate());
//to convert date to string we use getDay()
console.log("Day of the Week "+d.getDay());
//to convert date to string we use getFullYear()
console.log("This Year "+d.getFullYear());
//to convert date to string we use getMonth()
console.log("This Month "+d.getMonth());

//split date into Day, Month, Date, Year using split function
var data=d.toDateString()
var ActualDate=data.split(" ")
console.log(ActualDate[0]);
console.log(ActualDate[1]);
console.log(ActualDate[2]);
console.log(ActualDate[3]);