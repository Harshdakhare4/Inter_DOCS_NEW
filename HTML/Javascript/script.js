//primitive datatype
let name = "Harsh";
let age = 22;
let isActive = true;
let x; //undefined
let y = null;//NULL

let person = {name: "Harsh",age:22}; // Object
let number = [1,2,3,4] // Array


//Type conversion
Number("100");// number->string
String(100); // String->number

Boolean(1) ;// 1->true
Boolean(0) ;// 0->false

//Implicit conversion

console.log("5"+3);
// '+' is also the string concatenation operator

console.log("3"-1);
//'-' is a numeric operator only