var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SewerForceMain_2 = new ol.format.GeoJSON();
var features_SewerForceMain_2 = format_SewerForceMain_2.readFeatures(json_SewerForceMain_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerForceMain_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerForceMain_2.addFeatures(features_SewerForceMain_2);
var lyr_SewerForceMain_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SewerForceMain_2, 
                style: style_SewerForceMain_2,
                interactive: true,
                title: '<img src="styles/legend/SewerForceMain_2.png" /> Sewer Force Main'
            });
var format_SewerGravityMain_3 = new ol.format.GeoJSON();
var features_SewerGravityMain_3 = format_SewerGravityMain_3.readFeatures(json_SewerGravityMain_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerGravityMain_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerGravityMain_3.addFeatures(features_SewerGravityMain_3);
var lyr_SewerGravityMain_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SewerGravityMain_3, 
                style: style_SewerGravityMain_3,
                interactive: true,
                title: '<img src="styles/legend/SewerGravityMain_3.png" /> Sewer Gravity Main'
            });
var format_SewerLateral_4 = new ol.format.GeoJSON();
var features_SewerLateral_4 = format_SewerLateral_4.readFeatures(json_SewerLateral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerLateral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerLateral_4.addFeatures(features_SewerLateral_4);
var lyr_SewerLateral_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SewerLateral_4, 
                style: style_SewerLateral_4,
                interactive: true,
                title: '<img src="styles/legend/SewerLateral_4.png" /> Sewer Lateral'
            });
var format_WaterLaterals_5 = new ol.format.GeoJSON();
var features_WaterLaterals_5 = format_WaterLaterals_5.readFeatures(json_WaterLaterals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLaterals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLaterals_5.addFeatures(features_WaterLaterals_5);
var lyr_WaterLaterals_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLaterals_5, 
                style: style_WaterLaterals_5,
                interactive: true,
                title: '<img src="styles/legend/WaterLaterals_5.png" /> Water Laterals'
            });
var format_WaterMain_6 = new ol.format.GeoJSON();
var features_WaterMain_6 = format_WaterMain_6.readFeatures(json_WaterMain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterMain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterMain_6.addFeatures(features_WaterMain_6);
var lyr_WaterMain_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterMain_6, 
                style: style_WaterMain_6,
                interactive: true,
                title: '<img src="styles/legend/WaterMain_6.png" /> Water Main'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_SewerForceMain_2.setVisible(true);lyr_SewerGravityMain_3.setVisible(true);lyr_SewerLateral_4.setVisible(true);lyr_WaterLaterals_5.setVisible(true);lyr_WaterMain_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_SewerForceMain_2,lyr_SewerGravityMain_3,lyr_SewerLateral_4,lyr_WaterLaterals_5,lyr_WaterMain_6];
