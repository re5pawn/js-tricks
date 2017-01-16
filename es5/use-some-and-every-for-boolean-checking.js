/**
 * Use Array.prototype.some and Array.prototype.every
 * methods for boolean checking.
 */

// classic ways
var isChanged = item.foo !== cacheItem.foo
  || item.bar !== cacheItem.bar
  || item.baz !== cacheItem.baz;
  
var isFullChanged = item.foo !== cacheItem.foo
  && item.bar !== cacheItem.bar
  && item.baz !== cacheItem.baz;

// some and every for more readable code
var isChanged = [
  item.foo !== cacheItem.foo,
  item.bar !== cacheItem.bar,
  item.baz !== cacheItem.baz
].some(Boolean);

var isFullChanged = [
  item.foo !== cacheItem.foo,
  item.bar !== cacheItem.bar,
  item.baz !== cacheItem.baz
].every(Boolean);
