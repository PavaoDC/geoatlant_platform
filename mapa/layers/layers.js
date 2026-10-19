var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ImagemdesatliteSentinel2ESA2021_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapproxy.terrascope.be/mapproxy/service",
                              attributions: '<a href="https://esa-worldcover.org/en/data-access">© ESA WorldCover project 2021 / Copernicus Sentinel data</a>',
                              params: {
                                "LAYERS": "esa-worldcover-s2rgbnir-10m-2021-v2_tcc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Satellite imagery - Sentinel-2 (ESA, 2021)',
                            popuplayertitle: 'Satellite imagery - Sentinel-2 (ESA, 2021)',
                            type: '',
                            opacity: 0.550000,
                            
                            
                          });
              wms_layers.push([lyr_ImagemdesatliteSentinel2ESA2021_1, 0]);
var format_Lagoas_2 = new ol.format.GeoJSON();
var features_Lagoas_2 = format_Lagoas_2.readFeatures(json_Lagoas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagoas_2 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/lagoas-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Lagoas_2.addFeatures(features_Lagoas_2);
var lyr_Lagoas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagoas_2, 
                style: style_Lagoas_2,
                popuplayertitle: 'Lakes',
                interactive: true,
                title: '<img src="styles/legend/Lagoas_2.png" /> Lakes'
            });

var vectorTileUrl_Baciashidrogrficas_3 = 'layers/Baciashidrogrficas_3-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Baciashidrogrficas_3 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_Baciashidrogrficas_3,
    attributions: '<a href="https://dados.gov.pt/datasets/bacias-hidrograficas-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_Baciashidrogrficas_3 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Baciashidrogrficas_3,
    sourceType: 'pbf',
    popuplayertitle: 'Drainage basins',
    extent: ol.proj.transformExtent([-3480828.533452812, 4429024.2238246, -2784454.3805704615, 4826231.643426077], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Baciashidrogrficas_3,
    title: '<img src="styles/legend/Baciashidrogrficas_3.png" /> Drainage basins'
});


var vectorTileUrl_Hidrografia_4 = 'layers/Hidrografia_4-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Hidrografia_4 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_Hidrografia_4,
    attributions: '<a href="https://dados.gov.pt/datasets/linhas-de-agua-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY-NC 4.0</a>'
});
var lyr_Hidrografia_4 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Hidrografia_4,
    sourceType: 'pbf',
    popuplayertitle: 'Watercourses',
    extent: ol.proj.transformExtent([-3480356.508755586, 4429308.670621186, -2784631.3006371786, 4825608.2798649045], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Hidrografia_4,
    title: '<img src="styles/legend/Hidrografia_4.png" /> Watercourses'
});

var format_Nascentesdeabastecimentopblico_5 = new ol.format.GeoJSON();
var features_Nascentesdeabastecimentopblico_5 = format_Nascentesdeabastecimentopblico_5.readFeatures(json_Nascentesdeabastecimentopblico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentesdeabastecimentopblico_5 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/nascentes-de-abastecimento-publico-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Nascentesdeabastecimentopblico_5.addFeatures(features_Nascentesdeabastecimentopblico_5);
var lyr_Nascentesdeabastecimentopblico_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentesdeabastecimentopblico_5, 
                style: style_Nascentesdeabastecimentopblico_5,
                popuplayertitle: 'Public water supply springs',
                interactive: true,
                title: '<img src="styles/legend/Nascentesdeabastecimentopblico_5.png" /> Public water supply springs'
            });
var format_Monitorizaoguassubterrneas_6 = new ol.format.GeoJSON();
var features_Monitorizaoguassubterrneas_6 = format_Monitorizaoguassubterrneas_6.readFeatures(json_Monitorizaoguassubterrneas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitorizaoguassubterrneas_6 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/pontos-de-monitorizacao-do-estado-das-massas-de-agua-subterranea-pgrh-rh9-dqa-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Monitorizaoguassubterrneas_6.addFeatures(features_Monitorizaoguassubterrneas_6);
var lyr_Monitorizaoguassubterrneas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitorizaoguassubterrneas_6, 
                style: style_Monitorizaoguassubterrneas_6,
                popuplayertitle: 'Groundwater monitoring',
                interactive: true,
                title: '<img src="styles/legend/Monitorizaoguassubterrneas_6.png" /> Groundwater monitoring'
            });
var format_Monitorizaoguassuperficiais_7 = new ol.format.GeoJSON();
var features_Monitorizaoguassuperficiais_7 = format_Monitorizaoguassuperficiais_7.readFeatures(json_Monitorizaoguassuperficiais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitorizaoguassuperficiais_7 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/pontos-de-monitorizacao-do-estado-das-massas-de-agua-superficial-pgrh-rh9-dqa-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Monitorizaoguassuperficiais_7.addFeatures(features_Monitorizaoguassuperficiais_7);
var lyr_Monitorizaoguassuperficiais_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitorizaoguassuperficiais_7, 
                style: style_Monitorizaoguassuperficiais_7,
                popuplayertitle: 'Surface water monitoring',
                interactive: true,
                title: '<img src="styles/legend/Monitorizaoguassuperficiais_7.png" /> Surface water monitoring'
            });
var format_Redehidrometeorolgica_8 = new ol.format.GeoJSON();
var features_Redehidrometeorolgica_8 = format_Redehidrometeorolgica_8.readFeatures(json_Redehidrometeorolgica_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redehidrometeorolgica_8 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/rede-hidrometeorologica-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Redehidrometeorolgica_8.addFeatures(features_Redehidrometeorolgica_8);
var lyr_Redehidrometeorolgica_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redehidrometeorolgica_8, 
                style: style_Redehidrometeorolgica_8,
                popuplayertitle: 'Hydrometeorological network',
                interactive: true,
                title: '<img src="styles/legend/Redehidrometeorolgica_8.png" /> Hydrometeorological network'
            });
var format_Sistemasaquferos_9 = new ol.format.GeoJSON();
var features_Sistemasaquferos_9 = format_Sistemasaquferos_9.readFeatures(json_Sistemasaquferos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemasaquferos_9 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/sistemas-aquiferos-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Sistemasaquferos_9.addFeatures(features_Sistemasaquferos_9);
var lyr_Sistemasaquferos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemasaquferos_9, 
                style: style_Sistemasaquferos_9,
                popuplayertitle: 'Aquifer systems',
                interactive: true,
                title: '<img src="styles/legend/Sistemasaquferos_9.png" /> Aquifer systems'
            });
var format_BitoposCorine_10 = new ol.format.GeoJSON();
var features_BitoposCorine_10 = format_BitoposCorine_10.readFeatures(json_BitoposCorine_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BitoposCorine_10 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/biotopos-corine-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_BitoposCorine_10.addFeatures(features_BitoposCorine_10);
var lyr_BitoposCorine_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BitoposCorine_10, 
                style: style_BitoposCorine_10,
                popuplayertitle: 'CORINE biotopes',
                interactive: true,
                title: '<img src="styles/legend/BitoposCorine_10.png" /> CORINE biotopes'
            });

