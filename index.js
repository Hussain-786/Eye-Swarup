var i = 0;

$("#more").hide();
$(window).resize(function() {
  if(window.innerWidth <=800){
    $("#view-more").hide();
    $("#more").show();
    $("#more").on("click", function() {
      if (!i) {
        $("#more").text("less...");
        $("#view-more").show();
        i = 1;
      } else {
        $("#more").text("more...");
        $("#view-more").hide();
        i = 0;
      }
    });
  }
});

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
