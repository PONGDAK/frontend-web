//start...
// id가 todoString 인 element 가져오기
var todoStringField = document.getElementById('todoString');
var todoTemplateHtml = document.getElementById('todoTemplate').innerHTML;
var listDom = document.getElementById('todoList');

console.log(todoStringField);


todoStringField.addEventListener('keyup', addTodo);

//삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
listDom.addEventListener('click', checkDelete);

//처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
listDom.innerHTML = loadData();



function addTodo(event) {

  console.log('todoStringField keyup!');

  //엔터키가 아니면 함수 중지
  if (event.keyCode !== 13 || todoStringField.value === "") {
      console.log('stop event');
    event.stopPropagation(); //이벤트 전파중지
    return;
  }

  var newTodo = todoStringField.value;
  todoStringField.value = "";

  console.log('새로운 todo:', newTodo);

  listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});

  saveData();
}
function checkDelete(event) {

  //if(!confirm('정말 삭제하나용? ')){
  //  return;
  //}


  if(event.target.className !== 'delete') {
    return;
  }
  var deleteBtn = event.target;

  //버튼의 상위엘리먼트 <li> 제거
  deleteBtn.parentElement.remove();

  saveData();
}

function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}
function saveData() {
  console.log('saveData()');
  localStorage.setItem('todoHtml', listDom.innerHTML);
}
