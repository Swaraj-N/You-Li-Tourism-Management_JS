var str=" These are Built in methods of strings "

//length function is used to get length of the string
str.length
console.log(str.length);


//split function split string based on seperator specified
//str.split(separator)
console.log(str.split(" "));
console.log(str.split("a"));


// str.charAt(position) function gives the position of the string
console.log(str.charAt(7));

//str.concat() function appends a string to an existing string
console.log(str.concat("Hello"));
console.log(str);


//str.endsWith checks that specified ending char and gives result as true or false
console.log(str.endsWith("e"));
console.log(str.endsWith(" "));


//str.includes(search_String) checks particular sring and returns true or false
console.log(str.includes("have"));


//str.indexOf(search_String) will get the position of the first matching string from left to right
console.log(str.indexOf("s"));


//str.lastIndexOf(search_String) will get the position of the first matching string from right to left
console.log(str.lastIndexOf("e"));


//str.replace(search_String) replaces the given string with searched string
console.log(str.replace("","hi"));
console.log(str.replace("s","a"));
//Note it will replace only first matching string

// str.repeat(Number) it will repeat the same string for specified number of times
console.log(str.repeat(3));


//str.trim() it wil remove leading and preceding spaces
console.log(str.trim());




