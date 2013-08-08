<?php 
	header('Content-type: application/json'); 
?>

<?php
	echo $_GET['callback']; 
?>
(
	<?php 
		
		
		echo file_get_contents($data);
		echo $data
	?>
);
