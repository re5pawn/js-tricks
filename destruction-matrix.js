// there is some matrix
let m = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];

function openOrSenior(data) {
  // using destruction to "age" and "handicap" will be assigned elements of inner array
  return data.map(([age, handicap]) => {
    return (age > 54 && handicap > 7) ? 'Senior' : 'Open'
  });
}

openOrSenior(m);
