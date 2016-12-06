function settings() {
  return { display: { color: 'red' }, keyboard: { layout: 'querty'} };
}

const { display: { color: displayColor }, keyboard: { layout: keyboardLayout }} = settings();

console.log(displayColor, keyboardLayout); // red querty

// the same with es5:
// var tmp = settings();
// var displayColor = tmp.display.color;
// var keyboardLayout = tmp.keyboard.layout;
// console.log(displayColor, keyboardLayout); // red querty
