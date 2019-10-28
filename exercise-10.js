const bandingkanAngka = (angka1, angka2) => angka2 > angka1 ? true : angka1 > angka2 ? false : -1;

// PAKAI STANDARD FUNCTION
// function bandingkanAngka(angka1, angka2) {
//   switch (true) {
//     case angka2 > angka1:
//       return true;
//     case angka2 < angka1:
//       return false;
//     default:
//       return -1;
//   }
// }

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false