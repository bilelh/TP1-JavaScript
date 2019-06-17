var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires : [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
        }
    ] ,

    description : function() {
        return 'nom: ' +this.nom +'   debut: '+ this.dateDebut+'   fin: '+ this.dateFin;
    }


}

console.log("nom: " + formationJS.nom , " langage: " + formationJS.langage , "debut: " + formationJS.dateDebut , "fin: " + formationJS.dateFin);

formationJS.formateur = {
    nom : 'Hodicq',
    prenom : 'Nicolas'
}

console.log("formateur: " + formationJS.formateur.nom + " " + formationJS.formateur.prenom);

console.log(formationJS.description());

delete formationJS.stagiaires;

console.log(formationJS);



