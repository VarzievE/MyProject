$(document).ready(function(){

  
  $(".header__fasearch, .header__search i").click(function(){
    $(".header__search, .header__input, .header__search i").toggleClass("active");
    $(".header__input[type='text']").focus();
  });

  /* SWIPER-SLIDER */
  const swiper = new Swiper('.slider', {
    
  });
});
