function getTypeOf(entity) {
  return Object.prototype.toString.call(entity).slice(8, -1);
}

// Usage examples
getTypeOf([]); // 'Array'
getTypeOf({}); // 'Object'
getTypeOf(''); // 'String'
getTypeOf(0); // 'Number'
getTypeOf(null); // 'Null'
getTypeOf(undefined); // 'Undefined'
getTypeOf(/[a-z]/); // 'RegExp'
getTypeOf(new Date()); // 'Date'
getTypeOf(new Set()); // 'Set'
getTypeOf(new Map()); // 'Map'
getTypeOf(Symbol.for('foo')); // 'Symbol'

// Beware!
getTypeOf(NaN); // 'Number'
