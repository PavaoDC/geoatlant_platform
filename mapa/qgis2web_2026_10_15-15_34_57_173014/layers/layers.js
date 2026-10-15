var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ReservasdaBiosfera_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wssig3.azores.gov.pt/geoserver/ps/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSitesBiosphereReserve",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Reservas da Biosfera',
                            popuplayertitle: 'Reservas da Biosfera',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ReservasdaBiosfera_1, 0]);
var lyr_RedeNatura2000ZECZPE_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wssig3.azores.gov.pt/geoserver/ps/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSitesNatura2000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Rede Natura 2000 (ZEC/ZPE)',
                            popuplayertitle: 'Rede Natura 2000 (ZEC/ZPE)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RedeNatura2000ZECZPE_2, 0]);
var lyr_reasProtegidasINSPIRE_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wssig3.azores.gov.pt/geoserver/ps/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSitesNatureConservation",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Áreas Protegidas (INSPIRE)',
                            popuplayertitle: 'Áreas Protegidas (INSPIRE)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reasProtegidasINSPIRE_3, 0]);
var lyr_StiosRamsar_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wssig3.azores.gov.pt/geoserver/ps/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSitesRamsarSites",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sítios Ramsar',
                            popuplayertitle: 'Sítios Ramsar',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StiosRamsar_4, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_ReservasdaBiosfera_1.setVisible(true);lyr_RedeNatura2000ZECZPE_2.setVisible(true);lyr_reasProtegidasINSPIRE_3.setVisible(true);lyr_StiosRamsar_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ReservasdaBiosfera_1,lyr_RedeNatura2000ZECZPE_2,lyr_reasProtegidasINSPIRE_3,lyr_StiosRamsar_4];
