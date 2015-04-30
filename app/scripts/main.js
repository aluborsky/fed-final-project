'use strict';

(function($) {
  $(document).ready(function() {
    // $('.img-holder').imageScroll();
    $('body').scrollspy({
    	target: '.navbar'
    });

    $(function () {
    	$('[data-toggle="tooltip"]').tooltip();
    });


  });
})(jQuery);
