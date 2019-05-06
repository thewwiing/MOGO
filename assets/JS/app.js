
$(function(){

    var introH = $("#intro").innerHeight(),
        header = $("#header"),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);
    $(window).on("scroll",function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){
      if(scrollOffset > introH){
        header.addClass("fixed");
      }
      else{
        header.removeClass("fixed");
      }
    }


    // Smooth Scroll
    $("[data-scroll]").on("click",function(event){
      event.preventDefault();
      var blockID = $(this).data('scroll');
      var blockOffset = $(blockID).offset().top;

      $("#nav a").removeClass("active");
      $(this).addClass("active");

      $("html,body").animate({
        scrollTop: blockOffset
      },500);


    });


    // Burger menu
    $("#nav-toggle").on("click",function(event){
      event.preventDefault();
      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
    });

    // collapse
    $("[data-collapse]").on("click",function(event){
      event.preventDefault();
      var blockID = $(this).data('collapse');
      $(this).toggleClass("active");


    });

    // Slider
    $("[data-slider]").slick({
      infinite:true,
      fade:false,
      slidesToShow:1,
      slidesToScroll:1
    });




});
