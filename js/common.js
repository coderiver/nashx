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

    //select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id).trigger('change');
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});

    $(document).ready(function() {
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
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

	// (function() {

	//     $('.js-form').each(function() {
	//         var form    = $(this),
	//             btn     = form.find('.js-button'),
	//             input   = form.find('.js-input'),
	//             select  = form.find('.js-select'),
	//             selects = [],
	//             status  = []; // [false, false, false, true, ...]

	//         // check if input has value
	//         var checkStatus = function(input) {
 //            	if ( input.hasClass('js-select') ) {
	// 	            if (input.val() != "0") {
	// 	                return true;
	// 	            } else {
	// 	                return false;
	// 	            }
 //            	};
 //            	if ( input.hasClass('js-input') ) {
 //            		 if ( input.val() ) {
	// 	                return true;
	// 	            } else {
	// 	                return false;
	// 	            }
 //            	};
	//         };

	//         // toggle button
	//         var toggleSubmitBtn = function() {
	//             if (status.indexOf(false) !== -1 ) {
	//                 if ( !btn.is(':disabled') ) {
	//                     btn.attr('disabled', 'disabled');
	//                 }
	//             } else {
	//                 if ( btn.is(':disabled') ) {
	//                     btn.removeAttr('disabled');
	//                 }
	//             }
	//         };

	//         // add each input to array and create status array
	//         select.each(function() {
	//             selects.push($(this));
	//             status.push(checkStatus($(this)));
	//         });
	//         if ( input.length ) {
	// 	        input.each(function() {
	// 	            selects.push($(this));
	// 	            status.push(checkStatus($(this)));
	// 	        });
	//         };

	//         toggleSubmitBtn();

	//         // console.log(selects);
	//         // console.log(status);


	//         // check if
	//         $(selects).each(function() {
	//             var currentElement = this;
	//             $(currentElement).on('change', function() {
	//                 var check = checkStatus($(currentElement));
	//                 var index = selects.indexOf(currentElement);
	//                 status[index] = check;
	//                 toggleSubmitBtn();
	                
	//           //       console.log(selects);
	//         		// console.log(status);
	//             });
	//         });
	//     });

	// }) ();

	$('.js-custom-select').each(function() {
        var select         = $(this),
            wrapper        = select.parent(),
            input          = select.siblings('input');

        select.on('change', function() {
            selectedOption = select.find('option:selected');
            input.val(selectedOption.text());
            input.trigger('change');
        });

        select.on('focus', function() {
            input.addClass('is-active');
        });

        select.on('focusout', function() {
            input.removeClass('is-active');
        });

    });
	
	(function() {

        $('.js-form').each(function() {
            var form   = $(this),
                btn    = form.find('.js-button'),
                input  = form.find('.js-input'),
                // select = form.find('.js-select'),
                inputs = [],
                status = []; // [false, false, false, true, ...]

            console.log(input);
            // console.log(select);
            // check if input has value
            var checkStatus = function(input) {
                if (input.val()) {
                    return true;
                } else {
                    return false;
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
            input.each(function() {
                inputs.push($(this));
                status.push(checkStatus($(this)));
            });

            toggleSubmitBtn();

            console.log(inputs);
            console.log(status);


            $(inputs).each(function() {
                var currentElement = this;
                $(currentElement).on('change', function() {
                    var check = checkStatus($(currentElement));
                    var index = inputs.indexOf(currentElement);
                    status[index] = check;
                    toggleSubmitBtn();
	                
	           		console.log(status);
                });
                // if (select.length !== 0) {
                //     $(currentElement).on('change', function() {
                //         var check = checkStatus($(currentElement));
                //         var index = inputs.indexOf(currentElement);
                //         status[index] = check;
                //         toggleSubmitBtn();
                //     });
                // }
            });
        });

	})();

});