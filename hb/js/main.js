$(function() {  
	jQuery.scrollSpeed(100, 1000);
});

$(function ($) {
    if ($('.button').length) {
      $('.button').mousemove(function (e) {

        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;

        e.target.style.setProperty('--x', x + "px");
        e.target.style.setProperty('--y', y + "px");
      })
    };
  }); 


$(function(){
	var mouseX = 0, mouseY = 0, limitX = 150-100, limitY = 100-10; // Определяет границы, по которым будет двигаться объект
	$(window).mousemove(function(e){
	  	var offset = $('figure').offset();
	   	mouseX = Math.min(e.pageX - offset.left, limitX);
	   	mouseY = Math.min(e.pageY - offset.top, limitY); // Ищет координаты курсора
	   	if (mouseX < 0) mouseX = 0;	// С какой момента (координат) начинать движение за курсором
	   	if (mouseY < 0) mouseY = 0; // Если курсор находится вне веб-страницы на момент загрузки, то установит объект в координатах x=0, y=0.
	});

	var rose = $(".rose");
	var xp = 0, yp = 0; // Начальные координаты объекта на момент загрузки страницы
	var loop = setInterval(function(){
	 
	    xp += (mouseX - xp) / 20;
	    yp += (mouseY - yp) / 20;
	    rose.css({left:xp, top:yp}); 
	    
	}, 20); //В данном случае это значение определяет, касколько плавно и быстро будет происходить движение

});


$("#to_Top").click(function (){
  $("body,html").animate({
    scrollTop:0
  }, 1000);
  return false;
});

$( document ).on( "mousemove", function( event ) {
  $( "#moving_ball" );
});

$(document).ready(function() {
	$('img.animated').hover(
	 function() {
		$(this).addClass('shake'); 
	 },
	 function() {
		$(this).removeClass('shake'); 
	 }
	)})



