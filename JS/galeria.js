
// con append coloco contenido dentro de body, galeria con efecto livebox con su modal

$('.galeria__img').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img src="'+ img +'" class="modal__img"><div class="modal__boton" id="modal__boton">x</div></div>';
  $('body').append(modal);
  $('#modal__boton').click(function(){
   $('#modal').remove();
  })
})

$(document).keyup(function(e){
  if (e.which=27) {
    $('#modal').remove();
  }
})