

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
	var explore = $('#explore');
	var section2 = $('.section-2');
	explore.on('click', function() {
		$('html,body').animate({
			scrollTop: section2.offset().top},
			'slow');
	});
	var star = $('.star');
	var earthcontainer = $('#earthContainer');
	var earth = $('#earth');
	var mask = $('#mask');
	var titleText = $('#title-text');
	var linea = $('#linea');
	var lineb = $('#lineb');
	var linec = $('#linec');
	var navbar = $('.navbar');
	var rectangle1 = $('#rectangle1');
	var rectangle2 = $('#rectangle2');
	var rectangle3 = $('#rectangle3');
	var rectangle4 = $('#rectangle4');
	var rectangle5 = $('#rectangle5');
	var rectangle6 = $('#rectangle6');
	var section3 = $('.section-3');

	$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		star.css({
			'opacity' : 1 - st/700
		});
		linea.css({
			'opacity' : 1 - st/700
		})
		lineb.css({
			'opacity' : 1 - st/700
		})
		linec.css({
			'opacity' : 1 - st/1200
		})
		explore.css({'opacity': 1-st/300})
		navbar.css({
			'opacity' : 1 - st/700
		})
		if(st<section2.position().top-100){
			rectangle2.removeClass('rectanglebig', {duration:500});
			rectangle3.removeClass('rectanglebig', {duration:500});
			rectangle4.removeClass('rectanglebig', {duration:500});
			rectangle5.removeClass('rectanglebig', {duration:500});
			rectangle6.removeClass('rectanglebig', {duration:500});
			rectangle1.addClass('rectanglebig', {duration:500});
		}
		if(st>section2.position().top-100){
		rectangle1.removeClass('rectanglebig', {duration:500});
		rectangle3.removeClass('rectanglebig', {duration:500});
		rectangle4.removeClass('rectanglebig', {duration:500});
		rectangle5.removeClass('rectanglebig', {duration:500});
		rectangle6.removeClass('rectanglebig', {duration:500});
		rectangle2.addClass('rectanglebig', {duration:500});
	}
		if(st>section3.position().top-100){
			rectangle1.removeClass('rectanglebig', {duration:500});
			rectangle2.removeClass('rectanglebig', {duration:500});
			rectangle4.removeClass('rectanglebig', {duration:500});
			rectangle5.removeClass('rectanglebig', {duration:500});
			rectangle6.removeClass('rectanglebig', {duration:500});
			rectangle1.removeClass('rectanglebig', {duration:500});
			rectangle3.addClass('rectanglebig', {duration:500});}
	});
});

$(window).on('load', function () {
	//fadeOut(document.getElementById('status'),200);
	//fadeOut(document.getElementById('preloader'),300);
	jQuery("#status").fadeOut();
	jQuery("#preloader").delay(1000).fadeOut("slow");
	$('html').css({
		'overflow-y': 'auto',
	  });
});

if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", function(user){
      if (!user) {
        window.netlifyIdentity.on("login",function (){
          document.location.href = "/admin/";
        });
      }
    });
  }