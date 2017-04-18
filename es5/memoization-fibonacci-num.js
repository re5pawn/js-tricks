function calcFib(x) {
  if (!calcFib.cache[x]) {
    if (x > 1) {
      calcFib.cache[x] = calcFib(x - 1) + calcFib(x - 2);
    }
  } else {
    calcFib.cache[x] = x;
  }
    
  return calcFib.cache[x];
}

calcFib.cache = {};

// usage
calcFib(7); // 13
calcFib(1476); // 1.3069892237633987e+308
