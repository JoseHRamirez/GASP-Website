//javascript document
/*global $, jQuery, alert*/

//DOM cache
var $viewport = $(window),
	$headerElement = $('.header-tag'),
	$imageContainerElement = $headerElement.find('.header-main-img-container'),
	$imageElement = $headerElement.find('.header-main-img-container>img'),
	//Separator
	$stickyElement = $('.gasp-navigation'),
	$stickyElementPostion = $stickyElement.offset().top,
	$stickyElementHeight = $stickyElement.height(),
	//Configurable variables
	maxHeight = 1080,
	effectBreakpoint = 150,
	//Processing variables
	$viewportHeight = $(window).height(),
	$viewportWidth = $(window).width(),
	$viewportScroll = $viewport.scrollTop(),
	$relativeHeaderTagHeight = $viewportHeight;

$(document).ready(function () {
	'use strict';
	
	//main functions
	function f_DynamicMenu(e) {
		
        if ($viewport.scrollTop() >	effectBreakpoint) {
			$stickyElement.addClass('navbar-scrolled');
        } else {
			$stickyElement.removeClass('navbar-scrolled');
        }
	}
	function f_HeaderImageHeight(e) {
		//update variable
		$viewportHeight = $(window).height();
		$viewportWidth = $(window).width();
		$relativeHeaderTagHeight = $viewportHeight;

		if ($viewportHeight < maxHeight) {
			//$imageElement.css('height', 'unset');
			$headerElement.css('max-height', $relativeHeaderTagHeight);
		} else {
			//$imageElement.css('height', 'unset');
			$headerElement.css('max-height', maxHeight);
		}
	}
	//on-load execution
	f_HeaderImageHeight();
	f_DynamicMenu();
	
	//Event based executions
	$viewport.resize(function () {
		f_HeaderImageHeight();
	});
	$viewport.scroll(function () {
		f_DynamicMenu();
		f_HeaderImageHeight();
	});
});