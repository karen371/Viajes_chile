//codigo para el carrusel
$(document).ready(function(){
    $("#carousel-slide").carousel();
    $("#carousel-slide").on("slide.bs.carousel", function(e){
      var slideIndex = $(e.relatedTarget).index();
      console.log("Slide index: " + slideIndex);
      
      var buttons = $('#CarouselRicomida #indicators button');
      console.log(buttons); // Verifica si los botones existen
      
      buttons.removeClass('active');
      buttons.filter('[data-bs-slide-to="' + slideIndex + '"]').addClass('active');
    });
  });
  /*Tooltip*/
  document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl); 
    });
  });
  /* Formulario*/
  $(document).ready(function() {
    $('#MyFormulario').submit(function(event) {
      // Previene el envío por defecto del formulario
      event.preventDefault();
      let nombre = $('#Nombre').val();
      if(nombre.trim() === ''){
        alert('Por favor complete los campos');
      }
      else{
        let mensaje = 'Mensajes recido, gracias por contactarnos ' + nombre;
        alert(mensaje);
      }
    });
  });