$( document ).ready(function() {

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
					if(slideNum < 1)slideNum = slideCount
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


	// Contact animated background

		 var rowh = $('.contact-background__row').height() + 100

		 $(window).resize(function(){
			 $('.contact-background').stop();
			rowh = $('.contact-background__row').height() + 100;
			loop();
		 })

		 function loop() {

        $('.contact-background').css({top: -rowh * 2}).animate({
            top: - rowh * 6,
        }, 100000, 'linear', function() {
            loop();
	        });
	    }
		loop();


	// Preloader

		$(".logo, .logo_white").addClass('fill-white')
		$('body').css({'overflow' : 'hidden'})


		setTimeout(() => {

			$(".preloader__bg").animate({"left" : "0"},1000);
			$(window).scrollTop(0);

			setTimeout(() => {

				$(".logo, .logo_white").removeClass('fill-white').addClass('fill-black')

			}, 400);

		}, 500);


		setTimeout(function() {

			$(".logo-wrapper").css({"top" : "50px"})
			$('.logo_white').removeClass('fill-black').addClass('fill-white')
			$('.preloader').addClass('hidden')
			$('body').css({'overflow' : 'visible'})
			$('body').height($("#content").height())
			$('.logo_hidden').css({'opacity' : '0'})

		}, 1500);

	// Menu

		$( ".hamburger" ).click(function() {

			$(".hamburger").toggleClass("is-active");
			$(".hamburger_white .hamburger-inner").css({'background-color' : '#fff', 'transition' : '.4s'})
			$(".logo_white").removeClass('fill-white')
			$('.logo,.logo_white').removeClass('fill-black').toggleClass('fill-white')
			$('.logo-wrapper').css({'visibility' : 'visible', 'opacity' : '1'})
			$('.menu_white a').css({'color' : '#fff'})

			if($('.hamburger').hasClass('is-active')){
				$('.menu').css({'left' : '0', 'transition' : 'left 1s'})
				$('body').css({'overflow' : 'hidden'})
				$('.logo_hidden').css({'opacity' : '1', "transition" : '.3s'})
			}else{
				$('.menu').css({'left' : '-100%', 'transition' : 'left 1s'})
				$('body').css({'overflow' : 'visible'})
				$('.logo_hidden').css({'opacity' : '0', "transition" : '.3s'})
				if(window.matchMedia('(max-width: 768px)').matches){}else{
					$('.menu').css({'left' : '45px', 'transition' : '0s'})}
			}

			if($(window).scrollTop() > $(window).height() && !$('.hamburger').hasClass('is-active')){
				$('.logo_white').removeClass('fill-white').addClass('fill-black')
				$(".hamburger_white .hamburger-inner").css({'background-color' : '#222', 'transition' : '.4s'})
				$('.menu_white a').css({'color' : '#222'})
			}

		});



		$(".promo-second__image").width($(".promo-first__image").width())

});



// Hide logo while scroll

	var scrollPos = 0
	$(window).scroll(function(){

		if($('.preloader').hasClass('hidden') && !$('.hamburger').hasClass('is-active')){

			var st = $(this).scrollTop();

			if(st > scrollPos){
				$('.logo-wrapper').css({'visibility' : 'hidden', 'opacity' : '0'})
			}else{
				$('.logo-wrapper').css({'visibility' : 'visible', 'opacity' : '1'})
			}

			if(st > $(window).height()){
				$('.logo_white').removeClass('fill-white').addClass('fill-black')
				$(".hamburger_white .hamburger-inner").css({'background-color' : '#222', 'transition' : '.4s'})
				$('.menu_white a').css({'color' : '#222'})
			}else{
				$('.logo_white').removeClass('fill-black').addClass('fill-white')
				$('.hamburger_white .hamburger-inner').css({'background-color' : '#fff', 'transition' : '.4s'})
				$('.menu_white a').css({'color' : '#fff'})
			}

			scrollPos = st;
		}

	});


$(window).resize(function(){

	if(window.matchMedia('(max-width: 768px)').matches){
		$('.menu').css({'left' : '-100%', 'transition' : '0s'})
	}else{
		$('.menu').css({'left' : '45px', 'transition' : '0s'})}

	$("body").height($("#content").height())
	$(".promo-second__image").width($(".promo-first__image").width())
	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()

});
