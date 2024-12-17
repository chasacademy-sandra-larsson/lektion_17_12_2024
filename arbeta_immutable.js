// Array
const numbers = [1,2,3];

// Mutable way
numbers.push(999);

// Immutable way 
const numbersCopy = [...numbers, 999];


//Objekt
const person = {
    name: "Sandra",
    age: 30 
}

// Mutable way
person.age = 55;

// Immutable way
const updatedPerson = {
    ...person,
    age: 55,
    hobby: "sports"
}

console.log(updatedPerson);


// Map, filter, reduce
const fruits = ["apple", "banana"];

// Mutable way
fruits.splice(1, 1);

// Immutable
const updatedFruit = fruits.filter(fruit => fruit !== "banana");
console.log(updatedFruit);

