$(document).ready(function() {
    $(".worldpopup__window-input-phone").mask("+7 (999) 99-99-999");

    $('.kudaclick').click(function(){
    	$('.worldpopup').addClass('worldpopup-active');
    });
	$('.worldpopup-close').click(function(){
	    $('.worldpopup').removeClass('worldpopup-active');
	  });
  });