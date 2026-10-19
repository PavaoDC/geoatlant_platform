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
                            title: 'Imagem de satélite - Sentinel-2 (ESA, 2021)',
                            popuplayertitle: 'Imagem de satélite - Sentinel-2 (ESA, 2021)',
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
                popuplayertitle: 'Lagoas',
                interactive: true,
                title: '<img src="styles/legend/Lagoas_2.png" /> Lagoas'
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
    popuplayertitle: 'Bacias hidrográficas',
    extent: ol.proj.transformExtent([-3480828.533452812, 4429024.2238246, -2784454.3805704615, 4826231.643426077], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Baciashidrogrficas_3,
    title: '<img src="styles/legend/Baciashidrogrficas_3.png" /> Bacias hidrográficas'
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
    popuplayertitle: 'Hidrografia',
    extent: ol.proj.transformExtent([-3480356.508755586, 4429308.670621186, -2784631.3006371786, 4825608.2798649045], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Hidrografia_4,
    title: '<img src="styles/legend/Hidrografia_4.png" /> Hidrografia'
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
                popuplayertitle: 'Nascentes de abastecimento público',
                interactive: true,
                title: '<img src="styles/legend/Nascentesdeabastecimentopblico_5.png" /> Nascentes de abastecimento público'
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
                popuplayertitle: 'Monitorização - águas subterrâneas',
                interactive: true,
                title: '<img src="styles/legend/Monitorizaoguassubterrneas_6.png" /> Monitorização - águas subterrâneas'
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
                popuplayertitle: 'Monitorização - águas superficiais',
                interactive: true,
                title: '<img src="styles/legend/Monitorizaoguassuperficiais_7.png" /> Monitorização - águas superficiais'
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
                popuplayertitle: 'Rede hidrometeorológica',
                interactive: true,
                title: '<img src="styles/legend/Redehidrometeorolgica_8.png" /> Rede hidrometeorológica'
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
                popuplayertitle: 'Sistemas aquíferos',
                interactive: true,
                title: '<img src="styles/legend/Sistemasaquferos_9.png" /> Sistemas aquíferos'
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
                popuplayertitle: 'Biótopos Corine',
                interactive: true,
                title: '<img src="styles/legend/BitoposCorine_10.png" /> Biótopos Corine'
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
    popuplayertitle: 'Habitats protegidos - 2001 - 2006',
    extent: ol.proj.transformExtent([-3958904.1140335603, 3986295.2283204147, -2325145.853493121, 5296040.638944624], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Habitatsprotegidos20012006_11,
    title: '<img src="styles/legend/Habitatsprotegidos20012006_11.png" /> Habitats protegidos - 2001 - 2006'
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
                popuplayertitle: 'Habitats protegidos - 2007 - 2012',
                interactive: true,
                title: '<img src="styles/legend/Habitatsprotegidos20072012_12.png" /> Habitats protegidos - 2007 - 2012'
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
                popuplayertitle: 'Habitats protegidos - 2013 - 2018',
                interactive: true,
                title: '<img src="styles/legend/Habitatsprotegidos20132018_13.png" /> Habitats protegidos - 2013 - 2018'
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
                popuplayertitle: 'Sítios Ramsar (WFS)',
                interactive: true,
                title: '<img src="styles/legend/StiosRamsarWFS_14.png" /> Sítios Ramsar (WFS)'
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
                popuplayertitle: 'Áreas protegidas dos Parques Naturais de Ilha (WFS)',
                interactive: true,
                title: '<img src="styles/legend/reasprotegidasdosParquesNaturaisdeIlhaWFS_15.png" /> Áreas protegidas dos Parques Naturais de Ilha (WFS)'
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
                popuplayertitle: 'ZEC (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ZECWFS_16.png" /> ZEC (WFS)'
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
                popuplayertitle: 'ZPE (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ZPEWFS_17.png" /> ZPE (WFS)'
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
                popuplayertitle: 'Reservas da Biosfera - agregado (WFS)',
                interactive: true,
                title: '<img src="styles/legend/ReservasdaBiosferaagregadoWFS_18.png" /> Reservas da Biosfera - agregado (WFS)'
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
                popuplayertitle: 'SIC (WFS)',
                interactive: true,
                title: '<img src="styles/legend/SICWFS_19.png" /> SIC (WFS)'
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
    popuplayertitle: 'Capacidade de Uso do Solo',
    extent: ol.proj.transformExtent([-3481618.1682419996, 4429045.632859477, -2784468.529277741, 4826339.439470804], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_CapacidadedeUsodoSolo_20,
    title: 'Capacidade de Uso do Solo<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_0.png" /> Áreas sociais<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_1.png" /> Lagoas<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_2.png" /> Pastagem melhorada<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_3.png" /> Pastagem melhorada + uso arável<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_4.png" /> Pastagem natural/floresta + reserva<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_5.png" /> Reserva + pastagem natural/floresta<br />\
    <img src="styles/legend/CapacidadedeUsodoSolo_20_6.png" /> Outras classes - por confirmar<br />' });


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
    popuplayertitle: 'COS.A 2018 - Nível 3',
    extent: ol.proj.transformExtent([-3481588.626275533, 4429021.214531562, -2784332.1962973666, 4826342.839416019], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_COSA2018Nvel3_21,
    title: 'COS.A 2018 - Nível 3<br />\
    <img src="styles/legend/COSA2018Nvel3_21_0.png" /> 111 - Tecido urbano contínuo<br />\
    <img src="styles/legend/COSA2018Nvel3_21_1.png" /> 112 - Tecido urbano descontínuo<br />\
    <img src="styles/legend/COSA2018Nvel3_21_2.png" /> 121 - Indústria, comércio e equipamentos<br />\
    <img src="styles/legend/COSA2018Nvel3_21_3.png" /> 122 - Redes viárias e espaços associados<br />\
    <img src="styles/legend/COSA2018Nvel3_21_4.png" /> 123 - Áreas portuárias<br />\
    <img src="styles/legend/COSA2018Nvel3_21_5.png" /> 124 - Aeroportos e aeródromos<br />\
    <img src="styles/legend/COSA2018Nvel3_21_6.png" /> 131 - Extração de massas minerais<br />\
    <img src="styles/legend/COSA2018Nvel3_21_7.png" /> 132 - Gestão de resíduos<br />\
    <img src="styles/legend/COSA2018Nvel3_21_8.png" /> 133 - Áreas em construção<br />\
    <img src="styles/legend/COSA2018Nvel3_21_9.png" /> 141 - Espaços verdes urbanos<br />\
    <img src="styles/legend/COSA2018Nvel3_21_10.png" /> 142 - Equipamentos de desporto, cultura e lazer<br />\
    <img src="styles/legend/COSA2018Nvel3_21_11.png" /> 211 - Terras aráveis<br />\
    <img src="styles/legend/COSA2018Nvel3_21_12.png" /> 212 - Culturas permanentes<br />\
    <img src="styles/legend/COSA2018Nvel3_21_13.png" /> 213 - Prados e pastagens<br />\
    <img src="styles/legend/COSA2018Nvel3_21_14.png" /> 214 - Áreas agrícolas heterogéneas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_15.png" /> 311 - Florestas de folhosas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_16.png" /> 312 - Florestas de resinosas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_17.png" /> 313 - Florestas naturais<br />\
    <img src="styles/legend/COSA2018Nvel3_21_18.png" /> 314 - Galerias ripícolas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_19.png" /> 315 - Vegetação herbácea natural<br />\
    <img src="styles/legend/COSA2018Nvel3_21_20.png" /> 316 - Matos<br />\
    <img src="styles/legend/COSA2018Nvel3_21_21.png" /> 321 - Vegetação esparsa<br />\
    <img src="styles/legend/COSA2018Nvel3_21_22.png" /> 322 - Praias<br />\
    <img src="styles/legend/COSA2018Nvel3_21_23.png" /> 323 - Áreas semidesérticas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_24.png" /> 324 - Rocha nua<br />\
    <img src="styles/legend/COSA2018Nvel3_21_25.png" /> 411 - Zonas apauladas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_26.png" /> 511 - Cursos de água<br />\
    <img src="styles/legend/COSA2018Nvel3_21_27.png" /> 512 - Lagoas<br />\
    <img src="styles/legend/COSA2018Nvel3_21_28.png" /> 521 - Lagoas costeiras<br />\
    <img src="styles/legend/COSA2018Nvel3_21_29.png" /> Outras classes - verificar<br />' });


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
    popuplayertitle: 'Inventário Florestal - 25N',
    extent: ol.proj.transformExtent([-3481045.87802438, 4774649.134333743, -3459983.9785919646, 4826580.433536017], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_InventrioFlorestal25N_22,
    title: 'Inventário Florestal - 25N<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_0.png" /> Áreas florestais<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_1.png" /> Vegetação natural<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_2.png" /> Culturas agrícolas ou pastagens<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_3.png" /> Inculto<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_4.png" /> Improdutivo<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_5.png" /> Planos de água<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_6.png" /> Rede viária<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_7.png" /> Agregados urbanos<br />\
    <img src="styles/legend/InventrioFlorestal25N_22_8.png" /> Áreas sociais<br />' });


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
    popuplayertitle: 'Inventário Florestal - 26N',
    extent: ol.proj.transformExtent([-3211256.435463098, 4429021.66196868, -2777892.0838845116, 4736256.054229063], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_InventrioFlorestal26N_23,
    title: 'Inventário Florestal - 26N<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_0.png" /> Áreas florestais<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_1.png" /> Vegetação natural<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_2.png" /> Culturas agrícolas ou pastagens<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_3.png" /> Inculto<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_4.png" /> Improdutivo<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_5.png" /> Planos de água<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_6.png" /> Rede viária<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_7.png" /> Agregados urbanos<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_8.png" /> Áreas sociais<br />\
    <img src="styles/legend/InventrioFlorestal26N_23_9.png" /> Áreas a apurar<br />' });

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
                popuplayertitle: 'Falhas geológicas',
                interactive: true,
                title: '<img src="styles/legend/Falhasgeolgicas_24.png" /> Falhas geológicas'
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
                popuplayertitle: 'Substrato costeiro',
                interactive: true,
                title: '<img src="styles/legend/Substratocosteiro_25.png" /> Substrato costeiro'
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
    popuplayertitle: 'Movimentos de vertente - suscetibilidade',
    extent: ol.proj.transformExtent([-3480832.4986530743, 4429024.260030816, -2784450.88513845, 4826227.231796865], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Movimentosdevertentesuscetibilidade_26,
    title: '<img src="styles/legend/Movimentosdevertentesuscetibilidade_26.png" /> Movimentos de vertente - suscetibilidade'
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
                popuplayertitle: 'Áreas de desgaseificação difusa de CO₂',
                interactive: true,
                title: '<img src="styles/legend/reasdedesgaseificaodifusadeCO_27.png" /> Áreas de desgaseificação difusa de CO₂'
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
                popuplayertitle: 'Fumarolas e emissões de vapor',
                interactive: true,
                title: '<img src="styles/legend/Fumarolaseemissesdevapor_28.png" /> Fumarolas e emissões de vapor'
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
                popuplayertitle: 'Zonas ameaçadas pelo mar',
                interactive: true,
                title: '<img src="styles/legend/Zonasameaadaspelomar_29.png" /> Zonas ameaçadas pelo mar'
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
    popuplayertitle: 'Galgamentos e inundações costeiras - risco',
    extent: ol.proj.transformExtent([-3465246.1279795263, 4429147.67520177, -2784665.9588474426, 4826231.507371866], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Galgamentoseinundaescosteirasrisco_30,
    title: '<img src="styles/legend/Galgamentoseinundaescosteirasrisco_30.png" /> Galgamentos e inundações costeiras - risco'
});

