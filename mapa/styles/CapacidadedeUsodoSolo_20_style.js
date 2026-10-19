var size = 0;
var placement = 'point';
function categories_CapacidadedeUsodoSolo_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'AS (Áreas sociais)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(180,105,105,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'LAG (Lagoas)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(80,155,215,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'V (Pastagem melhorada)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(190,215,110,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'V+III (Pastagem melhorada + Uso arável ocasional)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(224,195,105,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'VI+VII (Pastagem natural e/ou floresta + Reserva natural)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(95,160,100,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'VII+VI (Reserva natural + Pastagem natural e/ou floresta)':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(65,125,90,0.6666666666666666)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,90,90,0.6274509803921569)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(175,175,175,0.5882352941176471)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_CapacidadedeUsodoSolo_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("name");
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
    
    var style = categories_CapacidadedeUsodoSolo_20(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
