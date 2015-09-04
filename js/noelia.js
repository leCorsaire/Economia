function noelia(){


$(function noelia() {
	
	$('<link rel="stylesheet" href="js/s_noelia.css">').appendTo($('body')); // Lien de la feuille de style personnalisée de l'application noelia.js
		
	var i_id = 0; // "iteration_id" permet de contrôler le comportement de la condition.			
	var q_id = 0; // Initialisation des id du formulaire qui nous serviront plus tard en PHP.
	var r_id = 0;
	var qcm_name = '<div class="row"><div class="col-sm-8"><input type="text" id="qcm_name" name="qcm_name" value="Nom du QCM" class="form-control qcm"></input></div></div>'; // Regroupement HTML du champ de nom du QCM.
	var add_ques = '<input type="button" id="add_ques" value="Ajouter une question" class="add_ques btn btn-default"></input>'; // Regroupement HTML des boutons d'ajouts de questions et réponses.
	var add_answ = '<input type="button" id="add_answ" value="Ajouter une réponse" class="add_answ btn btn-default"></input>';
	
	$('<input type="button" value="Créer un QCM" class="btn btn-default"></input>').appendTo($('.container-fluid')).click(function() { // Création du QCM
	
		$('<form id="form-qcm" action="target.php" method="POST" class="gen-qcm">').appendTo($('.container-fluid')); // création de la balise de formulaire intégrée directement dans le container-fluid bootstrap.
		$(this).remove(); // On efface le bouton pour éviter un reset du formulaire.
		$(qcm_name).appendTo($('#form-qcm')); // le champ nom du QCM est crée.
		
		
		$(add_ques).appendTo($('#form-qcm')).click(function ques_script() { // On crée le bouton d'ajout de questions.
		
			q_id++; // On incrémente la variable d'identifiant de questions.
			$('<div class="row"><div class="col-sm-8"><input type="text" id="q_'+ q_id +'" name="q_'+ q_id +'" value="Question n°' + q_id + '" class="form-control question"></input></div></div>').appendTo($('#form-qcm')) // Un champ de question s'ouvre.
			$('.add_ques').remove(); // On efface les boutons pour éviter des resets. Cela inclue les boutons futurs.
			$('.submit-button').remove(); // Pour empêcher de soumettre un formulaire incomplet

				$(add_answ).appendTo($('#form-qcm')).click(function answ_script() { // On crée le bouton d'ajout de réponses.
				
				i_id++; // On incrémente la variable d'itération de la boucle.
				r_id++; // On incrémente la variable d'identifiant de réponses.
				$('<div id="answ_div'+ r_id +'" class="row"></div>').appendTo($('#form-qcm')); // Création d'un row bootstrap pour grouper une réponse et ses boutons radios sur une ligne.
				$('<div class="col-sm-6"><input type="text" id="r_' + r_id + '" name="r_' + r_id + '" value="Réponse n°' + r_id + '" class="form-control answer"></input></div>').appendTo($('#answ_div'+ r_id +'')); // Insertion du champ réponse.
				$('<aside id="rad_aside_'+ r_id +'" class="col-sm-2 rad_aside"></aside>').appendTo($('#answ_div'+ r_id +'')); // Aside de groupe pour les boutons radio afin de les intégrer dans Bootstrap.
				$('<p class="rad_label">V</p><input type="radio" id="radio_'+ r_id +'" name="radio_'+ r_id +'" value="v"></input>').appendTo($('#rad_aside_'+ r_id +'')); // Insertion des boutons radios V(rai) & F(aux).
				$('<p class="rad_label">F</p><input type="radio" id="radio_'+ r_id +'" name="radio_'+ r_id +'" value="f"></input>').appendTo($('#rad_aside_'+ r_id +''));
				
				if(i_id == 4) { // Dès que la question atteint les 4 réponses, les boutons sont effacés et la variable d'itération remise à zéro.
					
					$('.add_answ').remove();
					$(this).remove();
					i_id = 0;
					$(add_ques).appendTo($('#form-qcm')).click(function(){ ques_script(); });	// La fonction propose alors de recommencer la création d'une nouvelle question.			
					$('<input class="submit-button btn btn-default" type="submit" value="Valider le QCM"></input></form>').appendTo($('#form-qcm'));
					
					}
									
				else {
				
				}
															
				});
		
			});		
	
		});	
	});
}