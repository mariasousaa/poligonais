var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXXIIPolgonoTerrestreH_1 = new ol.format.GeoJSON();
var features_AnexoXXIIPolgonoTerrestreH_1 = format_AnexoXXIIPolgonoTerrestreH_1.readFeatures(json_AnexoXXIIPolgonoTerrestreH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXIIPolgonoTerrestreH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXIIPolgonoTerrestreH_1.addFeatures(features_AnexoXXIIPolgonoTerrestreH_1);
var lyr_AnexoXXIIPolgonoTerrestreH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXIIPolgonoTerrestreH_1, 
                style: style_AnexoXXIIPolgonoTerrestreH_1,
                popuplayertitle: "Anexo XXII - Polígono Terrestre H",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXIIPolgonoTerrestreH_1.png" /> Anexo XXII - Polígono Terrestre H'
            });
var format_AnexoXXIPolgonoTerrestreG_2 = new ol.format.GeoJSON();
var features_AnexoXXIPolgonoTerrestreG_2 = format_AnexoXXIPolgonoTerrestreG_2.readFeatures(json_AnexoXXIPolgonoTerrestreG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXIPolgonoTerrestreG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXIPolgonoTerrestreG_2.addFeatures(features_AnexoXXIPolgonoTerrestreG_2);
var lyr_AnexoXXIPolgonoTerrestreG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXIPolgonoTerrestreG_2, 
                style: style_AnexoXXIPolgonoTerrestreG_2,
                popuplayertitle: "Anexo XXI - Polígono Terrestre G",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXIPolgonoTerrestreG_2.png" /> Anexo XXI - Polígono Terrestre G'
            });
var format_AnexoXXPolgonoTerrestreF_3 = new ol.format.GeoJSON();
var features_AnexoXXPolgonoTerrestreF_3 = format_AnexoXXPolgonoTerrestreF_3.readFeatures(json_AnexoXXPolgonoTerrestreF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXPolgonoTerrestreF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXPolgonoTerrestreF_3.addFeatures(features_AnexoXXPolgonoTerrestreF_3);
var lyr_AnexoXXPolgonoTerrestreF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXPolgonoTerrestreF_3, 
                style: style_AnexoXXPolgonoTerrestreF_3,
                popuplayertitle: "Anexo XX - Polígono Terrestre F",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXPolgonoTerrestreF_3.png" /> Anexo XX - Polígono Terrestre F'
            });
var format_AnexoXVIIIPolgonoTerrestreD_4 = new ol.format.GeoJSON();
var features_AnexoXVIIIPolgonoTerrestreD_4 = format_AnexoXVIIIPolgonoTerrestreD_4.readFeatures(json_AnexoXVIIIPolgonoTerrestreD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIIPolgonoTerrestreD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIIPolgonoTerrestreD_4.addFeatures(features_AnexoXVIIIPolgonoTerrestreD_4);
var lyr_AnexoXVIIIPolgonoTerrestreD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIIPolgonoTerrestreD_4, 
                style: style_AnexoXVIIIPolgonoTerrestreD_4,
                popuplayertitle: "Anexo XVIII - Polígono Terrestre D",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIIPolgonoTerrestreD_4.png" /> Anexo XVIII - Polígono Terrestre D'
            });
var format_AnexoXVIIPolgonoTerrestreC_5 = new ol.format.GeoJSON();
var features_AnexoXVIIPolgonoTerrestreC_5 = format_AnexoXVIIPolgonoTerrestreC_5.readFeatures(json_AnexoXVIIPolgonoTerrestreC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIPolgonoTerrestreC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIPolgonoTerrestreC_5.addFeatures(features_AnexoXVIIPolgonoTerrestreC_5);
var lyr_AnexoXVIIPolgonoTerrestreC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIPolgonoTerrestreC_5, 
                style: style_AnexoXVIIPolgonoTerrestreC_5,
                popuplayertitle: "Anexo XVII - Polígono Terrestre C",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIPolgonoTerrestreC_5.png" /> Anexo XVII - Polígono Terrestre C'
            });