var group_guas = new ol.layer.Group({
                                layers: [lyr_Lagoas_2,lyr_Baciashidrogrficas_3,lyr_Hidrografia_4,lyr_Nascentesdeabastecimentopblico_5,lyr_Monitorizaoguassubterrneas_6,lyr_Monitorizaoguassuperficiais_7,lyr_Redehidrometeorolgica_8,lyr_Sistemasaquferos_9,],
                                fold: 'close',
                                title: 'Águas'});
var group_Ecologiaeconservao = new ol.layer.Group({
                                layers: [lyr_BitoposCorine_10,lyr_Habitatsprotegidos20012006_11,lyr_Habitatsprotegidos20072012_12,lyr_Habitatsprotegidos20132018_13,lyr_StiosRamsarWFS_14,lyr_reasprotegidasdosParquesNaturaisdeIlhaWFS_15,lyr_ZECWFS_16,lyr_ZPEWFS_17,lyr_ReservasdaBiosferaagregadoWFS_18,lyr_SICWFS_19,],
                                fold: 'close',
                                title: 'Ecologia e conservação'});
var group_Usoeocupaodosolo = new ol.layer.Group({
                                layers: [lyr_CapacidadedeUsodoSolo_20,lyr_COSA2018Nvel3_21,lyr_InventrioFlorestal25N_22,lyr_InventrioFlorestal26N_23,],
                                fold: 'close',
                                title: 'Uso e ocupação do solo'});
var group_Geologiaeriscosnaturais = new ol.layer.Group({
                                layers: [lyr_Falhasgeolgicas_24,lyr_Substratocosteiro_25,lyr_Movimentosdevertentesuscetibilidade_26,lyr_reasdedesgaseificaodifusadeCO_27,lyr_Fumarolaseemissesdevapor_28,lyr_Zonasameaadaspelomar_29,lyr_Galgamentoseinundaescosteirasrisco_30,],
                                fold: 'close',
                                title: 'Geologia e riscos naturais'});

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
