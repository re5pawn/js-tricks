const arr = ['a', 'b', 'c'];

/**
 * arr.entries() returns an iterable over index-element pairs
 * get these through destructuring and use with for...of loop
 */
for (const [index, elem] of arr.entries()) {
  console.log(`index = ${index}, elem = ${elem}`);
  // index = 0, elem = a
  // index = 1, elem = b
  // index = 2, elem = c
}
