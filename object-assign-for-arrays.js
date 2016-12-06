const original = [0, 1, 2, 3];
const copy = Object.assign([], original, { 2: 42 });

console.log(original); // [ 0, 1, 2, 3 ]
console.log(copy); // [ 0, 1, 42, 3 ]