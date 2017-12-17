

$('#read').on('click',function(event){
  console.log('read');

  $.get('http://localhost:3000/posts',function(data){
    console.log(data);
  });
});

$('#create').on('click',function(event){
  console.log('create');
  // url ,형식 , 함수
  $.post('http://localhost:3000/posts',{title:'하하하하하'},function(data){
    console.log(data);
  });
});

$('#update').on('click',function(event){
  console.log('update');
  // 수정은 put으로 id는 url에
  // $.ajax('http://localhost:3000/posts/1',{title:'수정입니다.'+(new Date().getTime())},function(data){
  //   console.log(data);
  // });

  $.ajax({
    url:'http://localhost:3000/posts/2',
    method:'PUT',
    data:{title:'수정입니다.'+(new Date().getTime())},
    complete: function(data){console.log(data);}
  })
});


$('#remove').on('click',function(event){
  console.log('remove');
  // 수정은 put으로 id는 url에
  // $.ajax('http://localhost:3000/posts/1',{title:'수정입니다.'+(new Date().getTime())},function(data){
  //   console.log(data);
  // });

  $.ajax({
    url:'http://localhost:3000/posts/1',
    method:'DELETE',
    complete: function(data){console.log(data);}
  })
});
