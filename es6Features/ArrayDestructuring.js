var arr=["1stEle","2ndEle","3rdEle","4thEle","5thEle"]
//Possibility 1 accessing the element in normal way
let x=arr[0]
let y=arr[1]
console.log(x,y);
//Possibility 2 accessing the first two elements
let [a,b]=arr
console.log(a,b);
//Possibility 3 accessing the 4 elements in the array by specifying 4 variables
let[l,m,n,o]=arr
console.log(l,m,n,o);
//Possibility 4 specify number of "," to skip the element in between and access the elements in array
let[e,,,f]=arr
console.log(e,f);