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

const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})

