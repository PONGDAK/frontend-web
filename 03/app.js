// // var log = document.getElementById('log');
// //
// // console.log(log)
// //
// // debugger
// //
// //
// // log.innerHTML='안녕';
// var log = document.getElementById('log')
// console.log(log);
//
// // var a = document.querySelectorAll('#log a');
// //
// // console.log(a.length,a[0],a[1]);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
//
// log.appendChild(div); //스트링 안받음 돔 넣어야
// document.body.appendChild(div);
//
// log.innerHTML = log.innerHTML +'<div style="color:red">hello</div>';
// log.innerHTML +='<div style="color:red">hello</div>';

// window.addEventListenr('load', function(){
// console.log('load1');
// });
//
// window.addEventListenr('load', function(){
// console.log('load2');
// });

//
// window.onload =function(){
//   alert("load");
// }

// var log = document.getElementById('log');
// log.addEventListener('click',function(){
//   console.log('log click!!!');
// });


// var log = document.getElementById('log');
// function printLog(event){
//   console.log('log!!!');
//   debugger;
// }
// log.addEventListener('click', printLog); //printLog() 로 쓰게되면 저 함수의 리턴값이 들어가므로 주의할것




// console.log(divs);

// function changeBg(event){
//   console.log(changeBg);
//
//   divs[0].style.backgroundColor= 'blue';
// }
// divs[0].addEventListener('click', changeBg);
document.addEventListener("DOMContentLoaded", function(event) {

  var divs = document.querySelectorAll('#wrap div');

  function changeBg(event){
    console.log(changeBg);
    console.log(event.currentTarget);


    event.currentTarget.style.backgroundColor = 'blue';
  }
  // divs[0].addEventListener('click', changeBg);
  for(var i=0;i< divs.length;i++){
    divs[i].addEventListener('click', changeBg);
  }

  console.log("Dom요소가 모두 로딩이 되었습니다");
});  //html 로드된 다음에 실행되서 html전부에 자바스크립트 먹게 만들어줌
