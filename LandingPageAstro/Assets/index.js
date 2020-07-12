$(document).ready(function(){
	$('.togglebutton').on('click', function(){
		if($('#line1').width() == 30){
			$('#line1').width(35);
			$('#line1').attr("x", 32.5);
			$('#line2').width(25);
			$('#line2').attr("x", 37.5);
			$('#line3').width(35);
			$('#line3').attr("x", 32.5);
		}
		else{
			$('#line1').width(30);
			$('#line1').attr("x", 35);
			$('#line2').width(30);
			$('#line2').attr("x", 35);
			$('#line3').width(30);
			$('#line3').attr("x", 35);
		}

		if($(".navbutton").css("opacity") == 1) {
			$(".navbutton").css("opacity", 0);
			$(".navbutton").css("transform", "translateX(calc((40/768) * ((100vw + 100vh) / 2)))");
		}
		else {
			$(".navbutton").css("opacity", 1);
			$(".navbutton").css("transform", "translateX(0)");
		}
	});
	var star = $('.star');
	var earthcontainer = $('#earthContainer');
	var earth = $('#earth');
	var mask = $('#mask')

	$(window).on('scroll', function() {
		var st = $(this).scrollTop();

		star.css({
			'opacity' : 1 - st/700
		});
		
	});
});
