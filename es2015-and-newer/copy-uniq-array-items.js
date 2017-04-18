let someObj = { 'a': 1 };
let arr = [1, 2, 2, someObj, 3, 4, 4, someObj, 4, 5];

// get only uniq elements using Set (collection of uniq values)
let uniq = [...new Set(arr)];
console.log(uniq); // [1, 2, someObj, 3, 4, 5]
