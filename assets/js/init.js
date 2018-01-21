 (function($){
   $(function(){

     $('.button-collapse').sideNav();
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
     $('.materialboxed').materialbox();
     $('.scrollspy').scrollSpy();
     $('.tap-target').tapTarget('open');

     jQuery('#popup').on('click', function(event) {
            jQuery('#popup').toggle('hide');
       });

   }); // end of document ready
 })(jQuery);
