// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Enable manual navigation
  swiper2.on("slideChangeTransitionEnd", function () {
    swiper2.autoplay.start();
  });
  
  swiper2.on("mouseenter", function () {
    swiper2.autoplay.stop();
  });
  
  swiper2.on("mouseleave", function () {
    swiper2.autoplay.start();
  });

  
  // Navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  
  // Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");
  
  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
  
  
    function hideIntroPage() {
      var introPage = document.querySelector('.intro-page');
      introPage.classList.add('hide');
    }

    document.addEventListener("DOMContentLoaded", function() {
      var introPage = document.querySelector('.intro-page');
      var splashScreen = document.querySelector('.splash-screen');
      var audioElement = document.getElementById('intro-audio');
  
      audioElement.addEventListener('canplaythrough', function() {
        // Commented out the autoplay for audioElement
        // audioElement.play();
      });
  
      setTimeout(function() {
        introPage.classList.add('hide');
        splashScreen.classList.add('hide');
        audioElement.play(); // Play the audio when hiding the intro page
      }, 4000);
  
      function hideIntroPage() {
        introPage.classList.add('hide');
        audioElement.play(); // Play the audio when hiding the intro page
      }
    });
  

  


  