lyr_SewerForceMain_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FMNUM': 'FMNUM', 'SIZE': 'SIZE', 'MATERIAL': 'MATERIAL', 'INSTALLED': 'INSTALLED', 'NOTES': 'NOTES', 'GNSS_LENGT': 'GNSS_LENGT', 'LASTEDITOR': 'LASTEDITOR', 'Accuracy_P': 'Accuracy_P', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Miles': 'Miles', 'LS_Area_Do': 'LS_Area_Do', 'LS_Area_Up': 'LS_Area_Up', 'Final_LS_T': 'Final_LS_T', 'Shape_STLe': 'Shape_STLe', });
lyr_SewerGravityMain_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SLNUM': 'SLNUM', 'SIZE': 'SIZE', 'MATERIAL': 'MATERIAL', 'INSTALLED': 'INSTALLED', 'NOTES': 'NOTES', 'Slope': 'Slope', 'UpstreamIn': 'UpstreamIn', 'Downstream': 'Downstream', 'LASTEDITOR': 'LASTEDITOR', 'Comment': 'Comment', 'Accuracy_P': 'Accuracy_P', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'LS_Area_Do': 'LS_Area_Do', 'Final_LS_T': 'Final_LS_T', 'Lined': 'Lined', 'Lined_Year': 'Lined_Year', 'Shape_STLe': 'Shape_STLe', });
lyr_SewerLateral_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Station_Of': 'Station_Of', 'Comment': 'Comment', 'Size': 'Size', 'Material': 'Material', 'LASTEDITOR': 'LASTEDITOR', 'Installed': 'Installed', 'Accuracy_P': 'Accuracy_P', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'LS_Area_Do': 'LS_Area_Do', 'Final_LS_T': 'Final_LS_T', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_WaterLaterals_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Size': 'Size', 'Material': 'Material', 'LASTEDITOR': 'LASTEDITOR', 'Installed': 'Installed', 'Accuracy_P': 'Accuracy_P', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_WaterMain_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIZE': 'SIZE', 'MATERIAL': 'MATERIAL', 'INSTALLED': 'INSTALLED', 'LASTEDITOR': 'LASTEDITOR', 'Accuracy_P': 'Accuracy_P', 'Cleaned': 'Cleaned', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Miles': 'Miles', 'Shape_STLe': 'Shape_STLe', });
lyr_SewerForceMain_2.set('fieldImages', {'OBJECTID': '', 'FMNUM': '', 'SIZE': '', 'MATERIAL': '', 'INSTALLED': '', 'NOTES': '', 'GNSS_LENGT': '', 'LASTEDITOR': '', 'Accuracy_P': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'Miles': '', 'LS_Area_Do': '', 'LS_Area_Up': '', 'Final_LS_T': '', 'Shape_STLe': '', });
lyr_SewerGravityMain_3.set('fieldImages', {'OBJECTID': '', 'SLNUM': '', 'SIZE': '', 'MATERIAL': '', 'INSTALLED': '', 'NOTES': '', 'Slope': '', 'UpstreamIn': '', 'Downstream': '', 'LASTEDITOR': '', 'Comment': '', 'Accuracy_P': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'LS_Area_Do': '', 'Final_LS_T': '', 'Lined': '', 'Lined_Year': '', 'Shape_STLe': '', });
lyr_SewerLateral_4.set('fieldImages', {'OBJECTID': '', 'Station_Of': '', 'Comment': '', 'Size': '', 'Material': '', 'LASTEDITOR': '', 'Installed': '', 'Accuracy_P': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'LS_Area_Do': '', 'Final_LS_T': '', 'SHAPE_STLe': '', });
lyr_WaterLaterals_5.set('fieldImages', {'OBJECTID': '', 'Size': '', 'Material': '', 'LASTEDITOR': '', 'Installed': '', 'Accuracy_P': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'SHAPE_STLe': '', });
lyr_WaterMain_6.set('fieldImages', {'OBJECTID': '', 'SIZE': '', 'MATERIAL': '', 'INSTALLED': '', 'LASTEDITOR': '', 'Accuracy_P': '', 'Cleaned': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'Miles': '', 'Shape_STLe': '', });
lyr_SewerForceMain_2.set('fieldLabels', {'OBJECTID': 'no label', 'FMNUM': 'no label', 'SIZE': 'no label', 'MATERIAL': 'no label', 'INSTALLED': 'no label', 'NOTES': 'no label', 'GNSS_LENGT': 'no label', 'LASTEDITOR': 'no label', 'Accuracy_P': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Miles': 'no label', 'LS_Area_Do': 'no label', 'LS_Area_Up': 'no label', 'Final_LS_T': 'no label', 'Shape_STLe': 'no label', });
lyr_SewerGravityMain_3.set('fieldLabels', {'OBJECTID': 'no label', 'SLNUM': 'no label', 'SIZE': 'no label', 'MATERIAL': 'no label', 'INSTALLED': 'no label', 'NOTES': 'no label', 'Slope': 'no label', 'UpstreamIn': 'no label', 'Downstream': 'no label', 'LASTEDITOR': 'no label', 'Comment': 'no label', 'Accuracy_P': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'LS_Area_Do': 'no label', 'Final_LS_T': 'no label', 'Lined': 'no label', 'Lined_Year': 'no label', 'Shape_STLe': 'no label', });
lyr_SewerLateral_4.set('fieldLabels', {'OBJECTID': 'no label', 'Station_Of': 'no label', 'Comment': 'no label', 'Size': 'no label', 'Material': 'no label', 'LASTEDITOR': 'no label', 'Installed': 'no label', 'Accuracy_P': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'LS_Area_Do': 'no label', 'Final_LS_T': 'no label', 'SHAPE_STLe': 'no label', });
lyr_WaterLaterals_5.set('fieldLabels', {'OBJECTID': 'no label', 'Size': 'no label', 'Material': 'no label', 'LASTEDITOR': 'no label', 'Installed': 'no label', 'Accuracy_P': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_STLe': 'no label', });
lyr_WaterMain_6.set('fieldLabels', {'OBJECTID': 'no label', 'SIZE': 'no label', 'MATERIAL': 'no label', 'INSTALLED': 'no label', 'LASTEDITOR': 'no label', 'Accuracy_P': 'no label', 'Cleaned': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Miles': 'no label', 'Shape_STLe': 'no label', });
lyr_WaterMain_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});