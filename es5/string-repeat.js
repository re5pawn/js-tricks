/**
 * Repeat the string with given times
 * (alternative for ES2015 String.prototype.repeat)
 */
function repeatString(string, times) {
  return Array(times + 1).join(string);
}

// usage
repeatString('foo', 2); // 'foofoo'
repeatString('bar', 5); // 'barbarbarbarbar'
repeatString('baz', 1); // 'baz'
