function getTypeOf(entity) {
  return Object.prototype.toString.call(entity).slice(8, -1);
}

// Usage
getTypeOf([]); // "Array"
getTypeOf({}); // "Object"
getTypeOf(''); // "String"
getTypeOf(0); // "Number"
getTypeOf(null); // "Null"
getTypeOf(undefined); // "Undefined"
getTypeOf(/[a-z]/); "RegExp"
getTypeOf(new Date()); // "Date"
getTypeOf(new Set()); // "Set" (ES2015 Set)
getTypeOf(new Map()); // "Map" (ES2015 Map)

// Notice!
getTypeOf(NaN); // "Number"
