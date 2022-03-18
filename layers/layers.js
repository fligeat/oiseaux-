var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_parcours_1 = new ol.format.GeoJSON();
var features_parcours_1 = format_parcours_1.readFeatures(json_parcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours_1.addFeatures(features_parcours_1);
var lyr_parcours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours_1, 
                style: style_parcours_1,
                interactive: true,
                title: '<img src="styles/legend/parcours_1.png" /> parcours'
            });
var format_observationsoiseaux2022_2 = new ol.format.GeoJSON();
var features_observationsoiseaux2022_2 = format_observationsoiseaux2022_2.readFeatures(json_observationsoiseaux2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_observationsoiseaux2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_observationsoiseaux2022_2.addFeatures(features_observationsoiseaux2022_2);
var lyr_observationsoiseaux2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_observationsoiseaux2022_2, 
                style: style_observationsoiseaux2022_2,
                interactive: true,
                title: '<img src="styles/legend/observationsoiseaux2022_2.png" /> observations oiseaux 2022'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_parcours_1.setVisible(true);lyr_observationsoiseaux2022_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_parcours_1,lyr_observationsoiseaux2022_2];
lyr_parcours_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_observationsoiseaux2022_2.set('fieldAliases', {'oiseaux vu': 'oiseaux vu', });
lyr_parcours_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_observationsoiseaux2022_2.set('fieldImages', {'oiseaux vu': 'TextEdit', });
lyr_parcours_1.set('fieldLabels', {'name': 'inline label', 'symbol': 'inline label', 'number': 'inline label', 'comment': 'no label', 'descriptio': 'inline label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_observationsoiseaux2022_2.set('fieldLabels', {'oiseaux vu': 'no label', });
lyr_observationsoiseaux2022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});