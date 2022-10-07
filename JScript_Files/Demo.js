class packagedetails{
    constructor(Pname,Pduration,Pcost){
        this.Pname=Pname
        this.Pcost=Pcost
        this.Pduration=Pduration
    }
    static a=10
    b=20

    static view(instancevariable){
        // console.log(this.a);
        let bref=new packagedetails()
        console.log(bref.b);
       instancevariable.viewcomplete()
    }

    viewcomplete(){
        console.log(this.b);
        console.log(packagedetails.a);
        // packagedetails.view()
    }
}

var packageref=new packagedetails("Package name","10 days","500$")
// console.log(packagedetails.a);
// packagedetails.view()
// console.log(packageref.b);
// packageref.viewcomplete()
packagedetails.view(packageref)


//Rest Parameter
var arr1=[12,13,14,15,16]
var arr2=[17,18,19,20,21]
var arr3=[...arr1,...arr2]
// console.log(arr3);

var arr4=[100]
var arr5=[...arr1,...arr4]
// console.log(arr5);

var obj1={
    p1:"Swaraj",
    p2:"SDET"
}
var obj2={
    p1:"SWARAJ P T",
    p3:["Java","Selenium","JS","WebdriverIO"]
}
obj3={...obj1,...obj2}
// console.log(obj3);

var empname="SWARAJ"
// console.log(...empname);
// console.log(...empname[3]);

// function fnc(Name,Empid,...skset) {
//     console.log(Name,skset);
// }
// // fnc("Swaraj","1832","Java","Selenium","JS","WebdriverIO")

// //Null is a falsy value
// const data=null
// if(data)
// {
//     console.log(`${data} is Null`);
// }
// else
// {
//     console.log(`${data} is not Null`);
// }