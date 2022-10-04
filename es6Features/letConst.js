// console.log(a);  // undefined
//     var a 
//     a = 100;
//     var a =200
//     console.log(a);   //200
    
    //****************************************************************************************/
    
    // console.log(x);   //ReferenceError: Cannot access 'x' before initialization
    // let x 
    // x = 20
    // let x = 35    //error redeclaration is not possible
    // x = 95              
    // console.log(x);    //95
    //****************************************************************************************/
    
    // const y = 3.1415;
    
    // function fun1() {
    //     console.log("local");
    // }
    // y = 3;                  //TypeError: Assignment to constant variable.
    // console.log(y);    //3.1415
    
    //****************************************************************************************/
    
    // {
    //     var b = "Rekha" //scope is global
    //     let w = "welcome" //scope is block
    // }
    
    //****************************************************************************************/
    
    // console.log(index);          //  undefined  if next block of for loop is uncommented   
    // for (var index = 0; index < 5; index++) {
    //     console.log(index);  //0 1 2 3 4
    // }                                                
    // console.log(index);    //5
    
    //****************************************************************************************/
    
    // console.log(index);       //ReferenceError: index is not defined and
    // for (let index = 0; index < 5; index++) {
    //     console.log(index);         //0 1 2 3 4            
    // }
    // console.log(index); //ReferenceError: index is not defined         
    
    //****************************************************************************************/
    
    // var a = 100;
    // console.log(a);   //100
    // {
    //     var a = 200
    //     console.log(a);  //200
    // }
    // console.log(a);   //200
    
    //****************************************************************************************/
    
    // let x = 10
    // {
    //     let x = 20 
    // }
    // console.log(x);   //10
    
    //****************************************************************************************/
    
    // var a = 20
    // let a = 30
    // console.log(a);  //SyntaxError: Identifier 'a' has already been declared

//****************************************************************************************/
