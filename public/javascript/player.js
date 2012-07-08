$(document).ready(function(){
	if(html5_player){
		audio=$('.player audio').get(0);
		$('.list table tbody tr td').click(function(){
			audio.pause();
			$('.playing').removeClass('playing');
			$(this).parent().addClass('playing');
			$('.player audio source').attr('src','/music/'+(parseInt($(this).parent().attr("id"))-1));
			audio.play();
		});
	}
});
