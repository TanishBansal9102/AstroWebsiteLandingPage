

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
	var mask = $('#mask');
	var titleText = $('#title-text');
	var linea = $('#linea');
	var lineb = $('#lineb');
	var linec = $('#linec');
	var explore = $('#myBtn');
	var navbar = $('.navbar');

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
	});
});

// // makes sure the whole site is loaded
// jQuery(window).load(function() {
// 	// will first fade out the loading animation
// jQuery("#status").fadeOut();
// 	// will fade out the whole DIV that covers the website.
// jQuery("#preloader").delay(1000).fadeOut("slow");
// })
function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "inline-block";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}

function fadeOut( elem, ms )
{
  if( ! elem )
    return;

  if( ms )
  {
    var opacity = 1;
    var timer = setInterval( function() {
      opacity -= 50 / ms;
      if( opacity <= 0 )
      {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}
$(window).on('load', function () {
	//fadeOut(document.getElementById('status'),200);
	//fadeOut(document.getElementById('preloader'),300);
	jQuery("#status").fadeOut();
	jQuery("#preloader").delay(1000).fadeOut("slow");
});