$(document).ready(() => {
	$(".modal-button").click(() => {
		$(".wall").fadeIn(500, () => {
			$(".modal").css({"transform" : "scale(1, 1)"})
		})
	})

	$(".hider").click(() => {
		$(".modal").css({"transform" : "scale(0, 0)"})
		$(".wall").fadeOut(1000);
	})
})