var format_AnexoXVIPolgonoTerrestreB_6 = new ol.format.GeoJSON();
var features_AnexoXVIPolgonoTerrestreB_6 = format_AnexoXVIPolgonoTerrestreB_6.readFeatures(json_AnexoXVIPolgonoTerrestreB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIPolgonoTerrestreB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIPolgonoTerrestreB_6.addFeatures(features_AnexoXVIPolgonoTerrestreB_6);
var lyr_AnexoXVIPolgonoTerrestreB_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIPolgonoTerrestreB_6, 
                style: style_AnexoXVIPolgonoTerrestreB_6,
                popuplayertitle: "Anexo XVI - Polígono Terrestre B",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIPolgonoTerrestreB_6.png" /> Anexo XVI - Polígono Terrestre B'
            });
var format_AnexoXVPolgonoTerrestreA_7 = new ol.format.GeoJSON();
var features_AnexoXVPolgonoTerrestreA_7 = format_AnexoXVPolgonoTerrestreA_7.readFeatures(json_AnexoXVPolgonoTerrestreA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVPolgonoTerrestreA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVPolgonoTerrestreA_7.addFeatures(features_AnexoXVPolgonoTerrestreA_7);
var lyr_AnexoXVPolgonoTerrestreA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVPolgonoTerrestreA_7, 
                style: style_AnexoXVPolgonoTerrestreA_7,
                popuplayertitle: "Anexo XV - Polígono Terrestre A",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVPolgonoTerrestreA_7.png" /> Anexo XV - Polígono Terrestre A'
            });
var format_AnexoXIXPolgonoTerrestreE_8 = new ol.format.GeoJSON();
var features_AnexoXIXPolgonoTerrestreE_8 = format_AnexoXIXPolgonoTerrestreE_8.readFeatures(json_AnexoXIXPolgonoTerrestreE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIXPolgonoTerrestreE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIXPolgonoTerrestreE_8.addFeatures(features_AnexoXIXPolgonoTerrestreE_8);
var lyr_AnexoXIXPolgonoTerrestreE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIXPolgonoTerrestreE_8, 
                style: style_AnexoXIXPolgonoTerrestreE_8,
                popuplayertitle: "Anexo XIX - Polígono Terrestre E",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIXPolgonoTerrestreE_8.png" /> Anexo XIX - Polígono Terrestre E'
            });
var format_AnexoXIVPolgonoMartimoM_9 = new ol.format.GeoJSON();
var features_AnexoXIVPolgonoMartimoM_9 = format_AnexoXIVPolgonoMartimoM_9.readFeatures(json_AnexoXIVPolgonoMartimoM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVPolgonoMartimoM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVPolgonoMartimoM_9.addFeatures(features_AnexoXIVPolgonoMartimoM_9);
var lyr_AnexoXIVPolgonoMartimoM_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVPolgonoMartimoM_9, 
                style: style_AnexoXIVPolgonoMartimoM_9,
                popuplayertitle: "Anexo XIV - Polígono Marítimo M",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVPolgonoMartimoM_9.png" /> Anexo XIV - Polígono Marítimo M'
            });
var format_AnexoXIIIPolgonoMartimoL_10 = new ol.format.GeoJSON();
var features_AnexoXIIIPolgonoMartimoL_10 = format_AnexoXIIIPolgonoMartimoL_10.readFeatures(json_AnexoXIIIPolgonoMartimoL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIPolgonoMartimoL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIPolgonoMartimoL_10.addFeatures(features_AnexoXIIIPolgonoMartimoL_10);
var lyr_AnexoXIIIPolgonoMartimoL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIPolgonoMartimoL_10, 
                style: style_AnexoXIIIPolgonoMartimoL_10,
                popuplayertitle: "Anexo XIII - Polígono Marítimo L",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIPolgonoMartimoL_10.png" /> Anexo XIII - Polígono Marítimo L'
            });
var format_AnexoXIIPolgonoMartimoK_11 = new ol.format.GeoJSON();
var features_AnexoXIIPolgonoMartimoK_11 = format_AnexoXIIPolgonoMartimoK_11.readFeatures(json_AnexoXIIPolgonoMartimoK_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIPolgonoMartimoK_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIPolgonoMartimoK_11.addFeatures(features_AnexoXIIPolgonoMartimoK_11);
var lyr_AnexoXIIPolgonoMartimoK_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIPolgonoMartimoK_11, 
                style: style_AnexoXIIPolgonoMartimoK_11,
                popuplayertitle: "Anexo XII - Polígono Marítimo K",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIPolgonoMartimoK_11.png" /> Anexo XII - Polígono Marítimo K'
            });
