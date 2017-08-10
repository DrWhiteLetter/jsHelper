
// Holt die höhe des Elementes welches die ID besitzt welche mit data-target-id übergeben wurde

(function($){
	
	$.fn.getHeightFrom=function( options ){
		
		var settings = $.extend({
            // defaults.
            maxViewport: "767",
        }, options );
		
		var $cells = this;
		
		if ( jQuery(window).width() > settings.maxViewport ) {
			resizeTheCell($cells);
			
			$(window).load(function () {
				resizeTheCell($cells);
			});
		}
		
		$(window).resize(function() {
			if ( jQuery(window).width() > settings.maxViewport ) {
				resizeTheCell($cells);
			}
		});
	}
	
	var resizeTheCell = function( cells ) {
		
		$(cells).each(function(){
			
			var $target_id = "#" + $(this).attr('data-target-id');
			$target_height = $($target_id).height();
			
			// Fix, wenn gleichzeitig text_center.js verwendet wird
			$(this).find(".content").css({
				'padding-top': 0
			});

			$(this).css({
				'min-height': $target_height
			});
			
		});
		

	}
	
})(jQuery);