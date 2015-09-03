$('#creer-cours').click(function creercours() {

	var c_titre = '<input id="titre" name="titre" class="champ form-control" type="text" value="Titre du cours"></input>';
	var c_s_titre = '<input id="s_titre" name="s_titre" class="champ form-control" type="text" value="Sous-titre du cours"></input>';
	var c_desc = '<input id="desc" name="editor1" class="champ form-control"  id="editor1" type="textarea" value="Description du cours"></input>';
	var c_lien = '<input id="lien" name="lien" class="champ form-control" type="text" value="Lien de la vidéo de cours"></input>';
	var btn_envoyer = '<input class="btn btn-primary" type="submit" value="Valider le cours"></input>';
	var btn_annuler = '<input class="btn btn-default" type="button" value="Annuler le cours"></input>';
	
	$('#creer-cours').hide();
	
	$('<form method="POST" action="function/create_lesson_treatment.php"></form>').appendTo('.container-fluid');
	
	$('<div class="row"></div>').appendTo('form');
		$('<div id="cadre-video" class="col-md-7"></div>').appendTo('.row');
			$('<a id="video" href="#"></a>').appendTo('#cadre-video');
				$(c_lien).appendTo('#cadre-video');
				$('<img class="img-responsive" src="http://placehold.it/700x300" alt="">').appendTo('#video');
        $('<div id="cadre-info" class="col-md-5"></div>').appendTo('.row');
			$(c_titre).appendTo('#cadre-info');
			$(c_s_titre).appendTo('#cadre-info');
			$(c_desc).appendTo('#cadre-info');
			$(btn_envoyer).appendTo('#cadre-info');
			$(btn_annuler).appendTo('#cadre-info').click(function() {
			
				$('form').remove();
				$('#creer-cours').show();
			
			});
			
                CKEDITOR.replace('editor1');

			

	

});