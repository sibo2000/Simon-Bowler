$(document).ready(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top + -65
			}, 1000);
			return false;
			}
		}
	});

	var navFromTop = $('.full-screen').height() - $('nav').height();

	console.log(navFromTop);

});

$(window).load(function(){

	var fullScreenH = $('.full-screen').height();
	var navH = $('nav').height();

	var navFromTop = fullScreenH - navH;
	var xy = fullScreenH + navH + 1;

	function fixBar() {
		if($(this).scrollTop() > navFromTop){
			$('nav').addClass('dark');

			$('#masthead').css({'position':'fixed', 'margin-top': -navFromTop});
			$('.full-screen').css({'height':xy});
			// $('#masthead').css({'position':'absolute'});
		}else{
			$('nav').removeClass('dark');
			$('.full-screen').css({'height':''});
			$('#masthead').css({'position':'relative', 'margin-top': 0});
			// $('#masthead').css({'position':'relative');
		}
	}

	fixBar();

	$(window).scroll(function() {
		fixBar();		
	});
});

