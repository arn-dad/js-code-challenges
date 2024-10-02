// Destructuring

// 1. Given a nested object person = { name: 'Alice', address: { city: 'New York' } }, destructure it to extract the city property directly.

const personOne = { name: "Alice", address: { city: "New York" } };

const {} = personOne;

console.log(city); // Output: New York

// 2. Given an array of objects users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], destructure it to extract the name and age properties of the first user.

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
const {} = users[0];

console.log(name, age); // Output: Alice 30

// 3. Destructure the first two elements of the array

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(firstFruit); // Expected: 'Apple'
console.log(secondFruit); // Expected: 'Banana'

// 4. Extract the name and city.

const employee = {
  employeeName: "Bob",
  position: "Developer",
  location: {
    country: "Germany",
  },
};

console.log(employeeName); // 'Bob'
console.log(country); // 'Berlin'
