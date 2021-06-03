/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Create a plot (Line Chart)*/
	$.jqplot('chartdiv01',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]],{
		title:'Line Chart',
		axes:{yaxis:{min:-10, max:240}},
		series:[{color:'#5FAB78'}]
	});
	
	/*Create a plot (Line Chart JSON)*/
	var ajaxDataRenderer = function(url, plot, options) {
		var ret = null;
		$.ajax({
			async: false,
			url: url,
			dataType:"json",
			success: function(data) {
				ret = data;
			}
		});
		return ret;
	};
	
	var jsonurl = "./jsondata.txt";
	
	var plot2 = $.jqplot('chartdiv02', jsonurl,{
		title: "Line Chart JSON",
		animate: true,
		highlighter: { show: true },
        seriesDefaults: {
            shadowAlpha: 0.1,
            shadowDepth: 2,
            fillToZero: true,
			rendererOptions: {
                smooth: true
            }
        },
		dataRenderer: ajaxDataRenderer,
		dataRendererOptions: {
			unusedOptionalUrl: jsonurl
		}
	});
	
	/*Create a plot (Barchart)*/
	var line1 = [['Nissan', 4],['Porche', 6],['Acura', 2],['Aston Martin', 5],['Rolls Royce', 6]];

	$('#chartdiv03').jqplot([line1], {
		title:'Bar Chart',
		animate: true,
		seriesColors:['#85802b', '#00749F', '#73C774', '#C7754C', '#17BDB8'],
		seriesDefaults:{
			renderer:$.jqplot.BarRenderer,
			rendererOptions: {
				varyBarColor: true
			}
		},
		axes:{
			xaxis:{
				renderer: $.jqplot.CategoryAxisRenderer
			}
		}
	});
	
	/*Create a plot (Piechart)*/
	var plot3 = $.jqplot('chartdiv04', [[['Sony',7], ['Samsumg',13.3], ['LG',14.7], ['Vizio',5.2], ['Insignia', 1.2]]], {
		title:'Pie Chart',
		seriesDefaults:{
			shadow: false,
			renderer:$.jqplot.PieRenderer,
			rendererOptions:{
				showDataLabels: true,
				sliceMargin: 4
			}
		},
		legend:{ show: true }     
	});
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/