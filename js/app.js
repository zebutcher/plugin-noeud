(function() {
	'use strict';
  
	// base angular module
	angular.module('noeudPap', [])
		.controller('noeudPapController', function(){
			
			// Déclare les catégries et les infos des noeuds pap
			this.categories = categories;
			
			this.couleurs = couleurs;
			
			// Valeur par défaut de la variable couleur principale choisie
			this.col = 1;			
			
			// Valeur par défaut de la variable couleur du milieu choisie
			this.colM = 3;

			
			// Action lorsqu'un utilisateur clique sur une couleur
			this.selectColor = function(setColor){
				this.col = setColor;
			  };
	
			// Retourne true si la couleur en paramètre est sélectionnée
			this.isSelected = function(checkColor){
			  return this.col === checkColor;
			};
			
			
			// Pour la couleur du milieu
			this.selectColorM = function(setColorM){
				this.colM = setColorM;
			  };
	
			// Pour la couleur du milieu
			this.isSelectedM = function(checkColorM){
			  return this.colM === checkColorM;
			};
			
		})
		.controller('renduNoeudController', function(){
			
			this.current = 0;
			
			this.setCurrent = function(newGallery){
				this.current = newGallery || 0;
			};
			
		})
	;

	// Catégories
	var categories = ['monochrome', 'liberty'];
	
	// Déclaration des couleurs
	var couleurs = [
	{
		nom: 'Couleur A',
		description: 'La couleur A est incroyable',
		categorie: 'liberty',
		id: 1,
		disponible: true,
		imgName: 'tissuA',
		images: {
			principal: 	'img/tissuA-1.png',
			milieu: 	'img/tissuA-2.png',
			thumb: 		'img/tissuA-thumb.png'
		}
	},
	{
		nom: 'Couleur B',
		description: 'La couleur B est jolie',
		categorie: 'liberty',
		id: 2,
		disponible: true,
		imgName: 'tissuB',
		images: {
			principal: 	'img/tissuB-1.png',
			milieu: 	'img/tissuB-2.png',
			thumb: 		'img/tissuB-thumb.png'
		}
	},
	{
		nom: 'Couleur C',
		description: 'La couleur C est monochrome',
		categorie: 'monochrome',
		id: 3,
		disponible: true,
		imgName: 'tissuC',
		images: {
			principal: 	'img/tissuC-1.png',
			milieu: 	'img/tissuC-2.png',
			thumb: 		'img/tissuC-thumb.png'
		}
	},
	{
		nom: 'Couleur D',
		description: 'La couleur D est monochrome aussi',
		categorie: 'monochrome',
		id: 4,
		disponible: true,
		imgName: 'tissuD',
		images: {
			principal: 	'img/tissuD-1.png',
			milieu: 	'img/tissuD-2.png',
			thumb: 		'img/tissuD-thumb.png'
		}
	}
	];


})();
