/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

(function($){
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	
    //Loading Gif & FadeIn all sections  
	$body.imagesLoaded( function() {
		setTimeout(function() {     
		      // Resize sections
		      adjustWindow();
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');  
		}, 2300);
	});
	
	function adjustWindow(){
		// Init Skrollr
		var s = skrollr.init();

		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	}		
})(jQuery);

// scroll to section effect

$('a[href^="#"]').bind('click.smoothscroll', function(e){
  e.preventDefault();

  var target = $(this).hash,
  $target = $(target);
    $('html, body').stop().animate({
      'scrollTop' : $target.offset().top
    }, 900, 'swing', function(){
      window.location.hash = target;
  });
});