<?php
$to = 'd-headdock@hotmail.co.uk';
$subject = 'Message from Headcases.com';
$greeting = 'Hey Dave! This message was sent from your website!';
$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$number = $_REQUEST['number'] ;
$sendMessage = $greeting. "\n" . "\n From: " . $name . "\n E-Mail: ". $email . "\n Number: ". $number . "\n" . "\n" . $message;
mail($to, $subject, $sendMessage);
?>