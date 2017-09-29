var board = document.getElementById('board');
var spanArray = new Array(16);
var sw = -1;
var tmp;

for (var i = 0; i < 16; i++) {
  if (i % 4 == 0) {
    sw *= -1;
  }
  spanArray[i] = document.createElement('span');
  if (sw === 1) {
    if (i % 2 === 0) {
      spanArray[i].className = 'black';
      spanArray[i].style.backgroundColor = 'black';
    } else {
      spanArray[i].className = 'white';
      spanArray[i].style.backgroundColor = 'white';
    }
  }
  if (sw === -1) {
    if (i % 2 === 0) {
      spanArray[i].className = 'white';
      spanArray[i].style.backgroundColor = 'white';
    } else {
      spanArray[i].className = 'black';
      spanArray[i].style.backgroundColor = 'black';
    }
  }
    board.appendChild(spanArray[i]);
}

document.addEventListener("DOMContentLoaded", function(event) { //스타일쪽 헤더에 놔둬도 컨텐츠가 전부 로딩된다음
                                                              //실행되어 에러가 안남

var divs = document.querySelectorAll('#board span');
  function changeBg(event) {
    if(tmp != null){ //!==으로 하면 에러남  엄격한 비교라서 변수타입까지 비교함
      tmp.style.backgroundColor = tmp.className;
    }
    event.currentTarget.style.backgroundColor = 'red';
    tmp = event.currentTarget;
  }
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', changeBg)
  }
});
