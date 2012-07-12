$(document).ready(function(){
	if(html5_player){
		audio=$('.player audio').get(0);
		$('.list table tbody tr td').live("click",function(){
			audio.pause();
			$('.playing').removeClass('playing');
			$(this).parent().addClass('playing');
			$('.player audio').attr('src','/music/'+(parseInt($(this).parent().attr("id"))));
			$('.player #title').html("<p><b>Song:</b>  "+$(this).parent().children('#title').text()+" <br><b>Album:</b>  "+$(this).parent().children('#album').text()+" <br><b>Artist:</b>  "+$(this).parent().children('#artist').text()+"</p>");
			audio.play();
		});
		$('#playtoggle').live("click",function(){
			pause_track();
		});
		
		$(audio).bind('timeupdate', function() {
			var rem = parseInt(audio.duration - audio.currentTime, 10),
			pos = (audio.currentTime / audio.duration) * 100,
			mins = Math.floor(rem/60,10),
			secs = rem - mins*60;
			$('#timeleft').text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
			$('#loading').css({width: pos + '%'});
		});
		
		function pause_track(){
			audio.paused?audio.play():audio.pause();
		}
		
		function next_track(){
			pause_track();
			$new_track=$('.playing').next();
			$('.playing').removeClass('playing');
			$new_track.addClass('playing');
			$('.player audio').attr('src','/music/'+(parseInt($new_track.attr("id"))));
			$('.player #title').html("<p><b>Song:</b>  "+$new_track.children('#title').text()+" <br><b>Album:</b>  "+$new_track.children('#album').text()+" <br><b>Artist:</b>  "+$new_track.children('#artist').text()+"</p>");
			audio.play();
		}
		
		$('#gutter').click(function(event){
			pos=(event.offsetX/850);
			audio.currentTime=audio.duration*pos;
		});
		
		$(audio).bind("ended",function(){
			next_track();
		});

		
	}
});
