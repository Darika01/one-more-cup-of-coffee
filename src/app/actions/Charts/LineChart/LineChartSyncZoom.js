//@flow
import { useState, useEffect } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { chartConfig, chartConfig2, chartConfig3 } from './datas';

function useLineChartSyncZoom() {
    const [Chart, setChart] = useState(null);
    const [Chart2, setChart2] = useState(null);

    const datas = [
        {
            date: '2012-07-22',
            value: 36
        },
        {
            date: '2012-07-23',
            value: 84
        },
        {
            date: '2012-07-24',
            value: 180
        },
        {
            date: '2012-07-25',
            value: 130
        },
        {
            date: '2012-07-26',
            value: 84
        },
        { date: '2012-07-27', value: 123 },
        {
            date: '2012-07-28',
            value: 100
        }
    ];
    const datas2 = [
        {
            date: '2012-07-22',
            value: 83
        },
        {
            date: '2012-07-23',
            value: 101
        },
        {
            date: '2012-07-24',
            value: 34
        },
        {
            date: '2012-07-25',
            value: 48
        },
        {
            date: '2012-07-26',
            value: 100
        },
        {
            date: '2012-07-27',
            value: 30
        },
        {
            date: '2012-07-28',
            value: 86
        }
    ];

    useEffect(() => {
        let charts = [];
        let dateAxises = [];

        // charts.push(am4core.makeChart('chartdiv', chartConfig));
        // charts.push(am4core.makeChart('chartdiv2', chartConfig2));
        // charts.push(am4core.makeChart('chartdiv3', chartConfig3));

        charts.push({
            chart: am4core.create('chartdiv', am4charts.XYChart),
            datas: datas,
            chartName: 'First chart',
            labelName: 'Some super values'
        });
        charts.push({
            chart: am4core.create('chartdiv2', am4charts.XYChart),
            datas: datas2,
            chartName: 'Second chart',
            labelName: 'Some extra values'
        });
        // let chart = am4core.create('chartdiv', am4charts.XYChart);

        // Add data

        charts.forEach(el => {
            let chart = el.chart;
            chart.data = el.datas;
            // dateAxises.push(chart.xAxes.push(new am4charts.DateAxis()));
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxises.push(dateAxis);

            //title
            let title = chart.titles.create();
            title.text = el.chartName;
            title.fontSize = 20;
            title.marginBottom = 20;

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'Value';

            // Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = 'value';
            series.dataFields.dateX = 'date';
            series.name = el.labelName;
            series.strokeWidth = 2;
            series.tensionX = 0.7;
            series.yAxis = valueAxis;
            series.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';

            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.radius = 3;
            bullet.circle.strokeWidth = 2;
            bullet.circle.fill = am4core.color('#fff');

            // Add cursor
            chart.cursor = new am4charts.XYCursor();

            // Add legend
            chart.legend = new am4charts.Legend();
            chart.legend.position = 'top';

            if (charts.indexOf(el) === 0) {
                // Add scrollbar
                chart.scrollbarX = new am4charts.XYChartScrollbar();
                chart.scrollbarX.parent = chart.bottomAxesContainer;

                chart.scrollbarX.series.push(series);

                // chart.events.on('ready', function() {
                //     dateAxis.zoomToDates(
                //         new Date('2012-07-27'),
                //         new Date('2012-07-28')
                //     );
                // });

                // chart.cursor.behavior = 'selectX';
                // chart.cursor.events.on('selectended', function(ev) {
                //     let range = ev.target.xRange;
                //     let axis = ev.target.chart.xAxes.getIndex(0);
                //     let from = axis.getPositionLabel(
                //         axis.toAxisPosition(range.start)
                //     );
                //     let to = axis.getPositionLabel(
                //         axis.toAxisPosition(range.end)
                //     );
                //     console.log(
                //         'range',
                //         range,
                //         'Selected from ' + from + ' to ' + to
                //     );
                // });
            }
            chart.events.on('ready', function() {
                dateAxis.zoomToDates(
                    new Date('2012-07-27'),
                    new Date('2012-07-28')
                );
            });
            setChart(chart);

            // function dateAxisChanged(ev) {
            //     console.log('DateAxis zoomed!', ev.target);
            //     let start = ev.target.minZoomed;
            //     let end = ev.target.maxZoomed;
            //     console.log('New range: ' + start + ' -- ' + end);
            // }
            // dateAxis.events.on('startchanged', dateAxisChanged);
            // dateAxis.events.on('endchanged', dateAxisChanged);

            function dateAxisChanged2(ev) {
                console.log('DateAxis2 zoomed!', ev.target);
                let start = ev.target.minZoomed;
                let end = ev.target.maxZoomed;
                console.log('New range2: ' + start + ' -- ' + end);
                syncZoom(ev, el);
            }

            dateAxis.events.on('selectionextremeschanged', dateAxisChanged2);

            // chart.cursor.events.on('cursorpositionchanged', function(ev) {
            //     console.log('x: ', ev.target.xPosition);
            //     console.log('y: ', ev.target.yPosition);
            // });
        });
        console.log(dateAxises);

        function syncZoom(ev, changedElIndex) {
            for (let i = 0; i < charts.length; i++) {
                if (changedElIndex !== i) {
                    console.log('object', dateAxises[i]);
                    dateAxises[i].zoomToDates(
                        ev.target.minZoomed,
                        ev.target.maxZoomed
                    );
                }
            }
        }

        // charts.forEach(el => {
        //     let chart = el.chart;
        //     function dateAxisCha.chartnged(ev) {
        //         console.log('DateAxis zoomed!');
        //     }

        //     dateAxis.events.on('startchanged', dateAxisChanged);
        //     dateAxis.events.on('endchanged', dateAxisChanged);
        // });

        // Add cursor

        // for (var x in charts) {
        //     charts[x].addListener('zoomed', syncZoom);
        //     charts[x].addListener('init', addCursorListeners);
        // }

        // function addCursorListeners(event) {
        //     event.chart.chartCursor.addListener('changed', handleCursorChange);
        //     event.chart.chartCursor.addListener(
        //         'onHideCursor',
        //         handleHideCursor
        //     );
        // }

        // function syncZoom(event) {
        //     for (x in charts) {
        //         if (charts[x].ignoreZoom) {
        //             charts[x].ignoreZoom = false;
        //         }
        //         if (event.chart != charts[x]) {
        //             charts[x].ignoreZoom = true;
        //             charts[x].zoomToDates(event.startDate, event.endDate);
        //         }
        //     }
        // }

        // function handleCursorChange(event) {
        //     for (var x in charts) {
        //         if (event.chart != charts[x]) {
        //             charts[x].chartCursor.syncWithCursor(
        //                 event.chart.chartCursor
        //             );
        //         }
        //     }
        // }

        // function handleHideCursor() {
        //     for (var x in charts) {
        //         if (charts[x].chartCursor.hideCursor) {
        //             charts[x].chartCursor.forceShow = false;
        //             charts[x].chartCursor.hideCursor(false);
        //         }
        //     }
        // }

        return () => {
            if (Chart !== null) {
                Chart.dispose();
            }
        };
    }, []);

    return {};
}

export default useLineChartSyncZoom;
