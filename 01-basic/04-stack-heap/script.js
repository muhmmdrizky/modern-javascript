// Value is stored in the stack
const name = "Ahmad";
const age = 33;

// Reference is stored in the heap
const person = {
  name: "Ahsan",
  age: 36,
};

let newName = name;
newName = "Abdul";

let newPerson = person;
newPerson.name = "hendra";

console.log(name, newName);
console.log(person, newPerson);
