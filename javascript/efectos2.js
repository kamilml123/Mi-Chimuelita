var imagenes=new Array( "Imagenes/img1.jpg","Imagenes/img2.jpg","Imagenes/img3.jpg","Imagenes/img4.jpg" )

var posicion=0;
var img=document.querySelector(".img"); /* para poder seleccionar elementos de html* osea un elemento de una clase */

img.style.backgroundImage='url('+imagenes[posicion]+')';

function izquierda(){
    if(posicion==0){
        posicion=3;
    }
    else{
        posicion--;
    }
    img.style.backgroundImage='url('+imagenes[posicion]+')';
}

function derecha(){
    if(posicion==3){
        posicion=0;
    }
    else{
        posicion++; 
    }
    img.style.backgroundImage='url('+imagenes[posicion]+')';
}