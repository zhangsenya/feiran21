// variables
var 
$window = $(window), gardenCtx, gardenCanvas, $garden, garden;

var clientWidth = $(window).width();

var clientHeight = $(window).height();

var dist = "";

$(function () {
    // setup garden
	
	$loveHeart = $("#loveHeart");

	var offsetX = 0;
	
	var offsetY = 0;
    
	$garden = $("#garden");
    
	gardenCanvas = $garden[0];
	
	gardenCanvas.width = $("#loveHeart").width();
    
	gardenCanvas.height = $("#loveHeart").height()
    gardenCtx = gardenCanvas.getContext("2d");
   
	gardenCtx.globalCompositeOperation = "lighter";
    
	garden = new Garden(gardenCtx, gardenCanvas);
	
	
	$("#content").css("width", $loveHeart.width() + $("#code").width());
	
	$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
	
	$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

    // renderLoop
    
	setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);
});


	$(window).resize(function() {
    
		var newWidth = $(window).width();
    
		var newHeight = $(window).height();
    
		if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
	
});
	

function getHeartPoint(t) {
	if(t<7) {
		var x = 227-13 * t;

		var y = 134 + 25 * t;

		return new Array(offsetX + x, offsetY + y);
	}
    if(t<10&&t>=7) {
        var x = 227+27*(t-7);

        var y = 185;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<13&&t>=10) {
        var x = 271-10*(t-10);

        var y = 185+26*(t-10);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<18&&t>=13) {
        var x = 241-24*(t-13);

        var y = 263+23*(t-13);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<20&&t>=18) {
        var x = 189+24*(t-17);

        var y = 203+17*(t-17);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<22&&t>=20) {
        var x = 176+24*(t-19);

        var y = 230+19*(t-19);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<28&&t>=22) {
        var x = 305+28*(t-22);

        var y = 225;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<33&&t>=28) {
        var x = 355-4*(t-28);

        var y = 139+30*(t-28);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<38&&t>=33) {
        var x = 331-25*(t-33);

        var y = 289+23*(t-33);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<40&&t>=38) {
        var x = 369+9*(t-37);

        var y = 225+25*(t-37);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<45&&t>=40) {
        var x = 396+22*(t-40);

        var y = 300+16*(t-40);

        return new Array(offsetX + x, offsetY + y);
    }
	if(t<48&&t>=45) {
		var x = 385+17*(t-45);

		var y = 141+24*(t-45);

		return new Array(offsetX + x, offsetY + y);
	}
	if(t<51&&t>=48) {
		var x = 205-20*(t-48);

		var y = 392+30*(t-48);

		return new Array(offsetX + x, offsetY + y);
	}
	if(t<54&&t>=51) {
		var x = 250+13*(t-51);

		var y = 389+30*(t-51);

		return new Array(offsetX + x, offsetY + y);
	}
	if(t<57&&t>=54) {
		var x = 326+13*(t-54);

		var y = 389+30*(t-54);

		return new Array(offsetX + x, offsetY + y);
	}
	if(t<60&&t>=57) {
		var x = 400+13*(t-57);

		var y = 389+30*(t-57);

		return new Array(offsetX + x, offsetY + y);
	}
}
var dist = "";

function startHeartAnimation() {
	
	var interval = 220;
	
	var angle = 0;
	
	var heart = new Array();
	
	var animationTimer = setInterval(function () {
		
		var bloom = getHeartPoint(angle);
		
		var draw = true;
		
		for (var i = 0; i < heart.length; i++) {
			
			var p = heart[i];
			
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				
				//draw = false;
				
				//break;
			
			}
		
		}
		
		if (draw) {
			
			heart.push(bloom);
			
			garden.createRandomBloom(bloom[0], bloom[1]);
		
		}
		
		if (angle >= 59) {
			
			clearInterval(animationTimer);
			
			showMessages();
		}  else {
			angle += 1;
		}
	
	}, interval);

}
	

(function($) {
	
		$.fn.typewriter = function() {
		
			this.each(function() {
			
				var $ele = $(this), str = $ele.html(), progress = 0;
			
				$ele.html('');
			
				var timer = setInterval(function() {
				
					var current = str.substr(progress, 1);
				
					if (current == '<') {
					
						progress = str.indexOf('>', progress) + 1;
				
					} else {
					
						progress++;
				
					}
				
					$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				
					if (progress >= str.length) {
					
						clearInterval(timer);
				
					}
			
				}, 75);
		
			});
		
			return this;
	
		};
	
})(jQuery);


function timeElapse(date){
	
		var current = Date();
	
		var seconds = (Date.parse(date) - Date.parse(current)) / 1000;
	
		var days = Math.floor(seconds / (3600 * 24));
	
		seconds = seconds % (3600 * 24);
	
		var hours = Math.floor(seconds / 3600);
	
		if (hours < 10) {
		
			hours = "0" + hours;
		}
	
		seconds = seconds % 3600;
	
		var minutes = Math.floor(seconds / 60);
	
		if (minutes < 10) {
		
			minutes = "0" + minutes;
	
		}
	
		seconds = seconds % 60;
	
		if (seconds < 10) {
		
			seconds = "0" + seconds;
	
		}
	
		var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	
		$("#elapseClock").html(result);
	
}


function showMessages() {
	
		adjustWordsPosition();
	
		$('#messages').fadeIn(5000, function() {
		
			showLoveU();
	
		});
}
	

function adjustWordsPosition() {
	
		$('#words').css("position", "absolute");
	
		$('#words').css("top", $("#garden").position().top + 195);
	
		$('#words').css("left", $("#garden").position().left + 70);
	
}


function adjustCodePosition() {
	
		$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
	
}
	

function showLoveU() {
	
		$('#loveu').fadeIn(3000);

}