const foo = (strings, ...values) => {
  console.log('strings', strings);
  console.log('values', values);
};

let desc = 'awesome';

// usage
foo`Everything is ${desc}!`;
// strings ["Everything is ", "!"]
// values ["awesome"]
