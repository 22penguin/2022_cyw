/**
 * RxMap
 * pre - 2022.09.09
 * modify - 2022.10.14
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */
'use strict';

const INIT_COORDS_X = 128.67932152304448;
const INIT_COORDS_Y = 36.12027696858047;
const INIT_ZOOM = 7;

let RxMapBase = function (divId) {
    this.initialize(divId);
};

RxMapBase.prototype.map = null;
RxMapBase.prototype.MapView = null;
RxMapBase.prototype.BaseLayer = null;
RxMapBase.prototype.MapProjection = null;
RxMapBase.prototype.LayerProjection = null;
RxMapBase.prototype.popup = null;
RxMapBase.prototype.Distance = null;
RxMapBase.prototype.initialize = function (divId) { };

var RxMap = function () {
    RxMapBase.apply(this, arguments);
};

RxMap.prototype = new RxMapBase();
RxMap.prototype.constructor = RxMap;
RxMap.prototype.MapProjection = Proj_4326;
RxMap.prototype.LayerProjection = Proj_900913;
RxMap.prototype.drawcustom = new DrawCustom();

// RxMap.prototype.Contextmenu = new ContextMenu({
//     width: 180
// });

RxMap.prototype.initialize = function (mapDiv) {
    this.div = mapDiv;
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
        }).extend(
            [new ol.control.OverviewMap(),
            new ol.control.ZoomSlider(),
            new ol.control.ScaleLine({
                units: 'metric',
                target: 'scalebar',
                className: 'ol-scale-line'
            })]),
        layers: [DefLayer],
        target: mapDiv,
        view: this.MapView
    });
    this.drawcustom.map = this;
};

// map functions----------------------------------------------------------------------------------------------------------------
RxMap.prototype.setCenter = function (lng, lat) {
    try {
        this.map.getView().setCenter(
            ol.proj.transform([lng, lat], this.MapProjection,
                this.LayerProjection));
    } catch (exception) {
        console.error("RxMap getCenter Error [" + exception.name + "] : "
            + exception.message);
    } finally {

    }
};

RxMap.prototype.getCenter = function () {
    try {
        return ol.proj.transform(this.map.getView().getCenter(),
            this.LayerProjection, this.MapProjection);
    } catch (exception) {
        console.error("RxMap getCenter Error [" + exception.name
            + "] : " + exception.message);
    } finally {

    }
};

RxMap.prototype.getSize = function () {
    try {
        return this.map.getSize();
    } catch (exception) {
        console.error("RxMap getCenter Error [" + exception.name
            + "] : " + exception.message);
    } finally {

    }
};

RxMap.prototype.getZoom = function () {
    try {
        return this.map.getView().getZoom();
    } catch (exception) {
        console.error("RxMap getZoom Error [" + exception.name + "] : "
            + exception.message);
    } finally {

    }
};

RxMap.prototype.Zoom = function (z) {
    try {
        this.map.getView().setZoom(z);
    } catch (exception) {
        console.error("RxMap zoom Error [" + exception.name + "] : "
            + exception.message);
    } finally {

    }
};

RxMap.prototype.ZoomIn = function () {
    try {
        this.MapView.animate({
            zoom: this.MapView.getZoom() + 1
        });
    } catch (exception) {
        console.error("RxMap zoomIn Error [" + exception.name + "] : "
            + exception.message);
    } finally {
    }

};

RxMap.prototype.ZoomOut = function () {
    try {
        this.MapView.animate({
            zoom: this.MapView.getZoom() - 1
        });
    } catch (exception) {
        console.error("RxMap zoomOut Error [" + exception.name + "] : "
            + exception.message);
    } finally {
    }

};

RxMap.prototype.viewAll = function (z) {
    try {
        this.map.getView().setZoom(INIT_ZOOM);
        this.map.getView().setCenter(ol.proj.transform([INIT_COORDS_X, INIT_COORDS_Y],
            this.MapProjection, this.LayerProjection));
    } catch (exception) {
        console.error("RxMap viewAll Error [" + exception.name + "] : "
            + exception.message);
    } finally {

    }
};

RxMap.prototype.setExtent = function (extent) {
    try {
        let extrTrans = ol.proj.transformExtent(extent,
            this.MapProjection, this.LayerProjection);
        this.MapView.fit(extrTrans, this.map.getSize());
    } catch (exception) {
        console.error("RxMap setExtent Error [" + exception.name
            + "] : " + exception.message);
    } finally {

    }
};

RxMap.prototype.BoundXyToExtent = function (minx, miny, maxx, maxy) {
    try {
        let extent = [minx, miny, maxx, maxy];
        let extrTrans = ol.proj.transformExtent(extent,
            this.MapProjection, this.LayerProjection);
        this.MapView.fit(extrTrans, this.map.getSize());
    } catch (exception) {
        console.error("RxMap BoundXyToExtent Error [" + exception.name
            + "] : " + exception.message);
    } finally {

    }
};

RxMap.prototype.addLayer = function (layer) {
    try {
        this.map.addLayer(layer);
    } catch (exception) {
        console.error("RxMap addLayer Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.removeLayer = function (layer) {
    try {
        this.map.removeLayer(layer);
    } catch (exception) {
        console.error("RxMap removeLayer Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getLayersByName = function (name) {
    try {
        return this.map.getLayersByName(name);
    } catch (exception) {
        console.error("RxMap getLayersByName Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }

};

RxMap.prototype.addInteraction = function (interact) {
    try {
        this.map.addInteraction(interact);
    } catch (exception) {
        console.error("RxMap addInteraction Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.addOverlay = function (overlay) {
    try {
        this.map.addOverlay(overlay);
    } catch (exception) {
        console.error("RxMap addOverlay Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.addControl = function (Control) {
    try {
        this.map.addControl(Control);
    } catch (exception) {
        console.error("RxMap addControl Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getTarget = function () {
    try {
        return this.map.getTarget();
    } catch (exception) {
        console.error("RxMap getTarget Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getViewport = function () {
    try {
        return this.map.getViewport();
    } catch (exception) {
        console.error("RxMap getViewport Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getViewport = function () {
    try {
        return this.map.getViewport();
    } catch (exception) {
        console.error("RxMap getViewport Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getEventPixel = function (event) {
    try {
        return this.map.getEventPixel(event);
    } catch (exception) {
        console.error("RxMap getViewport Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

RxMap.prototype.getLayers = function () {
    try {
        return this.map.getLayers();
    } catch (exception) {
        console.error("RxMap getLayers Error [" + exception.name
            + "] : " + exception.message);
    } finally {
    }
};

// RxMap.prototype.layerClear = function() {
// 	let staLayer = rxMap.station.LayerSource;
// 	let rouLayer = rxMap.route.LayerSource;

// 	staLayer.clear(true);
// 	rouLayer.clear(true);
// };

RxMap.prototype.draw_reset = function () {
    this.map.removeInteraction(this.drawcustom.draw);
    this.drawcustom.layer_reset();
}

RxMap.prototype.draw_line = function () {
    this.map.removeInteraction(this.drawcustom.draw);
    this.drawcustom.draw_linestring();
}

RxMap.prototype.draw_polygon = function () {
    this.map.removeInteraction(this.drawcustom.draw);
    this.drawcustom.draw_polygon();
}
// map functions end----------------------------------------------------------------------------------------------------------------

var rxMap = null;

function InitializeMap(mapDiv) {
    rxMap = new RxMap(mapDiv);

    rxMap.addLayer(rxMap.drawcustom.Layer);
};

$(function () {
    InitializeMap("map");
});