$(document).ready(function() {

	var introComplete = 0;
	
	intro();

	$('.ryu').mouseenter(function() {
		if (introComplete == 1) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	});

	$('.ryu').mouseleave(function() {
		if (introComplete == 1) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		}
	});
	
	$('.ryu').mousedown(function() {
		if (introComplete == 1) {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate(
					{'left': '300px'},
					500,
					function() {
						$(this).hide();
						$(this).css('left', '-212px');
					}
				);
			}
		});

	$('.ryu').mouseup(function() {
		if (introComplete == 1) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		}
	});

	$(document).on('keydown', function(event) {
		if (introComplete == 1) {
			if(event.keyCode == 88) {
				$('.ryu-ready').hide();
				$('.ryu-cool').show();
				$('.dojo').show();
			}
		}
	});

	$(document).on('keyup', function(event) {
		if (introComplete == 1) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
			$('.dojo').hide();
		}
	});	

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function intro() {
  $('.jquery-logo').fadeIn(900, function() {
    $(this).fadeOut(1700, function() {
      $('.presents').fadeIn(900, function() {
        $(this).fadeOut(1500, function() {
          $('.sf-logo').fadeIn(900, function() {
            $(this).fadeOut(1800, function() {
                $('.ryu-still').fadeIn(800);
                $('.instructions').fadeIn(800, function() {
              		introComplete = 1;
              	});
            });
          });
        });
      });
    });
  });
}
