(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Nav Active Code
    if ($.fn.classyNav) {
        $('#originalNav').classyNav();
        $('#footerNav').classyNav();
    }

    // :: Sticky Active Code
    if ($.fn.sticky) {
        $("#stickyNav").sticky({
            topSpacing: 0
        });
    }

    // :: WOW Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }
	
	// ScrollUp Link
	var btn = jQuery('#scrollUp');

	jQuery(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	  } else {
		btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  jQuery('html, body').animate({scrollTop:0}, '300');
	});
	
})(jQuery);
