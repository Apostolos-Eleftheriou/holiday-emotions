$(document).ready(function(){
    $('.carousel-landing-page').slick({
        slidesToShow: 4, slidesToScroll: 4,
        prevArrow:  '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>'
    });
  });

  $(window).resize(function(){
    $('.carousel-landing-page')[0].slick.refresh();
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
  
  
  $(document).ready(function(){
    $('.carousel-destination').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-destination'),
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
    $('.carousel-destination-two').slick({
        slidesToShow: 1, slidesToScroll: 1,
        prevArrow:  '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        appendArrows: $('.arrows-destination-two'),
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
    $(".nav-link").removeClass("active");
    $(".hotels").on("click", function() {
      $(".hotels-mobile").addClass("hotels-active");
      $(".burger").css('visibility', 'hidden');
      $(".close-btn").on("click", function() {
        $(".hotels-mobile").removeClass("hotels-active");
        $(".nav-link").removeClass("active");
        $(".burger").css('visibility', 'visible');
      })
    });
    $(".cars").on("click", function() {
      $(".cars-mobile").addClass("cars-active");
      $(".burger").css('visibility', 'hidden');
      $(".close-btn").on("click", function() {
        $(".cars-mobile").removeClass("cars-active");
        $(".nav-link").removeClass("active");
        $(".burger").css('visibility', 'visible');
      })
    });
    $(".stay").on("click", function() {
      $(".stay-drive-mobile").addClass("stay-drive-active");
      $(".burger").css('visibility', 'hidden');
      $(".close-btn").on("click", function() {
        $(".stay-drive-mobile").removeClass("stay-drive-active");
        $(".nav-link").removeClass("active");
        $(".burger").css('visibility', 'visible');
      })
    });
    $(".emotions").on("click", function() {
      $(".emotions-mobile").addClass("emotions-active");
      $(".burger").css('visibility', 'hidden');
      $(".close-btn").on("click", function() {
        $(".emotions-mobile").removeClass("emotions-active");
        $(".nav-link").removeClass("active");
        $(".burger").css('visibility', 'visible');
      })
    });
 } 
};

$(window).resize(function(){
  if ($(window).width() < 992) {
    utilitiesSlide();
  }
});

navSlide();
utilitiesSlide();
