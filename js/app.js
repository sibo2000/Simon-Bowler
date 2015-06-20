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

$(window).scroll(function() {
	if($(this).scrollTop() > navFromTop){
		$('nav').addClass('dark');
	}else{
		$('nav').removeClass('dark');
	}
});

});