var vectorTileUrl_Habitatsprotegidos20012006_11 = 'layers/Habitatsprotegidos20012006_11-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Habitatsprotegidos20012006_11 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_Habitatsprotegidos20012006_11,
    attributions: '<a href="https://dados.gov.pt/datasets/distribuicao-dos-habitats-protegidos-pela-diretiva-habitats-2001-2006-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_Habitatsprotegidos20012006_11 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Habitatsprotegidos20012006_11,
    sourceType: 'pbf',
    popuplayertitle: 'Protected habitats - 2001–2006',
    extent: ol.proj.transformExtent([-3958904.1140335603, 3986295.2283204147, -2325145.853493121, 5296040.638944624], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Habitatsprotegidos20012006_11,
    title: '<img src="styles/legend/Habitatsprotegidos20012006_11.png" /> Protected habitats - 2001–2006'
});

var format_Habitatsprotegidos20072012_12 = new ol.format.GeoJSON();
var features_Habitatsprotegidos20072012_12 = format_Habitatsprotegidos20072012_12.readFeatures(json_Habitatsprotegidos20072012_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitatsprotegidos20072012_12 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/distribuicao-dos-habitats-protegidos-pela-diretiva-habitats-2007-2012-regiao-autonoma-dos-acores-raa">Instituto da Conservação da Natureza e das Florestas, I. P - ICNF — CC BY 4.0</a>',
});
jsonSource_Habitatsprotegidos20072012_12.addFeatures(features_Habitatsprotegidos20072012_12);
var lyr_Habitatsprotegidos20072012_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitatsprotegidos20072012_12, 
                style: style_Habitatsprotegidos20072012_12,
                popuplayertitle: 'Protected habitats - 2007–2012',
                interactive: true,
                title: '<img src="styles/legend/Habitatsprotegidos20072012_12.png" /> Protected habitats - 2007–2012'
            });
var format_Habitatsprotegidos20132018_13 = new ol.format.GeoJSON();
var features_Habitatsprotegidos20132018_13 = format_Habitatsprotegidos20132018_13.readFeatures(json_Habitatsprotegidos20132018_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitatsprotegidos20132018_13 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/distribuicao-dos-habitats-protegidos-pela-diretiva-habitats-2013-2018-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Habitatsprotegidos20132018_13.addFeatures(features_Habitatsprotegidos20132018_13);
var lyr_Habitatsprotegidos20132018_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitatsprotegidos20132018_13, 
                style: style_Habitatsprotegidos20132018_13,
                popuplayertitle: 'Protected habitats - 2013–2018',
                interactive: true,
                title: '<img src="styles/legend/Habitatsprotegidos20132018_13.png" /> Protected habitats - 2013–2018'
            });
var format_StiosRamsarWFS_14 = new ol.format.GeoJSON();
var features_StiosRamsarWFS_14 = format_StiosRamsarWFS_14.readFeatures(json_StiosRamsarWFS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StiosRamsarWFS_14 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/sitios-ramsar-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_StiosRamsarWFS_14.addFeatures(features_StiosRamsarWFS_14);
var lyr_StiosRamsarWFS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StiosRamsarWFS_14, 
                style: style_StiosRamsarWFS_14,
                popuplayertitle: 'Ramsar sites (WFS)',
                interactive: true,
                title: '<img src="styles/legend/StiosRamsarWFS_14.png" /> Ramsar sites (WFS)'
            });
var format_reasprotegidasdosParquesNaturaisdeIlhaWFS_15 = new ol.format.GeoJSON();
var features_reasprotegidasdosParquesNaturaisdeIlhaWFS_15 = format_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.readFeatures(json_reasprotegidasdosParquesNaturaisdeIlhaWFS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasprotegidasdosParquesNaturaisdeIlhaWFS_15 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/parques-naturais-de-ilha-regiao-autonoma-dos-acores">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.addFeatures(features_reasprotegidasdosParquesNaturaisdeIlhaWFS_15);
var lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasprotegidasdosParquesNaturaisdeIlhaWFS_15, 
                style: style_reasprotegidasdosParquesNaturaisdeIlhaWFS_15,
                popuplayertitle: 'Protected areas of Island Natural Parks (WFS)',
                interactive: true,
                title: '<img src="styles/legend/reasprotegidasdosParquesNaturaisdeIlhaWFS_15.png" /> Protected areas of Island Natural Parks (WFS)'
            });
var format_ZECWFS_16 = new ol.format.GeoJSON();
var features_ZECWFS_16 = format_ZECWFS_16.readFeatures(json_ZECWFS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZECWFS_16 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/zonas-especiais-de-conservacao-zec-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_ZECWFS_16.addFeatures(features_ZECWFS_16);
var lyr_ZECWFS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZECWFS_16, 
                style: style_ZECWFS_16,
                popuplayertitle: 'Special Areas of Conservation - SAC (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ZECWFS_16.png" /> Special Areas of Conservation - SAC (WFS)'
            });
var format_ZPEWFS_17 = new ol.format.GeoJSON();
var features_ZPEWFS_17 = format_ZPEWFS_17.readFeatures(json_ZPEWFS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPEWFS_17 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/zonas-de-protecao-especial-zpe-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_ZPEWFS_17.addFeatures(features_ZPEWFS_17);
var lyr_ZPEWFS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPEWFS_17, 
                style: style_ZPEWFS_17,
                popuplayertitle: 'Special Protection Areas - SPA (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ZPEWFS_17.png" /> Special Protection Areas - SPA (WFS)'
            });
var format_ReservasdaBiosferaagregadoWFS_18 = new ol.format.GeoJSON();
var features_ReservasdaBiosferaagregadoWFS_18 = format_ReservasdaBiosferaagregadoWFS_18.readFeatures(json_ReservasdaBiosferaagregadoWFS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservasdaBiosferaagregadoWFS_18 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/reservas-da-biosfera-das-ilhas-do-corvo-graciosa-flores-e-sao-jorge-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_ReservasdaBiosferaagregadoWFS_18.addFeatures(features_ReservasdaBiosferaagregadoWFS_18);
var lyr_ReservasdaBiosferaagregadoWFS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservasdaBiosferaagregadoWFS_18, 
                style: style_ReservasdaBiosferaagregadoWFS_18,
                popuplayertitle: 'Biosphere reserves - combined (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ReservasdaBiosferaagregadoWFS_18.png" /> Biosphere reserves - combined (WFS)'
            });
var format_SICWFS_19 = new ol.format.GeoJSON();
var features_SICWFS_19 = format_SICWFS_19.readFeatures(json_SICWFS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SICWFS_19 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/pt/datasets/sitios-de-importancia-comunitaria-sic-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_SICWFS_19.addFeatures(features_SICWFS_19);
var lyr_SICWFS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SICWFS_19, 
                style: style_SICWFS_19,
                popuplayertitle: 'Sites of Community Importance - SCI (WFS)',
                interactive: true,
                title: '<img src="styles/legend/SICWFS_19.png" /> Sites of Community Importance - SCI (WFS)'
            });

