function getRandomHexColor() {
  return '#' + Math.random().toString(16).substr(-6);
}

// usage
getRandomHexColor(); // smth like - '#a48338'
