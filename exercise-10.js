function bandingkanAngka(angka1, angka2) {
  switch (true) {
    case angka2 > angka1:
      return true;
      break;
    case angka2 < angka1:
      return false;
      break;
    default:
      return -1
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false