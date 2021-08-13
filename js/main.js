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
    
  


})
