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

	$('#js-checkbox_access').is(':checked', function(){
		$('.span-access').css('display', 'none');
		$('.access-checked').css('display', 'inline-block');
		$('.access-checked').css('color', '#0db597');
		return false
	});

	$('#js-selected-university').click(function(event) {
		$('create-poll__university').css('display', 'block');
		return false;
	});

	function checkParams(){
	    var sel1 = $('#select1').val();
		var sel2 = $('#select2').val();
		var sel3 = $('#select3').val();
		var sel4 = $('#select4').val();
		var sel5 = $('#select5').val();
	    
	    if(sel1.value && sel2.value && sel3.value && sel4.value && sel5.value){
	        $('#button').removeAttr('disabled');
	    } 
	    else {
	        $('#button').attr('disabled', 'disabled');
	    }
	};


	// function enableButton(){
 // 		document.getElementById("button").disabled = !(document.getElementById("select1").value && document.getElementById("select2").value && document.getElementById("select3").value && document.getElementById("select4").value && document.getElementById("select4").value);
	// };

	// $('.form-group > input').on('input', function () {

 //        var empty = false;
 //        $('form > input, form > select').each(function () {
 //            if ($(this).val() == '') {
 //                empty = true;
 //            }
 //        });

 //        if (empty) {
 //            $('#signin').attr('disabled', 'disabled');
 //        } else {
 //            $('#signin').removeAttr('disabled');
 //        }
 //    });

	console.log($('body').html());

});

