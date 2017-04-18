let collection = (() => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let current = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (current === data.length - 1) {
        current = -1;
        return {
          value: data[current],
          done: true
        };
      } else {
        return {
          value: data[current += 2], // custom iteration logic
          done: false
        };
      }
    },

    return() {
      // calls when for-of will stop through break or throw
      current = -1;
    }
  }
})();

// Usage example
for (let item of collection) {
  console.log(item);
  // 2
  // 4
  // 6
  // 8
  // 10
}
