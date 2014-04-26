$(document).ready(function(){

		/* Open Box */
		$('.open').click(function(e){
			e.preventDefault();
			$('.bg, .ovr-lightbox').animate({'opacity':'.50'}, 300, 'linear');
			$('.ovr-lightbox').animate({'opacity':'1.00'}, 300, 'linear');
			$('.bg, .ovr-lightbox').css('display', 'block');
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
			    $('.bg, .ovr-lightbox').css('display', 'none');
		    });
        }
    
		$('.close').click(function(){
			close_box();
		});
	 
		$('.bg').click(function(){
		  close_box();	
		  
 		});
});