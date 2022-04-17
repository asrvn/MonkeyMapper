/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");
polygonSeries.exclude = ["AQ"];

// Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 8;
circle.fill = am4core.color("#e03e96");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 3;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
  "latitude": 37.774929,
  "longitude": -122.419418,
  "title": "San Francisco"
}, {
  "latitude": -33.868820,
  "longitude": 151.209290,
  "title": "Sydney"
}];

// Add line series
var lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.strokeWidth = 4;
lineSeries.mapLines.template.stroke = am4core.color("#e03e96");
lineSeries.data = [{
  "multiGeoLine": [
    [
      { "latitude":37.774929, "longitude": -122.419418 },
      { "latitude":-33.868820, "longitude": 151.209290 }
    ]
  ]
}];

lineSeries.mapLines.template.precision = 1000;