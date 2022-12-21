$(document).click(function (e) {
	console.log(e.target)
	if (!$(e.target).hasClass("menu-button")
		&& !$(e.target).hasClass("menu-button-container")
		&& e.target.id !== "menu-toggle"
		&& $(e.target).closest("menu").length === 0) {

		$('#menu-toggle').prop('checked', false);
	}
});