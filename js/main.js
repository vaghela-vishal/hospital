

  
    
     // Sticky Navbar
     $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
          $('.navbar').addClass('sticky-top');
      } else {
          $('.navbar').removeClass('sticky-top');
      }
  });
    
    
    //  // Dropdown on mouse hover
    //  const $dropdown = $(".dropdown");
    //  const $dropdownToggle = $(".dropdown-toggle");
    //  const $dropdownMenu = $(".dropdown-menu");
    //  const showClass = "show";
     
    //  $(window).on("load resize", function() {
    //      if (this.matchMedia("(min-width: 992px)").matches) {
    //          $dropdown.hover(
    //          function() {
    //              const $this = $(this);
    //              $this.addClass(showClass);
    //              $this.find($dropdownToggle).attr("aria-expanded", "true");
    //              $this.find($dropdownMenu).addClass(showClass);
    //          },
    //          function() {
    //              const $this = $(this);
    //              $this.removeClass(showClass);
    //              $this.find($dropdownToggle).attr("aria-expanded", "false");
    //              $this.find($dropdownMenu).removeClass(showClass);
    //          }
    //          );
    //      } else {
    //          $dropdown.off("mouseenter mouseleave");
    //      }
    //  });
  
   


    // // swiper

    // var swiper = new Swiper(".mySwiper",{
    //     loop:true,
    //     autoplay:true,
    //     autoplayTimeout:1000,
    //     autoplayHoverPause:true,

    //     effect:"coverflow",
    //     grapCursor:true,
    //     centereSlides:true,
    //     slidesPerView:"auto",
    //     coverflowEffect:{
    //         rotate:0,
    //         stretch:0,
    //         depth:300,
    //         modifier:1,
    //         slideShadows:false,
    //     },
    //     pagination:{
    //         el:".swiper-pagination",
    //     },


    // });

  
    // var swiper = new Swiper(".slide-content", {
    //     slidesPerView: 3,
    //     spaceBetween: 25,
    //     loop: true,
    //     centerSlide: 'true',
    //     fade: 'true',
    //     grabCursor: 'true',
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //       dynamicBullets: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next12",
    //       prevEl: ".swiper-button-prev",
    //     },
    
    //     breakpoints:{
    //         0: {
    //             slidesPerView: 1,
    //         },
    //         520: {
    //             slidesPerView: 2,
    //         },
    //         950: {
    //             slidesPerView: 3,
    //         },
    //     },
    //   });

    //   var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 1,
    //     grabCursor: true,
    //     loop: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next1",
    //       prevEl: ".swiper-button-prev2",
    //     },
    //   });

    //   // testimonial

  
    //   const swiper = new Swiper(".swiper", {
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     },
    //     // Default parameters
    //     slidesPerView: 1,
    //     loop: true,
    //     centeredSlides: true,
    //     spaceBetween: 10,
    //     // Responsive breakpoints
    //     breakpoints: {
    //       // when window width is >= 320px
    //       320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //       },
    //       // when window width is >= 480px
    //       480: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //       },
    //       // when window width is >= 640px
    //       640: {
    //         slidesPerView: 3,
    //         spaceBetween: 40
    //       }
    //     }
    //   });

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

   
  