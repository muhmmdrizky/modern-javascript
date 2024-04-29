// untuk membuat array dengan elemen awal, pendekatan yang lebih umum dan lebih mudah dibaca adalah menggunakan literal array

let x;

// Array literal
const numbers = [5, 6, 7, 8];
const mixed = [5, "Hello", true, null];

// Array constructor
const fruits = new Array("Apple", "Orange", "Guava");

// Get value by index
x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is ${fruits[1]}`;
x = numbers.length;

fruits[2] = "Pear";

fruits[3] = "Strawberry";

// Using the length as the index will always add on the the end
fruits[fruits.length] = "Blueberry";

x = fruits;

console.log(x);
