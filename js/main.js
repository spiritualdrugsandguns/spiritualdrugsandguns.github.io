/* First Slider*/
$(document).ready(function(){
    var icon = $(".carousel-control-prev,.carousel-control-next");
    var carousel = $(".carousel-item");
    var ic =  $(".carousel-control-prev-icon,.carousel-control-next-icon")
    icon.hide();
    carousel.mouseover(function(){
        icon.show();
    });
    carousel.mouseout(function(){
        icon.hide();
    });
    
//slick
    $('.our-products').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true
        

      });
  


})

