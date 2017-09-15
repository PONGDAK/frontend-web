var num, total = 0;
var str = '';

for (var isEnd = false; isEnd === false; ) {

  num = prompt("숫자를 입력하세요");
  if (num !== null) {
    str += num + ', ';
  }


  if (num === null) {
    alert("입력된 숫자는 " + str + "이고 합은 " + total + " 입니다");
    isEnd = true;
  } else {
    total += parseInt(num, 10);
  }
}

alert(total);
