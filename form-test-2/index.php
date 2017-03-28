<?php
	if($_POST["message"]) {
    mail("arjunmahadevandesign@gmail.com", "RSVP", $_POST["message"], "From: an@email.address");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<form method="post" action="contact.php">
    <textarea name="message"></textarea>
    <input type="submit">
	</form>

</body>
</html>