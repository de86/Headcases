$(document).ready(function(){

	// Vars
	var sliderWidth = 960;
	var transitionTime = 800;
	var slideIntervalTime = 4000;

	var sliderInterval;


	// jQuery Vars
	var $sliderContainer = $(".slider-container");
	var $slider = $(".slider");
	var $slide = $(".slide");
	var numSlides = $(".slide").length;


	// Set slider elements widths
	$sliderContainer.css({width: sliderWidth});
	$slider.css({width: numSlides * sliderWidth});
	$slide.css({width: sliderWidth});
	$(".slide > img").css({width: sliderWidth});


	// Set initial slider position
	$slider.prepend($(".slide:last-child"));
	$slider.css({left: -sliderWidth});


	// Start Slider
	startSlider();


	// Pause slider on hover
	$slider.hover(
		function(){
			clearInterval(sliderInterval);
		},
		function(){
			startSlider();
		}
	);


	// Starts Automatic Slider Movement
	function startSlider(){
		sliderInterval = setInterval(function(){
			slideLeft();
		}, slideIntervalTime);
	};


	// Move slider images to the left
	function slideLeft(){
		$slider.animate({left: "-=" + sliderWidth}, transitionTime, function(){
			$slider.css({left: -sliderWidth});
			$slider.append($(".slide:first-child"));
		});
	};


	// Move slider images to the right
	function slideRight(){
		$slider.animate({left: "+=" + sliderWidth}, transitionTime, function(){
			$slider.prepend($(".slide:last-child"));
			$slider.css({left: -sliderWidth});
		});
	};


	$(".slider-navigation-next").click(function(){
		slideLeft();
	});
	$(".slider-navigation-prev").click(function(){
		slideRight();	
	});

});