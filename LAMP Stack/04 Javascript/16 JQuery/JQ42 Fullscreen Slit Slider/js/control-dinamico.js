/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear SlitSlider*/
	var Page = (function(){
		var $nav = $( '#nav-dots > span' ),
		
		slitslider = $( '#slider' ).slitslider( {
			autoplay:true,
			speed : 800,
			optOpacity : false,
			translateFactor : 230,
			maxAngle : 25,
			maxScale : 2,
			keyboard : true,
			interval : 4000,
			onBeforeChange : function( slide, pos ) {
				$nav.removeClass( 'nav-dot-current' );
				$nav.eq( pos ).addClass( 'nav-dot-current' );
			}
		}),

		init = function() {
			initEvents();
		},

		initEvents = function() {
			$nav.each( function( i ) {
				$( this ).on( 'click', function( event ) {
					var $dot = $( this );

					if( !slitslider.isActive() ) {
						$nav.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );
					}
					
					slitslider.jump( i + 1 );
					return false;
				});
			});
		};
		
		return { init : init };
	})();
	Page.init();
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/