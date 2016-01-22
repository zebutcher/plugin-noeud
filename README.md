# plugin-noeud

Le but est de permettre aux utilisateurs de créer eux même leur noeud papillon.

C'est un plugin que je vais insérer dans un thème Bootstrap que je suis en train de créer.

**Le but du plugin est de :**
- Pouvoir choisir une couleur principale, une couleur secondaire et une couleur du milieu
- Créer en direct un noeud papillon avec les couleurs choisies précédemment
- Il doit être possible d'inverser la couleur principale avec la couleur secondaire si le client clique sur un bouton "Inverser"


**Ce que j'ai fait pour l'instant :**
- Initialisation de l'application angular
- Sur un thème blanc, j'ai créé une ébauche du plugin
- Tu peux choisir la couleur principale et ça change la couleur
- Tu peux choisir la couleur du milieu et ça change la bonne couleur également


**Ce que j'aimerai faire :**
- Fusionner les images ou les superposer...
- Ajouter la couleur secondaire
- Créer le bouton inverser et le controller derrière ce bouton
- Mettre une bordure verte sur la thumbnail active (j'ai réussi à l'ajouter au clic mais je n'ai pas réussi à l'enlever)
- Intégrer ce plugin dans mon template bootstrap (problème entre jQuery et Angular possible?)
- Récupérer les bonnes infos lorsque l'utilisateur ajoute au panier
- Charger les images au début et mettre un loader qui montre l'état de téléchargement et affiche le plugin une fois que toutes les images sont téléchargées
