 var inputs =document.getElementsByClassName('formulario__input');
 for (var i=0 ;i<inputs.length;i++){
     inputs[i].addEventListener('keyup',function(){//el evento keyup es cuando suelto una tecla
         if(this.value.length>=1){
             this.nextElementSibling.classList.add('fijar');
         } else{
             this.nextElementSibling.classList.remove('fijar');// para que cuando escriba se mueva
         }
     })
 }