var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zipcodes_1 = new ol.format.GeoJSON();
var features_Zipcodes_1 = format_Zipcodes_1.readFeatures(json_Zipcodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zipcodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zipcodes_1.addFeatures(features_Zipcodes_1);
var lyr_Zipcodes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zipcodes_1, 
                style: style_Zipcodes_1,
                popuplayertitle: 'Zipcodes',
                interactive: false,
                title: '<img src="styles/legend/Zipcodes_1.png" /> Zipcodes'
            });
var format_not_inspected_2 = new ol.format.GeoJSON();
var features_not_inspected_2 = format_not_inspected_2.readFeatures(json_not_inspected_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_not_inspected_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_not_inspected_2.addFeatures(features_not_inspected_2);
var lyr_not_inspected_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_not_inspected_2, 
                style: style_not_inspected_2,
                popuplayertitle: 'not_inspected',
                interactive: true,
                title: '<img src="styles/legend/not_inspected_2.png" /> not_inspected'
            });
var format_low_risk_3 = new ol.format.GeoJSON();
var features_low_risk_3 = format_low_risk_3.readFeatures(json_low_risk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_low_risk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_low_risk_3.addFeatures(features_low_risk_3);
var lyr_low_risk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_low_risk_3, 
                style: style_low_risk_3,
                popuplayertitle: 'low_risk',
                interactive: true,
                title: '<img src="styles/legend/low_risk_3.png" /> low_risk'
            });
var format_medium_risk_4 = new ol.format.GeoJSON();
var features_medium_risk_4 = format_medium_risk_4.readFeatures(json_medium_risk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medium_risk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medium_risk_4.addFeatures(features_medium_risk_4);
var lyr_medium_risk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_medium_risk_4, 
                style: style_medium_risk_4,
                popuplayertitle: 'medium_risk',
                interactive: true,
                title: '<img src="styles/legend/medium_risk_4.png" /> medium_risk'
            });
var format_high_risk_5 = new ol.format.GeoJSON();
var features_high_risk_5 = format_high_risk_5.readFeatures(json_high_risk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_high_risk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_high_risk_5.addFeatures(features_high_risk_5);
var lyr_high_risk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_high_risk_5, 
                style: style_high_risk_5,
                popuplayertitle: 'high_risk',
                interactive: true,
                title: '<img src="styles/legend/high_risk_5.png" /> high_risk'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Zipcodes_1.setVisible(true);lyr_not_inspected_2.setVisible(true);lyr_low_risk_3.setVisible(true);lyr_medium_risk_4.setVisible(true);lyr_high_risk_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Zipcodes_1,lyr_not_inspected_2,lyr_low_risk_3,lyr_medium_risk_4,lyr_high_risk_5];
