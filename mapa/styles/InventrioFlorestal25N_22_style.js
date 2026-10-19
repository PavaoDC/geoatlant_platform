var size = 0;
var placement = 'point';
function categories_InventrioFlorestal25N_22(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Áreas florestais':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(40,118,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Vegetação natural':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(131,173,112,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Culturas agrícolas ou pastagens':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(216,198,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Inculto':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(166,139,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Improdutivo':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(169,169,169,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Planos de água':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(77,157,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Rede viária':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(102,107,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Agregados urbanos':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(196,99,102,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Áreas sociais':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.45599999999999996}),fill: new ol.style.Fill({color: 'rgba(227,155,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_InventrioFlorestal25N_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("USO_SOLO");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_InventrioFlorestal25N_22(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
