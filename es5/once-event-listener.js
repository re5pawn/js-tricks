element.addEventListener('click', function cb(event) {
  console.log('clicked!');
  // ...

  event.currentTarget.removeEventListener(event.type, cb);
});

// for modern browsers (http://caniuse.com/#feat=once-event-listener)
element.addEventListener('click', function(event) {
  console.log('clicked!');
  // ...
}, { once: true });
