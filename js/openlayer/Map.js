'use strict';

var map = new ol.Map({
    layers: new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style(),
    }),
    target: 'map',
    view: new ol.View({
        center: [-11000000, 46000000],
        zoom: 4
    })
});

map.addInteraction();