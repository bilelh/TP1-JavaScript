var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'Nouveau titre';
        console.log('Document title: ', document.title);
    }
};
app.init();

var h1 = document.getElementsByTagName('h1');
console.log(h1);

var textred = document.getElementsByClassName('text-red');
console.log(textred);

var idTitle = document.getElementById('title');
console.log(idTitle);

