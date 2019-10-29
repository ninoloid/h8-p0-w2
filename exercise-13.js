function xo(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      countX += 1;
    } else if (str[i] === 'o') {
      countO += 1;
    } else {
      return 'Input salah, hanya menerima input \'x\' atau \'o\'';
    }

    // // Pakai switch case untuk menghitung x dan o;
    // switch (str[i]) {
    //   case 'x':
    //     countX += 1;
    //     break;
    //   case 'o':
    //     countO += 1;
    //     break;
    //   default:
    //     return 'Input salah, hanya menerima input \'x\' atau \'o\'';
    // }
  }
  return countX === countO ? true : false;

  // Pakai switch case untuk bandingkan value countX dan countO
  // switch (countX) {
  //   case countO:
  //     return true;
  //   default:
  //     return false;
  // }

  // Pakai if else untuk bandingkan value countX dan countO
  // if (countX === countO) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true