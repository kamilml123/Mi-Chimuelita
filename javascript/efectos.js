window.addEventListener('load',desplazar);


var imagenmovimiento=document.getElementById('bt1');


var slider=[
    'Imagenes/portada1.jpg',
    'Imagenes/portada2.jpg',
    'Imagenes/fotografia3.jpg'
]

indice=0;
function desplazar(){
    imagenmovimiento.src=slider[indice];
    indice++;
    if(indice>=slider.length)indice=0;
    setTimeout(desplazar,4500)
}

