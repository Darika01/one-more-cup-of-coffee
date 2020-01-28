import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useMainCharts from 'app/actions/Charts/MainCharts';
import { useStyles } from './styles';

export default function MainCharts() {
    const { TabValue, handleChangeTabValue, tabs } = useMainCharts();
    const classes = useStyles(useStyles);

    const setContent = () => {
        const ChartContent = tabs[TabValue].component;
        return <ChartContent />;
    };

    return (
        <Container fixed>
            <Paper elevation={1} className={classes.mainPaper}>
                <Tabs
                    value={TabValue}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    onChange={handleChangeTabValue}
                    aria-label="disabled tabs example"
                >
                    {tabs.map((tab, index) => {
                        return <Tab label={tab.tabLabel} key={index} />;
                    })}
                </Tabs>
                <div className={classes.content}>{setContent()}</div>
            </Paper>
        </Container>
    );
}
