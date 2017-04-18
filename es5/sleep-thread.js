function sleep(milliseconds) {
  var endTime = new Date().getTime() + milliseconds;
  while (new Date().getTime() < endTime) {};
}

// usage
sleep(5000);

console.log('I\'m wake up!'); // 'I'm wake up!' after 5 sec.
