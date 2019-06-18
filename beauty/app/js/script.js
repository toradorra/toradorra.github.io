var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Responsive breakpoints
        breakpoints: {

          320: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
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
