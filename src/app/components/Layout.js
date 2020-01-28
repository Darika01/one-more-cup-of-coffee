import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from './core/Navbar/Navbar';
import Footer from './core/Footer/Footer';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-h4': {
            [theme.breakpoints.only('xs')]: {
                fontSize: '1.8rem'
            }
        },
        position: 'relative'
    },
    appBarSpacer: theme.mixins.toolbar,
    layout: {
        minHeight: `calc(100vh - 84px)`,
        marginBottom: 120,
        backgroundColor: '#fdfdfd'
        // '& > div': {
        //     height: '100%'
        // }
    }
}));

export default function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <main className={classes.layout}>{props.children}</main>
            <Footer />
        </div>
    );
}
