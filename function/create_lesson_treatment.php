<?php
	
	$bdd = new PDO('mysql:host=localhost;dbname=economia;charset=utf8', 'root', 'root');

	print_r($_POST);
	
	$titre = $_POST['titre'];
	$s_titre = $_POST['s_titre'];
	$lien = $_POST['lien'];
	$content = $_POST['editor1'];	
	
	$insert = $bdd->prepare('INSERT INTO cours(titre, s_titre, lien, content) VALUES(:titre, :s_titre, :lien, :content)');
	$insert->execute(array(
	
	'titre' => $titre,
	's_titre' => $s_titre,
	'lien' => $lien,
	'content' => $content
	
	));
	
	


?>

<script>
	window.location.href="../index.php";
</script>