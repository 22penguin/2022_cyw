/**
 * BaseLayers
 * pre - 2022.09.09
 * modify - 2022.10.13
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */
'use strict';

const Proj_4326 = 'EPSG:4326';
const Proj_900913 = 'EPSG:900913';
const Proj_3857 = 'EPSG:3857';
const Proj_5181 = 'EPSG:5181';

let DefLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
    name: 'Openlayer Base'
});

let CustomLayer = function(){	
	this.initialize();
};

CustomLayer.prototype.map = null;
CustomLayer.prototype.MapProjection = Proj_4326;
CustomLayer.prototype.LayerProjection = Proj_900913;
CustomLayer.prototype.LayerSource = null;
CustomLayer.prototype.Layer = null;
CustomLayer.prototype.TooltipElement = null;
CustomLayer.prototype.Tooltip = null;
CustomLayer.prototype.ContextMenu = null;
CustomLayer.prototype.initialize =  function (){};