var vectorTileUrl_CapacidadedeUsodoSolo_20 = 'layers/CapacidadedeUsodoSolo_20-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_CapacidadedeUsodoSolo_20 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_CapacidadedeUsodoSolo_20,
    attributions: '<a href="https://dados.gov.pt/pt/datasets/653b212150d1c818851529d3">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_CapacidadedeUsodoSolo_20 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_CapacidadedeUsodoSolo_20,
    sourceType: 'pbf',
    popuplayertitle: 'Land use capability',
    extent: ol.proj.transformExtent([-3481618.1682419996, 4429045.632859477, -2784468.529277741, 4826339.439470804], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_CapacidadedeUsodoSolo_20,
    title: 'Land use capability<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_0.png" /> Built-up areas<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_1.png" /> Lakes<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_2.png" /> Improved pasture<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_3.png" /> Improved pasture + arable use<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_4.png" /> Natural pasture/forest + reserve<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_5.png" /> Reserve + natural pasture/forest<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_6.png" /> Other classes - pending verification<br />' });


var vectorTileUrl_COSA2018Nvel3_21 = 'layers/COSA2018Nvel3_21-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_COSA2018Nvel3_21 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_COSA2018Nvel3_21,
    attributions: '<a href="https://sma.idea.azores.gov.pt/geonetwork/srv/api/records/5ed78544-4cbc-455a-802f-02470f292a24">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_COSA2018Nvel3_21 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_COSA2018Nvel3_21,
    sourceType: 'pbf',
    popuplayertitle: 'COS.A 2018 - Level 3',
    extent: ol.proj.transformExtent([-3481588.626275533, 4429021.214531562, -2784332.1962973666, 4826342.839416019], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_COSA2018Nvel3_21,
    title: 'COS.A 2018 - Level 3<br />\
    <img src="styles/legend/COSA2018Nvel3_21_0.png" /> 111 - Continuous urban fabric<br />\
    <img src="styles/legend/COSA2018Nvel3_21_1.png" /> 112 - Discontinuous urban fabric<br />\
    <img src="styles/legend/COSA2018Nvel3_21_2.png" /> 121 - Industrial, commercial and service areas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_3.png" /> 122 - Road networks and associated areas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_4.png" /> 123 - Port areas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_5.png" /> 124 - Airports and airfields<br />\
    <img src="styles/legend/COSA2018Nvel3_21_6.png" /> 131 - Mineral extraction sites<br />\
    <img src="styles/legend/COSA2018Nvel3_21_7.png" /> 132 - Waste management sites<br />\
    <img src="styles/legend/COSA2018Nvel3_21_8.png" /> 133 - Construction sites<br />\
    <img src="styles/legend/COSA2018Nvel3_21_9.png" /> 141 - Urban green spaces<br />\
    <img src="styles/legend/COSA2018Nvel3_21_10.png" /> 142 - Sports, cultural and leisure facilities<br />\
    <img src="styles/legend/COSA2018Nvel3_21_11.png" /> 211 - Arable land<br />\
    <img src="styles/legend/COSA2018Nvel3_21_12.png" /> 212 - Permanent crops<br />\
    <img src="styles/legend/COSA2018Nvel3_21_13.png" /> 213 - Meadows and pastures<br />\
    <img src="styles/legend/COSA2018Nvel3_21_14.png" /> 214 - Mixed agricultural areas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_15.png" /> 311 - Broadleaved forests<br />\
    <img src="styles/legend/COSA2018Nvel3_21_16.png" /> 312 - Coniferous forests<br />\
    <img src="styles/legend/COSA2018Nvel3_21_17.png" /> 313 - Natural forests<br />\
    <img src="styles/legend/COSA2018Nvel3_21_18.png" /> 314 - Riparian forests<br />\
    <img src="styles/legend/COSA2018Nvel3_21_19.png" /> 315 - Natural herbaceous vegetation<br />\
    <img src="styles/legend/COSA2018Nvel3_21_20.png" /> 316 - Shrubland<br />\
    <img src="styles/legend/COSA2018Nvel3_21_21.png" /> 321 - Sparse vegetation<br />\
    <img src="styles/legend/COSA2018Nvel3_21_22.png" /> 322 - Beaches<br />\
    <img src="styles/legend/COSA2018Nvel3_21_23.png" /> 323 - Semi-desert areas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_24.png" /> 324 - Bare rock<br />\
    <img src="styles/legend/COSA2018Nvel3_21_25.png" /> 411 - Wetlands<br />\
    <img src="styles/legend/COSA2018Nvel3_21_26.png" /> 511 - Watercourses<br />\
    <img src="styles/legend/COSA2018Nvel3_21_27.png" /> 512 - Lakes<br />\
    <img src="styles/legend/COSA2018Nvel3_21_28.png" /> 521 - Coastal lagoons<br />\
    <img src="styles/legend/COSA2018Nvel3_21_29.png" /> Other classes - under review<br />' });


var vectorTileUrl_InventrioFlorestal25N_22 = 'layers/InventrioFlorestal25N_22-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_InventrioFlorestal25N_22 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_InventrioFlorestal25N_22,
    attributions: '<a href="https://dados.gov.pt/pt/datasets/inventario-florestal-regiao-autonoma-dos-acores-raa">Direção Regional dos Recursos Florestais e Ordenamento Territorial / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_InventrioFlorestal25N_22 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_InventrioFlorestal25N_22,
    sourceType: 'pbf',
    popuplayertitle: 'Forest Inventory - 25N',
    extent: ol.proj.transformExtent([-3481045.87802438, 4774649.134333743, -3459983.9785919646, 4826580.433536017], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_InventrioFlorestal25N_22,
    title: 'Forest Inventory - 25N<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_0.png" /> Forest areas<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_1.png" /> Natural vegetation<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_2.png" /> Crops or pastures<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_3.png" /> Uncultivated land<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_4.png" /> Unproductive land<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_5.png" /> Water bodies<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_6.png" /> Road network<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_7.png" /> Built-up areas<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_8.png" /> Built-up areas<br />' });


var vectorTileUrl_InventrioFlorestal26N_23 = 'layers/InventrioFlorestal26N_23-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_InventrioFlorestal26N_23 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_InventrioFlorestal26N_23,
    attributions: '<a href="https://dados.gov.pt/pt/datasets/inventario-florestal-regiao-autonoma-dos-acores-raa">Direção Regional dos Recursos Florestais e Ordenamento Territorial / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_InventrioFlorestal26N_23 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_InventrioFlorestal26N_23,
    sourceType: 'pbf',
    popuplayertitle: 'Forest Inventory - 26N',
    extent: ol.proj.transformExtent([-3211256.435463098, 4429021.66196868, -2777892.0838845116, 4736256.054229063], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_InventrioFlorestal26N_23,
    title: 'Forest Inventory - 26N<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_0.png" /> Forest areas<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_1.png" /> Natural vegetation<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_2.png" /> Crops or pastures<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_3.png" /> Uncultivated land<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_4.png" /> Unproductive land<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_5.png" /> Water bodies<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_6.png" /> Road network<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_7.png" /> Built-up areas<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_8.png" /> Built-up areas<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_9.png" /> Areas to be assessed<br />' });

