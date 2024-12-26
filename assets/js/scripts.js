// Window scroll
$(window).on("scroll", function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 100){
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header');
  }
});

// Document Ready
$(document).ready(function () {
  // Typing animation
  new Typed('#type-it', {
    strings: ['Web Developer', 'Meachtronics', 'Freelancer'],
    typeSpeed: 100,
    loop: true
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    margin:30,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
    }
  });

  // One Page Scroll
  $('a[data-scroll-nav]').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $.scrollTo(target, 800, {offset: {top:-70}});
  });
});

// Data footer current
document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});
