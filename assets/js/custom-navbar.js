

$(document).ready(() =>{
      $(".nav i").click(function() {
            $("nav").stop().slideToggle();
            $("ul ul").css("display", "none")
      });

      $("ul li").click(function() {
            $("ul ul").stop().slideUp();
            $(this).find('ul').stop().slideToggle();
      })

      $(window).resize(function() {
            if($(window).width() > 768) {
                  $("nav").removeAttr('style');
            }
      })
})