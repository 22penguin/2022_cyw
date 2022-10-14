/**
 * CustomLayer
 * pre - 2022.09.09
 * modify - 2022.10.14
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */

'use strict';

const LAYER_NAME_DRAW = "drawLayer";

let DrawCustom = function () {
    CustomLayer.apply(this, arguments);
};

DrawCustom.prototype = new CustomLayer();
DrawCustom.prototype.constructor = DrawCustom;

DrawCustom.prototype.draw = null;
DrawCustom.prototype.sketch = null;

DrawCustom.prototype.initialize = function () {
    this.Layer = new ol.layer.Vector({
        name: LAYER_NAME_DRAW,
        source: new ol.source.Vector()
    });
};

DrawCustom.prototype.create_tooltip = function () {
    if (this.TooltipElement) {
        this.TooltipElement.parentNode.removeChild(this.TooltipElement);
    }

    this.TooltipElement = document.createElement('div');
    this.TooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    this.Tooltip = new ol.Overlay({
        element: this.TooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
    });
    this.map.addOverlay(this.Tooltip);
}

DrawCustom.prototype.draw_linestring = function () {
    this.Layer.getSource().clear();

    this.draw = new ol.interaction.Draw({
        type: "LineString",
        source: this.Layer.getSource(),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
            image: new ol.style.Circle({
                radius: 5
            }),
        }),
    });
    this.map.addInteraction(this.draw);
    this.create_tooltip();

    var listener;
    this.draw.on('drawstart', function (evt) {
        this.sketch = evt.feature;
        var tooltipCoord = evt.coordinate;

        listener = this.sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target;
            var output = formatLength(geom);
            tooltipCoord = geom.getLastCoordinate();
            console.log(output);

            this.TooltipElement.innerHTML = output;
            this.Tooltip.setPosition(tooltipCoord);
        });
    });

    this.draw.on('drawend', function () {
        this.TooltipElement.className = 'ol-tooltip ol-tooltip-static';
        this.Tooltip.setOffset([0, -7]);

        this.sketch = null;
        this.TooltipElement = null;
        this.create_tooltip;
        new ol.Observable(listener);
    });
};

DrawCustom.prototype.draw_polygon = function () {
    this.Layer.getSource().clear();

    this.draw = new ol.interaction.Draw({
        type: "Polygon",
        source: this.Layer.getSource(),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
            image: new ol.style.Circle({
                radius: 5
            }),
        }),
    });
    this.map.addInteraction(this.draw);
    this.create_tooltip();

    var listener;
    this.draw.on('drawstart', function (evt) {
        this.sketch = evt.feature;
        var tooltipCoord = evt.coordinate;

        listener = this.sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target;
            var output = formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
            console.log(output);

            //			this.TooltipElement.innerHTML = output;
            //			this.Tooltip.setPosition(tooltipCoord);
        });
    });

    this.draw.on('drawend', function () {
        //		this.TooltipElement.className = 'ol-tooltip ol-tooltip-static';
        //		this.Tooltip.setOffset([0, -7]);

        this.sketch = null;
        this.TooltipElement = null;
        this.create_tooltip;
        new ol.Observable(listener);
    });
};

function formatLength(line) {
    var length = new ol.sphere.getLength(line);
    var toLength = Math.round(line.getLength() * 100) / 100;
    var output;
    if (toLength > 100) {
        output = (Math.round((toLength / 1000) * 100) / 100) + ' ' + 'km';
    } else {
        output = (Math.round(toLength * 100) / 100) + ' ' + 'm';
    }
    return output;
}

function formatArea(polygon) {
    var area = ol.sphere.getArea(polygon);
    console.log(area);
    var output;
    if (area > 10000) {
        output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>';
    } else {
        output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>';
    }
    return output;
}

DrawCustom.prototype.layer_reset = function () {
    this.Layer.getSource().clear();
};