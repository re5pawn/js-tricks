function callsCount(fn) {
  return function() {
    console.count('Count of calls for "' + fn.name + '"');
    return fn.apply(null, arguments);
  }
}

// usage
function sum(a, b) {
  return a + b;
}

var _sum = callsCount(sum);

_sum(1, 2);
// before output - Count of calls for "sum": 1

_sum(2, 3);
// before output - Count of calls for "sum": 2
