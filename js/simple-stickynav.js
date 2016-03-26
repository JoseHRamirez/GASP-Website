//JavaScript Document
/*global $, jQuery, alert*/
$(document).ready(function () {
	'use strict';
	var $viewport = $(window),
		$navbar = $('#servicios-nav-tag'),
		$navbarPosition = $navbar.offset().top;
	
	function f_navbarStick() {
		if ($viewport.scrollTop() > $navbarPosition) {
			$navbar.addClass('navbar-fixed-top');
		} else {
			$navbar.removeClass('navbar-fixed-top');
		}
	}
	//on load
	f_navbarStick();
	
	$viewport.scroll(function () {
		f_navbarStick();
	});
});