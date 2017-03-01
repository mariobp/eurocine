 $(document).ready(function(){
    $('.slider').slider({
      height: 231,
    });
    $('.social').waypoint(function() {
        $('.cont-menu').addClass('all-fixed');
        $('.espacio').css('display', 'none');
    }, { offset: '50%' });

    $('.social').waypoint(function() {
      console.log("entro");
        $('.cont-menu').removeClass('all-fixed');
        $('.espacio').css('display', 'inherit');
    }, { offset: '60%' });
    $('.modal').modal();
    $('.caja-p').click(function(event) {
      /* Act on the event */
      $('#modal1').modal('open');
    });

    $('.activar-hover').hover(function() {
      /* Stuff to do when the mouse enters the element */
      $(".footer-hover").addClass('active');
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $(".footer-hover").removeClass('active');
      console.log("remove");
    });
  });
