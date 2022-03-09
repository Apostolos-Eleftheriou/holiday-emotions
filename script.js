$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4, slidesToScroll: 4,
        prevArrow:  '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>'
    });
  });

  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });
  
  var map = L.map('map', {scrollWheelZoom:false}).setView([38.17,  20.56], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

$('.dr-off').on("change", function() {
  if($(this).prop("checked")){
    $(".test2").removeClass("d-none").addClass("d-flex");
    $(".test1 .bottom-search-nav").addClass("notround");
  } else {
    $(".test2").addClass("d-none").removeClass("d-flex");
    $(".test1 .bottom-search-nav").removeClass("notround");
  }
    
});