$('#toggle').click(function () {
  $("#burger-menu").toggleClass('open');
  $("#toggle").toggleClass('open');
  $("#menu").toggleClass('open');
});

$(function () {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function (e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
  });
});

function videoplay(button) {
  var par = button.parentNode;
  par.innerHTML = '<iframe src="//www.youtube.com/embed/ID-VIDEO?autoplay=1" scrolling="no" style="width: 100%; height: 100%;"></iframe>';
}

$(".bounce-fb").mouseover(function () {
  $(this).stop().animate({'backgroundPosition': '0 -28px'}, {
    queue: false,
    duration: 600,
    easing: 'easeOutBounce',
  })
});

$(".bounce-fb").mouseout(function () {
  $(this).stop().animate({'backgroundPosition': '0 0'}, {
    queue: false,
    duration: 800,
    easing: 'linear',
  })
});


var swiper = new Swiper('.swiper-container', {
  
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  
  breakpointsInverse: true,
  breakpoints: {
    
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  
});

new WOW().init();