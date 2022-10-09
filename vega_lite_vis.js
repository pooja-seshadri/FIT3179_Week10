var vg_1 = "chocolate_map.vg.json";
vegaEmbed("#bean_origin_map", vg_1).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "cocoa_rating_chart.vg.json";
vegaEmbed("#scatter_plot", vg_2).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
