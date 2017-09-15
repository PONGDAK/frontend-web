//짝수 홀수 출력 프로그램
var even = '';
var odd = '';

for (var i = 1; i <= 100; i++) {
  var tmp = i % 2;
  if (tmp === 0) {
    even += i + ', ';
  } else {
    odd += i + ', ';
  }
}
console.log('짝수: ' + even);
console.log('홀수: ' + odd);
