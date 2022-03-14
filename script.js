$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4, slidesToScroll: 4,
        prevArrow:  '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>'
    });
  });

  $(window).resize(function(){
    $('.carousel')[0].slick.refresh();
  });

  $(document).ready(function(){
    $('.carousel-mobile').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-mobile'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              slidesToShow: 3
            }
          },{
            breakpoint: 930,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
    });
  });

  $(document).ready(function(){
    $('.carousel-mobile-two').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-mobile-two'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              slidesToShow: 3
            }
          },{
            breakpoint: 930,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
    });
  });

  $(document).ready(function(){
    $('.carousel-mobile-three').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-mobile-three'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              slidesToShow: 3
            }
          },{
            breakpoint: 930,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
    });
  });

  $(document).ready(function(){
    $('.carousel-mobile-four').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-mobile-four'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },{
            breakpoint: 930,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          }
        ]
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
    $(".nav-selector-two").removeClass("d-none").addClass("d-flex");
    $(".nav-selector-one .bottom-search-nav").addClass("notround");
  } else {
    $(".nav-selector-two").addClass("d-none").removeClass("d-flex");
    $(".nav-selector-one .bottom-search-nav").removeClass("notround");
  }
    
});

const navSlide = () => {
  $(".burger").on("click", function() {
    $(".nav-links").toggleClass("nav-active");
  });

  $(".burger").on("click", function() {
    $(".burger").toggleClass("toggle");
  });

}

const utilitiesSlide = () => {
  if ($(window).width() < 992) {
    $(".hotels").on("click", function() {
      $(".utilities-mobile").toggleClass("utilities-active");
      $(".burger").css('visibility', 'hidden');
      $(".close-btn").on("click", function() {
      $(".utilities-mobile").removeClass("utilities-active");
      $(".burger").css('visibility', 'visible');
      })
    });
 }
}

navSlide();
utilitiesSlide();
