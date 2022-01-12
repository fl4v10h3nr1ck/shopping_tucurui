

	jQuery(document).ready(function(){
	
		if(jQuery(".item_slideshow").length){
	
			jQuery(function(){
												
				jQuery('#camera_wrap_1').camera({
				height: jQuery('#area_slide').height()+"px",
				loader: 'bar',
				pagination: false,
				navigation: false,
				playPause: false,
				hover: false,
				thumbnails: false,
				opacityOnGrid: false
				});
			});
		}
		
		if(jQuery(".item_slideshow_promocoes").length){
	
			jQuery(function(){
												
				jQuery('#camera_wrap_2').camera({
				height: jQuery('#area_slide_promocoes').height()+"px",
				loader: 'bar',
				pagination: false,
				navigation: false,
				playPause: false,
				hover: false,
				thumbnails: false,
				opacityOnGrid: false
				});
			});
		}
	});
		

