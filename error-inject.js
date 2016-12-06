const errorInject = () => {
  throw new Error('Missing parameter');
};

// example to use
const square = (requiredNum = errorInject()) => {
  return requiredNum * requiredNum;
}

square(); // Uncaught Error: Missing parameter
square(11); // 121
