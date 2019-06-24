$('#toggle').click(function() {
  $("#burger-menu").toggleClass('open');
  $("#toggle").toggleClass('open');
  $("#menu").toggleClass('open');
});

$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
  });
});

function videoplay(button) {
  var par = button.parentNode;
  par.innerHTML = '<iframe src="//www.youtube.com/embed/ID-VIDEO?autoplay=1" scrolling="no" style="width: 100%; height: 100%;"></iframe>';
}

$(".bounce-fb").mouseover(function(){
	$(this).stop().animate({'backgroundPosition':'0 -28px'},{queue:false, duration:600, easing: 'easeOutBounce'})
});
$(".bounce-fb").mouseout(function(){
	$(this).stop().animate({'backgroundPosition':'0 0'},{queue:false, duration:800, easing: 'linear'})
});
