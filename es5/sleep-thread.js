function sleep(milliseconds) {
  var endTime = new Date().getTime() + milliseconds;
  while (new Date().getTime() < endTime) {};
}

sleep(5000);

// will log after 5 sec.
console.log('I\'m wake up!');
