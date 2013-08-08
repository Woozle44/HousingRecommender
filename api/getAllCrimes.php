<?php 
	header('Content-type: application/json'); 
?>

<?php
	echo $_GET['callback']; 
?>
(
	<?php 
			$data = file_get_contents("http://data.police.uk/api/crimes-street/all-crime?lat=".$_GET['lat']."&lng=".$_GET['long'].""); 
				echo $data
	?>
);
