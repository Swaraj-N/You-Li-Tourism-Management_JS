let arr=["EnquiryTab","SinginLink","IssueTickets","SignupLink"]
//for in loop here tab provides the index number to print the value we should specify array[tab] within loop
//tab is index
for (let tab in arr) {
console.log(tab+" "+arr[tab]);
}
//for of loop here tab provides the actual values
for (let tab of arr) {
    console.log(tab);
}