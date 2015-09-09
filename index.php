<?php require_once('header.php') ?>

	<!-- <div class="slider-container">
		<div class="slider-navigation slider-navigation-prev">
			<span class="v-center"><</span>
		</div>
		<div class="slider-navigation slider-navigation-next">
			<span class="v-center">></span>
		</div>
		<ul class="slider">
			<li class="slide">
				<img src="img/slider/1.png" alt="">
			</li>
			<li class="slide">
				<img src="img/slider/2.png" alt="">
			</li>
			<li class="slide">
				<img src="img/slider/3.png" alt="">
			</li>
		</ul>
	</div> -->

	<ul id="main-slider">
		<li>
	    	<a href="#slide1"><img src="img/slider/1.png" alt=""></a>
		</li>
		<li>
	    	<a href="#slide2"><img src="img/slider/2.png"  alt=""></a>
		</li>
		<li>
	    	<a href="#slide3"><img src="img/slider/3.png" alt=""></a>
		</li>
	</ul>

	<div class="container960 main-content">
		<h1>Headcases Custom Pool and Snooker Cue Cases</h1>
		<p>Welcome to Headcases Design! We are specialists in creating hand made, professional pool and snooker cue cases.</p>
		<p>Do you find most cue cases to be boring and generic? Have you ever wanted a cue case that represents who you are? Or maybe you just want your case to stand out from the crowd.</p>
		<p>You provide us with your specifications and we will design and build your perfect, one-of-a-kind cue case! Check out our <a href="gallery.php">gallery</a> to see some of the cases we have already created.</p>
		<blockqoute>&ldquo; We all spend a lot of money on the right cue, so don't we also deserve a high quality case to protect them? &rdquo;</blockqoute>
		<h1>Showcase</h1>
		<a href="gallery.php">
			<div class="showcase">
				<div class="showcase-img">
					<img class="v-center" src="img/pingu/pingu_custom_cue_case_left_open.png" alt="Pingu custom cue case">
				</div>
				<div class="showcase-text">
					<span>Pingu</span>
				</div>
			</div>
			<div class="showcase">
				<div class="showcase-img">
					<img class="v-center" src="img/curzon/curzon_custom_cue_case_end_view.png" alt="Curzon custom cue case">
				</div>
				<div class="showcase-text">
					<span>Curzon</span>
				</div>
			</div>
			<div class="showcase">
				<div class="showcase-img">
					<img class="v-center" src="img/smurf/smurf_custom_cue_case_top_perspective.png" alt="Smurf custom cue case">
				</div>
				<div class="showcase-text">
					<span>Smurf</span>
				</div>
			</div>
		</a>
		<?php require_once('about.php') ?>
	</div>
	<?php require_once('footer.php') ?>
	<?php require_once('common_scripts.php') ?>

	<script rel="javascript" src="js/slippry.min.js"></script>
	<script>
		// Start Slider
		jQuery(document).ready(function(){$('#main-slider').slippry();});
	</script>
</body>

</html>