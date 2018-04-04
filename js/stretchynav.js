jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
				if ($('.cd-stretchy-nav').css('z-index') == '500000'){
					$('.cd-stretchy-nav').css('z-index','21')
				} else {
					$('.cd-stretchy-nav').css('z-index','500000')
				}

				if ($('#overlay').css('display') == 'flex'){
					$('#overlay').fadeOut(200)
					$('#nav-overlay').fadeOut(200)
					$('body').css('overflow-y', 'auto');
				} else {
					$('#overlay').fadeIn(200).css('display', 'flex');
					$('#nav-overlay').fadeIn(200).css('display', 'flex');
					$('body').css('overflow-y', 'hidden');
				}
			});
		});

		$(document).on('click', function(event){
			// event.preventDefault();
			// ( !$(event.target).is('.cd-nav-trigger') 
			// 	&& !$(event.target).is('.cd-nav-trigger span') ) 
			// 	&& stretchyNavs.removeClass('nav-is-visible') 
			// 	&& $('#overlay').css('display', 'none') 
			// 	&& $('#nav-overlay').css('display', 'none')
			// 	&& $('.cd-stretchy-nav').css('z-index','21')
			// 	&& $('#overlay').fadeOut(200)
		});
	}
});