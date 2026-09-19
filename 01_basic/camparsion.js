let a = 10;
let b = "10";
let c = 20;

// Equal (==) → sirf value check karta hai
console.log("a == b:", a == b);   // true (10 == "10")

// Strict Equal (===) → value + type dono check karta hai
console.log("a === b:", a === b); // false (number vs string)

// Not Equal (!=)
console.log("a != c:", a != c);   // true (10 != 20)

// Strict Not Equal (!==)
console.log("a !== b:", a !== b); // true (number vs string)

// Greater Than (>)
console.log("c > a:", c > a);     // true

// Less Than (<)
console.log("a < c:", a < c);     // true

// Greater Than or Equal (>=)
console.log("a >= 10:", a >= 10); // true

// Less Than or Equal (<=)
console.log("c <= 20:", c <= 20); // true
