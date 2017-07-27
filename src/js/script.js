$( document ).ready(function() {
  // Handler for .ready() called.
	// Print page

	// Ace Code Display
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/json");
	editor.setReadOnly(true);
	editor.resize();
	editor.setOptions({
		maxLines: Infinity
	});

/*	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
		anchors: ['chapter1', 'chapter2', 'modellGeometrie', 'blockdefinition', 'lastZeitReihenfolge', 'materialgesetz', 'berechnen', 'ergebnisse', 'chapter3'],
		menu: '#mySidenav',
		scrollingSpeed: 1700
	});*/
  
	// Floating Nav
	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  var bottom_of_object = $("#chapter1").offset().top + $("#chapter1").outerHeight();
	  if (y > bottom_of_object) {
	    $('.sidenav').fadeIn();
	  	$('.sidenav').removeClass('hidden');
	  } else {
	    $('.sidenav').fadeOut();
	  }
	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
});

	function printPage(){
		window.print();
	}
