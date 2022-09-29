var arr=["Swaraj",'P T',15,' ',15.567]
for (var index = 0; index < arr.length; index++) {
  if(index==' ')
  {
    console.log("I have encountered empty");
    break
  }
    
}
var brr=["Swaraj",' ','P T',15,15.567]
for (var index = 0; index < arr.length; index++) {
    if(index==' ')
    {
      console.log("I have encountered empty i will chek for next elements");
      continue
    }
      
  }