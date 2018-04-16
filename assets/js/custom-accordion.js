

$(document).ready(() =>{

	$(".container .accordion .card .card-body").hide();

	$(".container .accordion .card .card-header").click(function(e) {
		e.preventDefault();
		
		$(this).siblings(".card-body").stop().slideToggle();

		$(this).closest(".card").siblings(".card").find(".card-body").stop().slideUp();
	})


})