// Optional Chaining

// 1. Given a nested object user = { profile: { picture: 'profile.jpg' } }, safely access the picture property using optional chaining.

const user = { profile: { picture: 'profile.jpg' } };
let pictureUrl = null;

console.log(pictureUrl); // Output: profile.jpg

// 2. Given a nested object user = { profile: { address: { city: 'Yerevan' } } }, safely access the address.city property using optional chaining and if it is undefined show 'Unknown'.

const person = { profile: { picture: 'profile.jpg', address: null } };
let city =  null;

console.log(city); // Output: Unknown
