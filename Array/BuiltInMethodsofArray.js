// //Concat method of Array
// var arr=["User_Name","User_Email",1234567890]
// var brr=["Password",1234]
// console.log(arr.concat(brr[1]))
// console.log(arr);

// //Push method of Array
// var crr=["User_Name","User_Email",1234567890]
// var drr="Password"
// console.log(crr.push(drr));
// console.log(crr);

// //Pop method of Array
// var err=["User_Name","User_Email",1234567890]
// console.log(err.pop);
// console.log(err);

// //Unshift method of array
// var frr=["User_Name","User_Email",1234567890]
// var grr="Password"
// console.log(frr.unshift(grr));
// console.log(frr);

// //Shift method of Array
// var hrr=["User_Name","User_Email",1234567890]
// console.log(hrr.shift());
// console.log(hrr);

// //Splice method of Array
// var irr=["User_Name","User_Email",1234567890]
// console.log(irr.splice(0,1,"UserName"));
// console.log(irr);

// //Slice method of Array
// var jrr=["User_Name","User_Email",1234567890]
// console.log(jrr.slice(0,1));

// //every method of Array
// var krr=["User_Name","User_Email",1234567890]
// console.log(krr.every((ele) =>{
//     return (ele=="User_Name"||ele=="User_Email"||ele==1234567890)
// }))
// console.log(krr);

// //Some method of Array
// var lrr=["User_Name","User_Email",1234567890]
// console.log(lrr.some((ele) =>{
// return (ele=="User_Name")
// }))
// console.log(lrr);

// //IndexOf method of Array left to right traversing
// var mrr=["User_Name","User_Email",1234567890,1234567890]
// console.log(mrr.indexOf("User_Email",0));
// console.log(mrr);

// //LastIndexof method of Array Right to left traversing
// var nrr=["User_Name","User_Email",1234567890]
// console.log(nrr.lastIndexOf("User_Name",1));
// console.log(nrr);

// //reverse method of Array
// var orr=["User_Name","User_Email",1234567890]
// console.log(orr.reverse());
// console.log(orr);

// //includes method in Array
// var prr=["User_Name","User_Email",1234567890,123,654]
// console.log(prr.includes(123));
// console.log(prr);

// //join method in Array
// var qrr=["User_Name","User_Email",1234567890,123,654]
// console.log(qrr.join("ID"));
// console.log(qrr);

// //foreach method of Array
// var rrr=["User_Name","User_Email",1234567890,123,654]
// rrr.forEach((element,index)=>{
//     console.log(index+"  "+element);
// })
// console.log(rrr);

// //foreach method of Array
// var srr=[10,15,20,4,55,67,89]
// srr.forEach((element)=>{
//     if(element%5==0)
//     {
//         console.log(element+" is divisible by 5");
//     }
// })
// console.log(srr);

// //map method in Array
// var trr=[10,15,20,4,55,67,89]
// console.log(trr.map((element,index)=>{
// return element*2
// }));
// console.log(trr);

// //filter method of Array
// var urr = [10, 15, 20, 4, 55, 67, 89]
// console.log(urr.filter((element, index) => {
//     if (element > 30) {
//         return element
//     }
// }));
// console.log(urr);

// //sort method of Array return a-b ascending order
// var vrr = [10, 15, 20, 4, 55, 67, 89]
// console.log(vrr.sort((a, b) => {
//     return a - b
// }));
// console.log(vrr);

// //sort method of Array return b-a descending order
// var vrr = [10, 15, 20, 4, 55, 67, 89]
// console.log(vrr.sort((a, b) => {
//     return b - a
// }));
// console.log(vrr);

//reduce method of Array
// var wrr = [10, 15, 20, 4, 55, 67, 89]
// function myfun(total,wrr) {
//     return total-wrr
// }
// console.log(wrr.reduce(myfun));
// console.log(wrr);

// //reduce method of Array
// var wrr = [10, 15, 20, 4, 55, 67, 89]
// function myfun(total,wrr) {
//     return total-wrr
// }
// console.log(wrr.reduceRight(myfun));
// console.log(wrr);