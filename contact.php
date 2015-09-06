<?php require_once('header.php') ?>

	<div class="container960 main-content">
		
	<h1>Get In Touch</h1>
	<p>Send us a message</p>
	<form action="scripts/sendEmail.php" method="GET">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" value="" />
		<label for="name">E-Mail:</label>
		<input type="text" id="email" name="email" value="" />
		<label for="name">Phone Number</label>
		<input type="text" id="number" name="number" value="" />
		<label for="name">Message:</label>
		<textarea name="message" id="message" cols="30" rows="10"></textarea>
		<input type="submit" id="submitMail" value="Send" disabled>
	</form>

	</div>

	<?php require_once('footer.php') ?>
	<?php require_once('common_scripts.php') ?>

	<script rel="javascript" src="js/validation.js"></script>
	<!-- <script rel="javascript" src="js/sendMail.js"></script> -->
</body>

</html>