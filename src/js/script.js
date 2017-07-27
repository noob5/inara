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

	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
		anchors: ['chapter1', 'chapter2', 'modellGeometrie', 'blockdefinition', 'lastZeitReihenfolge', 'materialgesetz', 'berechnen', 'ergebnisse', 'chapter3'],
		menu: '#mySidenav',
		scrollingSpeed: 1700
	});
  
	// Floating Nav
	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 800) {
	    $('.sidenav').fadeIn();
	  	$('.sidenav').removeClass('hidden');
	  } else {
	    $('.sidenav').fadeOut();
	  }
	});
});

	function printPage(){
		window.print();
	}
