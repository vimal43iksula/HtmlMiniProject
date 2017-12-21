
    
$(document).ready(function() {
     
     /*For search*/
            $(".search").click(function() {
               $(".search-box").toggle();
               
               $("input[type='text']").focus();
             });

        
  $('.banner').slick({
    
  /*For Banner*/
  speed: 500,

        slidesToShow: 1,
        slidesToScroll: 1

  });

   
$('.multiple-items').slick({

 /*   nextArrow: '<i class="fa fa-chevron-left fa-2x"></i>',
  prevArrow: '<i class="fa fa-chevron-right fa-2x"></i>',*/
 slidesToShow: 4,
 slidesToScroll: 1,

});


 



        });