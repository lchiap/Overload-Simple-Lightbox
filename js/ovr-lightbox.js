$(document).ready(function(){
    
        /* Hide lightbox */
        $('.bg, .ovr-lightbox').hide();
    
		/* Open Box */
        function open(){
            $('.bg, .ovr-lightbox').animate({'opacity':'1.00'}, 100, 'linear', function(){
                $('.bg, .ovr-lightbox').fadeIn();
            });
        }
        
		$('.open').click(function(e){
			e.preventDefault();
            open();
		});

		/* Center Box */
		var widthW = $(window).width();
		var heightW = $(window).height();
		
		var widthBox = $('.ovr-lightbox').outerWidth();
		var heightBox = $('.ovr-lightbox').outerHeight();

		var centerW = (widthW-widthBox)/2;
		var centerH = (heightW-heightBox)/2;

		$('.ovr-lightbox').css('top', centerH);
		$('.ovr-lightbox').css('left', centerW);

		/* Close Box */
        function close_box(){
            $('.bg, .ovr-lightbox').animate({'opacity':'0'}, 300, 'linear', function(){
			    $('.bg, .ovr-lightbox').hide();
		    });
        }
    
		$('.close, .bg').click(function(){
			close_box();
		});
    
	 
});