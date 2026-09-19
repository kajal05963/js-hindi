// Arithmetic Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** b);      // 1000

// Comparison Operations
console.log("Equal:", a == b);         // false
console.log("Not Equal:", a != b);     // true
console.log("Strict Equal:", a === 10); // true
console.log("Greater:", a > b);        // true
console.log("Less:", a < b);           // false

// Logical Operations
let x = true;
let y = false;

console.log("AND:", x && y);           // false
console.log("OR:", x || y);            // true
console.log("NOT:", !x);               // false

// Assignment Operations
let num = 5;
num += 2;  // num = num + 2
console.log("+= :", num);              // 7

num *= 3;  // num = num * 3
console.log("*= :", num);              // 21

// Ternary Operator (short if-else)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can Vote:", canVote);     // Yes
