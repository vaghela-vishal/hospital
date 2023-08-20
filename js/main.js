// Sticky Navbar
     $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
          $('.navbar').addClass('sticky-top');
      } else {
          $('.navbar').removeClass('sticky-top');
      }
  });
    
    
//testimonial  

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

   
  