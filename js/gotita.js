var s = skrollr.init({
    render: function(data) {
        //TOP OFFSET
        $('#off').text(data.curTop);
    }
});

$(function(){
	$('#slide-1').height($(window).height());
});

$(window).scroll(function(){
 var size = window.scrollY || 0,
  auidoEl = document.getElementById('sound2');
 	if(size > 700){	 
 	if(auidoEl.paused) auidoEl.play;
 }
 else{
 	auidoEl.paused = true;
 }
})