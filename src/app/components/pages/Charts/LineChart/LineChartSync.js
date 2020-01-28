import React from 'react';

import useLineChartSyncZoom from 'app/actions/Charts/LineChart/LineChartSyncZoom';

export default function LineChart() {
    // const {} = useLineChart();
    const {} = useLineChartSyncZoom();

    return (
        <div>
            <div id="chartdiv" style={{ width: '100%', height: '440px' }}></div>
            <div
                id="chartdiv2"
                style={{ width: '100%', height: '340px' }}
            ></div>
            <div id="chartdiv3"></div>
        </div>
    );
}
