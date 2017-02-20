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
  });
