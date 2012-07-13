$(document).ready(function(){
	if(html5_player){
		$(document).keydown(function (e) {	
			if(e.ctrlKey){
				console.log(e.keyCode);
				switch(e.keyCode){
					case 32:
						pause_toggle();
						break;
					case 37:
						prev_track();
						break;
					case 39:
						next_track();
						break;
					case 38:
						break;
					case 40:
						break;
				}
				e.preventDefault();
			}
			
		});
	}
});