var format_AnexoXIPolgonoMartimoJ_12 = new ol.format.GeoJSON();
var features_AnexoXIPolgonoMartimoJ_12 = format_AnexoXIPolgonoMartimoJ_12.readFeatures(json_AnexoXIPolgonoMartimoJ_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIPolgonoMartimoJ_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIPolgonoMartimoJ_12.addFeatures(features_AnexoXIPolgonoMartimoJ_12);
var lyr_AnexoXIPolgonoMartimoJ_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIPolgonoMartimoJ_12, 
                style: style_AnexoXIPolgonoMartimoJ_12,
                popuplayertitle: "Anexo XI - Polígono Marítimo J",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIPolgonoMartimoJ_12.png" /> Anexo XI - Polígono Marítimo J'
            });
var format_AnexoXPolgonoMartimoI_13 = new ol.format.GeoJSON();
var features_AnexoXPolgonoMartimoI_13 = format_AnexoXPolgonoMartimoI_13.readFeatures(json_AnexoXPolgonoMartimoI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXPolgonoMartimoI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXPolgonoMartimoI_13.addFeatures(features_AnexoXPolgonoMartimoI_13);
var lyr_AnexoXPolgonoMartimoI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXPolgonoMartimoI_13, 
                style: style_AnexoXPolgonoMartimoI_13,
                popuplayertitle: "Anexo X - Polígono Marítimo I",
                interactive: true,
                title: '<img src="styles/legend/AnexoXPolgonoMartimoI_13.png" /> Anexo X - Polígono Marítimo I'
            });
var format_AnexoVIIIPolgonoMartimoG_14 = new ol.format.GeoJSON();
var features_AnexoVIIIPolgonoMartimoG_14 = format_AnexoVIIIPolgonoMartimoG_14.readFeatures(json_AnexoVIIIPolgonoMartimoG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIPolgonoMartimoG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIPolgonoMartimoG_14.addFeatures(features_AnexoVIIIPolgonoMartimoG_14);
var lyr_AnexoVIIIPolgonoMartimoG_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIPolgonoMartimoG_14, 
                style: style_AnexoVIIIPolgonoMartimoG_14,
                popuplayertitle: "Anexo VIII - Polígono Marítimo G",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIPolgonoMartimoG_14.png" /> Anexo VIII - Polígono Marítimo G'
            });
var format_AnexoVIIPolgonoMartimoF_15 = new ol.format.GeoJSON();
var features_AnexoVIIPolgonoMartimoF_15 = format_AnexoVIIPolgonoMartimoF_15.readFeatures(json_AnexoVIIPolgonoMartimoF_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIPolgonoMartimoF_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIPolgonoMartimoF_15.addFeatures(features_AnexoVIIPolgonoMartimoF_15);
var lyr_AnexoVIIPolgonoMartimoF_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIPolgonoMartimoF_15, 
                style: style_AnexoVIIPolgonoMartimoF_15,
                popuplayertitle: "Anexo VII - Polígono Marítimo F",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIPolgonoMartimoF_15.png" /> Anexo VII - Polígono Marítimo F'
            });
var format_AnexoVIPolgonoMartimoE_16 = new ol.format.GeoJSON();
var features_AnexoVIPolgonoMartimoE_16 = format_AnexoVIPolgonoMartimoE_16.readFeatures(json_AnexoVIPolgonoMartimoE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIPolgonoMartimoE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIPolgonoMartimoE_16.addFeatures(features_AnexoVIPolgonoMartimoE_16);
var lyr_AnexoVIPolgonoMartimoE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIPolgonoMartimoE_16, 
                style: style_AnexoVIPolgonoMartimoE_16,
                popuplayertitle: "Anexo VI - Polígono Marítimo E",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIPolgonoMartimoE_16.png" /> Anexo VI - Polígono Marítimo E'
            });
var format_AnexoVPolgonoMartimoD_17 = new ol.format.GeoJSON();
var features_AnexoVPolgonoMartimoD_17 = format_AnexoVPolgonoMartimoD_17.readFeatures(json_AnexoVPolgonoMartimoD_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVPolgonoMartimoD_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVPolgonoMartimoD_17.addFeatures(features_AnexoVPolgonoMartimoD_17);
var lyr_AnexoVPolgonoMartimoD_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVPolgonoMartimoD_17, 
                style: style_AnexoVPolgonoMartimoD_17,
                popuplayertitle: "Anexo V - Polígono Marítimo D",
                interactive: true,
                title: '<img src="styles/legend/AnexoVPolgonoMartimoD_17.png" /> Anexo V - Polígono Marítimo D'
            });
