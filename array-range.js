function range(startNum, length) {
  return Array
    .from(Array(length), (item, idx) => idx + startNum);
}

// Usage:
// range(0, 8) -> [1, 2, 3, 4, 5, 6, 7, 8]
// range(4, 3) -> [4, 5, 6]
// range(0, 0) -> []