var format_Falhasgeolgicas_24 = new ol.format.GeoJSON();
var features_Falhasgeolgicas_24 = format_Falhasgeolgicas_24.readFeatures(json_Falhasgeolgicas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Falhasgeolgicas_24 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/falhas-geologicas-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Falhasgeolgicas_24.addFeatures(features_Falhasgeolgicas_24);
var lyr_Falhasgeolgicas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falhasgeolgicas_24, 
                style: style_Falhasgeolgicas_24,
                popuplayertitle: 'Geological faults',
                interactive: true,
                title: '<img src="styles/legend/Falhasgeolgicas_24.png" /> Geological faults'
            });
var format_Substratocosteiro_25 = new ol.format.GeoJSON();
var features_Substratocosteiro_25 = format_Substratocosteiro_25.readFeatures(json_Substratocosteiro_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Substratocosteiro_25 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/substrato-costeiro-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Substratocosteiro_25.addFeatures(features_Substratocosteiro_25);
var lyr_Substratocosteiro_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Substratocosteiro_25, 
                style: style_Substratocosteiro_25,
                popuplayertitle: 'Coastal substrate',
                interactive: true,
                title: '<img src="styles/legend/Substratocosteiro_25.png" /> Coastal substrate'
            });

var vectorTileUrl_Movimentosdevertentesuscetibilidade_26 = 'layers/Movimentosdevertentesuscetibilidade_26-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Movimentosdevertentesuscetibilidade_26 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_Movimentosdevertentesuscetibilidade_26,
    attributions: '<a href="https://dados.gov.pt/datasets/cartografia-de-riscos-naturais-suscetibilidade-a-ocorrencia-de-movimentos-de-vertente-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_Movimentosdevertentesuscetibilidade_26 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Movimentosdevertentesuscetibilidade_26,
    sourceType: 'pbf',
    popuplayertitle: 'Slope movement susceptibility',
    extent: ol.proj.transformExtent([-3480832.4986530743, 4429024.260030816, -2784450.88513845, 4826227.231796865], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Movimentosdevertentesuscetibilidade_26,
    title: '<img src="styles/legend/Movimentosdevertentesuscetibilidade_26.png" /> Slope movement susceptibility'
});

var format_reasdedesgaseificaodifusadeCO_27 = new ol.format.GeoJSON();
var features_reasdedesgaseificaodifusadeCO_27 = format_reasdedesgaseificaodifusadeCO_27.readFeatures(json_reasdedesgaseificaodifusadeCO_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdedesgaseificaodifusadeCO_27 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/cartografia-de-riscos-naturais-suscetibilidade-a-ocorrencia-de-emanacoes-gasosas-permanentes-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_reasdedesgaseificaodifusadeCO_27.addFeatures(features_reasdedesgaseificaodifusadeCO_27);
var lyr_reasdedesgaseificaodifusadeCO_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdedesgaseificaodifusadeCO_27, 
                style: style_reasdedesgaseificaodifusadeCO_27,
                popuplayertitle: 'Diffuse CO₂ degassing areas',
                interactive: true,
                title: '<img src="styles/legend/reasdedesgaseificaodifusadeCO_27.png" /> Diffuse CO₂ degassing areas'
            });
var format_Fumarolaseemissesdevapor_28 = new ol.format.GeoJSON();
var features_Fumarolaseemissesdevapor_28 = format_Fumarolaseemissesdevapor_28.readFeatures(json_Fumarolaseemissesdevapor_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fumarolaseemissesdevapor_28 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/cartografia-de-riscos-naturais-suscetibilidade-a-ocorrencia-de-emanacoes-gasosas-permanentes-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Fumarolaseemissesdevapor_28.addFeatures(features_Fumarolaseemissesdevapor_28);
var lyr_Fumarolaseemissesdevapor_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fumarolaseemissesdevapor_28, 
                style: style_Fumarolaseemissesdevapor_28,
                popuplayertitle: 'Fumaroles and steam emissions',
                interactive: true,
                title: '<img src="styles/legend/Fumarolaseemissesdevapor_28.png" /> Fumaroles and steam emissions'
            });
var format_Zonasameaadaspelomar_29 = new ol.format.GeoJSON();
var features_Zonasameaadaspelomar_29 = format_Zonasameaadaspelomar_29.readFeatures(json_Zonasameaadaspelomar_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasameaadaspelomar_29 = new ol.source.Vector({
    attributions: '<a href="https://dados.gov.pt/datasets/cartografia-de-riscos-naturais-zonas-ameacadas-pelo-mar-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>',
});
jsonSource_Zonasameaadaspelomar_29.addFeatures(features_Zonasameaadaspelomar_29);
var lyr_Zonasameaadaspelomar_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasameaadaspelomar_29, 
                style: style_Zonasameaadaspelomar_29,
                popuplayertitle: 'Areas threatened by the sea',
                interactive: true,
                title: '<img src="styles/legend/Zonasameaadaspelomar_29.png" /> Areas threatened by the sea'
            });

var vectorTileUrl_Galgamentoseinundaescosteirasrisco_30 = 'layers/Galgamentoseinundaescosteirasrisco_30-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Galgamentoseinundaescosteirasrisco_30 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 13,
    url: vectorTileUrl_Galgamentoseinundaescosteirasrisco_30,
    attributions: '<a href="https://dados.gov.pt/datasets/cartografia-de-riscos-naturais-areas-de-risco-de-galgamentos-e-ou-inundacoes-costeiras-regiao-autonoma-dos-acores-raa">Secretaria Regional do Ambiente e Ação Climática / Governo dos Açores — CC BY 4.0</a>'
});
var lyr_Galgamentoseinundaescosteirasrisco_30 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Galgamentoseinundaescosteirasrisco_30,
    sourceType: 'pbf',
    popuplayertitle: 'Coastal overtopping and flooding risk',
    extent: ol.proj.transformExtent([-3465246.1279795263, 4429147.67520177, -2784665.9588474426, 4826231.507371866], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Galgamentoseinundaescosteirasrisco_30,
    title: '<img src="styles/legend/Galgamentoseinundaescosteirasrisco_30.png" /> Coastal overtopping and flooding risk'
});

var group_guas = new ol.layer.Group({
                                layers: [lyr_Lagoas_2,lyr_Baciashidrogrficas_3,lyr_Hidrografia_4,lyr_Nascentesdeabastecimentopblico_5,lyr_Monitorizaoguassubterrneas_6,lyr_Monitorizaoguassuperficiais_7,lyr_Redehidrometeorolgica_8,lyr_Sistemasaquferos_9,],
                                fold: 'close',
                                title: 'Water'});