var format_AnexoIXPolgonoMartimoH_18 = new ol.format.GeoJSON();
var features_AnexoIXPolgonoMartimoH_18 = format_AnexoIXPolgonoMartimoH_18.readFeatures(json_AnexoIXPolgonoMartimoH_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXPolgonoMartimoH_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXPolgonoMartimoH_18.addFeatures(features_AnexoIXPolgonoMartimoH_18);
var lyr_AnexoIXPolgonoMartimoH_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXPolgonoMartimoH_18, 
                style: style_AnexoIXPolgonoMartimoH_18,
                popuplayertitle: "Anexo IX - Polígono Marítimo H",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXPolgonoMartimoH_18.png" /> Anexo IX - Polígono Marítimo H'
            });
var format_AnexoIVPolgonoMartimoC_19 = new ol.format.GeoJSON();
var features_AnexoIVPolgonoMartimoC_19 = format_AnexoIVPolgonoMartimoC_19.readFeatures(json_AnexoIVPolgonoMartimoC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVPolgonoMartimoC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVPolgonoMartimoC_19.addFeatures(features_AnexoIVPolgonoMartimoC_19);
var lyr_AnexoIVPolgonoMartimoC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVPolgonoMartimoC_19, 
                style: style_AnexoIVPolgonoMartimoC_19,
                popuplayertitle: "Anexo IV - Polígono Marítimo C",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVPolgonoMartimoC_19.png" /> Anexo IV - Polígono Marítimo C'
            });
var format_AnexoIIIPolgonoMartimoB_20 = new ol.format.GeoJSON();
var features_AnexoIIIPolgonoMartimoB_20 = format_AnexoIIIPolgonoMartimoB_20.readFeatures(json_AnexoIIIPolgonoMartimoB_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIPolgonoMartimoB_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIPolgonoMartimoB_20.addFeatures(features_AnexoIIIPolgonoMartimoB_20);
var lyr_AnexoIIIPolgonoMartimoB_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIPolgonoMartimoB_20, 
                style: style_AnexoIIIPolgonoMartimoB_20,
                popuplayertitle: "Anexo III - Polígono Marítimo B",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIPolgonoMartimoB_20.png" /> Anexo III - Polígono Marítimo B'
            });
var format_AnexoIIPolgonoMartimoA_21 = new ol.format.GeoJSON();
var features_AnexoIIPolgonoMartimoA_21 = format_AnexoIIPolgonoMartimoA_21.readFeatures(json_AnexoIIPolgonoMartimoA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIPolgonoMartimoA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIPolgonoMartimoA_21.addFeatures(features_AnexoIIPolgonoMartimoA_21);
var lyr_AnexoIIPolgonoMartimoA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIPolgonoMartimoA_21, 
                style: style_AnexoIIPolgonoMartimoA_21,
                popuplayertitle: "Anexo II - Polígono Marítimo A",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIPolgonoMartimoA_21.png" /> Anexo II - Polígono Marítimo A'
            });
