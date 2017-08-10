

(function($){
	$.fn.textCenter=function(){
		
		var $cells = this;
		centerText($cells);
		
		$(window).load(function () {
			centerText($cells);
		});
		
		$(window).resize(function() {
			centerText($cells);
		});

		
	};
	
	var centerText = function( cells ) {
		
		$(cells).each(function(){

			var $mainBoxHeight =  $(this).height();
			var $textBoxHeight = $(this).find(".content").height();

			$(this).find(".content").css({
				'padding-top': ($mainBoxHeight/2) - ($textBoxHeight/2)
			});
		});
		
	}
	
})(jQuery);

