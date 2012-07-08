$(document).ready(function(){
	function browser_update(response){
		eval("ls="+response);
					$('.browser').html('');
					$.each(ls,function(l,i){
						if(i.indexOf(".mp3")>0){
							$('.browser').append("<div class='file' id="+i+"><div class='icon'></div><p>"+i+"</p></div>");}
						else{
							$('.browser').append("<div class='folder' id="+i+"><div class='icon'></div><p>"+i+"</p></div>");
						}
					});
					$( ".icon" ).click(function () {
						$('.highlight').removeClass("highlight");
						$(this).parent().toggleClass("highlight");
					});
					$( ".browser div p" ).click(function () {
						$('.highlight').removeClass("highlight");
						$(this).parent().toggleClass("highlight");
					});
					$('.browser').children().first().addClass('highlight');
	}
	$('.container').animate({
		height : '450px'
	},1300,'easeOutBounce');
	$(document).keydown(function (e) {
		//alert(e.keyCode);
		if (e.ctrlKey && e.keyCode == 13) {
			if(!$('.highlight').hasClass('added')){
				$('.library').append("<div class='source'>"+cwd+$('.highlight p').text()+"</div>");
			}
			e.preventDefault();
		}
		else if(e.keyCode == 13){
			//ask for list
			if($('.highlight').hasClass('folder')){
			$.ajax({
				type: 'GET',
				url: '/setup/cdls/'+cwd+$('.highlight p').text(),
				success: function(response){
					cwd=cwd+$('.highlight p').text()+'/';
					console.log(cwd);
					browser_update(response);
				}
			});
			e.preventDefault();}
		}
		else if(e.keyCode == 39){
		//right arrow
		if($('.highlight').index()<ls.length-1){
			temp=$('.highlight');
			temp.next().addClass("highlight");
			temp.removeClass("highlight");
			e.preventDefault();	}
		}
		else if(e.keyCode == 37){
		//left arrow
		if($('.highlight').index()!=0){
			temp=$('.highlight');
			temp.prev().addClass("highlight");
			temp.removeClass("highlight");
			e.preventDefault();	
			}
		}
		else if(e.keyCode == 40){
		//down arrow
		if($('.highlight').index()+4<ls.length){
			temp=$('.highlight');
			temp.next().next().next().next().addClass("highlight");
			temp.removeClass("highlight");
			e.preventDefault();	
			}
		}
		else if(e.keyCode == 38){
		//up arrow
		if($('.highlight').index()-4>-1){
			temp=$('.highlight');
			temp.prev().prev().prev().prev().addClass("highlight");
			temp.removeClass("highlight");
			e.preventDefault();	
			}
		}
		
		else if(e.keyCode == 8){
		//back space
			$.ajax({
				type: 'GET',
				url: '/setup/cdls/'+cwd+'../',
				success: function(response){
					console.log(cwd+'../');
					cwd=cwd.substr(0,cwd.lastIndexOf('/',cwd.length-2));
					console.log(cwd);
					browser_update(response);
				}
			});
			e.preventDefault();
		}
		
	});
	$( ".icon" ).click(function () {
		$('.highlight').removeClass("highlight");
		$(this).parent().toggleClass("highlight");
	});
	$( ".browser div p" ).click(function () {
		$('.highlight').removeClass("highlight");
		$(this).parent().toggleClass("highlight");
	});
	$('.browser').children().first().addClass('highlight');
});
