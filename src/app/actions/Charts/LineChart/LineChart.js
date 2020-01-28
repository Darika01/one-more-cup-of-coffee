//@flow
import { useState, useEffect } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import SalesData from './SalesData';
import SalesData2 from './SalesData2';

function useLineChart() {
    const [Chart, setChart] = useState(null);
    const [Chart2, setChart2] = useState(null);

    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create('SalesChart', am4charts.XYChart);

        // Add data
        chart.data = SalesData;

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //dateAxis.renderer.grid.template.location = 0;
        //dateAxis.renderer.minGridDistance = 30;

        let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = 'Sales';

        let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.title.text = 'Market Days';
        valueAxis2.renderer.opposite = true;
        valueAxis2.renderer.grid.template.disabled = true;

        // Create series
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = 'sales1';
        series1.dataFields.dateX = 'date';
        series1.yAxis = valueAxis1;
        series1.name = 'Target Sales';
        series1.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = false;
        series1.columns.template.width = am4core.percent(40);

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = 'sales2';
        series2.dataFields.dateX = 'date';
        series2.yAxis = valueAxis1;
        series2.name = 'Actual Sales';
        series2.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
        series2.fill = chart.colors.getIndex(0).lighten(0.5);
        series2.strokeWidth = 0;
        series2.clustered = false;
        series2.toBack();

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = 'market1';
        series3.dataFields.dateX = 'date';
        series3.name = 'Market Days';
        series3.strokeWidth = 2;
        series3.tensionX = 0.7;
        series3.yAxis = valueAxis2;
        series3.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';

        let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
        bullet3.circle.radius = 3;
        bullet3.circle.strokeWidth = 2;
        bullet3.circle.fill = am4core.color('#fff');

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = 'market2';
        series4.dataFields.dateX = 'date';
        series4.name = 'Market Days ALL';
        series4.strokeWidth = 2;
        series4.tensionX = 0.7;
        series4.yAxis = valueAxis2;
        series4.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
        series4.stroke = chart.colors.getIndex(0).lighten(0.5);
        series4.strokeDasharray = '3,3';

        let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
        bullet4.circle.radius = 3;
        bullet4.circle.strokeWidth = 2;
        bullet4.circle.fill = am4core.color('#fff');

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = 'top';

        //cart2
        let chart2 = am4core.create('SalesChart2', am4charts.XYChart);

        // Add data
        chart2.data = SalesData2;

        // Create axes
        let dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
        //dateAxis.renderer.grid.template.location = 0;
        //dateAxis.renderer.minGridDistance = 30;

        let valueAxis11 = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis11.title.text = 'Sales';

        let valueAxis22 = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis22.title.text = 'Market Days';
        valueAxis22.renderer.opposite = true;
        valueAxis22.renderer.grid.template.disabled = true;

        // Create series
        let series11 = chart2.series.push(new am4charts.ColumnSeries());
        series11.dataFields.valueY = 'sales1';
        series11.dataFields.dateX = 'date';
        series11.yAxis = valueAxis11;
        series11.name = 'Target Sales';
        series11.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
        series11.fill = chart2.colors.getIndex(0);
        series11.strokeWidth = 0;
        series11.clustered = false;
        series11.columns.template.width = am4core.percent(40);

        let series22 = chart2.series.push(new am4charts.ColumnSeries());
        series22.dataFields.valueY = 'sales2';
        series22.dataFields.dateX = 'date';
        series22.yAxis = valueAxis11;
        series22.name = 'Actual Sales';
        series22.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
        series22.fill = chart2.colors.getIndex(0).lighten(0.5);
        series22.strokeWidth = 0;
        series22.clustered = false;
        series22.toBack();

        let series33 = chart2.series.push(new am4charts.LineSeries());
        series33.dataFields.valueY = 'market1';
        series33.dataFields.dateX = 'date';
        series33.name = 'Market Days';
        series33.strokeWidth = 2;
        series33.tensionX = 0.7;
        series33.yAxis = valueAxis22;
        series33.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';

        let bullet33 = series33.bullets.push(new am4charts.CircleBullet());
        bullet33.circle.radius = 3;
        bullet33.circle.strokeWidth = 2;
        bullet33.circle.fill = am4core.color('#fff');

        let series44 = chart2.series.push(new am4charts.LineSeries());
        series44.dataFields.valueY = 'market2';
        series44.dataFields.dateX = 'date';
        series44.name = 'Market Days ALL';
        series44.strokeWidth = 2;
        series44.tensionX = 0.7;
        series44.yAxis = valueAxis22;
        series44.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
        series44.stroke = chart2.colors.getIndex(0).lighten(0.5);
        series44.strokeDasharray = '3,3';

        let bullet44 = series44.bullets.push(new am4charts.CircleBullet());
        bullet44.circle.radius = 3;
        bullet44.circle.strokeWidth = 2;
        bullet44.circle.fill = am4core.color('#fff');

        // Add cursor
        chart2.cursor = new am4charts.XYCursor();

        // Add legend
        chart2.legend = new am4charts.Legend();
        chart2.legend.position = 'top';

        chart2.zoomOutButton = chart.zoomOutButton;

        // Add scrollbar
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart2.scrollbarX = chart.scrollbarX;

        chart.scrollbarX.series.push(series1);
        chart.scrollbarX.series.push(series3);

        chart2.scrollbarX.series.push(series11);
        chart2.scrollbarX.series.push(series33);

        // chart.scrollbarX.parent = chart.bottomAxesContainer;
        // chart2.scrollbarX.parent = chart.scrollbarX.parent;
        // scrollbarX.parent = chart2.bottomAxesContainer;

        setChart(chart);

        return () => {
            if (Chart !== null) {
                Chart.dispose();
            }
        };
    }, []);

    return {};
}

export default useLineChart;
