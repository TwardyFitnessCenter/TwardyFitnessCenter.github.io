jQuery(document).ready(function($) {
	$('ul.menu>li').on('mousedown', function() {
        $('#menu-toggle').prop('checked', false);
	});
});