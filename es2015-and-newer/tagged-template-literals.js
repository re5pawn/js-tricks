const foo = (strings, ...values) => {
  console.log(strings);
  console.log(values);
};

let desc = 'awesome';

// function call
foo`Everything is ${desc}!`;

// Output:
// strings -> ["Everything is ", "!"]
// values -> ["awesome"]
