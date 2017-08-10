
/* *****************************************************************************
Get the height from an element with the target-id

Example:

$(".getHeightFrom").getHeightFrom();

<div class="getHeightFrom" data-target-id="target-box"></div>
<div id="target-box"></div>

or

$(".getHeightFromMax991").getHeightFrom({maxViewport:'991'});

***************************************************************************** */

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
