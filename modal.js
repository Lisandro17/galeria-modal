$('.galeria-img').click(function(e){
   var img = e.target.src;
$('.galeria').append('<div class="modal"><img src="'+ img +'" class="img-modal" id="modal" alt=""><div class="boton-modal">X</div></div>');
$('.boton-modal').click(function(){
 $('#modal').remove(); 
 $('.boton-modal').remove(); 
}) 
})