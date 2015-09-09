$(document).ready(function(){

	// jQuery Vars
	var $sliderContainer = $(".slider-container");
	var $slider = $(".slider");
	var $slide = $(".slide");
	var numSlides = $(".slide").length;
	
	// Vars
	var initialSliderWidth = 960;
	var transitionTime = 800;
	var slideIntervalTime = 4000;

	var sliderInterval;

	// Set initial slider position
	$slider.prepend($(".slide:last-child"));
	$slider.css({left: -$sliderContainer.width()});

	// Set slider elements widths
	function setWidths(){
		$sliderContainer.css({maxWidth: initialSliderWidth});
		$slider.css({width: numSlides * ($sliderContainer.width())});
		$slide.css({width: ($sliderContainer.width())});
		$(".slide > img").css({width: ($sliderContainer.width())});
	}

	// Start Slider
	setWidths();
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
		$slider.animate({left: "-=" + $sliderContainer.width()}, transitionTime, function(){
			$slider.css({left: -$sliderContainer.width()});
			$slider.append($(".slide:first-child"));
		});
	};


	// Move slider images to the right
	function slideRight(){
		$slider.animate({left: "+=" + $sliderContainer.width()}, transitionTime, function(){
			$slider.prepend($(".slide:last-child"));
			$slider.css({left: -$sliderContainer.width()});
		});
	};


	$(".slider-navigation-next").click(function(){
		slideLeft();
	});
	$(".slider-navigation-prev").click(function(){
		slideRight();	
	});

	// Resize Slider for responsiveness
	$(window).resize(function(){
		setWidths();
	});
});