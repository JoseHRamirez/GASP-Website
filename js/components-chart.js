/*Javascript document*/
/*global $, jQuery, alert*/

var $nemCard = jQuery('.nem-card'),
	$swipeButton = jQuery('.swipe-button');

jQuery(document).ready(function () {
	'use strict';
	/* === === === Nem Card === === === */
	$nemCard.on('mouseenter', function () {
		jQuery(this).find(jQuery('.card-icon')).addClass('card-icon-hover');
		jQuery(this).find(jQuery('.card-mask')).addClass('card-mask-hover');
	});
	$nemCard.on('mouseleave', function () {
		jQuery(this).find(jQuery('.card-icon')).removeClass('card-icon-hover');
		jQuery(this).find(jQuery('.card-mask')).removeClass('card-mask-hover');
	});
	/* === === === *** === === === */

	/* === === === Swipe Button === === === */
	$swipeButton.on('mouseenter', function () {
		jQuery(this).find(jQuery('.button-text')).addClass('button-text-hover');
	});
	$swipeButton.on('mouseleave', function () {
		jQuery(this).find(jQuery('.button-text')).removeClass('button-text-hover');
	});
	/* === === === *** === === === */
});