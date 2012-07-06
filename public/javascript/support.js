$(document).ready(function(){
var audioTag = document.createElement('audio');
if (!!audioTag.canPlayType){
	if (("no" != audioTag.canPlayType("audio/mpeg")) && ("" != audioTag.canPlayType("audio/mpeg"))) {
		//have mp3 support
		$('<audio><source src="" type="audio/mpeg"></source></audio>').appendTo(".player");
	}
	else {
		//does not have mp3 support
		//use flash
	}
}
else{
	//doesnot have html5 support
	//use flash
}
});