var group_readoPortoOrganizadodoRiodeJaneiro = new ol.layer.Group({
                                layers: [lyr_AnexoXXIIPolgonoTerrestreH_1,lyr_AnexoXXIPolgonoTerrestreG_2,lyr_AnexoXXPolgonoTerrestreF_3,lyr_AnexoXVIIIPolgonoTerrestreD_4,lyr_AnexoXVIIPolgonoTerrestreC_5,lyr_AnexoXVIPolgonoTerrestreB_6,lyr_AnexoXVPolgonoTerrestreA_7,lyr_AnexoXIXPolgonoTerrestreE_8,lyr_AnexoXIVPolgonoMartimoM_9,lyr_AnexoXIIIPolgonoMartimoL_10,lyr_AnexoXIIPolgonoMartimoK_11,lyr_AnexoXIPolgonoMartimoJ_12,lyr_AnexoXPolgonoMartimoI_13,lyr_AnexoVIIIPolgonoMartimoG_14,lyr_AnexoVIIPolgonoMartimoF_15,lyr_AnexoVIPolgonoMartimoE_16,lyr_AnexoVPolgonoMartimoD_17,lyr_AnexoIXPolgonoMartimoH_18,lyr_AnexoIVPolgonoMartimoC_19,lyr_AnexoIIIPolgonoMartimoB_20,lyr_AnexoIIPolgonoMartimoA_21,],
                                fold: "open",
                                title: "Área do Porto Organizado do Rio de Janeiro"});

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXXIIPolgonoTerrestreH_1.setVisible(true);lyr_AnexoXXIPolgonoTerrestreG_2.setVisible(true);lyr_AnexoXXPolgonoTerrestreF_3.setVisible(true);lyr_AnexoXVIIIPolgonoTerrestreD_4.setVisible(true);lyr_AnexoXVIIPolgonoTerrestreC_5.setVisible(true);lyr_AnexoXVIPolgonoTerrestreB_6.setVisible(true);lyr_AnexoXVPolgonoTerrestreA_7.setVisible(true);lyr_AnexoXIXPolgonoTerrestreE_8.setVisible(true);lyr_AnexoXIVPolgonoMartimoM_9.setVisible(true);lyr_AnexoXIIIPolgonoMartimoL_10.setVisible(true);lyr_AnexoXIIPolgonoMartimoK_11.setVisible(true);lyr_AnexoXIPolgonoMartimoJ_12.setVisible(true);lyr_AnexoXPolgonoMartimoI_13.setVisible(true);lyr_AnexoVIIIPolgonoMartimoG_14.setVisible(true);lyr_AnexoVIIPolgonoMartimoF_15.setVisible(true);lyr_AnexoVIPolgonoMartimoE_16.setVisible(true);lyr_AnexoVPolgonoMartimoD_17.setVisible(true);lyr_AnexoIXPolgonoMartimoH_18.setVisible(true);lyr_AnexoIVPolgonoMartimoC_19.setVisible(true);lyr_AnexoIIIPolgonoMartimoB_20.setVisible(true);lyr_AnexoIIPolgonoMartimoA_21.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_readoPortoOrganizadodoRiodeJaneiro];
lyr_AnexoXXIIPolgonoTerrestreH_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXIPolgonoTerrestreG_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXPolgonoTerrestreF_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIIPolgonoTerrestreD_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIPolgonoTerrestreC_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIPolgonoTerrestreB_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVPolgonoTerrestreA_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIXPolgonoTerrestreE_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVPolgonoMartimoM_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIPolgonoMartimoL_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIPolgonoMartimoK_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIPolgonoMartimoJ_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXPolgonoMartimoI_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIPolgonoMartimoG_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIPolgonoMartimoF_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIPolgonoMartimoE_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVPolgonoMartimoD_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXPolgonoMartimoH_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVPolgonoMartimoC_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIPolgonoMartimoB_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIPolgonoMartimoA_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXIIPolgonoTerrestreH_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXXIPolgonoTerrestreG_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXXPolgonoTerrestreF_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXVIIIPolgonoTerrestreD_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXVIIPolgonoTerrestreC_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXVIPolgonoTerrestreB_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXVPolgonoTerrestreA_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXIXPolgonoTerrestreE_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXIVPolgonoMartimoM_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXIIIPolgonoMartimoL_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXIIPolgonoMartimoK_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXIPolgonoMartimoJ_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXPolgonoMartimoI_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoVIIIPolgonoMartimoG_14.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoVIIPolgonoMartimoF_15.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoVIPolgonoMartimoE_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoVPolgonoMartimoD_17.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoIXPolgonoMartimoH_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoIVPolgonoMartimoC_19.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoIIIPolgonoMartimoB_20.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoIIPolgonoMartimoA_21.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AnexoXXIIPolgonoTerrestreH_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXXIPolgonoTerrestreG_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXXPolgonoTerrestreF_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXVIIIPolgonoTerrestreD_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXVIIPolgonoTerrestreC_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXVIPolgonoTerrestreB_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXVPolgonoTerrestreA_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXIXPolgonoTerrestreE_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXIVPolgonoMartimoM_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXIIIPolgonoMartimoL_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXIIPolgonoMartimoK_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXIPolgonoMartimoJ_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoXPolgonoMartimoI_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoVIIIPolgonoMartimoG_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoVIIPolgonoMartimoF_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoVIPolgonoMartimoE_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoVPolgonoMartimoD_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoIXPolgonoMartimoH_18.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoIVPolgonoMartimoC_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoIIIPolgonoMartimoB_20.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoIIPolgonoMartimoA_21.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AnexoIIPolgonoMartimoA_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});