// Log number
console.log(55);

// Log string
console.log("Hello World");

// Log multiple values
console.log(55, "Hello", true);

// Log a variable
const x = 66;
console.log(x);

// Console error & warning
console.error("Alert");
console.warn("Warning");

// Log object as table
console.table({ name: "Muhammad Rizky", email: "muhammadrizky@gmail.com" });

// Group console commands
console.group("Simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

// Add CSS to logs
const styles = "padding: 10px; background-color: white; color: green";
console.log("%cHello World", styles);
