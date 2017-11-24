// fs 모듈 사용
// node fs.js
var fs = require('fs');
//
// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

//이렇게도 작성가능 위와같은코드
fs.writeFileSync('message.txt', 'Hello Node');
console.log('It\'s saved!');
