head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$(".js-change-name").click(function(event){
		$(".profile__name").css("display", "none");
		$(".profile__change-name").css("display", "block");
		return false
	});

	$(".js-add").click(function(event){
		$(".faculty__add").css("display", "none");
		$(".add-fac").css("display", "inline-block");
		return false
	});

	$('.js-change-university').click(function(event) {
		$('.overlay').show();
		$('.popup').addClass('is-visible');
		return false;
	});

	$('.popup-close').click(function(event) {
		$('.overlay').hide();
		$('.popup').removeClass('is-visible');
		return false;
	});

	// $('.js-checkbox_access').is(':checked', function(){
	// 	$('.span-access').css('display', 'none');
	// 	$('.access-checked').css('display', 'inline-block');
	// 	$('.access-checked').css('color', '#0db597');
	// 	return false
	// });

	$('.js-checkbox_access').on('change', function() {
		$(this).parents('.poll-access').toggleClass('is-checked');
	});

	$('.js-selected-university').click(function(event) {
		$('create-poll__university').css('display', 'block');
		return false;
	});

	
	(function() {

	    $('.js-form').each(function() {
	        var form    = $(this),
	            btn     = form.find('.js-button'),
	            // input  = form.find('input:not([type="checkbox"], [type="radio"]), textarea'),
	            select  = form.find('.js-select'),
	            selects = [],
	            status  = []; // [false, false, false, true, ...]

	        
	        // check if input has value
	        var checkStatus = function(input) {
            	console.log(input.val());
	            if (input.val() != "0") {
	                return true;
	            } else {
	                return false;
	                console.log(select.val());
	            }
	        };

	        // toggle button
	        var toggleSubmitBtn = function() {
	            if (status.indexOf(false) !== -1 ) {
	                if ( !btn.is(':disabled') ) {
	                    btn.attr('disabled', 'disabled');
	                }
	            } else {
	                if ( btn.is(':disabled') ) {
	                    btn.removeAttr('disabled');
	                }
	            }
	        };

	        // add each input to array and create status array
	        select.each(function() {
	            selects.push($(this));
	            status.push(checkStatus($(this)));
	        });

	        toggleSubmitBtn();

	        console.log(selects);
	        console.log(status);


	        // check if
	        $(selects).each(function() {
	            var currentElement = this;
	            $(currentElement).on('change', function() {
	                var check = checkStatus($(currentElement));
	                var index = selects.indexOf(currentElement);
	                status[index] = check;
	                toggleSubmitBtn();
	                
	                console.log(selects);
	        		console.log(status);
	            });
	        });
	    });

	}) ();

});