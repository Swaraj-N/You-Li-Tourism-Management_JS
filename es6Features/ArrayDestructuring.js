var arr=["1stEle","2ndEle","3rdEle","4thEle","5thEle"]
//Possibility 1 access the first two elements
let [a,b]=arr
console.log(a,b);
//Possibility 2 access the element in normal way
let x=arr[0]
let y=arr[1]
console.log(x,y);
//Possibility 3 access the 4 elements in the array
let[l,m,n,o]=arr
console.log(l,m,n,o);
//Possibility 4 specify number of "," to skipp the element in between
let[e,,,f]=arr
console.log(e,f);