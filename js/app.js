$(document).ready(function() {

	intro();

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	
	$('.ryu').mousedown(function() {
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
					$(this).css('left', '-212px')
				}
			);
	});

	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

});

$(document).on('keydown', function(event) {
		if(event.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.dojo').fadeIn(700);
		}
});

$(document).on('keyup', function(event) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
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
              $('.instructions').fadeIn(800);
            });
          })
        })
      })
    })
  })
}
