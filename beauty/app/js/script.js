// (function() {
//  'use strict';

//  var btnScrollDown = document.querySelector('#scroll_down');

//  function scrollDown() {
//    var windowCoords = document.documentElement.clientHeight;
//    (function scroll() {
//      if (window.pageYOffset < windowCoords) {
//        window.scrollBy(0, 10);
//        setTimeout(scroll, 0);
//      }
//      if (window.pageYOffset > windowCoords) {
//        window.scrollTo(0, windowCoords);
//      }
//    })();
//  }

//  btnScrollDown.addEventListener('click', scrollDown);
// })();


function videoplay(button) {
  var par = button.parentNode;
  par.innerHTML = '<iframe src="//www.youtube.com/embed/ID-VIDEO?autoplay=1" scrolling="no" style="width: 100%; height: 100%;"></iframe>';
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});