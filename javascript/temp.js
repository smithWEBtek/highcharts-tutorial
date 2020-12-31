$(document).ready(function () {
  console.log("temp.js loaded ...")
  
  //Configure the title of the chart.
  let title = {
    text: 'Monthly Average Temperature'   
  };

  //Configure the subtitle of the chart.
  let subtitle = {
    text: 'Source: WorldClimate.com'
  };
  
  //Configure the ticker to be displayed on the X-Axis.
  let xAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
    ,'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  
  //Configure the title, plot lines to be displayed on the Y-Axis.
  let yAxis = {
    title: {
      text: 'Temperature (\xB0C)'
    },
    plotLines: [{
      value: 15,
      width: 120,
      color: 'rgba(4, 67, 37, 0.132)'
    }]
  };  
  
  // puts the Y value on the chart as a data label
  var plotOptions = {
    line: {
       dataLabels: {
          enabled: true
       },   
       // fancy light up hover with mouse
       enableMouseTracking: true
    }
 };

  //Configure the tooltip. Put suffix to be added after value (y-axis).
  let tooltip = {
    valueSuffix: '\xB0C'
  }
  
  //Configure the legend to be displayed on the right side of the chart along with other properties.
  let legend = {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'middle',
    borderWidth: 0
  };
  
  //Configure the data to be displayed on the chart. 
  //Series is an array where each element of this array represents a single line on the chart.
  let series = [
    {
      name: 'Manchester',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, 
    {
      name: 'Boston',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, 
    {
      name: 'Los Angeles',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, 
    {
      name: 'Atlanta',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }
  ];
  
  //Combine all the configurations.
  let json = {};
  
  json.title = title;
  json.subtitle = subtitle;
  json.xAxis = xAxis;
  json.yAxis = yAxis;
  json.plotOptions = plotOptions;
  json.tooltip = tooltip;
  json.legend = legend;
  json.series = series;

  Highcharts.chart('temp', json)
});