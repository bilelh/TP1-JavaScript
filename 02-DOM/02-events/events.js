var par = document.getElementById('par');

var title1 = document.getElementById('title-1');

title1.onclick = function() {
    console.log('click')
    var p = document.createElement("p");
    var newpara = document.createTextNode('new paragraphe');
    document.body.appendChild(p);
    
    p.classList.add('text-red');
    p.id='par'
    p.appendChild(newpara);

}

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




