let collection = (() => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let current = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (current >= data.length - 1) {
        current = -1;
        return { done: true, value: data[current] };
      } else {
        return { done: false, value: data[current += 2] };
      }
    },

    return() {
      // will call when for-of will stop through break or throw
      current = -1;
    }
  }
})();

// usage
// print - 2, 4, 6, 8, 10
for (let item of collection) {
  console.info('current item:', item);
}
