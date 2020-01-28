import React from 'react';

import useLineChart from 'app/actions/Charts/LineChart/LineChart';

export default function LineChart() {
    const {} = useLineChart();

    return (
        <div>
            <div
                id="SalesChart"
                style={{ width: '100%', height: '500px' }}
            ></div>
            <div
                id="SalesChart2"
                style={{ width: '100%', height: '500px' }}
            ></div>
        </div>
    );
}
