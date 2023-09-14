(function ($) {
  
  "use strict";

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var header = $('.header-sticky').height();

    if (scroll >= header) {
      $(".header-sticky").addClass("background-header");
    } else {
      $(".header-sticky").removeClass("background-header");
    }
  });


// For Menu

$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});


$(document).ready(function(){ 
  var touch   = $('#resp-menu1');
  var menu  = $('.menu');
 
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  });

$(document).ready(function(){ 
  var touch   = $('#resp-menu2');
  var menu  = $('.last-menu');
 
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  });


$(document).ready(function(){ 
  var touch   = $('#resp-menu3');
  var menu  = $('.menu');
 
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  });
        
//Contact Form Sidebar 
        $(document).ready(function(){
          
          $('.toggle').click(function(){
            $('.sidebar-contact').toggleClass('active')
            $('.toggle').toggleClass('active')
          })
      })

// counter Number
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});





// For Banner

$('.consultancy-slider').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.consultancy-slider2').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        }
    }
})



// Doctors

$('.our-team').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:5000,
    
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


// Doctors

$('.our-team-second').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

$('.our-team-third').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.innerpage-ourteam').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// Testmonial

    $("#testimonial-slider1").owlCarousel({
        loop: true, 
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// Testmonial

$("#testimonial-slider2").owlCarousel({
        loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$("#testimonial-slider3").owlCarousel({
        loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})


$("#testimonial-about").owlCarousel({
        loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

 

// Expertise

$('.expertise-slide').owlCarousel({
  loop:true,
  nav:false,
  margin: 10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})

$('.service-view-slider').owlCarousel({
  loop:true,
  nav:false,
  dots: true,
  margin: 10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:1
      }
  }
})

// Faq 
$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active-acc');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active-acc');
    });

});

  // --------------------------------------------------------

      $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='header']:checked").val()
                //alert(radioValue);        
                if (radioValue === "header2") {
                  $("#header-2").removeClass("sec_hide").addClass("sec_show");
                  $("#header-1").removeClass("sec_show").addClass("sec_hide");
                  $("#header-3").removeClass("sec_show").addClass("sec_hide");
                   $("#header-4").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "header3") {
                  $("#header-3").removeClass("sec_hide").addClass("sec_show");
                  $("#header-4").removeClass("sec_show").addClass("sec_hide");
                  $("#header-2").removeClass("sec_show").addClass("sec_hide");
                  $("#header-1").removeClass("sec_show").addClass("sec_hide");
                }
                 else if (radioValue === "header4") {
                  $("#header-4").removeClass("sec_hide").addClass("sec_show");
                  $("#header-3").removeClass("sec_show").addClass("sec_hide");
                  $("#header-2").removeClass("sec_show").addClass("sec_hide");
                  $("#header-1").removeClass("sec_show").addClass("sec_hide");
                }                    
                else if (radioValue === "header1") {
                  $("#header-1").removeClass("sec_hide").addClass("sec_show");
                  $("#header-2").removeClass("sec_show").addClass("sec_hide");
                  $("#header-3").removeClass("sec_show").addClass("sec_hide");
                  $("#header-4").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#header-1").addClass("sec_show");
                }
              });
            });

            // ---

             // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='banner']:checked").val()
                //alert(radioValue);        
                if (radioValue === "banner2") {
                  $("#banner-2").removeClass("sec_hide").addClass("sec_show");
                  $("#banner-1").removeClass("sec_show").addClass("sec_hide");
                  $("#banner-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "banner3") {
                  $("#banner-3").removeClass("sec_hide").addClass("sec_show");
                  $("#banner-2").removeClass("sec_show").addClass("sec_hide");
                  $("#banner-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "banner1") {
                  $("#banner-1").removeClass("sec_hide").addClass("sec_show");
                  $("#banner-2").removeClass("sec_show").addClass("sec_hide");
                  $("#banner-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#banner-1").addClass("sec_show");
                }
              });
            });

            // ---
             // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='feature']:checked").val()
                //alert(radioValue);        
                if (radioValue === "feature2") {
                  $("#feature-2").removeClass("sec_hide").addClass("sec_show");
                  $("#feature-1").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-3").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-4").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "feature3") {
                  $("#feature-3").removeClass("sec_hide").addClass("sec_show");
                  $("#feature-4").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-2").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-1").removeClass("sec_show").addClass("sec_hide");
                }
                 else if (radioValue === "feature4") {
                  $("#feature-4").removeClass("sec_hide").addClass("sec_show");
                  $("#feature-3").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-2").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-1").removeClass("sec_show").addClass("sec_hide");
                }           

                else if (radioValue === "feature1") {
                  $("#feature-1").removeClass("sec_hide").addClass("sec_show");
                  $("#feature-2").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-3").removeClass("sec_show").addClass("sec_hide");
                  $("#feature-4").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#feature-1").addClass("sec_show");
                }
              });
            });

            // ---
             // ---


            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='counter']:checked").val()
                //alert(radioValue);        
                if (radioValue === "counter2") {
                  $("#counter-2").removeClass("sec_hide").addClass("sec_show");
                  $("#counter-1").removeClass("sec_show").addClass("sec_hide");
                  $("#counter-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "counter3") {
                  $("#counter-3").removeClass("sec_hide").addClass("sec_show");
                  $("#counter-2").removeClass("sec_show").addClass("sec_hide");
                  $("#counter-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "counter1") {
                  $("#counter-1").removeClass("sec_hide").addClass("sec_show");
                  $("#counter-2").removeClass("sec_show").addClass("sec_hide");
                  $("#counter-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#counter-1").addClass("sec_show");
                }
              });
            });


            // ---
              // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='service']:checked").val()
                //alert(radioValue);        
                if (radioValue === "service2") {
                  $("#service-2").removeClass("sec_hide").addClass("sec_show");
                  $("#service-1").removeClass("sec_show").addClass("sec_hide");
                  $("#service-3").removeClass("sec_show").addClass("sec_hide");
                  $("#service-4").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "service3") {
                  $("#service-3").removeClass("sec_hide").addClass("sec_show");
                  $("#service-4").removeClass("sec_show").addClass("sec_hide");
                  $("#service-2").removeClass("sec_show").addClass("sec_hide");
                  $("#service-1").removeClass("sec_show").addClass("sec_hide");
                }
                 else if (radioValue === "service4") {
                  $("#service-4").removeClass("sec_hide").addClass("sec_show");
                  $("#service-3").removeClass("sec_show").addClass("sec_hide");
                  $("#service-2").removeClass("sec_show").addClass("sec_hide");
                  $("#service-1").removeClass("sec_show").addClass("sec_hide");
                }           

                else if (radioValue === "service1") {
                  $("#service-1").removeClass("sec_hide").addClass("sec_show");
                  $("#service-2").removeClass("sec_show").addClass("sec_hide");
                  $("#service-3").removeClass("sec_show").addClass("sec_hide");
                  $("#service-4").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#service-1").addClass("sec_show");
                }
              });
            });

            // ---
             // ---

             // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='project']:checked").val()
                //alert(radioValue);        
                if (radioValue === "project2") {
                  $("#project-2").removeClass("sec_hide").addClass("sec_show");
                  $("#project-1").removeClass("sec_show").addClass("sec_hide");
                  $("#project-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "project3") {
                  $("#project-3").removeClass("sec_hide").addClass("sec_show");
                  $("#project-2").removeClass("sec_show").addClass("sec_hide");
                  $("#project-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "project1") {
                  $("#project-1").removeClass("sec_hide").addClass("sec_show");
                  $("#project-2").removeClass("sec_show").addClass("sec_hide");
                  $("#project-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#project-1").addClass("sec_show");
                }
              });
            });



            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='usp']:checked").val()
                //alert(radioValue);        
                if (radioValue === "usp2") {
                  $("#usp-2").removeClass("sec_hide").addClass("sec_show");
                  $("#usp-1").removeClass("sec_show").addClass("sec_hide");
                  $("#usp-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "usp3") {
                  $("#usp-3").removeClass("sec_hide").addClass("sec_show");
                  $("#usp-2").removeClass("sec_show").addClass("sec_hide");
                  $("#usp-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "usp1") {
                  $("#usp-1").removeClass("sec_hide").addClass("sec_show");
                  $("#usp-2").removeClass("sec_show").addClass("sec_hide");
                  $("#usp-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#usp-1").addClass("sec_show");
                }
              });
            });

            // ---
             $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='ourteam']:checked").val()
                //alert(radioValue);        
                if (radioValue === "ourteam2") {
                  $("#ourteam-2").removeClass("sec_hide").addClass("sec_show");
                  $("#ourteam-1").removeClass("sec_show").addClass("sec_hide");
                  $("#ourteam-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "ourteam3") {
                  $("#ourteam-3").removeClass("sec_hide").addClass("sec_show");
                  $("#ourteam-2").removeClass("sec_show").addClass("sec_hide");
                  $("#ourteam-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "ourteam1") {
                  $("#ourteam-1").removeClass("sec_hide").addClass("sec_show");
                  $("#ourteam-2").removeClass("sec_show").addClass("sec_hide");
                  $("#ourteam-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#ourteam-1").addClass("sec_show");
                }
              });
            });

            // ---
           
             // ---
             $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='testimonial']:checked").val()
                //alert(radioValue);        
                if (radioValue === "testimonial-2") {
                  $("#testimonial-2").removeClass("sec_hide").addClass("sec_show");
                  $("#testimonial-1").removeClass("sec_show").addClass("sec_hide");
                  $("#testimonial-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "testimonial-3") {
                  $("#testimonial-3").removeClass("sec_hide").addClass("sec_show");
                  $("#testimonial-2").removeClass("sec_show").addClass("sec_hide");
                  $("#testimonial-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "testimonial-1") {
                  $("#testimonial-1").removeClass("sec_hide").addClass("sec_show");
                  $("#testimonial-2").removeClass("sec_show").addClass("sec_hide");
                  $("#testimonial-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#testimonial-1").addClass("sec_show");
                }
              });
            });

            // ---
 
            // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='contact']:checked").val()
                //alert(radioValue);        
                if (radioValue === "contact2") {
                  $("#contact-2").removeClass("sec_hide").addClass("sec_show");
                  $("#contact-1").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-3").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-4").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "contact3") {
                  $("#contact-3").removeClass("sec_hide").addClass("sec_show");
                  $("#contact-4").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-2").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-1").removeClass("sec_show").addClass("sec_hide");
                }  
                 else if (radioValue === "contact4") {
                  $("#contact-4").removeClass("sec_hide").addClass("sec_show");
                  $("#contact-3").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-2").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-1").removeClass("sec_show").addClass("sec_hide");
                }                    
                else if (radioValue === "contact1") {
                  $("#contact-1").removeClass("sec_hide").addClass("sec_show");
                  $("#contact-2").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-3").removeClass("sec_show").addClass("sec_hide");
                  $("#contact-4").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#contact-1").addClass("sec_show");
                }
              });
            });

            // ---

             $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='footer']:checked").val()
                //alert(radioValue);        
                if (radioValue === "footer2") {
                  $("#footer-2").removeClass("sec_hide").addClass("sec_show");
                  $("#footer-1").removeClass("sec_show").addClass("sec_hide");
                  $("#footer-3").removeClass("sec_show").addClass("sec_hide");
                }
               
                else if (radioValue === "footer3") {
                  $("#footer-3").removeClass("sec_hide").addClass("sec_show");
                  $("#footer-2").removeClass("sec_show").addClass("sec_hide");
                   $("#footer-1").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "footer1") {
                  $("#footer-1").removeClass("sec_hide").addClass("sec_show");
                  $("#footer-2").removeClass("sec_show").addClass("sec_hide");
                   $("#footer-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#footer-1").addClass("sec_show");
                }
              });
            });


           

           

            // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='information-view']:checked").val()
                //alert(radioValue);        
                if (radioValue === "information-view2") {
                  $("#information-view-2").removeClass("sec_hide").addClass("sec_show");
                  $("#information-view-1").removeClass("sec_show").addClass("sec_hide");
                  $("#information-view-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "information-view3") {
                  $("#information-view-3").removeClass("sec_hide").addClass("sec_show");
                  $("#information-view-2").removeClass("sec_show").addClass("sec_hide");
                  $("#information-view-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "information-view1") {
                  $("#information-view-1").removeClass("sec_hide").addClass("sec_show");
                  $("#information-view-2").removeClass("sec_show").addClass("sec_hide");
                  $("#information-view-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#information-view-1").addClass("sec_show");
                }
              });
            });


            // ---

             // ---

            $(document).ready(function () {
              $("input[type='radio']").click(function () {
                var radioValue = $("input[name='weoffer']:checked").val()
                //alert(radioValue);        
                if (radioValue === "weoffer2") { 
                  $("#weoffer-2").removeClass("sec_hide").addClass("sec_show");
                  $("#weoffer-1").removeClass("sec_show").addClass("sec_hide");
                  $("#weoffer-3").removeClass("sec_show").addClass("sec_hide");
                }
                else if (radioValue === "weoffer3") {
                  $("#weoffer-3").removeClass("sec_hide").addClass("sec_show");
                  $("#weoffer-2").removeClass("sec_show").addClass("sec_hide");
                  $("#weoffer-1").removeClass("sec_show").addClass("sec_hide");
                }                
                else if (radioValue === "weoffer1") {
                  $("#weoffer-1").removeClass("sec_hide").addClass("sec_show");
                  $("#weoffer-2").removeClass("sec_show").addClass("sec_hide");
                  $("#weoffer-3").removeClass("sec_show").addClass("sec_hide");
                }
                else {
                  $("#weoffer-1").addClass("sec_show");
                }
              });
            });




            /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD
  
})(window.jQuery);