var group_Ecologiaeconservao = new ol.layer.Group({
                                layers: [lyr_BitoposCorine_10,lyr_Habitatsprotegidos20012006_11,lyr_Habitatsprotegidos20072012_12,lyr_Habitatsprotegidos20132018_13,lyr_StiosRamsarWFS_14,lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15,lyr_ZECWFS_16,lyr_ZPEWFS_17,lyr_ReservasdaBiosferaagregadoWFS_18,lyr_SICWFS_19,],
                                fold: 'close',
                                title: 'Ecology and Conservation'});
var group_Usoeocupaodosolo = new ol.layer.Group({
                                layers: [lyr_CapacidadedeUsodoSolo_20,lyr_COSA2018Nvel3_21,lyr_InventrioFlorestal25N_22,lyr_InventrioFlorestal26N_23,],
                                fold: 'close',
                                title: 'Land Use and Land Cover'});
var group_Geologiaeriscosnaturais = new ol.layer.Group({
                                layers: [lyr_Falhasgeolgicas_24,lyr_Substratocosteiro_25,lyr_Movimentosdevertentesuscetibilidade_26,lyr_reasdedesgaseificaodifusadeCO_27,lyr_Fumarolaseemissesdevapor_28,lyr_Zonasameaadaspelomar_29,lyr_Galgamentoseinundaescosteirasrisco_30,],
                                fold: 'close',
                                title: 'Geology and Natural Hazards'});

