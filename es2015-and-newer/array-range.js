/**
 * Returns array with numbers beginning from the given start number
 * and with length equal to the given length
 */
function range(startNum, length) {
  return Array
    .from(Array(length), (item, idx) => idx + startNum);
}

// usage
range(0, 8) // [1, 2, 3, 4, 5, 6, 7, 8]
range(4, 3) // [4, 5, 6]
range(0, 0) // []
range(5, 0) // []
range(3.5, 8) // [3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5]
