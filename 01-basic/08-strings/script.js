let x;

const name = "Ahmad";
const age = 20;

// Concatenation
x = "Hello, my name is " + name + " and i am " + age + " years old.";

// Template literals
x = `Hello, my name is ${name}, i am ${age} years old.`;

// String properties and methods

// Creating "a string object" (JS does this automatically when using a property or method on a prmitive string)
const s = new String("Hello World");

x = typeof s;

x = s.length;

// Access value by key
x = s[4];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toLocaleLowerCase();
x = s.toUpperCase();

// Returns the character at the specified index
x = s.charAt(0);

// Returns the index of the first occurrence of a specified value in a string
x = s.indexOf("O");

// Search a string for a specified value
x = s.substring(6, 7);
x = s.substring(7);
console.log(x);

// Extracts a part of a string and return a new string
x = s.slice(5, 7);

// Remove white space from beginning and end of string
x = s.trim();

// Replace all instances of a string
x = s.replace("World", "Rizky");

// Returns true if the string is found
x = s.includes("Hell");

// Returns the primitive value of a variable
x = s.valueOf();

// Returns an array of string
x = s.split("");
