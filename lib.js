$(document).ready(function(){
  3+9
  
  $(".header__fasearch, .header__search i").click(function(){
    $(".header__search, .header__input, .header__search i").toggleClass("active");
    $(".header__input[type='text']").focus();
  });

  /* SWIPER-SLIDER */
  const swiper = new Swiper('.swiper', {
    parallax: true,
    autoplay: {
      delay: 3800,
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  });
});
