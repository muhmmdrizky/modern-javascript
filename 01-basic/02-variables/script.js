// Ways to declare a variable
// Var, Let, and Const

let firstName = "Mohammad";
let lastName = "Ahsan";
let age = 35;

console.log(age);

// Naming conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a numver

// Multi-word formatting
// firstName -> camelCase
// first_name -> underscore
// FirstName -> PascalCase
// firstname -> lowercase

// We can re-assign 'let' variables. If we change 'age' to use 'const', we will get an error.
age = 36;
console.log(age);

// With let, we can declare a value without assigning a value.
let score;
score = 5;
console.log(score);

if (true) {
  score = score + 1;
}
console.log(score);

const x = 100;
// We can't re-assign a const variable
// if we change x = 200 will result an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

const person = {
  name: "Ahmad",
};
person.name = "Abdul";
person.email = "abdul@gmail.com";
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 5,
  e = 6;

console.log(d);
console.log(a);
