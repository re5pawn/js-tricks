function shuffle(array) {
  return array.slice().sort(function() {
    return Math.random() - 0.5;
  });
}

// Usage example
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var list2 = [{a: 'a'}, {b: 'b'}, 23, Date(), [1,2,3]];

shuffle(list);
// smth like - [3, 6, 1, 5, 2, 7, 8, 4, 9, 10]

shuffle(list2);
// smth like - [Array[3], 23, Object, "Mon Jan 02 2017 20:34:03 GMT+0200 (Финляндия (зима))", Object]
