// Template Literals

// 1. Create a string that includes a person's name, age, and a calculated BMI using template literals.

const personTwo = { name: 'Alice', weight: 60, height: 1.65, age: 36 };
const bmi = personTwo.weight / Math.pow(personTwo.height, 2);
let message = null;

console.log(message); // Output: Alice is 36 years old and has a BMI of 22.04.