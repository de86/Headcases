$(document).ready(function(){
	
	var $showcase = $(".showcase");
	var $galleryImg = $(".gallery-img");
	var $galleryItem = $(".gallery-item");
	var $featureImages = $(".feature-slider").children();
	var sliderInterval = 4000;
	var fadeInterval = 500;
	var numSlides = $featureImages.length;
	
	
	$showcase.hover(
		function() {
			$(this).children(".showcase-img").css({
				"background-color": "#f3f3f3",
			});
			$(this).children(".showcase-img").children("img").css({
				"width": "90%"
			});
			$(this).children(".showcase-text").css({
				"background-color": "#cc0000",
				"color": "#fafafa",
				"box-shadow": "0px 12px 10px -8px rgba(0, 0, 0, 0.5)"
			});
		}, function() {
			$(this).children(".showcase-img").css({
				"background-color": "transparent",
			});
			$(this).children(".showcase-img").children("img").css({
				"width": "80%"
			});
			$(this).children(".showcase-text").css({
				"background-color": "transparent",
				"color": "#e22",
				"box-shadow": "none"
			});
		}
	);


	$galleryItem.hover(
		function(){
			$(this).css({
				"background-color": "#f3f3f3",
				"box-shadow": "0px 12px 10px -8px rgba(0, 0, 0, 0.5)"				
			}).children(".case-img").animate({left: "0"}, 150);
		},
		function(){
			$(this).css({
				"background-color": "transparent",
				"box-shadow": "none"
			}).children(".case-img").animate({left: "-15%"}, 150);
		}
	);

	$galleryImg.hover(
		function(){
			$(this).children("img").css({width: "90%"});
		}, 
		function(){
			$(this).children("img").css({width: "80%"});
		});
});