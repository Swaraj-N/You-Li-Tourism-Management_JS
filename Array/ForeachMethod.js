var arr=["A",,"C","D",,"F"]
//For each method will ignore the unassigned values
arr.forEach((element,index,arr) => {
    console.log(element+"    "+index+"    "+arr);
});
//For in loop will ignore the unassigned value
for (var iterator in arr) {
    console.log(iterator+"    "+arr[iterator]);
}
//For in loop will not ignore the unassigned value
for (var iterator of arr) {
    console.log(iterator);
}
//For loop will not ignore the unassigned value
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[iterator]);
}