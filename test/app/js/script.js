$(document).ready(function() {
	   
  // JQUERY NAV TOGGLE
  $('#menu').bind('click',function(event){
    $('#mainnav ul').slideToggle();
  });

  $(window).resize(function(){  
    var w = $(window).width();  
    if(w > 480) {  
      $('#mainnav ul').removeAttr('style');  
    }  
  });

});

var check = document.getElementById("check");
var fas = document.getElementById("fas");

 check.onclick = function (){
 this.classList.toggle("checked");
 fas.classList.toggle("active");
}

var input = document.querySelector('input');
var placeholder = input.placeholder;

 input.addEventListener('mouseover', () => {
   input.placeholder = 'Текст'
 })

 input.addEventListener('mouseout', () => {
   input.placeholder = placeholder;
 })
  
