$(document).ready(function(){
	$('#hamburger-icon').click(function(){
		$(this).toggleClass('open');
	});
});
$(document).ready(function(){
  $('#hamburger-icon').click(function(){
    $('#sidebar').toggleClass('visible')
  });
});
