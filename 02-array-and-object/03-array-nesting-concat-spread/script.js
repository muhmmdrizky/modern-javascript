let x;

const fruits = ["Apple", "Mango", "Orange"];
const berries = ["Strawberry", "Blueberry", "Blackberry"];

// Nesting array

// Nesting berries inside of fruits
// The push method of array instances adds the specified elements to the end of an array and returns the new length of the array
fruits.push(berries);

// Now we can access blueberry with the following
x = fruits[3][1];

// Create a new variable and nest both array
const allFruits = [fruits, berries];

x = allFruits[1][2];

// Concatenate array
x = fruits.concat(berries);

console.log(x);
