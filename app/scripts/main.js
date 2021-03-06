'use strict';

(function($) {
  $(document).ready(function() {

  	//parallax effect
    	$('.img-holder').imageScroll({
    		coverRatio: 0.7
    	});
    
    //scrollspy
    $('body').scrollspy({
    	target: '.navbar'
    });

    //smooth scroll
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 900);
	        return false;
	      }
	    }
	  });
	});

	//tool tips
    $(function () {
    	$('[data-toggle="tooltip"]').tooltip();
    });

  });
})(jQuery);
