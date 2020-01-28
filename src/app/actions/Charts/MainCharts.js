//@flow
import { useState, useEffect } from 'react';
import API from 'app/api';
import LineChart from 'app/components/pages/Charts/LineChart/LineChart';
import LineChartSync from 'app/components/pages/Charts/LineChart/LineChartSync';

function useMainCharts() {
    const [TabValue, setTabValue] = useState(0);

    const handleChangeTabValue = (event, newTabValue) => {
        setTabValue(newTabValue);
    };
    const tabs = [
        {
            component: LineChartSync,
            tabLabel: 'LineSync'
        },
        {
            component: LineChart,
            tabLabel: 'Line'
        }
    ];
    return {
        TabValue,
        handleChangeTabValue,
        tabs
    };
}

export default useMainCharts;
