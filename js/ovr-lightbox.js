/*
*
* Overload Lightbox v1.1
* Copyright 2014, Luis Chiappe - Overload - Web & Graphic design -
* Overloadesign.com | luischiappe.com.ar
* Free to use for web designers and web developers.
* Enjoy!
*
*/

$(document).ready(function(){
    
        // Hide lightbox 
        $('.bg, .ovr-lightbox').hide();
    
        // Center Box 
		var widthW = $(window).width();
		var heightW = $(window).height();
		
		var widthBox = $('.ovr-lightbox').outerWidth();
		var heightBox = $('.ovr-lightbox').outerHeight();

		var centerW = (widthW-widthBox)/2;
		var centerH = (heightW-heightBox)/2;

		$('.ovr-lightbox').css('top', centerH);
		$('.ovr-lightbox').css('left', centerW);
    
		// Open Box 
        function open(){
             $('.bg, .ovr-lightbox').fadeIn();
        };
        
		$('.open').click(function(e){
			e.preventDefault();
            open();
		});

		// Close Box 
        function close_box(){
			  $('.bg, .ovr-lightbox').fadeOut();
        };
    
		$('.close, .bg').click(function(){
			close_box();
		});
    
});