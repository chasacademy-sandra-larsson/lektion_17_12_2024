

const myObject = {x: 100, y: 100};
const myArray = [1, 2, 3, 4, 5];

const newObject = myObject;
const newArray = myArray

newObject.x = 999;
newArray.push(666);

console.log(newObject); // { x: 999, y: 100 }
console.log(newArray); // [ 1, 2, 3, 4, 5, 666 ]

// Vad händer här, varför är orginalarrayen och orginalobjektet förändrat?
console.log(myObject); // { x: 999, y: 100 }
console.log(myArray); // [ 1, 2, 3, 4, 5, 666 ]

