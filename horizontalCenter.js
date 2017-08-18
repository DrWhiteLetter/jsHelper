
/* *****************************************************************************
Center an element

Example:

$(".centerBox").horizontalCenter();

<div class="centerBox"></div>

***************************************************************************** */

(function($){
	$.fn.horizontalCenter=function(){

		var $boxes = this;
		centerBox($boxes);

		$(window).resize(function() {
			centerBox($boxes);
		});


	};

	var centerBox = function( $boxes ) {

		$($boxes).each(function(){

			var $boxWith =  $(this).outerWidth();
			var $marginLeft = $boxWith / 2;

			$(this).css({
				'position': 'absolute',
				'left': '50%',
				'margin-left': -$marginLeft
			});
		});

	}

})(jQuery);
