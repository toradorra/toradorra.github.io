var text = $('.text').text(),
    textArr = text.split('');

$('.text').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})

jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });
});
