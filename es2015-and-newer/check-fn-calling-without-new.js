function Foo() {
  // throw an error if Foo call without 'new' operator
  if (!new.target) {
    throw new Error('Foo must be called with "new"');
  }

  console.log('Instance of Foo has created');
}

// Usage examples
Foo(); // Foo must be called with "new"
new Foo(); // Instance of Foo has created
