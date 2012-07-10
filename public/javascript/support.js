$(document).ready(function(){
var audioTag = document.createElement('audio');
if (!!audioTag.canPlayType){
	if (("no" != audioTag.canPlayType("audio/mpeg")) && ("" != audioTag.canPlayType("audio/mpeg"))) {
		//have mp3 support
		html5_player=true;//using html5 player
		$('<audio preload="auto" src="" type="audio/mpeg"></audio>').appendTo(".player");
	}
	else {
		//does not have mp3 support
		//use flash
		html5_player=true;
	}
}
else{
	//doesnot have html5 support
	//use flash
}
});
