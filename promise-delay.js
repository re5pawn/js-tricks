function delay(milliseconds) {
  return (result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), milliseconds);
    });
  };
}

// Usage
delay(1000)('hello')
  .then((result) => console.log(result));

somePromise.then(delay(1000)).then(() => {
  console.log('will call in 1 second after somePromise!');
});
