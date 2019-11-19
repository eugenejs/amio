$( document ).ready(function() {

	$("body").height($("#content").height())

	// Menu

		$( ".hamburger" ).click(function() {
			$('.menu-mobile').toggleClass('menu-mobile-visible');
			$( ".hamburger" ).toggleClass("is-active");
			if($(".menu-mobile").hasClass("menu-mobile-visible")){
				$("#logo-svg").css({
					"fill" : "#fff", "transition" : ".3s"
				})
				$(".logo_white").css({
					"fill" : "#fff", "transition" : ".3s"
				})
				$('.logo').css({
					"opacity" : "1", "visibility" : "visible"
				})
				$('.menu_white a').css({
					"color" : "#fff", "transition" : ".3s"
				})

				$(".hamburger_white .hamburger-inner").css({
					"background-color" : "#fff", "transition" : ".3s"
				})
			}else{
				$("#logo-svg").css({
					"fill" : "#222", "transition" : ".3s"
				})
			};
		});

		if(window.matchMedia('(max-width: 768px)').matches){
			$('.menu').addClass("menu-mobile");
			$('.menu').removeClass("menu");
			$('.lookbook-photos__item, .lookbook-photos__item img').addClass('no-move');
		}



	// wowjs init

	var wow = new WOW(
	  {
	    boxClass:     'wow',
	    animateClass: 'animated',
	    offset:       0,
	    mobile:       true,
	    live:         true,
	    callback:     function(box) {},
	    scrollContainer: null
	  }
	);
	wow.init();



	// owl-carousel

		// init

			$(document).ready(function(){
			  $('.owl-carousel').owlCarousel({
				 items : 1,
				 loop : true,
				 navSpeed : 1000,
				 mouseDrag : false,
				 touchDrag : false,
				 dots: false,
				 autowidth: true
			  });
			});

		// owl item counter

			var slideNum = 1;
			$('.slider-counter__number').html("0" + slideNum)
			var slideCount = $('.left-slider .left-slider__image').length
			$('.slider-counter__count').html("0" + slideCount)



			$(".next-btn").click(function(){
				if( $(".slider-next-btn").hasClass("next-btn")){
					if (slideNum < slideCount){
						slideNum++
					}else{
						slideNum = 1;
					}
					$('.slider-counter__number').html("0" + slideNum)
					$(".next-btn").removeClass("next-btn");
					$(".prev-btn").removeClass("prev-btn");
					setTimeout(function() {
							$(".slider-next-btn").addClass("next-btn");
							$(".slider-prev-btn").addClass("prev-btn");
			    },1000);
					$(".owl-next").click()
				}
			});

			$(".prev-btn").click(function(){
				if( $(".slider-prev-btn").hasClass("prev-btn")){
					slideNum--;
					if(slideNum < 1){
						slideNum = slideCount
					}
					$('.slider-counter__number').html("0" + slideNum)
					$(".prev-btn").removeClass("prev-btn");
					$(".next-btn").removeClass("next-btn");
					setTimeout(function() {
						$(".slider-prev-btn").addClass("prev-btn");
						$(".slider-next-btn").addClass("next-btn");
			    },1000);
					$(".owl-prev").click()
				}
			});




	// Form

		$(".form").submit(function() {
				$('.callback').find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					$('.callback').find('.success').removeClass('active').fadeOut()
				}, 3000);
			return false;
		});



	$(".promo-second__image").width($(".promo-first__image").width())

	// Contact animated background

		 var rowh = $('.contact-background__row').height() + 100

		 $(window).resize(function(){
			 $('.contact-background').stop();
			rowh = $('.contact-background__row').height() + 100;
			loop();
		 })

		 function loop() {

        $('.contact-background').css({top: -rowh * 2});
        $('.contact-background').animate ({
            top:	- rowh * 6,
        }, 100000, 'linear', function() {
            loop();
	        });
	    }
	    loop();
});



// Hide logo while scroll

	var scrollPos = 0;
	$(window).scroll(function(){

	   var st = $(this).scrollTop();
	   if (st > scrollPos){
		   $('.logo').css({
	 		  "opacity" : "0", "visibility" : "hidden"
	 	  });
	   }else{
		   $('.logo').css({
	 		  "opacity" : "1", "visibility" : "visible"
	 	  });
	   }
	   if($(".hamburger").hasClass("is-active")){
		 $('.logo').css({
			"opacity" : "1", "visibility" : "visible"
		});
	   }
	   scrollPos = st;

		if(st > $('header').height() && !$('.hamburger').hasClass('is-active')){

				$(".logo_white").css({
					"fill" : "#222", "transition" : ".3s"
				})

				$(".menu_white a").css({
					"color" : "#222", "transition" : ".3s"
				})

				$(".hamburger_white .hamburger-inner").css({
					"background-color" : "#222", "transition" : ".3s"
				})


			}else{

				$(".logo_white").css({
					"fill" : "#fff", "transition" : ".3s"
				})

				$(".menu_white a").css({
					"color" : "#fff", "transition" : ".3s"
				})

				$(".hamburger_white .hamburger-inner").css({
					"background-color" : "#fff", "transition" : ".3s"
				})


			};

	});



$(window).resize(function(){

	$("body").height($("#content").height())
	$(".promo-second__image").width($(".promo-first__image").width())

	if(window.matchMedia('(max-width: 768px)').matches){
		$('.menu').addClass("menu-mobile");
		$('.menu').removeClass("menu");
		$('.lookbook-photos__item, .lookbook-photos__item img').addClass('no-move');

	}else{
		$('.hamburger').removeClass('is-active');
		$('.menu-mobile').addClass("menu");
		$('.menu-mobile').removeClass("menu-mobile");
		$('.menu').removeClass("menu-mobile-visible");
		$('.lookbook-photos__item, .lookbook-photos__item img').addClass('box');
		$('.lookbook-photos__item, .lookbook-photos__item img').removeClass('no-move');
	}

	if($(".menu-mobile").hasClass("menu-mobile-visible")){
		$("#logo-svg").css({
			"fill" : "#fff", "transition" : ".3s"
		})
	}else{
		$("#logo-svg").css({
			"fill" : "#222", "transition" : ".3s"
		})
	};

});
