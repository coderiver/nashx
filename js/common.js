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

	$('.js-checkbox_access').on('change', function() {
		$(this).parents('.poll-access').toggleClass('is-checked');
	});

	$('.js-selected-university').click(function(event) {
		$('create-poll__university').css('display', 'block');
		return false;
	});

    $(".datepicker").datepicker();

    $(".calendar__icon").click(function(event){
    	$(this).siblings('.datepicker').trigger('focus');
    });

    $(document).ready(function() {
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false
		});
	});

	function choose() {
        var number = $(".js-choose");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus");
            var minus = $(this).find(".js-minus");
            plus.bind("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.bind("click", function(){
                var val = +(input.val());
                if (val > 0) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
        });
    }
    choose();

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