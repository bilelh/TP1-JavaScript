var par = document.getElementById('par');
par.addEventListener('mouseover', function(event) { 
    event.target.style.color = "green";
    var width = window.innerWidth;
    var x = event.x;
    var y = event.y;
    console.log('x : ' + x + '   y : ' + y);
    if(x < width / 2){
        console.log('GAUCHE');
    } else {
        console.log('DROITE');
    }
})

par.addEventListener('mouseout', function(event) {
    event.target.style.color = "red";
})


