//JavaScript Document
/*global $, jQuery, alert*/

$(document).ready(function () {
	'use strict';
	//DOM cache
	/* === === === === */
	// Clients slider
	/* === === === === */
	$("#client-slide").owlCarousel({
		items : 3,
		autoPlay : 2000,
		stopOnHover : true,
		pagination : false
	});
});