
$(document).ready(function(){
	 //scrollspy menu
    $('body').scrollspy({
        target: '.main-menu',
        offset: 80
    });


    //menu js
    var scrltop = $(".main-menu").offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        if (scroll >= scrltop) {
            $(".main-menu").addClass("fixtop");
        } else {
            $(".main-menu").removeClass("fixtop");
        }

    });

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
	
	//back to top button
		$(window).scroll(function () {
			var scrollp = $(window).scrollTop();

			if (scrollp > 200) {
				$(".top").fadeIn(1000);
			} else {
				$(".top").fadeOut(1000);
			}

		});

		$(".top").click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000)
		});
		
  
});
