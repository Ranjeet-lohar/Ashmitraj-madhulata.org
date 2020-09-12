/*================================
            SERVICES
=================================  */


  $(function() { 
  	
  new WOW().init();
});

  /*================================
            WORK
  =================================  */
  $(function () {
   
   $("#img-wrapper").magnificPopup({
   	// $('.image-link').magnificPopup({type:'image'});

   	   delegate: 'a', // child items selector, by clicking on it popup will open
       type: 'image',
      
         gallery: {
           enabled : true
        }
     });

  });


 /*================================
               TEAM
  =================================  */
$(function () {

	$("#team-members").owlCarousel({
		items:3,
		autoplay: true,
		smartSpeet: 700,
		loop: true,
		autoplayHoverpause: true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    },

        }
	});		
});


/*================================
              TESTMONIAL
  =================================  */
$(function () {
	
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeet:700,
		loop:true,
		autoplayHoverpause:true
	});		
});


/*================================
              STATS
  =================================  */
$(function () {
	
	$('.counter').counterUp({
		delay:10,
		time:2000
	});
});



/*================================
              PRISING
  =================================  */
$(function () {
	
	$('.pricing-value').pricingvalueUp({
		delay:10,
		time:100
	});
});


/*================================
              CLIENTS
  =================================  */
$(function () {
	
	$("#clients-list").owlCarousel({
		items:6,
		autoplay:true,
		smartSpeet:700,
		loop:true,
		autoplayHoverpause:true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 3
		    },
		    // breakpoint from 768 up
		    768 : {
		       items:5
		    },

		    992 : {
		        items:6

		    }

		}


	});		
});


/*================================
             NAVIGAION
  =================================  */

  $(function () {


  	$(window).scroll(function(){

  		if($(this).scrollTop() < 50 ) {

  		// hide nav
  		$("nav").removeClass("vesco-top-nav");
  		// $("#back-to-top").fadeOut();

  		}  else {
  		// show nav
  		$("nav").addClass("vesco-top-nav");
  		// $("#back-to-top").fadeIn();


  		}

  	});

  });


  // Smooth scrolling

  $(function () {

  	$("a.smooth-scroll").click(function(event){
  
     event.preventDefault();

     // get/return ic lik #about, #work, #team and etc
     var section = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(section).offset().top - 64

     }, 1250, "easeInOutExpo");

  	});

  });
  

  // Close mobile menu on click


  $(function(){

  	$(". navbar-collapse ul li a").on("click touch", function(){
  		$(".navbar-toggle").click();
  	});
  });