let x;

const fruits = ["Apple", "Mango", "Orange"];
const berries = ["Strawberry", "Blueberry", "Blackberry"];

// Nesting array

// Nesting berries inside of fruits
// The push method of array instances adds the specified elements to the end of an array and returns the new length of the array
fruits.push(berries);

// Now we can access blueberry with the following
// x = fruits[3][1];

// Create a new variable and nest both array
const allFruits = [fruits, berries];

// x = allFruits[1][2];

// Concatenate array
// x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from("12345");

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);
