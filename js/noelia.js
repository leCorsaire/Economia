$(function() {
	
	var i_id = 0; // "iteration_id" permet de contrôler le comportement de la condition à la ligne 68.			
	var q_id = 0; // Initialisation des id du formulaire qui nous serviront plus tard en PHP.
	var r_id = 0;
	var qcm_name = '<input type="text" id="qcm_name" name="qcm_name" value="Nom du QCM"></input>'; // Regroupement HTML du champ de nom du QCM.
	var add_ques = '<input type="button" id="add_ques" value="Ajouter une question" class="add_ques"></input>'; // Regroupement HTML des boutons d'ajouts de questions et réponses.
	var add_answ = '<input type="button" id="add_answ" value="Ajouter une réponse" class="add_answ"></input>';
	var checking = '<input type="button" id="checking" value ="Valider cette question" class="checking"></input>'; // Bouton de validation de la question.
	
	$('<input type="button" value="Créer un QCM"></input>').appendTo($('body')).click(function() { // Création du QCM
	
		$(this).remove(); // On efface le bouton pour éviter un reset du formulaire.
		$(qcm_name).appendTo($('body')); // le champ nom du QCM est crée.
		
		
		$(add_ques).appendTo($('body')).click(function ques_script() { // On crée le bouton d'ajout de questions.
		
			q_id++; // On incrémente la variable d'identifiant de questions.
			$('<input type="text" id="'+ q_id +'" name="'+ q_id +'" value="Question n°' + q_id + '"></input>').appendTo($('body')) // Un champ de question s'ouvre.
			$('.add_ques').remove(); // On efface les boutons pour éviter des resets. Cela inclue les boutons futurs.

				$(add_answ).appendTo($('body')).click(function answ_script() { // On crée le bouton d'ajout de réponses.
				
				i_id++; // On incrémente la variable d'itération de la boucle.
				r_id++; // On incrémente la variable d'identifiant de réponses.	
				$('<input type="text" id="' + r_id + '" name="' + r_id + '" value="Réponse n°' + r_id + '"></input>').appendTo($('body')); // Insertion du champ réponse.
				$('<p class="rad_label">V</p><input type="radio" id="'+ r_id +'" name="'+ r_id +'" value="v"></input>').appendTo($('body')); // Insertion des boutons radios V(rai) & F(aux).
				$('<p class="rad_label">F</p><input type="radio" id="'+ r_id +'" name="'+ r_id +'" value="f"></input>').appendTo($('body'));
				
				if(i_id == 4) { // Dès que la question atteint les 4 réponses, les boutons sont effacés et la variable d'itération remise à zéro.
					
					$('.add_answ').remove();
					$(this).remove();
					i_id = 0;
					$(add_ques).appendTo($('body')).click(function(){ ques_script(); });	// La fonction propose alors de recommencer la création d'une nouvelle question.			
				
					}
									
				else {
				
				}
																
				});
		
			});		
	
		});	
	});