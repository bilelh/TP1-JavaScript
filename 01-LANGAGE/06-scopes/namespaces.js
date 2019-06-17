(function (window) {
    var bilel = {} ;

    bilel.contacts = function() {
        return [arguments] ;
    };

    window.bilel = bilel;

})(window);

function contact (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
};

var c1 = new contact('Ragnar', 'Lothbrok');
var c2 = new contact('Kaiser', 'Soze');
var c3 = new contact('Raymond' , 'Redington')




