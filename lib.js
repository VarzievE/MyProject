$(document).ready(function(){
  
    $(".header__fasearch").click(function(){
      $(".header__search, .header__input").toggleClass("active");
      $(".header__input[type='text']").focus();
    });
    
  });
