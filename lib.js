$(document).ready(function(){
  
    $(".header__fasearch").click(function(){
      $(".header__search, .header__input").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });