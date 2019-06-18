var app = {
    init: function () {
        var par = document.getElementById('par');
        titleClick();
        eventOnParagraphe(par);
        deleteParagraphe()
    }
};

function titleClick() {
    var title1 = document.getElementById('title-1');
    title1.onclick = function() {
        console.log('click')
        var p = document.createElement("p");
        p.innerHTML='new paragraphe new paragraphe new paragraphe new paragraphe new paragraphe \
        new paragraphe new paragraphe new paragraphe new paragraphe new paragraphe new paragraphe \
        new paragraphe new paragraphe new paragraphe new paragraphe new paragraphe new paragraphe \
        new paragraphe new paragraphe new paragraphe';
        p.classList.add('text-red');
        p.id='par';
        eventOnParagraphe (p);
        document.body.appendChild(p);
    }
}

function eventOnParagraphe (par) {
    par.addEventListener('mouseover', function(event) { 
        var width = window.innerWidth;
        var x = event.x;
        var y = event.y;
        console.log('x : ' + x + '   y : ' + y);
        if(x < width / 2){
            console.log('GAUCHE');
            this.classList.replace('text-red' , 'text-black');
    
        } else {
            console.log('DROITE');
            this.classList.replace('text-black' , 'text-red');
        }
    })

    par.addEventListener('mouseout', function(event) {
        console.log('OUT');
            this.classList.replace('text-black' , 'text-red');
    })
}

function deleteParagraphe() {
    var button = document.getElementById('btn-delete');
    
    button.onclick = function() {
        var p = document.getElementById('par');
        do {
            document.body.removeChild(p);
            p = document.getElementById('par');
        } while (p!=null)
    }
}