lyr_Zipcodes_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIPCODE': 'ZIPCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_not_inspected_2.set('fieldAliases', {'fid': 'fid', 'FACILITY_ID': 'FACILITY_ID', 'FACILITY_NAME': 'FACILITY_NAME', 'RECORD_ID': 'RECORD_ID', 'PROGRAM_NAME': 'PROGRAM_NAME', 'PROGRAM_ELEMENT': 'PROGRAM_ELEMENT', 'PE_DESCRIPTION': 'PE_DESCRIPTION', 'FACILITY_ADDRESS': 'FACILITY_ADDRESS', 'FACILITY_CITY': 'FACILITY_CITY', 'FACILITY__STATE': 'FACILITY__STATE', 'FACILITY_ZIP': 'FACILITY_ZIP', 'FACILITY_LATITUDE': 'FACILITY_LATITUDE', 'FACILITY_LONGITUDE': 'FACILITY_LONGITUDE', 'OWNER_ID': 'OWNER_ID', 'OWNER_NAME': 'OWNER_NAME', 'OWNER_ADDRESS': 'OWNER_ADDRESS', 'OWNER_CITY': 'OWNER_CITY', 'OWNER_STATE': 'OWNER_STATE', 'OWNER_ZIP': 'OWNER_ZIP', 'ObjectId': 'ObjectId', });
lyr_low_risk_3.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'FACILITY_ID': 'FACILITY_ID', 'FACILITY_NAME': 'Facility Name', 'RECORD_ID': 'RECORD_ID', 'PROGRAM_NAME': 'Brand Name', 'PROGRAM_ELEMENT': 'PROGRAM_ELEMENT', 'PE_DESCRIPTION': 'Type', 'FACILITY_ADDRESS': 'Facility Address', 'FACILITY_CITY': 'FACILITY_CITY', 'FACILITY__STATE': 'FACILITY__STATE', 'FACILITY_ZIP': 'FACILITY_ZIP', 'FACILITY_LATITUDE': 'FACILITY_LATITUDE', 'FACILITY_LONGITUDE': 'FACILITY_LONGITUDE', 'OWNER_ID': 'OWNER_ID', 'OWNER_NAME': 'OWNER_NAME', 'OWNER_ADDRESS': 'OWNER_ADDRESS', 'OWNER_CITY': 'OWNER_CITY', 'OWNER_STATE': 'OWNER_STATE', 'OWNER_ZIP': 'OWNER_ZIP', 'ObjectId': 'ObjectId', 'alt_score': 'alt_score', });
lyr_medium_risk_4.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'FACILITY_ID': 'FACILITY_ID', 'FACILITY_NAME': 'Facility Name', 'RECORD_ID': 'RECORD_ID', 'PROGRAM_NAME': 'Brand Name', 'PROGRAM_ELEMENT': 'PROGRAM_ELEMENT', 'PE_DESCRIPTION': 'Type', 'FACILITY_ADDRESS': 'Facility Address', 'FACILITY_CITY': 'FACILITY_CITY', 'FACILITY__STATE': 'FACILITY__STATE', 'FACILITY_ZIP': 'FACILITY_ZIP', 'FACILITY_LATITUDE': 'FACILITY_LATITUDE', 'FACILITY_LONGITUDE': 'FACILITY_LONGITUDE', 'OWNER_ID': 'OWNER_ID', 'OWNER_NAME': 'OWNER_NAME', 'OWNER_ADDRESS': 'OWNER_ADDRESS', 'OWNER_CITY': 'OWNER_CITY', 'OWNER_STATE': 'OWNER_STATE', 'OWNER_ZIP': 'OWNER_ZIP', 'ObjectId': 'ObjectId', 'alt_score': 'alt_score', });
lyr_high_risk_5.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'FACILITY_ID': 'FACILITY_ID', 'FACILITY_NAME': 'Facility Name', 'RECORD_ID': 'RECORD_ID', 'PROGRAM_NAME': 'Brand Name', 'PROGRAM_ELEMENT': 'PROGRAM_ELEMENT', 'PE_DESCRIPTION': 'Type', 'FACILITY_ADDRESS': 'Facility Address', 'FACILITY_CITY': 'FACILITY_CITY', 'FACILITY__STATE': 'FACILITY__STATE', 'FACILITY_ZIP': 'FACILITY_ZIP', 'FACILITY_LATITUDE': 'FACILITY_LATITUDE', 'FACILITY_LONGITUDE': 'FACILITY_LONGITUDE', 'OWNER_ID': 'OWNER_ID', 'OWNER_NAME': 'OWNER_NAME', 'OWNER_ADDRESS': 'OWNER_ADDRESS', 'OWNER_CITY': 'OWNER_CITY', 'OWNER_STATE': 'OWNER_STATE', 'OWNER_ZIP': 'OWNER_ZIP', 'ObjectId': 'ObjectId', 'alt_score': 'alt_score', });
lyr_Zipcodes_1.set('fieldImages', {'OBJECTID': 'Range', 'ZIPCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_not_inspected_2.set('fieldImages', {'fid': 'TextEdit', 'FACILITY_ID': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'RECORD_ID': 'TextEdit', 'PROGRAM_NAME': 'TextEdit', 'PROGRAM_ELEMENT': 'TextEdit', 'PE_DESCRIPTION': 'TextEdit', 'FACILITY_ADDRESS': 'TextEdit', 'FACILITY_CITY': 'TextEdit', 'FACILITY__STATE': 'TextEdit', 'FACILITY_ZIP': 'TextEdit', 'FACILITY_LATITUDE': 'TextEdit', 'FACILITY_LONGITUDE': 'TextEdit', 'OWNER_ID': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'OWNER_ADDRESS': 'TextEdit', 'OWNER_CITY': 'TextEdit', 'OWNER_STATE': 'TextEdit', 'OWNER_ZIP': 'TextEdit', 'ObjectId': 'TextEdit', });
lyr_low_risk_3.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'FACILITY_ID': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'RECORD_ID': 'TextEdit', 'PROGRAM_NAME': 'TextEdit', 'PROGRAM_ELEMENT': 'TextEdit', 'PE_DESCRIPTION': 'TextEdit', 'FACILITY_ADDRESS': 'TextEdit', 'FACILITY_CITY': 'TextEdit', 'FACILITY__STATE': 'TextEdit', 'FACILITY_ZIP': 'TextEdit', 'FACILITY_LATITUDE': 'TextEdit', 'FACILITY_LONGITUDE': 'TextEdit', 'OWNER_ID': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'OWNER_ADDRESS': 'TextEdit', 'OWNER_CITY': 'TextEdit', 'OWNER_STATE': 'TextEdit', 'OWNER_ZIP': 'TextEdit', 'ObjectId': 'TextEdit', 'alt_score': 'TextEdit', });
lyr_medium_risk_4.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'FACILITY_ID': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'RECORD_ID': 'TextEdit', 'PROGRAM_NAME': 'TextEdit', 'PROGRAM_ELEMENT': 'TextEdit', 'PE_DESCRIPTION': 'TextEdit', 'FACILITY_ADDRESS': 'TextEdit', 'FACILITY_CITY': 'TextEdit', 'FACILITY__STATE': 'TextEdit', 'FACILITY_ZIP': 'TextEdit', 'FACILITY_LATITUDE': 'TextEdit', 'FACILITY_LONGITUDE': 'TextEdit', 'OWNER_ID': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'OWNER_ADDRESS': 'TextEdit', 'OWNER_CITY': 'TextEdit', 'OWNER_STATE': 'TextEdit', 'OWNER_ZIP': 'TextEdit', 'ObjectId': 'TextEdit', 'alt_score': 'TextEdit', });
lyr_high_risk_5.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'FACILITY_ID': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'RECORD_ID': 'TextEdit', 'PROGRAM_NAME': 'TextEdit', 'PROGRAM_ELEMENT': 'TextEdit', 'PE_DESCRIPTION': 'TextEdit', 'FACILITY_ADDRESS': 'TextEdit', 'FACILITY_CITY': 'TextEdit', 'FACILITY__STATE': 'TextEdit', 'FACILITY_ZIP': 'TextEdit', 'FACILITY_LATITUDE': 'TextEdit', 'FACILITY_LONGITUDE': 'TextEdit', 'OWNER_ID': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'OWNER_ADDRESS': 'TextEdit', 'OWNER_CITY': 'TextEdit', 'OWNER_STATE': 'TextEdit', 'OWNER_ZIP': 'TextEdit', 'ObjectId': 'TextEdit', 'alt_score': 'TextEdit', });
lyr_Zipcodes_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'ZIPCODE': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_not_inspected_2.set('fieldLabels', {'fid': 'hidden field', 'FACILITY_ID': 'hidden field', 'FACILITY_NAME': 'inline label - visible with data', 'RECORD_ID': 'hidden field', 'PROGRAM_NAME': 'inline label - visible with data', 'PROGRAM_ELEMENT': 'hidden field', 'PE_DESCRIPTION': 'inline label - visible with data', 'FACILITY_ADDRESS': 'inline label - visible with data', 'FACILITY_CITY': 'hidden field', 'FACILITY__STATE': 'hidden field', 'FACILITY_ZIP': 'hidden field', 'FACILITY_LATITUDE': 'hidden field', 'FACILITY_LONGITUDE': 'hidden field', 'OWNER_ID': 'hidden field', 'OWNER_NAME': 'hidden field', 'OWNER_ADDRESS': 'hidden field', 'OWNER_CITY': 'hidden field', 'OWNER_STATE': 'hidden field', 'OWNER_ZIP': 'hidden field', 'ObjectId': 'hidden field', });
lyr_low_risk_3.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'FACILITY_ID': 'hidden field', 'FACILITY_NAME': 'inline label - visible with data', 'RECORD_ID': 'hidden field', 'PROGRAM_NAME': 'inline label - visible with data', 'PROGRAM_ELEMENT': 'hidden field', 'PE_DESCRIPTION': 'inline label - visible with data', 'FACILITY_ADDRESS': 'inline label - visible with data', 'FACILITY_CITY': 'hidden field', 'FACILITY__STATE': 'hidden field', 'FACILITY_ZIP': 'hidden field', 'FACILITY_LATITUDE': 'hidden field', 'FACILITY_LONGITUDE': 'hidden field', 'OWNER_ID': 'hidden field', 'OWNER_NAME': 'hidden field', 'OWNER_ADDRESS': 'hidden field', 'OWNER_CITY': 'hidden field', 'OWNER_STATE': 'hidden field', 'OWNER_ZIP': 'hidden field', 'ObjectId': 'hidden field', 'alt_score': 'hidden field', });
lyr_medium_risk_4.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'FACILITY_ID': 'hidden field', 'FACILITY_NAME': 'inline label - visible with data', 'RECORD_ID': 'hidden field', 'PROGRAM_NAME': 'inline label - visible with data', 'PROGRAM_ELEMENT': 'hidden field', 'PE_DESCRIPTION': 'inline label - visible with data', 'FACILITY_ADDRESS': 'inline label - visible with data', 'FACILITY_CITY': 'hidden field', 'FACILITY__STATE': 'hidden field', 'FACILITY_ZIP': 'hidden field', 'FACILITY_LATITUDE': 'hidden field', 'FACILITY_LONGITUDE': 'hidden field', 'OWNER_ID': 'hidden field', 'OWNER_NAME': 'hidden field', 'OWNER_ADDRESS': 'hidden field', 'OWNER_CITY': 'hidden field', 'OWNER_STATE': 'hidden field', 'OWNER_ZIP': 'hidden field', 'ObjectId': 'hidden field', 'alt_score': 'hidden field', });
lyr_high_risk_5.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'FACILITY_ID': 'hidden field', 'FACILITY_NAME': 'inline label - visible with data', 'RECORD_ID': 'hidden field', 'PROGRAM_NAME': 'inline label - visible with data', 'PROGRAM_ELEMENT': 'hidden field', 'PE_DESCRIPTION': 'inline label - visible with data', 'FACILITY_ADDRESS': 'inline label - visible with data', 'FACILITY_CITY': 'hidden field', 'FACILITY__STATE': 'hidden field', 'FACILITY_ZIP': 'hidden field', 'FACILITY_LATITUDE': 'hidden field', 'FACILITY_LONGITUDE': 'hidden field', 'OWNER_ID': 'hidden field', 'OWNER_NAME': 'hidden field', 'OWNER_ADDRESS': 'hidden field', 'OWNER_CITY': 'hidden field', 'OWNER_STATE': 'hidden field', 'OWNER_ZIP': 'hidden field', 'ObjectId': 'hidden field', 'alt_score': 'hidden field', });
lyr_high_risk_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});