lyr_OpenStreetMap_0.setVisible(false);lyr_ImagemdesatliteSentinel2ESA2021_1.setVisible(true);lyr_Lagoas_2.setVisible(false);lyr_Baciashidrogrficas_3.setVisible(false);lyr_Hidrografia_4.setVisible(false);lyr_Nascentesdeabastecimentopblico_5.setVisible(false);lyr_Monitorizaoguassubterrneas_6.setVisible(false);lyr_Monitorizaoguassuperficiais_7.setVisible(false);lyr_Redehidrometeorolgica_8.setVisible(false);lyr_Sistemasaquferos_9.setVisible(false);lyr_BitoposCorine_10.setVisible(false);lyr_Habitatsprotegidos20012006_11.setVisible(false);lyr_Habitatsprotegidos20072012_12.setVisible(false);lyr_Habitatsprotegidos20132018_13.setVisible(false);lyr_StiosRamsarWFS_14.setVisible(false);lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.setVisible(false);lyr_ZECWFS_16.setVisible(true);lyr_ZPEWFS_17.setVisible(false);lyr_ReservasdaBiosferaagregadoWFS_18.setVisible(false);lyr_SICWFS_19.setVisible(false);lyr_CapacidadedeUsodoSolo_20.setVisible(false);lyr_COSA2018Nvel3_21.setVisible(false);lyr_InventrioFlorestal25N_22.setVisible(false);lyr_InventrioFlorestal26N_23.setVisible(false);lyr_Falhasgeolgicas_24.setVisible(false);lyr_Substratocosteiro_25.setVisible(false);lyr_Movimentosdevertentesuscetibilidade_26.setVisible(false);lyr_reasdedesgaseificaodifusadeCO_27.setVisible(false);lyr_Fumarolaseemissesdevapor_28.setVisible(false);lyr_Zonasameaadaspelomar_29.setVisible(false);lyr_Galgamentoseinundaescosteirasrisco_30.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_ImagemdesatliteSentinel2ESA2021_1,group_guas,group_Ecologiaeconservao,group_Usoeocupaodosolo,group_Geologiaeriscosnaturais];
lyr_Lagoas_2.set('fieldAliases', {'id_unico': 'id_unico', 'tema': 'tema', 'designacao': 'designacao', 'altitude': 'altitude', 'prof_max': 'prof_max', 'prof_med': 'prof_med', 'volume': 'volume', 'freguesia': 'freguesia', 'concelho': 'concelho', 'ilha': 'ilha', 'data_atualizacao': 'data_atualizacao', 'shape_area': 'shape_area', });
lyr_Baciashidrogrficas_3.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'designacao': 'designacao', 'cod_bacia': 'cod_bacia', 'compacidade': 'compacidade', 'comprimento_drenagem_km': 'comprimento_drenagem_km', 'densidade_drenagem': 'densidade_drenagem', 'freguesia': 'freguesia', 'concelho': 'concelho', 'ilha': 'ilha', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_Hidrografia_4.set('fieldAliases', {'id_unico': 'id_unico', 'tema': 'tema', 'designacao': 'designacao', 'cod_rib': 'cod_rib', 'ordem': 'ordem', 'cod_bacia': 'cod_bacia', 'freguesia': 'freguesia', 'concelho': 'concelho', 'ilha': 'ilha', });
lyr_Nascentesdeabastecimentopblico_5.set('fieldAliases', {'unique_id': 'unique_id', 'id_unico': 'id_unico', 'tema': 'tema', 'designacao': 'designacao', 'situacao': 'situacao', 'entidade_gestora': 'entidade_gestora', 'propriedade': 'propriedade', 'uso_solo': 'uso_solo', 'point_x': 'point_x', 'point_y': 'point_y', 'freguesia': 'freguesia', 'concelho': 'concelho', 'ilha': 'ilha', });
lyr_Monitorizaoguassubterrneas_6.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'designacao': 'designacao', 'igt': 'igt', 'tipologia': 'tipologia', 'tiporede': 'tiporede', 'localid': 'localid', 'ilha': 'ilha', 'beginlifes': 'beginlifes', });
lyr_Monitorizaoguassuperficiais_7.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'designacao': 'designacao', 'igt': 'igt', 'tipologia': 'tipologia', 'localid': 'localid', 'ilha': 'ilha', 'beginlifes': 'beginlifes', });
lyr_Redehidrometeorolgica_8.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'tipo': 'tipo', 'designacao': 'designacao', 'ent_responsavel': 'ent_responsavel', 'estado_atividade': 'estado_atividade', 'point_x': 'point_x', 'point_y': 'point_y', 'freguesia': 'freguesia', 'concelho': 'concelho', 'id': 'id', });
lyr_Sistemasaquferos_9.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'litologia': 'litologia', 'facies_quimicas': 'facies_quimicas', 'aquifero': 'aquifero', 'caudal_m_dia': 'caudal_m_dia', 'transmissividade_m2_dia': 'transmissividade_m2_dia', 'caudal_especifico_sm': 'caudal_especifico_sm', 'produtividade': 'produtividade', 'precipitacao_m3': 'precipitacao_m3', 'recarga_m3': 'recarga_m3', 'taxa_recarga': 'taxa_recarga', 'descarga_subterranea_m3': 'descarga_subterranea_m3', 'reservas_m': 'reservas_m', 'freguesia': 'freguesia', 'concelho': 'concelho', 'ilha': 'ilha', 'shape_area': 'shape_area', });
lyr_BitoposCorine_10.set('fieldAliases', {'description': 'description', 'gml_id': 'gml_id', 'referencehabitattypeid_href': 'referencehabitattypeid_href', 'referencehabitattypescheme_href': 'referencehabitattypescheme_href', 'referencehabitattypename': 'referencehabitattypename', 'localscheme': 'localscheme', 'localnamecode_href': 'localnamecode_href', 'localname': 'localname', 'qualifierlocalname': 'qualifierlocalname', 'localname_': 'localname_', });
lyr_Habitatsprotegidos20012006_11.set('fieldAliases', {'gml_id': 'gml_id', 'beginlifespanversion': 'beginlifespanversion', 'referencehabitattypeid_href': 'referencehabitattypeid_href', 'referencehabitattypescheme_href': 'referencehabitattypescheme_href', 'referencehabitattypename': 'referencehabitattypename', 'collectedfrom': 'collectedfrom', 'collectedto': 'collectedto', });
lyr_Habitatsprotegidos20072012_12.set('fieldAliases', {'gml_id': 'gml_id', 'beginlifespanversion': 'beginlifespanversion', 'referencehabitattypeid_href': 'referencehabitattypeid_href', 'referencehabitattypescheme_href': 'referencehabitattypescheme_href', 'referencehabitattypename': 'referencehabitattypename', 'collectedfrom': 'collectedfrom', 'collectedto': 'collectedto', });
lyr_Habitatsprotegidos20132018_13.set('fieldAliases', {'gml_id': 'gml_id', 'beginlifespanversion': 'beginlifespanversion', 'referencehabitattypeid_href': 'referencehabitattypeid_href', 'referencehabitattypescheme_href': 'referencehabitattypescheme_href', 'referencehabitattypename': 'referencehabitattypename', 'collectedfrom': 'collectedfrom', 'collectedto': 'collectedto', });
lyr_StiosRamsarWFS_14.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_ZECWFS_16.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_ZPEWFS_17.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_ReservasdaBiosferaagregadoWFS_18.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_SICWFS_19.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'legalfoundationdate': 'legalfoundationdate', 'characterstring': 'characterstring', 'date': 'date', 'datetype_nilreason': 'datetype_nilreason', 'url': 'url', 'role_nilreason': 'role_nilreason', 'designationscheme_href': 'designationscheme_href', 'designation_href': 'designation_href', 'percentageunderdesignation': 'percentageunderdesignation', 'language': 'language', 'nativeness_href': 'nativeness_href', 'namestatus_href': 'namestatus_href', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'transliterationscheme': 'transliterationscheme', 'grammaticalgender_href': 'grammaticalgender_href', 'grammaticalnumber_href': 'grammaticalnumber_href', 'siteprotectionclassification': 'siteprotectionclassification', });
lyr_CapacidadedeUsodoSolo_20.set('fieldAliases', {'name': 'name', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', });
lyr_COSA2018Nvel3_21.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'nivel': 'nivel', 'codigo': 'codigo', 'designacao': 'designacao', 'classe': 'classe', 'fonte': 'fonte', 'validfrom': 'validfrom', 'beginlifespanversion': 'beginlifespanversion', 'area_m2': 'area_m2', 'area_ha': 'area_ha', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_InventrioFlorestal25N_22.set('fieldAliases', {'qgs_fid': 'qgs_fid', 'USO_SOLO': 'USO_SOLO', });
lyr_InventrioFlorestal26N_23.set('fieldAliases', {'qgs_fid': 'qgs_fid', 'USO_SOLO': 'USO_SOLO', 'AREA': 'AREA', });
lyr_Falhasgeolgicas_24.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'faulttype_href': 'faulttype_href', });
lyr_Substratocosteiro_25.set('fieldAliases', {'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'naturalgeomorphologicfeaturetype_href': 'naturalgeomorphologicfeaturetype_href', });
lyr_Movimentosdevertentesuscetibilidade_26.set('fieldAliases', {'unique_id': 'unique_id', 'risco': 'risco', 'ilha': 'ilha', });
lyr_reasdedesgaseificaodifusadeCO_27.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'id_uvolcano': 'id_uvolcano', 'degass_field_name': 'degass_field_name', 'beginlifespan': 'beginlifespan', 'ilha': 'ilha', });
lyr_Fumarolaseemissesdevapor_28.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'fum_ref': 'fum_ref', 'fum_name': 'fum_name', 'fum_type': 'fum_type', 'site': 'site', 'fum_type_t': 'fum_type_t', 'beginlifespan': 'beginlifespan', 'ilha': 'ilha', });
lyr_Zonasameaadaspelomar_29.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'beginlifespan': 'beginlifespan', 'ilha': 'ilha', });
lyr_Galgamentoseinundaescosteirasrisco_30.set('fieldAliases', {'unique_id': 'unique_id', 'tema': 'tema', 'risco': 'risco', 'beginlifespan': 'beginlifespan', 'ilha': 'ilha', });
lyr_Lagoas_2.set('fieldImages', {'id_unico': '', 'tema': '', 'designacao': '', 'altitude': '', 'prof_max': '', 'prof_med': '', 'volume': '', 'freguesia': '', 'concelho': '', 'ilha': '', 'data_atualizacao': '', 'shape_area': '', });
lyr_Baciashidrogrficas_3.set('fieldImages', {'unique_id': '', 'tema': '', 'designacao': '', 'cod_bacia': '', 'compacidade': '', 'comprimento_drenagem_km': '', 'densidade_drenagem': '', 'freguesia': '', 'concelho': '', 'ilha': '', 'shape_length': '', 'shape_area': '', });
lyr_Hidrografia_4.set('fieldImages', {'id_unico': '', 'tema': '', 'designacao': '', 'cod_rib': '', 'ordem': '', 'cod_bacia': '', 'freguesia': '', 'concelho': '', 'ilha': '', });
lyr_Nascentesdeabastecimentopblico_5.set('fieldImages', {'unique_id': '', 'id_unico': '', 'tema': '', 'designacao': '', 'situacao': '', 'entidade_gestora': '', 'propriedade': '', 'uso_solo': '', 'point_x': '', 'point_y': '', 'freguesia': '', 'concelho': '', 'ilha': '', });
lyr_Monitorizaoguassubterrneas_6.set('fieldImages', {'unique_id': '', 'tema': '', 'designacao': '', 'igt': '', 'tipologia': '', 'tiporede': '', 'localid': '', 'ilha': '', 'beginlifes': '', });
lyr_Monitorizaoguassuperficiais_7.set('fieldImages', {'unique_id': '', 'tema': '', 'designacao': '', 'igt': '', 'tipologia': '', 'localid': '', 'ilha': '', 'beginlifes': '', });
lyr_Redehidrometeorolgica_8.set('fieldImages', {'unique_id': '', 'tema': '', 'tipo': '', 'designacao': '', 'ent_responsavel': '', 'estado_atividade': '', 'point_x': '', 'point_y': '', 'freguesia': '', 'concelho': '', 'id': '', });
lyr_Sistemasaquferos_9.set('fieldImages', {'unique_id': '', 'tema': '', 'litologia': '', 'facies_quimicas': '', 'aquifero': '', 'caudal_m_dia': '', 'transmissividade_m2_dia': '', 'caudal_especifico_sm': '', 'produtividade': '', 'precipitacao_m3': '', 'recarga_m3': '', 'taxa_recarga': '', 'descarga_subterranea_m3': '', 'reservas_m': '', 'freguesia': '', 'concelho': '', 'ilha': '', 'shape_area': '', });
lyr_BitoposCorine_10.set('fieldImages', {'description': '', 'gml_id': '', 'referencehabitattypeid_href': '', 'referencehabitattypescheme_href': '', 'referencehabitattypename': '', 'localscheme': '', 'localnamecode_href': '', 'localname': '', 'qualifierlocalname': '', 'localname_': '', });
lyr_Habitatsprotegidos20012006_11.set('fieldImages', {'gml_id': '', 'beginlifespanversion': '', 'referencehabitattypeid_href': '', 'referencehabitattypescheme_href': '', 'referencehabitattypename': '', 'collectedfrom': '', 'collectedto': '', });
lyr_Habitatsprotegidos20072012_12.set('fieldImages', {'gml_id': '', 'beginlifespanversion': '', 'referencehabitattypeid_href': '', 'referencehabitattypescheme_href': '', 'referencehabitattypename': '', 'collectedfrom': '', 'collectedto': '', });
lyr_Habitatsprotegidos20132018_13.set('fieldImages', {'gml_id': '', 'beginlifespanversion': '', 'referencehabitattypeid_href': '', 'referencehabitattypescheme_href': '', 'referencehabitattypename': '', 'collectedfrom': '', 'collectedto': '', });
lyr_StiosRamsarWFS_14.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_ZECWFS_16.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_ZPEWFS_17.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_ReservasdaBiosferaagregadoWFS_18.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_SICWFS_19.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'versionid': '', 'legalfoundationdate': '', 'characterstring': '', 'date': '', 'datetype_nilreason': '', 'url': '', 'role_nilreason': '', 'designationscheme_href': '', 'designation_href': '', 'percentageunderdesignation': '', 'language': '', 'nativeness_href': '', 'namestatus_href': '', 'sourceofname': '', 'pronunciation': '', 'text': '', 'script': '', 'transliterationscheme': '', 'grammaticalgender_href': '', 'grammaticalnumber_href': '', 'siteprotectionclassification': '', });
lyr_CapacidadedeUsodoSolo_20.set('fieldImages', {'name': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', });
lyr_COSA2018Nvel3_21.set('fieldImages', {'unique_id': 'TextEdit', 'tema': 'TextEdit', 'nivel': 'TextEdit', 'codigo': 'TextEdit', 'designacao': 'TextEdit', 'classe': 'TextEdit', 'fonte': 'TextEdit', 'validfrom': 'DateTime', 'beginlifespanversion': 'DateTime', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_InventrioFlorestal25N_22.set('fieldImages', {'qgs_fid': '', 'USO_SOLO': '', });
lyr_InventrioFlorestal26N_23.set('fieldImages', {'qgs_fid': '', 'USO_SOLO': '', 'AREA': '', });
lyr_Falhasgeolgicas_24.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'geologichistory': '', 'faulttype_href': '', });
lyr_Substratocosteiro_25.set('fieldImages', {'gml_id': '', 'localid': '', 'namespace': '', 'geologichistory': '', 'naturalgeomorphologicfeaturetype_href': '', });
lyr_Movimentosdevertentesuscetibilidade_26.set('fieldImages', {'unique_id': '', 'risco': '', 'ilha': '', });
lyr_reasdedesgaseificaodifusadeCO_27.set('fieldImages', {'unique_id': '', 'tema': '', 'id_uvolcano': '', 'degass_field_name': '', 'beginlifespan': '', 'ilha': '', });
lyr_Fumarolaseemissesdevapor_28.set('fieldImages', {'unique_id': '', 'tema': '', 'fum_ref': '', 'fum_name': '', 'fum_type': '', 'site': '', 'fum_type_t': '', 'beginlifespan': '', 'ilha': '', });
lyr_Zonasameaadaspelomar_29.set('fieldImages', {'unique_id': '', 'tema': '', 'beginlifespan': '', 'ilha': '', });
lyr_Galgamentoseinundaescosteirasrisco_30.set('fieldImages', {'unique_id': '', 'tema': '', 'risco': '', 'beginlifespan': '', 'ilha': '', });
lyr_Lagoas_2.set('fieldLabels', {'id_unico': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'altitude': 'hidden field', 'prof_max': 'hidden field', 'prof_med': 'hidden field', 'volume': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'ilha': 'inline label - visible with data', 'data_atualizacao': 'hidden field', 'shape_area': 'hidden field', });
lyr_Baciashidrogrficas_3.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'cod_bacia': 'hidden field', 'compacidade': 'hidden field', 'comprimento_drenagem_km': 'hidden field', 'densidade_drenagem': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'ilha': 'inline label - visible with data', 'shape_length': 'hidden field', 'shape_area': 'hidden field', });
lyr_Hidrografia_4.set('fieldLabels', {'id_unico': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'cod_rib': 'hidden field', 'ordem': 'hidden field', 'cod_bacia': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'ilha': 'inline label - visible with data', });
lyr_Nascentesdeabastecimentopblico_5.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'id_unico': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'situacao': 'hidden field', 'entidade_gestora': 'hidden field', 'propriedade': 'hidden field', 'uso_solo': 'inline label - visible with data', 'point_x': 'hidden field', 'point_y': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'ilha': 'inline label - visible with data', });
lyr_Monitorizaoguassubterrneas_6.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'igt': 'hidden field', 'tipologia': 'hidden field', 'tiporede': 'hidden field', 'localid': 'inline label - visible with data', 'ilha': 'inline label - visible with data', 'beginlifes': 'hidden field', });
lyr_Monitorizaoguassuperficiais_7.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'igt': 'hidden field', 'tipologia': 'hidden field', 'localid': 'inline label - visible with data', 'ilha': 'inline label - visible with data', 'beginlifes': 'hidden field', });
lyr_Redehidrometeorolgica_8.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'tipo': 'hidden field', 'designacao': 'header label - visible with data', 'ent_responsavel': 'hidden field', 'estado_atividade': 'hidden field', 'point_x': 'hidden field', 'point_y': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'id': 'hidden field', });
lyr_Sistemasaquferos_9.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'litologia': 'hidden field', 'facies_quimicas': 'hidden field', 'aquifero': 'hidden field', 'caudal_m_dia': 'hidden field', 'transmissividade_m2_dia': 'hidden field', 'caudal_especifico_sm': 'hidden field', 'produtividade': 'hidden field', 'precipitacao_m3': 'hidden field', 'recarga_m3': 'hidden field', 'taxa_recarga': 'hidden field', 'descarga_subterranea_m3': 'hidden field', 'reservas_m': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'ilha': 'header label - visible with data', 'shape_area': 'hidden field', });
lyr_BitoposCorine_10.set('fieldLabels', {'description': 'inline label - visible with data', 'gml_id': 'inline label - visible with data', 'referencehabitattypeid_href': 'hidden field', 'referencehabitattypescheme_href': 'hidden field', 'referencehabitattypename': 'hidden field', 'localscheme': 'hidden field', 'localnamecode_href': 'hidden field', 'localname': 'header label - visible with data', 'qualifierlocalname': 'hidden field', 'localname_': 'hidden field', });
lyr_Habitatsprotegidos20012006_11.set('fieldLabels', {'gml_id': 'header label - visible with data', 'beginlifespanversion': 'hidden field', 'referencehabitattypeid_href': 'hidden field', 'referencehabitattypescheme_href': 'hidden field', 'referencehabitattypename': 'hidden field', 'collectedfrom': 'hidden field', 'collectedto': 'hidden field', });
lyr_Habitatsprotegidos20072012_12.set('fieldLabels', {'gml_id': 'header label - visible with data', 'beginlifespanversion': 'hidden field', 'referencehabitattypeid_href': 'hidden field', 'referencehabitattypescheme_href': 'hidden field', 'referencehabitattypename': 'hidden field', 'collectedfrom': 'hidden field', 'collectedto': 'hidden field', });
lyr_Habitatsprotegidos20132018_13.set('fieldLabels', {'gml_id': 'header label - visible with data', 'beginlifespanversion': 'hidden field', 'referencehabitattypeid_href': 'hidden field', 'referencehabitattypescheme_href': 'hidden field', 'referencehabitattypename': 'hidden field', 'collectedfrom': 'hidden field', 'collectedto': 'hidden field', });
lyr_StiosRamsarWFS_14.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_ZECWFS_16.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_ZPEWFS_17.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_ReservasdaBiosferaagregadoWFS_18.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_SICWFS_19.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'versionid': 'hidden field', 'legalfoundationdate': 'hidden field', 'characterstring': 'hidden field', 'date': 'hidden field', 'datetype_nilreason': 'hidden field', 'url': 'hidden field', 'role_nilreason': 'hidden field', 'designationscheme_href': 'hidden field', 'designation_href': 'hidden field', 'percentageunderdesignation': 'hidden field', 'language': 'hidden field', 'nativeness_href': 'hidden field', 'namestatus_href': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'header label - visible with data', 'script': 'hidden field', 'transliterationscheme': 'hidden field', 'grammaticalgender_href': 'hidden field', 'grammaticalnumber_href': 'hidden field', 'siteprotectionclassification': 'hidden field', });
lyr_CapacidadedeUsodoSolo_20.set('fieldLabels', {'name': 'header label - visible with data', 'gml_id': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', });
lyr_COSA2018Nvel3_21.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'nivel': 'hidden field', 'codigo': 'inline label - visible with data', 'designacao': 'header label - visible with data', 'classe': 'inline label - visible with data', 'fonte': 'hidden field', 'validfrom': 'hidden field', 'beginlifespanversion': 'hidden field', 'area_m2': 'hidden field', 'area_ha': 'hidden field', 'shape_length': 'hidden field', 'shape_area': 'hidden field', });
lyr_InventrioFlorestal25N_22.set('fieldLabels', {'qgs_fid': 'hidden field', 'USO_SOLO': 'header label - visible with data', });
lyr_InventrioFlorestal26N_23.set('fieldLabels', {'qgs_fid': 'hidden field', 'USO_SOLO': 'header label - visible with data', 'AREA': 'hidden field', });
lyr_Falhasgeolgicas_24.set('fieldLabels', {'gml_id': 'header label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'geologichistory': 'hidden field', 'faulttype_href': 'hidden field', });
lyr_Substratocosteiro_25.set('fieldLabels', {'gml_id': 'header label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'hidden field', 'geologichistory': 'hidden field', 'naturalgeomorphologicfeaturetype_href': 'hidden field', });
lyr_Movimentosdevertentesuscetibilidade_26.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'risco': 'header label - visible with data', 'ilha': 'inline label - visible with data', });
lyr_reasdedesgaseificaodifusadeCO_27.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'id_uvolcano': 'hidden field', 'degass_field_name': 'hidden field', 'beginlifespan': 'hidden field', 'ilha': 'header label - visible with data', });
lyr_Fumarolaseemissesdevapor_28.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'fum_ref': 'hidden field', 'fum_name': 'hidden field', 'fum_type': 'hidden field', 'site': 'hidden field', 'fum_type_t': 'hidden field', 'beginlifespan': 'hidden field', 'ilha': 'header label - visible with data', });
lyr_Zonasameaadaspelomar_29.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'beginlifespan': 'hidden field', 'ilha': 'header label - visible with data', });
lyr_Galgamentoseinundaescosteirasrisco_30.set('fieldLabels', {'unique_id': 'inline label - visible with data', 'tema': 'inline label - visible with data', 'risco': 'header label - visible with data', 'beginlifespan': 'hidden field', 'ilha': 'inline label - visible with data', });
lyr_Galgamentoseinundaescosteirasrisco_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
// GEOATLANT_BASES_INDEPENDENTES_INICIO
(function () {
    var osm = null;
    var sentinel = null;

    function procurar(camada) {
        var nome = String(camada.get('title') || camada.get('name') || '')
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        if (nome.includes('openstreetmap')) osm = camada;
        if (nome.includes('sentinel-2')) sentinel = camada;

        if (typeof camada.getLayers === 'function') {
            camada.getLayers().getArray().forEach(procurar);
        }
    }

    layersList.forEach(procurar);

    if (!osm || !sentinel) {
        console.warn('GeoAtlant: não encontrei ambas as camadas de imagem.', {
            osm: osm, sentinel: sentinel
        });
        return;
    }

    // Tipo overlay: duas caixas independentes na lista de camadas.
    osm.set('type', 'overlay');
    sentinel.set('type', 'overlay');

    // As imagens ficam por baixo das camadas temáticas.
    osm.setZIndex(-1000);
    sentinel.setZIndex(-999);

    osm.setOpacity(1);
    sentinel.setOpacity(0.55);

    osm.setVisible(true);
    sentinel.setVisible(true);
})();
// GEOATLANT_BASES_INDEPENDENTES_FIM


// GEOATLANT_CREDITOS_E_CAMADAS_INICIAIS
// Os créditos completos estão em fontes.html; a indicação OSM permanece no mapa.
(function () {
    function prepararCamada(camada) {
        if (!camada) return;

        if (typeof camada.getLayers === "function") {
            camada.getLayers().forEach(prepararCamada);
        }

        if (typeof camada.setVisible === "function") {
            camada.setVisible(true);
        }

        if (typeof camada.getSource === "function") {
            var fonte = camada.getSource();
            if (fonte && typeof fonte.setAttributions === "function") {
                fonte.setAttributions([]);
            }
        }
    }

    layersList.forEach(prepararCamada);
})();
