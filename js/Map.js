/**
 * Map
 * pre - 2022.09.09
 * modify - 2022.10.14
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */

'use strict';

$(function() {
	$("#ctrl-viewall").click(function() {
		rxMap.viewAll();
	});

	$("#ctrl-initl").click(function() {
		alert("초기화");
		rxMap.draw_reset();
	});

	$("#ctrl-dst").click(function() {
		alert("거리재기");
		rxMap.draw_line();
	});

	$("#ctrl-ar_mesure").click(function() {
		alert("면적재기");
		rxMap.draw_polygon();
	});

	$("#ctrl-zoomin").click(function() {
		rxMap.ZoomIn();
	});

	$("#ctrl-zoomout").click(function() {
		rxMap.ZoomOut();
	});
});