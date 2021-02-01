$(document).ready(function() {


	//Modal Home
/*	$('#ModalBemVindo').modal({
		backdrop: 'static',
		keyboard: true
	});*/

  // Dropdown hover
/*  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(300);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(300);
  });*/

	// Tooltip
	//ativarTooltip();

});
// End $(document).ready






// Animate.css
$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

// Ativar Tooltip
//function ativarTooltip() {
//	$('.abre-tooltip').tooltip();
//}

