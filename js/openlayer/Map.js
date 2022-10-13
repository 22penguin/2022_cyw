/**
 * Map
 * pre - 2022.09.09
 * modify - 2022.10.13
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */
'use strict';

const INIT_COORDS_X = 128.67932152304448;
const INIT_COORDS_Y = 36.12027696858047;
const INIT_ZOOM = 7;

let DefMap = function (divId) {
    this.initialize(divId);
};

DefMap.prototype.map = null;
DefMap.prototype.MapView = null;
DefMap.prototype.BaseLayer = null;
DefMap.prototype.MapProjection = null;
DefMap.prototype.LayerProjection = null;
DefMap.prototype.popup = null;
DefMap.prototype.Distance = null;
DefMap.prototype.initialize = function (divId) { };

var RxMap = function () {
    DefMap.apply(this, arguments);
};

RxMap.prototype = new DefMap();
RxMap.prototype.constructor = RxMap;
RxMap.prototype.MapProjection = Proj_4326;
RxMap.prototype.LayerProjection = Proj_900913;
// RxMap.prototype.drawcustom = new DrawCustom();

// RxMap.prototype.Contextmenu = new ContextMenu({
//     width: 180
// });

RxMap.prototype.initialize = function (mapDiv) {
    this.MapProjection = Proj_4326;
    this.LayerProjection = Proj_900913;

    this.BaseLayer = DefLayer;

    this.MapView = new ol.View({
        center: ol.proj.transform([INIT_COORDS_X, INIT_COORDS_Y],
            this.MapProjection, this.LayerProjection),
        zoom: INIT_ZOOM,
        minZoom: 1,
        maxZoom: 21
    });

    this.map = new ol.Map({
        projection: this.MapProjection,
        controls: ol.control.defaults({
            attribution: false,
            zoom: false,
        }).extend([
            new ol.control.OverviewMap(),
            new ol.control.ZoomSlider(),
            new ol.control.ScaleLine({
                units: 'metric',
                target: 'scalebar',
                className: 'ol-sclae-line'
            })
        ]),
        layers: [DefLayer],
        target: mapDiv,
        view: this.MapView
    });
};

var rxMap = null;

function InitializeMap(mapDiv) {
    rxMap = new RxMap(mapDiv);
};

$(function () {
    InitializeMap("map");
});
// $(document).ready(function () {
//     init();
// });

// function init() {
//     var map = new ol.Map({
//         layers: [new ol.layer.Tile({
//             source: new ol.source.OSM()
//         })],
//         target: 'map',
//         view: new ol.View({
//             center: [54200000, 4300000],
//             zoom: 4
//         })
//     });
// }