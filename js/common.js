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

	$(".js-change").click(function(){
		$(".profile__name").css("display", "none");
		$(".js-change-name").css("display", "block");
		return false
	});

	$(".js-add").click(function(){
		$(".faculty__add").css("display", "none");
		$(".js-add-fac").css("display", "inline-block");
		return false
	});

	console.log($('body').html());
});

