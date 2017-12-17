

var test = document.querySelector('#img');
console.log(test);

test.addEventListener('click', () => {
	if (screenfull.enabled) {
		screenfull.toggle(event.target);
	}
});
document.getElementById('fullBtn').addEventListener('click', () => {
	if (screenfull.enabled) {
		screenfull.request(test);
	} else {
		// Ignore or do something else
	}
});

document.getElementById('geoBtn').addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    do_something(position.coords.latitude, position.coords.longitude);
  });
  } else {
    /* 지오로케이션 사용 불가능 */
  }
});





function do_something(a, b){
  console.log(a)
  console.log(b)
}
