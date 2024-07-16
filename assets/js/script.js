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