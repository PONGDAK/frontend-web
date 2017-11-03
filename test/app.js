var page_size = 6;
var page_no = 1;
var list_contents = '';

var url = 'http://1boon.kakao.com/';
var url_trending = url + 'ch/trending.json?pagesize=' + page_size + '&page=';
var url_issue = url + 'ch/issue.json?pagesize=' + page_size + '&page=';
var url_enter = url + 'ch/enter.json?pagesize=' + page_size + '&page=';
var url_this = url_trending;

var list = document.getElementById('list');
var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter')
var btn_more = document.getElementById('btn-more');

trending.addEventListener('click', setList);
issue.addEventListener('click', setList);
enter.addEventListener('click', setList);
btn_more.addEventListener('click', moreList);

function setList() {
  showLoading();
  var url_clicked = 'url_' + event.currentTarget.id;
  var list_active = document.getElementsByClassName('active');

  page_no = 1;
  list_contents = '';
  list.innerHTML = '';

  for (var i = 0; i < list_active.length; i++) {
    list_active[i].classList.remove('active');
  }
  event.currentTarget.classList.add('active');

  url_this = eval(url_clicked);
  getJSON(url_this + page_no, done);
}

function moreList() {
  showLoading();
  page_no++;
  getJSON(url_this + page_no, done);
}

function showLoading() {
  var loading = document.getElementById("loading");
  loading.style.display = 'block';
};

function hideLoading() {
  var loading = document.getElementById("loading");
  loading.style.display = 'none';
}

function done(array) {
  for (var i = 0; i < array.data.length; i++) {
    list_contents += '<div class="contents_wrap"><a href="' + url + array.data[i].path + '" class="contents_link">' +
      '<img class="contents_img" src="' + array.data[i].coverImage + '"/>' +
      '<strong class="contents_title">' + array.data[i].title + '</strong>' +
      '<span class="contents_read">' + array.data[i].totalView + '명이 봤어요</span></a></div>';
  }

  list.innerHTML = list_contents;

  hideLoading();

  if (page_no !== 1) {
    btn_more.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

showLoading();
getJSON(url_this + page_no, done);
