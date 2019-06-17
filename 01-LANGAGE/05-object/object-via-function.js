function Formation () {
    this.nom = 'Module JavaScript';
    this.langage = 'javaScript';
    this.dateDebut ='01/09/2017';
    this.dateFin = '05/09/2017';
    this.stagiaires = [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
        }];
}

var formation = new Formation();

console.log("nom: " + formation.nom , " langage: " + formation.langage , "debut: " + formation.dateDebut , "fin: " + formation.dateFin);

function Formation2 (nom,langage) {
    this.nom = nom;
    this.langage = langage;
    this.dateDebut ='01/09/2017';
    this.dateFin = '05/09/2017';
    this.stagiaires = [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
        }];
}

var formation2 = new Formation2('Module Java', 'Java');

console.log("nom: " + formation2.nom , " langage: " + formation2.langage , "debut: " + formation2.dateDebut , "fin: " + formation2.dateFin);

function Personne (nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

function Stagiaire (nom, prenom, age, connaissances) {
    Personne.call(this, nom, prenom, age);
    this.connaissances = connaissances;
}

Stagiaire.prototype = new Personne;

var stagiaire1 = new Stagiaire ("harzallah", "bilel", 30, "java");

console.log("stagiaire:  "+ stagiaire1.nom +'  '+ stagiaire1.prenom + '   age: '+ stagiaire1.age + 'ans   connaissances: '+ stagiaire1.connaissances);


