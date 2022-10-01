//Type 1 Array Declaration
var arr=new Array("A",1,2,3,4)
for (let index = 0; index < arr.length; index++) {
   
    console.log(index+" "+arr[index]);
}

//Type 2 Array Declaration
var brr=["A",1,2,3,4]
for (let index = 0; index < brr.length; index++) {
   
    console.log(index+" "+brr[index]);
}

//Drawback of Type1 Declaration
var crr=new Array(5)
console.log(crr.length);
//Over comming the Drawback
var drr=[5]
console.log(drr.length);