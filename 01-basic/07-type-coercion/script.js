// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.

let x;

// Operator "+" menggabungkan string, sedangkan operator "*" melakukan perkalian matematika.

// Coerced to a string
x = 5 + "5"; // the result is string

x = 5 + Number("5"); // the result is number

// Coerced to a number
x = 5 * "5";

// Null is coerced to 0 as it is a 'falsy' value
x = 5 + null; // 5

x = Number(null); // 0
x = Number(true); // 1
x = Number(false); // 0

// true is coerced to 1
x = 5 + true;

// false is coerced to 0
x = 5 + false;

// Undefined is coerced to 0 (false)
x = 5 + undefined;

console.log(x, typeof x);
