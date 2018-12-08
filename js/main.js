// Mason M3dia Site Template
// A flexbox & bootstrap based website by Andrew Mason and Mason Media
// andrewmasonmedia.com
// Copyright 2017


// Collapse mobile menu after clicking

    $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


//Change navbar color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// smooth/auto scroll

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, button a, h3.button a, h4.button a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
//      window.location.hash = hash; --> commented this out to remove #url
      });
    } // End if
  });
})


//scroll to top button 

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

//fade in all pages on load: https://www.abeautifulsite.net/a-clean-fade-in-effect-for-webpages

//document.body.className += ' fade-out';
//
//$(function() {
//    $('body').removeClass('fade-out');
//});

$(function() {
$('body').first().delay().animate({'opacity':'1'},100);
$('.heading').delay(600).animate({'opacity':'1'},500);
$('.sub-heading').delay(1000).animate({'opacity':'1'},800);
$('.button').delay(1500).animate({'opacity':'1'},800);
$('.fa-long-arrow-down').delay(1500).animate({'opacity':'1'},800);
});