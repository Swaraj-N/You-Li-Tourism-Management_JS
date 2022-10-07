async function sync(){
    console.log("LOGIN SUCCESSFULL");
    console.log("Waiting 2 seconds for the element 1 to be present in the DOM");
    var p=new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Element 1 is visible");
       reject("Element 1 is not visible")
    }, 2000);})
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("CLICKED ON THE ELEMENT 1");
    console.log("Waiting 5 seconds for the element 2 to be present in the DOM");
    var p=new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Element 2 is visible");
       reject("Element 2 is not visible")
    }, 2000);})
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("CLICKED ON THE ELEMENT 2");
}
sync()
  
