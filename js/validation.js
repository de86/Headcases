$(document).ready(function(){
	// Validation for contact form

	// Cache our DOM elements
	var $nameField = $('#name');
	var $emailField = $('#email');
	var $numberField = $('#number');
	var $messageField = $('#message');
	var $submitMailBtn = $('#submitMail');
	var $mainContent = $('.main-content');

	// Declare Validation Variables
	var isNameValid = false;
	var isEmailValid = false;
	var isNumberValid = false;
	var isMessageValid = false;

	// Helper Funtions
	function showValidField($field){
		$field.removeClass('error');
		$field.addClass('success');
	};

	function showInvalidField($field){
		$field.removeClass('success');
		$field.addClass('error');
	};

	function checkFormValid(){
		if(isNameValid && isEmailValid &&
		   isNumberValid && isMessageValid){
			$submitMailBtn.prop('disabled', false);
		} else {
			$submitMailBtn.prop('disabled', true);
		};
	}

	// Disply the thank you message if Ajax request is successful
	function displayResult(resultClass, messageHtml) {
		var $mailResult = $('<div class="mail-result"></div>');

		$mailResult.append(messageHtml);
		$mailResult.addClass(resultClass);
		$mainContent.append($mailResult);
		$mailResult.slideDown();
	};


	// Validate our fields
	// Name Field Validation
	$nameField.blur(function(){
		var nameInput = $nameField.val();
		var nameRegEx = /^[a-zA-Z\s]+$/;

		if(nameRegEx.test(nameInput)){
			showValidField($(this));
			isNameValid = true;
		} else {
			showInvalidField($(this));
			isNameValid = false;
		};

		checkFormValid();
	});

	// Email Field Validation
	$emailField.blur(function(){
		var emailInput = $emailField.val();
		var emailRegEx = /^[a-zA-z\d]+@[a-zA-z\d]+\.[a-zA-z\.]+$/;

		if(emailRegEx.test(emailInput)){
			showValidField($(this));
			isEmailValid = true;
		} else {
			showInvalidField($(this));
			isEmailValid = false;
		};

		checkFormValid();
	});

	// Number Field Validation
	$numberField.blur(function(){
		var numberInput = $numberField.val();
		var numberRegEx = /^0{1}[0-9\s]*$/;

		if(numberRegEx.test(numberInput)){
			showValidField($(this));
			isNumberValid = true;
		} else {
			showInvalidField($(this));
			isNumberValid = false;
		};

		checkFormValid();
	});

	// Message Field Validation
	$messageField.blur(function(){
		var messageInput = $messageField.val();

		if(messageInput.length > 0){
			showValidField($(this));
			isMessageValid = true;
		} else {
			showInvalidField($(this));
			isMessageValid = false;
		};

		checkFormValid();
	});

/*var $nameField = $('#name');
	var $emailField = $('#email');
	var $numberField = $('#number');
	var $messageField = $('#message');*/
	
	// Finally, Send Mail
	// Make Ajax call on submit
	$submitMailBtn.on('click', function(){
		event.preventDefault();

		$.ajax({
			type: 'GET',
			url: 'scripts/sendEmail.php',
			data: ({name: $nameField.val(),
					email: $emailField.val(),
					number: $numberField.val(),
					message: $messageField.val()}),
			success: function(){
				displayResult("success", "<p>Thanks for your message! We will get back to you as soon as possible.</p>");
				$submitMailBtn.prop('disabled', true);
			},
			error: function(){
				displayResult("error", "<p>There seems to have been a problem sending your message. Please call us on 07903335234</p>");
			}
		});
	});
});