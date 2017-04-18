/**
 * Cancelable Promise by istarkov
 * https://github.com/facebook/react/issues/5465#issuecomment-157888325
 */
const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

// usage
const somePromise = new Promise(r => setTimeout(r, 1000));
const cancelable = makeCancelable(somePromise);

cancelable
  .promise
  .then(() => console.log('resolved'))
  .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));

// cancel promise
cancelable.cancel();
