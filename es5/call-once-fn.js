function once(fn, context) {
  var result;

  return function() {
    result = fn && fn.apply(context || this, arguments);
    fn = null;

    return result;
  }
}

var callOnce = once(function(a, b) { return a + b; });

callOnce(1, 2); // 3
callOnce(2, 4); // null
