function shuffle(array) {
  return array.sort(function() {
    return Math.random() - 0.5;
  });
}

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shuffle(list);
// -> something like this: [3, 6, 1, 5, 2, 7, 8, 4, 9, 10]
