// Menu Responsive

$(function() {

	//MENU RESPONSIVO
		
	$( window ).resize(function() {
		if($( window ).width()>=1024){
			$('.logo').css('height',$('.logo').width());
			$('#botones').css('height', $('#mapa').height());
		}
		else{
			
			// ALTURAS Y ANCHOS
			$('#submenu ul li.col').css('height',$('#submenu ul li.col').width());
			$('.logo').css('height',$('.logo').width());
			$('#botones').css('height', $('#mapa').height());
		}
	});
	
	$(window).trigger('resize');
});