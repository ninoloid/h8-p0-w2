var rows1 = 5;
for (let i = 1; i <= rows1; i++) {
  console.log('*');
}

var rows2 = 5;
for (let i = 1; i <= rows2; i++) {
  var a = "";
  for (let j = 1; j <= rows2; j++) {
    a += '*';
  }
  console.log(a);
}

var rows3 = 5;
var a = "";
for (let i = 1; i <= rows3; i++) {
  a += '*';
  console.log(a);
}


// WITH NESTED LOOPING
// var rows3 = 5;
// for (let i = 1; i <= rows3; i++) {
//   var a = ""
//   for (let j = 0; j < i; j++)
//     a += '*'
//   console.log(a)
// }