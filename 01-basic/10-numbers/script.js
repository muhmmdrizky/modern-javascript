let x;

const num = new Number(5);

// Returns a string representation of the number
x = num.toString();

// To get the length
x = num.toString().length;

// Returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// Returns a number with the specified length
x = num.toPrecision(3);

// convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// returns a string representation of the number, using the current locale
x = num.toLocaleString("en-US");

// Get value
x = num.valueOf();

// The Number object itself has some properties and methods
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
